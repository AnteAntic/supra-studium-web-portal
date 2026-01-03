import React from 'react'
import { motion } from 'framer-motion'

interface GoldenWaveProps {
  variant?: 'top' | 'bottom'
  className?: string
}

const GoldenWave: React.FC<GoldenWaveProps> = ({ variant = 'top', className }) => {
  return (
    <div className={`absolute ${variant === 'top' ? 'top-0' : 'bottom-0'} left-0 w-full h-24 ${className}`}>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
        <path 
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
          fill="url(#goldGradient)" 
          opacity="0.6"
        />
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#B8860B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default GoldenWave