"use client";

export function MapLoadingSkeleton() {
  return (
    <div className="w-full h-full bg-slate-900 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-white/70">
        <svg
          className="animate-spin w-10 h-10 text-cyan-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
          <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <div className="text-sm font-medium tracking-wide opacity-80">
          Loading map...
        </div>
      </div>
    </div>
  );
}
