export const SACHKUNDE_SCENES = [
  "body-care", "tree-parts", "home-safety", "healthy-plate", "habitat",
  "plant-growth", "magnet-test", "body-organs", "food-web", "weather-tool",
  "simple-machine", "organ-system", "ecosystem-chain", "energy-source", "circuit-state",
] as const;

export type SachkundeScene = (typeof SACHKUNDE_SCENES)[number];

const ink = "#334155";
const soft = "#94a3b8";
const green = "#22c55e";
const blue = "#3b82f6";
const amber = "#f59e0b";
const red = "#ef4444";

function shell(scene: SachkundeScene, body: string): string {
  return `<svg role="img" aria-label="${scene}" viewBox="0 0 240 130" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%;height:auto;max-height:112px">${body}</svg>`;
}

/** Borderless, paper-native Sachkunde drawings shared by screen and print. */
export function renderSachkundeSceneSvg(scene: SachkundeScene, variant = 0): string {
  const v = variant % 4;
  switch (scene) {
    case "body-care":
      return shell(scene, `<circle cx="78" cy="38" r="17" stroke="${ink}" stroke-width="2"/><path d="M78 55v45M52 72h52M64 100l-10 22M92 100l10 22" stroke="${ink}" stroke-width="2"/><path d="M143 35h42v58h-42zM151 49h26M151 61h26M151 73h18" stroke="${blue}" stroke-width="2"/><path d="M132 107h66M147 99v16M184 99v16" stroke="${soft}" stroke-width="2"/><circle cx="164" cy="27" r="7" stroke="${green}" stroke-width="2"/>`);
    case "tree-parts":
      return shell(scene, `<path d="M120 62v48M120 85l-23 34M120 91l24 28M120 101l-9 20" stroke="${ink}" stroke-width="3"/><path d="M120 70C75 75 67 36 91 24c10-24 43-18 49 2 28-4 43 29 20 44-12 9-29 8-40 0Z" fill="rgba(34,197,94,.12)" stroke="${green}" stroke-width="2"/><path d="M118 64L91 45M122 61l27-24" stroke="${green}" stroke-width="1.5"/><circle cx="88" cy="42" r="5" fill="rgba(245,158,11,.2)" stroke="${amber}"/><circle cx="151" cy="48" r="5" fill="rgba(245,158,11,.2)" stroke="${amber}"/>`);
    case "home-safety":
      return shell(scene, `<path d="M35 65l45-38 45 38v51H35Z" stroke="${ink}" stroke-width="2"/><path d="M67 116V82h25v34M47 74h14v14H47z" stroke="${blue}" stroke-width="2"/><path d="M153 31v74M153 31h42v74h-42M165 45h18M165 58h18" stroke="${soft}" stroke-width="2"/><path d="M142 112h64" stroke="${ink}" stroke-width="2"/><path d="M185 86l13 23h-26Z" fill="rgba(239,68,68,.12)" stroke="${red}" stroke-width="2"/><path d="M185 94v7M185 105v1" stroke="${red}" stroke-width="2"/>`);
    case "healthy-plate":
      return shell(scene, `<circle cx="94" cy="66" r="48" stroke="${ink}" stroke-width="2"/><path d="M94 18v96M46 66h96" stroke="${soft}" stroke-width="1.5"/><path d="M58 37c12-9 22-8 31 2M109 38c8-7 16-7 23 0" stroke="${green}" stroke-width="4"/><circle cx="67" cy="86" r="10" fill="rgba(245,158,11,.15)" stroke="${amber}"/><path d="M109 79h23v20h-23z" fill="rgba(59,130,246,.1)" stroke="${blue}" stroke-width="2"/><path d="M170 25v76M181 25v76M170 44h11" stroke="${ink}" stroke-width="2"/>`);
    case "habitat":
      return shell(scene, `<path d="M18 94c27-25 51-26 76 0s50 24 76 0 40-18 55-5" stroke="${blue}" stroke-width="2"/><path d="M30 89V50m0 0-15 25m15-25 15 25M30 50l-10-13m10 13 10-13" stroke="${green}" stroke-width="3"/><path d="M127 72c14-13 32-10 42 2-10 13-28 16-42 3l-13 10 4-14-4-13Z" fill="rgba(59,130,246,.12)" stroke="${blue}" stroke-width="2"/><circle cx="157" cy="73" r="2" fill="${ink}"/><path d="M190 90l10-33 10 33M195 74h11" stroke="${amber}" stroke-width="3"/>`);
    case "plant-growth":
      return shell(scene, `<path d="M18 106h204" stroke="${soft}" stroke-width="2"/><circle cx="38" cy="96" r="5" fill="rgba(245,158,11,.2)" stroke="${amber}"/><path d="M83 105V79m0 11c-12 0-14-10-14-10 9 0 14 4 14 10Zm0-4c12 0 14-10 14-10-9 0-14 4-14 10Z" stroke="${green}" stroke-width="2"/><path d="M143 105V52m0 25c-16 0-20-14-20-14 13 0 20 6 20 14Zm0-8c16 0 20-14 20-14-13 0-20 6-20 14Z" stroke="${green}" stroke-width="2"/><circle cx="143" cy="42" r="11" fill="rgba(245,158,11,.15)" stroke="${amber}" stroke-width="2"/><path d="M185 105V43m0 18-18-14m18 24 19-16" stroke="${ink}" stroke-width="3"/><path d="M171 42c11-15 20-10 14 4M201 50c-4-16-16-15-16 2" stroke="${green}" stroke-width="2"/>`);
    case "magnet-test":
      return shell(scene, `<path d="M41 36v37c0 32 50 32 50 0V36H75v37c0 12-18 12-18 0V36Z" fill="rgba(239,68,68,.1)" stroke="${red}" stroke-width="3"/><path d="M41 36h16M75 36h16" stroke="${blue}" stroke-width="5"/><path d="M130 91h73M142 91V66h28v25M181 91V52h13v39" stroke="${ink}" stroke-width="2"/><circle cx="151" cy="51" r="9" stroke="${soft}" stroke-width="2"/><path d="M104 62h22m-7-6 7 6-7 6" stroke="${amber}" stroke-width="2"/>`);
    case "body-organs":
      return shell(scene, `<circle cx="88" cy="22" r="13" stroke="${ink}" stroke-width="2"/><path d="M88 35v70M62 51h52M75 105l-10 19M101 105l10 19" stroke="${ink}" stroke-width="2"/><path d="M82 49c-13 1-18 18-12 31 4 8 12 4 12-5Zm12 0c13 1 18 18 12 31-4 8-12 4-12-5Z" fill="rgba(59,130,246,.1)" stroke="${blue}"/><path d="M88 70c-13-10-18 9 0 20 18-11 13-30 0-20Z" fill="rgba(239,68,68,.14)" stroke="${red}"/><path d="M143 36h62M143 58h62M143 80h62M143 102h62" stroke="${soft}" stroke-width="1.5"/><circle cx="154" cy="36" r="4" fill="${blue}"/><circle cx="178" cy="58" r="4" fill="${red}"/><circle cx="161" cy="80" r="4" fill="${amber}"/>`);
    case "food-web":
      return shell(scene, `<circle cx="43" cy="93" r="15" fill="rgba(34,197,94,.1)" stroke="${green}" stroke-width="2"/><path d="M43 78V53m0 10-13-8m13 2 13-10" stroke="${green}" stroke-width="2"/><ellipse cx="117" cy="84" rx="24" ry="13" stroke="${amber}" stroke-width="2"/><path d="M93 84 78 73v22Z" stroke="${amber}"/><circle cx="128" cy="80" r="2" fill="${ink}"/><path d="M163 51c15-16 34-7 34 10 0 16-18 25-34 11-8-7-8-14 0-21Z" stroke="${ink}" stroke-width="2"/><path d="M59 86h30m-8-6 8 6-8 6M135 75l25-13m-11-1 11 1-5 10" stroke="${red}" stroke-width="2"/>`);
    case "weather-tool":
      return shell(scene, `<circle cx="58" cy="36" r="18" fill="rgba(245,158,11,.12)" stroke="${amber}" stroke-width="2"/><path d="M58 9v9M58 54v9M31 36h9M76 36h9" stroke="${amber}" stroke-width="2"/><path d="M117 24v66a16 16 0 1 0 18 0V24a9 9 0 0 0-18 0Z" stroke="${ink}" stroke-width="2"/><path d="M126 46v51" stroke="${red}" stroke-width="5"/><path d="M165 29h34v68h-34zM172 43h20M172 57h20M172 71h20M172 85h20" stroke="${blue}" stroke-width="2"/><path d="M182 21v8" stroke="${blue}" stroke-width="2"/>`);
    case "simple-machine":
      return shell(scene, `<path d="M31 88h146" stroke="${ink}" stroke-width="4"/><path d="M105 88 86 114h38Z" fill="rgba(245,158,11,.12)" stroke="${amber}" stroke-width="2"/><rect x="38" y="62" width="31" height="25" rx="3" stroke="${blue}" stroke-width="2"/><path d="M177 88c18-20 28-3 31 18M177 88l18-24" stroke="${green}" stroke-width="2"/><path d="M41 44v15m0-15-6 8m6-8 6 8M199 42v18m0 0-6-8m6 8 6-8" stroke="${red}" stroke-width="2"/>`);
    case "organ-system":
      return shell(scene, `<circle cx="70" cy="20" r="12" stroke="${ink}" stroke-width="2"/><path d="M70 32v75M45 48h50M56 107l-9 18M84 107l9 18" stroke="${ink}" stroke-width="2"/><path d="M63 47c-9 1-13 14-8 25 3 6 8 3 8-4Zm14 0c9 1 13 14 8 25-3 6-8 3-8-4Z" stroke="${blue}"/><path d="M70 71c-10-8-14 7 0 16 14-9 10-24 0-16Z" stroke="${red}" fill="rgba(239,68,68,.1)"/><path d="M128 30h77M128 53h77M128 76h77M128 99h77" stroke="${soft}" stroke-width="1.5"/><path d="M128 30l-30 22M128 53l-43 20M128 76l-38 12M128 99l-48 7" stroke="${soft}" stroke-width="1"/>`);
    case "ecosystem-chain":
      return shell(scene, `<circle cx="34" cy="31" r="14" fill="rgba(245,158,11,.12)" stroke="${amber}" stroke-width="2"/><path d="M33 100V66m0 15-13-9m13 2 14-10" stroke="${green}" stroke-width="3"/><ellipse cx="101" cy="85" rx="19" ry="11" stroke="${blue}" stroke-width="2"/><path d="M82 85 70 75v20Z" stroke="${blue}"/><path d="M150 75c10-13 27-11 35 0-8 13-25 15-35 3l-12 8 4-12-4-10Z" stroke="${ink}" stroke-width="2"/><path d="M51 82h28m-8-6 8 6-8 6M121 82h17m-7-6 7 6-7 6" stroke="${red}" stroke-width="2"/>`);
    case "energy-source":
      return shell(scene, `<circle cx="45" cy="39" r="16" fill="rgba(245,158,11,.14)" stroke="${amber}" stroke-width="2"/><path d="M45 11v10M45 57v10M17 39h10M63 39h10" stroke="${amber}" stroke-width="2"/><path d="M91 99V54m0 0-20 17m20-17 20 17m-20-17v-25" stroke="${blue}" stroke-width="3"/><path d="M135 97h62l-8-36h-46Z" fill="rgba(59,130,246,.08)" stroke="${blue}" stroke-width="2"/><path d="M139 79h54M158 62l-5 35M178 62l-5 35" stroke="${soft}"/><path d="M113 105h101" stroke="${ink}" stroke-width="2"/>`);
    case "circuit-state":
      return shell(scene, `<path d="M37 39h52m20 0h70v57H37V64" stroke="${blue}" stroke-width="2"/><path d="M24 51h26M31 63h12" stroke="${ink}" stroke-width="2"/><circle cx="142" cy="67" r="15" fill="rgba(245,158,11,${v === 0 ? ".2" : ".05"})" stroke="${amber}" stroke-width="2"/><path d="M132 57l20 20m0-20-20 20" stroke="${amber}"/><circle cx="89" cy="39" r="3" fill="${ink}"/><circle cx="109" cy="39" r="3" fill="${ink}"/><path d="M89 39l${v % 2 === 0 ? "20 0" : "16 -13"}" stroke="${red}" stroke-width="3"/>`);
  }
}
