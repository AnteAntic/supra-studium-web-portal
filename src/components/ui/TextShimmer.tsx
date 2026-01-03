
"use client"

import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TextShimmerProps {
  children: string
  as?: React.ElementType
  className?: string
  duration?: number
  spread?: number
}

function TextShimmer({
  children,
  as: Component = 'p',
  className,
  duration = 2,
  spread = 2
}: TextShimmerProps) {
  const MotionComponent = motion(Component as any)
  const dynamicSpread = useMemo(() => {
    return children.length * spread
  }, [children, spread])
  
  return (
    <MotionComponent 
      className={cn(
        'relative inline-block',
        '[--base-color:#ffffff] [--base-gradient-color:#ffd700]',
        className
      )} 
      style={{
        color: 'var(--base-color)',
      } as React.CSSProperties}
    >
      {/* Base white text */}
      {children}
      
      {/* Golden shimmer overlay */}
      <motion.span
        className="absolute top-0 left-0 right-0 bottom-0 bg-[length:250%_100%,auto] pointer-events-none"
        initial={{
          backgroundPosition: '100% center'
        }} 
        animate={{
          backgroundPosition: '0% center'
        }} 
        transition={{
          repeat: Infinity,
          duration,
          ease: 'linear'
        }} 
        style={{
          '--spread': `${dynamicSpread}px`,
          backgroundImage: `linear-gradient(90deg, transparent calc(50% - var(--spread)), var(--base-gradient-color), transparent calc(50% + var(--spread)))`,
          backgroundRepeat: 'no-repeat',
          mixBlendMode: 'overlay',
          opacity: 0.8
        } as React.CSSProperties}
      >
        <span style={{
          color: 'transparent',
          backgroundImage: `linear-gradient(90deg, transparent calc(50% - var(--spread)), var(--base-gradient-color), transparent calc(50% + var(--spread)))`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          backgroundSize: '250% 100%',
          backgroundPosition: 'inherit',
          backgroundRepeat: 'no-repeat'
        } as React.CSSProperties}>
          {children}
        </span>
      </motion.span>
    </MotionComponent>
  )
}

export default TextShimmer
