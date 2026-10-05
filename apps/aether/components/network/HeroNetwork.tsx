"use client";

import { useRef, useEffect, useCallback } from "react";

// ── Named nodes (visible labeled nodes on the sphere) ──
const NAMED_NODES = [
  { id: "AGT-041", label: "AGT-041", sublabel: "AGENT", lat: 38, lon: -55, class: "AGENT" },
  { id: "CMP-882", label: "CMP-882", sublabel: "COMPUTE", lat: 52, lon: 42, class: "COMPUTE" },
  { id: "STL-204", label: "STL-204", sublabel: "SETTLEMENT", lat: 5, lon: 65, class: "SETTLEMENT" },
  { id: "CRD-017", label: "CRD-017", sublabel: "COORDINATOR", lat: -22, lon: -35, class: "COORDINATOR" },
];

const ACCENT = "163,230,53";
const ACCENT_DIM = "163,230,53";

// ── Convert lat/lon to 3D unit sphere ──
function latLonTo3D(lat: number, lon: number): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return [
    -Math.sin(phi) * Math.cos(theta),
    Math.cos(phi),
    Math.sin(phi) * Math.sin(theta),
  ];
}

// ── Fibonacci sphere for even point distribution ──
function fibonacciSphere(n: number): [number, number, number][] {
  const pts: [number, number, number][] = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    pts.push([Math.cos(theta) * r, y, Math.sin(theta) * r]);
  }
  return pts;
}

// ── Rotate around Y-axis ──
function rotY(p: [number, number, number], a: number): [number, number, number] {
  return [
    p[0] * Math.cos(a) - p[2] * Math.sin(a),
    p[1],
    p[0] * Math.sin(a) + p[2] * Math.cos(a),
  ];
}

// ── Perspective project ──
function project(
  p: [number, number, number],
  cx: number,
  cy: number,
  radius: number
): [number, number, number] {
  const perspective = 2.2;
  const z = p[2] + perspective;
  const scale = (perspective / z) * radius;
  return [cx + p[0] * scale, cy - p[1] * scale, p[2]];
}

// ── Angular distance between two 3D unit vectors ──
function angularDist(
  a: [number, number, number],
  b: [number, number, number]
): number {
  const dot = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  return Math.acos(Math.min(1, Math.max(-1, dot)));
}

// ── Pre-generate static data ──
const RANDOM_COUNT = 110;
const basePoints = fibonacciSphere(RANDOM_COUNT);
const namedPoints3D = NAMED_NODES.map((n) => latLonTo3D(n.lat, n.lon));

// Build connections: pairs within ~25°
const THRESHOLD = 0.44; // ~25 degrees in radians
const allBasePoints = [...basePoints, ...namedPoints3D];

const connections: [number, number][] = [];
for (let i = 0; i < allBasePoints.length; i++) {
  for (let j = i + 1; j < allBasePoints.length; j++) {
    const d = angularDist(allBasePoints[i], allBasePoints[j]);
    if (d < THRESHOLD) {
      connections.push([i, j]);
    }
  }
}

// Packet animation state
interface Packet {
  connectionIdx: number;
  progress: number;
  speed: number;
  dir: 1 | -1;
}

