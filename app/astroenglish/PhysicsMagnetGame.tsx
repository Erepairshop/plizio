"use client";
import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

export type MatchPair = {
  id: string;
  left: string;  // pl. az előtag (un-)
  right: string; // pl. a szótő (happy)
};

interface PhysicsMagnetGameProps {
  pairs: MatchPair[];
  onComplete: () => void;
}

export default function PhysicsMagnetGame({ pairs, onComplete }: PhysicsMagnetGameProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);

  // Állapot a még pályán lévő (párosítatlan) elemekhez
  const [activePairs, setActivePairs] = useState<MatchPair[]>(pairs);
  
  // A DOM elemek referenciái a sinkronizáláshoz
  const leftNodesRef = useRef<{ [id: string]: HTMLDivElement | null }>({});
  const rightNodesRef = useRef<{ [id: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (!sceneRef.current) return;

    const engine = Matter.Engine.create();
    engineRef.current = engine;
    const world = engine.world;

    // SÚLYTALANSÁG! Az űrben lebegnek a szavak
    world.gravity.y = 0;
    world.gravity.x = 0;

    const width = 800;
    const height = 500;

    // Falak létrehozása (hogy ne repüljenek ki a képernyőről), nagy visszapattanással (restitution)
    const wallOpts = { isStatic: true, restitution: 1, render: { visible: false } };
    Matter.World.add(world, [
      Matter.Bodies.rectangle(width / 2, -50, width, 100, wallOpts),
      Matter.Bodies.rectangle(width / 2, height + 50, width, 100, wallOpts),
      Matter.Bodies.rectangle(-50, height / 2, 100, height, wallOpts),
      Matter.Bodies.rectangle(width + 50, height / 2, 100, height, wallOpts),
    ]);

    const leftBodies: Matter.Body[] = [];
    const rightBodies: Matter.Body[] = [];

    // Dobozok (szavak) generálása
    activePairs.forEach((pair) => {
      // Bal oldali elemek generálása a bal térfélen
      const lx = 100 + Math.random() * 200;
      const ly = 100 + Math.random() * 300;
      const leftBody = Matter.Bodies.rectangle(lx, ly, 100, 40, {
        restitution: 0.8,
        frictionAir: 0.05, // Enyhe légellenállás, hogy ne pörögjenek a végtelenségig
        label: `left_${pair.id}`,
      });
      
      // Kezdeti lökés, hogy mozogjanak
      Matter.Body.setVelocity(leftBody, { x: (Math.random() - 0.5) * 4, y: (Math.random() - 0.5) * 4 });
      leftBodies.push(leftBody);

      // Jobb oldali elemek generálása a jobb térfélen
      const rx = 500 + Math.random() * 200;
      const ry = 100 + Math.random() * 300;
      const rightBody = Matter.Bodies.rectangle(rx, ry, 100, 40, {
        restitution: 0.8,
        frictionAir: 0.05,
        label: `right_${pair.id}`,
      });
      
      Matter.Body.setVelocity(rightBody, { x: (Math.random() - 0.5) * 4, y: (Math.random() - 0.5) * 4 });
      rightBodies.push(rightBody);
    });

    Matter.World.add(world, [...leftBodies, ...rightBodies]);

    // Egér vezérlés
    const mouse = Matter.Mouse.create(sceneRef.current);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });
    Matter.World.add(world, mouseConstraint);

    // MÁGNESES LOGIKA: Minden frissítés (frame) előtt kiszámoljuk az erőket
    Matter.Events.on(engine, "beforeUpdate", () => {
      leftBodies.forEach((lBody) => {
        rightBodies.forEach((rBody) => {
          // Kiszedjük az ID-kat a címkéből
          const lId = lBody.label.split("_")[1];
          const rId = rBody.label.split("_")[1];

          // Távolság kiszámítása a két test között (Pitagorasz-tétel)
          const dx = rBody.position.x - lBody.position.x;
          const dy = rBody.position.y - lBody.position.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Ha elég közel vannak egymáshoz (mágneses mező hatósugara: 150px)
          if (distance < 150 && distance > 0) {
            // Normalizáljuk a vektort (irány)
            const forceX = dx / distance;
            const forceY = dy / distance;

            if (lId === rId) {
              // HELYES PÁR: Vonzás (Attraction)
              const strength = 0.0005 * (150 - distance); // Minél közelebb, annál erősebb
              Matter.Body.applyForce(lBody, lBody.position, { x: forceX * strength, y: forceY * strength });
              Matter.Body.applyForce(rBody, rBody.position, { x: -forceX * strength, y: -forceY * strength });

              // Ha "összecsapódtak" (nagyon közel vannak), akkor eltüntetjük őket
              if (distance < 45) {
                Matter.World.remove(world, lBody);
                Matter.World.remove(world, rBody);
                // Kivesszük őket a tömbökből, hogy ne számoljunk velük tovább
                leftBodies.splice(leftBodies.indexOf(lBody), 1);
                rightBodies.splice(rightBodies.indexOf(rBody), 1);
                
                // Frissítjük a React UI-t
                setActivePairs((prev) => {
                  const newPairs = prev.filter((p) => p.id !== lId);
                  if (newPairs.length === 0) {
                    setTimeout(onComplete, 600); // Ha minden pár kész, nyertünk!
                  }
                  return newPairs;
                });
              }
            } else {
              // ROSSZ PÁR: Taszítás (Repulsion)
              const strength = 0.0008 * (150 - distance); 
              // Ellentétes erőt alkalmazunk, hogy ellökjék egymást
              Matter.Body.applyForce(lBody, lBody.position, { x: -forceX * strength, y: -forceY * strength });
              Matter.Body.applyForce(rBody, rBody.position, { x: forceX * strength, y: forceY * strength });
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
          // Enyhe forgás a fizika alapján
          domNode.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
        }
      });
    });

    return () => {
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center select-none touch-none">
      <div 
        ref={sceneRef} 
        className="relative w-full max-w-2xl bg-indigo-950 rounded-xl overflow-hidden shadow-2xl border-4 border-indigo-500"
        style={{ aspectRatio: "8/5" }}
      >
        {/* Bal oldali szavak (pl. kék) */}
        {activePairs.map((pair) => (
          <div
            key={`left_${pair.id}`}
            ref={(el) => { leftNodesRef.current[pair.id] = el; }}
            className="absolute flex items-center justify-center w-[100px] h-[40px] bg-blue-500 text-white font-bold rounded-l-2xl shadow-lg border-2 border-blue-300 cursor-grab active:cursor-grabbing"
            style={{ left: "-100%", top: "-100%" }}
          >
            {pair.left}
          </div>
        ))}

        {/* Jobb oldali szavak (pl. lila) */}
        {activePairs.map((pair) => (
          <div
            key={`right_${pair.id}`}
            ref={(el) => { rightNodesRef.current[pair.id] = el; }}
            className="absolute flex items-center justify-center w-[100px] h-[40px] bg-fuchsia-500 text-white font-bold rounded-r-2xl shadow-lg border-2 border-fuchsia-300 cursor-grab active:cursor-grabbing"
            style={{ left: "-100%", top: "-100%" }}
          >
            {pair.right}
          </div>
        ))}
      </div>
      <p className="mt-4 text-indigo-300 font-bold text-sm">
        Drag the words together! Correct pairs attract, wrong pairs repel! 🧲
      </p>
    </div>
  );
}
