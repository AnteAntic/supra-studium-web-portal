"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

interface HeroScrollIndicatorProps {
  showScrollIndicator: boolean
}

const HeroScrollIndicator: React.FC<HeroScrollIndicatorProps> = ({
  showScrollIndicator
}) => {
  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleScrollClick()
    }
  }

  if (!showScrollIndicator) return null

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="cursor-pointer"
        onClick={handleScrollClick}
        role="button"
        tabIndex={0}
        aria-label="Scroll to next section"
        onKeyDown={handleKeyDown}
      >
        <ArrowDown className="h-6 w-6 opacity-60 hover:opacity-100 transition-opacity" />
      </motion.div>
    </motion.div>
  )
}

export default HeroScrollIndicator