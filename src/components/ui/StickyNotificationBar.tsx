import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface StickyNotificationBarProps {
  message: string;
  ctaText: string;
  ctaLink: string;
}

export const StickyNotificationBar: React.FC<StickyNotificationBarProps> = ({
  message,
  ctaText,
  ctaLink,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after scrolling 100px down
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-[#FFF8E7] shadow-lg"
          style={{ marginTop: '64px' }} // Adjust based on your header height
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-[#111] text-[15px] md:text-[16px] font-semibold text-center sm:text-left">
                {message}
              </p>
              <Button
                size="sm"
                className="bg-white text-[#D4AF37] border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all duration-300 font-semibold whitespace-nowrap"
                asChild
              >
                <a href={ctaLink} target="_blank" rel="noopener noreferrer">
                  {ctaText}
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
