import React, { useEffect, useState } from 'react';

/**
 * HandshakeAnimation Component
 * Two minimalist 2D hands (one from left, one from right) gliding in with spring physics,
 * meeting in the center, and performing a crisp, delightful 2-beat handshake.
 */
export default function HandshakeAnimation({ active }) {
  const [phase, setPhase] = useState('entering'); // 'entering' -> 'shaking'

  useEffect(() => {
    if (!active) {
      setPhase('entering');
      return;
    }

    // Phase 1: Slide in and meet (220ms)
    // Phase 2: Interlock and shake (220ms onwards)
    const timer = setTimeout(() => {
      setPhase('shaking');
    }, 220);

    return () => clearTimeout(timer);
  }, [active]);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* HANDSHAKE STAGE */}
      <div 
        className={`relative flex items-center justify-center transition-transform duration-200 ${
          phase === 'shaking' ? 'animate-handshake-shake' : ''
        }`}
      >
        <svg 
          viewBox="0 0 54 26" 
          className="w-12 h-6 overflow-visible" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.9" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {/* LEFT HAND (Reaches in from left) */}
          <g 
            className={`transition-all duration-260 ease-out ${
              phase === 'entering' 
                ? '-translate-x-4 opacity-40' 
                : 'translate-x-0 opacity-100'
            }`}
          >
            {/* Left Cuff / Sleeve */}
            <path d="M 1 8 L 1 18" strokeOpacity="0.5" strokeWidth="2.2" />
            {/* Left Forearm */}
            <path d="M 2 9.5 L 12 10.5" />
            <path d="M 2 16.5 L 12 15.5" />
            {/* Left Thumb */}
            <path d="M 13 10.5 C 15 7.5, 18 7.5, 19.5 9.5 L 20 11.5" />
            {/* Left Palm & Grip */}
            <path d="M 12 15.5 L 21 15.5 C 23.5 15.5, 24.5 13.5, 23 11.5 L 20 11.5" />
          </g>

          {/* RIGHT HAND (Reaches in from right) */}
          <g 
            className={`transition-all duration-260 ease-out ${
              phase === 'entering' 
                ? 'translate-x-4 opacity-40' 
                : 'translate-x-0 opacity-100'
            }`}
          >
            {/* Right Cuff / Sleeve */}
            <path d="M 53 8 L 53 18" strokeOpacity="0.5" strokeWidth="2.2" />
            {/* Right Forearm */}
            <path d="M 52 9.5 L 42 10.5" />
            <path d="M 52 16.5 L 42 15.5" />
            {/* Right Fingers Clasping over left palm */}
            <path d="M 42 10.5 L 33 10.5 C 30.5 10.5, 29.5 12.5, 31 14.5 L 34 14.5" />
            {/* Right Thumb */}
            <path d="M 41 15.5 C 39 18.5, 36 18.5, 34.5 16.5 L 34 14.5" />
          </g>

          {/* Micro Sparkle of Joy when clasped */}
          <g 
            className={`transition-all duration-300 ${
              phase === 'shaking' ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
            style={{ transformOrigin: '27px 4px' }}
          >
            <path 
              d="M 27 0 L 27.8 2.5 L 30 3 L 27.8 3.5 L 27 6 L 26.2 3.5 L 24 3 L 26.2 2.5 Z" 
              fill="#FCD34D" 
              stroke="none" 
            />
          </g>
        </svg>
      </div>

      {/* Tiny companion status cue */}
      <span className="ml-1.5 font-mono text-[11px] font-medium tracking-tight text-emerald-300/90 whitespace-nowrap">
        Let's talk!
      </span>
    </div>
  );
}
