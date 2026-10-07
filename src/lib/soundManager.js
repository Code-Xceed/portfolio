// Centralized Atelier Audio Experience Manager
// UNIFIED MASTER AUDIO ENGINE:
// 1. One Master Audio Toggle controls ALL sound on the website (both interaction SFX & ambient background loop).
// 2. Strict Single-Instance Looping: Absolutely impossible for background music to double-play or desync.
// 3. High-Performance Web Audio API: Sample-accurate infinite loop with 2.2s atmospheric bloom.
// 4. Artisanal SFX with 22ms smooth crossfades and non-overlapping protection.

const SFX_MAP = {
  click: '/click.ogg',
  hover: '/chime2.ogg',
  drag: '/drag.ogg',
  hold: '/hold.ogg',
  pageTurn: '/Page_Turn_mp3_1710941761.mp3',
};

const BG_MUSIC_URL = '/bgaudio.ogg';

// Curated volume balances for an elegant, non-fatiguing atelier soundscape
const DEFAULT_VOLUMES = {
  click: 0.62,
  hover: 0.36,
  drag: 0.70,
  hold: 0.70,
  pageTurn: 0.85,
  bg: 0.72, // Ambient background music volume (rich, clear, and prominent)
};

class SoundManager {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.buffers = {};
    this.audioFallbacks = {};

    // SFX State
    this.currentSource = null;
    this.currentGain = null;
    this.currentAudioFallback = null;
    this.currentKey = null;
    this.isPlaying = false;
    this.safetyTimer = null;

    // Background Audio State (Strict Single-Instance)
    this.bgBuffer = null;
    this.bgSourceNode = null;
    this.bgGainNode = null;
    this.bgAudioElement = null;
    this.bgVolume = DEFAULT_VOLUMES.bg;
    this.isBgPlaying = false;
    this.bgMusicWanted = false;

    // Autoplay-policy bridge (see _armBgMusicAutostart)
    this.bgAutostartArmed = false;
    this.bgAutostartDetach = null;

    // Master Mute State (Controls ALL audio: SFX + Background Music)
    this.isMuted = false;
    try {
      if (typeof window !== 'undefined') {
        this.isMuted = localStorage.getItem('atelier_master_muted') === 'true';
      }
    } catch {}

