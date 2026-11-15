import { motion } from 'framer-motion';
import { reveal } from './reveal';

const images = [
  {
    src: '/lovable-uploads/cmc-grupna-zastave.webp',
    caption: 'Međunarodni sudionici — različite države, isti standardi rada.',
  },
  {
    src: '/lovable-uploads/ante-sudac-lecce.jpg',
    caption: 'Međunarodna sudačka uloga na europskim natjecanjima.',
  },
  {
    src: '/lovable-uploads/ante-predavac-lecce.jpg',
    caption: 'Međunarodno predavanje na Holos World Congressu u Lecceu.',
  },
];

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-3 flex items-start gap-3">
      <div className="w-4 h-px mt-[0.7em] flex-shrink-0" style={{ backgroundColor: 'rgba(31,29,26,0.30)' }} />
      <p className="text-caption font-normal" style={{ color: '#5F5A52' }}>
        {children}
      </p>
    </div>
  );
}

export function HomeInternationalSection() {
  return (
    <section style={{ background: '#FAF8F4' }} className="py-20 md:py-32">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="grid md:grid-cols-12 gap-y-10 md:gap-x-8 items-end mb-14 md:mb-20">
          <motion.div {...reveal()} className="md:col-span-6">
            <p className="text-label uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#8a7436' }}>
              Međunarodni kontekst
            </p>
            <div className="w-10 h-px mb-8" style={{ backgroundColor: 'rgba(184,154,79,0.55)' }} />
            <h2 className="font-playfair font-semibold text-h2" style={{ color: '#1F1D1A' }}>
              Sudac. Edukator. Predstavnik struke.
            </h2>
          </motion.div>
          <motion.div {...reveal(0.1)} className="md:col-span-6 lg:col-span-5 lg:col-start-8">
            <p className="text-body-l font-normal mb-5" style={{ color: '#2B2823' }}>
              Ante Antić sudjeluje kao međunarodni sudac i predavač na stručnim događanjima u
              Hrvatskoj, Italiji i Bugarskoj, u kontekstu masaže, manualne terapije i integrirane
              medicine.
            </p>
            <p className="text-body-l font-normal" style={{ color: '#5F5A52' }}>
              Međunarodni kontekst škole razvija se kroz kontinuiranu suradnju s edukatorima,
              organizacijama i natjecanjima u Europi.
            </p>
          </motion.div>
        </div>

        {/* One dominant frame, two supporting frames in the same ratio */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-8">
          <motion.div {...reveal()} className="md:col-span-8">
            <div className="frame" style={{ aspectRatio: '3/2' }}>
              <img src={images[0].src} alt={images[0].caption} width={1440} height={959} loading="lazy" />
            </div>
            <Caption>{images[0].caption}</Caption>
          </motion.div>

          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6 content-start">
            {images.slice(1).map((img, i) => (
              <motion.div key={i} {...reveal(0.1 + i * 0.08)}>
                <div className="frame" style={{ aspectRatio: '3/2' }}>
                  <img
                    src={img.src}
                    alt={img.caption}
                    loading="lazy"
                    style={i === 0 ? { objectPosition: 'center 22%' } : undefined}
                  />
                </div>
                <Caption>{img.caption}</Caption>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
