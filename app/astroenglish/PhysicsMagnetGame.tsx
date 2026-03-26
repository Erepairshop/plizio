"use client";
import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

export type BucketDef = {
  id: string;
  label: string;
  color?: string;
};

export type ItemDef = {
  id: string;
  text: string;
  bucketId: string;
};

interface PhysicsDropGameProps {
  buckets: BucketDef[];
  items: ItemDef[];
  onComplete: () => void;
}

export default function PhysicsDropGame({ buckets, items, onComplete }: PhysicsDropGameProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  
  const [activeItems, setActiveItems] = useState<ItemDef[]>(items);
  const itemNodesRef = useRef<{ [id: string]: HTMLDivElement | null }>({});

  const WORLD_W = 800;
  const WORLD_H = 500;
  const BOX_W = 160; 
  const BOX_H = 50;

  useEffect(() => {
    if (!sceneRef.current) return;

    const engine = Matter.Engine.create();
    engineRef.current = engine;
    const world = engine.world;

    // Falak (magas plafon, hogy ne repüljenek ki végleg, szilárd padló)
    const wallOptions = { isStatic: true, render: { visible: false } };
    Matter.World.add(world, [
      Matter.Bodies.rectangle(WORLD_W / 2, -300, WORLD_W, 100, wallOptions), // Plafon
      Matter.Bodies.rectangle(WORLD_W / 2, WORLD_H + 50, WORLD_W * 2, 100, wallOptions), // Padló
      Matter.Bodies.rectangle(-50, WORLD_H / 2, 100, WORLD_H * 2, wallOptions), // Bal
      Matter.Bodies.rectangle(WORLD_W + 50, WORLD_H / 2, 100, WORLD_H * 2, wallOptions), // Jobb
    ]);

    // 1. SZILÁRD VÖDRÖK LÉTREHOZÁSA
    const bucketWidth = WORLD_W / buckets.length;
    
    buckets.forEach((bucket, index) => {
      const x = index * bucketWidth + bucketWidth / 2;
      const y = WORLD_H - 40;
      
      // isSensor: false -> Most már rá tudnak esni a szilárd vödörre!
      const sensor = Matter.Bodies.rectangle(x, y, bucketWidth, 80, {
        isStatic: true,
        isSensor: false, 
        label: "bucket",
        plugin: { bucketId: bucket.id } // Biztonságos adattárolás!
      });
      Matter.World.add(world, sensor);
      
      // Elválasztó falak a vödrök közé
      if (index > 0) {
        Matter.World.add(world, 
          Matter.Bodies.rectangle(index * bucketWidth, WORLD_H - 60, 20, 120, { isStatic: true })
        );
      }
    });

    // 2. SZAVAK (DOBOZOK) LÉTREHOZÁSA
    const itemBodies: Matter.Body[] = [];
    activeItems.forEach((item) => {
      const x = 100 + Math.random() * (WORLD_W - 200);
      const y = 20 + Math.random() * 80;
      
      const body = Matter.Bodies.rectangle(x, y, BOX_W, BOX_H, {
        restitution: 0.5,
        friction: 0.2,
        label: "item",
        plugin: { 
          id: item.id, 
          bucketId: item.bucketId,
          matchState: "neutral" // vizuális állapottároló
        }
      });
      itemBodies.push(body);
    });
    Matter.World.add(world, itemBodies);

    // 3. EGÉR SKÁLÁZÁS (HOGY MOBILON IS MEGFOGHASD)
    const mouse = Matter.Mouse.create(sceneRef.current);
    mouse.element.removeEventListener("mousewheel", (mouse as any).mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", (mouse as any).mousewheel);

    const updateMouseScale = () => {
      if (sceneRef.current) {
        const rect = sceneRef.current.getBoundingClientRect();
        Matter.Mouse.setScale(mouse, { x: WORLD_W / rect.width, y: WORLD_H / rect.height });
      }
    };
    updateMouseScale();
    window.addEventListener("resize", updateMouseScale);

    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });
    Matter.World.add(world, mouseConstraint);

    // 4. PONTOS ÜTKÖZÉSDETEKTÁLÁS (Nincs több string-darabolás!)
    Matter.Events.on(engine, "collisionStart", (event) => {
      event.pairs.forEach((pair) => {
        const bodyA = pair.bodyA;
        const bodyB = pair.bodyB;

        const itemBody = bodyA.label === "item" ? bodyA : (bodyB.label === "item" ? bodyB : null);
        const bucketBody = bodyA.label === "bucket" ? bodyA : (bodyB.label === "bucket" ? bodyB : null);

        if (itemBody && bucketBody) {
          // Ha épp fogjuk az egeret, ne történjen semmi, várjuk meg míg elengedi
          if (mouseConstraint.body === itemBody) return;

          const expectedBucketId = itemBody.plugin.bucketId;
          const actualBucketId = bucketBody.plugin.bucketId;

          if (expectedBucketId === actualBucketId) {
            // HELYES VÖDÖR!
            itemBody.plugin.matchState = "correct";
            
            // Kivesszük a fizikából és a frissítési ciklusból
            Matter.World.remove(world, itemBody);
            const index = itemBodies.indexOf(itemBody);
            if (index > -1) itemBodies.splice(index, 1);

            // Kivesszük a React állapotból, és ellenőrizzük a győzelmet
            setActiveItems((prev) => {
              const newItems = prev.filter((i) => i.id !== itemBody.plugin.id);
              if (newItems.length === 0) {
                setTimeout(onComplete, 500); // GYŐZELEM!
              }
              return newItems;
            });
          } else {
            // ROSSZ VÖDÖR!
            itemBody.plugin.matchState = "wrong";
            // Ellökjük felfelé
            Matter.Body.setVelocity(itemBody, { x: (Math.random() - 0.5) * 8, y: -20 });
            
            setTimeout(() => {
              if (itemBody) itemBody.plugin.matchState = "neutral";
            }, 1000);
          }
        }
      });
    });

    const runner = Matter.Runner.create();
    runnerRef.current = runner;
    Matter.Runner.run(runner, engine);

    // 5. SZINKRONIZÁCIÓ A HTML ELEMEKKEL
    Matter.Events.on(engine, "afterUpdate", () => {
      itemBodies.forEach((body) => {
        const id = body.plugin.id;
        const domNode = itemNodesRef.current[id];
        
        if (domNode && body.position) {
          const px = (body.position.x / WORLD_W) * 100;
          const py = (body.position.y / WORLD_H) * 100;
          domNode.style.left = `${px}%`;
          domNode.style.top = `${py}%`;
          domNode.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;

          const state = body.plugin.matchState;
          if (state === "correct") {
            domNode.style.backgroundColor = "#10B981"; // Zöld
            domNode.style.borderColor = "#047857";
          } else if (state === "wrong") {
            domNode.style.backgroundColor = "#EF4444"; // Piros
            domNode.style.borderColor = "#B91C1C";
          } else {
            domNode.style.backgroundColor = "#0EA5E9"; // Kék
            domNode.style.borderColor = "#0369A1";
          }
        }
      });
    });

    return () => {
      window.removeEventListener("resize", updateMouseScale);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
    };
  }, []);

  const boxWidthPercent = (BOX_W / WORLD_W) * 100;
  const boxHeightPercent = (BOX_H / WORLD_H) * 100;

  return (
    <div className="w-full flex flex-col items-center select-none touch-none">
      <div 
        ref={sceneRef} 
        className="relative w-full max-w-2xl bg-slate-900 rounded-xl overflow-hidden shadow-2xl border-4 border-slate-700 cursor-grab active:cursor-grabbing"
        style={{ aspectRatio: "8/5" }}
      >
        {/* Vödrök a háttérben */}
        <div className="absolute bottom-0 w-full h-[80px] flex pointer-events-none">
          {buckets.map((bucket, i) => (
            <div 
              key={bucket.id} 
              className="flex-1 border-t-4 border-slate-600 border-x border-slate-700/50 flex items-center justify-center bg-slate-800/80"
            >
              <span className="text-slate-300 font-black text-[10px] md:text-sm tracking-widest uppercase opacity-70 text-center px-2">
                {bucket.label}
              </span>
            </div>
          ))}
        </div>

        {/* Fizikai Szavak (POINTER-EVENTS-NONE kötelező!) */}
        {activeItems.map((item) => (
          <div
            key={item.id}
            ref={(el) => { itemNodesRef.current[item.id] = el; }}
            className="absolute flex items-center justify-center text-white font-bold rounded-md shadow-lg border-b-4 transition-colors duration-300 pointer-events-none p-2"
            style={{ 
              width: `${boxWidthPercent}%`, 
              height: `${boxHeightPercent}%`, 
              left: "-100%", top: "-100%",
              fontSize: "clamp(0.6rem, 2vw, 1rem)",
              lineHeight: "1.1",
              textAlign: "center"
            }}
          >
            {item.text}
          </div>
        ))}
      </div>
      <p className="mt-4 text-slate-400 font-bold text-sm text-center">
        Drag and drop the blocks! Wrong buckets will reject them! 🪣
      </p>
    </div>
  );
}
