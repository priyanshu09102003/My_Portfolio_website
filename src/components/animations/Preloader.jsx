import { useState, useEffect, useRef } from "react";

const NAME = "Priyanshu";
const NAME_CHARS = NAME.split("");
const PROFESSIONS = ["GenAI Enthusiast", "Full Stack Developer", "UI/UX Designer"];

// ── Timing ───────────────────────────────────────────────────────────────────
// Total time for all 3 professions to cycle:
//   "GenAI Enthusiast"   16 chars → 16×45 + 600 + 16×18 ≈ 1608ms
//   "Full Stack Developer" 19 chars → 19×45 + 600 + 19×18 ≈ 1797ms
//   "UI/UX Designer"     14 chars → 14×45            ≈  630ms (no erase)
//   Total ≈ 4035ms, starting at ~700ms → needs ~4735ms → 7500ms gives comfortable buffer
const LOADER_DURATION = 7500;
const TYPE_SPEED = 45;
const ERASE_SPEED = 18;
const PAUSE_AFTER_TYPE = 600;

function Particles({ count = 50 }) {
  const particles = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.4,
      dur: Math.random() * 14 + 7,
      delay: Math.random() * 7,
      opacity: Math.random() * 0.45 + 0.08,
    }))
  ).current;

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: `rgba(34,197,94,${p.opacity})`,
            boxShadow: `0 0 ${p.size * 3}px rgba(34,197,94,${p.opacity * 0.7})`,
            animation: `loaderFloatUp ${p.dur}s ${p.delay}s infinite linear`,
          }}
        />
      ))}
    </div>
  );
}

function GridLines() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(34,197,94,0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34,197,94,0.035) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        pointerEvents: "none",
      }}
    />
  );
}

function ScanLine() {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.25), transparent)",
          animation: "loaderScanLine 3.5s linear infinite",
        }}
      />
    </div>
  );
}

function CornerAccents() {
  const corner = (style) => (
    <div style={{ position: "absolute", width: "28px", height: "28px", ...style }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "2px", background: "linear-gradient(90deg, #22c55e, transparent)", boxShadow: "0 0 6px rgba(34,197,94,0.5)" }} />
      <div style={{ position: "absolute", top: 0, left: 0, width: "2px", height: "100%", background: "linear-gradient(180deg, #22c55e, transparent)", boxShadow: "0 0 6px rgba(34,197,94,0.5)" }} />
    </div>
  );
  return (
    <>
      {corner({ top: "20px", left: "20px" })}
      {corner({ top: "20px", right: "20px", transform: "scaleX(-1)" })}
      {corner({ bottom: "20px", left: "20px", transform: "scaleY(-1)" })}
      {corner({ bottom: "20px", right: "20px", transform: "scale(-1,-1)" })}
    </>
  );
}

function GlitchLetters({ progress }) {
  const threshold = NAME_CHARS.length - 1;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "0",
        fontSize: "clamp(2.2rem, 8vw, 5.5rem)",
        fontWeight: 600,
        letterSpacing: "clamp(0.08em, 1.5vw, 0.2em)",
        textTransform: "uppercase",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        userSelect: "none",
        lineHeight: 1.1,
      }}
    >
      {NAME_CHARS.map((char, i) => {
        const revealAt = (i / threshold) * 100;
        const revealed = progress >= revealAt;
        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              opacity: revealed ? 1 : 0,
              transform: revealed ? "translateY(0) scale(1)" : "translateY(12px) scale(0.85)",
              transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.22,1,0.36,1)",
              background: "linear-gradient(135deg, #4ade80 0%, #ffffff 55%, #86efac 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              filter: revealed ? "drop-shadow(0 0 18px rgba(34,197,94,0.45))" : "none",
              whiteSpace: char === " " ? "pre" : "normal",
              minWidth: char === " " ? "clamp(0.3rem, 1.5vw, 0.6rem)" : undefined,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </div>
  );
}

