import React, { useEffect, useRef } from 'react';

/**
 * Custom Artisanal Crumpled Paper Cursor
 * 
 * Replaces system Windows cursor with crumpled paper assets:
 * - Default arrow: Crumpled Paper Animated Cursor--cursor--SweezyCursors.png
 * - Interactive pointer: Crumpled Paper Animated Cursor--pointer--SweezyCursors.png
 * 
 * Features:
 * - 0ms hardware-accelerated direct DOM tracking (zero React re-render overhead)
 * - Exact hotspot alignment at click point:
 *     Arrow tip: (2px, 0px)
 *     Pointer fingertip: (13px, 0px)
 * - Hotspot-centered tactile press feedback (scale 0.88 on pointerdown)
 * - Seamless crossfade and micro-rotation on interactive hover
 * - Native cursor suppression applied only while this component is mounted
 *   (`html.has-custom-cursor`), so a failed bundle still shows an OS pointer
 */
export default function CustomCursor() {
  const containerRef = useRef(null);
  const arrowRef = useRef(null);
  const pointerRef = useRef(null);

  const posRef = useRef({ x: -200, y: -200 });
  const isPointerRef = useRef(false);
  const isPressedRef = useRef(false);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    // Detect touch-only devices (tablets/smartphones without fine pointer)
    const isTouchOnly =
      window.matchMedia('(pointer: coarse)').matches &&
      !window.matchMedia('(pointer: fine)').matches;

    if (isTouchOnly) return;

    // Suppress the native pointer only once we know the paper cursor is mounted, so a
    // scripting failure (or a crawler with JS disabled) never leaves a visitor with no
    // cursor at all. The rule itself lives in index.html, keyed off this class.
    document.documentElement.classList.add('has-custom-cursor');

    // Helper: Determine if element is interactive
    const checkInteractive = (el) => {
      if (!el || el === document.body || el === document.documentElement) return false;

      // Direct canvas 3D book inspection
      if (el.tagName === 'CANVAS' || el.closest('canvas')) {
        const cvs = el.tagName === 'CANVAS' ? el : el.closest('canvas');
        if (
          cvs.dataset?.cursor === 'pointer' ||
          cvs.dataset?.cursor === 'grab' ||
          cvs.dataset?.cursor === 'grabbing' ||
          cvs.style?.cursor === 'pointer' ||
          cvs.style?.cursor === 'grab' ||
          cvs.style?.cursor === 'grabbing'
        ) {
          return true;
        }
      }

      // Check standard interactive selector tree
      const match = el.closest(
        'a, button, [role="button"], [role="link"], [role="tab"], .cursor-pointer, input, textarea, select, label, summary, [data-interactive="true"], [data-cursor="pointer"], [data-cursor="grab"], [data-cursor="grabbing"]'
      );
      if (match) return true;

      // Fast parent walk for any element styled with pointer cursor or click handlers
      let curr = el;
      let depth = 0;
      while (curr && depth < 3) {
        if (curr.dataset?.cursor === 'pointer') return true;
        if (curr.classList && (curr.classList.contains('cursor-pointer') || curr.classList.contains('cursor-grab'))) return true;
        if (curr.tagName === 'BUTTON' || curr.tagName === 'A') return true;
        curr = curr.parentElement;
        depth++;
      }

      return false;
    };

    // Apply visual states directly to DOM nodes without React re-render lag
    const applyState = () => {
      const isPointer = isPointerRef.current;
      const isPressed = isPressedRef.current;

      if (arrowRef.current && pointerRef.current) {
        if (isPointer) {
          // Pointer active (crumpled hand)
          pointerRef.current.style.opacity = '1';
          pointerRef.current.style.transform = isPressed ? 'scale(0.88)' : 'scale(1)';

          arrowRef.current.style.opacity = '0';
          arrowRef.current.style.transform = 'scale(0.82) rotate(-8deg)';
        } else {
          // Default active (crumpled arrow)
          arrowRef.current.style.opacity = '1';
          arrowRef.current.style.transform = isPressed ? 'scale(0.88)' : 'scale(1)';

          pointerRef.current.style.opacity = '0';
          pointerRef.current.style.transform = 'scale(0.82) rotate(8deg)';
        }
      }
    };

    // The paper cursor is positioned straight from pointermove instead of a rAF loop.
    // Browsers already coalesce pointermove to roughly one event per frame, so this is
    // the lowest possible latency AND costs nothing at all while the pointer is idle —
    // the previous unconditional rAF loop kept the compositor awake for the whole visit.
    const placeCursor = () => {
      if (containerRef.current && isVisibleRef.current && posRef.current.x >= 0) {
        containerRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
      }
    };

    // Instant pointer move listener with zero latency
    const onPointerMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      posRef.current = { x, y };

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        if (containerRef.current) {
          containerRef.current.style.opacity = '1';
        }
      }
      placeCursor();

      const isHoveringInteractive = checkInteractive(e.target);
      if (isHoveringInteractive !== isPointerRef.current) {
        isPointerRef.current = isHoveringInteractive;
        applyState();
      }
    };

    // Tactile press response
    const onPointerDown = () => {
      isPressedRef.current = true;
      applyState();
    };

    const onPointerUp = () => {
      isPressedRef.current = false;
      applyState();
    };

    // Scroll updates (if elements move under static cursor)
    const onScroll = () => {
      if (posRef.current.x < 0) return;
      const el = document.elementFromPoint(posRef.current.x, posRef.current.y);
      if (el) {
        const isHoveringInteractive = checkInteractive(el);
        if (isHoveringInteractive !== isPointerRef.current) {
          isPointerRef.current = isHoveringInteractive;
          applyState();
        }
      }
    };

    // Window boundaries
    const setVisible = (visible) => {
      isVisibleRef.current = visible;
      if (containerRef.current) containerRef.current.style.opacity = visible ? '1' : '0';
      if (visible) placeCursor();
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);
    const onBlur = () => setVisible(false);
    const onFocus = () => setVisible(true);

    // Attach passive window listeners
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('pointerup', onPointerUp, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('blur', onBlur);
    window.addEventListener('focus', onFocus);

    // Initial state setup
    applyState();

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('blur', onBlur);
      window.removeEventListener('focus', onFocus);
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[999999] will-change-transform"
      style={{
        transform: 'translate3d(-200px, -200px, 0)',
        opacity: 0,
        transition: 'opacity 0.18s ease-out',
        width: '36px',
        height: '36px',
      }}
    >
      {/* Default Crumpled Paper Cursor Arrow */}
      <img
        ref={arrowRef}
        src="/Crumpled Paper Animated Cursor--cursor--SweezyCursors.png"
        onError={(e) => {
          e.currentTarget.src = '/cursor-paper-default.png';
        }}
        alt=""
        draggable={false}
        className="pointer-events-none select-none absolute"
        style={{
          left: '-2px',
          top: '0px',
          width: '36px',
          height: '36px',
          maxWidth: 'none',
          maxHeight: 'none',
          objectFit: 'contain',
          transformOrigin: '2px 0px',
          filter: 'drop-shadow(0 2px 4px rgba(21, 20, 19, 0.22)) drop-shadow(0 6px 12px rgba(21, 20, 19, 0.12))',
          willChange: 'transform, opacity',
          transition: 'opacity 0.1s ease-out, transform 0.14s cubic-bezier(0.2, 0.9, 0.4, 1.2)',
          opacity: 1,
          transform: 'scale(1)',
        }}
      />

      {/* Interactive Crumpled Paper Pointer Hand */}
      <img
        ref={pointerRef}
        src="/Crumpled Paper Animated Cursor--pointer--SweezyCursors.png"
        onError={(e) => {
          e.currentTarget.src = '/cursor-paper-pointer.png';
        }}
        alt=""
        draggable={false}
        className="pointer-events-none select-none absolute"
        style={{
          left: '-13px',
          top: '0px',
          width: '36px',
          height: '36px',
          maxWidth: 'none',
          maxHeight: 'none',
          objectFit: 'contain',
          transformOrigin: '13px 0px',
          filter: 'drop-shadow(0 2px 4px rgba(21, 20, 19, 0.22)) drop-shadow(0 6px 12px rgba(21, 20, 19, 0.12))',
          willChange: 'transform, opacity',
          transition: 'opacity 0.1s ease-out, transform 0.14s cubic-bezier(0.2, 0.9, 0.4, 1.2)',
          opacity: 0,
          transform: 'scale(0.82) rotate(8deg)',
        }}
      />
    </div>
  );
}
