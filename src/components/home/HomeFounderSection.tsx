import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function HomeFounderSection() {
  return (
    <section style={{ background: '#FAF8F4' }} className="py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden" style={{ aspectRatio: '4/5' }}>
                <img width={1400} height={1051}
                  src="/lovable-uploads/ante-founder-portret.jpg"
                  alt="Ante Antić — osnivač Supra Studium"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center md:pt-8"
            >
              <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#B89A4F' }}>
                O osnivaču
              </p>
              <div className="w-10 h-px mb-8" style={{ backgroundColor: 'rgba(184,154,79,0.28)' }} />
              <h2
                className="font-playfair font-semibold leading-[1.25] text-[1.4rem] md:text-[1.6rem] mb-6"
                style={{ color: '#1F1D1A' }}
              >
                Ante Antić
              </h2>
              <p className="text-[14px] leading-[1.78] font-normal mb-10" style={{ color: '#3D3A35' }}>
                Supra Studium vodi Ante Antić, terapeut i edukator koji klinički rad, palpaciju
                i međunarodno iskustvo pretvara u praktične edukacije za terapeute.
              </p>
              <Link
                to="/o-ucilistu"
                className="text-[10px] uppercase tracking-[0.22em] font-normal py-3 px-8 rounded-none self-start transition-colors duration-300"
                style={{ border: '1px solid rgba(0,0,0,0.14)', color: '#3D3A35' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(184,154,79,0.10)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,154,79,0.40)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.14)';
                }}
              >
                O učilištu
              </Link>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
