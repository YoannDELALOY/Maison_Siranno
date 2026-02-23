import React, { useEffect, useRef, useState } from 'react';

type CursorState = 'default' | 'hover' | 'click' | 'text';

/* ── Keyframes injectées une seule fois ── */
const STYLE_ID = 'custom-cursor-styles';
function injectStyles() {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    @keyframes cursor-heartbeat {
      0%   { transform: translate(-50%, -50%) scale(1.0); }
      25%  { transform: translate(-50%, -50%) scale(1.4); }
      50%  { transform: translate(-50%, -50%) scale(1.0); }
      75%  { transform: translate(-50%, -50%) scale(1.35); }
      100% { transform: translate(-50%, -50%) scale(1.0); }
    }
  `;
  document.head.appendChild(style);
}

export const CustomCursor: React.FC = () => {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mouse   = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });
  const rafId   = useRef<number>();

  const [state,   setState]   = useState<CursorState>('default');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    injectStyles();
  }, []);

  useEffect(() => {
    /* ── Sélecteurs cliquables ── */
    const CLICKABLE_SEL =
      'a, button, [role="button"], [tabindex], label, select, ' +
      'input[type="submit"], input[type="button"], ' +
      'input[type="checkbox"], input[type="radio"], ' +
      '[data-cursor-hover]';

    const TEXT_SEL =
      'input[type="text"], input[type="email"], input[type="password"], ' +
      'input[type="search"], input[type="number"], textarea';

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      setVisible(true);

      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top  = `${e.clientY}px`;
      }

      const target = e.target as HTMLElement;

      /* data-cursor-ignore force le curseur gold par défaut (ex: graphiques) */
      if (target.closest('[data-cursor-ignore]')) {
        setState('default');
        return;
      }

      const textInput  = target.closest(TEXT_SEL);
      const clickable  = target.closest(CLICKABLE_SEL);

      if (textInput)     setState('text');
      else if (clickable) setState('hover');
      else                setState('default');
    };

    const onLeave  = () => setVisible(false);
    const onEnter  = () => setVisible(true);
    const onDown   = () => setState('click');
    const onUp     = (e: MouseEvent) => {
      const target    = e.target as HTMLElement;
      const clickable = target.closest(CLICKABLE_SEL);
      setState(clickable ? 'hover' : 'default');
    };

    document.addEventListener('mousemove',  onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mousedown',  onDown);
    document.addEventListener('mouseup',    onUp);

    /* ── Anneau avec lerp ── */
    const animate = () => {
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.10;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.10;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top  = `${ringPos.current.y}px`;
      }
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove',  onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mousedown',  onDown);
      document.removeEventListener('mouseup',    onUp);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const isHover = state === 'hover';
  const isClick = state === 'click';
  const isText  = state === 'text';

  return (
    <>
      {/* ── Point central ── */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position:       'fixed',
          pointerEvents:  'none',
          zIndex:         99999,
          /* L'animation heartbeat remplace le transform statique quand hover */
          transform:      'translate(-50%, -50%)',
          animation:      isHover ? 'cursor-heartbeat 0.5s ease-in-out infinite' : 'none',
          transition:     isHover
            ? 'width 180ms ease, height 180ms ease, opacity 200ms ease, box-shadow 180ms ease, background 220ms ease'
            : 'width 180ms ease, height 180ms ease, opacity 200ms ease, box-shadow 180ms ease, background 220ms ease, transform 150ms ease',
          opacity:        visible ? 1 : 0,
          width:          isText ? '2px' : isClick ? '8px' : isHover ? '14px' : '10px',
          height:         isText ? '20px' : isClick ? '8px' : isHover ? '14px' : '10px',
          borderRadius:   isText ? '2px' : '50%',
          background:     isText
            ? 'rgba(212,175,55,0.9)'
            : isHover || isClick
              ? 'radial-gradient(circle at 35% 30%, #F5B84A, #C04A1A 55%, #7D1F0A)'
              : 'radial-gradient(circle at 35% 30%, #F4E095, #D4AF37 55%, #9C7C38)',
          boxShadow:      isHover
            ? '0 0 18px rgba(192,74,26,0.95), 0 0 8px rgba(245,184,74,0.7)'
            : '0 0 6px rgba(212,175,55,0.5)',
        }}
      />

      {/* ── Anneau décalé ── */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position:      'fixed',
          pointerEvents: 'none',
          zIndex:        99998,
          transform:     'translate(-50%, -50%)',
          transition:    'width 220ms cubic-bezier(.23,1,.32,1), height 220ms cubic-bezier(.23,1,.32,1), border-color 220ms ease, background-color 220ms ease, opacity 200ms ease',
          opacity:       visible && !isText ? 1 : 0,
          width:         isClick ? '28px' : isHover ? '52px' : '38px',
          height:        isClick ? '28px' : isHover ? '52px' : '38px',
          borderRadius:  '50%',
          border:        isHover
            ? '1.5px solid rgba(192,74,26,0.9)'
            : '1.5px solid rgba(212,175,55,0.45)',
          backgroundColor: isHover
            ? 'rgba(125,31,10,0.10)'
            : 'transparent',
          backdropFilter: isHover ? 'blur(1px)' : 'none',
        }}
      >
        {/* Reflet interne sur hover */}
        {isHover && (
          <div style={{
            position:     'absolute',
            top:          '3px',
            left:         '6px',
            width:        '8px',
            height:       '3px',
            borderRadius: '50%',
            background:   'rgba(245,184,74,0.45)',
            transform:    'rotate(-30deg)',
          }} />
        )}
      </div>
    </>
  );
};
