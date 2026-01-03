
"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const DynamicTextRotation = () => {
  const phrases = [
    "Za fizioterapeute.",
    "Za lječnike.", 
    "Za kineziterapeute.",
    "Za kineziologe.",
    "Za masere.",
    "Za medicinske sestre.",
    "Za radne terapeute.",
    "Za studente.",
    "Za terapeute koji žele više od tehnike."
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length)
    }, 2500)
    
    return () => clearInterval(interval)
  }, [phrases.length])

  return (
    <div className="text-center">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-sm md:text-base lg:text-lg font-medium text-[#333] tracking-wide flex items-center"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-2 flex-shrink-0"></span>
          {phrases[currentIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

export default DynamicTextRotation
