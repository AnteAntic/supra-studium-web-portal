import { motion } from 'framer-motion';

const testimonials = [
  {
    text: 'Velik dio edukacije temelji se na vježbama koje se odmah mogu primijeniti u svakodnevnom radu.',
    attr: 'Bruna Prnjak, fizioterapeutkinja',
  },
  {
    text: 'Dobila sam puno više nego što sam očekivala od same edukacije.',
    attr: 'Aleksandra Aleks, polaznica',
  },
  {
    text: 'Osjećam veću sigurnost u radu, a klijenti mi sve više poklanjaju povjerenje.',
    attr: 'Irena Škarić, terapeutkinja',
  },
  {
    text: 'Ante nesebično dijeli znanje i objašnjava kompleksne stvari na jasan način.',
    attr: 'Alena Jurić, polaznica',
  },
];

export function HomeTestimonialsSection() {
  return (
    <section style={{ background: '#F7F3EE' }} className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#B89A4F' }}>
              Nakon edukacije
            </p>
            <div className="w-10 h-px mb-5" style={{ backgroundColor: 'rgba(184,154,79,0.28)' }} />
            <p className="text-[14px] leading-[1.75] font-normal" style={{ color: '#7A7570', maxWidth: '48ch' }}>
              Kratka iskustva terapeuta koji su završili edukaciju.
            </p>
          </motion.div>

          <div>
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: i * 0.07, ease: 'easeOut' }}
                viewport={{ once: true }}
                className={i > 0 ? 'mt-8 pt-7' : ''}
                style={i > 0 ? { borderTop: '1px solid rgba(0,0,0,0.07)' } : {}}
              >
                <p
                  className="font-playfair mb-2"
                  style={{
                    fontSize: i === 0 ? '1.18rem' : '1.13rem',
                    lineHeight: i === 0 ? '1.55' : '1.65',
                    color: i === 0 ? '#1F1D1A' : 'rgba(31,29,26,0.80)',
                  }}
                >
                  {item.text}
                </p>
                <p
                  className="text-[11px] uppercase tracking-[0.2em] font-normal"
                  style={{ color: 'rgba(31,29,26,0.40)' }}
                >
                  {item.attr}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
