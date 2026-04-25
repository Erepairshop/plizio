"use client";
import {
  useState, useMemo, useRef, useCallback, useEffect,
  type PointerEvent as RPointerEvent,
  type WheelEvent as RWheelEvent,
} from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X, Plus, Minus, Maximize2, Volume2, Search, Star, Ruler, Brain } from "lucide-react";
import { type BundeslandPath } from "../maps/deutschland.svg";
import { projectInState } from "../maps/bundeslandSubregions";
import { getCountryMap } from "../maps/resolver";
import { useLang } from "@/components/LanguageProvider";
import { usePanZoom } from "./usePanZoom";
import { type POI } from "../data/poi";
import { Building2, Mountain, Waves, Landmark as LandmarkIcon, Eye, Layers, Sprout, Factory, Map as MapIcon } from "lucide-react";
import { buildPoiPathById, buildStatePath, type Lang as SeoLang } from "@/lib/seo/slugs";
import { useRuler, RulerPanel, RulerSvgOverlay } from "../quiz/RulerOverlay";
import { useQuizEngine, QuizPanel, QuizSvgOverlay } from "../quiz/QuizEngine";
import type { RulerState } from "../quiz/RulerOverlay";
import { deRivers } from "../maps/rivers/deRivers";

type Lang = "de" | "hu" | "ro" | "en";
type Subject = "sachkunde" | "geographie" | "geschichte";
type Layer = "all" | "cities" | "nature" | "history" | "landmarks" | "life" | "economic" | "relief";
type HistoryPeriod = "all" | "middle-ages" | "reformation" | "empire" | "ww1" | "ww2" | "ddr" | "modern";

const PERIODS: { id: HistoryPeriod; emoji: string; label: { de: string; hu: string; ro: string; en: string } }[] = [
  { id: "all",          emoji: "🕰",  label: { de: "Alle",        hu: "Mind",       ro: "Toate",      en: "All"       } },
  { id: "middle-ages",  emoji: "🏰",  label: { de: "Mittelalter", hu: "Középkor",   ro: "Ev mediu",   en: "Medieval"  } },
  { id: "reformation",  emoji: "✝️",  label: { de: "Reformation", hu: "Reformáció", ro: "Reforma",    en: "Reform"    } },
  { id: "empire",       emoji: "👑",  label: { de: "Kaiserreich", hu: "Birodalom",  ro: "Imperiu",    en: "Empire"    } },
  { id: "ww1",          emoji: "⚔️",  label: { de: "1. Weltkrieg",hu: "I. világh.", ro: "I-ul Mondial", en: "WWI"     } },
  { id: "ww2",          emoji: "💥",  label: { de: "2. Weltkrieg",hu: "II. világh.",ro: "II-lea Mondial", en: "WWII"  } },
  { id: "ddr",          emoji: "🧱",  label: { de: "DDR",         hu: "NDK",        ro: "RDG",        en: "GDR"       } },
  { id: "modern",       emoji: "🇩🇪", label: { de: "Modern",      hu: "Modern",     ro: "Modern",     en: "Modern"    } },
];

const T: Record<Lang, Record<string, string>> = {
  de: { capital: "Hauptstadt", detail: "Detailansicht aktivieren", back: "Zurück", hint: "Wähle ein Bundesland oder einen Punkt auf der Karte.",
        layers: "Ebenen", all: "Alle", cities: "Städte", nature: "Natur", history: "Geschichte", landmarks: "Sehenswürdig.", life: "Leben & Natur", economic: "Wirtschaft", relief: "Landschaft",
        searchPlaceholder: "Ort suchen…", favorites: "Favoriten", onlyFavorites: "Nur Favoriten" },
  hu: { capital: "Főváros", detail: "Részletes nézet", back: "Vissza", hint: "Válassz egy tartományt vagy pontot a térképen.",
        layers: "Rétegek", all: "Mind", cities: "Városok", nature: "Természet", history: "Történelem", landmarks: "Nevezetes.", life: "Élet & természet", economic: "Gazdaság", relief: "Domborzat",
        searchPlaceholder: "Hely keresése…", favorites: "Kedvencek", onlyFavorites: "Csak kedvencek" },
  ro: { capital: "Capitala", detail: "Vizualizare detaliată", back: "Înapoi", hint: "Alege un land sau un punct pe hartă.",
        layers: "Straturi", all: "Toate", cities: "Orașe", nature: "Natură", history: "Istorie", landmarks: "Obiective", life: "Viață & natură", economic: "Economie", relief: "Relief",
        searchPlaceholder: "Caută loc…", favorites: "Favorite", onlyFavorites: "Doar favorite" },
  en: { capital: "Capital", detail: "Activate detail view", back: "Back", hint: "Pick a state or a point on the map.",
        layers: "Layers", all: "All", cities: "Cities", nature: "Nature", history: "History", landmarks: "Landmarks", life: "Life & Nature", economic: "Economy", relief: "Landscape",
        searchPlaceholder: "Search place…", favorites: "Favorites", onlyFavorites: "Only favorites" },
};

const MORE_LABEL: Record<Lang, string> = {
  de: "Mehr",
  hu: "Bővebben",
  ro: "Detalii",
  en: "Read more",
};

const LAYER_TYPES: Record<Layer, POI["type"][]> = {
  all: ["state-capital", "city", "river", "mountain", "lake", "island", "forest", "sea", "historical", "landmark", "animal-habitat", "agriculture", "kid-landmark"],
  cities: ["state-capital", "city"],
  nature: ["river", "mountain", "lake", "island", "forest", "sea"],
  history: ["historical"],
  landmarks: ["landmark"],
  life: ["animal-habitat", "agriculture", "kid-landmark"],
  economic: ["industry", "port"],
  relief: ["relief", "mountain", "forest"],
};

const DEFAULT_LAYER_BY_SUBJECT: Record<Subject, Layer> = {
  sachkunde: "all",
  geographie: "all",
  geschichte: "history",
};

function poiColor(type: POI["type"]): string {
  switch (type) {
    case "state-capital":  return "#FBBF24";
    case "city":           return "#38BDF8";
    case "river":          return "#22D3EE";
    case "mountain":       return "#A78BFA";
    case "lake":           return "#60A5FA";
    case "island":         return "#34D399";
    case "forest":         return "#10B981";
    case "sea":            return "#06B6D4";
    case "historical":     return "#F472B6";
    case "landmark":       return "#F97316";
    case "animal-habitat": return "#4ADE80";
    case "agriculture":    return "#FCD34D";
    case "kid-landmark":   return "#FB7185";
    case "industry":       return "#94A3B8";
    case "port":           return "#0EA5E9";
    case "relief":         return "#A8A29E";
    default:               return "#94A3B8";
  }
}

const MIN_SCALE = 1;
const MAX_SCALE = 50;

// K1-K2 simplified mode: only these POI types are shown
const SIMPLIFIED_TYPES = new Set<POI["type"]>(["state-capital", "river", "mountain", "sea", "animal-habitat", "kid-landmark"]);

const FAV_KEY = "plizio:vlab:favorites";

const readFavs = (): Set<string> => {
  if (typeof window === "undefined") return new Set<string>();
  try { return new Set<string>(JSON.parse(localStorage.getItem(FAV_KEY) ?? "[]")); }
  catch { return new Set<string>(); }
};
const writeFavs = (s: Set<string>) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(FAV_KEY, JSON.stringify([...s]));
};

const VALID_LAYERS = new Set<string>(["cities", "nature", "history", "landmarks", "life", "economic", "relief", "all"]);
const VALID_PERIODS = new Set<string>(["all", "middle-ages", "reformation", "empire", "ww1", "ww2", "ddr", "modern"]);

