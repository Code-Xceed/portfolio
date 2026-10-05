/**
 * Curatorial Monograph Data for Aditya Rathore (CodeX Atelier)
 * 
 * Each publication is a luxury cloth-bound nature monograph volume
 * pairing authentic software engineering projects with breathtaking classical
 * nature landscapes, botanical herbariums, and Venetian gold foil craftsmanship.
 * 
 * Volumes:
 * 1. XMUSIC (X-Music-src) — Nocturne at Moonlit Mountain Lake
 * 2. FRAMEGIT (FrameGIT) — Ancient Pine Grove & Mountain Tributaries
 * 3. XDROP (Xdrop) — Cascading Alpine Falls & Crystal Basin
 * 4. XOPPOR AI (Xoppor-AI) — Alpine Summit at Dawn & Sea of Clouds
 * 5. VAULTOP (VaultOP-Tournaments-Mod) — Tuscan Sunset & Golden Cypress Hills
 * 6. CODEX CLIENT (CodeX-Client-src) — Wild Alpine Herbarium & Edelweiss Meadow
 * 7. YT MEDIA (YT-Media-Downloader) — Sunlit Forest Glade & Golden Flax Field
 */

// Helper to draw Venetian gold leaf decorative border
function drawGoldBorder(ctx, w, h, inset = 55, lineWidth = 2.4) {
  ctx.save();
  ctx.strokeStyle = 'rgba(218, 168, 58, 0.95)'; // Radiant Venetian Gold
  ctx.lineWidth = lineWidth;
  ctx.strokeRect(inset, inset, w - inset * 2, h - inset * 2);

  // Inner fine hairline
  ctx.strokeStyle = 'rgba(218, 168, 58, 0.5)';
  ctx.lineWidth = 1;
  ctx.strokeRect(inset + 10, inset + 10, w - (inset + 10) * 2, h - (inset + 10) * 2);

  // Corner decorative rosettes
  const corners = [
    [inset + 5, inset + 5],
    [w - inset - 5, inset + 5],
    [inset + 5, h - inset - 5],
    [w - inset - 5, h - inset - 5],
  ];
  ctx.fillStyle = '#DFBA5A';
  corners.forEach(([cx, cy]) => {
    ctx.beginPath();
    ctx.arc(cx, cy, 3.5, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();
}

// Helper for luxurious natural linen cloth & woven fiber texture (warm brown edition)
function applyLinenClothTexture(ctx, w, h) {
  ctx.save();
  // Delicate horizontal linen weft fibers
  ctx.fillStyle = 'rgba(80, 50, 25, 0.045)';
  for (let y = 0; y < h; y += 4) {
    ctx.fillRect(0, y, w, 1);
  }
  // Delicate vertical warp threads
  for (let x = 0; x < w; x += 4) {
    ctx.fillRect(x, 0, 1, h);
  }
  // Organic fiber flecks
  ctx.fillStyle = 'rgba(70, 40, 18, 0.048)';
  for (let i = 0; i < 2200; i++) {
    ctx.fillRect(Math.random() * w, Math.random() * h, 1.2, 1.2);
  }
  // Crisp highlight threads
  ctx.fillStyle = 'rgba(255, 245, 230, 0.28)';
  for (let i = 0; i < 1500; i++) {
    ctx.fillRect(Math.random() * w, Math.random() * h, 1.4, 1.4);
  }
  ctx.restore();
}

// Helper for linen/parchment grain texture on canvas (backwards compatible)
function applyParchmentGrain(ctx, w, h, count = 2800) {
  applyLinenClothTexture(ctx, w, h);
}

// ----------------------------------------------------------------------
// AUTHENTIC PROJECT THUMBNAIL MOUNTING WITH CURATORIAL FILTERING
// ----------------------------------------------------------------------

/**
 * Mounts and filters project thumbnail logos inside the luxury cloth-bound monograph.
 * Filters applied:
 * 1. Deep mineral or vellum matting backdrop
 * 2. Proportional cover-scale (maintains exact aspect ratio, no stretching)
 * 3. Warm Venetian gold glaze (soft-light) to harmonise digital saturation with classical warm cloth
 * 4. Archival edge vignette creating a rich physical plate-inset bevel
 * 5. Microscopic linen/canvas grain overlay
 * 6. Radiant Venetian gold double frame with decorative corner rosettes
 */
export function drawProjectThumbnailPlate(ctx, px, py, pw, ph, img, theme = 'dark') {
  ctx.save();

  const isLight = theme === 'light';

  // 1. Museum Matting Backdrop
  const bgGrad = ctx.createRadialGradient(
    px + pw * 0.5, py + ph * 0.5, 30,
    px + pw * 0.5, py + ph * 0.5, pw * 0.75
  );
  if (isLight) {
    bgGrad.addColorStop(0, '#FAF6EE');
    bgGrad.addColorStop(0.65, '#EFE7D8');
    bgGrad.addColorStop(1, '#DECDB2');
  } else {
    bgGrad.addColorStop(0, '#161412');
    bgGrad.addColorStop(0.55, '#0E0C0A');
    bgGrad.addColorStop(1, '#060504');
  }
  ctx.fillStyle = bgGrad;
  ctx.fillRect(px, py, pw, ph);

  // 2. Render Image if loaded
  if (img && (img.width || img.naturalWidth) > 0 && (img.height || img.naturalHeight) > 0) {
    const iw = img.naturalWidth || img.width;
    const ih = img.naturalHeight || img.height;

    ctx.save();
    ctx.beginPath();
    ctx.rect(px, py, pw, ph);
    ctx.clip();

    // Proportional cover-scale (no distortion/stretching)
    const imgAspect = iw / ih;
    const plateAspect = pw / ph;
    let dw, dh, dx, dy;
    if (imgAspect > plateAspect) {
      dh = ph;
      dw = ph * imgAspect;
      dx = px + (pw - dw) * 0.5;
      dy = py;
    } else {
      dw = pw;
      dh = pw / imgAspect;
      dx = px;
      dy = py + (ph - dh) * 0.5;
    }

    ctx.drawImage(img, dx, dy, dw, dh);

    // 3. Curatorial Venetian Gold Glaze (Soft Warm Filter)
    ctx.globalCompositeOperation = 'soft-light';
    ctx.fillStyle = 'rgba(223, 186, 90, 0.16)';
    ctx.fillRect(px, py, pw, ph);

    // 4. Archival Edge Vignette (Plate Inset Depth)
    ctx.globalCompositeOperation = 'source-over';
    const vig = ctx.createRadialGradient(
      px + pw * 0.5, py + ph * 0.5, Math.min(pw, ph) * 0.38,
      px + pw * 0.5, py + ph * 0.5, Math.min(pw, ph) * 0.72
    );
    vig.addColorStop(0, 'rgba(0, 0, 0, 0)');
    vig.addColorStop(1, isLight ? 'rgba(90, 68, 42, 0.28)' : 'rgba(8, 6, 4, 0.52)');
    ctx.fillStyle = vig;
    ctx.fillRect(px, py, pw, ph);

    // 5. Delicate Linen Grain Overlay
    ctx.fillStyle = 'rgba(255, 245, 225, 0.038)';
    for (let i = 0; i < 900; i++) {
      const rx = px + Math.random() * pw;
      const ry = py + Math.random() * ph;
      ctx.fillRect(rx, ry, 1.2, 1.2);
    }

    ctx.restore();
  } else {
    // Elegant fallback plate with gold atelier emblem
    ctx.save();
    ctx.fillStyle = '#DFBA5A';
    ctx.font = '300 22px "Cinzel", serif';
    ctx.textAlign = 'center';
    ctx.fillText('✦   CODEX ATELIER ARCHIVE   ✦', px + pw * 0.5, py + ph * 0.48);
    ctx.font = 'italic 300 18px "Cormorant Garamond", serif';
    ctx.fillStyle = '#A89880';
    ctx.fillText('Mounting Curatorial Plate...', px + pw * 0.5, py + ph * 0.54);
    ctx.restore();
  }

  // 6. Radiant Venetian Gold Bevel Frame around Thumbnail Plate
  ctx.save();
  ctx.strokeStyle = '#DFBA5A';
  ctx.lineWidth = 2.6;
  ctx.strokeRect(px, py, pw, ph);

  // Delicate inner gold hairline
  ctx.strokeStyle = 'rgba(223, 186, 90, 0.65)';
  ctx.lineWidth = 1;
  ctx.strokeRect(px + 6, py + 6, pw - 12, ph - 12);

  // Corner decorative rosettes
  const corners = [
    [px + 6, py + 6],
    [px + pw - 6, py + 6],
    [px + 6, py + ph - 6],
    [px + pw - 6, py + ph - 6],
  ];
  ctx.fillStyle = '#DFBA5A';
  corners.forEach(([cx, cy]) => {
    ctx.beginPath();
    ctx.arc(cx, cy, 2.5, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();

  ctx.restore();
}

// ----------------------------------------------------------------------
// 7 PRODUCTION MONOGRAPH PUBLICATIONS
// ----------------------------------------------------------------------

export const MONOGRAPHS_DATA = [
  // 1. XMUSIC (X-Music-src) — Nocturne at Moonlit Mountain Lake
  {
    id: 'x-music',
    volumeNumber: 'I',
    thumbnail: '/gallery/Xmusic-Logo.png',
    title: 'XMUSIC',
    subtitle: 'Native In-Game Audio & Streaming Engine',
    author: 'Aditya Rathore',
    publisher: 'CodeX Atelier Editions',
    edition: 'Fabric Monorepo · 15+ Versions Baseline',
    year: '2025',
    stars: 5,
    highlights: ['15+ Versions Monorepo', 'Zero-Lag Audio Buffering', 'Native GLSL HUD'],
    desc: 'I built XMUSIC because alt-tabbing out of Minecraft in the middle of a build or fight just to change Spotify tracks or YouTube playlists always broke the flow. XMUSIC brings a lightweight, high-fidelity music streaming engine directly into the game. Designed as a modular monorepo supporting 15+ Minecraft releases (from 1.21 through 1.21.11 and 26.x), it manages thread-safe audio buffering so game ticks never drop, resolves YouTube and Spotify streams via WaterMedia API, and renders a sleek, non-intrusive GLSL in-game HUD.',
    tech: ['Java 21', 'Fabric API', 'Bytecode Mixins', 'WaterMedia API', 'Gradle Monorepo', 'GLSL HUD Shaders', 'Thread-Safe Audio Buffers'],
    liveURL: 'https://github.com/Code-Xceed/X-Music-src',
    demoURL: 'https://codex-music-show.vercel.app',
    natureBlend: 0.0,
    chapters: [
      'I. Multi-Version Monorepo (1.21 – 26.x)',
      'II. Thread-Safe Audio Buffer Pipeline',
      'III. YouTube & Spotify Stream Resolvers',
      'IV. Zero-Overhead Fabric Mixins',
      'V. Custom GLSL HUD & In-Game GUI',
      'VI. Modrinth & CurseForge Distribution',
    ],
    edge: '#CCB599',
    backBg: '#D8C2A8',
    backInk: '24,18,11',
    spineBg: '#C8B093',
    spineInk: '#18120B',
    spineFont: '600 36px "Bodoni Moda", serif',
    front: (ctx, w, h, img) => {
      // Warm Antique Fawn & Hazelnut Cloth Ground ("a bit little brown side")
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#E8D7C2');
      grad.addColorStop(0.48, '#D8C2A8');
      grad.addColorStop(1, '#C6AB8C');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyLinenClothTexture(ctx, w, h);
      drawGoldBorder(ctx, w, h, 55, 2.4);

      ctx.fillStyle = '#7E5318';
      ctx.font = '300 17px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.fillText('COLLECTION NATURE & ATELIER  ·  VOL. I', w / 2, 92);

      // Fine Art Nature Plate: Nocturne Lake (Thumbnail preserved 100%)
      const pw = w - 150;
      const ph = 760;
      const px = 75;
      const py = 115;
      drawProjectThumbnailPlate(ctx, px, py, pw, ph, img, 'dark');

      // Lower Monograph Block: Typography
      const textCenterY = py + ph + 130;
      ctx.fillStyle = '#18120B';
      ctx.font = '400 82px "Bodoni Moda", "Didot", serif';
      ctx.textAlign = 'center';
      ctx.fillText('XMUSIC', w / 2, textCenterY);

      ctx.fillStyle = '#4A3A2F';
      ctx.font = 'italic 300 28px "Cormorant Garamond", serif';
      ctx.fillText('Native In-Game Audio & Streaming Engine', w / 2, textCenterY + 54);

      ctx.fillStyle = '#DFBA5A';
      ctx.font = '18px serif';
      ctx.fillText('❧   ✦   🌲   ✦   ❧', w / 2, textCenterY + 104);

      ctx.fillStyle = '#18120B';
      ctx.font = '500 26px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('ADITYA RATHORE', w / 2, h - 165);

      ctx.fillStyle = '#7E5318';
      ctx.font = '300 20px "Cinzel", serif';
      ctx.fillText('FABRIC ARCHITECTURE · OPEN SOURCE', w / 2, h - 120);
    },
    spine: (ctx, w, h) => {
      const grad = ctx.createLinearGradient(0, 0, w, 0);
      grad.addColorStop(0, '#C8B093');
      grad.addColorStop(0.5, '#DAC5AC');
      grad.addColorStop(1, '#C2A88B');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyLinenClothTexture(ctx, w, h);

      ctx.fillStyle = '#DFBA5A';
      ctx.fillRect(w / 2 - 32, 90, 64, 2.5);
      ctx.fillRect(w / 2 - 32, 98, 64, 1);
      ctx.fillRect(w / 2 - 32, h - 100, 64, 1);
      ctx.fillRect(w / 2 - 32, h - 92, 64, 2.5);

      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(Math.PI / 2);
      ctx.fillStyle = '#18120B';
      ctx.textAlign = 'center';
      ctx.font = '600 36px "Bodoni Moda", serif';
      ctx.fillText('XMUSIC  —  ADITYA RATHORE', 0, 12);
      ctx.restore();
    },
    back: (ctx, w, h) => {
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#E8D7C2');
      grad.addColorStop(0.5, '#D8C2A8');
      grad.addColorStop(1, '#C6AB8C');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyLinenClothTexture(ctx, w, h);
      drawGoldBorder(ctx, w, h, 55, 1.6);

      ctx.fillStyle = '#18120B';
      ctx.textAlign = 'center';
      ctx.font = 'italic 300 32px "Cormorant Garamond", serif';
      ctx.fillText('“Game audio shouldn\'t require an alt-tab;', w / 2, 380);
      ctx.fillText('music belongs natively inside the world.”', w / 2, 425);

      ctx.fillStyle = '#4A3A2F';
      ctx.font = '300 22px "Plus Jakarta Sans", sans-serif';
      const blurb = [
        'Multi-version Fabric monorepo supporting 15+ releases from 1.21 to 26.x.',
        'Asynchronous thread-safe audio streaming from YouTube and Spotify.',
        'Zero-overhead audio thread management with custom GLSL HUD overlay.',
      ];
      blurb.forEach((line, i) => {
        ctx.fillText(line, w / 2, 540 + i * 44);
      });

      ctx.fillStyle = '#FAF6EE';
      ctx.fillRect(w / 2 - 120, h - 260, 240, 110);
      ctx.strokeStyle = 'rgba(199, 146, 56, 0.45)';
      ctx.lineWidth = 1;
      ctx.strokeRect(w / 2 - 120, h - 260, 240, 110);

      ctx.fillStyle = '#18120B';
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

  // 2. FRAMEGIT (FrameGIT) — Ancient Pine Grove & Mountain Tributaries
  {
    id: 'framegit',
    volumeNumber: 'II',
    thumbnail: '/gallery/FreameGIT-logo.png',
    title: 'FRAMEGIT',
    subtitle: 'Content-Addressed Version Control for Creative Video Timelines',
    author: 'Aditya Rathore',
    publisher: 'FrameGit Infrastructure',
    edition: 'v1.0.0 Architecture · FastCDC + CAS Engine',
    year: '2025',
    stars: 5,
    highlights: ['FastCDC Chunk Deduplication', 'Git DAG on SQLite', 'Premiere Pro & DaVinci UXP'],
    desc: 'Video editors produce 100GB to multi-terabyte timelines where traditional Git and Git LFS completely choke—forcing teams into fragile naming habits like "final_v2_FINAL_cut.prproj". I engineered FrameGit to bring real Git DAG workflows directly into Premiere Pro and DaVinci Resolve. Using FastCDC (Content-Defined Chunking), if an editor trims a 3-second graphic in a 50GB sequence, FrameGit only hashes and syncs the changed 2MB chunk. Built with an embedded SQLite state engine, it provides visual timeline diffs, branch checkouts, and 3-way non-destructive sequence merging without editor crashes.',
    tech: ['Node.js 22', 'Electron', 'FastCDC Chunking', 'Content-Addressed Storage (CAS)', 'DAG Commit Trees', 'SQLite (node:sqlite)', 'Premiere Pro UXP', 'DaVinci Resolve Scripting API'],
    liveURL: 'https://github.com/Code-Xceed/FrameGIT',
    natureBlend: 0.18,
    chapters: [
      'I. FastCDC Chunking & Binary Deduplication',
      'II. Content-Addressed Storage (CAS) Core',
      'III. Directed Acyclic Graph (DAG) Commit Trees',
      'IV. Embedded SQLite State Machine',
      'V. Premiere Pro UXP & DaVinci API Hooks',
      'VI. Visual Timeline Diff & 3-Way Merge',
    ],
    edge: '#CCB599',
    backBg: '#D8C2A8',
    backInk: '24,18,11',
    spineBg: '#C8B093',
    spineInk: '#18120B',
    spineFont: '600 36px "Bodoni Moda", serif',
    front: (ctx, w, h, img) => {
      // Warm Antique Fawn & Hazelnut Cloth Ground ("a bit little brown side")
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#E8D7C2');
      grad.addColorStop(0.48, '#D8C2A8');
      grad.addColorStop(1, '#C6AB8C');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyLinenClothTexture(ctx, w, h);
      drawGoldBorder(ctx, w, h, 55, 2.4);

      ctx.fillStyle = '#7E5318';
      ctx.font = '300 17px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.fillText('COLLECTION NATURE & ATELIER  ·  VOL. II', w / 2, 92);

      // Fine Art Nature Plate: Ancient Matsu Pine & River Tributaries (Thumbnail preserved 100%)
      const pw = w - 150;
      const ph = 760;
      const px = 75;
      const py = 115;
      drawProjectThumbnailPlate(ctx, px, py, pw, ph, img, 'dark');

      // Lower Monograph Block: Typography
      const textCenterY = py + ph + 130;
      ctx.fillStyle = '#18120B';
      ctx.font = '400 80px "Bodoni Moda", "Didot", serif';
      ctx.textAlign = 'center';
      ctx.fillText('FRAMEGIT', w / 2, textCenterY);

      ctx.fillStyle = '#4A3A2F';
      ctx.font = 'italic 300 27px "Cormorant Garamond", serif';
      ctx.fillText('Version Control for Creative Video Professionals', w / 2, textCenterY + 54);

      ctx.fillStyle = '#DFBA5A';
      ctx.font = '18px serif';
      ctx.fillText('❧   ✦   🌿   ✦   ❧', w / 2, textCenterY + 104);

      ctx.fillStyle = '#18120B';
      ctx.font = '500 26px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('ADITYA RATHORE', w / 2, h - 165);

      ctx.fillStyle = '#7E5318';
      ctx.font = '300 20px "Cinzel", serif';
      ctx.fillText('FASTCDC CAS + DAG · ELECTRON ENGINE', w / 2, h - 120);
    },
    spine: (ctx, w, h) => {
      const grad = ctx.createLinearGradient(0, 0, w, 0);
      grad.addColorStop(0, '#C8B093');
      grad.addColorStop(0.5, '#DAC5AC');
      grad.addColorStop(1, '#C2A88B');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyLinenClothTexture(ctx, w, h);

      ctx.fillStyle = '#DFBA5A';
      ctx.fillRect(w / 2 - 32, 90, 64, 2.5);
      ctx.fillRect(w / 2 - 32, 98, 64, 1);
      ctx.fillRect(w / 2 - 32, h - 100, 64, 1);
      ctx.fillRect(w / 2 - 32, h - 92, 64, 2.5);

      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(Math.PI / 2);
      ctx.fillStyle = '#18120B';
      ctx.textAlign = 'center';
      ctx.font = '600 36px "Bodoni Moda", serif';
      ctx.fillText('FRAMEGIT  —  ADITYA RATHORE', 0, 12);
      ctx.restore();
    },
    back: (ctx, w, h) => {
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#E8D7C2');
      grad.addColorStop(0.5, '#D8C2A8');
      grad.addColorStop(1, '#C6AB8C');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyLinenClothTexture(ctx, w, h);
      drawGoldBorder(ctx, w, h, 55, 1.6);

      ctx.fillStyle = '#18120B';
      ctx.textAlign = 'center';
      ctx.font = 'italic 300 32px "Cormorant Garamond", serif';
      ctx.fillText('“Terabytes of binary cinema;', w / 2, 380);
      ctx.fillText('now commanded with true Git DAG elegance.”', w / 2, 425);

      ctx.fillStyle = '#4A3A2F';
      ctx.font = '300 22px "Plus Jakarta Sans", sans-serif';
      const blurb = [
        'Content-Addressed Storage eliminates multi-gigabyte duplicate render copies.',
        'Embedded SQLite state machine tracking sequences, tracks, and clip markers.',
        'Non-destructive visual timeline diffing with single-click rollback in NLEs.',
      ];
      blurb.forEach((line, i) => {
        ctx.fillText(line, w / 2, 540 + i * 44);
      });

      ctx.fillStyle = '#FAF6EE';
      ctx.fillRect(w / 2 - 120, h - 260, 240, 110);
      ctx.strokeStyle = 'rgba(199, 146, 56, 0.45)';
      ctx.lineWidth = 1;
      ctx.strokeRect(w / 2 - 120, h - 260, 240, 110);

      ctx.fillStyle = '#18120B';
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

  // 3. XDROP (Xdrop) — Cascading Alpine Falls & Crystal Basin
  {
    id: 'xdrop',
    volumeNumber: 'III',
    thumbnail: '/gallery/Xdrop-logo.png',
    title: 'XDROP',
    subtitle: 'Universal Social Media & Web Asset Importer for NLE Timelines',
    author: 'Aditya Rathore',
    publisher: 'CodeX Atelier Suite',
    edition: 'Desktop Companion · Resolve, Premiere & After Effects',
    year: '2025',
    stars: 5,
    highlights: ['1-Click Direct Timeline Drop', 'Multi-NLE Active Detection', 'ProRes & WAV Transcoding'],
    desc: 'Editing video always meant wasting time hopping between ad-heavy downloader websites, messy download folders, command-line FFmpeg scripts, and the NLE just to import reference footage or social media audio. I created Xdrop as a native, lightweight companion that runs right alongside DaVinci Resolve, Premiere Pro, and After Effects. You paste any link from YouTube, Instagram, X, TikTok, or Reddit; Xdrop inspects the stream, transcodes it with FFmpeg to ProRes MOV, H.264 MP4, or lossless WAV, and drops it straight into the active editor bin and timeline in a single click.',
    tech: ['Python', 'FastAPI', 'WebSockets', 'PyWebView', 'React 18', 'TypeScript', 'yt-dlp Core', 'FFmpeg Transcoding', 'DaVinciResolveScript API', 'Adobe CEP / ExtendScript', 'SQLite'],
    liveURL: 'https://github.com/Code-Xceed/Xdrop',
    natureBlend: 0.35,
    chapters: [
      'I. Multi-Editor Active Sensing Engine',
      'II. Asynchronous Download & Probe Queue',
      'III. FFmpeg ProRes & WAV Audio Pipeline',
      'IV. DaVinciResolveScript Bin Automation',
      'V. Adobe CEP ExtendScript Injection',
      'VI. Reactive PyWebView & WebSocket HUD',
    ],
    edge: '#CCB599',
    backBg: '#D8C2A8',
    backInk: '24,18,11',
    spineBg: '#C8B093',
    spineInk: '#18120B',
    spineFont: '600 36px "Bodoni Moda", serif',
    front: (ctx, w, h, img) => {
      // Warm Antique Fawn & Hazelnut Cloth Ground ("a bit little brown side")
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#E8D7C2');
      grad.addColorStop(0.48, '#D8C2A8');
      grad.addColorStop(1, '#C6AB8C');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyLinenClothTexture(ctx, w, h);
      drawGoldBorder(ctx, w, h, 55, 2.4);

      ctx.fillStyle = '#7E5318';
      ctx.font = '300 17px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.fillText('COLLECTION NATURE & ATELIER  ·  VOL. III', w / 2, 92);

      // Fine Art Nature Plate: Cascading Alpine Falls (Thumbnail preserved 100%)
      const pw = w - 150;
      const ph = 760;
      const px = 75;
      const py = 115;
      drawProjectThumbnailPlate(ctx, px, py, pw, ph, img, 'dark');

      // Lower Monograph Block: Typography
      const textCenterY = py + ph + 130;
      ctx.fillStyle = '#18120B';
      ctx.font = '400 82px "Bodoni Moda", "Didot", serif';
      ctx.textAlign = 'center';
      ctx.fillText('XDROP', w / 2, textCenterY);

      ctx.fillStyle = '#4A3A2F';
      ctx.font = 'italic 300 28px "Cormorant Garamond", serif';
      ctx.fillText('Universal Social Media & Web Asset Importer', w / 2, textCenterY + 54);

      ctx.fillStyle = '#DFBA5A';
      ctx.font = '18px serif';
      ctx.fillText('❧   ✦   🌊   ✦   ❧', w / 2, textCenterY + 104);

      ctx.fillStyle = '#18120B';
      ctx.font = '500 26px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('ADITYA RATHORE', w / 2, h - 165);

      ctx.fillStyle = '#7E5318';
      ctx.font = '300 20px "Cinzel", serif';
      ctx.fillText('FASTAPI · WEBSOCKETS · PYWEBVIEW', w / 2, h - 120);
    },
    spine: (ctx, w, h) => {
      const grad = ctx.createLinearGradient(0, 0, w, 0);
      grad.addColorStop(0, '#C8B093');
      grad.addColorStop(0.5, '#DAC5AC');
      grad.addColorStop(1, '#C2A88B');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyLinenClothTexture(ctx, w, h);

      ctx.fillStyle = '#DFBA5A';
      ctx.fillRect(w / 2 - 32, 90, 64, 2.5);
      ctx.fillRect(w / 2 - 32, 98, 64, 1);
      ctx.fillRect(w / 2 - 32, h - 100, 64, 1);
      ctx.fillRect(w / 2 - 32, h - 92, 64, 2.5);

      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(Math.PI / 2);
      ctx.fillStyle = '#18120B';
      ctx.textAlign = 'center';
      ctx.font = '600 36px "Bodoni Moda", serif';
      ctx.fillText('XDROP  —  ADITYA RATHORE', 0, 12);
      ctx.restore();
    },
    back: (ctx, w, h) => {
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#E8D7C2');
      grad.addColorStop(0.5, '#D8C2A8');
      grad.addColorStop(1, '#C6AB8C');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyLinenClothTexture(ctx, w, h);
      drawGoldBorder(ctx, w, h, 55, 1.6);

      ctx.fillStyle = '#18120B';
      ctx.textAlign = 'center';
      ctx.font = 'italic 300 32px "Cormorant Garamond", serif';
      ctx.fillText('“Context switching destroys creative flow;', w / 2, 380);
      ctx.fillText('drop web assets directly into your bins.”', w / 2, 425);

      ctx.fillStyle = '#4A3A2F';
      ctx.font = '300 22px "Plus Jakarta Sans", sans-serif';
      const blurb = [
        'Native scripting integration for DaVinci Resolve, Premiere Pro & After Effects.',
        'Asynchronous media extraction with automatic ProRes and WAV transcoding.',
        'High-density desktop HUD built with React 18, WebSockets, and PyWebView.',
      ];
      blurb.forEach((line, i) => {
        ctx.fillText(line, w / 2, 540 + i * 44);
      });

      ctx.fillStyle = '#FAF6EE';
      ctx.fillRect(w / 2 - 120, h - 260, 240, 110);
      ctx.strokeStyle = 'rgba(199, 146, 56, 0.45)';
      ctx.lineWidth = 1;
      ctx.strokeRect(w / 2 - 120, h - 260, 240, 110);

      ctx.fillStyle = '#18120B';
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

  // 4. XOPPOR AI (Xoppor-AI) — Alpine Summit at Dawn & Sea of Clouds
  {
    id: 'xoppor-ai',
    volumeNumber: 'IV',
    thumbnail: '/gallery/Xoppor-AI.png',
    title: 'XOPPOR AI',
    subtitle: 'Autonomous Multi-Platform Opportunity Radar & Neural Evaluator',
    author: 'Aditya Rathore',
    publisher: 'CodeX Intelligence Systems',
    edition: 'Autonomous Production Pipeline · Next.js 15',
    year: '2026',
    stars: 5,
    highlights: ['16 Autonomous Scout Engines', 'Gemini AI Semantic Scoring', 'Real-Time Telegram Cards'],
    desc: 'Finding high-yield freelance contracts, client MVPs, and startup roles across dozens of job boards, Reddit subs, and Hacker News threads takes hours every day. Xoppor AI is an autonomous opportunity radar running 24/7 on GitHub Actions. It continuously sweeps 16 platforms (RemoteOK, Remotive, Hacker News "Who is Hiring", r/forhire, Devpost hackathons, and more), parses ~1,500 daily live signals, deduplicates cross-posted listings, and evaluates them with Google Gemini AI for budget conviction, client legitimacy, and skill fit. When a verified high-match opportunity surfaces, it dispatches an actionable Opportunity Card directly to my private Telegram.',
    tech: ['Next.js 15', 'TypeScript 5.8', 'Google Gemini AI', 'Prisma ORM', 'Telegram Bot API', 'Tailwind CSS', 'Web Scraping & Deduplication', 'GitHub Actions 24/7 CI'],
    liveURL: 'https://github.com/Code-Xceed/Xoppor-AI',
    natureBlend: 0.52,
    chapters: [
      'I. 16-Platform Multi-Source Scout Scrapers',
      'II. Cross-Source Signal Deduplication',
      'III. Google Gemini Intent & Budget Scoring',
      'IV. Telegram Bot Card Dispatcher',
      'V. Next.js 15 & Prisma Local Dashboard',
      'VI. Zero-Outreach Privacy-First Architecture',
    ],
    edge: '#CCB599',
    backBg: '#D8C2A8',
    backInk: '24,18,11',
    spineBg: '#C8B093',
    spineInk: '#18120B',
    spineFont: '600 36px "Bodoni Moda", serif',
    front: (ctx, w, h, img) => {
      // Warm Antique Fawn & Hazelnut Cloth Ground ("a bit little brown side")
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#E8D7C2');
      grad.addColorStop(0.48, '#D8C2A8');
      grad.addColorStop(1, '#C6AB8C');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyLinenClothTexture(ctx, w, h);
      drawGoldBorder(ctx, w, h, 55, 2.4);

      ctx.fillStyle = '#7E5318';
      ctx.font = '300 17px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.fillText('COLLECTION NATURE & ATELIER  ·  VOL. IV', w / 2, 92);

      // Fine Art Nature Plate: Summit Dawn over Sea of Clouds (Thumbnail preserved 100%)
      const pw = w - 150;
      const ph = 760;
      const px = 75;
      const py = 115;
      drawProjectThumbnailPlate(ctx, px, py, pw, ph, img, 'dark');

      // Lower Monograph Block: Typography
      const textCenterY = py + ph + 130;
      ctx.fillStyle = '#18120B';
      ctx.font = '400 78px "Bodoni Moda", "Didot", serif';
      ctx.textAlign = 'center';
      ctx.fillText('XOPPOR AI', w / 2, textCenterY);

      ctx.fillStyle = '#4A3A2F';
      ctx.font = 'italic 300 27px "Cormorant Garamond", serif';
      ctx.fillText('Autonomous Opportunity Radar & AI Evaluator', w / 2, textCenterY + 54);

      ctx.fillStyle = '#DFBA5A';
      ctx.font = '18px serif';
      ctx.fillText('❧   ✦   🦅   ✦   ❧', w / 2, textCenterY + 104);

      ctx.fillStyle = '#18120B';
      ctx.font = '500 26px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('ADITYA RATHORE', w / 2, h - 165);

      ctx.fillStyle = '#7E5318';
      ctx.font = '300 20px "Cinzel", serif';
      ctx.fillText('GOOGLE GEMINI AI · NEXT.JS 15 · PRISMA', w / 2, h - 120);
    },
    spine: (ctx, w, h) => {
      const grad = ctx.createLinearGradient(0, 0, w, 0);
      grad.addColorStop(0, '#C8B093');
      grad.addColorStop(0.5, '#DAC5AC');
      grad.addColorStop(1, '#C2A88B');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyLinenClothTexture(ctx, w, h);

      ctx.fillStyle = '#DFBA5A';
      ctx.fillRect(w / 2 - 32, 90, 64, 2.5);
      ctx.fillRect(w / 2 - 32, 98, 64, 1);
      ctx.fillRect(w / 2 - 32, h - 100, 64, 1);
      ctx.fillRect(w / 2 - 32, h - 92, 64, 2.5);

      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(Math.PI / 2);
      ctx.fillStyle = '#18120B';
      ctx.textAlign = 'center';
      ctx.font = '600 36px "Bodoni Moda", serif';
      ctx.fillText('XOPPOR AI  —  ADITYA RATHORE', 0, 12);
      ctx.restore();
    },
    back: (ctx, w, h) => {
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#E8D7C2');
      grad.addColorStop(0.5, '#D8C2A8');
      grad.addColorStop(1, '#C6AB8C');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyLinenClothTexture(ctx, w, h);
      drawGoldBorder(ctx, w, h, 55, 1.6);

      ctx.fillStyle = '#18120B';
      ctx.textAlign = 'center';
      ctx.font = 'italic 300 32px "Cormorant Garamond", serif';
      ctx.fillText('“Opportunity favors the vigilant;', w / 2, 380);
      ctx.fillText('autonomous radar surfaces high-conviction signals.”', w / 2, 425);

      ctx.fillStyle = '#4A3A2F';
      ctx.font = '300 22px "Plus Jakarta Sans", sans-serif';
      const blurb = [
        'Scouts 16 web sources continuously for high-yield engineering leads & bounties.',
        'Semantic conviction scoring and compensation harvesting powered by Gemini AI.',
        'Strict zero-outreach research architecture ensuring 100% user autonomy.',
      ];
      blurb.forEach((line, i) => {
        ctx.fillText(line, w / 2, 540 + i * 44);
      });

      ctx.fillStyle = '#FAF6EE';
      ctx.fillRect(w / 2 - 120, h - 260, 240, 110);
      ctx.strokeStyle = 'rgba(199, 146, 56, 0.45)';
      ctx.lineWidth = 1;
      ctx.strokeRect(w / 2 - 120, h - 260, 240, 110);

      ctx.fillStyle = '#18120B';
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

  // 5. VAULTOP (VaultOP-Tournaments-Mod) — Tuscan Sunset & Golden Cypress Hills
  {
    id: 'vaultop-tournaments',
    volumeNumber: 'V',
    thumbnail: '/gallery/vault-logo.png',
    title: 'VAULTOP',
    subtitle: 'Official Competitive Tournament Client Mod for Minecraft',
    author: 'Aditya Rathore',
    publisher: 'VaultOP Esports Platform',
    edition: 'Official Competition Client · Fabric 1.21.x',
    year: '2026',
    stars: 5,
    highlights: ['Official Esports Tournament Client', 'Netty Real-Time Matchmaking', 'Hardened Anti-Evasion Auth'],
    desc: 'VaultOP Tournaments is the official competitive client mod for the VaultOP Tournament Platform. In competitive esports gaming, tournament coordination is traditionally messy—players have to tab out to Discord announcements, Google Sheets brackets, and queue timers. This client integrates the entire tournament infrastructure directly inside Minecraft 1.21.x: players receive live match announcements and countdowns on their screen, join tournament queues with a single click, view live leaderboards, and authenticate through backend-controlled matchmaking with cryptographic anti-evasion checks.',
    tech: ['Java 21', 'Minecraft 1.21.x', 'Fabric Loader & API', 'Netty Socket Networking', 'Cryptographic Auth', 'GLSL UI Shaders', 'Matchmaking Event WebSockets'],
    liveURL: 'https://github.com/Code-Xceed/VaultOP-Tournaments-Mod',
    natureBlend: 0.68,
    chapters: [
      'I. In-Game Tournament Discovery & Sync',
      'II. Netty Real-Time Matchmaking Socket',
      'III. Dynamic Event Announcement Overlays',
      'IV. Live Leaderboard & Player Stats Engine',
      'V. Cryptographic Anti-Evasion Auth',
      'VI. Fabric 1.21.x Client Optimization',
    ],
    edge: '#CCB599',
    backBg: '#D8C2A8',
    backInk: '24,18,11',
    spineBg: '#C8B093',
    spineInk: '#18120B',
    spineFont: '600 36px "Bodoni Moda", serif',
    front: (ctx, w, h, img) => {
      // Warm Antique Fawn & Hazelnut Cloth Ground ("a bit little brown side")
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#E8D7C2');
      grad.addColorStop(0.48, '#D8C2A8');
      grad.addColorStop(1, '#C6AB8C');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyLinenClothTexture(ctx, w, h);
      drawGoldBorder(ctx, w, h, 55, 2.4);

      ctx.fillStyle = '#7E5318';
      ctx.font = '300 17px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.fillText('COLLECTION NATURE & ATELIER  ·  VOL. V', w / 2, 92);

      // Fine Art Nature Plate: Tuscan Sunset & Cypress Hills (Thumbnail preserved 100%)
      const pw = w - 150;
      const ph = 760;
      const px = 75;
      const py = 115;
      drawProjectThumbnailPlate(ctx, px, py, pw, ph, img, 'light');

      // Lower Monograph Block: Typography
      const textCenterY = py + ph + 130;
      ctx.fillStyle = '#18120B';
      ctx.font = '400 82px "Bodoni Moda", "Didot", serif';
      ctx.textAlign = 'center';
      ctx.fillText('VAULTOP', w / 2, textCenterY);

      ctx.fillStyle = '#4A3A2F';
      ctx.font = 'italic 300 28px "Cormorant Garamond", serif';
      ctx.fillText('Official Competitive Tournament Client Mod', w / 2, textCenterY + 54);

      ctx.fillStyle = '#DFBA5A';
      ctx.font = '18px serif';
      ctx.fillText('❧   ✦   🌾   ✦   ❧', w / 2, textCenterY + 104);

      ctx.fillStyle = '#18120B';
      ctx.font = '500 26px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('ADITYA RATHORE', w / 2, h - 165);

      ctx.fillStyle = '#7E5318';
      ctx.font = '300 20px "Cinzel", serif';
      ctx.fillText('FABRIC 1.21.X · NETTY INFRASTRUCTURE', w / 2, h - 120);
    },
    spine: (ctx, w, h) => {
      const grad = ctx.createLinearGradient(0, 0, w, 0);
      grad.addColorStop(0, '#C8B093');
      grad.addColorStop(0.5, '#DAC5AC');
      grad.addColorStop(1, '#C2A88B');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyLinenClothTexture(ctx, w, h);

      ctx.fillStyle = '#DFBA5A';
      ctx.fillRect(w / 2 - 32, 90, 64, 2.5);
      ctx.fillRect(w / 2 - 32, 98, 64, 1);
      ctx.fillRect(w / 2 - 32, h - 100, 64, 1);
      ctx.fillRect(w / 2 - 32, h - 92, 64, 2.5);

      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(Math.PI / 2);
      ctx.fillStyle = '#18120B';
      ctx.textAlign = 'center';
      ctx.font = '600 36px "Bodoni Moda", serif';
      ctx.fillText('VAULTOP  —  ADITYA RATHORE', 0, 12);
      ctx.restore();
    },
    back: (ctx, w, h) => {
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#E8D7C2');
      grad.addColorStop(0.5, '#D8C2A8');
      grad.addColorStop(1, '#C6AB8C');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyLinenClothTexture(ctx, w, h);
      drawGoldBorder(ctx, w, h, 55, 1.6);

      ctx.fillStyle = '#18120B';
      ctx.textAlign = 'center';
      ctx.font = 'italic 300 32px "Cormorant Garamond", serif';
      ctx.fillText('“True competition demands zero friction;', w / 2, 380);
      ctx.fillText('from queue to arena in a single heartbeat.”', w / 2, 425);

      ctx.fillStyle = '#4A3A2F';
      ctx.font = '300 22px "Plus Jakarta Sans", sans-serif';
      const blurb = [
        'Official client companion for the VaultOP competitive platform.',
        'Real-time match notifications, bracket synchronization, and stats.',
        'Cryptographic anti-evasion authentication for fair tournament play.',
      ];
      blurb.forEach((line, i) => {
        ctx.fillText(line, w / 2, 540 + i * 44);
      });

      ctx.fillStyle = '#FAF6EE';
      ctx.fillRect(w / 2 - 120, h - 260, 240, 110);
      ctx.strokeStyle = 'rgba(199, 146, 56, 0.45)';
      ctx.lineWidth = 1;
      ctx.strokeRect(w / 2 - 120, h - 260, 240, 110);

      ctx.fillStyle = '#18120B';
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

  // 6. CODEX CLIENT (CodeX-Client-src) — Wild Alpine Herbarium & Edelweiss Meadow
  {
    id: 'codex-client',
    volumeNumber: 'VI',
    thumbnail: '/gallery/CodeX-logo.png',
    title: 'CODEX CLIENT',
    subtitle: 'Fabric 1.21.4 Performance & Modular Utility Client',
    author: 'Aditya Rathore',
    publisher: 'CodeX Archival Engineering',
    edition: 'Archival Open Source · Fabric 1.21.4',
    year: '2025',
    stars: 5,
    highlights: ['12+ Modular Subsystems', 'Zero-GC Memory Management', 'Archival Open-Source Reference'],
    desc: 'CodeX Client began as a personal challenge to engineer a fast, modular Minecraft utility client for Fabric 1.21.4 from scratch with zero garbage collection overhead. I implemented 12+ modular HUD subsystems—including custom ClickGUI, Keystrokes, Armor Status, Aim Assist, Custom Crosshair, Time Changer, and Fullbright—using clean bytecode Mixins and a single-root Gradle Kotlin DSL build. When I wrapped up development, rather than letting the code disappear as a private worktree, I polished and published the entire source code openly so other developers could study, fork, and learn from its architecture.',
    tech: ['Java 21', 'Fabric 1.21.4', 'Bytecode Mixins', 'Gradle Kotlin DSL', 'Modular GUI Engine', 'Zero-GC Memory Optimization', 'Custom ClickGUI & HUD'],
    liveURL: 'https://github.com/Code-Xceed/CodeX-Client-src',
    demoURL: 'https://codexclient.netlify.app',
    natureBlend: 0.84,
    chapters: [
      'I. Modular Subsystem Registry',
      'II. Custom ClickGUI & HUD Rendering',
      'III. Zero-Allocation Bytecode Mixins',
      'IV. Persistent Keybind & Config Engine',
      'V. Single-Root Gradle Kotlin DSL Layout',
      'VI. Archival Open-Source Release',
    ],
    edge: '#CCB599',
    backBg: '#D8C2A8',
    backInk: '24,18,11',
    spineBg: '#C8B093',
    spineInk: '#18120B',
    spineFont: '600 36px "Bodoni Moda", serif',
    front: (ctx, w, h, img) => {
      // Warm Antique Fawn & Hazelnut Cloth Ground ("a bit little brown side")
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#E8D7C2');
      grad.addColorStop(0.48, '#D8C2A8');
      grad.addColorStop(1, '#C6AB8C');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyLinenClothTexture(ctx, w, h);
      drawGoldBorder(ctx, w, h, 55, 2.4);

      ctx.fillStyle = '#7E5318';
      ctx.font = '300 17px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.fillText('COLLECTION NATURE & ATELIER  ·  VOL. VI', w / 2, 92);

      // Fine Art Nature Plate: Alpine Peaks & Edelweiss Herbarium (Thumbnail preserved 100%)
      const pw = w - 150;
      const ph = 760;
      const px = 75;
      const py = 115;
      drawProjectThumbnailPlate(ctx, px, py, pw, ph, img, 'light');

      // Lower Monograph Block: Typography
      const textCenterY = py + ph + 130;
      ctx.fillStyle = '#18120B';
      ctx.font = '400 78px "Bodoni Moda", "Didot", serif';
      ctx.textAlign = 'center';
      ctx.fillText('CODEX CLIENT', w / 2, textCenterY);

      ctx.fillStyle = '#4A3A2F';
      ctx.font = 'italic 300 27px "Cormorant Garamond", serif';
      ctx.fillText('Archival Fabric Utility & Performance Client', w / 2, textCenterY + 54);

      ctx.fillStyle = '#DFBA5A';
      ctx.font = '18px serif';
      ctx.fillText('❧   ✦   🍃   ✦   ❧', w / 2, textCenterY + 104);

      ctx.fillStyle = '#18120B';
      ctx.font = '500 26px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('ADITYA RATHORE', w / 2, h - 165);

      ctx.fillStyle = '#7E5318';
      ctx.font = '300 20px "Cinzel", serif';
      ctx.fillText('MC 1.21.4 · FABRIC MIXINS · GRADLE KTS', w / 2, h - 120);
    },
    spine: (ctx, w, h) => {
      const grad = ctx.createLinearGradient(0, 0, w, 0);
      grad.addColorStop(0, '#C8B093');
      grad.addColorStop(0.5, '#DAC5AC');
      grad.addColorStop(1, '#C2A88B');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyLinenClothTexture(ctx, w, h);

      ctx.fillStyle = '#DFBA5A';
      ctx.fillRect(w / 2 - 32, 90, 64, 2.5);
      ctx.fillRect(w / 2 - 32, 98, 64, 1);
      ctx.fillRect(w / 2 - 32, h - 100, 64, 1);
      ctx.fillRect(w / 2 - 32, h - 92, 64, 2.5);

      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(Math.PI / 2);
      ctx.fillStyle = '#18120B';
      ctx.textAlign = 'center';
      ctx.font = '600 36px "Bodoni Moda", serif';
      ctx.fillText('CODEX CLIENT  —  ADITYA RATHORE', 0, 12);
      ctx.restore();
    },
    back: (ctx, w, h) => {
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#E8D7C2');
      grad.addColorStop(0.5, '#D8C2A8');
      grad.addColorStop(1, '#C6AB8C');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyLinenClothTexture(ctx, w, h);
      drawGoldBorder(ctx, w, h, 55, 1.6);

      ctx.fillStyle = '#18120B';
      ctx.textAlign = 'center';
      ctx.font = 'italic 300 32px "Cormorant Garamond", serif';
      ctx.fillText('“A clean codebase left in the open', w / 2, 380);
      ctx.fillText('is infinitely greater than an abandoned secret.”', w / 2, 425);

      ctx.fillStyle = '#4A3A2F';
      ctx.font = '300 22px "Plus Jakarta Sans", sans-serif';
      const blurb = [
        'Single-root Gradle Kotlin DSL build targeting Minecraft 1.21.4.',
        '12+ custom modular subsystems with zero frame overhead.',
        'Published in full as an archival open-source engineering reference.',
      ];
      blurb.forEach((line, i) => {
        ctx.fillText(line, w / 2, 540 + i * 44);
      });

      ctx.fillStyle = '#FAF6EE';
      ctx.fillRect(w / 2 - 120, h - 260, 240, 110);
      ctx.strokeStyle = 'rgba(199, 146, 56, 0.45)';
      ctx.lineWidth = 1;
      ctx.strokeRect(w / 2 - 120, h - 260, 240, 110);

      ctx.fillStyle = '#18120B';
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

  // 7. YT MEDIA DOWNLOADER (YT-Media-Downloader) — Sunlit Forest Glade & Wild Flax Field
  {
    id: 'yt-media-downloader',
    volumeNumber: 'VII',
    thumbnail: '/gallery/YT-media-logo.png',
    title: 'YT MEDIA',
    subtitle: 'High-Fidelity Multi-Threaded Desktop Stream Harvester',
    author: 'Aditya Rathore',
    publisher: 'CodeX Desktop Utilities',
    edition: 'Desktop Application · Python & CustomTkinter',
    year: '2025',
    stars: 5,
    highlights: ['4K/8K 60fps & Lossless Audio', 'Multi-Threaded Async Core', 'Ad-Free Clean Desktop UI'],
    desc: 'Most web-based media downloaders are plagued with popup advertisements, questionable redirects, and artificial bandwidth throttling, while bare command-line scripts are clunky for quick daily use. I built this modern desktop media harvester using Python, CustomTkinter, Pillow, and FFmpeg to provide a clean, ad-free experience. It features multi-threaded asynchronous extraction of 4K/8K 60fps video streams, lossless audio extraction (FLAC, WAV, MP3), deep codec and format probing, and automated disk storage routing with real-time progress feedback.',
    tech: ['Python 3', 'CustomTkinter', 'Pillow (PIL)', 'yt-dlp Core', 'FFmpeg Transcoding', 'Multi-Threaded Async Pipelines', 'Media Codec & Stream Probing'],
    liveURL: 'https://github.com/Code-Xceed/YT-Media-Downloader',
    natureBlend: 1.0,
    chapters: [
      'I. CustomTkinter Dark Mode GUI',
      'II. Multi-Threaded Async Downloader Core',
      'III. Media Codec & Resolution Probing',
      'IV. Lossless Audio Extraction Pipeline',
      'V. Automated Disk Storage Routing',
      'VI. FFmpeg Stream Multiplexing',
    ],
    edge: '#CCB599',
    backBg: '#D8C2A8',
    backInk: '24,18,11',
    spineBg: '#C8B093',
    spineInk: '#18120B',
    spineFont: '600 36px "Bodoni Moda", serif',
    front: (ctx, w, h, img) => {
      // Warm Antique Fawn & Hazelnut Cloth Ground ("a bit little brown side")
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#E8D7C2');
      grad.addColorStop(0.48, '#D8C2A8');
      grad.addColorStop(1, '#C6AB8C');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyLinenClothTexture(ctx, w, h);
      drawGoldBorder(ctx, w, h, 55, 2.4);

      ctx.fillStyle = '#7E5318';
      ctx.font = '300 17px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.fillText('COLLECTION NATURE & ATELIER  ·  VOL. VII', w / 2, 92);

      // Fine Art Nature Plate: Sunlit Wild Flax Meadow (Thumbnail preserved 100%)
      const pw = w - 150;
      const ph = 760;
      const px = 75;
      const py = 115;
      drawProjectThumbnailPlate(ctx, px, py, pw, ph, img, 'dark');

      // Lower Monograph Block: Typography
      const textCenterY = py + ph + 130;
      ctx.fillStyle = '#18120B';
      ctx.font = '400 80px "Bodoni Moda", "Didot", serif';
      ctx.textAlign = 'center';
      ctx.fillText('YT MEDIA', w / 2, textCenterY);

      ctx.fillStyle = '#4A3A2F';
      ctx.font = 'italic 300 27px "Cormorant Garamond", serif';
      ctx.fillText('High-Fidelity Desktop Stream Harvester', w / 2, textCenterY + 54);

      ctx.fillStyle = '#DFBA5A';
      ctx.font = '18px serif';
      ctx.fillText('❧   ✦   🌸   ✦   ❧', w / 2, textCenterY + 104);

      ctx.fillStyle = '#18120B';
      ctx.font = '500 26px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('ADITYA RATHORE', w / 2, h - 165);

      ctx.fillStyle = '#7E5318';
      ctx.font = '300 20px "Cinzel", serif';
      ctx.fillText('PYTHON 3 · CUSTOMTKINTER · YT-DLP', w / 2, h - 120);
    },
    spine: (ctx, w, h) => {
      const grad = ctx.createLinearGradient(0, 0, w, 0);
      grad.addColorStop(0, '#C8B093');
      grad.addColorStop(0.5, '#DAC5AC');
      grad.addColorStop(1, '#C2A88B');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyLinenClothTexture(ctx, w, h);

      ctx.fillStyle = '#DFBA5A';
      ctx.fillRect(w / 2 - 32, 90, 64, 2.5);
      ctx.fillRect(w / 2 - 32, 98, 64, 1);
      ctx.fillRect(w / 2 - 32, h - 100, 64, 1);
      ctx.fillRect(w / 2 - 32, h - 92, 64, 2.5);

      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(Math.PI / 2);
      ctx.fillStyle = '#18120B';
      ctx.textAlign = 'center';
      ctx.font = '600 36px "Bodoni Moda", serif';
      ctx.fillText('YT MEDIA  —  ADITYA RATHORE', 0, 12);
      ctx.restore();
    },
    back: (ctx, w, h) => {
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#E8D7C2');
      grad.addColorStop(0.5, '#D8C2A8');
      grad.addColorStop(1, '#C6AB8C');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyLinenClothTexture(ctx, w, h);
      drawGoldBorder(ctx, w, h, 55, 1.6);

      ctx.fillStyle = '#18120B';
      ctx.textAlign = 'center';
      ctx.font = 'italic 300 32px "Cormorant Garamond", serif';
      ctx.fillText('“High-fidelity media extraction;', w / 2, 380);
      ctx.fillText('uncompressed streams with zero browser friction.”', w / 2, 425);

      ctx.fillStyle = '#4A3A2F';
      ctx.font = '300 22px "Plus Jakarta Sans", sans-serif';
      const blurb = [
        'Multi-threaded async extraction of 4K/8K 60fps video & lossless audio.',
        'Modern dark mode interface built with CustomTkinter & Pillow.',
        'Automated local media storage routing and FFmpeg stream multiplexing.',
      ];
      blurb.forEach((line, i) => {
        ctx.fillText(line, w / 2, 540 + i * 44);
      });

      ctx.fillStyle = '#FAF6EE';
      ctx.fillRect(w / 2 - 120, h - 260, 240, 110);
      ctx.strokeStyle = 'rgba(199, 146, 56, 0.45)';
      ctx.lineWidth = 1;
      ctx.strokeRect(w / 2 - 120, h - 260, 240, 110);

      ctx.fillStyle = '#18120B';
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
