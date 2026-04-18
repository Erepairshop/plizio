// Main sticker album app
const { useState, useEffect, useMemo, useCallback } = React;

const TWEAKS = /*EDITMODE-BEGIN*/{
  "unlockedCount": 16,
  "showLocked": true,
  "bgIntensity": 1,
  "filterDefault": "Alle"
}/*EDITMODE-END*/;

const RARITY_LABEL = {
  common: "Häufig",
  rare: "Selten",
  epic: "Episch",
  legendary: "Legendär"
};

const CATEGORIES = ["Alle", "Planet", "Stern", "Mond", "Zwergplanet", "Objekt", "Technik", "Mensch", "Phänomen", "Phantasie"];

function Sticker({ data, index, locked, isNew, onClick }) {
  const Art = window.StickerArt[data.id];
  return (
    <div
      className={`card ${locked ? "locked" : ""} ${isNew ? "isnew" : ""}`}
      data-rarity={data.rarity}
      onClick={() => !locked && onClick(data)}
      style={{ "--halo": data.halo }}
    >
      <div className="card-inner">
        <div className="badge-top">
          <span className="badge-rarity">{RARITY_LABEL[data.rarity]}</span>
          {isNew && !locked && <span className="badge-new">NEU!</span>}
        </div>
        <div className="art">
          <div className="halo" />
          {Art && <Art />}
          {locked && (
            <svg className="lock" viewBox="0 0 24 24" fill="none">
              <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
              <path d="M 8 11 V 7 a 4 4 0 0 1 8 0 V 11" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          )}
        </div>
        <div className="meta">
          <div className="name">{locked ? "???" : data.name}</div>
          <div className="num">#{String(index + 1).padStart(2, "0")}</div>
        </div>
      </div>
    </div>
  );
}

