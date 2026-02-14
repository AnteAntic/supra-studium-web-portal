
"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface HeroBackgroundProps {
  backgroundType: 'image' | 'video' | 'gradient' | 'warm-gradient' | 'apple-gradient'
  backgroundSrc?: string
  overlayOpacity?: number
  theme: 'light' | 'dark'
  scrollY: any
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({
  backgroundType,
  backgroundSrc,
  overlayOpacity = 0.4,
  theme,
  scrollY
}) => {
  const [isLoading, setIsLoading] = useState(backgroundType !== 'gradient')
  const [mediaLoaded, setMediaLoaded] = useState(false)

  useEffect(() => {
    if (backgroundType === 'gradient' || backgroundType === 'warm-gradient' || backgroundType === 'apple-gradient') {
      setIsLoading(false)
      setMediaLoaded(true)
    }
  }, [backgroundType])

  const handleMediaLoad = () => {
    setMediaLoaded(true)
    setIsLoading(false)
  }

  const handleMediaError = () => {
    setIsLoading(false)
    setMediaLoaded(false)
  }

  const getGradientBackground = () => {
    switch (backgroundType) {
      case 'warm-gradient':
        return theme === 'dark'
          ? 'linear-gradient(135deg, #2d1810 0%, #4a2c1d 50%, #1a1a1a 100%)'
          : 'linear-gradient(135deg, #fef7ed 0%, #fed7aa 30%, #fdba74 70%, #fb923c 100%)'
      case 'apple-gradient':
        return theme === 'dark'
          ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 30%, #e2e8f0 70%, #cbd5e1 100%)'
      case 'gradient':
      default:
        return theme === 'dark'
          ? 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)) 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
    }
  }

  return (
    <>
      {/* Background Layer */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: scrollY, willChange: 'transform', transform: 'translateZ(0)' }}
      >
        {(backgroundType === 'gradient' || backgroundType === 'warm-gradient' || backgroundType === 'apple-gradient') && (
          <div 
            className="w-full h-full"
            style={{ background: getGradientBackground() }}
          />
        )}
        
        {backgroundType === 'image' && backgroundSrc && (
          <>
            <img
              src={backgroundSrc}
              alt=""
              className={`w-full h-full object-cover object-top transition-opacity duration-700 ${
                mediaLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                filter: 'brightness(0.9) contrast(1.1) saturate(1.2)',
              }}
              onLoad={handleMediaLoad}
              onError={handleMediaError}
              loading="eager"
            />
            {mediaLoaded && (
              <>
                {/* Primary gradient overlay for consistent brand colors */}
                <div className="absolute inset-0 bg-gradient-to-br from-supra-navy/80 via-supra-navy/60 to-supra-golden/20 z-10" />
                {/* Secondary overlay for depth */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 z-20"
                  style={{ opacity: overlayOpacity }}
                />
              </>
            )}
          </>
        )}
        
        {backgroundType === 'video' && backgroundSrc && (
          <>
            <video
              autoPlay
              muted
              loop
              playsInline
              className={`w-full h-full object-cover transition-opacity duration-700 ${
                mediaLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoadedData={handleMediaLoad}
              onError={handleMediaError}
            >
              <source src={backgroundSrc} type="video/mp4" />
            </video>
            {mediaLoaded && (
              <div 
                className="absolute inset-0 bg-black"
                style={{ opacity: overlayOpacity }}
              />
            )}
          </>
        )}
      </motion.div>

      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-background">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-foreground rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-foreground rounded-full animate-pulse delay-75"></div>
            <div className="w-2 h-2 bg-foreground rounded-full animate-pulse delay-150"></div>
          </div>
        </div>
      )}
    </>
  )
}

export default HeroBackground
