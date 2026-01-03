"use client"

import React from 'react'
import { cn } from '@/lib/utils'

interface CardTitleProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  style?: React.CSSProperties
}

function CardTitle({
  children,
  className,
  as: Component = 'h3',
  style
}: CardTitleProps) {
  return (
    <Component 
      className={cn(
        // Typography hierarchy - Cards/smaller subtitles (H3/H4)
        'text-[clamp(18px,2.5vw,22px)]',
        'leading-tight tracking-tight font-semibold',
        // Centered alignment
        'text-center',
        className
      )}
      style={style}
    >
      {children}
    </Component>
  )
}

export default CardTitle