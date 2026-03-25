"use client";
import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

export type TargetDef = {
  id: string;
  text: string;
  isCorrect: boolean;
};

interface PhysicsSlingshotGameProps {
  question: string;
  targets: TargetDef[];
  onComplete: () => void;
}

export default function PhysicsSlingshotGame({ question, targets, onComplete }: PhysicsSlingshotGameProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);

  const [activeTargets, setActiveTargets] = useState<TargetDef[]>(targets);
  const targetNodesRef = useRef<{ [id: string]: HTMLDivElement | null }>({});
  const projectileNodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    const engine = Matter.Engine.create();
    engineRef.current = engine;
    const world = engine.world;

    // Normál gravitáció
    world.gravity.y = 1;

    const width = 800;
    const height = 500;

    // Falak létrehozása (a plafont kivéve, hogy kirepülhessen, ha mellélő)
    const wallOpts = { isStatic: true, render: { visible: false } };
    Matter.World.add(world, [
      Matter.Bodies.rectangle(-50, height / 2, 100, height, wallOpts), // Bal
      Matter.Bodies.rectangle(width + 50, height / 2, 100, height, wallOpts), // Jobb
      Matter.Bodies.rectangle(width / 2, height + 50, width, 100, wallOpts), // Padló
    ]);

    // 1. Célpontok (Aszteroidák) generálása a tetőn
    const targetBodies: Matter.Body[] = [];
    const spacing = width / (activeTargets.length + 1);
    
    activeTargets.forEach((target, index) => {
      const x = spacing * (index + 1);
      const y = 80 + Math.random() * 40; // Kicsit cikk-cakkos magasság

      const body = Matter.Bodies.circle(x, y, 40, {
        isStatic: true, // Nem esnek le
        isSensor: true, // Át lehet rajtuk repülni, de érzékelik az ütközést
        label: `target_${target.id}_${target.isCorrect}`,
      });
      targetBodies.push(body);
    });
    Matter.World.add(world, targetBodies);

    // 2. A kilövőállomás és a lövedék
    const anchorPoint = { x: width / 2, y: height - 100 };
    
    let projectile = Matter.Bodies.circle(anchorPoint.x, anchorPoint.y, 25, {
      restitution: 0.5,
      frictionAir: 0.02,
      density: 0.05,
      label: "projectile",
    });

    // A csúzli "gumija"
    let sling = Matter.Constraint.create({
      pointA: anchorPoint,
      bodyB: projectile,
      stiffness: 0.05, // Mennyire feszüljön (Angry Birds feeling)
      damping: 0.01,
      length: 10,
      render: { visible: false },
    });

    Matter.World.add(world, [projectile, sling]);

    // Egér vezérlés
    const mouse = Matter.Mouse.create(sceneRef.current);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });
    Matter.World.add(world, mouseConstraint);

    // 3. Kilövés érzékelése
    Matter.Events.on(engine, "afterUpdate", () => {
      // Ha a lövedék elhagyta a csúzlit (feljebb repült) és elengedtük az egeret
      if (projectile.position.y < anchorPoint.y - 30 && mouseConstraint.mouse.button === -1) {
        // Elvágjuk a kötelet!
        if (sling.bodyB) {
          sling.bodyB = null; 
        }
      }

      // Ha kirepült a képernyőről (mellélőtt), hozzunk létre egy újat!
      if (projectile.position.y < -100 || projectile.position.x < -100 || projectile.position.x > width + 100) {
        resetProjectile();
      }
    });

    const resetProjectile = () => {
      Matter.World.remove(world, projectile);
      projectile = Matter.Bodies.circle(anchorPoint.x, anchorPoint.y, 25, {
        restitution: 0.5,
        frictionAir: 0.02,
        density: 0.05,
        label: "projectile",
      });
      sling.bodyB = projectile;
      Matter.World.add(world, projectile);
    };

    // 4. Ütközés a célpontokkal
    Matter.Events.on(engine, "collisionStart", (event) => {
      event.pairs.forEach((pair) => {
        const bodyA = pair.bodyA;
        const bodyB = pair.bodyB;

        const checkHit = (proj: Matter.Body, tgt: Matter.Body) => {
          if (proj.label === "projectile" && tgt.label.startsWith("target_")) {
            const [, targetId, isCorrectStr] = tgt.label.split("_");
            const isCorrect = isCorrectStr === "true";

            if (isCorrect) {
              // TALÁLAT! Eltüntetjük a jó célpontot
              Matter.World.remove(world, tgt);
              // Kivesszük a UI-ból is, és vége a játéknak
              setActiveTargets((prev) => prev.filter((t) => t.id !== targetId));
              setTimeout(onComplete, 800);
            } else {
              // ROSSZ TALÁLAT! Csak visszapattan (nem tűnik el)
              Matter.Body.setVelocity(proj, { x: proj.velocity.x * -1, y: 5 }); 
              setTimeout(resetProjectile, 1000); // Kicsit később újratöltjük
            }
          }
        };

        checkHit(bodyA, bodyB);
        checkHit(bodyB, bodyA);
      });
    });

    const runner = Matter.Runner.create();
    runnerRef.current = runner;
    Matter.Runner.run(runner, engine);

    // Szinkronizáció a DOM elemekkel
    Matter.Events.on(engine, "afterUpdate", () => {
      // Célpontok frissítése
      targetBodies.forEach((body) => {
        const id = body.label.split("_")[1];
        const domNode = targetNodesRef.current[id];
        if (domNode && body.position) {
          const px = (body.position.x / width) * 100;
          const py = (body.position.y / height) * 100;
          domNode.style.left = `${px}%`;
          domNode.style.top = `${py}%`;
        }
      });

      // Lövedék frissítése
      if (projectileNodeRef.current && projectile.position) {
        const px = (projectile.position.x / width) * 100;
        const py = (projectile.position.y / height) * 100;
        projectileNodeRef.current.style.left = `${px}%`;
        projectileNodeRef.current.style.top = `${py}%`;
      }
    });

    return () => {
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center select-none touch-none">
      {/* Kérdés kijelzése */}
      <div className="mb-4 text-center">
        <h3 className="text-xl font-black text-slate-100">{question}</h3>
      </div>

      <div 
        ref={sceneRef} 
        className="relative w-full max-w-2xl bg-slate-950 rounded-xl overflow-hidden shadow-2xl border-4 border-slate-800"
        style={{ aspectRatio: "8/5" }}
      >
        {/* Aszteroidák (Válaszok) */}
        {activeTargets.map((target) => (
          <div
            key={target.id}
            ref={(el) => { targetNodesRef.current[target.id] = el; }}
            className="absolute flex items-center justify-center w-[80px] h-[80px] bg-amber-600 text-white font-bold rounded-full shadow-[0_0_15px_rgba(217,119,6,0.5)] border-4 border-amber-400"
            style={{ left: "-100%", top: "-100%", transform: "translate(-50%, -50%)" }}
          >
            <span className="text-center text-sm drop-shadow-md">{target.text}</span>
          </div>
        ))}

        {/* Kilövőállomás bázisa (vizuális elem csak) */}
        <div className="absolute left-1/2 bottom-0 w-8 h-24 bg-slate-600 rounded-t-lg -translate-x-1/2 opacity-50"></div>

        {/* A lövedék (Űrhajó) */}
        <div
          ref={projectileNodeRef}
          className="absolute flex items-center justify-center w-[50px] h-[50px] bg-rose-500 text-white text-2xl rounded-full shadow-[0_0_20px_rgba(225,29,72,0.8)] border-2 border-rose-300 cursor-grab active:cursor-grabbing z-10"
          style={{ left: "-100%", top: "-100%", transform: "translate(-50%, -50%)" }}
        >
          🚀
        </div>
      </div>
      <p className="mt-4 text-rose-300 font-bold text-sm">
        Drag the rocket down and release to shoot the correct asteroid! 🎯
      </p>
    </div>
  );
}
