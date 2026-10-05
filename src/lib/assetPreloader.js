// Centralized High-Performance Asset Preloader & Image Store
import soundManager from './soundManager';

const projectImageStore = new Map();

/**
 * Retrieves or registers a project thumbnail image.
 * Guarantees zero CORS failures on local paths and dispatches to all registered listeners upon decode.
 */
export function getProjectImage(url, onLoaded) {
  if (!url) return null;

  let entry = projectImageStore.get(url);
  if (!entry) {
    const img = new Image();
    if (/^https?:\/\//i.test(url)) {
      img.crossOrigin = 'anonymous';
    }
    entry = {
      img,
      loaded: false,
      listeners: new Set(),
    };
    projectImageStore.set(url, entry);

    const handleSuccess = () => {
      if (img.naturalWidth > 0) {
        entry.loaded = true;
        entry.listeners.forEach((cb) => {
          try {
            cb(img);
          } catch (e) {
            console.error(e);
          }
        });
        entry.listeners.clear();
      }
    };

    img.onload = handleSuccess;
    img.onerror = (err) => {
      console.warn('Failed to load project image:', url, err);
      if (img.crossOrigin) {
        img.crossOrigin = null;
        img.src = url;
      }
    };

    img.src = url;
    if (img.complete && img.naturalWidth > 0) {
      entry.loaded = true;
    }
  }

  if (entry.loaded && entry.img.naturalWidth > 0) {
    return entry.img;
  }

  if (onLoaded) {
    entry.listeners.add(onLoaded);
  }

  return null;
}

export const CRITICAL_PRELOAD_ASSETS = [
  // 1. Hero & Nature Environments
  '/alpine-sanctuary-reference.jpg',
  '/alpine-sanctuary-mobile.jpg',
  '/hero-painting.jpg',
  '/hero-painting-mobile.jpg',
  '/hero-canvas-impasto.jpg',
  '/hero-tuscan-mist.jpg',
  '/dark-hero-painting.jpg',
  '/sanctuary-foreground.png',
  '/sanctuary-bg-clean.jpg',
  '/wanderer-refined.png',
  '/gallery-hall-bg.jpg',
  '/gallery-corner-flowers.jpg',

  // 2. Artisanal Crumpled Paper Cursors
  '/Crumpled Paper Animated Cursor--cursor--SweezyCursors.png',
  '/Crumpled Paper Animated Cursor--pointer--SweezyCursors.png',

  // 3. Classical Curatorial Gallery Plates
  '/gallery/rembrandt_peale_washington.jpg',
  '/gallery/hubert_robert_ponte_salario.jpg',
  '/gallery/louis_francois_rome.jpg',
  '/gallery/henry_singleton_landscape.jpg',
  '/gallery/thomas_doughty_landscape.jpg',
  '/gallery/roman_arch_ruins.jpg',

  // 4. 3D Monograph Publication Logos (All 7 Authentic Logos)
  '/gallery/Xmusic-Logo.png',
  '/gallery/FreameGIT-logo.png',
  '/gallery/Xdrop-logo.png',
  '/gallery/Xoppor-AI.png',
  '/gallery/vault-logo.png',
  '/gallery/CodeX-logo.png',
  '/gallery/YT-media-logo.png',
];

/**
 * Preloads and GPU-decodes an image asset into memory.
 */
export function preloadImage(src) {
  return new Promise((resolve) => {
    // If it's a project thumbnail logo, route through getProjectImage so the store is warmed up
    if (src.startsWith('/gallery/') && src.endsWith('.png')) {
      const existing = getProjectImage(src, () => resolve());
      if (existing) {
        resolve();
        return;
      }
    }

    const img = new Image();
    if (/^https?:\/\//i.test(src)) {
      img.crossOrigin = 'anonymous';
    }
    img.src = src;

    if (typeof img.decode === 'function') {
      img
        .decode()
        .then(() => resolve(img))
        .catch(() => {
          if (img.complete) resolve(img);
          else {
            img.onload = () => resolve(img);
            img.onerror = () => resolve(img);
          }
        });
    } else {
      if (img.complete) resolve(img);
      else {
        img.onload = () => resolve(img);
        img.onerror = () => resolve(img);
      }
    }
  });
}

/**
 * Master preloader executed during AtelierLoader presentation.
 * Preloads all 27 critical textures, Google fonts, Web Audio effects, and background ambient score.
 */
export async function preloadAllSiteAssets() {
  const imagePromises = CRITICAL_PRELOAD_ASSETS.map(preloadImage);

  const fontPromise = (async () => {
    if (typeof document !== 'undefined' && document.fonts) {
      try {
        await document.fonts.ready;
        // Explicitly load key typefaces used on canvas
        const fontFaces = [
          '400 24px "Bodoni Moda"',
          '600 24px "Bodoni Moda"',
          '300 24px "Cinzel"',
          '600 24px "Cinzel"',
          'italic 300 24px "Cormorant Garamond"',
          '500 20px "Plus Jakarta Sans"',
        ];
        await Promise.allSettled(fontFaces.map((f) => document.fonts.load(f)));
      } catch (e) {
        // Non-blocking fallback
      }
    }
  })();

  const windowLoadPromise = new Promise((resolve) => {
    if (typeof document !== 'undefined' && document.readyState === 'complete') {
      resolve();
    } else if (typeof window !== 'undefined') {
      window.addEventListener('load', resolve, { once: true });
    } else {
      resolve();
    }
  });

  const sfxPromise = soundManager.preloadAll();

  const allAssets = Promise.all([
    Promise.allSettled(imagePromises),
    fontPromise,
    windowLoadPromise,
    sfxPromise,
  ]);

  const safetyTimeout = new Promise((resolve) => setTimeout(resolve, 5500));
  await Promise.race([allAssets, safetyTimeout]);
}
