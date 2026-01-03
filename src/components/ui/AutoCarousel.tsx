import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock } from 'lucide-react';

const AutoCarousel: React.FC = () => {
  const courses = [
    {
      title: "👉 TEČAJ: MANUALNA TERAPIJA",
      description: "Sveobuhvatan pristup biomehanici i rehabilitaciji tijela – tehnike koje vraćaju funkciju, snagu i pokret.",
      image: "/lovable-uploads/111a8a8b-40aa-41c4-a81a-32f6a3147eac.png",
      duration: "3 dana",
      level: "Napredni",
      tag: "🆕",
      tooltip: "Najtraženiji seminar - kombinira teoriju i praksu manualne terapije"
    },
    {
      title: "👉 CROSS FRICTION I FUNKCIONALNA MASAŽA",
      description: "Duboke tehnike za brzo oslobađanje fascija i vraćanje pokretljivosti – specijalizirane vještine za kronične probleme.",
      image: "/lovable-uploads/16c03686-4788-416a-83e7-8e121cbb457a.png",
      duration: "2 dana",
      level: "Srednji",
      tag: "Popularno",
      tooltip: "Napredne tehnike za rješavanje kroničnih tenzija i ograničenja pokreta"
    },
    {
      title: "👉 TEČAJ: LOMI LOMI MASAŽA",
      description: "Tradicionalna havajska tehnika za duboku relaksaciju i energetski reset – iskustvo koje obnavlja tijelo i duh.",
      image: "/lovable-uploads/2051607b-9393-4092-9c89-e89edcbfcaf1.png",
      duration: "2 dana",
      level: "Početni",
      tag: "Relax",
      tooltip: "Holistički pristup masaži koji balansira tijelo i um"
    },
    {
      title: "👉 CUPPING TERAPIJA",
      description: "Suvremena vakuum tehnika za dekompresiju mišića, bolju cirkulaciju i brži oporavak.",
      image: "/lovable-uploads/3c90594f-1db5-40f4-927b-2b14f688f0cb.png",
      duration: "1 dan",
      level: "Početni",
      tag: "Regeneracija",
      tooltip: "Inovativne cupping tehnike za sportsku i rehabilitaciju"
    },
    {
      title: "KALABAŠ MASAŽA",
      hook: "Budi među prvima u Hrvatskoj koji primjenjuju tradicionalnu afričku Calabash masažu",
      description: "",
      image: "/lovable-uploads/d1493b6f-7f73-44e3-881b-888eee6d0f32.png",
      duration: "2 dana",
      level: "Početni",
      tag: "Exotic Relax",
      tooltip: "Budi među prvima u Hrvatskoj koji primjenjuju tradicionalnu afričku Calabash masažu"
    },
    {
      title: "SOULSCAN – Umjetnost intuitivnog čitanja duše",
      hook: "Jedinstvena metoda nastala iz 20+ godina iskustva rada s tijelom i intuicijom",
      description: "",
      image: "/lovable-uploads/a4410e33-bd4e-4e8d-8ffc-3c948fe596c2.png",
      duration: "3 dana",
      level: "Napredni",
      tag: "Soul Work",
      tooltip: "Dubinska transformacija terapeuta kroz intuitivno čitanje duše",
      isExclusive: true
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length);
  }, [courses.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + courses.length) % courses.length);
  }, [courses.length]);

  // Autoplay effect
  useEffect(() => {
    if (!isHovered && isPlaying) {
      const interval = setInterval(nextSlide, 3500); // 3.5 seconds
      return () => clearInterval(interval);
    }
  }, [isHovered, isPlaying, nextSlide]);

  // Calculate visible cards (show 3 at a time on desktop, 1 on mobile)
  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % courses.length;
      visibleCards.push({ ...courses[index], originalIndex: index });
    }
    return visibleCards;
  };

  return (
    <div className="relative">
      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#B9975B]/20 backdrop-blur-sm border border-[#B9975B]/30 rounded-full flex items-center justify-center hover:bg-[#B9975B]/40 hover:scale-110 transition-all duration-300 group"
      >
        <ArrowRight className="h-6 w-6 text-[#B9975B] rotate-180 group-hover:animate-pulse" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#B9975B]/20 backdrop-blur-sm border border-[#B9975B]/30 rounded-full flex items-center justify-center hover:bg-[#B9975B]/40 hover:scale-110 transition-all duration-300 group"
      >
        <ArrowRight className="h-6 w-6 text-[#B9975B] group-hover:animate-pulse" />
      </button>

      {/* Carousel container */}
      <div 
        className="px-16 mb-16"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex gap-8 transition-transform duration-500 ease-in-out">
          {getVisibleCards().map((course, index) => (
            <motion.div
              key={`${course.originalIndex}-${currentIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative min-w-[320px] flex-1"
            >
              {/* Micro-tag */}
              <div className="absolute -top-2 -right-2 z-20">
                <Badge className="bg-[#D4AF37] text-black font-bold text-xs px-2 py-1 shadow-lg">
                  {course.tag}
                </Badge>
              </div>
              
              {/* Exclusive badge */}
              {course.isExclusive && (
                <div className="absolute -top-2 -left-2 z-20">
                  <Badge className="bg-[#d9b67b] text-white font-semibold text-xs px-3 py-1 rounded-full shadow-lg animate-pulse">
                    Ekskluzivno
                  </Badge>
                </div>
              )}
              
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-[#B9975B]/50 rounded-xl overflow-hidden transition-all duration-400 hover:shadow-[0_0_12px_rgba(185,151,91,0.4)] hover:scale-[1.03] h-[420px] ease-in-out group/card">
                <div className="relative overflow-hidden group/image">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 filter sepia-[30%] brightness-105 contrast-105 saturate-110" 
                    style={{ filter: 'sepia(25%) saturate(120%) brightness(105%) contrast(105%) hue-rotate(15deg)' }}
                    title={course.tooltip} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-black/30"></div>
                  
                  {/* Tooltip overlay on hover */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <p className="text-white text-sm text-center leading-relaxed">
                      {course.tooltip}
                    </p>
                  </div>
                  
                  {/* Level badge */}
                  <Badge className="absolute top-4 right-4 bg-[#B9975B] text-black font-semibold">
                    {course.level}
                  </Badge>
                </div>
                
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-[#B9975B] mb-2 group-hover/card:text-white transition-colors duration-300" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {course.title}
                  </h3>
                  
                  {course.hook && (
                    <h4 className="text-sm font-semibold text-white/90 mb-3 leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {course.hook}
                    </h4>
                  )}
                  
                  <p className="text-white/70 mb-6 leading-relaxed text-sm flex-grow" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-[#B9975B]">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm font-medium">{course.duration}</span>
                    </div>
                    
                    <motion.div whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(185, 151, 91, 0.6), 0 0 40px rgba(185, 151, 91, 0.3)" }} whileTap={{ scale: 0.95 }}>
                      <Button variant="ghost" size="sm" className="bg-gradient-to-r from-[#B9975B] to-[#e2c789] text-black hover:text-black hover:from-[#e2c789] hover:to-[#B9975B] rounded-md px-5 py-2 font-semibold group/btn transition-all duration-300 relative overflow-hidden">
                        <span className="relative z-10">Pogledaj više</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                        <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" />
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoCarousel;