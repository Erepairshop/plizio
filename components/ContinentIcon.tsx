type Continent = "world" | "europe" | "northamerica" | "southamerica" | "africa" | "asia" | "oceania";

type Props = {
  continent: Continent;
  size?: number;
  className?: string;
  title?: string;
};

const PATHS: Record<Continent, string[]> = {
  world: [
    "M7 8.5 10.5 6l4 .5 2.2-2 3.8 1.2 1.5 3.2-1.8 2.4-4.5-.2-1.7 2-3.3-.5-2.5-3.5-2.8-1.8-1.8-4.8-2.7-3.8-4.2-.8-1.8-2.5Z",
    "M18.5 15.2 22 14l2 2.3-1 3.7-3 2.5-2.5-2.2Z",
  ],
  europe: [
    "M6 6.3 9.3 4l3.3 1.2 2.2-2.1 4.7 1.2.8 2.4 3.4 1.6-1.3 2.8-4.2.2-1.4 2.3-3.5-.5-1.6 2.2-3.8-.4-1.9-2.7-2.7.6-2.5-2.4-1.4-3.9Z",
    "M8.2 2.8 10 1.4l1.8 1.2-1.5 2.1Z",
  ],
  northamerica: [
    "M3.2 5.5 7.7 2l6.5.6 2.5 2.6 4-.3 2.1 2.6-3.5 4-2.8.4-2.4 3.2-3.8.7-2.6-2.9-3.8-.8-1.7-3.2-3.6-.8-2.4-3.4Z",
    "m14.7 18 2.7.7 1.2 3.2-2 3.2-1.8-3.6Z",
  ],
  southamerica: [
    "m9.3 2.4 5.2-.6 4 2.8 2.7 4.7-2.4 4.2-.7 4.9-2.8 3.4-.7 4.8-2.6 2.8-1.8-4.3-1.5-4.2 1-3.5-2.3-3.1 1.4-4.5-2.3-2.5Z",
  ],
  africa: [
    "M8.1 3.1 16 1.8l5.2 4.4-1.1 5-3.2 2.5-1.2 5.8-3.3 6.9-3.2-4.5-1-5-3-3.2-1.4-5.4Z",
    "m20.7 18.2 2.1-1.2.3 4.5-2.7 3.8-1-3.5Z",
  ],
  asia: [
    "M2.8 6.1 7.3 2l5.2 1.4 3.8-1.5 7 2.9 3.3 3.9-2.2 3.3-4.8.2-1.9 3.2-4.5-1.1-2 2.3-2.4-2.1-3.8.2-2.2-3.7-3.5-.6-1.7-3.2-3.8-.7Z",
    "m20.1 17.2 2.6 1.7-1.3 4-2.4-2.3Z",
  ],
  oceania: [
    "m4.1 8.4 5.8-3.2 5.7 1.7 1.3 4.8-3.5 4.5-5.7-.2-4.3-3.1Z",
    "m19.8 17.2 3.8-1.5 2.4 2.1-2.7 3.1-3.5-1.2Z",
    "m21.4 6.1 1.3-1.5 1.7 1.2-1 1.7Z",
  ],
};

export default function ContinentIcon({ continent, size = 28, className = "", title }: Props) {
  const label = title ?? continent;
  return (
    <svg
      viewBox="0 0 30 30"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={label}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="15" r="13.25" fill="#f3e7df" stroke="#b4502a" strokeWidth="1.2" />
      <path d="M3.4 15h23.2M15 1.8c-4 3.7-6.1 8.1-6.1 13.2S11 24.5 15 28.2M15 1.8c4 3.7 6.1 8.1 6.1 13.2S19 24.5 15 28.2" stroke="#d8c9b4" strokeWidth=".65" />
      {PATHS[continent].map((d, index) => (
        <path key={index} d={d} fill="#b4502a" stroke="#8f3d1f" strokeWidth=".45" strokeLinejoin="round" />
      ))}
    </svg>
  );
}

export type { Continent };
