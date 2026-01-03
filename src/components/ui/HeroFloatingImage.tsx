"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface HeroFloatingImageProps {
  floatingImage: string
  floatingImagePosition: 'left' | 'right' | 'center'
}

const HeroFloatingImage: React.FC<HeroFloatingImageProps> = ({
  floatingImage,
  floatingImagePosition
}) => {
  const getPositionClasses = () => {
    switch (floatingImagePosition) {
      case 'left':
        return 'left-8 top-1/2 -translate-y-1/2'
      case 'right':
        return 'right-8 top-1/2 -translate-y-1/2'
      case 'center':
        return 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
      default:
        return 'right-8 top-1/2 -translate-y-1/2'
    }
  }

  return (
    <motion.div
      className={`absolute z-10 hidden lg:block ${getPositionClasses()}`}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
    >
      <img
        src={floatingImage}
        alt=""
        className="max-w-xs max-h-96 object-contain drop-shadow-2xl"
      />
    </motion.div>
  )
}

export default HeroFloatingImage