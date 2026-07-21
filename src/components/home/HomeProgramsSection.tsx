import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

export function HomeProgramsSection() {
  return (
    <section style={{ background: '#FAF8F4' }} className="py-20 md:py-28">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16 md:mb-20"
        >
          <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#B89A4F' }}>
            Edukacije
          </p>
          <div className="w-10 h-px mb-8" style={{ backgroundColor: 'rgba(184,154,79,0.28)' }} />
          <h2 className="font-playfair font-semibold text-[1.65rem] md:text-[2rem] leading-[1.22]" style={{ color: '#1F1D1A' }}>
            Osam programa. Jedan pristup radu.
          </h2>
        </motion.div>

        {/* CFM Flagship */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-5 gap-0 mb-5 md:mb-6"
          style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}
        >
          {/* Text */}
          <div className="md:col-span-2 flex flex-col justify-between py-10 md:py-12 md:pr-12">
            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] font-normal mb-5" style={{ color: '#B89A4F' }}>
                {flagshipProgram.label}
              </p>
              <h3
                className="font-playfair font-semibold leading-[1.2] mb-5 text-[1.55rem] md:text-[1.75rem]"
                style={{ color: '#1F1D1A' }}
              >
                {flagshipProgram.title}
              </h3>
              <p className="text-[13px] leading-[1.72] font-normal mb-8" style={{ color: '#5F5A52' }}>
                {flagshipProgram.text}
              </p>
            </div>
            <Link
              to={flagshipProgram.href}
              className="text-[10px] uppercase tracking-[0.22em] font-normal self-start py-3 px-8 rounded-none transition-colors duration-300"
              style={{
                border: '1px solid rgba(0,0,0,0.14)',
                color: '#3D3A35',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(184,154,79,0.10)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,154,79,0.40)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.14)';
              }}
            >
              Pogledaj program
            </Link>
          </div>

          {/* Image — dominant */}
          <div className="md:col-span-3 overflow-hidden" style={{ aspectRatio: '16/10' }}>
            <img
              src={flagshipProgram.image}
              alt={flagshipProgram.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* MT + ATP — secondary features */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {featuredPrograms.map((prog, i) => (
            <motion.div
              key={prog.href}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              viewport={{ once: true }}
              style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}
            >
              <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="pt-7 pb-8">
                <h3
                  className="font-playfair font-semibold text-[1.2rem] leading-[1.25] mb-3"
                  style={{ color: '#1F1D1A' }}
                >
                  {prog.title}
                </h3>
                <p className="text-[12.5px] leading-[1.68] font-normal mb-6" style={{ color: '#5F5A52' }}>
                  {prog.text}
                </p>
                <Link
                  to={prog.href}
                  className="text-[10px] uppercase tracking-[0.20em] font-normal"
                  style={{ color: '#B89A4F' }}
                >
                  Pogledaj program →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary trio — Cupping, Lomi, Kalabaš */}
        <div
          className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5"
          style={{ borderTop: '1px solid rgba(0,0,0,0.07)', paddingTop: '20px' }}
        >
          {secondaryPrograms.map((prog, i) => (
            <motion.div
              key={prog.href}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              viewport={{ once: true }}
            >
              <Link to={prog.href} className="block group">
                <div className="overflow-hidden" style={{ aspectRatio: '1/1' }}>
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <p
                  className="text-[11px] font-normal mt-3 leading-snug"
                  style={{ color: '#3D3A35' }}
                >
                  {prog.title}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
