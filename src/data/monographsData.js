/**
 * Curatorial Monograph Data for Aditya Rathore (CodeX Engineering Atelier)
 * Each publication represents an authentic, production-grade software project:
 * 1. XMUSIC (X-Music-src)
 * 2. FRAMEGIT (FrameGIT)
 * 3. XDROP (Xdrop)
 * 4. XOPPOR AI (Xoppor-AI)
 * 5. VAULTOP (VaultOP-Tournaments-Mod)
 * 6. CODEX CLIENT (CodeX-Client-src)
 * 7. YT MEDIA DOWNLOADER (YT-Media-Downloader)
 */

// Helper to draw gold foil decorative border
function drawGoldBorder(ctx, w, h, inset = 70, lineWidth = 2.5) {
  ctx.save();
  ctx.strokeStyle = 'rgba(223, 186, 90, 0.85)'; // Venetian Gold Leaf
  ctx.lineWidth = lineWidth;
  ctx.strokeRect(inset, inset, w - inset * 2, h - inset * 2);

  // Inner fine hairline
  ctx.strokeStyle = 'rgba(223, 186, 90, 0.4)';
  ctx.lineWidth = 1;
  ctx.strokeRect(inset + 12, inset + 12, w - (inset + 12) * 2, h - (inset + 12) * 2);

  // Corner decorative marks
  const corners = [
    [inset + 6, inset + 6],
    [w - inset - 6, inset + 6],
    [inset + 6, h - inset - 6],
    [w - inset - 6, h - inset - 6],
  ];
  ctx.fillStyle = '#DFBA5A';
  corners.forEach(([cx, cy]) => {
    ctx.beginPath();
    ctx.arc(cx, cy, 3, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();
}

// Helper for linen/parchment grain texture on canvas
function applyParchmentGrain(ctx, w, h, count = 2800) {
  ctx.save();
  ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
  for (let i = 0; i < count; i++) {
    ctx.fillRect(Math.random() * w, Math.random() * h, 1.5, 1.5);
  }
  ctx.fillStyle = 'rgba(0, 0, 0, 0.035)';
  for (let i = 0; i < count / 2; i++) {
    ctx.fillRect(Math.random() * w, Math.random() * h, 1.2, 1.2);
  }
  ctx.restore();
}

// ----------------------------------------------------------------------
// 7 BESPOKE ARCHIVAL ART PLATES
// ----------------------------------------------------------------------

// Plate 1: XMUSIC — Celestial Harmonic Soundwaves & Nocturnal Lake
function drawXMusicPlate(ctx, x, y, w, h) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.clip();

  // Sky: Deep nocturnal sapphire gradient
  const sky = ctx.createLinearGradient(x, y, x, y + h);
  sky.addColorStop(0, '#0A121E');
  sky.addColorStop(0.35, '#132135');
  sky.addColorStop(0.65, '#1F3452');
  sky.addColorStop(0.85, '#354E70');
  sky.addColorStop(1, '#1A293D');
  ctx.fillStyle = sky;
  ctx.fillRect(x, y, w, h);

  // Crescent Moon
  ctx.save();
  ctx.fillStyle = '#F5E4BA';
  ctx.shadowColor = 'rgba(245, 228, 186, 0.6)';
  ctx.shadowBlur = 24;
  ctx.beginPath();
  ctx.arc(x + w * 0.76, y + h * 0.22, 38, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalCompositeOperation = 'destination-out';
  ctx.beginPath();
  ctx.arc(x + w * 0.73, y + h * 0.20, 34, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Distant Mountain Ridges
  ctx.fillStyle = '#101B29';
  ctx.beginPath();
  ctx.moveTo(x, y + h * 0.52);
  ctx.bezierCurveTo(x + w * 0.25, y + h * 0.44, x + w * 0.5, y + h * 0.54, x + w * 0.75, y + h * 0.46);
  ctx.bezierCurveTo(x + w * 0.88, y + h * 0.42, x + w * 0.95, y + h * 0.49, x + w, y + h * 0.46);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y + h);
  ctx.fill();

  // Serene Lake Reflection Mirror
  const water = ctx.createLinearGradient(x, y + h * 0.58, x, y + h);
  water.addColorStop(0, '#0E1724');
  water.addColorStop(0.5, '#142236');
  water.addColorStop(1, '#080E17');
  ctx.fillStyle = water;
  ctx.fillRect(x, y + h * 0.58, w, h * 0.42);

  // Luminous Gilded Soundwaves & Harmonograph Sine Waves
  ctx.save();
  ctx.strokeStyle = '#DFBA5A';
  ctx.lineWidth = 2.4;
  ctx.shadowColor = 'rgba(223, 186, 90, 0.45)';
  ctx.shadowBlur = 12;

  // Waveform 1: Fundamental Sine
  ctx.beginPath();
  for (let i = 0; i <= w; i += 4) {
    const nx = i / w;
    const waveY = y + h * 0.58 + Math.sin(nx * Math.PI * 6.5) * 48 * Math.sin(nx * Math.PI);
    if (i === 0) ctx.moveTo(x + i, waveY);
    else ctx.lineTo(x + i, waveY);
  }
  ctx.stroke();

  // Waveform 2: First Harmonic
  ctx.strokeStyle = 'rgba(255, 235, 170, 0.65)';
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  for (let i = 0; i <= w; i += 4) {
    const nx = i / w;
    const waveY = y + h * 0.62 + Math.sin(nx * Math.PI * 11 + 0.8) * 32 * Math.sin(nx * Math.PI);
    if (i === 0) ctx.moveTo(x + i, waveY);
    else ctx.lineTo(x + i, waveY);
  }
  ctx.stroke();

  // Waveform 3: Sub-bass resonance
  ctx.strokeStyle = 'rgba(199, 146, 56, 0.5)';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  for (let i = 0; i <= w; i += 4) {
    const nx = i / w;
    const waveY = y + h * 0.68 + Math.sin(nx * Math.PI * 4 - 0.5) * 24 * Math.sin(nx * Math.PI);
    if (i === 0) ctx.moveTo(x + i, waveY);
    else ctx.lineTo(x + i, waveY);
  }
  ctx.stroke();

  // Frequency Bars Spectrum Over Water
  ctx.fillStyle = 'rgba(223, 186, 90, 0.4)';
  const bars = 28;
  const barW = (w * 0.7) / bars;
  const startX = x + w * 0.15;
  for (let b = 0; b < bars; b++) {
    const norm = b / bars;
    const barH = Math.sin(norm * Math.PI) * (20 + Math.sin(b * 1.8) * 16) + 8;
    ctx.fillRect(startX + b * barW, y + h * 0.57 - barH, barW - 3, barH);
    // Reflection
    ctx.fillStyle = 'rgba(223, 186, 90, 0.15)';
    ctx.fillRect(startX + b * barW, y + h * 0.58, barW - 3, barH * 0.5);
    ctx.fillStyle = 'rgba(223, 186, 90, 0.4)';
  }
  ctx.restore();

  // Pine Silhouettes on Horizon
  ctx.fillStyle = '#080E17';
  for (let p = 0; p < 18; p++) {
    const px = x + w * 0.05 + p * (w * 0.052);
    const py = y + h * 0.58;
    const ph = 35 + (p % 4) * 12;
    ctx.beginPath();
    ctx.moveTo(px, py - ph);
    ctx.lineTo(px - 9, py);
    ctx.lineTo(px + 9, py);
    ctx.fill();
  }

  ctx.restore();
}

// Plate 2: FRAMEGIT — FastCDC Content-Defined Chunking & DAG Commit Lattice
function drawFrameGitPlate(ctx, x, y, w, h) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.clip();

  // Ground: Dark graphite slate with subtle isometric weave
  const bg = ctx.createLinearGradient(x, y, x, y + h);
  bg.addColorStop(0, '#101418');
  bg.addColorStop(0.5, '#171E24');
  bg.addColorStop(1, '#0C0F12');
  ctx.fillStyle = bg;
  ctx.fillRect(x, y, w, h);

  // Subtle isometric coordinate matrix grid
  ctx.save();
  ctx.strokeStyle = 'rgba(223, 186, 90, 0.06)';
  ctx.lineWidth = 1;
  const step = 38;
  for (let gx = -w; gx < w * 2; gx += step) {
    ctx.beginPath();
    ctx.moveTo(x + gx, y);
    ctx.lineTo(x + gx + h * 0.7, y + h);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x + gx, y);
    ctx.lineTo(x + gx - h * 0.7, y + h);
    ctx.stroke();
  }
  ctx.restore();

  // 35mm Celluloid Film Sprockets running vertically on the edges
  ctx.fillStyle = 'rgba(223, 186, 90, 0.22)';
  for (let f = 0; f < 16; f++) {
    const fy = y + 24 + f * 44;
    ctx.fillRect(x + 18, fy, 16, 24);
    ctx.fillRect(x + w - 34, fy, 16, 24);
  }

  // Directed Acyclic Graph (DAG) Commit Lattice
  const nodes = [
    { cx: x + w * 0.28, cy: y + h * 0.78, r: 12, label: 'C0', color: '#DFBA5A' },
    { cx: x + w * 0.38, cy: y + h * 0.62, r: 14, label: 'C1', color: '#DFBA5A' },
    { cx: x + w * 0.32, cy: y + h * 0.44, r: 13, label: 'B1', color: '#38B2AC' },
    { cx: x + w * 0.52, cy: y + h * 0.48, r: 15, label: 'C2', color: '#DFBA5A' },
    { cx: x + w * 0.45, cy: y + h * 0.28, r: 14, label: 'B2', color: '#38B2AC' },
    { cx: x + w * 0.68, cy: y + h * 0.36, r: 16, label: 'M1', color: '#E53E3E' },
    { cx: x + w * 0.76, cy: y + h * 0.20, r: 18, label: 'HEAD', color: '#DFBA5A' },
  ];

  // DAG Edges
  const edges = [
    [0, 1], [1, 2], [1, 3], [2, 4], [3, 5], [4, 5], [5, 6]
  ];

  ctx.save();
  ctx.strokeStyle = 'rgba(223, 186, 90, 0.75)';
  ctx.lineWidth = 3;
  ctx.shadowColor = 'rgba(223, 186, 90, 0.3)';
  ctx.shadowBlur = 8;
  edges.forEach(([from, to]) => {
    const n1 = nodes[from];
    const n2 = nodes[to];
    ctx.beginPath();
    ctx.moveTo(n1.cx, n1.cy);
    ctx.bezierCurveTo(n1.cx, (n1.cy + n2.cy) / 2, n2.cx, (n1.cy + n2.cy) / 2, n2.cx, n2.cy);
    ctx.stroke();
  });
  ctx.restore();

  // Draw Commit Nodes (Luminous CAS Hashes)
  nodes.forEach((n) => {
    ctx.save();
    ctx.fillStyle = n.color;
    ctx.shadowColor = n.color;
    ctx.shadowBlur = 14;
    ctx.beginPath();
    ctx.arc(n.cx, n.cy, n.r, 0, Math.PI * 2);
    ctx.fill();

    // Node outer halo ring
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(n.cx, n.cy, n.r + 4, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  });

  // FastCDC Chunks Horizontal Stack (Representing Content-Addressed Video Segments)
  ctx.save();
  const chunkY = y + h * 0.88;
  const chunkH = 26;
  let curX = x + 48;
  const chunkWidths = [62, 94, 78, 120, 85, 110, 75];
  const chunkColors = ['#DFBA5A', '#38B2AC', '#DFBA5A', '#E53E3E', '#38B2AC', '#DFBA5A', '#ECC94B'];

  chunkWidths.forEach((cw, idx) => {
    if (curX + cw > x + w - 48) return;
    ctx.fillStyle = chunkColors[idx % chunkColors.length];
    ctx.globalAlpha = 0.85;
    ctx.fillRect(curX, chunkY, cw - 4, chunkH);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.lineWidth = 1;
    ctx.strokeRect(curX, chunkY, cw - 4, chunkH);
    curX += cw;
  });
  ctx.restore();

  ctx.restore();
}

// Plate 3: XDROP — Radiant Stream Interceptor & NLE Timeline Ingestion
function drawXdropPlate(ctx, x, y, w, h) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.clip();

  // Sky: Royal Prussian Cobalt & Deep Midnight
  const bg = ctx.createLinearGradient(x, y, x, y + h);
  bg.addColorStop(0, '#0F1A2C');
  bg.addColorStop(0.4, '#172A45');
  bg.addColorStop(0.75, '#223B60');
  bg.addColorStop(1, '#111E31');
  ctx.fillStyle = bg;
  ctx.fillRect(x, y, w, h);

  // Concentric Radial Ingestion Rings (The Drop Target Aperture)
  const cx = x + w * 0.5;
  const cy = y + h * 0.44;
  const rings = [45, 90, 140, 195, 255];
  ctx.save();
  rings.forEach((r, idx) => {
    ctx.strokeStyle = `rgba(223, 186, 90, ${0.45 - idx * 0.08})`;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([8, 6]);
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();
  });
  ctx.setLineDash([]);
  ctx.restore();

  // Inflowing Stream Rays (Representing YouTube, Instagram, Twitter web media packets)
  ctx.save();
  const streams = 12;
  for (let s = 0; s < streams; s++) {
    const angle = (s / streams) * Math.PI * 2;
    const startR = 290;
    const endR = 48;
    const sx = cx + Math.cos(angle) * startR;
    const sy = cy + Math.sin(angle) * startR;
    const ex = cx + Math.cos(angle) * endR;
    const ey = cy + Math.sin(angle) * endR;

    const streamGrad = ctx.createLinearGradient(sx, sy, ex, ey);
    streamGrad.addColorStop(0, 'rgba(223, 186, 90, 0)');
    streamGrad.addColorStop(0.6, 'rgba(245, 205, 138, 0.65)');
    streamGrad.addColorStop(1, '#FFF5CC');

    ctx.strokeStyle = streamGrad;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.lineTo(ex, ey);
    ctx.stroke();
  }
  ctx.restore();

  // Central Golden Vortex Core (The Active Drop Receiver)
  const core = ctx.createRadialGradient(cx, cy, 5, cx, cy, 48);
  core.addColorStop(0, '#FFFFFF');
  core.addColorStop(0.35, '#FFE28A');
  core.addColorStop(0.7, '#D49E38');
  core.addColorStop(1, 'rgba(176, 119, 30, 0)');
  ctx.fillStyle = core;
  ctx.beginPath();
  ctx.arc(cx, cy, 48, 0, Math.PI * 2);
  ctx.fill();

  // Lower Section: NLE Timeline Tracks (DaVinci Resolve / Premiere Pro Bins)
  const timelineY = y + h * 0.72;
  const trackH = 22;
  const tracks = [
    { label: 'V2 · Overlay', color: '#E53E3E', clips: [[0.1, 0.4], [0.6, 0.85]] },
    { label: 'V1 · Master', color: '#3182CE', clips: [[0.05, 0.55], [0.58, 0.95]] },
    { label: 'A1 · Stereo L/R', color: '#38A169', clips: [[0.05, 0.95]] },
    { label: 'A2 · Ambience', color: '#D69E2E', clips: [[0.15, 0.8]] },
  ];

  ctx.save();
  tracks.forEach((tr, tIdx) => {
    const ty = timelineY + tIdx * (trackH + 6);
    // Track background
    ctx.fillStyle = 'rgba(10, 16, 26, 0.75)';
    ctx.fillRect(x + 35, ty, w - 70, trackH);
    ctx.strokeStyle = 'rgba(223, 186, 90, 0.2)';
    ctx.lineWidth = 1;
    ctx.strokeRect(x + 35, ty, w - 70, trackH);

    // Track Clips
    tr.clips.forEach(([startNorm, endNorm]) => {
      const clipX = x + 35 + startNorm * (w - 70);
      const clipW = (endNorm - startNorm) * (w - 70);
      ctx.fillStyle = tr.color;
      ctx.globalAlpha = 0.8;
      ctx.fillRect(clipX, ty + 2, clipW, trackH - 4);
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 1;
      ctx.strokeRect(clipX, ty + 2, clipW, trackH - 4);
    });
  });

  // Vertical Timeline Playhead
  ctx.strokeStyle = '#E53E3E';
  ctx.lineWidth = 2.5;
  ctx.shadowColor = 'rgba(229, 62, 62, 0.6)';
  ctx.shadowBlur = 6;
  ctx.beginPath();
  ctx.moveTo(x + w * 0.58, timelineY - 10);
  ctx.lineTo(x + w * 0.58, timelineY + 4 * (trackH + 6));
  ctx.stroke();
  ctx.restore();

  ctx.restore();
}

// Plate 4: XOPPOR AI — Celestial Opportunity Radar & Astrolabe Constellation
function drawXopporAIPlate(ctx, x, y, w, h) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.clip();

  // Sky: Deep cosmic indigo violet gradient
  const bg = ctx.createLinearGradient(x, y, x, y + h);
  bg.addColorStop(0, '#0E0B1A');
  bg.addColorStop(0.4, '#18122E');
  bg.addColorStop(0.75, '#251B47');
  bg.addColorStop(1, '#110D21');
  ctx.fillStyle = bg;
  ctx.fillRect(x, y, w, h);

  // Distant Constellation Starfield
  ctx.fillStyle = '#FFFFFF';
  for (let s = 0; s < 90; s++) {
    const sx = x + (Math.sin(s * 73.1) * 0.5 + 0.5) * w;
    const sy = y + (Math.cos(s * 41.7) * 0.5 + 0.5) * h;
    const sr = (s % 3 === 0) ? 1.8 : 1.0;
    ctx.globalAlpha = 0.3 + (s % 5) * 0.15;
    ctx.fillRect(sx, sy, sr, sr);
  }
  ctx.globalAlpha = 1.0;

  // Astrolabe / Celestial Radar Coordinate Grid
  const rcx = x + w * 0.5;
  const rcy = y + h * 0.48;
  const radarRadii = [60, 115, 175, 235];

  ctx.save();
  ctx.strokeStyle = 'rgba(223, 186, 90, 0.4)';
  ctx.lineWidth = 1.5;

  radarRadii.forEach((r, idx) => {
    ctx.beginPath();
    ctx.arc(rcx, rcy, r, 0, Math.PI * 2);
    ctx.stroke();

    // Degree tick marks on outer ring
    if (idx === radarRadii.length - 1) {
      for (let d = 0; d < 36; d++) {
        const rad = (d / 36) * Math.PI * 2;
        const tickInner = r - 8;
        ctx.beginPath();
        ctx.moveTo(rcx + Math.cos(rad) * tickInner, rcy + Math.sin(rad) * tickInner);
        ctx.lineTo(rcx + Math.cos(rad) * r, rcy + Math.sin(rad) * r);
        ctx.stroke();
      }
    }
  });

  // Crosshair Axes (N-S, E-W and 45 degree diagonals)
  ctx.strokeStyle = 'rgba(223, 186, 90, 0.25)';
  [0, Math.PI / 4, Math.PI / 2, (3 * Math.PI) / 4].forEach((angle) => {
    ctx.beginPath();
    ctx.moveTo(rcx - Math.cos(angle) * 235, rcy - Math.sin(angle) * 235);
    ctx.lineTo(rcx + Math.cos(angle) * 235, rcy + Math.sin(angle) * 235);
    ctx.stroke();
  });

  // Radar Sweep Cone
  const sweep = ctx.createConicGradient(0.6, rcx, rcy);
  sweep.addColorStop(0, 'rgba(223, 186, 90, 0.35)');
  sweep.addColorStop(0.18, 'rgba(223, 186, 90, 0)');
  sweep.addColorStop(1, 'rgba(223, 186, 90, 0)');
  ctx.fillStyle = sweep;
  ctx.beginPath();
  ctx.arc(rcx, rcy, 235, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // 16 Multi-Platform Opportunity Beacons (Scouts)
  const scouts = 16;
  ctx.save();
  for (let sc = 0; sc < scouts; sc++) {
    const sa = (sc / scouts) * Math.PI * 2 + 0.3;
    const sr = 75 + (sc % 4) * 44;
    const bx = rcx + Math.cos(sa) * sr;
    const by = rcy + Math.sin(sa) * sr;

    // Glowing Opportunity Node
    ctx.fillStyle = '#DFBA5A';
    ctx.shadowColor = 'rgba(223, 186, 90, 0.7)';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(bx, by, 5, 0, Math.PI * 2);
    ctx.fill();

    // Pulse wave
    ctx.strokeStyle = 'rgba(223, 186, 90, 0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(bx, by, 11, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Central Gemini AI Neural Spark
  ctx.fillStyle = '#FFFFFF';
  ctx.shadowColor = '#FFE28A';
  ctx.shadowBlur = 18;
  ctx.beginPath();
  ctx.arc(rcx, rcy, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  ctx.restore();
}

// Plate 5: VAULTOP — Mythic Tournament Arena & Crest of Triumph
function drawVaultOPPlate(ctx, x, y, w, h) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.clip();

  // Sky: Dramatic Imperial Terracotta & Sunrise Gold
  const bg = ctx.createLinearGradient(x, y, x, y + h);
  bg.addColorStop(0, '#261010');
  bg.addColorStop(0.3, '#4A1D1D');
  bg.addColorStop(0.6, '#8C3829');
  bg.addColorStop(0.82, '#D97A45');
  bg.addColorStop(1, '#F7CA88');
  ctx.fillStyle = bg;
  ctx.fillRect(x, y, w, h);

  // Golden Sun Shafts piercing downward
  ctx.save();
  const sunX = x + w * 0.5;
  const sunY = y + h * 0.28;
  const rays = 14;
  for (let r = 0; r < rays; r++) {
    const angle = (r / rays) * Math.PI - Math.PI / 2;
    ctx.fillStyle = 'rgba(255, 235, 180, 0.12)';
    ctx.beginPath();
    ctx.moveTo(sunX, sunY);
    ctx.lineTo(sunX + Math.sin(angle) * w, y + h);
    ctx.lineTo(sunX + Math.sin(angle + 0.12) * w, y + h);
    ctx.fill();
  }
  ctx.restore();

  // Monumental Voxel Ramparts & Tournament Colosseum (Isometric Silhouette)
  ctx.fillStyle = '#1B0E0E';
  ctx.beginPath();
  ctx.moveTo(x, y + h * 0.68);
  // Colosseum tiers
  ctx.lineTo(x + w * 0.15, y + h * 0.68);
  ctx.lineTo(x + w * 0.15, y + h * 0.62);
  ctx.lineTo(x + w * 0.30, y + h * 0.62);
  ctx.lineTo(x + w * 0.30, y + h * 0.55);
  ctx.lineTo(x + w * 0.42, y + h * 0.55);
  ctx.lineTo(x + w * 0.42, y + h * 0.50);
  ctx.lineTo(x + w * 0.58, y + h * 0.50);
  ctx.lineTo(x + w * 0.58, y + h * 0.55);
  ctx.lineTo(x + w * 0.70, y + h * 0.55);
  ctx.lineTo(x + w * 0.70, y + h * 0.62);
  ctx.lineTo(x + w * 0.85, y + h * 0.62);
  ctx.lineTo(x + w * 0.85, y + h * 0.68);
  ctx.lineTo(x + w, y + h * 0.68);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y + h);
  ctx.fill();

  // Colosseum Arches (Gilded glowing windows)
  ctx.fillStyle = 'rgba(247, 202, 136, 0.4)';
  const archTiers = [
    { yPos: y + h * 0.56, startX: x + w * 0.34, count: 4, spacing: 32 },
    { yPos: y + h * 0.64, startX: x + w * 0.22, count: 7, spacing: 36 },
    { yPos: y + h * 0.72, startX: x + w * 0.12, count: 10, spacing: 38 },
  ];
  archTiers.forEach((tier) => {
    for (let a = 0; a < tier.count; a++) {
      const ax = tier.startX + a * tier.spacing;
      ctx.beginPath();
      ctx.arc(ax, tier.yPos, 8, Math.PI, 0);
      ctx.lineTo(ax + 8, tier.yPos + 18);
      ctx.lineTo(ax - 8, tier.yPos + 18);
      ctx.fill();
    }
  });

  // Center Heraldic Crossed Swords & Tournament Champion Sigil
  const hx = x + w * 0.5;
  const hy = y + h * 0.35;
  ctx.save();
  ctx.strokeStyle = '#DFBA5A';
  ctx.lineWidth = 3.5;
  ctx.shadowColor = 'rgba(223, 186, 90, 0.5)';
  ctx.shadowBlur = 14;

  // Blade 1
  ctx.beginPath();
  ctx.moveTo(hx - 55, hy - 55);
  ctx.lineTo(hx + 55, hy + 55);
  ctx.stroke();

  // Blade 2
  ctx.beginPath();
  ctx.moveTo(hx + 55, hy - 55);
  ctx.lineTo(hx - 55, hy + 55);
  ctx.stroke();

  // Crown / Laurel Crest
  ctx.fillStyle = '#DFBA5A';
  ctx.beginPath();
  ctx.arc(hx, hy - 65, 14, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
  ctx.restore();
}

// Plate 6: CODEX CLIENT — Precision Drafting Compass & Isometric Voxel Prism
function drawCodeXClientPlate(ctx, x, y, w, h) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.clip();

  // Ground: Deep Veronese Pine & Dark Jade
  const bg = ctx.createLinearGradient(x, y, x, y + h);
  bg.addColorStop(0, '#0E1A14');
  bg.addColorStop(0.45, '#162C22');
  bg.addColorStop(0.8, '#214234');
  bg.addColorStop(1, '#0C1611');
  ctx.fillStyle = bg;
  ctx.fillRect(x, y, w, h);

  // Draughtsman's Golden Coordinate Grid & Concentric Circles
  const cx = x + w * 0.5;
  const cy = y + h * 0.46;

  ctx.save();
  ctx.strokeStyle = 'rgba(223, 186, 90, 0.22)';
  ctx.lineWidth = 1;
  [50, 100, 160, 220, 280].forEach((cr) => {
    ctx.beginPath();
    ctx.arc(cx, cy, cr, 0, Math.PI * 2);
    ctx.stroke();
  });

  // Crosshairs & Degree Angles
  ctx.strokeStyle = 'rgba(223, 186, 90, 0.15)';
  ctx.beginPath();
  ctx.moveTo(cx, y);
  ctx.lineTo(cx, y + h);
  ctx.moveTo(x, cy);
  ctx.lineTo(x + w, cy);
  ctx.stroke();
  ctx.restore();

  // Center Isometric 3D Voxel Prism (Minecraft Core Cube)
  const size = 95;
  ctx.save();
  ctx.translate(cx, cy);

  // Top Face (Light Olive Gold)
  ctx.fillStyle = '#DFBA5A';
  ctx.beginPath();
  ctx.moveTo(0, -size);
  ctx.lineTo(size * 0.866, -size * 0.5);
  ctx.lineTo(0, 0);
  ctx.lineTo(-size * 0.866, -size * 0.5);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Left Face (Shadowed Veronese Ochre)
  ctx.fillStyle = '#8B6A27';
  ctx.beginPath();
  ctx.moveTo(-size * 0.866, -size * 0.5);
  ctx.lineTo(0, 0);
  ctx.lineTo(0, size);
  ctx.lineTo(-size * 0.866, size * 0.5);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Right Face (Burnished Gold)
  ctx.fillStyle = '#B88D34';
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(size * 0.866, -size * 0.5);
  ctx.lineTo(size * 0.866, size * 0.5);
  ctx.lineTo(0, size);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Wireframe Voxel Subdivisions
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
  ctx.lineWidth = 1;
  [-0.33, 0.33].forEach((f) => {
    // Top face lines
    ctx.beginPath();
    ctx.moveTo(size * 0.866 * f, -size * 0.5 * (1 + f));
    ctx.lineTo(size * 0.866 * (1 + f), -size * 0.5 * f);
    ctx.stroke();
  });
  ctx.restore();

  // Draughtsman's Golden Compass Arms (Archival Geometry)
  ctx.save();
  ctx.strokeStyle = '#DFBA5A';
  ctx.lineWidth = 3.5;
  ctx.shadowColor = 'rgba(223, 186, 90, 0.5)';
  ctx.shadowBlur = 10;
  // Left arm
  ctx.beginPath();
  ctx.moveTo(cx, cy - 190);
  ctx.lineTo(cx - 130, cy + 120);
  ctx.stroke();
  // Right arm
  ctx.beginPath();
  ctx.moveTo(cx, cy - 190);
  ctx.lineTo(cx + 130, cy + 120);
  ctx.stroke();
  // Pivot hinge
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.arc(cx, cy - 190, 8, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  ctx.restore();
}

// Plate 7: YT MEDIA DOWNLOADER — Prismatic Dispersion & Waveform Spectrum
function drawYTMediaPlate(ctx, x, y, w, h) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.clip();

  // Ground: Rich Espresso Mahogany & Warm Cognac
  const bg = ctx.createLinearGradient(x, y, x, y + h);
  bg.addColorStop(0, '#1C110C');
  bg.addColorStop(0.4, '#2B1A12');
  bg.addColorStop(0.75, '#3E2419');
  bg.addColorStop(1, '#1A0E08');
  ctx.fillStyle = bg;
  ctx.fillRect(x, y, w, h);

  const cx = x + w * 0.44;
  const cy = y + h * 0.45;

  // Incident White/Gold Light Beam
  const beam = ctx.createLinearGradient(x + 20, cy - 140, cx - 20, cy);
  beam.addColorStop(0, 'rgba(255, 255, 255, 0.85)');
  beam.addColorStop(0.5, 'rgba(247, 225, 170, 0.7)');
  beam.addColorStop(1, '#FFFFFF');

  ctx.save();
  ctx.strokeStyle = beam;
  ctx.lineWidth = 4;
  ctx.shadowColor = '#FFE28A';
  ctx.shadowBlur = 14;
  ctx.beginPath();
  ctx.moveTo(x + 20, cy - 140);
  ctx.lineTo(cx - 20, cy);
  ctx.stroke();
  ctx.restore();

  // Equilateral Optical Glass Prism
  const pSize = 110;
  ctx.save();
  ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
  ctx.strokeStyle = '#DFBA5A';
  ctx.lineWidth = 3;
  ctx.shadowColor = 'rgba(223, 186, 90, 0.4)';
  ctx.shadowBlur = 12;
  ctx.beginPath();
  ctx.moveTo(cx, cy - pSize * 0.8);
  ctx.lineTo(cx + pSize * 0.866, cy + pSize * 0.6);
  ctx.lineTo(cx - pSize * 0.866, cy + pSize * 0.6);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // Refracted Spectral Color Rays (Video 4K/8K & Audio Wavelengths)
  const spectrum = [
    { color: '#FF3366', dy: -70 },
    { color: '#FF9933', dy: -42 },
    { color: '#FFDD33', dy: -14 },
    { color: '#33CC66', dy: 14 },
    { color: '#3399FF', dy: 42 },
    { color: '#9933FF', dy: 70 },
  ];

  ctx.save();
  spectrum.forEach((spec) => {
    const rayStart = cx + 25;
    const rayEnd = x + w - 25;
    const rayY = cy + spec.dy * 1.5;

    ctx.strokeStyle = spec.color;
    ctx.lineWidth = 3;
    ctx.shadowColor = spec.color;
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.moveTo(rayStart, cy);
    ctx.bezierCurveTo((rayStart + rayEnd) / 2, cy + spec.dy * 0.4, (rayStart + rayEnd) / 2, rayY, rayEnd, rayY);
    ctx.stroke();
  });
  ctx.restore();

  // Precision Mechanical Iris Aperture Blades in Foreground
  ctx.save();
  const irisR = 190;
  ctx.strokeStyle = 'rgba(223, 186, 90, 0.35)';
  ctx.lineWidth = 1.5;
  for (let b = 0; b < 10; b++) {
    const ang = (b / 10) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(ang) * irisR, cy + Math.sin(ang) * irisR);
    ctx.lineTo(cx + Math.cos(ang + 1.2) * (irisR * 0.65), cy + Math.sin(ang + 1.2) * (irisR * 0.65));
    ctx.stroke();
  }
  ctx.restore();

  ctx.restore();
}

