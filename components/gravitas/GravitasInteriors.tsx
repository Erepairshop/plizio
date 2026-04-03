"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { type StarholdModuleId } from "@/lib/gravitas/sim/types";

export function SensorInteriorView({ onClose }: { onClose: () => void }) {
  return (
    <div className="relative flex h-full flex-col">
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/gravitas/sensor-interior-v2.webp')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(34,211,238,0.08),transparent_26%),linear-gradient(180deg,rgba(5,8,22,0.08)_0%,rgba(5,8,22,0.42)_100%)]" />
      </div>

      <div className="relative z-10 flex items-start justify-between gap-4 p-4">
        <div />
        <button
          type="button"
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white/75 transition hover:bg-white/10 hover:text-white"
        >
          <X size={16} />
        </button>
      </div>

      <div className="relative z-10 flex-1 px-4 pb-4">
        <div className="relative h-full overflow-hidden rounded-[28px] border border-cyan-400/15 bg-black/10 p-4 backdrop-blur-[1px]">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/5 via-transparent to-black/20" />
        </div>
      </div>
    </div>
  );
}

export function ReactorInteriorView({ onClose }: { onClose: () => void }) {
  return (
    <div className="relative flex h-full flex-col">
      <div className="pointer-events-none absolute inset-0 opacity-95">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/gravitas/reactor-interior.webp')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(251,146,60,0.08),transparent_24%),linear-gradient(180deg,rgba(5,8,22,0.08)_0%,rgba(5,8,22,0.34)_100%)]" />
      </div>

      <div className="relative z-10 flex items-start justify-end p-4">
        <button
          type="button"
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white/75 transition hover:bg-white/10 hover:text-white"
        >
          <X size={16} />
        </button>
      </div>

      <div className="relative z-10 flex-1 px-4 pb-4">
        <div className="relative h-full overflow-hidden rounded-[28px] border border-amber-400/15 bg-black/10 p-4 backdrop-blur-[1px]">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-400/5 via-transparent to-black/20" />
        </div>
      </div>
    </div>
  );
}

export function CoreInteriorView({ onClose }: { onClose: () => void }) {
  return (
    <div className="relative flex h-full flex-col">
      <div className="pointer-events-none absolute inset-0 opacity-95">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/gravitas/core-interior.webp')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(217,70,239,0.08),transparent_24%),linear-gradient(180deg,rgba(5,8,22,0.08)_0%,rgba(5,8,22,0.34)_100%)]" />
      </div>

      <div className="relative z-10 flex items-start justify-end p-4">
        <button
          type="button"
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white/75 transition hover:bg-white/10 hover:text-white"
        >
          <X size={16} />
        </button>
      </div>

      <div className="relative z-10 flex-1 px-4 pb-4">
        <div className="relative h-full overflow-hidden rounded-[28px] border border-fuchsia-400/15 bg-black/10 p-4 backdrop-blur-[1px]">
          <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-400/5 via-transparent to-black/20" />
        </div>
      </div>
    </div>
  );
}

