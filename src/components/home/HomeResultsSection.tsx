import { motion } from 'framer-motion';

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
];

export function HomeResultsSection() {
  return (
    <section style={{ background: '#F4F1EA' }} className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#B89A4F' }}>
                Rezultati polaznika
              </p>
              <div className="w-10 h-px mb-8" style={{ backgroundColor: 'rgba(184,154,79,0.28)' }} />
              <h2
                className="font-playfair font-semibold leading-[1.22] text-[1.45rem] md:text-[1.65rem]"
                style={{ color: '#1F1D1A' }}
              >
                Polaznici koji nastupaju. I osvajaju.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="pt-2 md:pt-14"
            >
              <p className="text-[13.5px] leading-[1.75] font-normal mb-10" style={{ color: '#3D3A35' }}>
                Polaznici Supra Studium edukacija sudjeluju i osvajaju priznanja na stručnim
                natjecanjima iz masaže i manualne terapije.
              </p>

              {/* TODO: add medal / podium imagery */}
              <div className="space-y-0">
                {alumni.map((name, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.04 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 py-3"
                    style={{
                      borderBottom: i < alumni.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                    }}
                  >
                    <span
                      className="text-[9px] font-normal tabular-nums"
                      style={{ color: 'rgba(184,154,79,0.60)', minWidth: '20px' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="font-playfair text-[1rem] font-normal leading-none"
                      style={{ color: '#1F1D1A' }}
                    >
                      {name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
