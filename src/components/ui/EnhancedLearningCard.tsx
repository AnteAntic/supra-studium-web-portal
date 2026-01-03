"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from './card'
import { ArrowRight, Lightbulb } from 'lucide-react'

interface EnhancedLearningCardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  delay?: number
  themeColor: 'gold' | 'blue' | 'teal' | 'purple' | 'orange' | 'green'
}

const themeConfigs = {
  gold: {
    glow: 'group-hover:shadow-[0_0_30px_rgba(224,180,92,0.4)]',
    overlay: 'group-hover:bg-gradient-to-br group-hover:from-amber-400/20 group-hover:to-yellow-500/20',
    radial: 'radial-gradient(circle at center, rgba(224,180,92,0.1) 0%, transparent 70%)',
    icon: 'text-amber-400'
  },
  blue: {
    glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]',
    overlay: 'group-hover:bg-gradient-to-br group-hover:from-blue-400/20 group-hover:to-cyan-500/20',
    radial: 'radial-gradient(circle at center, rgba(59,130,246,0.1) 0%, transparent 70%)',
    icon: 'text-blue-400'
  },
  teal: {
    glow: 'group-hover:shadow-[0_0_30px_rgba(20,184,166,0.4)]',
    overlay: 'group-hover:bg-gradient-to-br group-hover:from-teal-400/20 group-hover:to-cyan-500/20',
    radial: 'radial-gradient(circle at center, rgba(20,184,166,0.1) 0%, transparent 70%)',
    icon: 'text-teal-400'
  },
  purple: {
    glow: 'group-hover:shadow-[0_0_30px_rgba(147,51,234,0.4)]',
    overlay: 'group-hover:bg-gradient-to-br group-hover:from-purple-400/20 group-hover:to-indigo-500/20',
    radial: 'radial-gradient(circle at center, rgba(147,51,234,0.1) 0%, transparent 70%)',
    icon: 'text-purple-400'
  },
  orange: {
    glow: 'group-hover:shadow-[0_0_30px_rgba(251,146,60,0.4)]',
    overlay: 'group-hover:bg-gradient-to-br group-hover:from-orange-400/20 group-hover:to-red-500/20',
    radial: 'radial-gradient(circle at center, rgba(251,146,60,0.1) 0%, transparent 70%)',
    icon: 'text-orange-400'
  },
  green: {
    glow: 'group-hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]',
    overlay: 'group-hover:bg-gradient-to-br group-hover:from-green-400/20 group-hover:to-emerald-500/20',
    radial: 'radial-gradient(circle at center, rgba(34,197,94,0.1) 0%, transparent 70%)',
    icon: 'text-green-400'
  }
}

const EnhancedLearningCard: React.FC<EnhancedLearningCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  delay = 0,
  themeColor
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const theme = themeConfigs[themeColor]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.2 }
      }}
      className={`group cursor-pointer ${theme.glow} transition-all duration-500`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/10 backdrop-blur-md relative">
        {/* Dynamic lighting spotlight */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: theme.radial }}
        />
        
        {/* Inset shadow for premium depth */}
        <div className="absolute inset-0 shadow-[inset_0_2px_20px_rgba(0,0,0,0.05)] group-hover:shadow-[inset_0_2px_20px_rgba(0,0,0,0.1)] transition-all duration-500 rounded-lg" />
        
        <div className="relative h-48 overflow-hidden">
          <motion.img 
            src={imageSrc} 
            alt={imageAlt} 
            className="w-full h-full object-cover transition-all duration-500"
            animate={isHovered ? { 
              scale: 1.1, 
              x: 8 
            } : { 
              scale: 1, 
              x: 0 
            }}
          />
          
          {/* Base overlay */}
          <div className="absolute inset-0 bg-black/30 transition-all duration-500" />
          
          {/* Thematic overlay on hover */}
          <motion.div 
            className={`absolute inset-0 ${theme.overlay} transition-all duration-500 opacity-0 group-hover:opacity-100`}
          />
          
          {/* Content overlay with enhanced animations */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <motion.h3 
              className="font-inter font-bold text-lg text-white mb-2 drop-shadow-lg"
              initial={{ opacity: 1, y: 0 }}
              animate={isHovered ? { 
                opacity: 1, 
                y: -5 
              } : { 
                opacity: 1, 
                y: 0 
              }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>
            
            <motion.p 
              className="text-white/90 text-sm drop-shadow-lg leading-relaxed"
              initial={{ opacity: 0.9, y: 10 }}
              animate={isHovered ? { 
                opacity: 1, 
                y: 0 
              } : { 
                opacity: 0.9, 
                y: 10 
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {description}
            </motion.p>
            
            {/* CTA Arrow that appears on hover */}
            <motion.div
              className="flex items-center mt-3"
              initial={{ opacity: 0, x: -20 }}
              animate={isHovered ? { 
                opacity: 1, 
                x: 0 
              } : { 
                opacity: 0, 
                x: -20 
              }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <ArrowRight className={`w-4 h-4 ${theme.icon} mr-2`} />
              <span className="text-white text-sm font-medium">Saznaj više</span>
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default EnhancedLearningCard