function ProfessionDisplay({ active }) {
  const [profIndex, setProfIndex] = useState(0);
  const [text, setText] = useState("");
  const [erasing, setErasing] = useState(false);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    if (!active) return;
    let timeout;
    const full = PROFESSIONS[profIndex];
    const isLast = profIndex === PROFESSIONS.length - 1;

    if (!erasing) {
      if (text.length < full.length) {
        timeout = setTimeout(() => setText(full.slice(0, text.length + 1)), TYPE_SPEED);
      } else {
        if (isLast) return; // stay on last profession
        timeout = setTimeout(() => setErasing(true), PAUSE_AFTER_TYPE);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), ERASE_SPEED);
      } else {
        setErasing(false);
        setProfIndex((i) => i + 1);
        setText("");
      }
    }
    return () => clearTimeout(timeout);
  }, [text, erasing, profIndex, active]);

  useEffect(() => {
    const interval = setInterval(() => setCursor((c) => !c), 500);
    return () => clearInterval(interval);
  }, []);

  if (!active) return <div style={{ minHeight: "2.5em" }} />;

  return (
    <div
      style={{
        fontSize: "clamp(0.65rem, 2vw, 1.1rem)",
        fontWeight: 400,
        letterSpacing: "clamp(0.15em, 1vw, 0.28em)",
        textTransform: "uppercase",
        fontFamily: "'Courier New', monospace",
        color: "#22c55e",
        textShadow: "0 0 16px rgba(34,197,94,0.6)",
        minHeight: "2.5em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "loaderFadeInUp 0.5s cubic-bezier(0.22,1,0.36,1) both",
        paddingInline: "clamp(8px, 4vw, 0px)",
      }}
    >
      <span style={{ opacity: 0.35, marginRight: "6px" }}>&lt;</span>
      <span>{text}</span>
      <span
        style={{
          display: "inline-block",
          width: "2px",
          height: "1em",
          background: "#22c55e",
          marginLeft: "2px",
          boxShadow: "0 0 6px #22c55e",
          opacity: cursor ? 1 : 0,
          transition: "opacity 0.1s",
          verticalAlign: "middle",
        }}
      />
      <span style={{ opacity: 0.35, marginLeft: "6px" }}>/&gt;</span>
    </div>
  );
}