// ----------------------------------------------------------------------
// 7 PRODUCTION MONOGRAPH PUBLICATIONS
// ----------------------------------------------------------------------

export const MONOGRAPHS_DATA = [
  // 1. XMUSIC (X-Music-src)
  {
    id: 'x-music',
    title: 'XMUSIC',
    subtitle: 'Native In-Game Audio & Streaming Engine',
    author: 'Aditya Rathore',
    publisher: 'CodeX Studio Editions',
    edition: 'Fabric Monorepo · 15+ Versions Baseline',
    year: '2025',
    stars: 5,
    desc: 'A high-performance native Minecraft music player mod engineered on Fabric. Streams crystal-clear audio from YouTube, Spotify, and local playlists directly within the world without performance overhead or alt-tab disruption. Features a monorepo architecture spanning 15+ Minecraft version baselines with custom GLSL HUD rendering.',
    tech: ['Java 21', 'Fabric API', 'Mixins', 'Gradle Monorepo', 'WaterMedia API', 'GLSL'],
    liveURL: 'https://github.com/Code-Xceed/X-Music-src',
    demoURL: 'https://codex-music-show.vercel.app',
    natureBlend: 0.0,
    chapters: [
      'Native In-Game Streaming Architecture',
      'Multi-Version Monorepo (1.21 - 26.2)',
      'Thread-Safe Audio Buffer Management',
      'Custom Themed HUD & In-Game GUI',
      'WaterMedia & Source Stream Resolvers',
      'Open-Source Distribution & Modrinth',
    ],
    edge: '#D9C8AC',
    backBg: '#111A24',
    backInk: '220,230,245',
    spineBg: '#0C141C',
    spineInk: '#DFBA5A',
    spineFont: '600 36px "Bodoni Moda", serif',
    front: (ctx, w, h) => {
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#152232');
      grad.addColorStop(0.5, '#1E3147');
      grad.addColorStop(1, '#0E1824');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 3800);
      drawGoldBorder(ctx, w, h, 55, 2.5);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.85)';
      ctx.font = '300 17px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.fillText('CODEX AUDIO ENGINEERING  ·  VOL. I', w / 2, 92);

      const pw = w - 150;
      const ph = 760;
      const px = 75;
      const py = 115;
      drawXMusicPlate(ctx, px, py, pw, ph);

      ctx.save();
      ctx.strokeStyle = '#DFBA5A';
      ctx.lineWidth = 2.5;
      ctx.strokeRect(px, py, pw, ph);
      ctx.strokeStyle = 'rgba(223, 186, 90, 0.4)';
      ctx.lineWidth = 1;
      ctx.strokeRect(px + 6, py + 6, pw - 12, ph - 12);
      ctx.restore();

      const textCenterY = py + ph + 130;
      ctx.fillStyle = '#DFBA5A';
      ctx.font = '400 82px "Bodoni Moda", "Didot", serif';
      ctx.textAlign = 'center';
      ctx.fillText('XMUSIC', w / 2, textCenterY);

      ctx.fillStyle = '#EAE0CE';
      ctx.font = 'italic 300 28px "Cormorant Garamond", serif';
      ctx.fillText('Native In-Game Audio & Streaming Engine', w / 2, textCenterY + 54);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.7)';
      ctx.font = '18px serif';
      ctx.fillText('❧   ✦   🎵   ✦   ❧', w / 2, textCenterY + 104);

      ctx.fillStyle = '#FAF7F0';
      ctx.font = '500 26px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('ADITYA RATHORE', w / 2, h - 165);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.8)';
      ctx.font = '300 20px "Cinzel", serif';
      ctx.fillText('FABRIC ARCHITECTURE · OPEN SOURCE', w / 2, h - 120);
    },
    spine: (ctx, w, h) => {
      ctx.fillStyle = '#0C141C';
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 1200);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.85)';
      ctx.fillRect(w / 2 - 30, 90, 60, 2);
      ctx.fillRect(w / 2 - 30, 98, 60, 1);
      ctx.fillRect(w / 2 - 30, h - 100, 60, 1);
      ctx.fillRect(w / 2 - 30, h - 92, 60, 2);

      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(Math.PI / 2);
      ctx.fillStyle = '#DFBA5A';
      ctx.textAlign = 'center';
      ctx.font = '600 36px "Bodoni Moda", serif';
      ctx.fillText('XMUSIC  —  ADITYA RATHORE', 0, 12);
      ctx.restore();
    },
    back: (ctx, w, h) => {
      ctx.fillStyle = '#0C141C';
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 2500);
      drawGoldBorder(ctx, w, h, 55, 1.5);

      ctx.fillStyle = '#DFBA5A';
      ctx.textAlign = 'center';
      ctx.font = 'italic 300 32px "Cormorant Garamond", serif';
      ctx.fillText('“Sound in games is not background noise;', w / 2, 380);
      ctx.fillText('it is the emotional architecture of the world.”', w / 2, 425);

      ctx.fillStyle = 'rgba(220, 230, 245, 0.75)';
      ctx.font = '300 22px "Plus Jakarta Sans", sans-serif';
      const blurb = [
        'Multi-version Fabric monorepo supporting 15+ MC releases.',
        'High-fidelity asynchronous audio streaming from YouTube & Spotify.',
        'Zero-overhead audio thread management with bespoke UI overlay.',
      ];
      blurb.forEach((line, i) => {
        ctx.fillText(line, w / 2, 540 + i * 44);
      });

      ctx.fillStyle = '#FAF7F0';
      ctx.fillRect(w / 2 - 120, h - 260, 240, 110);
      ctx.fillStyle = '#151413';
      let bx = w / 2 - 100;
      while (bx < w / 2 + 100) {
        const bw = 2 + Math.random() * 5;
        ctx.fillRect(bx, h - 245, bw, 65);
        bx += bw + 2 + Math.random() * 3;
      }
      ctx.font = '500 16px "Plus Jakarta Sans", monospace';
      ctx.fillText('MODRINTH · X-MUSIC', w / 2, h - 165);
    },
  },

  // 2. FRAMEGIT (FrameGIT)
  {
    id: 'framegit',
    title: 'FRAMEGIT',
    subtitle: 'Version Control for Creative Video Professionals',
    author: 'Aditya Rathore',
    publisher: 'FrameGit Infrastructure',
    edition: 'v1.0.0 Architecture · FastCDC + CAS Engine',
    year: '2025',
    stars: 5,
    desc: 'Content-addressed version control built specifically for terabyte-scale creative video projects. Bridges the gap between software engineering workflows and NLE timelines, providing Git-style commit trees, non-destructive timeline rollback, and visual diffing natively inside Adobe Premiere Pro and Blackmagic DaVinci Resolve.',
    tech: ['Node.js 22', 'Electron', 'FastCDC CAS', 'DAG Trees', 'Premiere Pro UXP', 'DaVinci Scripting'],
    liveURL: 'https://github.com/Code-Xceed/FrameGIT',
    natureBlend: 0.18,
    chapters: [
      'FastCDC Content-Defined Chunking',
      'Content-Addressed Storage (CAS)',
      'Directed Acyclic Graph (DAG) Trees',
      'Premiere Pro UXP & CEP Extension',
      'DaVinci Resolve Python Scripting API',
      'Visual Timeline Diffing & Rollback',
    ],
    edge: '#D6CEBE',
    backBg: '#181C20',
    backInk: '225,232,235',
    spineBg: '#121518',
    spineInk: '#DFBA5A',
    spineFont: '600 36px "Bodoni Moda", serif',
    front: (ctx, w, h) => {
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#1A2228');
      grad.addColorStop(0.5, '#25323C');
      grad.addColorStop(1, '#141A1E');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 3800);
      drawGoldBorder(ctx, w, h, 55, 2.5);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.85)';
      ctx.font = '300 17px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.fillText('CREATIVE VERSION CONTROL  ·  VOL. II', w / 2, 92);

      const pw = w - 150;
      const ph = 760;
      const px = 75;
      const py = 115;
      drawFrameGitPlate(ctx, px, py, pw, ph);

      ctx.save();
      ctx.strokeStyle = '#DFBA5A';
      ctx.lineWidth = 2.5;
      ctx.strokeRect(px, py, pw, ph);
      ctx.strokeStyle = 'rgba(223, 186, 90, 0.4)';
      ctx.lineWidth = 1;
      ctx.strokeRect(px + 6, py + 6, pw - 12, ph - 12);
      ctx.restore();

      const textCenterY = py + ph + 130;
      ctx.fillStyle = '#DFBA5A';
      ctx.font = '400 80px "Bodoni Moda", "Didot", serif';
      ctx.textAlign = 'center';
      ctx.fillText('FRAMEGIT', w / 2, textCenterY);

      ctx.fillStyle = '#EAE0CE';
      ctx.font = 'italic 300 27px "Cormorant Garamond", serif';
      ctx.fillText('Version Control for Creative Video Professionals', w / 2, textCenterY + 54);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.7)';
      ctx.font = '18px serif';
      ctx.fillText('❧   ✦   🎬   ✦   ❧', w / 2, textCenterY + 104);

      ctx.fillStyle = '#FAF7F0';
      ctx.font = '500 26px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('ADITYA RATHORE', w / 2, h - 165);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.8)';
      ctx.font = '300 20px "Cinzel", serif';
      ctx.fillText('FASTCDC CAS + DAG · ELECTRON ENGINE', w / 2, h - 120);
    },
    spine: (ctx, w, h) => {
      ctx.fillStyle = '#121518';
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 1200);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.85)';
      ctx.fillRect(w / 2 - 30, 90, 60, 2);
      ctx.fillRect(w / 2 - 30, 98, 60, 1);
      ctx.fillRect(w / 2 - 30, h - 100, 60, 1);
      ctx.fillRect(w / 2 - 30, h - 92, 60, 2);

      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(Math.PI / 2);
      ctx.fillStyle = '#DFBA5A';
      ctx.textAlign = 'center';
      ctx.font = '600 36px "Bodoni Moda", serif';
      ctx.fillText('FRAMEGIT  —  ADITYA RATHORE', 0, 12);
      ctx.restore();
    },
    back: (ctx, w, h) => {
      ctx.fillStyle = '#121518';
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 2500);
      drawGoldBorder(ctx, w, h, 55, 1.5);

      ctx.fillStyle = '#DFBA5A';
      ctx.textAlign = 'center';
      ctx.font = 'italic 300 32px "Cormorant Garamond", serif';
      ctx.fillText('“Terabytes of binary cinema;', w / 2, 380);
      ctx.fillText('now commanded with mathematical elegance.”', w / 2, 425);

      ctx.fillStyle = 'rgba(225, 232, 235, 0.75)';
      ctx.font = '300 22px "Plus Jakarta Sans", sans-serif';
      const blurb = [
        'Content-Addressed Storage eliminates multi-GB duplicate renders.',
        'Seamless integration for Adobe Premiere Pro & DaVinci Resolve.',
        'Non-destructive visual timeline diffing with single-click rollback.',
      ];
      blurb.forEach((line, i) => {
        ctx.fillText(line, w / 2, 540 + i * 44);
      });

      ctx.fillStyle = '#FAF7F0';
      ctx.fillRect(w / 2 - 120, h - 260, 240, 110);
      ctx.fillStyle = '#151413';
      let bx = w / 2 - 100;
      while (bx < w / 2 + 100) {
        const bw = 2 + Math.random() * 5;
        ctx.fillRect(bx, h - 245, bw, 65);
        bx += bw + 2 + Math.random() * 3;
      }
      ctx.font = '500 16px "Plus Jakarta Sans", monospace';
      ctx.fillText('FRAME-GIT · CAS-DAG', w / 2, h - 165);
    },
  },

  // 3. XDROP (Xdrop)
  {
    id: 'xdrop',
    title: 'XDROP',
    subtitle: 'Universal Social Media & Web Asset Importer',
    author: 'Aditya Rathore',
    publisher: 'CodeX Automation Suite',
    edition: 'Desktop Companion · DaVinci & Adobe NLEs',
    year: '2025',
    stars: 5,
    desc: 'Cross-editor companion utility that turns hours of searching, downloading, and converting into an instant 1-click workflow. Automatically detects video and audio URLs, extracts pristine streams via yt-dlp and FFmpeg, and injects them directly into active timelines and project bins across DaVinci Resolve, Premiere Pro, and After Effects.',
    tech: ['Python', 'FastAPI', 'WebSockets', 'PyWebView', 'React', 'yt-dlp', 'FFmpeg'],
    liveURL: 'https://github.com/Code-Xceed/Xdrop',
    natureBlend: 0.35,
    chapters: [
      'Universal Media URL Inspection',
      'High-Throughput FFmpeg Transcoding',
      'DaVinciResolveScript API Automation',
      'Adobe ExtendScript Pipeline Integration',
      'Reactive WebSockets HUD (PyWebView)',
      'Direct Timeline & Bin Insertion',
    ],
    edge: '#DECDB0',
    backBg: '#161E2E',
    backInk: '225,235,248',
    spineBg: '#101724',
    spineInk: '#DFBA5A',
    spineFont: '600 36px "Bodoni Moda", serif',
    front: (ctx, w, h) => {
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#1B273A');
      grad.addColorStop(0.5, '#263955');
      grad.addColorStop(1, '#131D2D');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 3800);
      drawGoldBorder(ctx, w, h, 55, 2.5);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.85)';
      ctx.font = '300 17px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.fillText('NLE WORKFLOW AUTOMATION  ·  VOL. III', w / 2, 92);

      const pw = w - 150;
      const ph = 760;
      const px = 75;
      const py = 115;
      drawXdropPlate(ctx, px, py, pw, ph);

      ctx.save();
      ctx.strokeStyle = '#DFBA5A';
      ctx.lineWidth = 2.5;
      ctx.strokeRect(px, py, pw, ph);
      ctx.strokeStyle = 'rgba(223, 186, 90, 0.4)';
      ctx.lineWidth = 1;
      ctx.strokeRect(px + 6, py + 6, pw - 12, ph - 12);
      ctx.restore();

      const textCenterY = py + ph + 130;
      ctx.fillStyle = '#DFBA5A';
      ctx.font = '400 82px "Bodoni Moda", "Didot", serif';
      ctx.textAlign = 'center';
      ctx.fillText('XDROP', w / 2, textCenterY);

      ctx.fillStyle = '#EAE0CE';
      ctx.font = 'italic 300 28px "Cormorant Garamond", serif';
      ctx.fillText('Universal Social Media & Web Asset Importer', w / 2, textCenterY + 54);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.7)';
      ctx.font = '18px serif';
      ctx.fillText('❧   ✦   ⚡   ✦   ❧', w / 2, textCenterY + 104);

      ctx.fillStyle = '#FAF7F0';
      ctx.font = '500 26px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('ADITYA RATHORE', w / 2, h - 165);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.8)';
      ctx.font = '300 20px "Cinzel", serif';
      ctx.fillText('FASTAPI · WEBSOCKETS · PYWEBVIEW', w / 2, h - 120);
    },
    spine: (ctx, w, h) => {
      ctx.fillStyle = '#101724';
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 1200);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.85)';
      ctx.fillRect(w / 2 - 30, 90, 60, 2);
      ctx.fillRect(w / 2 - 30, 98, 60, 1);
      ctx.fillRect(w / 2 - 30, h - 100, 60, 1);
      ctx.fillRect(w / 2 - 30, h - 92, 60, 2);

      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(Math.PI / 2);
      ctx.fillStyle = '#DFBA5A';
      ctx.textAlign = 'center';
      ctx.font = '600 36px "Bodoni Moda", serif';
      ctx.fillText('XDROP  —  ADITYA RATHORE', 0, 12);
      ctx.restore();
    },
    back: (ctx, w, h) => {
      ctx.fillStyle = '#101724';
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 2500);
      drawGoldBorder(ctx, w, h, 55, 1.5);

      ctx.fillStyle = '#DFBA5A';
      ctx.textAlign = 'center';
      ctx.font = 'italic 300 32px "Cormorant Garamond", serif';
      ctx.fillText('“Context switching kills creativity;', w / 2, 380);
      ctx.fillText('drop web assets directly into your timeline.”', w / 2, 425);

      ctx.fillStyle = 'rgba(225, 235, 248, 0.75)';
      ctx.font = '300 22px "Plus Jakarta Sans", sans-serif';
      const blurb = [
        'Native script API integration for DaVinci Resolve & Adobe.',
        'High-performance asynchronous media extraction via yt-dlp & FFmpeg.',
        'Floating desktop HUD built with React, WebSockets, and PyWebView.',
      ];
      blurb.forEach((line, i) => {
        ctx.fillText(line, w / 2, 540 + i * 44);
      });

      ctx.fillStyle = '#FAF7F0';
      ctx.fillRect(w / 2 - 120, h - 260, 240, 110);
      ctx.fillStyle = '#151413';
      let bx = w / 2 - 100;
      while (bx < w / 2 + 100) {
        const bw = 2 + Math.random() * 5;
        ctx.fillRect(bx, h - 245, bw, 65);
        bx += bw + 2 + Math.random() * 3;
      }
      ctx.font = '500 16px "Plus Jakarta Sans", monospace';
      ctx.fillText('XDROP · MONOREPO', w / 2, h - 165);
    },
  },

  // 4. XOPPOR AI (Xoppor-AI)
  {
    id: 'xoppor-ai',
    title: 'XOPPOR AI',
    subtitle: 'Autonomous Opportunity Radar & Neural Evaluator',
    author: 'Aditya Rathore',
    publisher: 'CodeX Intelligence Systems',
    edition: 'Autonomous Production Pipeline · Next.js 15',
    year: '2026',
    stars: 5,
    desc: 'Autonomous open-source opportunity radar that constantly scouts 16 platforms across the internet for high-value engineering contracts, startup roles, bounties, and hackathons. Evaluates 1,500+ daily live signals using Google Gemini AI and delivers scored, actionable Opportunity Cards directly to private Telegram channels.',
    tech: ['Next.js 15', 'TypeScript 5.8', 'Google Gemini AI', 'Prisma', 'Tailwind CSS', 'Telegram Bot API'],
    liveURL: 'https://github.com/Code-Xceed/Xoppor-AI',
    natureBlend: 0.52,
    chapters: [
      '16 Multi-Platform Scraping Scouts',
      'Signal Deduplication & Heuristics',
      'Google Gemini Semantic Scoring',
      'Opportunity Card Telegram Dispatcher',
      'Next.js 15 & Prisma Architecture',
      'Strict Zero-Outreach Privacy Radar',
    ],
    edge: '#DFCAB5',
    backBg: '#1E172E',
    backInk: '235,225,250',
    spineBg: '#161022',
    spineInk: '#DFBA5A',
    spineFont: '600 36px "Bodoni Moda", serif',
    front: (ctx, w, h) => {
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#241C38');
      grad.addColorStop(0.5, '#342852');
      grad.addColorStop(1, '#1A1428');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 3800);
      drawGoldBorder(ctx, w, h, 55, 2.5);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.85)';
      ctx.font = '300 17px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.fillText('AUTONOMOUS AI RADAR  ·  VOL. IV', w / 2, 92);

      const pw = w - 150;
      const ph = 760;
      const px = 75;
      const py = 115;
      drawXopporAIPlate(ctx, px, py, pw, ph);

      ctx.save();
      ctx.strokeStyle = '#DFBA5A';
      ctx.lineWidth = 2.5;
      ctx.strokeRect(px, py, pw, ph);
      ctx.strokeStyle = 'rgba(223, 186, 90, 0.4)';
      ctx.lineWidth = 1;
      ctx.strokeRect(px + 6, py + 6, pw - 12, ph - 12);
      ctx.restore();

      const textCenterY = py + ph + 130;
      ctx.fillStyle = '#DFBA5A';
      ctx.font = '400 78px "Bodoni Moda", "Didot", serif';
      ctx.textAlign = 'center';
      ctx.fillText('XOPPOR AI', w / 2, textCenterY);

      ctx.fillStyle = '#EAE0CE';
      ctx.font = 'italic 300 27px "Cormorant Garamond", serif';
      ctx.fillText('Autonomous Opportunity Radar & AI Evaluator', w / 2, textCenterY + 54);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.7)';
      ctx.font = '18px serif';
      ctx.fillText('❧   ✦   🛰️   ✦   ❧', w / 2, textCenterY + 104);

      ctx.fillStyle = '#FAF7F0';
      ctx.font = '500 26px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('ADITYA RATHORE', w / 2, h - 165);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.8)';
      ctx.font = '300 20px "Cinzel", serif';
      ctx.fillText('GOOGLE GEMINI AI · NEXT.JS 15 · PRISMA', w / 2, h - 120);
    },
    spine: (ctx, w, h) => {
      ctx.fillStyle = '#161022';
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 1200);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.85)';
      ctx.fillRect(w / 2 - 30, 90, 60, 2);
      ctx.fillRect(w / 2 - 30, 98, 60, 1);
      ctx.fillRect(w / 2 - 30, h - 100, 60, 1);
      ctx.fillRect(w / 2 - 30, h - 92, 60, 2);

      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(Math.PI / 2);
      ctx.fillStyle = '#DFBA5A';
      ctx.textAlign = 'center';
      ctx.font = '600 36px "Bodoni Moda", serif';
      ctx.fillText('XOPPOR AI  —  ADITYA RATHORE', 0, 12);
      ctx.restore();
    },
    back: (ctx, w, h) => {
      ctx.fillStyle = '#161022';
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 2500);
      drawGoldBorder(ctx, w, h, 55, 1.5);

      ctx.fillStyle = '#DFBA5A';
      ctx.textAlign = 'center';
      ctx.font = 'italic 300 32px "Cormorant Garamond", serif';
      ctx.fillText('“Opportunity favors the vigilant;', w / 2, 380);
      ctx.fillText('autonomous radar surfaces high-conviction signals.”', w / 2, 425);

      ctx.fillStyle = 'rgba(235, 225, 250, 0.75)';
      ctx.font = '300 22px "Plus Jakarta Sans", sans-serif';
      const blurb = [
        'Scouts 16 web sources continuously for high-yield engineering leads.',
        'Semantic conviction scoring powered by Google Gemini AI.',
        'Strict zero-outreach research architecture ensuring 100% user autonomy.',
      ];
      blurb.forEach((line, i) => {
        ctx.fillText(line, w / 2, 540 + i * 44);
      });

      ctx.fillStyle = '#FAF7F0';
      ctx.fillRect(w / 2 - 120, h - 260, 240, 110);
      ctx.fillStyle = '#151413';
      let bx = w / 2 - 100;
      while (bx < w / 2 + 100) {
        const bw = 2 + Math.random() * 5;
        ctx.fillRect(bx, h - 245, bw, 65);
        bx += bw + 2 + Math.random() * 3;
      }
      ctx.font = '500 16px "Plus Jakarta Sans", monospace';
      ctx.fillText('XOPPOR · AI-RADAR', w / 2, h - 165);
    },
  },

  // 5. VAULTOP (VaultOP-Tournaments-Mod)
  {
    id: 'vaultop-tournaments',
    title: 'VAULTOP',
    subtitle: 'Official Competitive Tournament Client Mod',
    author: 'Aditya Rathore',
    publisher: 'VaultOP Esports Platform',
    edition: 'Official Competition Client · Fabric 1.21.x',
    year: '2026',
    stars: 5,
    desc: 'The official client companion mod for the VaultOP Tournament Platform. Delivers a seamless competitive arena experience directly inside Minecraft 1.21.x: real-time match countdowns, 1-click tournament queue joining, dynamic event announcements, player stats, and cryptographic matchmaking authentication without leaving the game.',
    tech: ['Minecraft 1.21.x', 'Fabric Loader', 'Netty Networking', 'Secure Auth', 'GLSL UI Shaders'],
    liveURL: 'https://github.com/Code-Xceed/VaultOP-Tournaments-Mod',
    natureBlend: 0.68,
    chapters: [
      'In-Game Tournament Discovery & Signup',
      'Real-Time Matchmaking Queue Sync',
      'Dynamic Event Broadcast Overlays',
      'Competitive Leaderboards & Stat Engine',
      'Hardened Anti-Evasion Authentication',
      'Fabric API Client Architecture',
    ],
    edge: '#DECAB0',
    backBg: '#2E1515',
    backInk: '245,225,220',
    spineBg: '#241010',
    spineInk: '#DFBA5A',
    spineFont: '600 36px "Bodoni Moda", serif',
    front: (ctx, w, h) => {
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#381B1B');
      grad.addColorStop(0.5, '#4E2626');
      grad.addColorStop(1, '#291313');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 3800);
      drawGoldBorder(ctx, w, h, 55, 2.5);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.85)';
      ctx.font = '300 17px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.fillText('COMPETITIVE ESPORTS INFRASTRUCTURE  ·  VOL. V', w / 2, 92);

      const pw = w - 150;
      const ph = 760;
      const px = 75;
      const py = 115;
      drawVaultOPPlate(ctx, px, py, pw, ph);

      ctx.save();
      ctx.strokeStyle = '#DFBA5A';
      ctx.lineWidth = 2.5;
      ctx.strokeRect(px, py, pw, ph);
      ctx.strokeStyle = 'rgba(223, 186, 90, 0.4)';
      ctx.lineWidth = 1;
      ctx.strokeRect(px + 6, py + 6, pw - 12, ph - 12);
      ctx.restore();

      const textCenterY = py + ph + 130;
      ctx.fillStyle = '#DFBA5A';
      ctx.font = '400 82px "Bodoni Moda", "Didot", serif';
      ctx.textAlign = 'center';
      ctx.fillText('VAULTOP', w / 2, textCenterY);

      ctx.fillStyle = '#EAE0CE';
      ctx.font = 'italic 300 28px "Cormorant Garamond", serif';
      ctx.fillText('Official Competitive Tournament Client Mod', w / 2, textCenterY + 54);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.7)';
      ctx.font = '18px serif';
      ctx.fillText('❧   ✦   ⚔️   ✦   ❧', w / 2, textCenterY + 104);

      ctx.fillStyle = '#FAF7F0';
      ctx.font = '500 26px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('ADITYA RATHORE', w / 2, h - 165);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.8)';
      ctx.font = '300 20px "Cinzel", serif';
      ctx.fillText('FABRIC 1.21.X · NETTY INFRASTRUCTURE', w / 2, h - 120);
    },
    spine: (ctx, w, h) => {
      ctx.fillStyle = '#241010';
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 1200);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.85)';
      ctx.fillRect(w / 2 - 30, 90, 60, 2);
      ctx.fillRect(w / 2 - 30, 98, 60, 1);
      ctx.fillRect(w / 2 - 30, h - 100, 60, 1);
      ctx.fillRect(w / 2 - 30, h - 92, 60, 2);

      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(Math.PI / 2);
      ctx.fillStyle = '#DFBA5A';
      ctx.textAlign = 'center';
      ctx.font = '600 36px "Bodoni Moda", serif';
      ctx.fillText('VAULTOP  —  ADITYA RATHORE', 0, 12);
      ctx.restore();
    },
    back: (ctx, w, h) => {
      ctx.fillStyle = '#241010';
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 2500);
      drawGoldBorder(ctx, w, h, 55, 1.5);

      ctx.fillStyle = '#DFBA5A';
      ctx.textAlign = 'center';
      ctx.font = 'italic 300 32px "Cormorant Garamond", serif';
      ctx.fillText('“True competition demands zero friction;', w / 2, 380);
      ctx.fillText('from queue to arena in a single heartbeat.”', w / 2, 425);

      ctx.fillStyle = 'rgba(245, 225, 220, 0.75)';
      ctx.font = '300 22px "Plus Jakarta Sans", sans-serif';
      const blurb = [
        'Official client companion for the VaultOP competitive platform.',
        'Real-time match notifications, bracket synchronization, and stats.',
        'Cryptographic anti-evasion authentication for fair tournament play.',
      ];
      blurb.forEach((line, i) => {
        ctx.fillText(line, w / 2, 540 + i * 44);
      });

      ctx.fillStyle = '#FAF7F0';
      ctx.fillRect(w / 2 - 120, h - 260, 240, 110);
      ctx.fillStyle = '#151413';
      let bx = w / 2 - 100;
      while (bx < w / 2 + 100) {
        const bw = 2 + Math.random() * 5;
        ctx.fillRect(bx, h - 245, bw, 65);
        bx += bw + 2 + Math.random() * 3;
      }
      ctx.font = '500 16px "Plus Jakarta Sans", monospace';
      ctx.fillText('VAULTOP · ESPORTS', w / 2, h - 165);
    },
  },

  // 6. CODEX CLIENT (CodeX-Client-src)
  {
    id: 'codex-client',
    title: 'CODEX CLIENT',
    subtitle: 'Archival Fabric Utility & Performance Client',
    author: 'Aditya Rathore',
    publisher: 'CodeX Archival Engineering',
    edition: 'Archival Source Edition · MC 1.21.4',
    year: '2025',
    stars: 5,
    desc: 'A bespoke Minecraft Fabric 1.21.4 utility and performance client built from scratch. Features 12+ modular HUD subsystems including custom ClickGUI, Keystrokes, Armor Status, Aim Assist, and Fullbright, engineered with clean bytecode Mixins and zero garbage collection overhead. Released as an archival open-source reference.',
    tech: ['Java 21', 'Fabric 1.21.4', 'Bytecode Mixins', 'Gradle Kotlin DSL', 'Modular GUI Engine'],
    liveURL: 'https://github.com/Code-Xceed/CodeX-Client-src',
    demoURL: 'https://codexclient.netlify.app',
    natureBlend: 0.84,
    chapters: [
      'Modular Subsystem Architecture',
      'Custom ClickGUI & HUD Rendering',
      'Zero-Allocation Fabric Mixins',
      'Persistent Properties Serialization',
      'Gradle Kotlin DSL Single-Root Build',
      'Archival Open-Source Release',
    ],
    edge: '#D5CBBA',
    backBg: '#13221A',
    backInk: '220,238,225',
    spineBg: '#0E1A13',
    spineInk: '#DFBA5A',
    spineFont: '600 36px "Bodoni Moda", serif',
    front: (ctx, w, h) => {
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#172A20');
      grad.addColorStop(0.5, '#223E30');
      grad.addColorStop(1, '#122018');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 3800);
      drawGoldBorder(ctx, w, h, 55, 2.5);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.85)';
      ctx.font = '300 17px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.fillText('CLIENT ARCHITECTURE ARCHIVE  ·  VOL. VI', w / 2, 92);

      const pw = w - 150;
      const ph = 760;
      const px = 75;
      const py = 115;
      drawCodeXClientPlate(ctx, px, py, pw, ph);

      ctx.save();
      ctx.strokeStyle = '#DFBA5A';
      ctx.lineWidth = 2.5;
      ctx.strokeRect(px, py, pw, ph);
      ctx.strokeStyle = 'rgba(223, 186, 90, 0.4)';
      ctx.lineWidth = 1;
      ctx.strokeRect(px + 6, py + 6, pw - 12, ph - 12);
      ctx.restore();

      const textCenterY = py + ph + 130;
      ctx.fillStyle = '#DFBA5A';
      ctx.font = '400 78px "Bodoni Moda", "Didot", serif';
      ctx.textAlign = 'center';
      ctx.fillText('CODEX CLIENT', w / 2, textCenterY);

      ctx.fillStyle = '#EAE0CE';
      ctx.font = 'italic 300 27px "Cormorant Garamond", serif';
      ctx.fillText('Archival Fabric Utility & Performance Client', w / 2, textCenterY + 54);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.7)';
      ctx.font = '18px serif';
      ctx.fillText('❧   ✦   🧊   ✦   ❧', w / 2, textCenterY + 104);

      ctx.fillStyle = '#FAF7F0';
      ctx.font = '500 26px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('ADITYA RATHORE', w / 2, h - 165);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.8)';
      ctx.font = '300 20px "Cinzel", serif';
      ctx.fillText('MC 1.21.4 · FABRIC MIXINS · GRADLE KTS', w / 2, h - 120);
    },
    spine: (ctx, w, h) => {
      ctx.fillStyle = '#0E1A13';
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 1200);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.85)';
      ctx.fillRect(w / 2 - 30, 90, 60, 2);
      ctx.fillRect(w / 2 - 30, 98, 60, 1);
      ctx.fillRect(w / 2 - 30, h - 100, 60, 1);
      ctx.fillRect(w / 2 - 30, h - 92, 60, 2);

      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(Math.PI / 2);
      ctx.fillStyle = '#DFBA5A';
      ctx.textAlign = 'center';
      ctx.font = '600 36px "Bodoni Moda", serif';
      ctx.fillText('CODEX CLIENT  —  ADITYA RATHORE', 0, 12);
      ctx.restore();
    },
    back: (ctx, w, h) => {
      ctx.fillStyle = '#0E1A13';
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 2500);
      drawGoldBorder(ctx, w, h, 55, 1.5);

      ctx.fillStyle = '#DFBA5A';
      ctx.textAlign = 'center';
      ctx.font = 'italic 300 32px "Cormorant Garamond", serif';
      ctx.fillText('“A clean codebase left in the open', w / 2, 380);
      ctx.fillText('is infinitely greater than an abandoned secret.”', w / 2, 425);

      ctx.fillStyle = 'rgba(220, 238, 225, 0.75)';
      ctx.font = '300 22px "Plus Jakarta Sans", sans-serif';
      const blurb = [
        'Single-root Gradle Kotlin DSL build targeting Minecraft 1.21.4.',
        '12+ custom modular subsystems with zero frame overhead.',
        'Published in full as an archival open-source engineering reference.',
      ];
      blurb.forEach((line, i) => {
        ctx.fillText(line, w / 2, 540 + i * 44);
      });

      ctx.fillStyle = '#FAF7F0';
      ctx.fillRect(w / 2 - 120, h - 260, 240, 110);
      ctx.fillStyle = '#151413';
      let bx = w / 2 - 100;
      while (bx < w / 2 + 100) {
        const bw = 2 + Math.random() * 5;
        ctx.fillRect(bx, h - 245, bw, 65);
        bx += bw + 2 + Math.random() * 3;
      }
      ctx.font = '500 16px "Plus Jakarta Sans", monospace';
      ctx.fillText('CODEX · ARCHIVE', w / 2, h - 165);
    },
  },

  // 7. YT MEDIA DOWNLOADER (YT-Media-Downloader)
  {
    id: 'yt-media-downloader',
    title: 'YT MEDIA',
    subtitle: 'High-Fidelity Desktop Stream Harvester',
    author: 'Aditya Rathore',
    publisher: 'CodeX Desktop Utilities',
    edition: 'Desktop Application · Python & CustomTkinter',
    year: '2025',
    stars: 5,
    desc: 'A sleek, modern desktop media harvester built with CustomTkinter and Python. Provides multi-threaded extraction of pristine 4K/8K 60fps video streams, lossless audio isolation (MP3/FLAC/WAV), format probing, and automated disk storage management with zero web advertisements or rate-limiting.',
    tech: ['Python 3', 'CustomTkinter', 'Pillow (PIL)', 'yt-dlp Core', 'FFmpeg', 'Async Pipelines'],
    liveURL: 'https://github.com/Code-Xceed/YT-Media-Downloader',
    natureBlend: 1.0,
    chapters: [
      'CustomTkinter Dark Mode Interface',
      'Multi-Threaded Async Downloader Core',
      'Deep Media Format & Codec Probing',
      'Lossless Audio Extraction Pipelines',
      'Storage Directory & Filename Rules',
      'FFmpeg Transcoding Automation',
    ],
    edge: '#D8C6AD',
    backBg: '#2A1A12',
    backInk: '240,225,210',
    spineBg: '#20130D',
    spineInk: '#DFBA5A',
    spineFont: '600 36px "Bodoni Moda", serif',
    front: (ctx, w, h) => {
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#342016');
      grad.addColorStop(0.5, '#462C1E');
      grad.addColorStop(1, '#26160F');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 3800);
      drawGoldBorder(ctx, w, h, 55, 2.5);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.85)';
      ctx.font = '300 17px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.fillText('DESKTOP MEDIA HARVESTER  ·  VOL. VII', w / 2, 92);

      const pw = w - 150;
      const ph = 760;
      const px = 75;
      const py = 115;
      drawYTMediaPlate(ctx, px, py, pw, ph);

      ctx.save();
      ctx.strokeStyle = '#DFBA5A';
      ctx.lineWidth = 2.5;
      ctx.strokeRect(px, py, pw, ph);
      ctx.strokeStyle = 'rgba(223, 186, 90, 0.4)';
      ctx.lineWidth = 1;
      ctx.strokeRect(px + 6, py + 6, pw - 12, ph - 12);
      ctx.restore();

      const textCenterY = py + ph + 130;
      ctx.fillStyle = '#DFBA5A';
      ctx.font = '400 80px "Bodoni Moda", "Didot", serif';
      ctx.textAlign = 'center';
      ctx.fillText('YT MEDIA', w / 2, textCenterY);

      ctx.fillStyle = '#EAE0CE';
      ctx.font = 'italic 300 27px "Cormorant Garamond", serif';
      ctx.fillText('High-Fidelity Desktop Stream Harvester', w / 2, textCenterY + 54);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.7)';
      ctx.font = '18px serif';
      ctx.fillText('❧   ✦   🎥   ✦   ❧', w / 2, textCenterY + 104);

      ctx.fillStyle = '#FAF7F0';
      ctx.font = '500 26px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('ADITYA RATHORE', w / 2, h - 165);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.8)';
      ctx.font = '300 20px "Cinzel", serif';
      ctx.fillText('PYTHON 3 · CUSTOMTKINTER · YT-DLP', w / 2, h - 120);
    },
    spine: (ctx, w, h) => {
      ctx.fillStyle = '#20130D';
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 1200);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.85)';
      ctx.fillRect(w / 2 - 30, 90, 60, 2);
      ctx.fillRect(w / 2 - 30, 98, 60, 1);
      ctx.fillRect(w / 2 - 30, h - 100, 60, 1);
      ctx.fillRect(w / 2 - 30, h - 92, 60, 2);

      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(Math.PI / 2);
      ctx.fillStyle = '#DFBA5A';
      ctx.textAlign = 'center';
      ctx.font = '600 36px "Bodoni Moda", serif';
      ctx.fillText('YT MEDIA  —  ADITYA RATHORE', 0, 12);
      ctx.restore();
    },
    back: (ctx, w, h) => {
      ctx.fillStyle = '#20130D';
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 2500);
      drawGoldBorder(ctx, w, h, 55, 1.5);

      ctx.fillStyle = '#DFBA5A';
      ctx.textAlign = 'center';
      ctx.font = 'italic 300 32px "Cormorant Garamond", serif';
      ctx.fillText('“High-fidelity media extraction;', w / 2, 380);
      ctx.fillText('uncompressed streams with zero browser friction.”', w / 2, 425);

      ctx.fillStyle = 'rgba(240, 225, 210, 0.75)';
      ctx.font = '300 22px "Plus Jakarta Sans", sans-serif';
      const blurb = [
        'Multi-threaded async extraction of 4K/8K 60fps video & lossless audio.',
        'Modern dark mode interface built with CustomTkinter & Pillow.',
        'Automated local media storage routing and FFmpeg stream multiplexing.',
      ];
      blurb.forEach((line, i) => {
        ctx.fillText(line, w / 2, 540 + i * 44);
      });

      ctx.fillStyle = '#FAF7F0';
      ctx.fillRect(w / 2 - 120, h - 260, 240, 110);
      ctx.fillStyle = '#151413';
      let bx = w / 2 - 100;
      while (bx < w / 2 + 100) {
        const bw = 2 + Math.random() * 5;
        ctx.fillRect(bx, h - 245, bw, 65);
        bx += bw + 2 + Math.random() * 3;
      }
      ctx.font = '500 16px "Plus Jakarta Sans", monospace';
      ctx.fillText('YT-MEDIA · HARVESTER', w / 2, h - 165);
    },
  },
];
