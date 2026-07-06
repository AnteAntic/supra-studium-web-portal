import { motion } from 'framer-motion';

export function HomeCredentialsSection() {
  return (
    <section style={{ background: '#F4F1EA' }} className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          <div className="grid md:grid-cols-3 gap-12 md:gap-16 items-start">

            {/* Left — FMTMNT logo + recognition */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="md:col-span-1"
            >
              <div className="mb-8">
                <img width={400} height={368}
                  src="/lovable-uploads/fmtmnt-logo.png"
                  alt="World Federation of Massage, Manual Therapy & Nuad Thai"
                  className="w-28 h-28 object-contain"
                  loading="lazy"
                />
              </div>
              <p className="text-[9.5px] uppercase tracking-[0.25em] font-normal mb-2" style={{ color: '#B89A4F' }}>
                Međunarodna prepoznatost
              </p>
              <p className="text-[12px] leading-[1.65] font-normal" style={{ color: '#5F5A52' }}>
                World Federation of Massage, Manual Therapy & Nuad Thai
              </p>
            </motion.div>

            {/* Center — main recognition statement */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <div className="w-10 h-px mb-8" style={{ backgroundColor: 'rgba(184,154,79,0.35)' }} />
              <h2
                className="font-playfair font-semibold leading-[1.25] mb-6 text-[1.45rem] md:text-[1.65rem]"
                style={{ color: '#1F1D1A' }}
              >
                Excellence National School.
              </h2>
              <p className="text-[14px] leading-[1.75] font-normal mb-6" style={{ color: '#3D3A35' }}>
                Supra Studium prepoznat je od World Federation of Massage, Manual Therapy &amp; Nuad Thai
                kao <em>Excellence National School</em>.
              </p>
              <p className="text-[13px] leading-[1.72] font-normal mb-5" style={{ color: '#5F5A52' }}>
                Za polaznike to znači da se edukacije razvijaju u međunarodnom stručnom kontekstu,
                uz povezanost s europskim natjecanjima, kongresima i edukatorima iz područja masaže,
                manualne terapije i Nuad Thai tradicije.
              </p>
              <p className="text-[12px] leading-[1.68] font-normal" style={{ color: '#7A7570' }}>
                Ovo priznanje ne mijenja nacionalne administrativne postupke, ali potvrđuje stručni
                standard škole i njezinu međunarodnu povezanost.
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