export const InteractiveMap = ({
  lang = "de",
  subject = "geographie",
  grade = 5,
  initialPoiId = null,
}: {
  lang?: string;
  subject?: Subject;
  grade?: number;
  initialPoiId?: string | null;
}) => {
  const router = useRouter();
  // Static-export-safe URL param reader (avoids useSearchParams Suspense requirement)
  const searchParams = useMemo(() => {
    if (typeof window === "undefined") return null;
    return new URLSearchParams(window.location.search);
  }, []);

  // ---- Country map resolver (lang-based) ---------------------------------
  const countryData = useMemo(() => getCountryMap(lang as Lang), [lang]);
  const deutschlandMap = countryData.map;
  const deutschlandViewBox = countryData.viewBox;
  const projectCoords = countryData.projectCoords;
  const pois: POI[] = countryData.pois;

  // ---- Initialize state from URL on first render -------------------------
  const initLayer = (): Layer => {
    const v = searchParams?.get("layer");
    return (v && VALID_LAYERS.has(v) ? v : DEFAULT_LAYER_BY_SUBJECT[subject] ?? "all") as Layer;
  };
  const initPeriod = (): HistoryPeriod => {
    const v = searchParams?.get("period");
    return (v && VALID_PERIODS.has(v) ? v : "all") as HistoryPeriod;
  };
  const initPoiId = (): string | null => searchParams?.get("poi") ?? initialPoiId ?? null;
  const initState = (): string | null => searchParams?.get("state") ?? null;
  const initFavOnly = (): boolean => searchParams?.get("fav") === "1";

  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<BundeslandPath | null>(null);
  const [selectedPoiId, setSelectedPoiId] = useState<string | null>(initPoiId);
  const [detailFor, setDetailFor] = useState<string | null>(initState);
  const [view, setView] = useState({ x: 0, y: 0, scale: 1 });
  const [layer, setLayer] = useState<Layer>(initLayer);
  const [period, setPeriod] = useState<HistoryPeriod>(initPeriod);
  // SSR-safe: ures keszlet eloszor, localStorage csak mount utan (hydration mismatch elkerulese)
  const [favorites, setFavorites] = useState<Set<string>>(() => new Set<string>());
  useEffect(() => { setFavorites(readFavs()); }, []);
  const [onlyFavorites, setOnlyFavorites] = useState<boolean>(initFavOnly);

  // ---- Map mode (browse / ruler / quiz) ------------------------------------
  const [mapMode, setMapMode] = useState<"browse" | "ruler" | "quiz">("browse");

  // ---- Ruler mode ----------------------------------------------------------
  const [rulerState, setRulerState] = useState<RulerState>({ poiA: null, poiB: null, distanceKm: null });
  const ruler = useRuler(setRulerState);

  // ---- Quiz mode -----------------------------------------------------------
  const quiz = useQuizEngine({ countryCode: countryData.countryId, pois });

  // ---- Search state ------------------------------------------------------
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // ---- URL sync (debounced ~250ms) ----------------------------------------
  const urlDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const syncUrl = useCallback((
    l: Layer, p: HistoryPeriod, poiId: string | null, stateId: string | null, favOnly: boolean
  ) => {
    if (urlDebounceRef.current) clearTimeout(urlDebounceRef.current);
    urlDebounceRef.current = setTimeout(() => {
      const params = new URLSearchParams();
      params.set("layer", l);
      if (l === "history" && p !== "all") params.set("period", p);
      if (poiId) params.set("poi", poiId);
      if (stateId) params.set("state", stateId);
      if (favOnly) params.set("fav", "1");
      const newUrl = `?${params.toString()}`;
      router.replace(newUrl, { scroll: false });
    }, 250);
  }, [router]);

  // Sync whenever relevant state changes
  useEffect(() => {
    syncUrl(layer, period, selectedPoiId, detailFor, onlyFavorites);
  }, [layer, period, selectedPoiId, detailFor, onlyFavorites, syncUrl]);

  // Display language comes from user's global language selection (useLang hook),
  // NOT the `lang` prop which is actually the country-key (e.g. "is", "mt", "by")
  const { lang: userLang } = useLang();
  const displayLang: Lang = (["de", "hu", "ro", "en"].includes(userLang as string) ? userLang : "de") as Lang;
  const t = T[displayLang] ?? T.de;
  // seoLang always follows the user's global language (NOT the map's country-code prop).
  // Previously `lang` prop was used when it happened to match a valid lang (e.g. "ro" on Romania map),
  // which locked detail URLs to that language regardless of the user's choice.
  const seoLang = displayLang as SeoLang;
  const moreLabel = MORE_LABEL[seoLang];
  const selectedPoiFromState = useMemo(
    () => (selected ? pois.find((p) => p.id === selected.id) : null),
    [selected]
  );
  const selectedPoi = useMemo(
    () => (selectedPoiId ? pois.find((p) => p.id === selectedPoiId) : null),
    [selectedPoiId]
  );

  // Simplified K1-K2 tier: only state-capitals, main nature, zoos/animal habitats
  const isSimplified = grade <= 2;

  // Filter POIs by layer + grade. Subject only filters when layer="all"
  // In quiz mode: replaced by visiblePoiTypes filter from quiz engine.
  const visiblePOIs = useMemo(() => {
    if (mapMode === "quiz") {
      // If the task restricts to specific POI ids (spot_error, order_by, distance_guess), use that.
      const quizIds = quiz.visiblePoiIds;
      if (quizIds !== null) {
        return pois.filter((p) => quizIds.has(p.id));
      }
      const quizTypes = quiz.visiblePoiTypes;
      if (quizTypes === null) return pois.filter((p) => p.type !== "region");
      if (quizTypes.length === 0) return [];
      const allowed = new Set(quizTypes);
      return pois.filter((p) => p.type !== "region" && allowed.has(p.type as typeof quizTypes[number]));
    }
    const allowedTypes = new Set(LAYER_TYPES[layer]);
    return pois.filter((p) => {
      if (p.type === "region") return false;
      if (!allowedTypes.has(p.type)) return false;
      if (layer === "all" && p.subjects && !p.subjects.includes(subject)) return false;
      if (p.grades && p.grades.length > 0 && !p.grades.includes(grade)) return false;
      if (layer === "history" && period !== "all") {
        if (p.historyPeriod !== period) return false;
      }
      if (isSimplified) {
        if (p.type === "city") return false;
        if (!SIMPLIFIED_TYPES.has(p.type)) return false;
      }
      if (onlyFavorites && !favorites.has(p.id)) return false;
      return true;
    });
  }, [mapMode, quiz.visiblePoiTypes, quiz.visiblePoiIds, pois, layer, subject, grade, period, isSimplified, onlyFavorites, favorites]);

  // ---- Search results ------------------------------------------------------
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return pois
      .filter((p) => p.type !== "region" && (
        p.name.de?.toLowerCase().includes(q) ||
        p.name.hu?.toLowerCase().includes(q) ||
        p.name.ro?.toLowerCase().includes(q) ||
        p.name.en?.toLowerCase().includes(q)
      ))
      .slice(0, 8);
  }, [searchQuery]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!searchOpen) return;
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [searchOpen]);

  const handleSearchSelect = useCallback((p: POI) => {
    setSelectedPoiId(p.id);
    setSelected(null);
    setSearchOpen(false);
    setSearchQuery("");
    // Smooth reset view so marker is centered
    setView({ x: 0, y: 0, scale: 1 });
  }, []);

  // ---- Favorites ----------------------------------------------------------
  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      writeFavs(next);
      return next;
    });
  }, []);

  // ---- Pan/zoom state ------------------------------------------------------
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pointers = useRef<Map<number, { x: number; y: number }>>(new Map());
  const lastPinch = useRef<{ dist: number; cx: number; cy: number } | null>(null);
  const lastPan = useRef<{ x: number; y: number } | null>(null);
  const dragged = useRef(false);

  const clampView = (v: { x: number; y: number; scale: number }) => {
    const scale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, v.scale));
    const [w, h] = deutschlandViewBox.split(" ").slice(2).map(Number);
    const maxX = Math.max(0, w * (scale - 1)) + w * 0.5;
    const maxY = Math.max(0, h * (scale - 1)) + h * 0.5;
    return {
      scale,
      x: Math.max(-maxX, Math.min(maxX, v.x)),
      y: Math.max(-maxY, Math.min(maxY, v.y)),
    };
  };

  const zoomAt = (factor: number, cx?: number, cy?: number) => {
    setView((v) => {
      const [w, h] = deutschlandViewBox.split(" ").slice(2).map(Number);
      const px = cx ?? w / 2;
      const py = cy ?? h / 2;
      const newScale = v.scale * factor;
      const clamped = Math.max(MIN_SCALE, Math.min(MAX_SCALE, newScale));
      const k = clamped / v.scale;
      const nx = px - k * (px - v.x);
      const ny = py - k * (py - v.y);
      return clampView({ x: nx, y: ny, scale: clamped });
    });
  };

  const toSvg = (clientX: number, clientY: number) => {
    const svg = svgRef.current;
    if (!svg) return [0, 0];
    const rect = svg.getBoundingClientRect();
    const [vbX, vbY, vbW, vbH] = deutschlandViewBox.split(" ").map(Number);
    const sx = vbW / rect.width;
    const sy = vbH / rect.height;
    return [vbX + (clientX - rect.left) * sx, vbY + (clientY - rect.top) * sy];
  };

  const onWheel = (e: RWheelEvent<SVGSVGElement>) => {
    e.preventDefault();
    const [sx, sy] = toSvg(e.clientX, e.clientY);
    zoomAt(e.deltaY < 0 ? 1.15 : 1 / 1.15, sx, sy);
  };

  const onPointerDown = (e: RPointerEvent<SVGSVGElement>) => {
    (e.target as Element).setPointerCapture?.(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    dragged.current = false;
    if (pointers.current.size === 1) {
      lastPan.current = { x: e.clientX, y: e.clientY };
    } else if (pointers.current.size === 2) {
      const pts = Array.from(pointers.current.values());
      const dx = pts[0].x - pts[1].x;
      const dy = pts[0].y - pts[1].y;
      lastPinch.current = {
        dist: Math.hypot(dx, dy),
        cx: (pts[0].x + pts[1].x) / 2,
        cy: (pts[0].y + pts[1].y) / 2,
      };
      lastPan.current = null;
    }
  };

  const onPointerMove = (e: RPointerEvent<SVGSVGElement>) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointers.current.size === 2 && lastPinch.current) {
      const pts = Array.from(pointers.current.values());
      const dx = pts[0].x - pts[1].x;
      const dy = pts[0].y - pts[1].y;
      const dist = Math.hypot(dx, dy);
      const cx = (pts[0].x + pts[1].x) / 2;
      const cy = (pts[0].y + pts[1].y) / 2;
      const factor = dist / lastPinch.current.dist;
      const [sx, sy] = toSvg(cx, cy);
      zoomAt(factor, sx, sy);
      lastPinch.current = { dist, cx, cy };
      dragged.current = true;
    } else if (pointers.current.size === 1 && lastPan.current) {
      const dxPx = e.clientX - lastPan.current.x;
      const dyPx = e.clientY - lastPan.current.y;
      if (Math.abs(dxPx) + Math.abs(dyPx) > 2) dragged.current = true;
      const svg = svgRef.current;
      if (svg) {
        const rect = svg.getBoundingClientRect();
        const [, , vbW, vbH] = deutschlandViewBox.split(" ").map(Number);
        const dvx = dxPx * (vbW / rect.width);
        const dvy = dyPx * (vbH / rect.height);
        setView((v) => (v.scale > 1.001 ? clampView({ ...v, x: v.x + dvx, y: v.y + dvy }) : v));
      }
      lastPan.current = { x: e.clientX, y: e.clientY };
    }
  };

  const onPointerUp = (e: RPointerEvent<SVGSVGElement>) => {
    pointers.current.delete(e.pointerId);
    if (pointers.current.size < 2) lastPinch.current = null;
    if (pointers.current.size === 0) {
      lastPan.current = null;
      // Drag-flag rovid kesleltetessel reseteljuk, hogy a kovetkezo POI-tap kattinthato legyen
      setTimeout(() => { dragged.current = false; }, 80);
    }
  };

  const handleRegionClick = useCallback(
    (b: BundeslandPath) => {
      if (dragged.current) return;
      if (mapMode === "quiz") {
        quiz.handleCountyClick(b.id);
        return;
      }
      setSelected(b);
    },
    [mapMode, quiz]
  );

  const resetView = () => setView({ x: 0, y: 0, scale: 1 });

  // Mode tab labels (4 languages)
  const MODE_LABELS: Record<"browse" | "ruler" | "quiz", Record<Lang, string>> = {
    browse: { de: "Erkunden", hu: "Böngészés", ro: "Explorare", en: "Browse" },
    ruler: { de: "Entfernung", hu: "Távolság", ro: "Distanță", en: "Ruler" },
    quiz: { de: "Quiz", hu: "Kvíz", ro: "Quiz", en: "Quiz" },
  };

  return (
    <div className="relative w-full flex-1 min-h-[70vh] select-none flex flex-col" style={{ overscrollBehavior: "contain" }}>

      {/* Mode tabs: Browse / Ruler / Quiz */}
      <div className="flex justify-center mb-2 px-1">
        <div className="inline-flex gap-1 bg-[#0A1929]/80 border border-cyan-400/25 rounded-full px-1 py-1 backdrop-blur-sm">
          {(["browse", "ruler", "quiz"] as const).map((mode) => {
            const active = mapMode === mode;
            const Icon = mode === "ruler" ? Ruler : mode === "quiz" ? Brain : MapIcon;
            return (
              <button
                key={mode}
                onClick={() => {
                  setMapMode(mode);
                  // Close browse cards when switching away
                  if (mode !== "browse") {
                    setSelected(null);
                    setSelectedPoiId(null);
                  }
                }}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition text-xs
                  ${active ? "bg-cyan-500/30 text-cyan-100" : "text-cyan-200/70 hover:text-white hover:bg-cyan-500/15"}`}
              >
                <Icon size={13} />
                <span>{MODE_LABELS[mode][displayLang]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Ruler panel */}
      {mapMode === "ruler" && (
        <RulerPanel
          lang={displayLang}
          poiA={rulerState.poiA}
          poiB={rulerState.poiB}
          distanceKm={rulerState.distanceKm}
          onReset={ruler.reset}
          onClose={() => setMapMode("browse")}
        />
      )}

      {/* Quiz panel */}
      {mapMode === "quiz" && (
        <QuizPanel
          lang={displayLang}
          engineState={quiz.engineState}
          score={quiz.score}
          onNext={quiz.handleNext}
          onRetry={quiz.handleRetry}
          onClose={() => setMapMode("browse")}
          pois={pois}
        />
      )}

      {/* Top bar: Search + Favorites toggle */}
      {mapMode === "browse" && (
      <div className="flex items-center gap-2 mb-2 px-1">
        {/* POI Search */}
        <div ref={searchRef} className="relative flex-1">
          <div className="flex items-center gap-1.5 bg-[#0A1929]/80 border border-cyan-400/25 rounded-full px-3 py-1.5 backdrop-blur-sm">
            <Search size={13} className="text-cyan-400/70 shrink-0" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              placeholder={t.searchPlaceholder}
              onChange={(e) => { setSearchQuery(e.target.value); setSearchOpen(true); }}
              onFocus={() => setSearchOpen(true)}
              onKeyDown={(e) => { if (e.key === "Escape") { setSearchOpen(false); setSearchQuery(""); } }}
              className="flex-1 bg-transparent text-xs text-white/90 placeholder-white/35 outline-none min-w-0"
            />
            {searchQuery && (
              <button onClick={() => { setSearchQuery(""); setSearchOpen(false); }} className="text-white/40 hover:text-white/70">
                <X size={11} />
              </button>
            )}
          </div>

          {/* Dropdown */}
          {searchOpen && searchResults.length > 0 && (
            <div className="absolute top-full mt-1 left-0 right-0 z-50 rounded-xl overflow-hidden border border-cyan-400/20 bg-[#070F1C]/97 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
              {searchResults.map((p) => (
                <button
                  key={p.id}
                  onMouseDown={(e) => { e.preventDefault(); handleSearchSelect(p); }}
                  className="w-full text-left px-3 py-2 text-xs text-white/80 hover:bg-cyan-500/15 hover:text-white transition flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: poiColor(p.type) }} />
                  <span className="truncate">{p.name[(lang as Lang)] ?? p.name.de}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Only favorites toggle */}
        <button
          onClick={() => setOnlyFavorites((v) => !v)}
          title={t.onlyFavorites}
          className={`shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs border transition backdrop-blur-sm
            ${onlyFavorites
              ? "bg-yellow-500/20 border-yellow-400/40 text-yellow-300"
              : "bg-[#0A1929]/80 border-cyan-400/25 text-cyan-200/60 hover:text-white hover:bg-cyan-500/10"}`}
        >
          <Star size={13} fill={onlyFavorites ? "currentColor" : "none"} />
          <span className="hidden sm:inline">{t.favorites}</span>
        </button>
      </div>
      )} {/* end mapMode === "browse" search bar */}

      {/* Layer toggle — browse mode only */}
      {mapMode === "browse" && (
      <div className="flex justify-center mb-2">
        <div className="inline-flex gap-1 bg-[#0A1929]/80 border border-cyan-400/25 rounded-full px-1 py-1 backdrop-blur-sm">
          {(Object.keys(LAYER_TYPES) as Layer[]).filter((l) => {
            if (isSimplified && (l === "history" || l === "landmarks")) return false;
            return true;
          }).map((l) => {
            const active = layer === l;
            const Icon = l === "cities" ? Building2
              : l === "nature" ? Mountain
              : l === "history" ? LandmarkIcon
              : l === "landmarks" ? Eye
              : l === "life" ? Sprout
              : l === "economic" ? Factory
              : l === "relief" ? MapIcon
              : Layers;
            return (
              <button
                key={l}
                onClick={() => setLayer(l)}
                title={t[l]}
                className={`
                  flex items-center gap-1.5 px-2.5 py-1 rounded-full
                  transition text-xs
                  ${active ? "bg-cyan-500/30 text-cyan-100" : "text-cyan-200/70 hover:text-white hover:bg-cyan-500/15"}
                `}
              >
                <Icon size={13} />
                <span className="hidden sm:inline">{t[l]}</span>
              </button>
            );
          })}
        </div>
      </div>
      )} {/* end mapMode === "browse" layer toggle */}

      {/* History period chip row — browse mode only */}
      {mapMode === "browse" && layer === "history" && (
        <div className="flex justify-center mb-2 overflow-x-auto">
          <div className="inline-flex gap-1 bg-[#0A1929]/70 border border-pink-400/20 rounded-full px-1 py-1 backdrop-blur-sm whitespace-nowrap">
            {PERIODS.map((p) => {
              const active = period === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setPeriod(p.id)}
                  className={`
                    flex items-center gap-1 px-2.5 py-1 rounded-full transition text-xs
                    ${active ? "bg-pink-400/25 text-pink-100" : "text-pink-200/70 hover:text-white hover:bg-pink-400/15"}
                  `}
                >
                  <span>{p.emoji}</span>
                  <span className="hidden sm:inline">{p.label[displayLang] ?? p.label.de}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div
        className="relative w-full flex-1 mx-auto"
        style={{ overscrollBehavior: "contain", touchAction: "none" }}
      >
        <svg
          ref={svgRef}
          viewBox={deutschlandViewBox}
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full block"
          style={{
            filter: "drop-shadow(0 0 24px rgba(34,211,238,0.18))",
            cursor: view.scale > 1 ? "grab" : "default",
            touchAction: "none",
            overscrollBehavior: "contain",
          }}
          onWheel={onWheel}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          <defs>
            <linearGradient id="bl-idle" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(8,47,73,0.55)" />
              <stop offset="100%" stopColor="rgba(2,15,30,0.85)" />
            </linearGradient>
            <linearGradient id="bl-hot" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(34,211,238,0.38)" />
              <stop offset="100%" stopColor="rgba(8,145,178,0.55)" />
            </linearGradient>
          </defs>

          <g transform={`translate(${view.x} ${view.y}) scale(${view.scale})`}>
            {deutschlandMap.map((b, idx) => {
              const isHover = hovered === b.id;
              const isSelected = selected?.id === b.id;
              const isQuizTarget = mapMode === "quiz"
                && quiz.engineState.task?.type === "click_county"
                && quiz.engineState.task.targetCountyId === b.id
                && quiz.engineState.phase !== "answered";
              return (
                <path
                  key={`${b.id}-${idx}`}
                  d={b.path}
                  fill={isQuizTarget ? "rgba(251,191,36,0.35)" : isSelected || isHover ? "url(#bl-hot)" : "url(#bl-idle)"}
                  stroke={isQuizTarget ? "#FBBF24" : isSelected ? "#67E8F9" : isHover ? "#22D3EE" : "#0EA5E9"}
                  strokeWidth={(isQuizTarget ? 2.5 : isSelected ? 2.2 : 1.2) / view.scale}
                  strokeLinejoin="round"
                  opacity={hovered && !isHover && !isSelected && !isQuizTarget ? 0.55 : 1}
                  onMouseEnter={() => setHovered(b.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => handleRegionClick(b)}
                  style={{ cursor: "pointer", transition: "opacity 200ms, stroke 200ms" }}
                />
              );
            })}

            <g pointerEvents="none">
              {deutschlandMap.map((b, idx) => (
                <text
                  key={`lbl-${b.id}-${idx}`}
                  x={b.labelX}
                  y={b.labelY}
                  textAnchor="middle"
                  fill={selected?.id === b.id ? "#ECFEFF" : "rgba(186,230,253,0.88)"}
                  fontSize={(["DE-BE", "DE-HH", "DE-HB", "DE-SL"].includes(b.id) ? 14 : 20) / view.scale}
                  fontWeight={selected?.id === b.id ? 700 : 500}
                  style={{ userSelect: "none", paintOrder: "stroke", stroke: "#020408", strokeWidth: 3 / view.scale, strokeOpacity: 0.7 }}
                >
                  {b.name[displayLang] ?? b.name.de}
                </text>
              ))}
            </g>

            {/* POI markers */}
            <g>
              {visiblePOIs.map((p) => {
                const [cx, cy] = projectCoords(p.coords[0], p.coords[1]);
                const isSel = selectedPoiId === p.id;
                const isFav = favorites.has(p.id);
                const baseR = isSimplified ? 15 : 12;
                // konstans screen-pixel meret minden zoom szinten (nem no, nem kisebbedik)
                const r = (isSel ? baseR + 2 : baseR) / view.scale;
                // Touch-target: kompromisszum — elég nagy kattintani, de nem fed át szomszéd POI-val
                const touchR = Math.max(r * 2.2, 14 / view.scale);
                const color = poiColor(p.type);
                // Country-map: csak varos-nevek alapertelmezesben, tobbi POI csak 10x+ zoom utan
                const isCityLabel = p.type === "city" || p.type === "state-capital";
                const showLabel = isCityLabel || view.scale >= 10;
                // Small-country scale: viewBox height < 700 → shrink labels (many POIs on tight map)
                const vbHeight = parseFloat((deutschlandViewBox || "0 0 1000 1200").split(" ")[3] || "1200");
                const smallCountry = vbHeight < 700;
                const baseFont = isSimplified
                  ? (p.type === "state-capital" ? 20 : 16)
                  : smallCountry
                    ? (p.type === "state-capital" ? 12 : 9)
                    : (p.type === "state-capital" ? 17 : 14);
                // Font max 2x-re no max zoomig (sqrt-progression, nem extrem)
                const fontGrow = Math.min(2, Math.sqrt(view.scale));
                const fontSize = baseFont * fontGrow / view.scale;
                const label = p.name[displayLang] ?? p.name.de;
                return (
                  <g
                    key={p.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (dragged.current) return;
                      if (mapMode === "ruler") { ruler.handlePoiClick(p); return; }
                      if (mapMode === "quiz") { quiz.handlePoiClick(p); return; }
                      setSelectedPoiId(p.id); setSelected(null);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {/* Láthatatlan click-catcher — nagyobb tap-area mobilon */}
                    <circle cx={cx} cy={cy} r={touchR} fill="transparent" style={{ pointerEvents: "all" }} />
                    <circle cx={cx} cy={cy} r={r * 2.2} fill={color} opacity={0.18} style={{ pointerEvents: "none" }} />
                    <circle
                      cx={cx} cy={cy} r={r}
                      fill={color} stroke="#020408" strokeWidth={1.2 / view.scale}
                    />
                    {isSel && (
                      <circle
                        cx={cx} cy={cy} r={r * 1.8}
                        fill="none" stroke={color} strokeWidth={1.5 / view.scale} opacity={0.8}
                      />
                    )}
                    {/* Favorite star badge — top-right of circle */}
                    {isFav && (
                      <text
                        x={cx + r * 0.75}
                        y={cy - r * 0.65}
                        textAnchor="middle"
                        fontSize={r * 1.1}
                        style={{ pointerEvents: "none", userSelect: "none" }}
                      >
                        ★
                      </text>
                    )}
                    {showLabel && (
                      <text
                        x={cx + r + 3 / view.scale}
                        y={cy + fontSize * 0.35}
                        fill={isSel ? "#ECFEFF" : "rgba(226,232,240,0.95)"}
                        fontSize={fontSize}
                        fontWeight={p.type === "state-capital" ? 700 : 500}
                        style={{ pointerEvents: "none", paintOrder: "stroke", stroke: "#020408", strokeWidth: 3 / view.scale, strokeOpacity: 0.85 }}
                      >
                        {label}
                      </text>
                    )}
                  </g>
                );
              })}
            </g>

            {/* Ruler SVG overlay */}
            {mapMode === "ruler" && (
              <RulerSvgOverlay
                poiA={rulerState.poiA}
                poiB={rulerState.poiB}
                projectCoords={projectCoords}
                viewScale={view.scale}
              />
            )}

            {/* Quiz SVG overlay */}
            {mapMode === "quiz" && (
              <QuizSvgOverlay
                engineState={quiz.engineState}
                pois={pois}
                projectCoords={projectCoords}
                viewScale={view.scale}
              />
            )}
          </g>
        </svg>

        {/* Zoom controls */}
        <div className="absolute top-2 right-2 flex flex-col gap-1.5">
          <button
            onClick={() => zoomAt(1.35)}
            className="w-8 h-8 flex items-center justify-center rounded-md bg-[#0A1929]/80 border border-cyan-400/25 text-cyan-200/90 hover:bg-cyan-500/20 hover:text-white backdrop-blur-sm transition"
            aria-label="Zoom in"
          >
            <Plus size={16} />
          </button>
          <button
            onClick={() => zoomAt(1 / 1.35)}
            className="w-8 h-8 flex items-center justify-center rounded-md bg-[#0A1929]/80 border border-cyan-400/25 text-cyan-200/90 hover:bg-cyan-500/20 hover:text-white backdrop-blur-sm transition"
            aria-label="Zoom out"
          >
            <Minus size={16} />
          </button>
          <button
            onClick={resetView}
            className="w-8 h-8 flex items-center justify-center rounded-md bg-[#0A1929]/80 border border-cyan-400/25 text-cyan-200/70 hover:bg-cyan-500/20 hover:text-white backdrop-blur-sm transition"
            aria-label="Reset"
          >
            <Maximize2 size={14} />
          </button>
        </div>
      </div>

      {/* Bottom info card — Bundesland (browse mode only) */}
      <AnimatePresence>
        {mapMode === "browse" && selected && (
          <motion.div
            key={selected.id}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            style={{ maxHeight: "min(55vh, calc(100vh - 120px))" }}
            className="
              fixed left-1/2 -translate-x-1/2 bottom-4
              w-[92%] max-w-md
              overflow-y-auto overscroll-contain
              rounded-2xl border border-cyan-400/40
              bg-[#0A1929]/95 backdrop-blur-md
              shadow-[0_8px_32px_rgba(34,211,238,0.25)]
              px-4 pb-4
              z-[130]
            "
          >
            {/* Sticky header: cim + X close + Detail gomb egyben, scroll kozben is fixen felul */}
            <div className="sticky top-0 -mx-4 px-4 pt-3 pb-2 bg-[#0A1929]/95 backdrop-blur-md z-10 mb-2">
              <div className="flex items-start gap-3 mb-2">
                {selectedPoiFromState?.coa && (
                  <img
                    src={selectedPoiFromState.coa}
                    alt=""
                    className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 object-contain p-1"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="text-cyan-300 font-semibold text-base leading-tight">
                    {selected.name[displayLang] ?? selected.name.de}
                  </h3>
                  <p className="text-white/60 text-xs mt-0.5">
                    {t.capital}: <span className="text-white/85">{selected.capital}</span>
                  </p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-white/60 hover:text-white p-1 rounded hover:bg-white/5"
                >
                  <X size={16} />
                </button>
              </div>
              <button
                onClick={() => setDetailFor(selected.id)}
                className="
                  w-full flex items-center justify-center gap-1.5
                  py-2 rounded-lg
                  bg-gradient-to-r from-cyan-600 to-sky-700
                  hover:from-cyan-500 hover:to-sky-600
                  text-white text-sm font-medium
                  shadow-md
                "
              >
                {t.detail}
                <ChevronRight size={16} />
              </button>
            </div>

            <div>
              {selectedPoiFromState?.description?.[displayLang] && (
                <p className="text-white/75 text-sm leading-relaxed mb-2">
                  {selectedPoiFromState.description[displayLang]}
                </p>
              )}

              {selectedPoiFromState?.facts?.[displayLang]?.length ? (
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {selectedPoiFromState.facts[displayLang].map((f, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-cyan-500/10 text-cyan-200/90 px-2.5 py-1 rounded-md border border-cyan-400/15"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              ) : null}

              {/* Mehr gomb alul — scroll után */}
              <a
                href={buildStatePath(seoLang, selected.id)}
                className="mt-3 flex w-full items-center justify-center rounded-lg border border-cyan-400/25 px-3 py-2 text-sm text-cyan-200 hover:border-cyan-300/45 hover:text-white"
              >
                {moreLabel}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {mapMode === "browse" && !selected && !selectedPoi && (
        <p className="text-center text-white/40 text-xs mt-4">{t.hint}</p>
      )}

      {/* POI info card (browse mode only) */}
      <AnimatePresence>
        {mapMode === "browse" && selectedPoi && (
          <motion.div
            key={`poi-${selectedPoi.id}`}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            style={{ maxHeight: "min(55vh, calc(100vh - 120px))" }}
            className="
              fixed left-1/2 -translate-x-1/2 bottom-4
              w-[92%] max-w-md
              overflow-y-auto overscroll-contain
              rounded-2xl border border-cyan-400/40
              bg-[#0A1929]/95 backdrop-blur-md
              shadow-[0_8px_32px_rgba(34,211,238,0.25)]
              px-4 pb-4
              z-[130]
            "
          >
            <div className="flex items-start gap-3 mb-2 sticky top-0 -mx-4 px-4 pt-3 pb-2 bg-[#0A1929]/95 backdrop-blur-md z-10">
              {selectedPoi.image ? (
                <img
                  src={selectedPoi.image}
                  alt=""
                  className="w-14 h-14 rounded-lg bg-white/5 border border-white/10 object-cover"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
              ) : selectedPoi.coa ? (
                <img
                  src={selectedPoi.coa}
                  alt=""
                  className="w-14 h-14 rounded-lg bg-white/5 border border-white/10 object-contain p-1"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
              ) : null}
              <div className="flex-1 min-w-0">
                <h3 className="text-cyan-300 font-semibold text-base leading-tight">
                  {selectedPoi.name[displayLang] ?? selectedPoi.name.de}
                </h3>
                {(selectedPoi.historyYear || selectedPoi.historyPeriod) && (
                  <p className="text-pink-300/80 text-[11px] mt-0.5 font-medium">
                    {Array.isArray(selectedPoi.historyYear)
                      ? `${selectedPoi.historyYear[0]}–${selectedPoi.historyYear[1]}`
                      : selectedPoi.historyYear ?? ""}
                    {selectedPoi.historyPeriod && (
                      <span className="text-pink-300/60 ml-1">
                        · {PERIODS.find((p) => p.id === selectedPoi.historyPeriod)?.label[displayLang] ?? selectedPoi.historyPeriod}
                      </span>
                    )}
                  </p>
                )}
                {/* Audio + Favorite row */}
                <div className="flex items-center gap-2 mt-1">
                  {selectedPoi.audio && (
                    <button
                      onClick={() => {
                        const a = new Audio(selectedPoi.audio!);
                        a.play().catch(() => {});
                      }}
                      className="inline-flex items-center gap-1 text-xs text-cyan-300/90 hover:text-cyan-200"
                    >
                      <Volume2 size={12} /> {lang === "hu" ? "kiejtés" : lang === "ro" ? "pronunție" : lang === "en" ? "pronounce" : "Aussprache"}
                    </button>
                  )}
                  <button
                    onClick={() => toggleFavorite(selectedPoi.id)}
                    title={t.favorites}
                    className={`inline-flex items-center gap-1 text-xs transition
                      ${favorites.has(selectedPoi.id) ? "text-yellow-400 hover:text-yellow-300" : "text-white/40 hover:text-yellow-400"}`}
                  >
                    <Star size={13} fill={favorites.has(selectedPoi.id) ? "currentColor" : "none"} />
                    <span className="hidden sm:inline">{t.favorites}</span>
                  </button>
                </div>
              </div>
              <button
                onClick={() => setSelectedPoiId(null)}
                className="text-white/60 hover:text-white p-1 rounded hover:bg-white/5"
              >
                <X size={16} />
              </button>
            </div>

            <div>
              {selectedPoi.description?.[displayLang] && (
                <p className="text-white/75 text-sm leading-relaxed mb-2">
                  {selectedPoi.description[displayLang]}
                </p>
              )}

              {(() => {
                const baseFacts = selectedPoi.facts?.[displayLang] ?? [];
                const advFactsRaw = (selectedPoi as POI & { factsAdvanced?: POI["facts"] }).factsAdvanced?.[displayLang] ?? [];
                const useAdv = grade >= 5 && advFactsRaw.length > 0;
                const allFacts = useAdv ? [...baseFacts, ...advFactsRaw] : baseFacts;
                if (allFacts.length === 0) return null;
                return (
                  <div className="flex flex-wrap gap-1.5">
                    {allFacts.map((f, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-cyan-500/10 text-cyan-200/90 px-2.5 py-1 rounded-md border border-cyan-400/15"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                );
              })()}
              {buildPoiPathById(seoLang, selectedPoi.id) ? (
                <a
                  href={buildPoiPathById(seoLang, selectedPoi.id)!}
                  className="mt-3 flex w-full items-center justify-center rounded-lg border border-cyan-400/25 px-3 py-2 text-sm text-cyan-200 hover:border-cyan-300/45 hover:text-white"
                >
                  {moreLabel}
                </a>
              ) : null}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bundesland detail (sub-regions) */}
      <AnimatePresence>
        {detailFor && (
          <SubRegionView
            stateId={detailFor}
            stateName={deutschlandMap.find((b) => b.id === detailFor)?.name[displayLang] ?? ""}
            lang={lang as Lang}
            pois={pois}
            subregions={countryData.subregions}
            onClose={() => setDetailFor(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveMap;

/* ------------------------------------------------------------------ */
/* SubRegionView — drill-down for a specific Bundesland                */
/* ------------------------------------------------------------------ */

function SubRegionView({
  stateId,
  stateName,
  lang,
  pois,
  subregions,
  onClose,
}: {
  stateId: string;
  stateName: string;
  lang: Lang;
  pois: POI[];
  subregions: Record<string, any>;
  onClose: () => void;
}) {
  const detail = subregions[stateId];
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedPoiId, setSelectedPoiId] = useState<string | null>(null);
  const [selectedRiver, setSelectedRiver] = useState<{ name: string; path: string } | null>(null);
  const [subLayer, setSubLayer] = useState<Layer>("all");
  const pz = usePanZoom({ viewBox: detail?.viewBox ?? "0 0 1000 1200", maxScale: 50 });
  const selectedPoi = useMemo(() => pois.find((p) => p.id === selectedPoiId) ?? null, [selectedPoiId]);
  const { lang: userLang } = useLang();
  const displayLang: Lang = (["de", "hu", "ro", "en"].includes(userLang as string) ? userLang : "de") as Lang;
  // seoLang always follows the user's global language (NOT the map's country-code prop).
  // Previously `lang` prop was used when it happened to match a valid lang (e.g. "ro" on Romania map),
  // which locked detail URLs to that language regardless of the user's choice.
  const seoLang = displayLang as SeoLang;
  const moreLabel = MORE_LABEL[seoLang];

  const subT = T[displayLang] ?? T.de;
  const title = lang === "hu" ? "Részletek" : lang === "ro" ? "Detalii" : lang === "en" ? "Details" : "Details";
  const empty = lang === "hu" ? "Nincs aldivízió erre az államra."
    : lang === "ro" ? "Nu există subdiviziuni pentru acest stat."
    : lang === "en" ? "No subdivisions for this state."
    : "Keine Unterteilungen für dieses Bundesland.";
  const typeLabel = detail?.type === "regierungsbezirk"
    ? (lang === "hu" ? "Kormányzati kerületek" : lang === "ro" ? "Districte" : lang === "en" ? "Administrative regions" : "Regierungsbezirke")
    : (lang === "hu" ? "Járások" : lang === "ro" ? "Districte rurale" : lang === "en" ? "Counties" : "Kreise");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[140] bg-[#020408]/95 backdrop-blur-md flex flex-col"
      style={{ overscrollBehavior: "contain" }}
    >
      <header className="flex items-center justify-between px-4 py-3 border-b border-cyan-500/20">
        <div>
          <h2 className="text-cyan-300 font-semibold text-base leading-tight">{stateName}</h2>
          <p className="text-white/55 text-xs">{typeLabel}{detail ? ` · ${detail.children.length}` : ""}</p>
        </div>
        <button
          onClick={onClose}
          className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/5 transition"
          aria-label={title}
        >
          <X size={20} />
        </button>
      </header>

      {/* Mode tabs: Browse / Ruler / Quiz (placeholder — works only in browse for now) */}
      <div className="flex justify-center px-4 pt-2 pb-1">
        <div className="inline-flex gap-1 bg-[#0A1929]/80 border border-cyan-400/25 rounded-full px-1 py-1 backdrop-blur-sm">
          {(["browse", "ruler", "quiz"] as const).map((mode) => {
            const active = mode === "browse"; // for now only browse is functional
            const Icon = mode === "ruler" ? Ruler : mode === "quiz" ? Brain : MapIcon;
            const labels: Record<typeof mode, Record<Lang, string>> = {
              browse: { de: "Erkunden", hu: "Böngészés", ro: "Explorare", en: "Browse" },
              ruler:  { de: "Entfernung", hu: "Távolság", ro: "Distanță", en: "Ruler" },
              quiz:   { de: "Quiz", hu: "Kvíz", ro: "Quiz", en: "Quiz" },
            };
            return (
              <button
                key={mode}
                disabled={mode !== "browse"}
                onClick={() => {/* TODO: enable ruler+quiz on admin-2 */}}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition text-xs
                  ${active ? "bg-cyan-500/30 text-cyan-100" : "text-cyan-200/40 hover:text-cyan-200/60 cursor-not-allowed opacity-60"}`}
                title={mode !== "browse" ? "Coming soon" : ""}
              >
                <Icon size={13} />
                <span>{labels[mode][displayLang]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Layer filter chips — same as country-level browse */}
      <div className="flex justify-center px-4 pt-2">
        <div className="inline-flex gap-1 bg-[#0A1929]/80 border border-cyan-400/25 rounded-full px-1 py-1 backdrop-blur-sm overflow-x-auto max-w-full">
          {(Object.keys(LAYER_TYPES) as Layer[]).map((l) => {
            const active = subLayer === l;
            const Icon = l === "cities" ? Building2
              : l === "nature" ? Mountain
              : l === "history" ? LandmarkIcon
              : l === "landmarks" ? Eye
              : l === "life" ? Sprout
              : l === "economic" ? Factory
              : l === "relief" ? MapIcon
              : Layers;
            return (
              <button
                key={l}
                onClick={() => setSubLayer(l)}
                title={subT[l]}
                className={`
                  flex items-center gap-1.5 px-2.5 py-1 rounded-full transition text-xs whitespace-nowrap
                  ${active ? "bg-cyan-500/30 text-cyan-100" : "text-cyan-200/70 hover:text-white hover:bg-cyan-500/15"}
                `}
              >
                <Icon size={13} />
                <span className="hidden sm:inline">{subT[l]}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {detail && detail.children.length > 0 ? (
          <div className="relative max-w-xl mx-auto" style={{ touchAction: "none", overscrollBehavior: "contain" }}>
            <svg
              ref={pz.svgRef}
              viewBox={detail.viewBox}
              className="w-full block"
              style={{
                filter: "drop-shadow(0 0 20px rgba(34,211,238,0.18))",
                touchAction: "none",
                cursor: pz.view.scale > 1 ? "grab" : "default",
              }}
              onWheel={pz.handlers.onWheel}
              onPointerDown={pz.handlers.onPointerDown}
              onPointerMove={pz.handlers.onPointerMove}
              onPointerUp={pz.handlers.onPointerUp}
              onPointerCancel={pz.handlers.onPointerCancel}
              onPointerLeave={pz.handlers.onPointerLeave}
            >
              <defs>
                <linearGradient id="sub-idle" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(8,47,73,0.55)" />
                  <stop offset="100%" stopColor="rgba(2,15,30,0.85)" />
                </linearGradient>
                <linearGradient id="sub-hot" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(34,211,238,0.38)" />
                  <stop offset="100%" stopColor="rgba(8,145,178,0.55)" />
                </linearGradient>
              </defs>

              <g transform={`translate(${pz.view.x} ${pz.view.y}) scale(${pz.view.scale})`}>
                {/* Rivers overlay — kattinthato, info-kartya mint POIknal */}
                {(deRivers[stateId] ?? []).map((r, i) => {
                  const isSel = selectedRiver?.name === r.name && selectedRiver?.path === r.path;
                  return (
                    <g key={`river-${i}`} style={{ cursor: "pointer" }}
                      onClick={(e) => { e.stopPropagation(); if (!pz.dragged.current) { setSelectedRiver(r); setSelectedPoiId(null); } }}
                    >
                      {/* lathatatlan szeles hit-line */}
                      <path d={r.path} fill="none" stroke="transparent"
                        strokeWidth={14 / pz.view.scale} strokeLinejoin="round" strokeLinecap="round"
                        style={{ pointerEvents: "stroke" }} />
                      {/* lathato folyo-vonal */}
                      <path d={r.path} fill="none"
                        stroke={isSel ? "rgba(125,211,252,0.95)" : "rgba(56, 189, 248, 0.7)"}
                        strokeWidth={(isSel ? 2.6 : 1.8) / pz.view.scale}
                        strokeLinejoin="round" strokeLinecap="round"
                        pointerEvents="none" />
                    </g>
                  );
                })}

                {detail.children.map((c: any) => {
                  const isHover = hovered === c.id;
                  const isSelected = selected === c.id;
                  return (
                    <path
                      key={c.id}
                      d={c.path}
                      fill={isSelected || isHover ? "url(#sub-hot)" : "url(#sub-idle)"}
                      stroke={isSelected ? "#67E8F9" : isHover ? "#22D3EE" : "#0EA5E9"}
                      strokeWidth={(isSelected ? 1.8 : 1) / pz.view.scale}
                      strokeLinejoin="round"
                      opacity={hovered && !isHover && !isSelected ? 0.55 : 1}
                      onMouseEnter={() => setHovered(c.id)}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => { if (!pz.dragged.current) setSelected(c.id); }}
                      style={{ cursor: "pointer", transition: "opacity 200ms, stroke 200ms" }}
                    />
                  );
                })}

                <g pointerEvents="none">
                  {detail.children.map((c: any) => (
                    <text
                      key={`lbl-${c.id}`}
                      x={c.labelX}
                      y={c.labelY}
                      textAnchor="middle"
                      fill={selected === c.id ? "#ECFEFF" : "rgba(186,230,253,0.85)"}
                      fontSize={(detail.children.length > 10 ? 11 : 16) / pz.view.scale}
                      fontWeight={selected === c.id ? 700 : 500}
                      style={{ paintOrder: "stroke", stroke: "#020408", strokeWidth: 3 / pz.view.scale, strokeOpacity: 0.7 }}
                    >
                      {typeof c.name === "object" ? c.name[displayLang] ?? c.name.en ?? c.name.de : c.name}
                    </text>
                  ))}
                </g>

                {/* POIs located inside this Bundesland (filtered by sub-layer) */}
                <g>
                  {pois
                    .filter((p) => {
                      if (p.type === "region" || p.parent !== stateId) return false;
                      const allowedTypes = new Set(LAYER_TYPES[subLayer]);
                      return allowedTypes.has(p.type);
                    })
                    .map((p) => {
                      const [cx, cy] = projectInState(detail.projection, p.coords[0], p.coords[1]);
                      const color = poiColor(p.type);
                      const label = p.name[displayLang] ?? p.name.de;
                      const baseFont = p.type === "state-capital" ? 17 : 14;
                      // Font max 2x-re no max zoomig (sqrt-progression, nem extrem)
                      const fontGrow = Math.min(2, Math.sqrt(pz.view.scale));
                      const fontSize = baseFont * fontGrow / pz.view.scale;
                      const r = 11 / pz.view.scale;
                      const isSel = selectedPoiId === p.id;
                      // Mobile-friendly: minimum hit-radius 14px (CSS px), regardless of zoom.
                      const hitR = Math.max(14 / pz.view.scale, r * 3);
                      return (
                        <g
                          key={p.id}
                          onClick={(e) => { e.stopPropagation(); if (!pz.dragged.current) setSelectedPoiId(p.id); }}
                          onPointerDown={(e) => { e.stopPropagation(); }}
                          onPointerUp={(e) => { e.stopPropagation(); if (!pz.dragged.current) setSelectedPoiId(p.id); }}
                          style={{ cursor: "pointer", touchAction: "manipulation" }}
                        >
                          {/* Invisible large hit area for easy tapping */}
                          <circle cx={cx} cy={cy} r={hitR} fill="transparent" pointerEvents="all" />
                          <circle cx={cx} cy={cy} r={r * 2.2} fill={color} opacity={0.22} pointerEvents="none" />
                          <circle cx={cx} cy={cy} r={isSel ? r * 1.4 : r} fill={color} stroke="#020408" strokeWidth={1.2 / pz.view.scale} pointerEvents="none" />
                          {isSel && (
                            <circle cx={cx} cy={cy} r={r * 2} fill="none" stroke={color} strokeWidth={1.6 / pz.view.scale} opacity={0.8} pointerEvents="none" />
                          )}
                          <text
                            x={cx + r + 3 / pz.view.scale}
                            y={cy + fontSize * 0.35}
                            fill="rgba(226,232,240,0.95)"
                            fontSize={fontSize}
                            fontWeight={p.type === "state-capital" ? 700 : 500}
                            style={{ pointerEvents: "none", paintOrder: "stroke", stroke: "#020408", strokeWidth: 3 / pz.view.scale, strokeOpacity: 0.85 }}
                          >
                            {label}
                          </text>
                        </g>
                      );
                    })}
                </g>
              </g>
            </svg>

            {/* Zoom controls */}
            <div className="absolute top-2 right-2 flex flex-col gap-1.5">
              <button
                onClick={() => pz.zoomAt(1.35)}
                className="w-8 h-8 flex items-center justify-center rounded-md bg-[#0A1929]/80 border border-cyan-400/25 text-cyan-200/90 hover:bg-cyan-500/20 hover:text-white backdrop-blur-sm transition"
                aria-label="Zoom in"
              >
                <Plus size={16} />
              </button>
              <button
                onClick={() => pz.zoomAt(1 / 1.35)}
                className="w-8 h-8 flex items-center justify-center rounded-md bg-[#0A1929]/80 border border-cyan-400/25 text-cyan-200/90 hover:bg-cyan-500/20 hover:text-white backdrop-blur-sm transition"
                aria-label="Zoom out"
              >
                <Minus size={16} />
              </button>
              <button
                onClick={pz.reset}
                className="w-8 h-8 flex items-center justify-center rounded-md bg-[#0A1929]/80 border border-cyan-400/25 text-cyan-200/70 hover:bg-cyan-500/20 hover:text-white backdrop-blur-sm transition"
                aria-label="Reset"
              >
                <Maximize2 size={14} />
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-sm mx-auto text-center text-white/60 mt-12">{empty}</div>
        )}
      </div>

      {/* POI info card (bottom, floating) */}
      <AnimatePresence>
        {selectedPoi && (
          <motion.div
            key={`sub-poi-${selectedPoi.id}`}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            style={{ maxHeight: "min(55vh, calc(100vh - 120px))" }}
            className="
              fixed left-1/2 -translate-x-1/2 bottom-4
              w-[92%] max-w-md
              overflow-y-auto overscroll-contain
              rounded-2xl border border-cyan-400/40
              bg-[#0A1929]/95 backdrop-blur-md
              shadow-[0_8px_32px_rgba(34,211,238,0.25)]
              p-4
              z-[150]
            "
          >
            <div className="flex items-start gap-3 mb-2 sticky top-0 -mx-4 px-4 pt-3 pb-2 bg-[#0A1929]/95 backdrop-blur-md z-10">
              {selectedPoi.image ? (
                <img src={selectedPoi.image} alt="" className="w-14 h-14 rounded-lg bg-white/5 border border-white/10 object-cover"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
              ) : selectedPoi.coa ? (
                <img src={selectedPoi.coa} alt="" className="w-14 h-14 rounded-lg bg-white/5 border border-white/10 object-contain p-1"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
              ) : null}
              <div className="flex-1 min-w-0">
                <h3 className="text-cyan-300 font-semibold text-base leading-tight">
                  {selectedPoi.name[displayLang] ?? selectedPoi.name.de}
                </h3>
                {selectedPoi.audio && (
                  <button
                    onClick={() => { const a = new Audio(selectedPoi.audio!); a.play().catch(() => {}); }}
                    className="mt-1 inline-flex items-center gap-1 text-xs text-cyan-300/90 hover:text-cyan-200"
                  >
                    <Volume2 size={12} /> {displayLang === "hu" ? "kiejtés" : displayLang === "ro" ? "pronunție" : displayLang === "en" ? "pronounce" : "Aussprache"}
                  </button>
                )}
              </div>
              <button onClick={() => setSelectedPoiId(null)} className="text-white/60 hover:text-white p-1 rounded hover:bg-white/5">
                <X size={16} />
              </button>
            </div>
            {selectedPoi.description?.[displayLang] && (
              <p className="text-white/75 text-sm leading-relaxed mb-2">{selectedPoi.description[displayLang]}</p>
            )}
            {selectedPoi.facts?.[displayLang]?.length ? (
              <div className="flex flex-wrap gap-1.5">
                {selectedPoi.facts[displayLang].map((f, i) => (
                  <span key={i} className="text-[11px] bg-cyan-500/10 text-cyan-200/90 px-2.5 py-1 rounded-md border border-cyan-400/15">{f}</span>
                ))}
              </div>
            ) : null}
            {buildPoiPathById(seoLang, selectedPoi.id) ? (
              <a
                href={buildPoiPathById(seoLang, selectedPoi.id)!}
                className="mt-3 flex w-full items-center justify-center rounded-lg border border-cyan-400/25 px-3 py-2 text-sm text-cyan-200 hover:border-cyan-300/45 hover:text-white"
              >
                {moreLabel}
              </a>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>

      {/* River info card */}
      <AnimatePresence>
        {selectedRiver && !selectedPoi && (
          <motion.div
            key={`sub-river-${selectedRiver.name}`}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="fixed left-1/2 -translate-x-1/2 bottom-4 w-[92%] max-w-md rounded-2xl border border-sky-400/40 bg-[#0A1929]/95 backdrop-blur-md shadow-[0_8px_32px_rgba(56,189,248,0.25)] p-4 z-[150]"
          >
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-lg bg-sky-500/15 border border-sky-400/25 flex items-center justify-center text-2xl">🌊</div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] uppercase tracking-wider text-sky-300/70 mb-0.5">
                  {displayLang === "hu" ? "Folyó" : displayLang === "ro" ? "Râu" : displayLang === "en" ? "River" : "Fluss"}
                </div>
                <h3 className="text-sky-200 font-semibold text-base leading-tight">{selectedRiver.name}</h3>
              </div>
              <button onClick={() => setSelectedRiver(null)} className="text-white/60 hover:text-white p-1 rounded hover:bg-white/5">
                <X size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
