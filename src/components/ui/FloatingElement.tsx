"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  delay?: number
  intensity?: 'subtle' | 'medium' | 'strong'
}

const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  className = "",
  delay = 0,
  intensity = 'medium'
}) => {
  const intensityConfigs = {
    subtle: { y: [-5, 5], duration: 4 },
    medium: { y: [-10, 10], duration: 3 },
    strong: { y: [-15, 15], duration: 2.5 }
  }

  const config = intensityConfigs[intensity]

  return (
    <motion.div
      className={`fixed right-8 z-30 pointer-events-none ${className}`}
      initial={{ opacity: 0, x: 50 }}
      animate={{ 
        opacity: 1, 
        x: 0,
        y: config.y
      }}
      transition={{
        opacity: { duration: 1, delay },
        x: { duration: 0.8, delay },
        y: {
          duration: config.duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: delay + 1
        }
      }}
    >
      {children}
    </motion.div>
  )
}

export default FloatingElement