import React, { useEffect, useState } from 'react';

interface CourseLocation {
  city: string;
  dates: string;
  stage?: string;
}

interface CourseStickyBarProps {
  locations: CourseLocation[];
  price: string;
  ctaText?: string;
  ctaHref?: string;
  fallbackText?: string;
  theme?: 'light' | 'dark';
  className?: string;
  soldOut?: boolean;
}

export const CourseStickyBar: React.FC<CourseStickyBarProps> = ({
  locations = [],
  ctaText = 'Prijavi se',
  ctaHref = '#enrollment',
  className = '',
  price = '',
  soldOut = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // The threshold is measured once (and again only when the width changes,
    // i.e. rotation). window.innerHeight alone changes whenever the mobile
    // browser bar collapses or expands, which made the bar pop in and out.
    // A 48 px band (hysteresis) keeps a resting thumb from toggling it.
    let threshold = window.innerHeight * 0.9;
    let width = window.innerWidth;
    let visible = false;
    const BAND = 48;
    const update = () => {
      const y = window.scrollY;
      const next = visible ? y > threshold - BAND : y > threshold + BAND;
      if (next !== visible) {
        visible = next;
        setIsVisible(next);
      }
    };
    const onResize = () => {
      if (window.innerWidth !== width) {
        width = window.innerWidth;
        threshold = window.innerHeight * 0.9;
        update();
      }
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const handleCTA = () => {
    const target = soldOut ? '#kontakt' : ctaHref;
    if (target.startsWith('#')) {
      const el = document.getElementById(target.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(target, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className={`fixed top-[57px] md:top-20 left-0 right-0 z-40 transition-[transform,opacity] duration-300 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'} ${className}`}
      style={{
        backgroundColor: 'rgba(250,248,244,0.985)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}
      role="region"
      aria-label="Detalji termina i prijava"
      aria-hidden={!isVisible}
      // Hidden bar must not be reachable by keyboard.
      {...(!isVisible ? { inert: '' as unknown as boolean } : {})}
    >
      <div className="container mx-auto px-6">

        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between gap-8 py-1.5">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 min-w-0">
            {locations.map((location, i) => (
              <span
                key={i}
                className="text-label uppercase tracking-[0.22em] font-normal whitespace-nowrap"
                style={{ color: '#5F5A52' }}
              >
                <span style={{ color: '#B89A4F' }}>{location.city}</span>
                {location.stage && <span>{' · '}{location.stage}</span>}
                {' · '}
                {location.dates}
                {soldOut && (
                  <span
                    className="ml-3 text-label uppercase tracking-[0.18em]"
                    style={{ color: '#B89A4F', opacity: 0.65 }}
                  >
                    Rasprodano
                  </span>
                )}
              </span>
            ))}
          </div>

          {price && (
            <span className="flex-shrink-0 text-body-l font-medium" style={{ color: '#1F1D1A' }}>
              {price}
            </span>
          )}

          <button
            className="flex-shrink-0 text-label uppercase tracking-[0.22em] font-normal py-3 px-8 rounded-none"
            style={{
              border: '1px solid rgba(0,0,0,0.14)',
              color: '#3D3A35',
              background: 'rgba(250,248,244,0.96)',
              cursor: 'pointer',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              transition: 'all 0.6s ease',
            }}
            onMouseEnter={e => {
              const b = e.currentTarget;
              b.style.background = 'rgba(184,154,79,0.92)';
              b.style.borderColor = 'rgba(184,154,79,0.70)';
              b.style.color = '#1a1714';
              b.style.boxShadow = '0 2px 8px rgba(184,154,79,0.18)';
            }}
            onMouseLeave={e => {
              const b = e.currentTarget;
              b.style.background = 'rgba(250,248,244,0.96)';
              b.style.borderColor = 'rgba(0,0,0,0.14)';
              b.style.color = '#3D3A35';
              b.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)';
            }}
            onClick={handleCTA}
            aria-label={soldOut ? 'Obavijesti me za sljedeći termin' : 'Rezerviraj mjesto na edukaciji'}
          >
            {soldOut ? 'Obavijesti me' : ctaText}
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center justify-between gap-4 py-1.5">
          <span className="text-label uppercase tracking-[0.15em] font-normal leading-none" style={{ color: '#5F5A52' }}>
            {locations.length === 1 ? (
              <>
                <span style={{ color: '#B89A4F' }}>{locations[0].city}</span>
                {' · '}{locations[0].dates}
              </>
            ) : (
              <span style={{ color: '#B89A4F' }}>{locations[0].city}</span>
            )}
          </span>
          <button
            className="flex-shrink-0 text-label uppercase tracking-[0.15em] font-normal py-2 px-5"
            style={{
              border: '1px solid rgba(0,0,0,0.14)',
              color: '#3D3A35',
              background: 'rgba(250,248,244,0.96)',
              cursor: 'pointer',
              boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
              transition: 'all 0.6s ease',
            }}
            onMouseEnter={e => {
              const b = e.currentTarget;
              b.style.background = 'rgba(184,154,79,0.92)';
              b.style.borderColor = 'rgba(184,154,79,0.70)';
              b.style.color = '#1a1714';
            }}
            onMouseLeave={e => {
              const b = e.currentTarget;
              b.style.background = 'rgba(250,248,244,0.96)';
              b.style.borderColor = 'rgba(0,0,0,0.14)';
              b.style.color = '#3D3A35';
            }}
            onClick={handleCTA}
          >
            {soldOut ? 'Obavijesti me' : ctaText}
          </button>
        </div>

      </div>
    </div>
  );
};
