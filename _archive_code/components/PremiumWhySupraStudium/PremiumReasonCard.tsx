import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PremiumReasonCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  background: string;
}

export const PremiumReasonCard = ({ icon: Icon, title, description, background }: PremiumReasonCardProps) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        y: -4
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative w-full max-w-[90%] mx-auto md:max-w-none h-[380px] md:h-[420px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl hover:shadow-primary/20 transition-all duration-500"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-black/40 backdrop-blur-[2px]" />
      
      {/* Gold hairline border */}
      <div className="absolute inset-0 rounded-3xl border border-primary/30 group-hover:border-primary/60 transition-all duration-500" />
      
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
      
      {/* Bottom gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-4 md:p-8">
        {/* Icon with shimmer animation */}
        <motion.div 
          className="w-20 h-20 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative overflow-hidden"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Icon 
            className="w-12 h-12 md:w-10 md:h-10 text-white relative z-10" 
            aria-label={title}
          />
          
          {/* Icon shimmer and pulse */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute inset-0 bg-primary/20 rounded-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        
        <h3 className="text-center md:text-left font-semibold text-white mb-4 font-inter drop-shadow-lg group-hover:text-primary-foreground transition-colors duration-300" style={{ fontSize: 'clamp(22px, 5vw, 36px)' }}>
          {title}
        </h3>
        
        <p className="text-center md:text-left text-white/95 leading-relaxed font-inter font-light drop-shadow-md group-hover:text-white/100 transition-colors duration-300 line-clamp-3 md:line-clamp-none">
          {description}
        </p>
      </div>
      
      {/* Focus ring for accessibility */}
      <div className="absolute inset-0 rounded-3xl ring-2 ring-primary ring-opacity-0 focus-within:ring-opacity-100 transition-all duration-300" />
    </motion.div>
  );
};