export function HeroNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);
  const frameRef = useRef<number>(0);
  const packetsRef = useRef<Packet[]>([]);
  const tickRef = useRef(0);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      reducedMotionRef.current = preference.matches;
    };
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;

    ctx.clearRect(0, 0, W, H);

    const isMobile = W < 600;
    const radius = Math.min(W, H) * (isMobile ? 0.38 : 0.42);
    // Center the globe slightly right-of-center on desktop
    const cx = isMobile ? W * 0.5 : W * 0.61;
    const cy = H * 0.5;

    const angle = angleRef.current;
    if (!reducedMotionRef.current) angleRef.current += 0.0018;

    // ── Rotate all points ──
    const rotated = allBasePoints.map((p) => rotY(p, angle));
    const projected = rotated.map((p) => project(p, cx, cy, radius));

    // Spawn packets occasionally
    tickRef.current++;
    if (!reducedMotionRef.current && tickRef.current % 60 === 0 && connections.length > 0) {
      const ci = Math.floor(Math.random() * connections.length);
      packetsRef.current.push({
        connectionIdx: ci,
        progress: 0,
        speed: 0.008 + Math.random() * 0.006,
        dir: Math.random() > 0.5 ? 1 : -1,
      });
      if (packetsRef.current.length > 8) packetsRef.current.shift();
    }

    // ── Draw subtle sphere glow ──
    const glowGrad = ctx.createRadialGradient(cx, cy, radius * 0.6, cx, cy, radius * 1.2);
    glowGrad.addColorStop(0, `rgba(${ACCENT_DIM},0.04)`);
    glowGrad.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = glowGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, radius * 1.2, 0, Math.PI * 2);
    ctx.fill();

    // ── Draw sphere circle outline ──
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(${ACCENT},0.06)`;
    ctx.lineWidth = 0.5;
    ctx.stroke();

    // ── Draw connections (all, back-to-front) ──
    connections.forEach(([ai, bi]) => {
      const pa = projected[ai];
      const pb = projected[bi];
      // Average z for depth-based opacity
      const avgZ = ((pa[2] + 1) / 2 + (pb[2] + 1) / 2) / 2;
      const opacity = 0.07 + avgZ * 0.2;

      ctx.beginPath();
      ctx.moveTo(pa[0], pa[1]);
      ctx.lineTo(pb[0], pb[1]);
      ctx.strokeStyle = `rgba(${ACCENT},${opacity})`;
      ctx.lineWidth = 0.4;
      ctx.stroke();
    });

    // ── Draw packets ──
    packetsRef.current = packetsRef.current.filter((p) => {
      p.progress += p.speed;
      return p.progress < 1;
    });

    packetsRef.current.forEach((packet) => {
      const [ai, bi] = connections[packet.connectionIdx] ?? [0, 1];
      if (!projected[ai] || !projected[bi]) return;

      const pa = projected[ai];
      const pb = projected[bi];
      const t = packet.dir === 1 ? packet.progress : 1 - packet.progress;
      const x = pa[0] + (pb[0] - pa[0]) * t;
      const y = pa[1] + (pb[1] - pa[1]) * t;
      const pz = ((pa[2] + pb[2]) / 2 + 1) / 2;
      const alpha = Math.min(1, pz * 1.5) * (1 - Math.abs(packet.progress - 0.5) * 1.5);
      if (alpha <= 0) return;

      // Trail
      const t0 = Math.max(0, t - 0.12 * packet.dir);
      const x0 = pa[0] + (pb[0] - pa[0]) * t0;
      const y0 = pa[1] + (pb[1] - pa[1]) * t0;
      const trailGrad = ctx.createLinearGradient(x0, y0, x, y);
      trailGrad.addColorStop(0, `rgba(${ACCENT},0)`);
      trailGrad.addColorStop(1, `rgba(${ACCENT},${alpha * 0.8})`);
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x, y);
      ctx.strokeStyle = trailGrad;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Dot
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${ACCENT},${alpha})`;
      ctx.fill();
    });

    // ── Draw background random nodes ──
    for (let i = 0; i < RANDOM_COUNT; i++) {
      const [px, py, pz] = projected[i];
      const depth = (pz + 1) / 2; // 0..1
      const size = 0.8 + depth * 1.2;
      const opacity = 0.22 + depth * 0.55;

      ctx.beginPath();
      ctx.arc(px, py, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${ACCENT},${opacity})`;
      ctx.fill();
    }

    // ── Draw named nodes ──
    const namedStartIdx = RANDOM_COUNT;
    NAMED_NODES.forEach((node, i) => {
      const [px, py, pz] = projected[namedStartIdx + i];
      const isFront = pz > -0.2;

      // Outer pulse ring
      ctx.beginPath();
      ctx.arc(px, py, 12, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${ACCENT},${isFront ? 0.15 : 0.04})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // Glow
      if (isFront) {
        ctx.shadowColor = `rgba(${ACCENT},0.8)`;
        ctx.shadowBlur = 10;
      }

      // Inner dot
      ctx.beginPath();
      ctx.arc(px, py, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${ACCENT},${isFront ? 0.9 : 0.3})`;
      ctx.fill();

      ctx.shadowBlur = 0;

      // Center bright dot
      ctx.beginPath();
      ctx.arc(px, py, 1.8, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${isFront ? 0.9 : 0.2})`;
      ctx.fill();

      // Label line + text (only front-facing)
      if (isFront && !isMobile) {
        // Offset labels outward from sphere center
        const dx = px - cx;
        const dy = py - cy;
        const len = Math.sqrt(dx * dx + dy * dy) || 1;
        const labelDist = 28 + radius * 0.08;
        const lx = px + (dx / len) * labelDist;
        const ly = py + (dy / len) * labelDist;

        // Connector line
        ctx.beginPath();
        ctx.moveTo(px + (dx / len) * 6, py + (dy / len) * 6);
        ctx.lineTo(lx - (dx / len) * 4, ly - (dy / len) * 4);
        ctx.strokeStyle = `rgba(${ACCENT},0.35)`;
        ctx.lineWidth = 0.75;
        ctx.stroke();

        // Label background
        const labelW = 72;
        const labelH = 26;
        const textAnchorX = lx + (dx > 0 ? 2 : -labelW - 2);
        const textAnchorY = ly - labelH / 2;
        ctx.fillStyle = "rgba(10,12,14,0.85)";
        ctx.fillRect(textAnchorX - 2, textAnchorY - 2, labelW + 4, labelH + 4);
        ctx.strokeStyle = `rgba(${ACCENT},0.2)`;
        ctx.lineWidth = 0.5;
        ctx.strokeRect(textAnchorX - 2, textAnchorY - 2, labelW + 4, labelH + 4);

        // ID text
        ctx.font = `700 9px 'JetBrains Mono', monospace`;
        ctx.fillStyle = `rgba(${ACCENT},0.95)`;
        ctx.textAlign = dx > 0 ? "left" : "right";
        ctx.fillText(node.label, dx > 0 ? textAnchorX + 1 : textAnchorX + labelW - 1, ly - 5);

        // Sublabel
        ctx.font = `400 8px 'JetBrains Mono', monospace`;
        ctx.fillStyle = `rgba(139,145,153,0.8)`;
        ctx.fillText(node.sublabel, dx > 0 ? textAnchorX + 1 : textAnchorX + labelW - 1, ly + 7);
        ctx.textAlign = "left";
      }
    });

  }, []);

  // Resize
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    function resize() {
      if (!canvas || !container) return;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    }
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();
    return () => ro.disconnect();
  }, []);

  // Animation loop
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const drawNext = () => {
      draw();
      if (!preference.matches) frameRef.current = requestAnimationFrame(drawNext);
    };
    const start = () => {
      cancelAnimationFrame(frameRef.current);
      if (preference.matches) {
        draw();
      } else {
        frameRef.current = requestAnimationFrame(drawNext);
      }
    };
    start();
    preference.addEventListener("change", start);
    return () => {
      preference.removeEventListener("change", start);
      cancelAnimationFrame(frameRef.current);
    };
  }, [draw]);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label="AETHER 3D network visualization — rotating sphere of connected nodes"
      style={{ position: "absolute", inset: 0 }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0 }}
        aria-hidden="true"
      />
    </div>
  );
}
