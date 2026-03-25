"use client";
import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

export type WordBlock = {
  id: string;
  text: string;
  index: number; // A helyes sorrend (0, 1, 2...)
};

interface PhysicsStackerGameProps {
  sentence: WordBlock[]; // A teljes mondat helyes sorrendben
  onComplete: () => void;
}

export default function PhysicsStackerGame({ sentence, onComplete }: PhysicsStackerGameProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);

  // Összekeverjük a szavakat a kezdéshez
  const [shuffledWords] = useState<WordBlock[]>(() => 
    [...sentence].sort(() => Math.random() - 0.5)
  );
  
  const wordNodesRef = useRef<{ [id: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (!sceneRef.current) return;

    const engine = Matter.Engine.create();
    engineRef.current = engine;
    const world = engine.world;

    // Erős gravitáció, hogy nehéznek érezzük a blokkokat
    world.gravity.y = 1.2;

    const width = 800;
    const height = 500;

    // 1. Padló és Falak (Nagy súrlódással, hogy ne csússzon el a torony alapja)
    const groundOpts = { isStatic: true, friction: 1, render: { visible: false } };
    const wallOpts = { isStatic: true, render: { visible: false } };
    
    // Egy kis "platform" a toronyépítéshez középen
    const ground = Matter.Bodies.rectangle(width / 2, height - 20, 300, 40, { 
      isStatic: true, friction: 1, label: "ground" 
    });
    
    Matter.World.add(world, [
      ground,
      Matter.Bodies.rectangle(-50, height / 2, 100, height, wallOpts), // Bal
      Matter.Bodies.rectangle(width + 50, height / 2, 100, height, wallOpts), // Jobb
      Matter.Bodies.rectangle(width / 2, height + 50, width, 100, wallOpts), // Padló (végső leesés ellen)
    ]);

    // 2. Szó-blokkok generálása (A képernyő két oldalára szórva)
    const wordBodies: Matter.Body[] = [];
    const blockWidth = 150;
    const blockHeight = 50;

    shuffledWords.forEach((word, i) => {
      // Bal vagy jobb oldalra szórjuk őket
      const x = i % 2 === 0 ? 100 + Math.random() * 100 : width - 200 + Math.random() * 100;
      const y = height - 100 - i * 20; // Egymás felett kicsivel

      const body = Matter.Bodies.rectangle(x, y, blockWidth, blockHeight, {
        restitution: 0.1, // Ne pattogjanak
        friction: 0.8,    // Alapból jó súrlódás
        frictionStatic: 1,
        density: 0.01,
        label: `word_${word.id}_${word.index}`, // Label: word_ID_HELYESINDEX
      });
      
      // Egyedi tulajdonság a motoron belül a státusz követésére
      (body as any).isCorrectInStack = false;
      wordBodies.push(body);
    });
    Matter.World.add(world, wordBodies);

    // 3. Egér vezérlés
    const mouse = Matter.Mouse.create(sceneRef.current);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });
    Matter.World.add(world, mouseConstraint);

    // 4. NYELVTANI FIZIKA LOGIKA (Ütközésdetektálás)
    Matter.Events.on(engine, "collisionActive", (event) => {
      event.pairs.forEach((pair) => {
        const bodyA = pair.bodyA;
        const bodyB = pair.bodyB;

        // Függvény a blokkok nyelvtani ellenőrzésére
        const checkStack = (topBody: Matter.Body, bottomBody: Matter.Body) => {
          if (topBody.label.startsWith("word_") && (bottomBody.label.startsWith("word_") || bottomBody.label === "ground")) {
            
            // Ha a felső blokkot épp fogja a gyerek, ne bántsuk a fizikáját
            if (mouseConstraint.body === topBody) return;

            const [, topId, topIndexStr] = topBody.label.split("_");
            const topIndex = parseInt(topIndexStr);

            // SCENARIO A: A legalsó szó (Index 0) a földre kerül
            if (bottomBody.label === "ground") {
              if (topIndex === 0) {
                // Helyes alap! Stabilizáljuk.
                topBody.friction = 1;
                (topBody as any).isCorrectInStack = true;
              } else if (topIndex > 0) {
                // ROSSZ ALAP! Csúszóssá tesszük, hogy leessen.
                topBody.friction = 0;
                topBody.frictionStatic = 0;
                (topBody as any).isCorrectInStack = false;
                // Egy kis oldalirányú lökés
                Matter.Body.applyForce(topBody, topBody.position, { x: 0.02, y: 0 });
              }
              return;
            }

            // SCENARIO B: Szót rakunk szóra
            const [, bottomId, bottomIndexStr] = bottomBody.label.split("_");
            const bottomIndex = parseInt(bottomIndexStr);
            const isBottomCorrect = (bottomBody as any).isCorrectInStack;

            // Ha az alsó blokk jó helyen van, ÉS a felső a következő a sorban
            if (isBottomCorrect && topIndex === bottomIndex + 1) {
              // HELYES SORREND! Stabil torony.
              topBody.friction = 1;
              (topBody as any).isCorrectInStack = true;
            } else if (topIndex > 0) {
              // ROSSZ SORREND (vagy az alatta lévő is rossz)! Összeomlás.
              topBody.friction = 0;
              topBody.frictionStatic = 0;
              (topBody as any).isCorrectInStack = false;
              // Ellökjük, hogy leessen
              Matter.Body.applyForce(topBody, topBody.position, { x: (Math.random() - 0.5) * 0.03, y: 0 });
            }
          }
        };

        // Kiderítjük melyik van felül (kisebb Y koordináta)
        if (bodyA.position.y < bodyB.position.y) {
          checkStack(bodyA, bodyB);
        } else {
          checkStack(bodyB, bodyA);
        }
      });
    });

    // Győzelem ellenőrzése (minden frame után)
    Matter.Events.on(engine, "afterUpdate", () => {
      // Megszámoljuk hány blokk van helyesen a toronyban
      const correctCount = wordBodies.filter((body) => (body as any).isCorrectInStack).length;
      
      // Ha az összes szó a helyén van
      if (correctCount === sentence.length) {
        // Ellenőrizzük, hogy stabil-e a torony (alig mozog)
        const totalVelocity = wordBodies.reduce((sum, body) => sum + body.speed, 0);
        if (totalVelocity < 0.5) {
          // GYŐZELEM!
          // Kikapcsoljuk a fizikát a blokkokon, hogy ne dőljenek el a végén
          wordBodies.forEach(body => Matter.Body.setStatic(body, true));
          setTimeout(onComplete, 1000);
        }
      }
    });

    const runner = Matter.Runner.create();
    runnerRef.current = runner;
    Matter.Runner.run(runner, engine);

    // Szinkronizáció a DOM elemekkel
    Matter.Events.on(engine, "afterUpdate", () => {
      wordBodies.forEach((body) => {
        const id = body.label.split("_")[1];
        const domNode = wordNodesRef.current[id];
        if (domNode && body.position) {
          const px = (body.position.x / width) * 100;
          const py = (body.position.y / height) * 100;
          domNode.style.left = `${px}%`;
          domNode.style.top = `${py}%`;
          // Forgás szinkronizálása
          domNode.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
          
          // Vizuális visszajelzés: ha csúszós (rossz), pirosabb
          if (body.friction === 0 && (body.label.split('_')[2] !== '0' || body.position.y < height - 100)) {
            domNode.style.backgroundColor = "#ef4444"; // red-500
            domNode.style.borderColor = "#b91c1c";
          } else if ((body as any).isCorrectInStack) {
            domNode.style.backgroundColor = "#10b981"; // emerald-500 (stabil)
            domNode.style.borderColor = "#047857";
          } else {
            domNode.style.backgroundColor = "#f59e0b"; // amber-500 (alap)
            domNode.style.borderColor = "#b45309";
          }
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
        className="relative w-full max-w-2xl bg-stone-900 rounded-xl overflow-hidden shadow-2xl border-4 border-stone-700"
        style={{ aspectRatio: "8/5" }}
      >
        {/* Építő Platform (vizuális) */}
        <div className="absolute left-1/2 bottom-0 w-[300px] h-[40px] bg-stone-700 rounded-t-lg -translate-x-1/2 border-t-4 border-stone-500 z-0">
            <span className="absolute inset-0 flex items-center justify-center text-stone-400 font-bold text-xs uppercase tracking-widest">Build Tower Here</span>
        </div>

        {/* Szó-blokkok (Jenga) */}
        {shuffledWords.map((word) => (
          <div
            key={word.id}
            ref={(el) => { wordNodesRef.current[word.id] = el; }}
            className="absolute flex items-center justify-center w-[150px] h-[50px] text-white font-black rounded-md shadow-md border-b-4 cursor-grab active:cursor-grabbing transition-colors duration-300 z-10"
            style={{ 
              left: "-100%", top: "-100%", 
              fontSize: word.text.length > 10 ? "12px" : "16px",
              transitionProperty: "background-color, border-color" 
            }}
          >
            <span className="text-center px-2 drop-shadow-md">{word.text}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-amber-300 font-bold text-sm text-center max-w-md">
        Build a stable tower by stacking the words in the correct order from bottom to top! Incorrect words will slip and make the tower collapse! 🏗️🧱
      </p>
    </div>
  );
}
