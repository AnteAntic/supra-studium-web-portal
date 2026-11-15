import { motion } from 'framer-motion';
import { fadeIn } from '@/components/home/reveal';

interface ContactHeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
  backgroundSrc: string;
}

function go(href: string) {
  if (href.startsWith('#')) {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.open(href, '_self');
  }
}

/**
 * Contact page hero in the same documentary pattern as the course heroes:
 * full-bleed frame, directional gradient, text on the page's left axis.
 * Same content and behaviour as the generic HeroSection it replaces.
 */
export function ContactHero({ title, subtitle, description, primaryCta, secondaryCta, backgroundSrc }: ContactHeroProps) {
  return (
    <section
      className="on-dark relative min-h-[78svh] md:min-h-[86svh] overflow-hidden bg-[#141311]"
      role="banner"
      aria-label="Hero section"
    >
      <div className="absolute inset-0">
        <img
          src={backgroundSrc}
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 22%', filter: 'grayscale(8%)' }}
          loading="eager"
        />
      </div>

      {/* Desktop: dark left text zone, atmospheric right */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'linear-gradient(100deg, rgba(15,12,8,0.88) 0%, rgba(15,12,8,0.72) 34%, rgba(15,12,8,0.36) 58%, rgba(15,12,8,0.10) 74%, transparent 86%)',
        }}
      />
      {/* Mobile: vertical gradient */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            'linear-gradient(to bottom, rgba(15,12,8,0.60) 0%, rgba(15,12,8,0.34) 30%, rgba(15,12,8,0.56) 58%, rgba(15,12,8,0.86) 100%)',
        }}
      />

      <div className="relative z-10">
        <div className="container mx-auto px-6 relative z-10 min-h-[78svh] md:min-h-[86svh] pt-28 md:pt-32 flex items-end pb-[16%] md:pb-[8%]">
          <div className="w-full max-w-[52rem]">

            <motion.div {...fadeIn(0.2)} className="mb-6 flex items-center gap-4">
              <span className="block w-10 h-px bg-[#d4af37]/60" aria-hidden="true" />
              <h2
                className="text-label font-normal uppercase tracking-[0.30em]"
                style={{ color: 'rgba(212,175,55,0.95)' }}
              >
                {subtitle}
              </h2>
            </motion.div>

            <motion.div {...fadeIn(0.35)} className="mb-7">
              <h1
                className="font-playfair font-semibold text-[#f4f0e8] text-display"
                style={{ textShadow: '0 2px 22px rgba(0,0,0,0.45)' }}
              >
                {title}
              </h1>
            </motion.div>

            <motion.div {...fadeIn(0.55)} className="mb-9">
              <p className="text-body-l font-normal text-[#ede9e3]/80 max-w-[36rem]">
                {description}
              </p>
            </motion.div>

            <motion.div {...fadeIn(0.75)} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
              <button
                onClick={() => go(primaryCta.href)}
                className="bg-[#c9a832]/90 hover:bg-[#c9a832] active:bg-[#b8992b] text-[#1F1D1A] px-8 py-3.5 text-xs font-medium rounded-sm tracking-[0.16em] uppercase transition-colors duration-300"
              >
                <span>{primaryCta.text}</span>
              </button>
              <button
                onClick={() => go(secondaryCta.href)}
                className="px-8 py-3.5 text-xs font-medium rounded-sm tracking-[0.16em] uppercase border border-[#ede9e3]/40 text-[#ede9e3] transition-colors duration-300 hover:bg-[#ede9e3] hover:text-[#141311] focus-visible:bg-[#ede9e3] focus-visible:text-[#141311] active:bg-[#d8d3ca]"
              >
                <span>{secondaryCta.text}</span>
              </button>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Accessibility Enhancement */}
      <div className="sr-only">
        <p>{title}</p>
        <p>{description}</p>
        <a href={primaryCta.href}>{primaryCta.text}</a>
        <a href={secondaryCta.href}>{secondaryCta.text}</a>
      </div>
    </section>
  );
}
