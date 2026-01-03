import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Euro } from 'lucide-react';

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
}

export const CourseStickyBar: React.FC<CourseStickyBarProps> = ({
  locations = [],
  price,
  ctaText = "Prijavi se",
  ctaHref = "#enrollment",
  fallbackText,
  theme = 'light',
  className = ""
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > heroHeight * 0.9);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCTA = () => {
    if (ctaHref.startsWith('#')) {
      const element = document.getElementById(ctaHref.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = ctaHref;
    }
  };

  if (!isVisible) return null;

  const isLight = theme === 'light';

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-20 left-0 right-0 z-40 ${className}`}
      style={{
        backgroundColor: 'rgba(250, 248, 244, 0.95)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        borderBottom: '1px solid rgba(184, 152, 95, 0.1)'
      }}
      role="region"
      aria-label="Detalji termina i prijava"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between gap-6">
          {/* Course Date Cards */}
          <div className="flex items-center gap-4 flex-1">
            {locations.map((location, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-300 cursor-default"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  border: '1px solid rgba(184, 152, 95, 0.15)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(184, 152, 95, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
                }}
              >
                <span className="text-sm font-medium" style={{ color: '#222222' }}>
                  📍 <span style={{ color: '#b8985f', fontWeight: 500 }}>{location.city}</span>
                  {' — '}
                  <span style={{ color: '#b8985f', fontWeight: 500 }}>{location.dates}</span>
                  {location.stage && (
                    <>
                      {' — '}
                      <span style={{ color: '#222222', fontWeight: 500 }}>{location.stage}</span>
                    </>
                  )}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            size="sm"
            onClick={scrollToCTA}
            className="transition-all duration-200 font-medium px-6 py-2 rounded-full"
            style={{
              backgroundColor: '#b8985f',
              color: '#FFFFFF',
              fontWeight: 500,
              border: 'none',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#a17d4a';
              e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#b8985f';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
            }}
            aria-label="Prijavi se na tečaj"
          >
            Prijavi se
          </Button>
        </div>

        {/* Mobile Layout - Horizontal Scroll */}
        <div className="md:hidden">
          <div 
            className="flex gap-3 pb-2 overflow-x-auto scroll-container"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            onScroll={(e) => {
              const container = e.currentTarget;
              const scrollLeft = container.scrollLeft;
              const itemWidth = container.scrollWidth / locations.length;
              const newActiveSlide = Math.round(scrollLeft / itemWidth);
              setActiveSlide(newActiveSlide);
            }}
          >
            {/* Hide scrollbar */}
            <style>{`
              .scroll-container::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {locations.map((location, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-3 py-2 rounded-lg"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  border: '1px solid rgba(184, 152, 95, 0.2)',
                  scrollSnapAlign: 'start',
                  minWidth: '280px'
                }}
              >
                <div className="text-xs font-medium" style={{ color: '#222222' }}>
                  📍 <span style={{ color: '#b8985f', fontWeight: 500 }}>{location.city}</span>
                </div>
                <div className="text-xs mt-1" style={{ color: '#b8985f', fontWeight: 500 }}>
                  {location.dates}
                  {location.stage && (
                    <span style={{ color: '#222222', marginLeft: '4px' }}>— {location.stage}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Swipe Indicators */}
          {locations.length > 1 && (
            <div className="flex items-center justify-center gap-1.5 mt-2 mb-1">
              {locations.map((_, index) => (
                <div
                  key={index}
                  className="transition-all duration-300"
                  style={{
                    width: activeSlide === index ? '20px' : '6px',
                    height: '6px',
                    borderRadius: '3px',
                    backgroundColor: activeSlide === index ? '#b8985f' : '#cccccc'
                  }}
                />
              ))}
            </div>
          )}
          
          {/* Mobile CTA */}
          <Button
            size="sm"
            onClick={scrollToCTA}
            className="w-full mt-2 transition-all duration-200 font-medium rounded-full"
            style={{
              backgroundColor: '#b8985f',
              color: '#FFFFFF',
              fontWeight: 500,
              border: 'none',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#a17d4a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#b8985f';
            }}
          >
            Prijavi se
          </Button>
        </div>
      </div>
    </motion.div>
  );
};