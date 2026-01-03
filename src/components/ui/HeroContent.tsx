
"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import TextShimmer from './TextShimmer'

interface HeroContentProps {
  title: string
  subtitle: string
  description: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta: {
    text: string
    href: string
  }
  opacity: any
  isInView: boolean
}

const HeroContent: React.FC<HeroContentProps> = ({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  opacity,
  isInView
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <motion.div
      className="relative z-30 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center"
      style={{ opacity }}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Text readability background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-transparent rounded-3xl blur-3xl -z-10" />
      
      <motion.div variants={itemVariants}>
        <h2 className="text-lg sm:text-xl font-medium tracking-wide mb-4 text-white/90 drop-shadow-lg">
          {subtitle}
        </h2>
      </motion.div>

      <motion.div variants={itemVariants}>
        <div className="relative z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-transparent rounded-3xl blur-3xl -z-10" />
          <TextShimmer 
            className="font-playfair font-bold text-white drop-shadow-xl tracking-tight leading-none mb-8 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl [--base-gradient-color:#ffd700] [--base-color:#ffffff]"
            duration={2.5}
            spread={3}
            as="h1"
          >
            {title}
          </TextShimmer>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <div className="relative z-10">
          <p className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed mb-12 max-w-3xl mx-auto text-white/90 drop-shadow-lg">
            {description}
          </p>
        </div>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10"
      >
        <motion.div 
          whileHover={{ scale: 1.05, y: -3 }} 
          whileTap={{ scale: 0.98 }}
          className="group relative overflow-hidden w-full sm:w-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#a8894d] to-[#8b6f36] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-xl" />
          <Button
            size="lg"
            className="relative z-10 bg-[#a8894d] text-white hover:bg-[#8b6f36] px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#a8894d]/40 border-2 border-transparent w-full sm:w-auto flex items-center justify-center gap-3"
            onClick={() => {
              if (primaryCta.href.startsWith('#')) {
                const element = document.querySelector(primaryCta.href);
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              } else {
                window.open(primaryCta.href, '_self');
              }
            }}
          >
            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            <span className="transition-all duration-200 group-hover:tracking-wide">{primaryCta.text}</span>
          </Button>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05, y: -3 }} 
          whileTap={{ scale: 0.96 }}
          className="group relative overflow-hidden w-full sm:w-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#a8894d]/20 to-[#e6d6aa]/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg" />
          <Button
            variant="outline"
            size="lg"
            className="relative z-10 px-8 py-6 text-lg font-semibold rounded-full border-2 border-[#a8894d] bg-[#f3e5c0] text-[#3d2d0e] hover:bg-[#e6d6aa] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#a8894d]/30 w-full sm:w-auto flex items-center justify-center gap-3"
            onClick={() => {
              if (secondaryCta.href.startsWith('#')) {
                const element = document.querySelector(secondaryCta.href);
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              } else {
                window.open(secondaryCta.href, '_self');
              }
            }}
          >
            <Play className="h-5 w-5 transition-transform group-hover:scale-110" />
            <span className="transition-all duration-200 group-hover:tracking-wide">{secondaryCta.text}</span>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default HeroContent
