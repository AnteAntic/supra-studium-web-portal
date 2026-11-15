import { motion } from 'framer-motion';
import { reveal } from './reveal';

const alumni = [
  'Peter Putar',
  'Goran Hudoletnjak',
  'Zlatko Pankretić',
  'Sanja Bilić',
  'Branka Bašić',
  'Tatjana Drofenik',
  'Dalibor Dvoraček',
  'Andreas Živković',
  'Mihael Besten',
  'Sandra Dragaš',
];

export function HomeResultsSection() {
  return (
    <section style={{ background: '#F4F1EA' }} className="py-20 md:py-28">
      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-12 gap-y-8 md:gap-x-8 items-end mb-12 md:mb-16">
          <motion.div {...reveal()} className="md:col-span-7">
            <p className="text-label uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#8a7436' }}>
              Rezultati polaznika
            </p>
            <div className="w-10 h-px mb-8" style={{ backgroundColor: 'rgba(184,154,79,0.55)' }} />
            <h2 className="font-playfair font-semibold text-h2" style={{ color: '#1F1D1A' }}>
              Polaznici koji nastupaju. I osvajaju.
            </h2>
          </motion.div>

          <motion.div {...reveal(0.1)} className="md:col-span-5 lg:col-span-4 lg:col-start-9">
            <p className="text-body-l font-normal" style={{ color: '#2B2823' }}>
              Polaznici Supra Studium edukacija sudjeluju i osvajaju priznanja na stručnim
              natjecanjima iz masaže i manualne terapije.
            </p>
          </motion.div>
        </div>

        {/* Index of names — numerals carry the rhythm */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 md:gap-x-8" style={{ borderTop: '1px solid rgba(31,29,26,0.16)' }}>
          {alumni.map((name, i) => (
            <motion.div
              key={name}
              {...reveal(i * 0.04)}
              className="flex flex-col gap-2 py-6 md:py-8"
              style={{ borderBottom: '1px solid rgba(31,29,26,0.10)' }}
            >
              <span
                className="font-playfair text-h2 font-normal tabular-nums leading-none"
                style={{ color: 'rgba(138,116,54,0.55)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-playfair text-h3 font-normal" style={{ color: '#1F1D1A' }}>
                {name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
