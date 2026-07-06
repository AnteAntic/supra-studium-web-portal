import { motion } from 'framer-motion';

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

export function HomeInternationalSection() {
  return (
    <section style={{ background: '#FAF8F4' }} className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-6" style={{ color: '#B89A4F' }}>
                Međunarodni kontekst
              </p>
              <div className="w-10 h-px mb-8" style={{ backgroundColor: 'rgba(184,154,79,0.28)' }} />
              <h2
                className="font-playfair font-semibold leading-[1.22] text-[1.55rem] md:text-[1.75rem]"
                style={{ color: '#1F1D1A' }}
              >
                Sudac. Edukator. Predstavnik struke.
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="pt-2 md:pt-16"
            >
              <p className="text-[14px] leading-[1.75] font-normal mb-5" style={{ color: '#3D3A35' }}>
                Ante Antić sudjeluje kao međunarodni sudac i predavač na stručnim događanjima u
                Hrvatskoj, Italiji i Bugarskoj, u kontekstu masaže, manualne terapije i integrirane
                medicine.
              </p>
              <p className="text-[13px] leading-[1.70] font-normal" style={{ color: '#7A7570' }}>
                Međunarodni kontekst škole razvija se kroz kontinuiranu suradnju s edukatorima,
                organizacijama i natjecanjima u Europi.
              </p>
            </motion.div>
          </div>

          {/* Asymmetric image grid */}
          <div className="grid grid-cols-5 gap-4">
            {/* Primary — dominant left */}
            <motion.div
              className="col-span-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={images[0].src}
                  alt={images[0].caption}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 flex items-start gap-3">
                <div className="w-3 h-px mt-2 flex-shrink-0" style={{ backgroundColor: 'rgba(0,0,0,0.15)' }} />
                <p className="text-[11px] leading-[1.65] font-normal" style={{ color: '#7A7570' }}>
                  {images[0].caption}
                </p>
              </div>
            </motion.div>

            {/* Secondary pair — right column */}
            <div className="col-span-2 flex flex-col gap-4">
              {images.slice(1).map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-2 flex items-start gap-2">
                    <div className="w-2 h-px mt-2 flex-shrink-0" style={{ backgroundColor: 'rgba(0,0,0,0.12)' }} />
                    <p className="text-[10px] leading-[1.6] font-normal" style={{ color: '#7A7570' }}>
                      {img.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
