import { motion } from 'framer-motion';
import { reveal } from './reveal';

export function HomeERPSSection() {
  return (
    <section style={{ background: '#FAF8F4' }} className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div {...reveal()}>
          <p className="text-label uppercase tracking-[0.28em] font-normal mb-5" style={{ color: '#8a7436' }}>
            e-Radna knjižica
          </p>
          <div className="w-10 h-px mb-8" style={{ backgroundColor: 'rgba(184,154,79,0.55)' }} />

          <div className="grid md:grid-cols-12 gap-y-8 md:gap-x-8 items-start">
            <div className="md:col-span-6">
              <h2
                className="font-playfair font-semibold text-h2"
                style={{ color: '#1F1D1A', textWrap: 'balance' } as React.CSSProperties}
              >
                Edukacija dokumentirana i formalno evidentirana.
              </h2>
            </div>
            <div className="md:col-span-6 lg:col-span-5 lg:col-start-8 md:pt-2">
              <p className="text-body-l font-normal mb-5" style={{ color: '#2B2823' }}>
                Pohađanje programa može se evidentirati u e-radnoj knjižici pod kategorijom
                dodatnog obrazovanja, sukladno dostupnoj dokumentaciji i primjenjivom
                administrativnom postupku.
              </p>
              <p className="text-body font-normal" style={{ color: '#5F5A52' }}>
                Supra Studium je registrirano učilište za obrazovanje odraslih. Po završetku
                programa polaznici dobivaju potvrdu s urudžbenim brojem, klasom i pečatom ustanove,
                koja zadovoljava uvjete za evidentiranje u ERPS.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
