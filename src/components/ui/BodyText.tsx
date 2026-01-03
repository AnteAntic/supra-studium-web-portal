"use client"

import React from 'react'
import { cn } from '@/lib/utils'

interface BodyTextProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  style?: React.CSSProperties
  maxLines?: number
}

function BodyText({
  children,
  className,
  as: Component = 'p',
  style,
  maxLines = 3
}: BodyTextProps) {
  return (
    <Component 
      className={cn(
        // Typography hierarchy - Body text/descriptions
        'text-[clamp(14px,1.5vw,18px)]',
        'leading-relaxed font-normal',
        // Line clamping for cards
        maxLines === 3 && 'line-clamp-3',
        className
      )}
      style={style}
    >
      {children}
    </Component>
  )
}

export default BodyText