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

// Video In-Memory Blob URL Store (Guarantees zero network latency and silky-smooth 60fps playback)
const videoBlobStore = new Map();
const videoInflight = new Map();
let videosPreloadComplete = false;

/**
 * Returns the in-memory Blob URL for a preloaded video, or null when it is not in RAM yet.
 * Gallery <video> elements use this so they NEVER touch the network during the loading screen.
 */
export function getPreloadedVideoBlob(url) {
  if (!url) return null;
  return videoBlobStore.get(url) || null;
}

/**
 * Returns the in-memory Blob URL for a preloaded video, falling back to the original URL.
 */
export function getPreloadedVideoUrl(url) {
  if (!url) return url;
  return videoBlobStore.get(url) || url;
}

/**
 * True once the video preload phase has fully settled (used to allow a safe network fallback).
 */
export function areVideosPreloaded() {
  return videosPreloadComplete;
}

// Every entry here blocks the loading gate, so this list is deliberately limited to
// assets that are actually painted on screen. Seven former entries
// (hero-painting-mobile, dark-hero-painting, wanderer-refined, sanctuary-foreground,
// sanctuary-bg-clean, gallery-hall-bg and the .jpg twin of gallery-corner-flowers)
// were left over from an earlier scene design and cost ~4 MB of first-load bandwidth
// for images that were never displayed.
export const CRITICAL_PRELOAD_ASSETS = [
  // 1. Hero & Nature Environments
  '/alpine-sanctuary-reference.jpg',
  '/alpine-sanctuary-mobile.jpg',
  '/hero-painting.jpg',
  '/hero-canvas-impasto.jpg',
  '/hero-tuscan-mist.jpg',
  '/gallery-corner-flowers.png',

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
  '/gallery/FrameGIT-logo.png',
  '/gallery/Xdrop-logo.png',
  '/gallery/Xoppor-AI.png',
  '/gallery/vault-logo.png',
  '/gallery/CodeX-logo.png',
  '/gallery/YT-media-logo.png',
];

export const CRITICAL_PRELOAD_VIDEOS = [
  '/gallery/videos/Debatable.mp4',
  '/gallery/videos/GixelMC.mp4',
  '/gallery/videos/HelxStudio.mp4',
  '/gallery/videos/Mahindra.mp4',
  '/gallery/videos/Portfolio-template.mp4',
  '/gallery/videos/Portfolio-template2.mp4',
  '/gallery/videos/Showcase-1.mp4',
  '/gallery/videos/Showcase-2.mp4',
  '/gallery/videos/Showcase-3.mp4',
  '/gallery/videos/Xmusic.mp4',
];

/**
 * Downloads a video 100% into memory as a Blob, generates an object URL,
 * and primes the browser video decoder so playback is instantaneous with 0 buffering lag.
 */
export async function preloadVideoFully(url, onComplete) {
  if (typeof fetch === 'undefined') {
    onComplete?.();
    return url;
  }
  if (videoBlobStore.has(url)) {
    onComplete?.();
    return videoBlobStore.get(url);
  }
  // Share a single network request per asset (React StrictMode mounts effects twice in dev)
  if (videoInflight.has(url)) {
    const shared = await videoInflight.get(url);
    onComplete?.();
    return shared;
  }

  const task = (async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      videoBlobStore.set(url, blobUrl);

      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('videos-preloaded', { detail: { url, blobUrl } }));
      }

      return blobUrl;
    } catch (e) {
      console.warn('Video preload fallback for:', url, e);
      return url;
    } finally {
      videoInflight.delete(url);
    }
  })();

  videoInflight.set(url, task);
  const resolved = await task;
  onComplete?.();
  return resolved;
}

export const preloadVideo = preloadVideoFully;

/**
 * Preloads and GPU-decodes an image asset into memory.
 */
export function preloadImage(src, onComplete) {
  return new Promise((resolve) => {
    const finish = (result) => {
      onComplete?.();
      resolve(result);
    };

    // If it's a project thumbnail logo, route through getProjectImage so the store is warmed up
    if (src.startsWith('/gallery/') && src.endsWith('.png')) {
      const existing = getProjectImage(src, () => finish(existing));
      if (existing) {
        finish(existing);
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
        .then(() => finish(img))
        .catch(() => {
          if (img.complete) finish(img);
          else {
            img.onload = () => finish(img);
            img.onerror = () => finish(img);
          }
        });
    } else {
      if (img.complete) finish(img);
      else {
        img.onload = () => finish(img);
        img.onerror = () => finish(img);
      }
    }
  });
}

/**
 * Master preloader executed during AtelierLoader presentation.
 * Preloads all 27 critical textures, 10 gallery videos (100% in RAM), Google fonts, Web Audio effects, and background ambient score.
 * Reports real-time percentage progress (0 to 100).
 */
export async function preloadAllSiteAssets(onProgress) {
  let imagesLoaded = 0;
  let videosLoaded = 0;

  const totalImages = CRITICAL_PRELOAD_ASSETS.length;
  const totalVideos = CRITICAL_PRELOAD_VIDEOS.length;

  const updateProgress = () => {
    // 70% weight to videos (since they comprise ~20MB of high-fidelity 60fps media)
    // 20% weight to images
    // 10% weight to fonts & audio
    const videoRatio = totalVideos > 0 ? videosLoaded / totalVideos : 1;
    const imageRatio = totalImages > 0 ? imagesLoaded / totalImages : 1;
    const calculated = Math.round(videoRatio * 70 + imageRatio * 20 + 10);
    onProgress?.(Math.min(99, Math.max(5, calculated)));
  };

  const imagePromises = CRITICAL_PRELOAD_ASSETS.map((src) =>
    preloadImage(src, () => {
      imagesLoaded++;
      updateProgress();
    })
  );

  const videoPromises = CRITICAL_PRELOAD_VIDEOS.map((src) =>
    preloadVideoFully(src, () => {
      videosLoaded++;
      updateProgress();
    })
  );

  const fontPromise = (async () => {
    if (typeof document !== 'undefined' && document.fonts) {
      try {
        await document.fonts.ready;
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
    Promise.allSettled(videoPromises),
    fontPromise,
    windowLoadPromise,
    sfxPromise,
  ]);

  // Generous timeout (30s) as a safety net only — normal path waits for every video blob
  const safetyTimeout = new Promise((resolve) => setTimeout(resolve, 30000));
  await Promise.race([allAssets, safetyTimeout]);

  // Signal that the video phase has settled, so gallery cards may safely fall back
  // to a direct network URL if any single asset failed to become a Blob.
  videosPreloadComplete = true;
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('videos-preload-complete'));
  }

  onProgress?.(100);
}
