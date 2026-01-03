import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1]
    }
  })
};

export const SocialConnect = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-12 pt-8 md:pt-10 pb-16 md:pb-20 text-center relative">
      {/* Soft gradient background with golden tones */}
      <div 
        className="absolute inset-0 rounded-3xl"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(250,248,243,0.8) 50%, rgba(245,240,230,0.6) 100%)'
        }}
      />
      
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 rounded-3xl opacity-[0.02]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #C8A24A 0px, #C8A24A 1px, transparent 1px, transparent 20px)'
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        whileHover={{ y: -4 }}
        className="relative backdrop-blur-lg border rounded-3xl p-10 md:p-12 transition-all duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(250,248,243,0.8) 100%)',
          borderColor: 'rgba(200,162,74,0.25)',
          boxShadow: '0 8px 40px rgba(200,162,74,0.12), 0 2px 8px rgba(0,0,0,0.05), inset 0 1px 2px rgba(255,255,255,0.8)'
        }}
      >
        {/* Top shine reflection */}
        <div 
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(200,162,74,0.5), transparent)'
          }}
        />

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl md:text-4xl font-playfair text-[#1a1a1a] mb-3 font-bold tracking-tight relative inline-block after:content-[''] after:block after:w-16 after:h-[2px] after:bg-[#C8A24A] after:mx-auto after:mt-3"
        >
          Povežite se sa Supra Studiumom
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600/80 text-[17px] leading-relaxed max-w-xl mx-auto mt-6 mb-8"
        >
          Na jednom mjestu dijelimo provjerene tehnike, savjete i pristupe iz različitih grana manualne terapije – za vaš profesionalni rast i inspiraciju u radu.
        </motion.p>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-sm font-medium text-[#C8A24A] mb-6"
        >
          Prati nas na društvenim mrežama
        </motion.p>
        
        <div className="flex justify-center gap-x-6 mt-8">
          {/* Instagram */}
          <motion.a
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={iconVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.instagram.com/suprastudium"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Prati nas na Instagramu"
            className="group relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full transition-all duration-300 hover:shadow-md"
            style={{
              background: 'linear-gradient(135deg, #C8A24A, #B8943A)',
              boxShadow: '0 6px 20px rgba(200,162,74,0.3), inset 0 1px 2px rgba(255,255,255,0.3)'
            }}
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/20 transition-all duration-500" />
            <Instagram 
              className="relative z-10 w-8 h-8 md:w-10 md:h-10 text-white transition-transform duration-300 group-hover:scale-110" 
              strokeWidth={1.8}
            />
          </motion.a>

          {/* Facebook */}
          <motion.a
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={iconVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.facebook.com/profile.php?id=100078666409012"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pronađi nas na Facebooku"
            className="group relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full transition-all duration-300 hover:shadow-md"
            style={{
              background: 'linear-gradient(135deg, #C8A24A, #B8943A)',
              boxShadow: '0 6px 20px rgba(200,162,74,0.3), inset 0 1px 2px rgba(255,255,255,0.3)'
            }}
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/20 transition-all duration-500" />
            <Facebook 
              className="relative z-10 w-8 h-8 md:w-10 md:h-10 text-white transition-transform duration-300 group-hover:scale-110" 
              strokeWidth={1.8}
            />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};
