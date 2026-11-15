import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeIn } from './reveal';

export function HomeHero() {
  return (
    <section className="on-dark relative min-h-hero overflow-hidden -mt-20">

      {/* Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/videos/home-hero-2026-poster.jpg"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
        >
          <source src="/videos/home-hero-2026.mp4" type="video/mp4" />
          <img width={1280} height={720} src="/videos/home-hero-2026-poster.jpg" alt="Supra Studium edukacija" className="w-full h-full object-cover" />
        </video>
      </div>

      {/* Base tonal settle */}
      <div className="absolute inset-0" style={{ background: 'rgba(15,12,8,0.12)' }} />

      {/* Desktop: directional text zone — dark left, atmospheric right */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'linear-gradient(100deg, rgba(15,12,8,0.86) 0%, rgba(15,12,8,0.70) 34%, rgba(15,12,8,0.34) 58%, rgba(15,12,8,0.08) 74%, transparent 86%)',
        }}
      />

      {/* Mobile: vertical gradient, darkest where the text sits */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            'linear-gradient(to bottom, rgba(15,12,8,0.62) 0%, rgba(15,12,8,0.30) 28%, rgba(15,12,8,0.46) 55%, rgba(15,12,8,0.80) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 relative z-10 min-h-hero pt-28 md:pt-32 flex items-end pb-[18%] md:pb-[9%]">
          <div className="w-full max-w-[52rem]">

            {/* Eyebrow */}
            <motion.div {...fadeIn(0.2)} className="mb-6 flex items-center gap-4">
              <span className="block w-10 h-px bg-[#d4af37]/60" aria-hidden="true" />
              <span
                className="text-label font-normal uppercase tracking-[0.30em]"
                style={{ color: 'rgba(212,175,55,0.95)', textShadow: '0 1px 2px rgba(0,0,0,0.35)' }}
              >
                Supra Studium · Učilište
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div {...fadeIn(0.35)} className="mb-7 md:mb-8">
              <h1
                className="font-playfair font-semibold text-[#f4f0e8] text-display"
                style={{ textShadow: '0 2px 22px rgba(0,0,0,0.45)', textWrap: 'balance' } as React.CSSProperties}
              >
                Dobar terapeut zna tehniku.<br />
                Odličan zna što traži.
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.div {...fadeIn(0.55)} className="mb-9 md:mb-10">
              <p className="text-body-l font-normal text-[#ede9e3]/80 max-w-[34rem]">
                Edukacija kroz palpaciju, kliničku procjenu i razumijevanje tkivnog odgovora.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeIn(0.75)} className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7">
              <Link
                to="/skola-manualne-terapije"
                className="bg-[#c9a832]/90 hover:bg-[#c9a832] active:bg-[#b8992b] text-[#1F1D1A] px-8 py-3.5 text-xs font-medium rounded-sm tracking-[0.16em] uppercase transition-colors duration-300 inline-block"
              >
                Pogledaj edukacije
              </Link>
              <Link
                to="/o-ucilistu"
                className="press-line pb-1 text-body-s font-normal tracking-[0.08em] text-[#ede9e3]/80 hover:text-[#ede9e3]"
                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.45)' }}
              >
                — O učilištu
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
