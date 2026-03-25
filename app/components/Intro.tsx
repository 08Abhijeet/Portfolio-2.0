"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroProps {
  onFinish: () => void;
}

export default function Intro({ onFinish }: IntroProps) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);
  const finishedRef = useRef(false);

  // Direct SVG DOM refs — updated every frame, no React re-render needed
  const waveGroupRef  = useRef<SVGGElement>(null);
  const wave1Ref      = useRef<SVGPathElement>(null);
  const wave2Ref      = useRef<SVGPathElement>(null);
  const waterBodyRef  = useRef<SVGRectElement>(null);

  const W = 1400;
  const H = 280;

  // Pre-computed wave path strings (period = 500 px, amplitude ±40 px)
  // Drawn wide enough (-2000 → +3500) so any translateX offset is covered
  // Period = 500px, amplitude = 40px for very visible wobble
  const WAVE1 = [
    "M-2000,40",
    "C-1875,-40 -1750,80 -1625,40",
    "C-1500,-40 -1375,80 -1250,40",
    "C-1125,-40 -1000,80  -875,40",
    "C-750,-40   -625,80  -500,40",
    "C-375,-40   -250,80  -125,40",
    "C0,-40       125,80   250,40",
    "C375,-40     500,80   625,40",
    "C750,-40     875,80  1000,40",
    "C1125,-40   1250,80  1375,40",
    "C1500,-40   1625,80  1750,40",
    "C1875,-40   2000,80  2125,40",
    "C2250,-40   2375,80  2500,40",
    "C2625,-40   2750,80  2875,40",
    "C3000,-40   3125,80  3250,40",
    `V${H+10} H-2000 Z`,
  ].join(" ");

  const WAVE2 = [
    "M-2000,30",
    "C-1875,80  -1750,-20 -1625,30",
    "C-1500,80  -1375,-20 -1250,30",
    "C-1125,80  -1000,-20  -875,30",
    "C-750,80    -625,-20  -500,30",
    "C-375,80    -250,-20  -125,30",
    "C0,80        125,-20   250,30",
    "C375,80      500,-20   625,30",
    "C750,80      875,-20  1000,30",
    "C1125,80    1250,-20  1375,30",
    "C1500,80    1625,-20  1750,30",
    "C1875,80    2000,-20  2125,30",
    "C2250,80    2375,-20  2500,30",
    "C2625,80    2750,-20  2875,30",
    "C3000,80    3125,-20  3250,30",
    `V${H+10} H-2000 Z`,
  ].join(" ");

  useEffect(() => {
    const DURATION    = 2200; // total fill time ms
    const WAVE_PERIOD = 500;  // px — one full cycle (shorter = more crests)
    const SPD1        = 5.0;  // px per frame, wave 1 → right (faster)
    const SPD2        = -3.5; // px per frame, wave 2 → left (faster)

    const start = performance.now();
    let frameId = 0;
    let wx1 = 0;
    let wx2 = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const raw     = Math.min(1, elapsed / DURATION);
      const eased   = 1 - Math.pow(1 - raw, 2); // ease-out quad
      const waterY  = H * (1 - eased);           // H → 0

      // ── Water body (solid rect) rises from bottom — sits below wave crest ──
      if (waterBodyRef.current) {
        waterBodyRef.current.setAttribute("y", String(waterY + 36));
      }

      // ── Wave group moves vertically with the water level ──
      if (waveGroupRef.current) {
        waveGroupRef.current.setAttribute("transform", `translate(0, ${waterY})`);
      }

      // ── Horizontal wave scroll ──
      wx1 = ((wx1 + SPD1) % WAVE_PERIOD + WAVE_PERIOD) % WAVE_PERIOD;
      wx2 = ((wx2 + SPD2) % WAVE_PERIOD + WAVE_PERIOD) % WAVE_PERIOD;

      if (wave1Ref.current) {
        wave1Ref.current.setAttribute("transform", `translate(${-wx1}, 0)`);
      }
      if (wave2Ref.current) {
        wave2Ref.current.setAttribute("transform", `translate(${wx2}, 0)`);
      }

      // Only update React state for the progress counter (cheap)
      setProgress(Math.round(eased * 100));

      if (raw < 1) {
        frameId = requestAnimationFrame(tick);
      } else if (!finishedRef.current) {
        finishedRef.current = true;
        // Dramatic slow zoom through the name into the site
        setExiting(true);
        setTimeout(() => {
          setDone(true);
          setTimeout(onFinish, 0);
        }, 1200);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0d0d0d",
          }}
          animate={exiting ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
        >
          <motion.div
            style={{ width: "100vw", padding: "0 1vw", boxSizing: "border-box" }}
            animate={exiting ? { scale: 15 } : { scale: 1 }}
            transition={{ duration: 4, ease: [0.6, 0.01, 0, 1] }}
          >
            <svg
              viewBox={`0 0 ${W} ${H}`}
              preserveAspectRatio="xMidYMid meet"
              style={{ width: "100%", display: "block", overflow: "visible" }}
              aria-label="Abhijeet"
            >
              <defs>
                <clipPath id="letter-clip">
                  <text
                    x={W / 2}
                    y="225"
                    textAnchor="middle"
                    fontFamily="Poppins, Arial, sans-serif"
                    fontSize="240"
                    fontWeight="900"
                    letterSpacing="-8"
                  >
                    ABHIJEET
                  </text>
                  <text
                    x="1220"
                    y="275"
                    textAnchor="end"
                    fontFamily="Poppins, Arial, sans-serif"
                    fontSize="22"
                    fontWeight="500"
                    letterSpacing="0.05em"
                  >
                    loading... {progress}%
                  </text>
                </clipPath>
              </defs>

              {/* Layer 1 – dark grey base text (always visible) */}
              <text
                x={W / 2}
                y="225"
                textAnchor="middle"
                fontFamily="Poppins, Arial, sans-serif"
                fontSize="240"
                fontWeight="900"
                letterSpacing="-8"
                fill="#2a2a2a"
              >
                ABHIJEET
              </text>
              <text
                x="1220"
                y="275"
                textAnchor="end"
                fontFamily="Poppins, Arial, sans-serif"
                fontSize="22"
                fontWeight="500"
                fill="#2a2a2a"
                letterSpacing="0.05em"
              >
                loading... {progress}%
              </text>

              {/* Layer 2 – water fill, clipped to letter shapes */}
              <g clipPath="url(#letter-clip)">
                {/* Solid body — sits below the wave */}
                <rect
                  ref={waterBodyRef}
                  x="0"
                  y={H}           /* starts off-screen, pushed up by rAF */
                  width={W}
                  height={H + 20}
                  fill="rgba(255,255,255,0.97)"
                />

                {/* Wave group — vertical pos driven by rAF */}
                <g ref={waveGroupRef} transform={`translate(0, ${H})`}>
                  {/* Wave 1: scrolls right */}
                  <path
                    ref={wave1Ref}
                    d={WAVE1}
                    fill="rgba(255,255,255,0.97)"
                  />
                  {/* Wave 2: scrolls left, softer */}
                  <path
                    ref={wave2Ref}
                    d={WAVE2}
                    fill="rgba(195,195,195,0.4)"
                  />
                </g>
              </g>
              {/* The white filled version of both texts are covered by the water rect inside the clipPath above */}
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
