import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { reveal } from './reveal';

const flagshipProgram = {
  title: 'Škola manualne terapije dr. Stošića',
  label: 'Flagship program škole',
  text: 'Institucionalni program koji gradi kliničko razmišljanje, palpacijsku preciznost i strukturu terapijskog procesa.',
  href: '/skola-manualne-terapije',
  image: '/lovable-uploads/mt-stosic-demonstracija.jpg',
};

const featuredPrograms = [
  {
    title: 'CFM Body Reset Method',
    text: 'Metodologija iz koje je razvijen Supra pristup radu s tkivom, pokretom i palpacijom.',
    href: '/crossfriction-funkcionalna-masaza',
    image: '/lovable-uploads/cfm-tretman-closeup.jpg',
  },
  {
    title: 'Akupresura & Trigger Point',
    text: 'Program usmjeren na reakciju tkiva, preciznost palpacije i praktičnu primjenu terapijskih protokola.',
    href: '/akupresura-trigger-point',
    image: '/lovable-uploads/atp-program-kartica.webp',
  },
];

const secondaryPrograms = [
  { title: 'Cupping terapija', href: '/cupping-terapija', image: '/lovable-uploads/cup-hero-vakuum.webp' },
  { title: 'Lomi Lomi masaža', href: '/lomi-lomi', image: '/lovable-uploads/lomi-lomi-hero-sharp.jpeg' },
  { title: 'Kalabaš masaža', href: '/calabash-certifikacija', image: '/lovable-uploads/cal-program-kartica.webp' },
  { title: '3D Advanced Therapeutic Stretching', href: '/3d-advanced-therapeutic-stretching', image: '/lovable-uploads/3ds-technique-1.jpg' },
  { title: 'Klinička propedeutika', href: '/klinicka-propedeutika', image: '/lovable-uploads/propedeutika-stosic-model.webp' },
];

function Arrow() {
  return (
    <svg width="22" height="10" viewBox="0 0 22 10" fill="none" aria-hidden="true" className="flex-shrink-0">
      <path d="M0 5h20M16 1l4 4-4 4" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function HomeProgramsSection() {
  return (
    <section style={{ background: '#FAF8F4' }} className="pt-20 pb-20 md:pt-32 md:pb-28">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div {...reveal()} className="mb-14 md:mb-20">
          <p className="text-label uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#B89A4F' }}>
            Edukacije
          </p>
          <div className="w-10 h-px mb-8" style={{ backgroundColor: 'rgba(184,154,79,0.45)' }} />
          <h2 className="font-playfair font-semibold text-h2" style={{ color: '#1F1D1A' }}>
            Osam programa. Jedan pristup radu.
          </h2>
        </motion.div>

        {/* Flagship — text column, dominant frame */}
        <motion.div
          {...reveal()}
          className="grid md:grid-cols-12 gap-y-8 md:gap-x-8 pt-8 md:pt-10"
          style={{ borderTop: '1px solid rgba(31,29,26,0.14)' }}
        >
          <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-between">
            <div>
              <p className="text-label uppercase tracking-[0.25em] font-normal mb-5" style={{ color: '#B89A4F' }}>
                {flagshipProgram.label}
              </p>
              <h3 className="font-playfair font-semibold mb-5 text-h3" style={{ color: '#1F1D1A' }}>
                {flagshipProgram.title}
              </h3>
              <p className="text-body-l font-normal mb-8" style={{ color: '#4A463F' }}>
                {flagshipProgram.text}
              </p>
            </div>
            <Link
              to={flagshipProgram.href}
              className="press whitespace-nowrap text-label uppercase tracking-[0.22em] font-normal self-start py-3.5 px-8 rounded-none border border-[#1F1D1A]/20 text-[#1F1D1A]"
            >
              Pogledaj program
            </Link>
          </div>
          <div className="frame md:col-span-7 lg:col-span-8 lg:col-start-5 order-first md:order-none" style={{ aspectRatio: '3/2' }}>
            <img
              src={flagshipProgram.image}
              alt={flagshipProgram.title}
              width={1600}
              height={1066}
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Two featured programs — staggered pair */}
        <div className="grid md:grid-cols-12 gap-y-14 md:gap-x-8 mt-16 md:mt-24">
          {featuredPrograms.map((prog, i) => (
            <motion.div
              key={prog.href}
              {...reveal(i * 0.08)}
              className={i === 0 ? 'md:col-span-7' : 'md:col-span-5 md:mt-16 lg:mt-28'}
            >
              <div className="frame" style={{ aspectRatio: i === 0 ? '3/2' : '4/3' }}>
                <img
                  src={prog.image}
                  alt={prog.title}
                  width={i === 0 ? 1600 : 1280}
                  height={i === 0 ? 1066 : 714}
                  loading="lazy"
                />
              </div>
              <div className="pt-7">
                <h3 className="font-playfair font-semibold mb-3 text-h3" style={{ color: '#1F1D1A' }}>
                  {prog.title}
                </h3>
                <p className="text-body-l font-normal mb-6 max-w-[34rem]" style={{ color: '#4A463F' }}>
                  {prog.text}
                </p>
                <Link
                  to={prog.href}
                  className="press-line pb-1 text-label uppercase tracking-[0.20em] font-normal text-[#8a7436] hover:text-[#1F1D1A]"
                >
                  Pogledaj program →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Remaining programs — typographic index */}
        <div className="mt-16 md:mt-28" style={{ borderTop: '1px solid rgba(31,29,26,0.14)' }}>
          {secondaryPrograms.map((prog, i) => (
            <motion.div key={prog.href} {...reveal(i * 0.05)} style={{ borderBottom: '1px solid rgba(31,29,26,0.14)' }}>
              <Link
                to={prog.href}
                className="press group flex items-center gap-5 md:gap-10 py-4 md:py-5 md:px-4 md:-mx-4 text-[#1F1D1A]"
              >
                <div className="frame w-16 h-16 md:w-24 md:h-[4.5rem] flex-shrink-0">
                  <img src={prog.image} alt={prog.title} loading="lazy" />
                </div>
                <p className="font-playfair font-normal text-h3 flex-1">
                  {prog.title}
                </p>
                <span className="text-[#B89A4F] transition-transform duration-500 group-hover:translate-x-1 group-focus-visible:translate-x-1">
                  <Arrow />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