function Modal({ sticker, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!sticker) return null;
  const Art = window.StickerArt[sticker.id];
  return (
    <div className="modal-backdrop open" onClick={onClose}>
      <div
        className="modal"
        data-rarity={sticker.rarity}
        onClick={(e) => e.stopPropagation()}
        style={{ "--halo": sticker.halo }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Schließen">×</button>
        <div className="modal-art">
          <div className="halo" />
          {Art && <Art />}
        </div>
        <div className="modal-body">
          <h3>{sticker.name}</h3>
          <div className="tag-row">
            <span className="tag">{sticker.category}</span>
            <span className="tag" style={{ color: `var(--rarity-${sticker.rarity})` }}>
              ★ {RARITY_LABEL[sticker.rarity]}
            </span>
            <span className="tag">{sticker.en}</span>
          </div>
          <div className="fact">💫 {sticker.fact}</div>
          <div className="stats">
            {Object.entries(sticker.stats).map(([k, v]) => (
              <div key={k} className="stat">
                <div className="k">{k}</div>
                <div className="v">{v}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 800 }}>
            Sticker #{String(window.STICKERS.findIndex(s => s.id === sticker.id) + 1).padStart(2, "0")} von 20
          </div>
        </div>
      </div>
    </div>
  );
}

function Tweaks({ open, tweaks, setTweak }) {
  return (
    <div className={`tweaks ${open ? "open" : ""}`}>
      <h4>Tweaks</h4>
      <div className="tweak-row">
        <label>Freigeschaltet: {tweaks.unlockedCount} / 20</label>
        <input
          type="range"
          min="0"
          max="20"
          value={tweaks.unlockedCount}
          onChange={(e) => setTweak("unlockedCount", parseInt(e.target.value, 10))}
        />
      </div>
      <div className="tweak-row tweak-toggle">
        <label>Gesperrte zeigen</label>
        <div
          className={`toggle ${tweaks.showLocked ? "on" : ""}`}
          onClick={() => setTweak("showLocked", !tweaks.showLocked)}
        />
      </div>
      <div className="tweak-row">
        <label>Start-Filter</label>
        <select
          value={tweaks.filterDefault}
          onChange={(e) => setTweak("filterDefault", e.target.value)}
        >
          {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div style={{ fontSize: 10, color: "var(--ink-mute)", lineHeight: 1.5 }}>
        Tipp: Klicke auf einen Sticker für die Detail­ansicht.
      </div>
    </div>
  );
}

function App() {
  const [tweaks, setTweaks] = useState(TWEAKS);
  const [editMode, setEditMode] = useState(false);
  const [filter, setFilter] = useState(TWEAKS.filterDefault);
  const [active, setActive] = useState(null);

  // persist tweaks to parent
  const setTweak = useCallback((key, value) => {
    setTweaks(prev => {
      const next = { ...prev, [key]: value };
      window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [key]: value } }, "*");
      return next;
    });
  }, []);

  // edit-mode protocol
  useEffect(() => {
    const handler = (e) => {
      if (!e.data) return;
      if (e.data.type === "__activate_edit_mode") setEditMode(true);
      if (e.data.type === "__deactivate_edit_mode") setEditMode(false);
    };
    window.addEventListener("message", handler);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", handler);
  }, []);

  useEffect(() => { setFilter(tweaks.filterDefault); }, [tweaks.filterDefault]);

  const filtered = useMemo(() => {
    return window.STICKERS.filter(s => filter === "Alle" || s.category === filter);
  }, [filter]);

  const unlockedSet = useMemo(() => {
    // mark first N (by natural order) as unlocked
    const ids = new Set();
    window.STICKERS.slice(0, tweaks.unlockedCount).forEach(s => ids.add(s.id));
    return ids;
  }, [tweaks.unlockedCount]);

  // last 2 unlocked are "new"
  const newSet = useMemo(() => {
    const ids = new Set();
    window.STICKERS.slice(Math.max(0, tweaks.unlockedCount - 2), tweaks.unlockedCount).forEach(s => ids.add(s.id));
    return ids;
  }, [tweaks.unlockedCount]);

  const progressPct = (tweaks.unlockedCount / 20) * 100;

  const visible = filtered.filter(s => tweaks.showLocked || unlockedSet.has(s.id));

  return (
    <>
      <header className="app-chrome">
        <h1>
          <svg width="22" height="22" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#4aa8ff" />
            <path d="M 3 10 Q 8 8 12 10 Q 16 12 21 10" stroke="#22d3a0" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M 3 14 Q 8 16 12 14 Q 16 12 21 14" stroke="#22d3a0" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <circle cx="12" cy="12" r="10" fill="none" stroke="#1a0d3a" strokeWidth="1.5" />
          </svg>
          Sticker-Album
        </h1>
        <div className="subtitle">Astrosachkunde · Klasse 4 · Plizio</div>
      </header>

      <div className="page">
        <div className="hero">
          <div>
            <h2>Deine Weltraum-<span className="accent">Sammlung</span></h2>
            <p>
              Sammle alle 20 Sticker, indem du die Inseln auf der Karte meisterst.
              Klicke auf einen Sticker, um mehr zu erfahren!
            </p>
          </div>
          <div className="progress-card">
            <div className="progress-row">
              <span>Gesammelt</span>
              <span className="count">{tweaks.unlockedCount}<span style={{ color: "var(--ink-mute)", fontSize: 14 }}>/20</span></span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progressPct}%` }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 800, color: "var(--ink-mute)" }}>
              <span>{Math.round(progressPct)}% komplett</span>
              <span>{20 - tweaks.unlockedCount} offen</span>
            </div>
          </div>
        </div>

        <div className="filters">
          {CATEGORIES.map(c => {
            const count = c === "Alle" ? window.STICKERS.length : window.STICKERS.filter(s => s.category === c).length;
            if (count === 0) return null;
            return (
              <button
                key={c}
                className={`chip ${filter === c ? "active" : ""}`}
                onClick={() => setFilter(c)}
              >
                {c} <span style={{ opacity: 0.6, marginLeft: 4 }}>{count}</span>
              </button>
            );
          })}
        </div>

        <div className="section-divider">
          <h3>Alle Sticker</h3>
          <span className="count-pill">{visible.length}</span>
        </div>

        <div className="grid">
          {visible.map(s => {
            const idx = window.STICKERS.findIndex(x => x.id === s.id);
            const locked = !unlockedSet.has(s.id);
            const isNew = newSet.has(s.id);
            return (
              <Sticker
                key={s.id}
                data={s}
                index={idx}
                locked={locked}
                isNew={isNew}
                onClick={setActive}
              />
            );
          })}
        </div>
      </div>

      <Modal sticker={active} onClose={() => setActive(null)} />
      <Tweaks open={editMode} tweaks={tweaks} setTweak={setTweak} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
