import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

export function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden -mt-20">

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
          <img src="/videos/home-hero-2026-poster.jpg" alt="Supra Studium edukacija" className="w-full h-full object-cover" />
        </video>
      </div>

      {/* Base tonal settle */}
      <div className="absolute inset-0 bg-black/12" />

      {/* Desktop: cinematic left text zone */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'linear-gradient(to right, rgba(15,12,8,0.84) 0%, rgba(15,12,8,0.64) 30%, rgba(15,12,8,0.22) 56%, rgba(15,12,8,0.04) 70%, transparent 82%)',
        }}
      />

      {/* Desktop: radial depth behind headline */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'radial-gradient(ellipse 55% 75% at 10% 62%, rgba(8,5,2,0.38) 0%, transparent 100%)',
        }}
      />

      {/* Mobile: vertical gradient */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            'linear-gradient(to bottom, rgba(15,12,8,0.74) 0%, rgba(15,12,8,0.58) 25%, rgba(15,12,8,0.38) 55%, rgba(15,12,8,0.26) 75%, rgba(15,12,8,0.40) 100%)',
        }}
      />

      {/* Top vignette */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/20 to-transparent" />

      {/* Content */}
      <motion.div style={{ opacity, y }} className="absolute inset-0">
        <div className="container mx-auto px-6 relative z-10 h-full flex items-end pb-[20%] md:pb-[12%]">
          <div className="max-w-xl w-full">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-6"
            >
              <span className="text-[#B89A4F]/70 text-[9px] sm:text-[10px] font-normal uppercase tracking-[0.24em] sm:tracking-[0.30em]">
                Supra Studium · Učilište
              </span>
            </motion.div>

            {/* Separator */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
              className="origin-left mb-8"
            >
              <div className="w-10 h-px bg-[#B89A4F]/45" />
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9, ease: 'easeOut' }}
              className="mb-8"
            >
              <h1
                className="font-playfair font-semibold text-white leading-[1.18] text-[1.85rem] sm:text-[2.1rem] md:text-[2.3rem]"
                style={{ textShadow: '0 2px 16px rgba(0,0,0,0.42), 0 1px 4px rgba(0,0,0,0.28)' }}
              >
                Preciznost počinje pod prstima.
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mb-10"
            >
              <p className="text-[13px] font-normal text-white/65 leading-[1.65] max-w-sm">
                Edukacija terapeuta kroz palpaciju, kliničku observaciju i praktičan rad.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5"
            >
              <Link
                to="/skola-manualne-terapije"
                className="bg-[#B89A4F]/90 hover:bg-[#B89A4F] text-white px-7 py-2.5 text-xs font-medium rounded-sm tracking-wider uppercase transition-colors duration-300 inline-block"
              >
                Pogledaj edukacije
              </Link>
              <Link
                to="/o-ucilistu"
                className="text-white/68 hover:text-white/90 text-xs font-normal tracking-[0.12em] transition-colors duration-300"
              >
                — O učilištu
              </Link>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
