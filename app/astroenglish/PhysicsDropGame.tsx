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
  
  // React állapot a még pályán lévő szavak követésére
  const [activeItems, setActiveItems] = useState<ItemDef[]>(items);
  // Refek a DOM elemekhez, hogy szinkronizáljuk őket a fizikával
  const itemNodesRef = useRef<{ [id: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (!sceneRef.current) return;

    // 1. Fizikai motor inicializálása
    const engine = Matter.Engine.create();
    engineRef.current = engine;
    const world = engine.world;

    // A pálya méretei (belső felbontás, a CSS fogja méretezni)
    const width = 800;
    const height = 500;

    // 2. Falak létrehozása (láthatatlan határok)
    const wallOptions = { isStatic: true, render: { visible: false } };
    Matter.World.add(world, [
      Matter.Bodies.rectangle(width / 2, -50, width, 100, wallOptions), // Plafon
      Matter.Bodies.rectangle(width / 2, height + 50, width, 100, wallOptions), // Padló (végső leesés ellen)
      Matter.Bodies.rectangle(-50, height / 2, 100, height, wallOptions), // Bal fal
      Matter.Bodies.rectangle(width + 50, height / 2, 100, height, wallOptions), // Jobb fal
    ]);

    // 3. Vödrök (Szenzorok) létrehozása az alján
    const bucketWidth = width / buckets.length;
    const bucketBodies: Matter.Body[] = [];

    buckets.forEach((bucket, index) => {
      const x = index * bucketWidth + bucketWidth / 2;
      const y = height - 40;
      
      // Maga a vödör egy "szenzor" (át lehet rajta esni, de érzékeli az ütközést)
      const sensor = Matter.Bodies.rectangle(x, y, bucketWidth - 20, 80, {
        isStatic: true,
        isSensor: true,
        label: `bucket_${bucket.id}`,
      });
      bucketBodies.push(sensor);
      
      // Fizikai "elválasztó falak" a vödrök közé, hogy bepattanjanak a szavak
      if (index > 0) {
        Matter.World.add(world, 
          Matter.Bodies.rectangle(index * bucketWidth, height - 60, 20, 120, { isStatic: true })
        );
      }
    });
    Matter.World.add(world, bucketBodies);

    // 4. Szavak (Dobozok) létrehozása fentről bedobva
    const itemBodies: Matter.Body[] = [];
    activeItems.forEach((item, index) => {
      const x = 100 + Math.random() * (width - 200); // Random X pozíció
      const y = 50 + Math.random() * 100; // Fent
      
      const body = Matter.Bodies.rectangle(x, y, 120, 40, {
        restitution: 0.6, // Visszapattanás
        friction: 0.1,
        label: `item_${item.id}_${item.bucketId}`,
      });
      itemBodies.push(body);
    });
    Matter.World.add(world, itemBodies);

    // 5. Egér / Érintés vezérlés
    const mouse = Matter.Mouse.create(sceneRef.current);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });
    Matter.World.add(world, mouseConstraint);

    // 6. Ütközések figyelése (Szó beleesik a vödörbe)
    Matter.Events.on(engine, "collisionStart", (event) => {
      event.pairs.forEach((pair) => {
        const bodyA = pair.bodyA;
        const bodyB = pair.bodyB;

        const checkMatch = (itemBody: Matter.Body, bucketBody: Matter.Body) => {
          if (itemBody.label.startsWith("item_") && bucketBody.label.startsWith("bucket_")) {
            const [, itemId, expectedBucketId] = itemBody.label.split("_");
            const actualBucketId = bucketBody.label.split("_")[1];

            if (expectedBucketId === actualBucketId) {
              // HELYES! Eltávolítjuk a fizikai testet
              Matter.World.remove(world, itemBody);
              // Eltávolítjuk a React állapotból is
              setActiveItems((prev) => {
                const newItems = prev.filter((i) => i.id !== itemId);
                if (newItems.length === 0) {
                  setTimeout(onComplete, 500); // Ha elfogyott, kész!
                }
                return newItems;
              });
            } else {
              // ROSSZ VÖDÖR! Kilökjük a szót (felfelé irányuló erő)
              Matter.Body.applyForce(itemBody, itemBody.position, { x: (Math.random() - 0.5) * 0.05, y: -0.15 });
            }
          }
        };

        checkMatch(bodyA, bodyB);
        checkMatch(bodyB, bodyA);
      });
    });

    // 7. Render Ciklus: A fizikai testek pozíciójának átmásolása a HTML elemekre
    const runner = Matter.Runner.create();
    runnerRef.current = runner;
    Matter.Runner.run(runner, engine);

    Matter.Events.on(engine, "afterUpdate", () => {
      itemBodies.forEach((body) => {
        // Kiszedjük az ID-t a címkéből: "item_XYZ_bucket"
        const id = body.label.split("_")[1];
        const domNode = itemNodesRef.current[id];
        if (domNode && body.position) {
          // Százalékos pozicionálás, hogy reszponzív legyen
          const px = (body.position.x / width) * 100;
          const py = (body.position.y / height) * 100;
          domNode.style.left = `${px}%`;
          domNode.style.top = `${py}%`;
          domNode.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
        }
      });
    });

    // CLEANUP
    return () => {
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
    };
  }, []); // Csak egyszer fut le

  return (
    <div className="w-full flex flex-col items-center select-none touch-none">
      <div 
        ref={sceneRef} 
        className="relative w-full max-w-2xl bg-slate-900 rounded-xl overflow-hidden shadow-2xl border-4 border-slate-700"
        style={{ aspectRatio: "8/5" }}
      >
        {/* Vödrök renderelése az alján */}
        <div className="absolute bottom-0 w-full h-[80px] flex">
          {buckets.map((bucket, i) => (
            <div 
              key={bucket.id} 
              className="flex-1 border-t-4 border-slate-600 border-x border-slate-700/50 flex items-center justify-center bg-slate-800/80"
            >
              <span className="text-white font-bold text-sm tracking-wider uppercase opacity-50">
                {bucket.label}
              </span>
            </div>
          ))}
        </div>

        {/* Fizikai Szavak renderelése */}
        {activeItems.map((item) => (
          <div
            key={item.id}
            ref={(el) => { itemNodesRef.current[item.id] = el; }}
            className="absolute flex items-center justify-center w-[120px] h-[40px] bg-sky-500 text-white font-black rounded-lg shadow-lg border-b-4 border-sky-700 cursor-grab active:cursor-grabbing hover:bg-sky-400 transition-colors"
            style={{ 
              // Kezdetben eltüntetjük a képernyőről, a motor rögtön beállítja
              left: "-100%", top: "-100%", 
              // Nem engedjük a sima CSS transition-t a pozícióra, mert a Matter.js kezeli!
              transitionProperty: "background-color" 
            }}
          >
            {item.text}
          </div>
        ))}
      </div>
      <p className="mt-4 text-slate-400 font-bold text-sm">Drag and drop the blocks into the correct zones!</p>
    </div>
  );
}
