import { motion } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';

export const FeelHealFestivalSection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white via-[#fdfaf5] to-white">
      {/* Diagonal Background Pattern */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #d4af37 0px,
            #d4af37 1px,
            transparent 1px,
            transparent 20px
          )`,
          opacity: 0.02
        }}
      />

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Main Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
              Supra Studium ponosno podržava Feel&Heal Festival
            </h2>
            <p className="italic text-[#B9975B] text-lg md:text-xl mb-4">
              🌿 Festival dodira koji mijenja terapijsku scenu
            </p>
          </div>

          {/* Content Layout */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <figure>
                <img 
                  src="/lovable-uploads/feel-heal-festival.jpg" 
                  alt="Feel & Heal Festival - Croatian Massage Championship pobjednici" 
                  className="rounded-xl shadow-lg object-cover w-full max-w-xl mx-auto lg:mx-0 hover:scale-[1.01] hover:shadow-2xl transition-all duration-300"
                />
                <figcaption className="text-sm md:text-base text-neutral-500 italic text-center mt-3">
                  Naš Feel & Heal tim – terapeuti iz cijelog svijeta, ujedinjeni dodirom.
                </figcaption>
              </figure>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-6">
                Feel & Heal Festival je prvo službeno prvenstvo u masaži i manualnoj terapiji u Hrvatskoj, koje okuplja terapeute, masere i stručnjake iz cijelog svijeta.
                Festival slavi moć dodira kroz radionice, demonstracije i natjecanja, stvarajući prostor za osobni i profesionalni rast.
              </p>
              
              <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-8">
                Događaj se održava pod pokroviteljstvom <strong>Svjetske federacije za masažu, manualnu terapiju i Nuad Thai</strong>, čime dobiva međunarodnu težinu i vjerodostojnost.
                <strong> Supra Studium s ponosom sudjeluje kao glavni edukacijski partner</strong>, podržavajući viziju podizanja struke na novu razinu.
              </p>

              {/* Main CTA Button */}
              <div className="mt-8 mb-6">
                <a 
                  href="https://feel-heal-festival-6k1kkp5.gamma.site/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-[#B9975B] text-white text-base font-medium rounded-full px-6 py-3 hover:bg-[#a88544] shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Saznaj više o Feel&Heal Festivalu
                </a>
              </div>

              {/* Social Media Links */}
              <div className="flex flex-col md:flex-row items-center md:items-start justify-center lg:justify-start gap-4 mt-6">
                <span className="font-medium text-neutral-700 text-sm">Prati nas:</span>
                <div className="flex items-center gap-4">
                  <a 
                    href="https://www.facebook.com/p/Croatian-Massage-Championship-61567846631122/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-600 hover:text-[#B9975B] transition-colors duration-300 text-sm"
                    aria-label="Feel & Heal Festival na Facebooku"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Facebook</span>
                  </a>
                  <span className="text-neutral-400">|</span>
                  <a 
                    href="https://www.instagram.com/croatian.massage.championship/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-600 hover:text-[#B9975B] transition-colors duration-300 text-sm"
                    aria-label="Feel & Heal Festival na Instagramu"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};