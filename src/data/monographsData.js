/**
 * Curatorial Monograph Data for Aditya Rathore (Paris — Tokyo Atelier)
 * Each publication represents an archival studio volume with authentic nature landscape
 * & botanical herbarium art plates inlaid into luxury book cloth bindings.
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
// NATURE LANDSCAPE & BOTANICAL ART PLATES
// ----------------------------------------------------------------------

// Plate 1: Tuscan Sunset, Rolling Cypress Hills & Olive Orchards
function drawTuscanLandscape(ctx, x, y, w, h) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.clip();

  // Sky: Warm Tuscan sunset gradient
  const sky = ctx.createLinearGradient(x, y, x, y + h);
  sky.addColorStop(0, '#56728C');
  sky.addColorStop(0.32, '#D8986E');
  sky.addColorStop(0.55, '#F5CD8A');
  sky.addColorStop(0.72, '#FFF1D0');
  ctx.fillStyle = sky;
  ctx.fillRect(x, y, w, h);

  // Glowing Sun Disc
  const sun = ctx.createRadialGradient(x + w * 0.68, y + h * 0.36, 4, x + w * 0.68, y + h * 0.36, 130);
  sun.addColorStop(0, 'rgba(255, 255, 245, 0.98)');
  sun.addColorStop(0.28, 'rgba(255, 225, 140, 0.65)');
  sun.addColorStop(1, 'rgba(255, 200, 100, 0)');
  ctx.fillStyle = sun;
  ctx.beginPath();
  ctx.arc(x + w * 0.68, y + h * 0.36, 130, 0, Math.PI * 2);
  ctx.fill();

  // Distant Mountain Ridge 1 (Soft violet atmospheric haze)
  ctx.fillStyle = '#8F7A89';
  ctx.beginPath();
  ctx.moveTo(x, y + h * 0.48);
  ctx.bezierCurveTo(x + w * 0.25, y + h * 0.43, x + w * 0.5, y + h * 0.51, x + w * 0.75, y + h * 0.44);
  ctx.bezierCurveTo(x + w * 0.88, y + h * 0.41, x + w * 0.95, y + h * 0.46, x + w, y + h * 0.44);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y + h);
  ctx.fill();

  // Distant Ridge 2 (Misty terracotta lavender)
  ctx.fillStyle = '#A4887A';
  ctx.beginPath();
  ctx.moveTo(x, y + h * 0.53);
  ctx.bezierCurveTo(x + w * 0.3, y + h * 0.49, x + w * 0.6, y + h * 0.57, x + w, y + h * 0.51);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y + h);
  ctx.fill();

  // Rolling Tuscan Hill 1 (Golden Ochre Earth)
  ctx.fillStyle = '#C69446';
  ctx.beginPath();
  ctx.moveTo(x, y + h * 0.61);
  ctx.bezierCurveTo(x + w * 0.2, y + h * 0.55, x + w * 0.45, y + h * 0.67, x + w * 0.7, y + h * 0.59);
  ctx.bezierCurveTo(x + w * 0.85, y + h * 0.54, x + w * 0.95, y + h * 0.61, x + w, y + h * 0.59);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y + h);
  ctx.fill();

  // Rolling Tuscan Hill 2 (Warm Olive & Terracotta)
  ctx.fillStyle = '#7B8446';
  ctx.beginPath();
  ctx.moveTo(x, y + h * 0.73);
  ctx.bezierCurveTo(x + w * 0.35, y + h * 0.65, x + w * 0.7, y + h * 0.75, x + w, y + h * 0.67);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y + h);
  ctx.fill();

  // Foreground Hill (Rich Tuscan Terracotta Earth)
  ctx.fillStyle = '#623322';
  ctx.beginPath();
  ctx.moveTo(x, y + h * 0.85);
  ctx.bezierCurveTo(x + w * 0.25, y + h * 0.77, x + w * 0.6, y + h * 0.87, x + w, y + h * 0.79);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y + h);
  ctx.fill();

  // Cypress Trees Helper
  function drawCypress(cx, cy, treeH, treeW) {
    ctx.save();
    ctx.fillStyle = '#172415';
    ctx.beginPath();
    ctx.moveTo(cx, cy - treeH);
    ctx.bezierCurveTo(cx - treeW, cy - treeH * 0.6, cx - treeW * 0.9, cy - treeH * 0.2, cx - treeW * 0.4, cy);
    ctx.lineTo(cx + treeW * 0.4, cy);
    ctx.bezierCurveTo(cx + treeW * 0.9, cy - treeH * 0.2, cx + treeW, cy - treeH * 0.6, cx, cy - treeH);
    ctx.fill();
    ctx.restore();
  }

  // Draw groves of Cypress trees across hill ridges
  const cypresses = [
    [x + w * 0.18, y + h * 0.60, 95, 15],
    [x + w * 0.21, y + h * 0.59, 108, 16],
    [x + w * 0.235, y + h * 0.60, 85, 13],
    [x + w * 0.52, y + h * 0.66, 75, 12],
    [x + w * 0.545, y + h * 0.65, 88, 14],
    [x + w * 0.78, y + h * 0.71, 120, 19],
    [x + w * 0.81, y + h * 0.70, 135, 21],
    [x + w * 0.84, y + h * 0.72, 105, 17],
    [x + w * 0.08, y + h * 0.83, 140, 23],
    [x + w * 0.11, y + h * 0.82, 160, 25],
    [x + w * 0.14, y + h * 0.84, 125, 20],
  ];
  cypresses.forEach(([cx, cy, th, tw]) => drawCypress(cx, cy, th, tw));

  // Olive grove dots (terraced hillside orchard rows)
  ctx.fillStyle = '#96A274';
  for (let r = 0; r < 7; r++) {
    const rowY = y + h * 0.64 + r * 14;
    for (let c = 0; c < 18; c++) {
      const colX = x + w * 0.30 + c * 18 + (r % 2) * 8;
      ctx.beginPath();
      ctx.arc(colX, rowY + Math.sin(c * 0.4) * 4, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Golden atmospheric valley mist
  const mist = ctx.createLinearGradient(x, y + h * 0.54, x, y + h * 0.84);
  mist.addColorStop(0, 'rgba(255, 235, 190, 0.28)');
  mist.addColorStop(0.5, 'rgba(255, 220, 160, 0.16)');
  mist.addColorStop(1, 'rgba(255, 210, 140, 0)');
  ctx.fillStyle = mist;
  ctx.fillRect(x, y + h * 0.52, w, h * 0.35);

  ctx.restore();
}

// Plate 2: Japanese Mountain Valley, Cascading Waterfall & Matsu Pine
function drawOchreValleyLandscape(ctx, x, y, w, h) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.clip();

  // Sky: Celadon & morning golden mist
  const sky = ctx.createLinearGradient(x, y, x, y + h);
  sky.addColorStop(0, '#526658');
  sky.addColorStop(0.35, '#88A28E');
  sky.addColorStop(0.6, '#D2DCC2');
  sky.addColorStop(0.8, '#EFE6BE');
  ctx.fillStyle = sky;
  ctx.fillRect(x, y, w, h);

  // Distant Japanese Mountain Peaks
  ctx.fillStyle = '#47534A';
  ctx.beginPath();
  ctx.moveTo(x, y + h * 0.52);
  ctx.lineTo(x + w * 0.18, y + h * 0.31);
  ctx.lineTo(x + w * 0.32, y + h * 0.43);
  ctx.lineTo(x + w * 0.52, y + h * 0.25);
  ctx.lineTo(x + w * 0.72, y + h * 0.41);
  ctx.lineTo(x + w * 0.88, y + h * 0.28);
  ctx.lineTo(x + w, y + h * 0.41);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y + h);
  ctx.fill();

  // Mountain Ridge 2 (Moss Green with waterfall)
  ctx.fillStyle = '#364336';
  ctx.beginPath();
  ctx.moveTo(x, y + h * 0.61);
  ctx.bezierCurveTo(x + w * 0.25, y + h * 0.47, x + w * 0.45, y + h * 0.57, x + w * 0.65, y + h * 0.45);
  ctx.bezierCurveTo(x + w * 0.85, y + h * 0.39, x + w * 0.95, y + h * 0.51, x + w, y + h * 0.49);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y + h);
  ctx.fill();

  // Waterfall ribbon
  ctx.fillStyle = 'rgba(235, 248, 242, 0.88)';
  ctx.beginPath();
  ctx.moveTo(x + w * 0.48, y + h * 0.45);
  ctx.lineTo(x + w * 0.495, y + h * 0.78);
  ctx.lineTo(x + w * 0.518, y + h * 0.78);
  ctx.lineTo(x + w * 0.492, y + h * 0.45);
  ctx.fill();

  // River mist pool at bottom of waterfall
  const waterMist = ctx.createRadialGradient(x + w * 0.5, y + h * 0.78, 10, x + w * 0.5, y + h * 0.78, 95);
  waterMist.addColorStop(0, 'rgba(240, 250, 245, 0.80)');
  waterMist.addColorStop(1, 'rgba(240, 250, 245, 0)');
  ctx.fillStyle = waterMist;
  ctx.beginPath();
  ctx.arc(x + w * 0.5, y + h * 0.78, 95, 0, Math.PI * 2);
  ctx.fill();

  // Valley Basin (Ochre & Moss)
  ctx.fillStyle = '#263224';
  ctx.beginPath();
  ctx.moveTo(x, y + h * 0.75);
  ctx.bezierCurveTo(x + w * 0.4, y + h * 0.69, x + w * 0.7, y + h * 0.83, x + w, y + h * 0.73);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y + h);
  ctx.fill();

  // Sweeping Japanese Pine (Matsu) in foreground
  ctx.save();
  ctx.strokeStyle = '#20140A';
  ctx.lineWidth = 15;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(x - 20, y + h * 0.95);
  ctx.bezierCurveTo(x + w * 0.15, y + h * 0.82, x + w * 0.22, y + h * 0.64, x + w * 0.35, y + h * 0.55);
  ctx.stroke();

  // Secondary boughs
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(x + w * 0.22, y + h * 0.68);
  ctx.bezierCurveTo(x + w * 0.32, y + h * 0.70, x + w * 0.42, y + h * 0.63, x + w * 0.52, y + h * 0.65);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x + w * 0.28, y + h * 0.60);
  ctx.bezierCurveTo(x + w * 0.35, y + h * 0.51, x + w * 0.42, y + h * 0.47, x + w * 0.56, y + h * 0.49);
  ctx.stroke();

  // Pine needle cloud clusters
  function drawPineCluster(px, py, radius) {
    ctx.fillStyle = '#142419';
    for (let c = 0; c < 5; c++) {
      ctx.beginPath();
      ctx.arc(px + (c - 2) * (radius * 0.35), py + Math.sin(c) * 4, radius * 0.46, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  drawPineCluster(x + w * 0.35, y + h * 0.55, 34);
  drawPineCluster(x + w * 0.44, y + h * 0.51, 30);
  drawPineCluster(x + w * 0.56, y + h * 0.49, 38);
  drawPineCluster(x + w * 0.52, y + h * 0.65, 36);
  drawPineCluster(x + w * 0.40, y + h * 0.66, 32);
  ctx.restore();

  // Wild cranes in flight
  ctx.strokeStyle = '#FAF7F0';
  ctx.lineWidth = 2;
  const cranes = [
    [x + w * 0.65, y + h * 0.35],
    [x + w * 0.72, y + h * 0.32],
    [x + w * 0.76, y + h * 0.37],
  ];
  cranes.forEach(([bx, by]) => {
    ctx.beginPath();
    ctx.moveTo(bx - 11, by);
    ctx.quadraticCurveTo(bx - 4, by - 6, bx, by);
    ctx.quadraticCurveTo(bx + 4, by - 6, bx + 11, by);
    ctx.stroke();
  });

  ctx.restore();
}

// Plate 3: Summer Belgian Flax Field with Blooming Celestial Azure Flowers
function drawFlaxFieldLandscape(ctx, x, y, w, h) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.clip();

  // Sky: Summer afternoon sky with clouds
  const sky = ctx.createLinearGradient(x, y, x, y + h);
  sky.addColorStop(0, '#568AB6');
  sky.addColorStop(0.42, '#9EC5E2');
  sky.addColorStop(0.68, '#E2EFF7');
  ctx.fillStyle = sky;
  ctx.fillRect(x, y, w, h);

  // Soft cumulus clouds
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  const clouds = [
    [x + w * 0.25, y + h * 0.22, 95, 42],
    [x + w * 0.32, y + h * 0.19, 115, 52],
    [x + w * 0.72, y + h * 0.27, 125, 46],
    [x + w * 0.82, y + h * 0.25, 98, 40],
  ];
  clouds.forEach(([cx, cy, rx, ry]) => {
    ctx.beginPath();
    ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
    ctx.fill();
  });

  // Distant Belgian Farmhouse & Tree Line
  ctx.fillStyle = '#5D7350';
  ctx.beginPath();
  ctx.moveTo(x, y + h * 0.51);
  ctx.bezierCurveTo(x + w * 0.35, y + h * 0.48, x + w * 0.7, y + h * 0.53, x + w, y + h * 0.50);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y + h);
  ctx.fill();

  // Flax Field Midground (Vibrant Azure & Meadow Green)
  const fieldGrad = ctx.createLinearGradient(x, y + h * 0.51, x, y + h);
  fieldGrad.addColorStop(0, '#477552');
  fieldGrad.addColorStop(0.35, '#528BAA'); // Sea of blue flax blossoms
  fieldGrad.addColorStop(0.7, '#395E3F');
  fieldGrad.addColorStop(1, '#27422C');
  ctx.fillStyle = fieldGrad;
  ctx.fillRect(x, y + h * 0.51, w, h * 0.49);

  // Stippled blue flax blossoms across the midground
  for (let i = 0; i < 700; i++) {
    const fx = x + Math.random() * w;
    const fy = y + h * 0.52 + Math.random() * (h * 0.32);
    const rad = 1.5 + (fy - (y + h * 0.52)) * 0.016;
    ctx.fillStyle = i % 3 === 0 ? '#4878B5' : i % 3 === 1 ? '#6598D5' : '#82B4E5';
    ctx.beginPath();
    ctx.arc(fx, fy, rad, 0, Math.PI * 2);
    ctx.fill();
  }

  // Foreground Botanical Flax Stalks & Blossoms
  ctx.save();
  ctx.strokeStyle = '#325230';
  ctx.lineWidth = 3.6;
  ctx.lineCap = 'round';

  function drawFlaxStalk(baseX, baseY, targetX, targetY) {
    ctx.beginPath();
    ctx.moveTo(baseX, baseY);
    ctx.bezierCurveTo(baseX + 15, baseY - 80, targetX - 20, targetY + 60, targetX, targetY);
    ctx.stroke();

    // Leaves along stem
    for (let l = 0.2; l < 0.9; l += 0.16) {
      const lx = baseX + (targetX - baseX) * l;
      const ly = baseY + (targetY - baseY) * l;
      ctx.fillStyle = '#3E623A';
      ctx.beginPath();
      ctx.ellipse(lx + 8, ly, 15, 4.5, 0.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(lx - 8, ly - 6, 15, 4.5, -0.4, 0, Math.PI * 2);
      ctx.fill();
    }

    // 5-petaled open flax flower
    const flowerX = targetX;
    const flowerY = targetY;
    ctx.fillStyle = '#4274B2';
    for (let p = 0; p < 5; p++) {
      const ang = (p * Math.PI * 2) / 5 - Math.PI / 2;
      ctx.beginPath();
      ctx.ellipse(flowerX + Math.cos(ang) * 17, flowerY + Math.sin(ang) * 17, 13, 17, ang, 0, Math.PI * 2);
      ctx.fill();
    }
    // Flower center
    ctx.fillStyle = '#FAF7F0';
    ctx.beginPath();
    ctx.arc(flowerX, flowerY, 6.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#DFBA5A';
    ctx.beginPath();
    ctx.arc(flowerX, flowerY, 3.8, 0, Math.PI * 2);
    ctx.fill();

    // Round golden seed bolls (linseed capsules)
    ctx.fillStyle = '#C8963E';
    ctx.beginPath();
    ctx.arc(flowerX - 24, flowerY + 28, 8.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(flowerX + 28, flowerY + 34, 7.5, 0, Math.PI * 2);
    ctx.fill();
  }

  drawFlaxStalk(x + w * 0.22, y + h + 20, x + w * 0.32, y + h * 0.69);
  drawFlaxStalk(x + w * 0.50, y + h + 20, x + w * 0.58, y + h * 0.64);
  drawFlaxStalk(x + w * 0.78, y + h + 20, x + w * 0.72, y + h * 0.67);
  ctx.restore();

  ctx.restore();
}

// Plate 4: Alpine Peaks, Mountain Glacial Lake & Wild Ferns / Edelweiss
function drawAlpineBotanicalLandscape(ctx, x, y, w, h) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.clip();

  // Sky: Crisp Alpine Morning Gradient
  const sky = ctx.createLinearGradient(x, y, x, y + h);
  sky.addColorStop(0, '#62748A');
  sky.addColorStop(0.35, '#96B0C4');
  sky.addColorStop(0.65, '#DEE6EE');
  ctx.fillStyle = sky;
  ctx.fillRect(x, y, w, h);

  // Jagged Alpine Peaks
  ctx.fillStyle = '#424C58';
  ctx.beginPath();
  ctx.moveTo(x, y + h * 0.52);
  ctx.lineTo(x + w * 0.22, y + h * 0.23); // Summit 1
  ctx.lineTo(x + w * 0.38, y + h * 0.39);
  ctx.lineTo(x + w * 0.58, y + h * 0.17); // Highest summit
  ctx.lineTo(x + w * 0.78, y + h * 0.37);
  ctx.lineTo(x + w * 0.92, y + h * 0.25);
  ctx.lineTo(x + w, y + h * 0.37);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y + h);
  ctx.fill();

  // Snow on Peaks
  ctx.fillStyle = 'rgba(250, 252, 255, 0.90)';
  // Summit 1 snow
  ctx.beginPath();
  ctx.moveTo(x + w * 0.22, y + h * 0.23);
  ctx.lineTo(x + w * 0.15, y + h * 0.34);
  ctx.lineTo(x + w * 0.22, y + h * 0.29);
  ctx.lineTo(x + w * 0.28, y + h * 0.33);
  ctx.fill();
  // Main Summit snow
  ctx.beginPath();
  ctx.moveTo(x + w * 0.58, y + h * 0.17);
  ctx.lineTo(x + w * 0.49, y + h * 0.30);
  ctx.lineTo(x + w * 0.58, y + h * 0.25);
  ctx.lineTo(x + w * 0.67, y + h * 0.32);
  ctx.fill();

  // Alpine Meltwater Lake (Reflective turquoise)
  const lake = ctx.createLinearGradient(x, y + h * 0.53, x, y + h * 0.72);
  lake.addColorStop(0, '#265C64');
  lake.addColorStop(0.5, '#377780');
  lake.addColorStop(1, '#569EA8');
  ctx.fillStyle = lake;
  ctx.fillRect(x, y + h * 0.53, w, h * 0.19);

  // Alpine Meadow Plateau (Foreground)
  ctx.fillStyle = '#263E2D';
  ctx.beginPath();
  ctx.moveTo(x, y + h * 0.70);
  ctx.bezierCurveTo(x + w * 0.35, y + h * 0.63, x + w * 0.7, y + h * 0.73, x + w, y + h * 0.67);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y + h);
  ctx.fill();

  // Foreground Alpine Ferns & Edelweiss Wildflowers
  ctx.save();
  ctx.strokeStyle = '#325C3C';
  ctx.lineWidth = 3;

  function drawFernFrond(fx, fy, angle, len) {
    ctx.save();
    ctx.translate(fx, fy);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(len * 0.3, -15, len, 0);
    ctx.stroke();
    for (let i = 15; i < len; i += 12) {
      const pinnaLen = (1 - i / len) * 22;
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i - 4, -pinnaLen);
      ctx.moveTo(i, 0);
      ctx.lineTo(i - 4, pinnaLen * 0.7);
      ctx.stroke();
    }
    ctx.restore();
  }
  drawFernFrond(x + w * 0.12, y + h * 0.88, -0.6, 125);
  drawFernFrond(x + w * 0.16, y + h * 0.90, -0.3, 145);
  drawFernFrond(x + w * 0.88, y + h * 0.88, -2.4, 135);
  drawFernFrond(x + w * 0.82, y + h * 0.90, -2.7, 115);

  // Edelweiss Wildflower
  function drawEdelweiss(ex, ey, sz) {
    ctx.fillStyle = '#F4F7F2';
    for (let b = 0; b < 8; b++) {
      const ang = (b * Math.PI * 2) / 8;
      ctx.beginPath();
      ctx.ellipse(ex + Math.cos(ang) * sz * 0.6, ey + Math.sin(ang) * sz * 0.6, sz * 0.4, sz * 0.8, ang, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#D6B43E';
    for (let d = 0; d < 6; d++) {
      const dang = (d * Math.PI * 2) / 6;
      ctx.beginPath();
      ctx.arc(ex + Math.cos(dang) * 4, ey + Math.sin(dang) * 4, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  drawEdelweiss(x + w * 0.42, y + h * 0.77, 17);
  drawEdelweiss(x + w * 0.52, y + h * 0.81, 21);
  drawEdelweiss(x + w * 0.62, y + h * 0.75, 16);
  ctx.restore();

  ctx.restore();
}

// ----------------------------------------------------------------------
// EXPORT MONOGRAPHS DATA
// ----------------------------------------------------------------------

export const MONOGRAPHS_DATA = [
  {
    id: 'vol-1-terre-toscane',
    title: 'TERRE TOSCANE',
    subtitle: 'Mineral Chemistry & Raw Earth Stratigraphy',
    author: 'Aditya Rathore',
    publisher: 'Éditions Gallimard Fine Art',
    edition: 'First Folio Edition · 350 Numbered Copies',
    year: '2024',
    stars: 5,
    desc: 'An exhaustive curatorial study examining raw natural earth pigments, volcanic pozzolana, and calcined iron oxides harvested along the Chianti ridge. Features 180 plates documenting the microscopic resonance of Venetian ochre, raw sienna, and cold-pressed walnut oil glazes.',
    tech: ['Three.js', 'WebGL 2.0', 'GLSL Shaders', 'React', 'Tailwind CSS'],
    liveURL: 'https://github.com/Code-Xceed',
    natureBlend: 0.0,
    chapters: [
      'Prolegomena: The Archaeology of Earth',
      'Pozzolana & Volcanic Slag Preparation',
      'Calcination of Iron Oxides in Montalcino',
      'Walnut Oil Stratigraphy on Belgian Linen',
      'Chromatic Tension: Siena to Florence',
      'Catalog of Exhibited Monoliths',
    ],
    edge: '#DFCBB0',
    backBg: '#2A1710',
    backInk: '235,220,195',
    spineBg: '#24140E',
    spineInk: '#DFBA5A',
    spineFont: '600 36px "Bodoni Moda", serif',
    front: (ctx, w, h) => {
      // Warm Baked Tuscan Terracotta Book Cloth Ground
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#3A2017');
      grad.addColorStop(0.5, '#4B281D');
      grad.addColorStop(1, '#2A160F');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 3800);
      drawGoldBorder(ctx, w, h, 55, 2.5);

      // Top Editorial Header
      ctx.fillStyle = 'rgba(223, 186, 90, 0.85)';
      ctx.font = '300 17px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.fillText('COLLECTION NATURE & STRATIGRAPHIE  ·  VOL. I', w / 2, 92);

      // Centerpiece Nature Art Plate: Tuscan Cypress Hills Landscape
      const pw = w - 150;
      const ph = 760;
      const px = 75;
      const py = 115;
      drawTuscanLandscape(ctx, px, py, pw, ph);

      // Gilded Bevel Frame around Landscape
      ctx.save();
      ctx.strokeStyle = '#DFBA5A';
      ctx.lineWidth = 2.5;
      ctx.strokeRect(px, py, pw, ph);
      ctx.strokeStyle = 'rgba(223, 186, 90, 0.4)';
      ctx.lineWidth = 1;
      ctx.strokeRect(px + 6, py + 6, pw - 12, ph - 12);
      ctx.restore();

      // Lower Monograph Block: Typography
      const textCenterY = py + ph + 130;
      ctx.fillStyle = '#DFBA5A';
      ctx.font = '400 82px "Bodoni Moda", "Didot", serif';
      ctx.textAlign = 'center';
      ctx.fillText('TERRE TOSCANE', w / 2, textCenterY);

      ctx.fillStyle = '#EAE0CE';
      ctx.font = 'italic 300 28px "Cormorant Garamond", serif';
      ctx.fillText('Mineral Chemistry & Raw Earth Stratigraphy', w / 2, textCenterY + 54);

      // Botanical Leaf Ornament
      ctx.fillStyle = 'rgba(223, 186, 90, 0.7)';
      ctx.font = '18px serif';
      ctx.fillText('❧   ✦   🌿   ✦   ❧', w / 2, textCenterY + 104);

      // Author & Imprint
      ctx.fillStyle = '#FAF7F0';
      ctx.font = '500 26px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('ADITYA RATHORE', w / 2, h - 165);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.8)';
      ctx.font = '300 20px "Cinzel", serif';
      ctx.fillText('ÉDITIONS GALLIMARD ART · PARIS', w / 2, h - 120);
    },
    spine: (ctx, w, h) => {
      ctx.fillStyle = '#24140E';
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
      ctx.fillText('TERRE TOSCANE  —  ADITYA RATHORE', 0, 12);
      ctx.restore();
    },
    back: (ctx, w, h) => {
      ctx.fillStyle = '#24140E';
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 2500);
      drawGoldBorder(ctx, w, h, 55, 1.5);

      ctx.fillStyle = '#DFBA5A';
      ctx.textAlign = 'center';
      ctx.font = 'italic 300 32px "Cormorant Garamond", serif';
      ctx.fillText('“Earth is not a mere surface;', w / 2, 380);
      ctx.fillText('it is a chronological pigment archive.”', w / 2, 425);

      ctx.fillStyle = 'rgba(235, 220, 195, 0.7)';
      ctx.font = '300 22px "Plus Jakarta Sans", sans-serif';
      const blurb = [
        'Recorded during residency at Chianti Sculptural Reserve.',
        'Printed with tripartite duotone inks on 200gsm Fabriano paper.',
        'Bound by hand at Atelier Saint-Germain, Paris.',
      ];
      blurb.forEach((line, i) => {
        ctx.fillText(line, w / 2, 540 + i * 44);
      });

      // Archival barcode
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
      ctx.fillText('ISBN 978-2-07-019842-1', w / 2, h - 165);
    },
  },
  {
    id: 'vol-2-silence-ochre',
    title: 'THE OCHRE VALLEY',
    subtitle: 'Monochromatic Resonances & Muromachi Botanical Ink',
    author: 'Aditya Rathore',
    publisher: 'Tokyo Geidai Press · Kyōto Retrospective',
    edition: 'Clothbound Hardcover with Washi Endpapers',
    year: '2023',
    stars: 5,
    desc: 'The official retrospective catalog of Rathore’s Kyōto temple exhibition. Interrogates the profound dialogue between negative wash voids (yohaku) and deeply crusted Venetian ochre impasto, bridged by historic 15th-century Japanese pine soot ink.',
    tech: ['Canvas 2D API', 'WebAudio API', 'React', 'GLSL Noise', 'TypeScript'],
    liveURL: 'https://github.com/Code-Xceed',
    natureBlend: 0.65,
    chapters: [
      'The Geometry of Emptiness (Ma)',
      'Pine Soot Carbon Suspension in Rainwater',
      'The Ochre Valley: Field Studies in Ryoan-ji',
      'Layering Sediment & Washi Transparency',
      'Dialogues with Sōami and Sesshū Tōyō',
      'Plates: The 2023 Kyōto Pavilions',
    ],
    edge: '#DFCAB0',
    backBg: '#20180E',
    backInk: '228,210,180',
    spineBg: '#1B140B',
    spineInk: '#DFBA5A',
    spineFont: '500 34px "Bodoni Moda", serif',
    front: (ctx, w, h) => {
      // Deep Autumn Moss & Raw Venetian Ochre Linen Ground
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#2D3828');
      grad.addColorStop(0.5, '#3E341E');
      grad.addColorStop(1, '#20180E');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 3800);
      drawGoldBorder(ctx, w, h, 55, 2.5);

      // Top Editorial Header
      ctx.fillStyle = 'rgba(223, 186, 90, 0.85)';
      ctx.font = '300 17px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.fillText('COLLECTION NATURE & STRATIGRAPHIE  ·  VOL. II', w / 2, 92);

      // Centerpiece Nature Art Plate: Japanese Mountain Valley & Matsu Pine
      const pw = w - 150;
      const ph = 760;
      const px = 75;
      const py = 115;
      drawOchreValleyLandscape(ctx, px, py, pw, ph);

      // Gilded Bevel Frame around Landscape
      ctx.save();
      ctx.strokeStyle = '#DFBA5A';
      ctx.lineWidth = 2.5;
      ctx.strokeRect(px, py, pw, ph);
      ctx.strokeStyle = 'rgba(223, 186, 90, 0.4)';
      ctx.lineWidth = 1;
      ctx.strokeRect(px + 6, py + 6, pw - 12, ph - 12);
      ctx.restore();

      // Lower Monograph Block: Typography
      const textCenterY = py + ph + 130;
      ctx.fillStyle = '#DFBA5A';
      ctx.font = '400 80px "Bodoni Moda", "Didot", serif';
      ctx.textAlign = 'center';
      ctx.fillText('THE OCHRE VALLEY', w / 2, textCenterY);

      ctx.fillStyle = '#EAE0CE';
      ctx.font = 'italic 300 28px "Cormorant Garamond", serif';
      ctx.fillText('Monochromatic Resonances & Botanical Ink', w / 2, textCenterY + 54);

      // Botanical Pine Ornament
      ctx.fillStyle = 'rgba(223, 186, 90, 0.7)';
      ctx.font = '18px serif';
      ctx.fillText('❧   ✦   🌲   ✦   ❧', w / 2, textCenterY + 104);

      // Author & Imprint
      ctx.fillStyle = '#FAF7F0';
      ctx.font = '500 26px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('ADITYA RATHORE', w / 2, h - 165);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.8)';
      ctx.font = '300 20px "Cinzel", serif';
      ctx.fillText('TOKYO GEIDAI PRESS · KYŌTO', w / 2, h - 120);
    },
    spine: (ctx, w, h) => {
      ctx.fillStyle = '#1B140B';
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 1200);

      ctx.fillStyle = '#DFBA5A';
      ctx.fillRect(w / 2 - 25, 80, 50, 2);
      ctx.fillRect(w / 2 - 25, h - 90, 50, 2);

      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(Math.PI / 2);
      ctx.fillStyle = '#DFBA5A';
      ctx.textAlign = 'center';
      ctx.font = '500 34px "Bodoni Moda", serif';
      ctx.fillText('THE OCHRE VALLEY  ·  ADITYA RATHORE', 0, 11);
      ctx.restore();
    },
    back: (ctx, w, h) => {
      ctx.fillStyle = '#1B140B';
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 2800);
      drawGoldBorder(ctx, w, h, 55, 1.5);

      ctx.fillStyle = '#DFBA5A';
      ctx.textAlign = 'center';
      ctx.font = 'italic 300 30px "Cormorant Garamond", serif';
      ctx.fillText('“In the void between pigments,', w / 2, 400);
      ctx.fillText('nature awakens the architecture.”', w / 2, 445);

      ctx.fillStyle = 'rgba(215, 205, 190, 0.7)';
      ctx.font = '300 21px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Co-published with the National Museum of Modern Art, Tokyo.', w / 2, 560);
      ctx.fillText('Bound in raw Kozo fiber with unrefined pine soot washes.', w / 2, 605);

      ctx.fillStyle = '#FAF7F0';
      ctx.fillRect(w / 2 - 110, h - 250, 220, 100);
      ctx.fillStyle = '#161513';
      let bx = w / 2 - 90;
      while (bx < w / 2 + 90) {
        const bw = 2 + Math.random() * 4;
        ctx.fillRect(bx, h - 235, bw, 60);
        bx += bw + 2 + Math.random() * 3;
      }
      ctx.font = '500 15px "Plus Jakarta Sans", monospace';
      ctx.fillText('ISBN 978-4-88303-491-0', w / 2, h - 165);
    },
  },
  {
    id: 'vol-3-eloge-du-lin',
    title: "L'ÉLOGE DU LIN",
    subtitle: 'Belgian Weaves, Flax Fibers & Walnut Oil Stratigraphy',
    author: 'Aditya Rathore',
    publisher: 'Éditions de l’Atelier Paris',
    edition: 'Archival Canvas Binding with Embossed Flax Stamp',
    year: '2022',
    stars: 5,
    desc: 'An homage to fifteen years of unprimed Belgian flax exploration in Rathore’s Montmartre studio. Demonstrates how micro-fibers absorb polymerized botanical oils to create ambient light diffraction without relying on synthetic varnishes.',
    tech: ['Three.js', 'Procedural Textures', 'React', 'CSS 3D', 'WebGL'],
    liveURL: 'https://github.com/Code-Xceed',
    natureBlend: 0.25,
    chapters: [
      'The Flax Fields of Courtrai (Kortrijk)',
      'Weaving Densities: 380gsm to 620gsm Linens',
      'Cold-Pressed Walnut Oil Preparation',
      'Atmospheric Refraction Through Fiber Cavities',
      'Ageing and Polymerization Across Decades',
      'Curatorial Plates: 2018–2022 Studies',
    ],
    edge: '#DFCBB0',
    backBg: '#272016',
    backInk: '240,230,215',
    spineBg: '#201910',
    spineInk: '#DFBA5A',
    spineFont: '600 36px "Bodoni Moda", serif',
    front: (ctx, w, h) => {
      // Natural Belgian Flax Weave & Harvest Walnut Book Cloth Ground
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#3A3022');
      grad.addColorStop(0.5, '#483C2C');
      grad.addColorStop(1, '#272016');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Fine linen weave pattern simulation
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      for (let y = 0; y < h; y += 4) ctx.fillRect(0, y, w, 1.2);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      for (let x = 0; x < w; x += 4) ctx.fillRect(x, 0, 1.2, h);

      applyParchmentGrain(ctx, w, h, 3400);
      drawGoldBorder(ctx, w, h, 55, 2.5);

      // Top Editorial Header
      ctx.fillStyle = 'rgba(223, 186, 90, 0.85)';
      ctx.font = '300 17px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.fillText('COLLECTION NATURE & STRATIGRAPHIE  ·  VOL. III', w / 2, 92);

      // Centerpiece Nature Art Plate: Belgian Summer Flax Fields & Azure Blossoms
      const pw = w - 150;
      const ph = 760;
      const px = 75;
      const py = 115;
      drawFlaxFieldLandscape(ctx, px, py, pw, ph);

      // Gilded Bevel Frame around Landscape
      ctx.save();
      ctx.strokeStyle = '#DFBA5A';
      ctx.lineWidth = 2.5;
      ctx.strokeRect(px, py, pw, ph);
      ctx.strokeStyle = 'rgba(223, 186, 90, 0.4)';
      ctx.lineWidth = 1;
      ctx.strokeRect(px + 6, py + 6, pw - 12, ph - 12);
      ctx.restore();

      // Lower Monograph Block: Typography
      const textCenterY = py + ph + 130;
      ctx.fillStyle = '#DFBA5A';
      ctx.font = 'italic 400 84px "Bodoni Moda", serif';
      ctx.textAlign = 'center';
      ctx.fillText("L'ÉLOGE DU LIN", w / 2, textCenterY);

      ctx.fillStyle = '#EAE0CE';
      ctx.font = 'italic 300 28px "Cormorant Garamond", serif';
      ctx.fillText('Belgian Weaves, Flax Blossoms & Botanical Oils', w / 2, textCenterY + 54);

      // Botanical Flax Blossom Ornament
      ctx.fillStyle = 'rgba(223, 186, 90, 0.7)';
      ctx.font = '18px serif';
      ctx.fillText('❧   ✦   🌾   ✦   ❧', w / 2, textCenterY + 104);

      // Author & Imprint
      ctx.fillStyle = '#FAF7F0';
      ctx.font = '500 26px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('ADITYA RATHORE', w / 2, h - 165);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.8)';
      ctx.font = '300 20px "Cinzel", serif';
      ctx.fillText('ÉDITIONS DE L’ATELIER · PARIS', w / 2, h - 120);
    },
    spine: (ctx, w, h) => {
      ctx.fillStyle = '#201910';
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 1200);

      ctx.fillStyle = '#DFBA5A';
      ctx.fillRect(w / 2 - 25, 80, 50, 2);
      ctx.fillRect(w / 2 - 25, h - 90, 50, 2);

      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(Math.PI / 2);
      ctx.fillStyle = '#DFBA5A';
      ctx.textAlign = 'center';
      ctx.font = '600 36px "Bodoni Moda", serif';
      ctx.fillText("L'ÉLOGE DU LIN  —  ADITYA RATHORE", 0, 12);
      ctx.restore();
    },
    back: (ctx, w, h) => {
      ctx.fillStyle = '#201910';
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 2800);
      drawGoldBorder(ctx, w, h, 55, 1.5);

      ctx.fillStyle = '#DFBA5A';
      ctx.textAlign = 'center';
      ctx.font = 'italic 300 32px "Cormorant Garamond", serif';
      ctx.fillText('“Flax is an organic prism;', w / 2, 400);
      ctx.fillText('it yields to light without resistance.”', w / 2, 445);

      ctx.fillStyle = 'rgba(240, 230, 215, 0.75)';
      ctx.font = '300 22px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Bound in unbleached Belgian linen canvas (Kortrijk 450gsm).', w / 2, 560);
      ctx.fillText('Letterpress printed on mould-made Velin d’Arches 250gsm.', w / 2, 605);

      ctx.fillStyle = '#FAF7F0';
      ctx.fillRect(w / 2 - 110, h - 250, 220, 100);
      ctx.fillStyle = '#1D1916';
      let bx = w / 2 - 90;
      while (bx < w / 2 + 90) {
        const bw = 2 + Math.random() * 4;
        ctx.fillRect(bx, h - 235, bw, 60);
        bx += bw + 2 + Math.random() * 3;
      }
      ctx.font = '500 15px "Plus Jakarta Sans", monospace';
      ctx.fillText('ISBN 978-2-95729-012-4', w / 2, h - 165);
    },
  },
  {
    id: 'vol-4-botanica-mineralis',
    title: 'BOTANICA MINERALIS',
    subtitle: 'Alpine Stone, Lichen Stratigraphy & Wild Herbarium',
    author: 'Aditya Rathore & Studio',
    publisher: 'Fondazione Arte Contemporanea · Roma',
    edition: 'Collector’s Monolith · 200 Hand-Stitched Folios',
    year: '2021',
    stars: 5,
    desc: 'An exploration of high-altitude alpine ecology, petrified lichen spores, and mountain river sediments. Documents the organic tension between raw mineral stones and botanical pressed flora collected in the maritime Alps.',
    tech: ['Three.js', 'Custom Shaders', 'React', 'Tailwind CSS', 'WebGL 2.0'],
    liveURL: 'https://github.com/Code-Xceed',
    natureBlend: 1.0,
    chapters: [
      'The Alpine Herbarium: Maritime Flora',
      'Petrified Lichen on Dolomite Stone',
      'Mineral Pigment Extraction at 2,400m',
      'Rainwater Emulsions & Botanical Glazes',
      'Monolithic Silences in Mountain Sanctuaries',
      'The Alpine Installation Dossier',
    ],
    edge: '#DFCAB0',
    backBg: '#152119',
    backInk: '230,225,215',
    spineBg: '#111A14',
    spineInk: '#DFBA5A',
    spineFont: '700 36px "Bodoni Moda", serif',
    front: (ctx, w, h) => {
      // Deep Alpine Fir Needle & Moss Limestone Slate Ground
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#1E2C22');
      grad.addColorStop(0.5, '#2A3C30');
      grad.addColorStop(1, '#152119');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 3800);
      drawGoldBorder(ctx, w, h, 55, 2.5);

      // Top Editorial Header
      ctx.fillStyle = 'rgba(223, 186, 90, 0.85)';
      ctx.font = '300 17px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.fillText('COLLECTION NATURE & STRATIGRAPHIE  ·  VOL. IV', w / 2, 92);

      // Centerpiece Nature Art Plate: Alpine Summits, Glacial Lake & Wild Ferns / Edelweiss
      const pw = w - 150;
      const ph = 760;
      const px = 75;
      const py = 115;
      drawAlpineBotanicalLandscape(ctx, px, py, pw, ph);

      // Gilded Bevel Frame around Landscape
      ctx.save();
      ctx.strokeStyle = '#DFBA5A';
      ctx.lineWidth = 2.5;
      ctx.strokeRect(px, py, pw, ph);
      ctx.strokeStyle = 'rgba(223, 186, 90, 0.4)';
      ctx.lineWidth = 1;
      ctx.strokeRect(px + 6, py + 6, pw - 12, ph - 12);
      ctx.restore();

      // Lower Monograph Block: Typography
      const textCenterY = py + ph + 130;
      ctx.fillStyle = '#DFBA5A';
      ctx.font = '400 80px "Bodoni Moda", "Didot", serif';
      ctx.textAlign = 'center';
      ctx.fillText('BOTANICA MINERALIS', w / 2, textCenterY);

      ctx.fillStyle = '#EAE0CE';
      ctx.font = 'italic 300 28px "Cormorant Garamond", serif';
      ctx.fillText('Alpine Stone, Lichen Stratigraphy & Wild Herbarium', w / 2, textCenterY + 54);

      // Botanical Fern Frond Ornament
      ctx.fillStyle = 'rgba(223, 186, 90, 0.7)';
      ctx.font = '18px serif';
      ctx.fillText('❧   ✦   🍃   ✦   ❧', w / 2, textCenterY + 104);

      // Author & Imprint
      ctx.fillStyle = '#FAF7F0';
      ctx.font = '500 26px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('ADITYA RATHORE', w / 2, h - 165);

      ctx.fillStyle = 'rgba(223, 186, 90, 0.8)';
      ctx.font = '300 20px "Cinzel", serif';
      ctx.fillText('FONDAZIONE ARTE CONTEMPORANEA · ROMA', w / 2, h - 120);
    },
    spine: (ctx, w, h) => {
      ctx.fillStyle = '#111A14';
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 1200);

      ctx.fillStyle = '#DFBA5A';
      ctx.fillRect(w / 2 - 25, 80, 50, 2);
      ctx.fillRect(w / 2 - 25, h - 90, 50, 2);

      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(Math.PI / 2);
      ctx.fillStyle = '#DFBA5A';
      ctx.textAlign = 'center';
      ctx.font = '700 36px "Bodoni Moda", serif';
      ctx.fillText('BOTANICA MINERALIS  —  ADITYA RATHORE', 0, 12);
      ctx.restore();
    },
    back: (ctx, w, h) => {
      ctx.fillStyle = '#111A14';
      ctx.fillRect(0, 0, w, h);
      applyParchmentGrain(ctx, w, h, 2800);
      drawGoldBorder(ctx, w, h, 55, 1.5);

      ctx.fillStyle = '#DFBA5A';
      ctx.textAlign = 'center';
      ctx.font = 'italic 300 32px "Cormorant Garamond", serif';
      ctx.fillText('“A leaf pressed against alpine stone', w / 2, 400);
      ctx.fillText('outlasts centuries of weather.”', w / 2, 445);

      ctx.fillStyle = 'rgba(240, 235, 225, 0.7)';
      ctx.font = '300 22px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Printed on 300gsm Somerset Velvet cotton rag.', w / 2, 560);
      ctx.fillText('Gold-foil embossed cover with botanical deckled edges.', w / 2, 605);

      ctx.fillStyle = '#FAF7F0';
      ctx.fillRect(w / 2 - 110, h - 250, 220, 100);
      ctx.fillStyle = '#11100F';
      let bx = w / 2 - 90;
      while (bx < w / 2 + 90) {
        const bw = 2 + Math.random() * 4;
        ctx.fillRect(bx, h - 235, bw, 60);
        bx += bw + 2 + Math.random() * 3;
      }
      ctx.font = '500 15px "Plus Jakarta Sans", monospace';
      ctx.fillText('ISBN 978-88-06-24810-7', w / 2, h - 165);
    },
  },
];
