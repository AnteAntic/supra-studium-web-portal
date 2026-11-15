import { motion } from 'framer-motion';
import { reveal } from './reveal';

export function HomeCredentialsSection() {
  return (
    <section style={{ background: '#F4F1EA' }} className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-y-12 md:gap-x-8 items-start">

          {/* Left — federation mark + recognition */}
          <motion.div {...reveal()} className="md:col-span-4 lg:col-span-5">
            <div className="mb-8">
              <img width={400} height={368}
                src="/lovable-uploads/fmtmnt-logo.png"
                alt="World Federation of Massage, Manual Therapy & Nuad Thai"
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-label uppercase tracking-[0.25em] font-normal mb-3" style={{ color: '#8a7436' }}>
              Međunarodna prepoznatost
            </p>
            <p className="text-body font-normal max-w-[22rem]" style={{ color: '#4A463F' }}>
              World Federation of Massage, Manual Therapy & Nuad Thai
            </p>
          </motion.div>

          {/* Right — recognition statement */}
          <motion.div {...reveal(0.1)} className="md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7">
            <div className="w-10 h-px mb-8" style={{ backgroundColor: 'rgba(184,154,79,0.55)' }} />
            <h2 className="font-playfair font-semibold mb-8 text-h2" style={{ color: '#1F1D1A' }}>
              Excellence National School.
            </h2>
            <p className="text-body-l font-normal mb-6" style={{ color: '#2B2823' }}>
              Supra Studium prepoznat je od World Federation of Massage, Manual Therapy &amp; Nuad Thai
              kao <em>Excellence National School</em>.
            </p>
            <p className="text-body-l font-normal mb-5" style={{ color: '#4A463F' }}>
              Za polaznike to znači da se edukacije razvijaju u međunarodnom stručnom kontekstu,
              uz povezanost s europskim natjecanjima, kongresima i edukatorima iz područja masaže,
              manualne terapije i Nuad Thai tradicije.
            </p>
            <p className="text-body font-normal" style={{ color: '#5F5A52' }}>
              Ovo priznanje ne mijenja nacionalne administrativne postupke, ali potvrđuje stručni
              standard škole i njezinu međunarodnu povezanost.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