function ProgressBar({ progress }) {
  return (
    <div style={{ width: "clamp(200px, 60vw, 320px)", position: "relative" }}>
      <div
        style={{
          width: "100%",
          height: "10px",
          background: "rgba(34,197,94,0.12)",
          borderRadius: "8px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: "linear-gradient(90deg, #166534 0%, #22c55e 65%, #86efac 100%)",
            borderRadius: "8px",
            transition: "width 0.25s cubic-bezier(0.4,0,0.2,1)",
            boxShadow: "0 0 10px rgba(34,197,94,0.7)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: "-1px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: "#86efac",
              boxShadow: "0 0 10px #22c55e, 0 0 20px rgba(34,197,94,0.5)",
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
          fontFamily: "'Courier New', monospace",
          fontSize: "clamp(0.5rem, 1.2vw, 0.62rem)",
          letterSpacing: "0.18em",
          color: "rgba(34,197,94,0.4)",
        }}
      >
        <span>INITIALIZING</span>
        <span>{Math.round(progress)}%</span>
      </div>
    </div>
  );
}

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 200);
    const t2 = setTimeout(() => setPhase(2), 700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    const STEPS = 120;
    const INTERVAL = LOADER_DURATION / STEPS;
    let step = 0;
    let interval;

    const start = setTimeout(() => {
      interval = setInterval(() => {
        step += 1;
        const p = Math.min((step / STEPS) * 100, 100);
        setProgress(p);
        if (step >= STEPS) {
          clearInterval(interval);
          setTimeout(() => {
            setExiting(true);
            setTimeout(() => {
              setVisible(false);
              if (onComplete) onComplete();
            }, 900);
          }, 200);
        }
      }, INTERVAL);
    }, 500);

    return () => { clearTimeout(start); clearInterval(interval); };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes loaderFloatUp {
          0% { transform: translateY(0) scale(1); opacity: 0.25; }
          50% { transform: translateY(-28px) scale(1.15); opacity: 0.45; }
          100% { transform: translateY(-70px) scale(0.8); opacity: 0; }
        }
        @keyframes loaderScanLine {
          0% { top: -1px; }
          100% { top: 100%; }
        }
        @keyframes loaderFadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes loaderPulseRing {
          0% { transform: scale(0.92); opacity: 0.5; }
          70% { transform: scale(1.18); opacity: 0; }
          100% { transform: scale(1.18); opacity: 0; }
        }
        @keyframes loaderOrbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(25px, -18px) scale(1.06); }
          66% { transform: translate(-18px, 14px) scale(0.95); }
        }
        @keyframes loaderExit {
          0% { opacity: 1; transform: scale(1); filter: blur(0px); }
          100% { opacity: 0; transform: scale(1.03); filter: blur(4px); }
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "radial-gradient(ellipse at 25% 30%, #0b1f0b 0%, #050e05 45%, #020702 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
          overflow: "hidden",
          animation: exiting ? "loaderExit 0.7s cubic-bezier(0.4,0,1,1) forwards" : "none",
        }}
      >
        <div style={{ position: "absolute", width: "clamp(300px, 50vw, 520px)", height: "clamp(300px, 50vw, 520px)", borderRadius: "50%", background: "radial-gradient(circle, rgba(34,197,94,0.09) 0%, transparent 70%)", top: "45%", left: "30%", transform: "translate(-50%,-50%)", animation: "loaderOrbFloat 9s ease-in-out infinite", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: "clamp(200px, 35vw, 380px)", height: "clamp(200px, 35vw, 380px)", borderRadius: "50%", background: "radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 70%)", top: "35%", left: "70%", transform: "translate(-50%,-50%)", animation: "loaderOrbFloat 12s 3s ease-in-out infinite reverse", pointerEvents: "none" }} />

        <GridLines />
        <Particles count={45} />
        <ScanLine />
        <CornerAccents />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "clamp(16px, 3vw, 28px)",
            padding: "clamp(24px, 5vw, 48px)",
            zIndex: 1,
            width: "100%",
            maxWidth: "900px",
          }}
        >
          <div style={{ position: "relative" }}>
            {phase >= 1 && (
              <div style={{ position: "absolute", inset: "-20px", borderRadius: "50%", border: "1px solid rgba(34,197,94,0.12)", animation: "loaderPulseRing 2.8s ease-out infinite", pointerEvents: "none" }} />
            )}
            <GlitchLetters progress={progress} />
          </div>

          <div style={{ width: "clamp(120px, 40vw, 260px)", height: "1px", background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.45), rgba(74,222,128,0.3), transparent)", opacity: phase >= 2 ? 1 : 0, transition: "opacity 0.6s ease 0.2s" }} />

          <ProfessionDisplay active={phase >= 2} />

          <div style={{ opacity: phase >= 2 ? 1 : 0, transition: "opacity 0.6s ease 0.3s", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <ProgressBar progress={progress} />
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "clamp(16px, 3vh, 28px)",
            fontFamily: "'Courier New', monospace",
            fontSize: "clamp(0.45rem, 1.2vw, 0.58rem)",
            letterSpacing: "0.25em",
            color: "rgba(34,197,94,0.18)",
            textTransform: "uppercase",
            opacity: phase >= 1 ? 1 : 0,
            transition: "opacity 1s ease 1.2s",
          }}
        >
          EST. {new Date().getFullYear()} &nbsp;·&nbsp; PORTFOLIO
        </div>
      </div>
    </>
  );
}