
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ReasonCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  background: string;
  index: number;
  current: number;
}

export const ReasonCard = ({ icon: Icon, title, description, background, index, current }: ReasonCardProps) => {
  return (
    <motion.div
      className={`transition-all duration-500 ${
        index === current ? 'scale-110 z-10' : 'scale-100 z-0'
      }`}
      whileHover={{ y: -8 }}
    >
      <div 
        className={`relative p-8 rounded-3xl border-0 h-[400px] overflow-hidden group transition-all duration-500 ${
          index === current 
            ? 'shadow-2xl shadow-primary/20' 
            : 'shadow-sm hover:shadow-xl hover:shadow-primary/5'
        }`}
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          imageRendering: 'crisp-edges',
        }}
      >
        {/* Lighter overlay for better contrast with new background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/45 to-black/65" />
        {/* Bottom overlay for text area */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end">
          <div className="w-16 h-16 bg-gradient-to-br from-primary/90 to-primary/70 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Icon className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-primary-foreground transition-colors duration-300 drop-shadow-lg">
            {title}
          </h3>
          <p className="text-white/95 leading-relaxed font-light drop-shadow-md">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
