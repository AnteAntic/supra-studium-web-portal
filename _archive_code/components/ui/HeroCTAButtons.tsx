
"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, PlayCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const HeroCTAButtons = () => {
  const navigate = useNavigate()
  
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-4 sm:flex-row sm:gap-6">
      {/* Primary CTA Button - "Istražite Tečajeve" */}
      <motion.div 
        whileHover={{ scale: 1.05, y: -3 }} 
        whileTap={{ scale: 0.98 }}
        className="group relative overflow-hidden w-full sm:w-auto"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#B9975B] to-[#9d7f47] rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-xl" />
        <Button 
          size="lg" 
          className="relative z-10 bg-[#B9975B] text-white hover:bg-[#9d7f47] px-6 py-3 font-bold rounded-xl transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#B9975B]/40 border-2 border-transparent w-full sm:w-auto flex items-center justify-center gap-3 text-base" 
          onClick={() => {
            const element = document.getElementById('ekskluzivne-edukacije')
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          <GraduationCap className="h-5 w-5" />
          <span className="transition-all duration-200 group-hover:tracking-wide">Istražite Tečajeve</span>
        </Button>
      </motion.div>

      {/* Secondary CTA Button - "Video Akademija" */}
      <motion.div 
        whileHover={{ scale: 1.05, y: -3 }} 
        whileTap={{ scale: 0.96 }}
        className="group relative overflow-hidden w-full sm:w-auto"
      >
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#B9975B]/20 to-white/30 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg" />
        <Button 
          variant="outline" 
          size="lg" 
          className="relative z-10 px-6 py-3 font-bold rounded-xl border-2 border-[#B9975B] bg-white/90 text-[#B9975B] hover:bg-white hover:text-[#9d7f47] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#B9975B]/30 w-full sm:w-auto flex items-center justify-center gap-3 text-base backdrop-blur-sm" 
          onClick={() => navigate('/video-akademija')}
        >
          <PlayCircle className="h-5 w-5" />
          <span className="transition-all duration-200 group-hover:tracking-wide">Video Akademija</span>
        </Button>
      </motion.div>
    </div>
  )
}

export default HeroCTAButtons
