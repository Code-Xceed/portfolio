import React, { useState, useEffect, useRef, useCallback } from 'react';
import soundManager from '../lib/soundManager';

/**
 * CinematicFullpage Component
 * Delivers fullpage.js cinematic zoom transition natively without proprietary commercial scripts.
 * 
 * Features:
 * - 60fps GPU hardware-accelerated zoom-in / zoom-out transitions
 * - Seamless WebGL context preservation (Hero Fluid Shader + Three.js Books Showcase)
 * - Wheel, trackpad gesture thresholding with transition debounce lock
 * - Touch swipe support for mobile / tablets
 * - Arrow / Page keyboard navigation
 * - Safe-lock when inspecting 3D monographs (.bs-detail-open)
 */
export default function CinematicFullpage({
  sections = [],
  onSectionChange,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  // A ref, not state: nothing rendered depends on the lock, and `setActiveIndex` already
  // re-renders the section layers — so keeping the lock out of state removes a render
  // pass from the middle of every cinematic transition.
  const transitioningRef = useRef(false);

  const goToSection = useCallback(
    (index) => {
      if (index === activeIndex || transitioningRef.current) return;
      if (index < 0 || index >= sections.length) return;

      soundManager.play('hold');

      transitioningRef.current = true;
      setActiveIndex(index);
      onSectionChange?.(index);

      setTimeout(() => {
        transitioningRef.current = false;
      }, 1100);
    },
    [activeIndex, sections.length, onSectionChange]
  );

  const nextSection = useCallback(() => {
    goToSection(activeIndex + 1);
  }, [goToSection, activeIndex]);

  const prevSection = useCallback(() => {
    goToSection(activeIndex - 1);
  }, [goToSection, activeIndex]);

  // Wheel & Trackpad listener
  useEffect(() => {
    let wheelAccumulator = 0;
    let wheelTimer = null;

    const onWheel = (e) => {
      // If user is inside the 3D book inspection view, lock section scrolling
      if (document.querySelector('.bs-detail-open')) {
        return;
      }

      if (transitioningRef.current) {
        e.preventDefault();
        return;
      }

      wheelAccumulator += e.deltaY;
      clearTimeout(wheelTimer);
      wheelTimer = setTimeout(() => {
        wheelAccumulator = 0;
      }, 200);

      const THRESHOLD = 35;
      if (wheelAccumulator > THRESHOLD && activeIndex < sections.length - 1) {
        e.preventDefault();
        wheelAccumulator = 0;
        nextSection();
      } else if (wheelAccumulator < -THRESHOLD && activeIndex > 0) {
        e.preventDefault();
        wheelAccumulator = 0;
        prevSection();
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', onWheel);
      clearTimeout(wheelTimer);
    };
  }, [activeIndex, nextSection, prevSection, sections.length]);

  // Touch gesture listener.
  //
  // This deliberately works on `touchmove` (not `touchend`) for two reasons:
  //
  //  1. PULL-TO-REFRESH. A downward swipe used to be claimed by Chrome/Android, which
  //     fired `touchcancel` instead of `touchend` — so our handler never ran (backwards
  //     scrolling "did nothing") and the browser reloaded the page. We now wait until
  //     the gesture proves it is vertical, call `preventDefault()` on a non-passive
  //     `touchmove`, and the native overscroll gesture can no longer start.
  //  2. RESPONSIVENESS. Reacting to travel (instead of only to the release point)
  //     makes a swipe change section at the moment the finger crosses the threshold,
  //     which feels identical to the wheel/trackpad path on desktop.
  //
  // Genuinely scrollable regions inside a section (the mobile project dossier sheet)
  // keep their native momentum scrolling: when the touch starts inside one we stay out
  // of the way entirely.
  useEffect(() => {
    const SWIPE_THRESHOLD = 46;
    const AXIS_SLOP = 8;
    let tracking = false;
    let axis = null;
    let fired = false;
    let startY = 0;
    let startX = 0;
    let nativeScroller = null;

    // Walk up from the touch target to the nearest element that actually scrolls
    // vertically and has somewhere to go.
    const findVerticalScroller = (node) => {
      let el = node instanceof Element ? node : null;
      while (el && el !== document.body && el !== document.documentElement) {
        const style = window.getComputedStyle(el);
        if (
          /(auto|scroll)/.test(style.overflowY) &&
          el.scrollHeight > el.clientHeight + 1 &&
          el.clientHeight > 0
        ) {
          return el;
        }
        el = el.parentElement;
      }
      return null;
    };

    const onTouchStart = (e) => {
      tracking = e.touches.length === 1;
      axis = null;
      fired = false;
      nativeScroller = null;
      if (!tracking) return;
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
      nativeScroller = findVerticalScroller(e.target);
    };

    const onTouchMove = (e) => {
      if (!tracking || e.touches.length !== 1) return;

      const dy = startY - e.touches[0].clientY;
      const dx = startX - e.touches[0].clientX;

      if (axis === null) {
        if (Math.abs(dy) < AXIS_SLOP && Math.abs(dx) < AXIS_SLOP) return;
        // Vertical intent wins over a horizontal carousel / monograph drag.
        axis = Math.abs(dy) > Math.abs(dx) * 1.15 ? 'y' : 'x';
      }
      if (axis !== 'y') return;

      // Own the gesture from here: no native overscroll, no pull-to-refresh, no
      // rubber-band — on any device, in both directions.
      if (e.cancelable && !nativeScroller) e.preventDefault();

      if (nativeScroller || fired || transitioningRef.current) return;
      if (document.querySelector('.bs-detail-open')) return;

      if (Math.abs(dy) < SWIPE_THRESHOLD) return;

      if (dy > 0 && activeIndex < sections.length - 1) {
        fired = true;
        nextSection();
      } else if (dy < 0 && activeIndex > 0) {
        fired = true;
        prevSection();
      }
    };

    // A gesture the browser still manages to cancel should never leave stale state.
    const onTouchEnd = () => {
      tracking = false;
      axis = null;
      nativeScroller = null;
    };

    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('touchcancel', onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchcancel', onTouchEnd);
    };
  }, [activeIndex, nextSection, prevSection, sections.length]);

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e) => {
      // Ignore if user is inside an input, textarea, or contentEditable
      if (['INPUT', 'TEXTAREA'].includes(e.target?.tagName) || e.target?.isContentEditable) return;

      // Toggle audio with 'M' key
      if (e.key === 'm' || e.key === 'M') {
        soundManager.toggleMaster();
        return;
      }

      // If user is inside the 3D book inspection view, lock section scrolling
      if (document.querySelector('.bs-detail-open')) return;
      if (transitioningRef.current) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (activeIndex < sections.length - 1) {
          e.preventDefault();
          nextSection();
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (activeIndex > 0) {
          e.preventDefault();
          prevSection();
        }
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSection(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSection(sections.length - 1);
      } else if (e.key === '1') {
        e.preventDefault();
        goToSection(0);
      } else if (e.key === '2' && sections.length > 1) {
        e.preventDefault();
        goToSection(1);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, nextSection, prevSection, goToSection, sections.length]);

  return (
    // <main> gives assistive tech and crawlers a single content landmark for the whole
    // three-section experience. The section wrappers carry the per-screen semantics.
    <main className="relative w-full h-[100svh] overflow-hidden bg-[#FBF9F5]">
      {/* Render All Sections with Cinematic Zoom Transform Layers */}
      {sections.map((sectionNode, idx) => {
        const isActive = idx === activeIndex;
        const isPast = idx < activeIndex;

        // Cinematic zoom calculation:
        // Exiting section scales up (1.18) and fades out with subtle lens blur
        // Entering section scales from 0.88 to 1.0 and sharpens into focus
        let transformStyle = 'scale(1) translate3d(0, 0, 0)';
        let opacity = 1;
        let filter = 'blur(0px)';
        let pointerEvents = 'auto';
        let zIndex = 10;

        if (isPast) {
          transformStyle = 'scale(1.18) translate3d(0, -3%, 0)';
          opacity = 0;
          filter = 'blur(5px)';
          pointerEvents = 'none';
          zIndex = 4;
        } else if (!isActive) {
          transformStyle = 'scale(0.88) translate3d(0, 4%, 0)';
          opacity = 0;
          filter = 'blur(5px)';
          pointerEvents = 'none';
          zIndex = 4;
        }

        return (
          <div
            key={idx}
            className="absolute inset-0 w-full h-full will-change-[transform,opacity,filter]"
            style={{
              transform: transformStyle,
              opacity,
              filter,
              pointerEvents,
              zIndex,
              transition:
                'transform 1100ms cubic-bezier(0.22, 1, 0.36, 1), opacity 950ms cubic-bezier(0.22, 1, 0.36, 1), filter 1000ms ease-out',
            }}
          >
            {typeof sectionNode === 'function'
              ? sectionNode({ active: isActive, goToSection, nextSection, prevSection })
              : sectionNode}
          </div>
        );
      })}
    </main>
  );
}
