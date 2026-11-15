import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { reveal } from './reveal';

export function HomeFounderSection() {
  return (
    <section style={{ background: '#F4F1EA' }} className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-y-10 md:gap-x-8 items-center">

          {/* Image */}
          <motion.div {...reveal()} className="md:col-span-5">
            <div className="frame" style={{ aspectRatio: '4/5' }}>
              <img width={1400} height={1051}
                src="/lovable-uploads/ante-founder-portret.jpg"
                alt="Ante Antić — osnivač Supra Studium"
                style={{ objectPosition: 'center top' }}
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div {...reveal(0.1)} className="md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-7 flex flex-col">
            <p className="text-label uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#8a7436' }}>
              O osnivaču
            </p>
            <div className="w-10 h-px mb-8" style={{ backgroundColor: 'rgba(184,154,79,0.55)' }} />
            <h2 className="font-playfair font-semibold mb-7 text-h2" style={{ color: '#1F1D1A' }}>
              Ante Antić
            </h2>
            <p className="text-body-l font-normal mb-10" style={{ color: '#2B2823' }}>
              Supra Studium vodi Ante Antić, terapeut i edukator koji klinički rad, palpaciju
              i međunarodno iskustvo pretvara u praktične edukacije za terapeute.
            </p>
            <Link
              to="/o-ucilistu"
              className="press whitespace-nowrap text-label uppercase tracking-[0.22em] font-normal py-3.5 px-8 rounded-none self-start border border-[#1F1D1A]/20 text-[#1F1D1A]"
            >
              O učilištu
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