export function ModuleArtOverlay({
  selectedModule,
  onSelectModule,
}: {
  selectedModule: StarholdModuleId;
  onSelectModule: (moduleId: StarholdModuleId) => void;
}) {
  const modules = [
    {
      id: "reactor" as const,
      src: "/gravitas/modules/reactor-module.webp",
      className: "left-[7%] top-[8%] w-[12%] max-w-[124px] sm:left-[8%] sm:top-[8%] sm:w-[12%] sm:max-w-[124px]",
      hitboxClassName: "inset-[12%]",
      motion: { y: [-2, 2, -1], x: [0, 1, 0], rotate: [-0.4, 0.5, -0.2] },
      duration: 6.4,
    },
    {
      id: "logistics" as const,
      src: "/gravitas/modules/logistics-module.webp",
      className: "left-[22%] top-[8%] w-[12%] max-w-[124px] sm:left-[22%] sm:top-[8%] sm:w-[12%] sm:max-w-[124px]",
      hitboxClassName: "inset-[12%]",
      motion: { y: [-1, 1.5, -1], x: [0, -1, 0], rotate: [-0.25, 0.25, -0.15] },
      duration: 7.6,
    },
    {
      id: "sensor" as const,
      src: "/gravitas/modules/sensor-module.webp",
      className: "left-[9%] top-[14%] w-[5.5%] max-w-[64px] sm:left-[9%] sm:top-[14%] sm:w-[5.5%] sm:max-w-[64px]",
      hitboxClassName: "inset-[10%]",
      motion: { y: [-2, 1, -2], x: [0, 1.5, 0], rotate: [-0.6, 0.7, -0.3] },
      duration: 5.8,
    },
    {
      id: "core" as const,
      src: "/gravitas/modules/core-module.webp",
      className: "left-[22%] top-[28%] w-[16%] max-w-[160px] sm:left-[22%] sm:top-[28%] sm:w-[16%] sm:max-w-[160px]",
      hitboxClassName: "inset-[18%]",
      motion: { y: [-3, 2, -2], x: [0, 0.5, 0], rotate: [-0.3, 0.3, -0.15] },
      duration: 8.8,
    },
    {
      id: "war-room",
      src: "/gravitas/modules/war-command-center.webp",
      className: "left-[42%] top-[8%] w-[12%] max-w-[124px] sm:left-[42%] sm:top-[8%] sm:w-[12%] sm:max-w-[124px]",
      hitboxClassName: "inset-[12%]",
      motion: { y: [-2, 1.5, -1], x: [0, 0.8, 0], rotate: [-0.2, 0.3, -0.1] },
      duration: 9.6,
      decorative: true,
    },
    {
      id: "repair-bay",
      src: "/gravitas/modules/repair-bay.webp",
      className: "left-[42%] top-[28%] w-[12%] max-w-[124px] sm:left-[42%] sm:top-[28%] sm:w-[12%] sm:max-w-[124px]",
      hitboxClassName: "inset-[12%]",
      motion: { y: [-1.5, 1, -1.2], x: [0, -0.8, 0], rotate: [-0.18, 0.2, -0.08] },
      duration: 8.8,
      decorative: true,
    },
  ];

  return (
    <div className="pointer-events-auto absolute inset-0 z-[6]">
      <div className="absolute inset-0 overflow-auto overscroll-contain" style={{ touchAction: "pan-x pan-y", WebkitOverflowScrolling: "touch" }}>
        <div className="relative h-[300%] w-[300%]">
          {modules.map((module) => {
            const isSelected = selectedModule === module.id;
            return (
              <motion.div
                key={module.id}
                className={`absolute transition-all duration-500 ${module.className} ${isSelected ? "scale-[1.03] opacity-100" : "opacity-[0.94]"}`}
                style={{
                  filter: isSelected
                    ? "drop-shadow(0 0 28px rgba(255,255,255,0.12)) drop-shadow(0 0 26px rgba(34,211,238,0.16)) drop-shadow(0 12px 24px rgba(0,0,0,0.32))"
                    : "drop-shadow(0 0 18px rgba(34,211,238,0.06)) drop-shadow(0 10px 22px rgba(0,0,0,0.34))",
                }}
                animate={module.motion}
                transition={{ duration: module.duration, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-[2%] -z-10 rounded-[40px] bg-[radial-gradient(circle_at_50%_52%,rgba(8,15,30,0.82),rgba(8,15,30,0.28)_58%,transparent_84%)] blur-lg sm:blur-xl" />
                <div className="absolute inset-[11%] -z-10 rounded-[34px] bg-[radial-gradient(circle_at_50%_56%,rgba(34,211,238,0.07),transparent_68%)] blur-xl sm:blur-2xl" />
                <motion.div
                  className="pointer-events-none absolute inset-[8%] -z-10 rounded-[34px] bg-[radial-gradient(circle_at_50%_56%,rgba(255,255,255,0.06),transparent_62%)] blur-[12px] sm:blur-[18px]"
                  animate={{ opacity: isSelected ? [0.18, 0.3, 0.2] : [0.08, 0.16, 0.1] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                />
                <img
                  src={module.src}
                  alt=""
                  className="h-auto w-full select-none object-contain [mask-image:radial-gradient(circle_at_50%_50%,black_66%,rgba(0,0,0,0.92)_78%,transparent_100%)]"
                  draggable={false}
                />
                {module.id === "core" && (
                  <>
                    <motion.div
                      className="pointer-events-none absolute inset-[22%] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.18),rgba(34,211,238,0.08)_42%,transparent_72%)] blur-xl"
                      animate={{ scale: [0.95, 1.04, 0.98], opacity: [0.22, 0.46, 0.28] }}
                      transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="pointer-events-none absolute left-[16%] top-[49%] h-[2px] w-[68%] bg-[linear-gradient(90deg,transparent,rgba(236,72,153,0.0),rgba(236,72,153,0.45),rgba(34,211,238,0.36),transparent)] blur-[1px]"
                      animate={{ x: ["-5%", "8%", "-5%"], opacity: [0.08, 0.22, 0.08] }}
                      transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="pointer-events-none absolute inset-[10%] rounded-full border border-fuchsia-300/10"
                      animate={{ opacity: [0.08, 0.2, 0.1], scale: [0.98, 1.01, 0.99] }}
                      transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </>
                )}
                {module.id === "reactor" && (
                  <>
                    <motion.div
                      className="pointer-events-none absolute inset-[18%] rounded-full bg-[radial-gradient(circle,rgba(251,146,60,0.16),rgba(251,146,60,0.07)_46%,transparent_74%)] blur-xl"
                      animate={{ scale: [0.96, 1.06, 0.98], opacity: [0.12, 0.28, 0.16] }}
                      transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="pointer-events-none absolute left-[22%] top-[56%] h-[2px] w-[52%] bg-[linear-gradient(90deg,transparent,rgba(251,146,60,0.0),rgba(251,146,60,0.56),transparent)]"
                      animate={{ opacity: [0.06, 0.22, 0.06], scaleX: [0.92, 1.04, 0.94] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.span
                      className="pointer-events-none absolute left-[38%] top-[28%] h-1.5 w-1.5 rounded-full bg-amber-200 shadow-[0_0_10px_rgba(251,191,36,0.55)]"
                      animate={{ opacity: [0.24, 0.82, 0.28], scale: [0.8, 1.2, 0.9] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </>
                )}
                {module.id === "sensor" && (
                  <>
                    <motion.div
                      className="pointer-events-none absolute inset-[16%] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.14),rgba(34,211,238,0.04)_48%,transparent_74%)] blur-xl"
                      animate={{ opacity: [0.07, 0.2, 0.08], rotate: [0, 10, -8, 0] }}
                      transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="pointer-events-none absolute left-[18%] top-[47%] h-[2px] w-[64%] origin-left bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.0),rgba(34,211,238,0.8),transparent)] blur-[1px]"
                      animate={{ rotate: [-18, 10, -18], opacity: [0.08, 0.26, 0.08] }}
                      transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </>
                )}
                {module.id === "logistics" && (
                  <>
                    <motion.div
                      className="pointer-events-none absolute inset-[20%] rounded-[28px] bg-[radial-gradient(circle,rgba(129,140,248,0.14),rgba(129,140,248,0.04)_48%,transparent_76%)] blur-xl"
                      animate={{ opacity: [0.06, 0.18, 0.08], scale: [0.97, 1.02, 0.99] }}
                      transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.span
                      className="pointer-events-none absolute left-[24%] top-[34%] h-1.5 w-1.5 rounded-full bg-indigo-200 shadow-[0_0_10px_rgba(165,180,252,0.6)]"
                      animate={{ x: [0, 14, 0], opacity: [0.3, 0.85, 0.3] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.span
                      className="pointer-events-none absolute right-[26%] bottom-[26%] h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                      animate={{ x: [0, -12, 0], opacity: [0.22, 0.74, 0.22] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    />
                  </>
                )}
                {"decorative" in module ? null : (
                  <button
                    type="button"
                    aria-label={module.id}
                    onClick={() => onSelectModule(module.id)}
                    className={`absolute ${module.hitboxClassName} pointer-events-auto rounded-[28px] bg-transparent`}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
