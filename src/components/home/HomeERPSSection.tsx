import { motion } from 'framer-motion';

export function HomeERPSSection() {
  return (
    <section style={{ background: '#FAF8F4' }} className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-5" style={{ color: '#B89A4F' }}>
              e-Radna knjižica
            </p>
            <div className="w-10 h-px mb-8" style={{ backgroundColor: 'rgba(184,154,79,0.28)' }} />

            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
              <div>
                <h2
                  className="font-playfair font-semibold leading-[1.25] text-[1.35rem] md:text-[1.5rem] mb-5"
                  style={{ color: '#1F1D1A', textWrap: 'balance' } as React.CSSProperties}
                >
                  Edukacija dokumentirana i formalno evidentirana.
                </h2>
              </div>
              <div>
                <p className="text-[13.5px] leading-[1.75] font-normal mb-5" style={{ color: '#3D3A35' }}>
                  Pohađanje programa može se evidentirati u e-radnoj knjižici pod kategorijom
                  dodatnog obrazovanja, sukladno dostupnoj dokumentaciji i primjenjivom
                  administrativnom postupku.
                </p>
                <p className="text-[12px] leading-[1.68] font-normal" style={{ color: '#7A7570' }}>
                  Supra Studium je registrirano učilište za obrazovanje odraslih. Po završetku
                  programa polaznici dobivaju potvrdu s urudžbenim brojem, klasom i pečatom ustanove,
                  koja zadovoljava uvjete za evidentiranje u ERPS.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
