import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
  soldOut = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 1.4);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-20 left-0 right-0 z-40 ${className}`}
      style={{
        backgroundColor: '#FAF8F4',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
      }}
      role="region"
      aria-label="Detalji termina i prijava"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between gap-8 py-3">
          <div className="flex items-center gap-6">
            {locations.map((location, i) => (
              <span
                key={i}
                className="text-[10px] uppercase tracking-[0.22em] font-normal"
                style={{ color: '#5F5A52' }}
              >
                <span style={{ color: '#B89A4F' }}>{location.city}</span>
                {location.stage && <span>{' · '}{location.stage}</span>}
                {' · '}
                {location.dates}
                {soldOut && (
                  <span
                    className="ml-3 text-[10px] uppercase tracking-[0.18em]"
                    style={{ color: '#B89A4F', opacity: 0.65 }}
                  >
                    Rasprodano
                  </span>
                )}
              </span>
            ))}
          </div>

          <button
            className="flex-shrink-0 text-[10.5px] uppercase tracking-[0.18em] font-normal py-2.5 px-8"
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
        <div className="md:hidden flex items-center justify-between gap-4 py-2">
          <span className="text-[10px] uppercase tracking-[0.15em] font-normal leading-none" style={{ color: '#5F5A52' }}>
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
            className="flex-shrink-0 text-[10px] uppercase tracking-[0.15em] font-normal py-2 px-5"
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
    </motion.div>
  );
};
