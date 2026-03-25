"use client";
import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

export type MatchPair = {
  id: string;
  left: string;
  right: string;
};

interface PhysicsMagnetGameProps {
  pairs: MatchPair[];
  onComplete: () => void;
}

export default function PhysicsMagnetGame({ pairs, onComplete }: PhysicsMagnetGameProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);

  const [activePairs, setActivePairs] = useState<MatchPair[]>(pairs);
  
  const leftNodesRef = useRef<{ [id: string]: HTMLDivElement | null }>({});
  const rightNodesRef = useRef<{ [id: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (!sceneRef.current) return;

    const engine = Matter.Engine.create();
    engineRef.current = engine;
    const world = engine.world;

    world.gravity.y = 0;
    world.gravity.x = 0;

    const width = 800;
    const height = 500;

    const wallOpts = { isStatic: true, restitution: 1, render: { visible: false } };
    Matter.World.add(world, [
      Matter.Bodies.rectangle(width / 2, -50, width, 100, wallOpts),
      Matter.Bodies.rectangle(width / 2, height + 50, width, 100, wallOpts),
      Matter.Bodies.rectangle(-50, height / 2, 100, height, wallOpts),
      Matter.Bodies.rectangle(width + 50, height / 2, 100, height, wallOpts),
    ]);

    const leftBodies: Matter.Body[] = [];
    const rightBodies: Matter.Body[] = [];

    activePairs.forEach((pair) => {
      const lx = 100 + Math.random() * 200;
      const ly = 100 + Math.random() * 300;
      const leftBody = Matter.Bodies.rectangle(lx, ly, 100, 40, {
        restitution: 0.8,
        frictionAir: 0.05,
        label: `left_${pair.id}`,
      });
      // Létrehozunk egy egyedi mezőt a vizuális státusznak
      (leftBody as any).magnetState = "neutral";
      
      Matter.Body.setVelocity(leftBody, { x: (Math.random() - 0.5) * 4, y: (Math.random() - 0.5) * 4 });
      leftBodies.push(leftBody);

      const rx = 500 + Math.random() * 200;
      const ry = 100 + Math.random() * 300;
      const rightBody = Matter.Bodies.rectangle(rx, ry, 100, 40, {
        restitution: 0.8,
        frictionAir: 0.05,
        label: `right_${pair.id}`,
      });
      (rightBody as any).magnetState = "neutral";
      
      Matter.Body.setVelocity(rightBody, { x: (Math.random() - 0.5) * 4, y: (Math.random() - 0.5) * 4 });
      rightBodies.push(rightBody);
    });

    Matter.World.add(world, [...leftBodies, ...rightBodies]);

    // EGÉR LÉTREHOZÁSA ÉS SKÁLÁZÁSA (EZ JAVÍTJA MEG A MEGFOGÁST!)
    const mouse = Matter.Mouse.create(sceneRef.current);
    
    // Kikapcsoljuk az egérgörgő tiltását, hogy lehessen görgetni a weblapon
    mouse.element.removeEventListener("mousewheel", (mouse as any).mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", (mouse as any).mousewheel);

    const updateMouseScale = () => {
      if (sceneRef.current) {
        const rect = sceneRef.current.getBoundingClientRect();
        // Kiszámoljuk az arányt a 800x500 és a valós CSS méret között
        Matter.Mouse.setScale(mouse, { x: 800 / rect.width, y: 500 / rect.height });
      }
    };
    updateMouseScale();
    window.addEventListener("resize", updateMouseScale);

    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });
    Matter.World.add(world, mouseConstraint);

    // MÁGNESES LOGIKA
    Matter.Events.on(engine, "beforeUpdate", () => {
      // Alapértelmezett állapot visszaállítása minden frame-ben
      [...leftBodies, ...rightBodies].forEach(b => {
        (b as any).magnetState = "neutral";
      });

      leftBodies.forEach((lBody) => {
        rightBodies.forEach((rBody) => {
          const lId = lBody.label.split("_")[1];
          const rId = rBody.label.split("_")[1];

          const dx = rBody.position.x - lBody.position.x;
          const dy = rBody.position.y - lBody.position.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Megnövelt hatósugár (200px), hogy jobban érezhető legyen
          if (distance < 200 && distance > 0) {
            const forceX = dx / distance;
            const forceY = dy / distance;

            if (lId === rId) {
              // HELYES PÁR: Zöld szín és Vonzás
              (lBody as any).magnetState = "good";
              (rBody as any).magnetState = "good";
              
              const strength = 0.0006 * (200 - distance);
              Matter.Body.applyForce(lBody, lBody.position, { x: forceX * strength, y: forceY * strength });
              Matter.Body.applyForce(rBody, rBody.position, { x: -forceX * strength, y: -forceY * strength });

              // Ha összeértek
              if (distance < 50) {
                Matter.World.remove(world, lBody);
                Matter.World.remove(world, rBody);
                leftBodies.splice(leftBodies.indexOf(lBody), 1);
                rightBodies.splice(rightBodies.indexOf(rBody), 1);
                
                setActivePairs((prev) => {
                  const newPairs = prev.filter((p) => p.id !== lId);
                  if (newPairs.length === 0) {
                    setTimeout(onComplete, 600);
                  }
                  return newPairs;
                });
              }
            } else {
              // ROSSZ PÁR: Piros szín és ERŐS Taszítás
              // Csak akkor taszít, ha nagyon közel érnek (pl. 120px)
              if (distance < 120) {
                (lBody as any).magnetState = "bad";
                (rBody as any).magnetState = "bad";
                
                // Erősebb taszítás, hogy tényleg elrepüljenek egymástól
                const strength = 0.0015 * (120 - distance); 
                Matter.Body.applyForce(lBody, lBody.position, { x: -forceX * strength, y: -forceY * strength });
                Matter.Body.applyForce(rBody, rBody.position, { x: forceX * strength, y: forceY * strength });
              }
            }
          }
        });
      });
    });

    const runner = Matter.Runner.create();
    runnerRef.current = runner;
    Matter.Runner.run(runner, engine);

    // Szinkronizáció a DOM elemekkel
    Matter.Events.on(engine, "afterUpdate", () => {
      [...leftBodies, ...rightBodies].forEach((body) => {
        const [type, id] = body.label.split("_");
        const domNode = type === "left" ? leftNodesRef.current[id] : rightNodesRef.current[id];
        
        if (domNode && body.position) {
          const px = (body.position.x / width) * 100;
          const py = (body.position.y / height) * 100;
          domNode.style.left = `${px}%`;
          domNode.style.top = `${py}%`;
          domNode.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;

          // VIZUÁLIS VISSZAJELZÉS (Színváltás az interakció alapján)
          const state = (body as any).magnetState;
          if (state === "good") {
            domNode.style.backgroundColor = "#10B981"; // Emerald-500 (Zöld)
            domNode.style.borderColor = "#047857";
          } else if (state === "bad") {
            domNode.style.backgroundColor = "#EF4444"; // Red-500 (Piros)
            domNode.style.borderColor = "#B91C1C";
          } else {
            // Vissza az eredeti színre
            domNode.style.backgroundColor = type === "left" ? "#3B82F6" : "#D946EF";
            domNode.style.borderColor = type === "left" ? "#93C5FD" : "#F87171";
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

  return (
    <div className="w-full flex flex-col items-center select-none touch-none">
      {/* A szülő konténer kapta meg a cursor-grab osztályokat! */}
      <div 
        ref={sceneRef} 
        className="relative w-full max-w-2xl bg-indigo-950 rounded-xl overflow-hidden shadow-2xl border-4 border-indigo-500 cursor-grab active:cursor-grabbing"
        style={{ aspectRatio: "8/5" }}
      >
        {/* Bal oldali szavak - POINTER-EVENTS-NONE HOZZÁADVA! */}
        {activePairs.map((pair) => (
          <div
            key={`left_${pair.id}`}
            ref={(el) => { leftNodesRef.current[pair.id] = el; }}
            className="absolute flex items-center justify-center w-[100px] h-[40px] text-white font-bold rounded-l-2xl shadow-lg border-2 transition-colors duration-200 pointer-events-none"
            style={{ left: "-100%", top: "-100%" }}
          >
            {pair.left}
          </div>
        ))}

        {/* Jobb oldali szavak - POINTER-EVENTS-NONE HOZZÁADVA! */}
        {activePairs.map((pair) => (
          <div
            key={`right_${pair.id}`}
            ref={(el) => { rightNodesRef.current[pair.id] = el; }}
            className="absolute flex items-center justify-center w-[100px] h-[40px] text-white font-bold rounded-r-2xl shadow-lg border-2 transition-colors duration-200 pointer-events-none"
            style={{ left: "-100%", top: "-100%" }}
          >
            {pair.right}
          </div>
        ))}
      </div>
      <p className="mt-4 text-indigo-300 font-bold text-sm">
        Drag the words together! Green = Match, Red = Repel! 🧲
      </p>
    </div>
  );
}
