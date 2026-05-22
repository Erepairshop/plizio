"use client";
import { useEffect, useState } from "react";
import type { Lang } from "@/lib/seo/slugs";

interface DailyForecast {
  date: string;
  tmax: number;
  tmin: number;
  code: number;
}

interface CurrentWeather {
  temp: number;
  code: number;
  isDay: boolean;
}

const COPY: Record<Lang, { now: string; forecast: string; days: string[]; loading: string }> = {
  de: { now: "Aktuelles Wetter", forecast: "5-Tage-Vorhersage", days: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], loading: "Lade Wetter…" },
  hu: { now: "Időjárás most", forecast: "5 napos előrejelzés", days: ["V", "H", "K", "Sze", "Cs", "P", "Szo"], loading: "Időjárás betöltése…" },
  ro: { now: "Vremea acum", forecast: "Prognoză 5 zile", days: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"], loading: "Se încarcă vremea…" },
  en: { now: "Current Weather", forecast: "5-day forecast", days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], loading: "Loading weather…" },
};

// WMO code → emoji + label (simplified)
function wmoIcon(code: number): string {
  if (code === 0) return "☀️";
  if (code <= 2) return "🌤️";
  if (code === 3) return "☁️";
  if (code >= 45 && code <= 48) return "🌫️";
  if (code >= 51 && code <= 57) return "🌦️";
  if (code >= 61 && code <= 67) return "🌧️";
  if (code >= 71 && code <= 77) return "🌨️";
  if (code >= 80 && code <= 82) return "🌧️";
  if (code >= 85 && code <= 86) return "🌨️";
  if (code >= 95) return "⛈️";
  return "🌡️";
}

export default function PoiWeather({ coords, lang }: { coords: [number, number] | undefined; lang: Lang }) {
  const [current, setCurrent] = useState<CurrentWeather | null>(null);
  const [daily, setDaily] = useState<DailyForecast[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!coords || coords.length < 2) {
      setLoading(false);
      return;
    }
    const [lon, lat] = coords;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,is_day&daily=temperature_2m_max,temperature_2m_min,weather_code&forecast_days=5&timezone=auto`;
    fetch(url)
      .then((r) => r.json())
      .then((j) => {
        if (j?.current) {
          setCurrent({
            temp: Math.round(j.current.temperature_2m),
            code: j.current.weather_code,
            isDay: Boolean(j.current.is_day),
          });
        }
        if (j?.daily) {
          const out: DailyForecast[] = [];
          for (let i = 0; i < (j.daily.time?.length || 0); i++) {
            out.push({
              date: j.daily.time[i],
              tmax: Math.round(j.daily.temperature_2m_max[i]),
              tmin: Math.round(j.daily.temperature_2m_min[i]),
              code: j.daily.weather_code[i],
            });
          }
          setDaily(out);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [coords?.[0], coords?.[1]]);

  if (!coords || coords.length < 2) return null;
  if (error) return null;

  const copy = COPY[lang] || COPY.en;

  if (loading) {
    return (
      <section className="mt-8 rounded-3xl border border-cyan-500/15 bg-[#07111b]/80 p-5">
        <p className="text-sm text-white/55">{copy.loading}</p>
      </section>
    );
  }

  return (
    <section className="mt-8 rounded-3xl border border-cyan-500/15 bg-[#07111b]/80 p-5">
      <div className="flex flex-wrap items-end gap-6">
        {current ? (
          <div className="flex items-center gap-4">
            <span className="text-5xl leading-none" aria-hidden>
              {wmoIcon(current.code)}
            </span>
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-cyan-300/80">{copy.now}</p>
              <p className="mt-1 text-3xl font-semibold text-white/90">
                {current.temp}°C
              </p>
            </div>
          </div>
        ) : null}

        {daily.length > 0 ? (
          <div className="flex-1">
            <p className="mb-2 text-[0.7rem] uppercase tracking-[0.2em] text-white/55">{copy.forecast}</p>
            <ul className="flex gap-2 overflow-x-auto">
              {daily.map((d) => {
                const dt = new Date(d.date);
                const dayName = copy.days[dt.getDay()];
                return (
                  <li
                    key={d.date}
                    className="flex min-w-[64px] flex-col items-center rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2"
                  >
                    <span className="text-[0.7rem] text-white/55">{dayName}</span>
                    <span className="my-1 text-xl" aria-hidden>{wmoIcon(d.code)}</span>
                    <span className="text-xs text-white/85">{d.tmax}°</span>
                    <span className="text-[0.7rem] text-white/45">{d.tmin}°</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
      <p className="mt-3 text-[0.65rem] text-white/35">
        via Open-Meteo
      </p>
    </section>
  );
}