    this.listeners = new Set();
    this.isPreloaded = false;
    this.isUnlocked = false;
    this.lastHoverTarget = null;
    this.lastHoverTime = 0;
    this.globalListenersAttached = false;
  }

  // Subscribe UI components (e.g. SfxToggle) to master audio state updates
  subscribe(listener) {
    this.listeners.add(listener);
    listener({ isMuted: this.isMuted, isBgPlaying: this.isBgPlaying });
    return () => this.listeners.delete(listener);
  }

  // Backward compatibility alias for any existing subscribers
  subscribeSfx(listener) {
    return this.subscribe((state) => listener({ isMuted: state.isMuted }));
  }

  subscribeBg(listener) {
    return this.subscribe((state) => listener({ isPlaying: state.isBgPlaying, isMuted: state.isMuted }));
  }

  notifyListeners() {
    this.listeners.forEach((fn) => {
      try {
        fn({ isMuted: this.isMuted, isBgPlaying: this.isBgPlaying });
      } catch {}
    });
  }

  // Initialize Web Audio Context lazily and safely
  initContext() {
    if (this.ctx) return this.ctx;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(1.0, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);

        // The definitive "audio is now permitted" signal. resume()'s promise cannot be
        // relied on for this: when a browser blocks autoplay it usually leaves that
        // promise pending forever rather than rejecting, so the context flipping to
        // "running" is the only trustworthy cue that the loop may actually be heard.
        this.ctx.onstatechange = () => {
          if (this.ctx && this.ctx.state === 'running') {
            this.isUnlocked = true;
            if (this.bgMusicWanted && !this.isMuted && !this.isBgPlaying) {
              this._startBgMusicNow();
            }
          }
        };
      }
    } catch (e) {
      console.warn('SoundManager: Web Audio API initialization failed', e);
    }
    return this.ctx;
  }

  // Unlock AudioContext on user gesture to satisfy browser autoplay restrictions
  unlock() {
    this.initContext();

    // No Web Audio support at all: the HTML5 element is the only route, and only a real
    // gesture can make it audible, so leave the autoplay bridge armed.
    if (!this.ctx) {
      if (this.bgMusicWanted && !this.isMuted && !this.isBgPlaying) {
        this._startBgMusicNow();
      }
      return;
    }

    this.isUnlocked = true;

    if (this.ctx.state === 'suspended') {
      // Fire-and-forget. Whether this resolves now or much later, the statechange hook
      // registered in initContext() starts the loop the instant audio becomes allowed.
      this.ctx.resume().catch(() => {});
      return;
    }

    if (this.bgMusicWanted && !this.isMuted && !this.isBgPlaying) {
      this._startBgMusicNow();
    }
  }

  // Preload and decode all sound assets AND background audio into memory during loading screen
  async preloadAll() {
    if (typeof window === 'undefined') return;
    this.initContext();

    // 1. Preload SFX assets
    const sfxPromises = Object.entries(SFX_MAP).map(async ([key, url]) => {
      try {
        const audio = new Audio();
        audio.preload = 'auto';
        audio.src = url;
        this.audioFallbacks[key] = audio;
      } catch {}

      if (this.ctx) {
        try {
          const res = await fetch(url);
          if (!res.ok) throw new Error(`HTTP error ${res.status} fetching ${url}`);
          const arrayBuf = await res.arrayBuffer();
          const decoded = await new Promise((resolve, reject) => {
            const result = this.ctx.decodeAudioData(
              arrayBuf.slice(0),
              (buf) => resolve(buf),
              (err) => reject(err)
            );
            if (result && typeof result.then === 'function') {
              result.then(resolve).catch(reject);
            }
          });
          this.buffers[key] = decoded;
        } catch (err) {
          console.warn(`SoundManager: Failed to Web Audio decode ${key} (${url}), will use HTML5 fallback`, err);
        }
      }
    });

    // 2. Preload Main Background Audio (/bgaudio.ogg)
    const bgPromise = (async () => {
      try {
        const bgAudio = new Audio();
        bgAudio.src = BG_MUSIC_URL;
        bgAudio.loop = true;
        bgAudio.preload = 'auto';
        this.bgAudioElement = bgAudio;
      } catch {}

      if (this.ctx) {
        try {
          const res = await fetch(BG_MUSIC_URL);
          if (!res.ok) throw new Error(`HTTP error ${res.status} fetching ${BG_MUSIC_URL}`);
          const arrayBuf = await res.arrayBuffer();
          const decoded = await new Promise((resolve, reject) => {
            const result = this.ctx.decodeAudioData(
              arrayBuf.slice(0),
              (buf) => resolve(buf),
              (err) => reject(err)
            );
            if (result && typeof result.then === 'function') {
              result.then(resolve).catch(reject);
            }
          });
          this.bgBuffer = decoded;
        } catch (err) {
          console.warn(`SoundManager: Failed to Web Audio decode background music (${BG_MUSIC_URL})`, err);
        }
      }
    })();

    try {
      await Promise.allSettled([...sfxPromises, bgPromise]);
    } catch {}

    this.isPreloaded = true;
    return true;
  }

  // =========================================================================
  // MASTER AUDIO CONTROL (Single Toggle for All Sounds: SFX + Background Music)
  // =========================================================================

  toggleMaster() {
    this.isMuted = !this.isMuted;
    try {
      localStorage.setItem('atelier_master_muted', this.isMuted ? 'true' : 'false');
    } catch {}

    if (this.isMuted) {
      // Mute everything: halt active SFX and pause background music immediately
      this.stopActiveSound();
      this.pauseBgMusic();
    } else {
      // Unmute everything: resume background music and play confirmation click
      this.startBgMusic();
      this.play('click');
    }

    this.notifyListeners();
    return this.isMuted;
  }

  // Backward compatibility aliases
  toggleSfx() {
    return this.toggleMaster();
  }

  toggleBgMusic() {
    return this.toggleMaster();
  }

  // =========================================================================
  // BACKGROUND MUSIC ENGINE (Strictly Single-Instance, Gapless Looping)
  // =========================================================================

  // Internal helper to stop any existing bg source or audio element unconditionally
  stopBgMusicInternal() {
    if (this.bgSourceNode) {
      try {
        this.bgSourceNode.stop();
        this.bgSourceNode.disconnect();
      } catch {}
      this.bgSourceNode = null;
    }
    if (this.bgGainNode) {
      try {
        this.bgGainNode.disconnect();
      } catch {}
      this.bgGainNode = null;
    }
    if (this.bgAudioElement) {
      try {
        this.bgAudioElement.pause();
        this.bgAudioElement.currentTime = 0;
      } catch {}
    }
    this.isBgPlaying = false;
  }

  // Internal Web Audio playback helper with instant musical attack
  _startWebAudioLoop() {
    if (!this.ctx || !this.bgBuffer || this.isMuted) return;

    try {
      this.stopBgMusicInternal();

      const source = this.ctx.createBufferSource();
      source.buffer = this.bgBuffer;
      source.loop = true; // Infinite gapless loop

      const gainNode = this.ctx.createGain();
      const now = this.ctx.currentTime;
      const targetVol = this.bgVolume;

      // INSTANT AUDIBLE SWELL: Starts smoothly at 0.10 and rises to full target volume in 280ms
      gainNode.gain.setValueAtTime(0.10, now);
      gainNode.gain.linearRampToValueAtTime(targetVol, now + 0.28);

      source.connect(gainNode);
      gainNode.connect(this.masterGain);

      source.start(0);

      this.bgSourceNode = source;
      this.bgGainNode = gainNode;
      this._markBgPlaying();
    } catch (e) {
      console.warn('SoundManager: Web Audio background music failed, trying HTML5 Audio', e);
      this._startHtml5Loop();
    }
  }

  // Internal HTML5 Audio fallback helper
  _startHtml5Loop() {
    if (this.isMuted || this.isBgPlaying) return;
    try {
      if (!this.bgAudioElement) {
        this.bgAudioElement = new Audio(BG_MUSIC_URL);
        this.bgAudioElement.loop = true;
        this.bgAudioElement.preload = 'auto';
      }
      this.bgAudioElement.volume = this.bgVolume;
      const playPromise = this.bgAudioElement.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise
          .then(() => {
            // Confirm it is genuinely rolling before claiming playback — a stale promise
            // from an element that has since been paused must not resurrect the state.
            if (this.bgAudioElement && !this.bgAudioElement.paused) {
              this._markBgPlaying();
            }
          })
          .catch(() => {
            // Autoplay refused. The bridge armed by startBgMusic() re-attempts the moment
            // the browser permits it, so there is nothing to schedule here.
          });
      } else {
        this._markBgPlaying();
      }
    } catch (e) {
      console.warn('SoundManager: HTML5 Audio background music play failed', e);
    }
  }

  // Records a genuinely audible loop and retires the autoplay bridge.
  _markBgPlaying() {
    if (this.isBgPlaying) return;
    this.isBgPlaying = true;
    this._disarmBgMusicAutostart();
    this.notifyListeners();
  }

  // One synchronous best-effort start. Returns true only when a source actually began.
  _startBgMusicNow() {
    if (this.isMuted || !this.bgMusicWanted || this.isBgPlaying) return this.isBgPlaying;

    this.initContext();

    // Prefer the sample-accurate Web Audio loop, which may only be scheduled once the
    // context is actually running. Until then the HTML5 element is the only chance — and
    // it too is refused without a gesture, hence the armed retry in startBgMusic().
    if (this.ctx && this.ctx.state === 'running' && this.bgBuffer) {
      this._startWebAudioLoop();
      return this.isBgPlaying;
    }

    this._startHtml5Loop();
    return this.isBgPlaying;
  }

  // =========================================================================
  // AUTOPLAY BRIDGE
  // Every mainstream browser refuses audible playback until the visitor interacts, and
  // a blocked AudioContext.resume() typically stays *pending* rather than rejecting — so
  // any promise-based fallback silently never fires. These listeners are therefore armed
  // unconditionally once the atelier finishes loading, and stay armed across as many
  // interactions as it takes until the loop is genuinely playing, then remove themselves.
  // =========================================================================
  _armBgMusicAutostart() {
    if (typeof window === 'undefined' || this.bgAutostartArmed) return;

    const GESTURES = ['pointerdown', 'pointerup', 'click', 'mousedown', 'keydown', 'touchstart', 'touchend', 'wheel', 'scroll'];

    const detach = () => {
      if (!this.bgAutostartArmed) return;
      GESTURES.forEach((evt) => window.removeEventListener(evt, onGesture, true));
      document.removeEventListener('visibilitychange', onVisibility);
      this.bgAutostartArmed = false;
      this.bgAutostartDetach = null;
    };

    const attempt = () => {
      // Muted by choice: restarting on a stray interaction would be wrong, and the master
      // toggle owns playback from here.
      if (this.isMuted) {
        detach();
        return;
      }
      if (!this.bgMusicWanted) return;
      if (this.isBgPlaying) {
        detach();
        return;
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
      if (this._startBgMusicNow()) detach();
    };

    const onGesture = () => attempt();
    const onVisibility = () => {
      if (!document.hidden) attempt();
    };

    GESTURES.forEach((evt) => window.addEventListener(evt, onGesture, { capture: true, passive: true }));
    document.addEventListener('visibilitychange', onVisibility);

    this.bgAutostartArmed = true;
    this.bgAutostartDetach = detach;
  }

  _disarmBgMusicAutostart() {
    if (this.bgAutostartDetach) this.bgAutostartDetach();
  }

  // Start the ambient loop immediately after loading.
  // STRICTLY SINGLE-INSTANCE: will NEVER spawn a second playing instance, and is safe to
  // call repeatedly (each section nav, every re-render). If the browser is still waiting
  // for a gesture the autoplay bridge finishes the job on the visitor's first interaction.
  startBgMusic() {
    if (typeof window === 'undefined') return;
    this.bgMusicWanted = true;

    if (this.isMuted) return;

    // Already audible — never restart it, or the loop would audibly jump back to bar one.
    if (this.isBgPlaying) return;

    this._armBgMusicAutostart();

    this.initContext();
    if (this.ctx && this.ctx.state === 'suspended') {
      // Nudges the context awake. Inside a handled gesture this resolves at once; on a
      // cold load it may stay pending until the visitor interacts, which is precisely the
      // case the bridge covers.
      this.ctx.resume().catch(() => {});
    }

    this._startBgMusicNow();
  }

  // Pause background music with gentle fade-out
  pauseBgMusic() {
    if (!this.isBgPlaying) return;

    if (this.bgGainNode && this.ctx) {
      try {
        const now = this.ctx.currentTime;
        const currentGain = this.bgGainNode;
        const currentSource = this.bgSourceNode;

        currentGain.gain.cancelScheduledValues(now);
        currentGain.gain.setValueAtTime(Math.max(currentGain.gain.value, 0.0001), now);
        currentGain.gain.linearRampToValueAtTime(0.0001, now + 0.6);

        setTimeout(() => {
          try {
            currentSource.stop();
            currentSource.disconnect();
            currentGain.disconnect();
          } catch {}
        }, 650);
      } catch {}
      this.bgSourceNode = null;
      this.bgGainNode = null;
    }

    if (this.bgAudioElement) {
      try {
        this.bgAudioElement.pause();
      } catch {}
    }

    this.isBgPlaying = false;
    this.notifyListeners();
  }

  // Adjust background volume smoothly
  setBgVolume(vol) {
    this.bgVolume = Math.max(0, Math.min(1, vol));
    if (this.bgGainNode && this.ctx && this.isBgPlaying) {
      const now = this.ctx.currentTime;
      this.bgGainNode.gain.cancelScheduledValues(now);
      this.bgGainNode.gain.linearRampToValueAtTime(this.bgVolume, now + 0.2);
    }
    if (this.bgAudioElement) {
      this.bgAudioElement.volume = this.bgVolume;
    }
  }

  // =========================================================================
  // SFX ENGINE (Similar sounds cut each other, different sounds protected)
  // =========================================================================

  // Determines if an incoming sound is permitted to play or cut the current sound:
  // - Similar sounds (same key) can cut each other.
  // - User actions (click, drag, pageTurn, hold) can cut ambient hover.
  // - Different action sounds CANNOT cut each other (e.g. hover cannot cut pageTurn or hold).
  canPlaySound(key) {
    if (!this.isPlaying || !this.currentKey) {
      return true;
    }

    // Rule 1: Similar sounds can cut each other
    if (this.currentKey === key) {
      return true;
    }

    // Rule 2: Explicit user actions can cut ambient hover
    if (this.currentKey === 'hover' && key !== 'hover') {
      return true;
    }

    // Rule 3: Different action sounds CANNOT cut each other
    return false;
  }

  // Smoothly cuts the currently playing SFX using a 22ms linear gain ramp
  cutActiveSoundSmoothly() {
    clearTimeout(this.safetyTimer);

    if (this.currentSource && this.currentGain && this.ctx) {
      const now = this.ctx.currentTime;
      const gain = this.currentGain;
      const source = this.currentSource;

      try {
        gain.gain.cancelScheduledValues(now);
        gain.gain.setValueAtTime(Math.max(gain.gain.value, 0.0001), now);
        gain.gain.linearRampToValueAtTime(0.0001, now + 0.022);
        setTimeout(() => {
          try {
            source.stop();
            source.disconnect();
            gain.disconnect();
          } catch {}
        }, 26);
      } catch {
        try { source.stop(); } catch {}
      }
    } else if (this.currentSource) {
      try { this.currentSource.stop(); } catch {}
    }

    if (this.currentAudioFallback) {
      try {
        this.currentAudioFallback.pause();
        this.currentAudioFallback.currentTime = 0;
      } catch {}
      this.currentAudioFallback = null;
    }

    this.currentSource = null;
    this.currentGain = null;
    this.isPlaying = false;
    this.currentKey = null;
  }

  // Hard stop active SFX
  stopActiveSound() {
    this.cutActiveSoundSmoothly();
  }

  // Play an SFX effect with smart relationship checks & smooth micro-attack
  play(key, options = {}) {
    if (typeof window === 'undefined') return false;

    // Master Mute Check: If master is muted, no sound plays
    if (this.isMuted) return false;

    // Check relationship rule: similar sounds can cut, different action sounds cannot
    if (!this.canPlaySound(key)) {
      return false;
    }

    // If another sound was playing and allowed to be cut, crossfade it out smoothly
    if (this.isPlaying) {
      this.cutActiveSoundSmoothly();
    }

    this.unlock();
    const targetVolume = options.volume ?? (DEFAULT_VOLUMES[key] || 0.7);

    // 1. Prefer high-performance Web Audio API
    if (this.ctx && this.buffers[key]) {
      try {
        if (this.ctx.state === 'suspended') {
          this.ctx.resume().catch(() => {});
        }

        const source = this.ctx.createBufferSource();
        source.buffer = this.buffers[key];

        const gainNode = this.ctx.createGain();
        const now = this.ctx.currentTime;

        // Micro-attack (5ms ramp from near-zero to targetVolume) to avoid transient speaker clicks
        gainNode.gain.setValueAtTime(0.0001, now);
        gainNode.gain.linearRampToValueAtTime(targetVolume, now + 0.005);

        source.connect(gainNode);
        gainNode.connect(this.masterGain);

        this.isPlaying = true;
        this.currentSource = source;
        this.currentGain = gainNode;
        this.currentKey = key;

        const onFinished = () => {
          if (this.currentSource === source) {
            clearTimeout(this.safetyTimer);
            this.isPlaying = false;
            this.currentSource = null;
            this.currentGain = null;
            this.currentKey = null;
          }
          try {
            source.disconnect();
            gainNode.disconnect();
          } catch {}
        };

        source.onended = onFinished;

        // Safety timeout in case onended is delayed or suppressed by browser sleep
        const durationSec = source.buffer.duration || 1.5;
        clearTimeout(this.safetyTimer);
        this.safetyTimer = setTimeout(onFinished, Math.ceil(durationSec * 1000) + 60);

        source.start(0);
        return true;
      } catch (e) {
        console.warn(`SoundManager: Web Audio playback failed for ${key}, falling back to HTML5 Audio`, e);
      }
    }

    // 2. Fallback to HTML5 Audio
    try {
      const fallbackUrl = SFX_MAP[key];
      if (!fallbackUrl) return false;
      const audio = new Audio(fallbackUrl);
      audio.volume = targetVolume;

      this.isPlaying = true;
      this.currentAudioFallback = audio;
      this.currentKey = key;

      const onFallbackFinished = () => {
        if (this.currentAudioFallback === audio) {
          clearTimeout(this.safetyTimer);
          this.isPlaying = false;
          this.currentAudioFallback = null;
          this.currentKey = null;
        }
      };

      audio.onended = onFallbackFinished;
      audio.onerror = onFallbackFinished;

      clearTimeout(this.safetyTimer);
      this.safetyTimer = setTimeout(onFallbackFinished, 3000);

      const playPromise = audio.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {
          onFallbackFinished();
        });
      }
      return true;
    } catch (e) {
      this.isPlaying = false;
      this.currentAudioFallback = null;
      this.currentKey = null;
      console.warn(`SoundManager: HTML5 Audio play failed for ${key}`, e);
      return false;
    }
  }

  // Setup global delegated listeners for clicks and hovers across the entire website
  initGlobalListeners() {
    if (typeof window === 'undefined' || this.globalListenersAttached) return;
    this.globalListenersAttached = true;

    // First user gesture unlock hook (capture-phase for instant response)
    const onFirstUserGesture = () => {
      this.unlock();
      window.removeEventListener('pointerdown', onFirstUserGesture, true);
      window.removeEventListener('click', onFirstUserGesture, true);
      window.removeEventListener('keydown', onFirstUserGesture, true);
      window.removeEventListener('touchstart', onFirstUserGesture, true);
      window.removeEventListener('wheel', onFirstUserGesture, true);
    };
    window.addEventListener('pointerdown', onFirstUserGesture, { capture: true, once: true, passive: true });
    window.addEventListener('click', onFirstUserGesture, { capture: true, once: true, passive: true });
    window.addEventListener('keydown', onFirstUserGesture, { capture: true, once: true, passive: true });
    window.addEventListener('touchstart', onFirstUserGesture, { capture: true, once: true, passive: true });
    window.addEventListener('wheel', onFirstUserGesture, { capture: true, once: true, passive: true });

    // Interactive element selector for hover & click
    const INTERACTIVE_SELECTOR = 'button, a, [role="button"], [role="tab"], [role="link"], .cursor-pointer, input[type="button"], input[type="submit"]';

    // 1. GLOBAL HOVER LISTENER (chime2.ogg)
    const onPointerOver = (e) => {
      if (this.isMuted) return;
      // Don't trigger hover sound on mobile touch taps or while mouse button is pressed
      if (e.pointerType === 'touch' || e.buttons > 0) return;

      const interactive = e.target?.closest?.(INTERACTIVE_SELECTOR);
      if (!interactive) {
        this.lastHoverTarget = null;
        return;
      }

      // Check if this is the same element we already triggered for
      if (interactive === this.lastHoverTarget) return;

      // Check if disabled or hidden
      if (interactive.disabled || interactive.getAttribute('aria-hidden') === 'true') return;

      const now = performance.now();
      // Balanced throttle for smooth, organic hover cadence
      if (now - this.lastHoverTime < 70) return;

      this.lastHoverTarget = interactive;
      this.lastHoverTime = now;

      // Similar sounds (hover -> hover) can cut each other with smooth crossfade
      this.play('hover');
    };

    const onPointerOut = (e) => {
      if (this.lastHoverTarget && !e.relatedTarget?.closest?.(INTERACTIVE_SELECTOR)) {
        this.lastHoverTarget = null;
      }
    };

    window.addEventListener('pointerover', onPointerOver, { passive: true });
    window.addEventListener('pointerout', onPointerOut, { passive: true });

    // 2. GLOBAL CLICK LISTENER (click.ogg)
    const onGlobalClick = (e) => {
      if (this.isMuted) return;

      const interactive = e.target?.closest?.(INTERACTIVE_SELECTOR);
      if (!interactive) return;

      // Allow elements to opt-out or declare custom SFX via data-sfx
      const sfxType = interactive.getAttribute('data-sfx') || interactive.closest('[data-sfx]')?.getAttribute('data-sfx');

      // If an element handles its own custom SFX (e.g. 'drag', 'pageTurn', 'hold', or 'none'), skip generic click
      if (sfxType && sfxType !== 'click') {
        return;
      }

      // Play click sound
      this.play('click');
    };

    window.addEventListener('click', onGlobalClick, { capture: true });

    // 3. Tab Visibility change - duck or pause when switching away, restore when returning
    const onVisibilityChange = () => {
      if (document.hidden) {
        this.stopActiveSound();
        if (this.isBgPlaying) {
          if (this.bgGainNode && this.ctx) {
            const now = this.ctx.currentTime;
            this.bgGainNode.gain.setValueAtTime(this.bgGainNode.gain.value, now);
            this.bgGainNode.gain.linearRampToValueAtTime(0.0001, now + 0.3);
          }
        }
      } else {
        if (this.isBgPlaying && !this.isMuted && this.bgGainNode && this.ctx) {
          const now = this.ctx.currentTime;
          this.bgGainNode.gain.setValueAtTime(0.0001, now);
          this.bgGainNode.gain.linearRampToValueAtTime(this.bgVolume, now + 0.8);
        }
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      window.removeEventListener('pointerover', onPointerOver);
      window.removeEventListener('pointerout', onPointerOut);
      window.removeEventListener('click', onGlobalClick, { capture: true });
      document.removeEventListener('visibilitychange', onVisibilityChange);
      this.globalListenersAttached = false;
    };
  }
}

export const soundManager = new SoundManager();
export default soundManager;
