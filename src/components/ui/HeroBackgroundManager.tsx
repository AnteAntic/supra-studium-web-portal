"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Palette, Image, Wand2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import BackgroundImageProcessor from './BackgroundImageProcessor'

interface HeroBackgroundManagerProps {
  onBackgroundChange?: (type: string, src?: string) => void
  className?: string
}

const HeroBackgroundManager: React.FC<HeroBackgroundManagerProps> = ({
  onBackgroundChange,
  className = ""
}) => {
  const [selectedBackground, setSelectedBackground] = useState('warm-gradient')
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null)

  const backgroundOptions = [
    {
      id: 'warm-gradient',
      name: 'Warm Gradient',
      description: 'Soft, welcoming warm tones',
      preview: 'linear-gradient(135deg, #fef7ed 0%, #fed7aa 30%, #fdba74 70%, #fb923c 100%)'
    },
    {
      id: 'apple-gradient',
      name: 'Apple Clean',
      description: 'Minimal, sophisticated look',
      preview: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 30%, #e2e8f0 70%, #cbd5e1 100%)'
    },
    {
      id: 'gradient',
      name: 'Classic',
      description: 'Standard clean gradient',
      preview: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
    }
  ]

  const handleBackgroundSelect = (backgroundId: string) => {
    setSelectedBackground(backgroundId)
    onBackgroundChange?.(backgroundId)
  }

  const handleProcessedImage = (imageUrl: string) => {
    setProcessedImageUrl(imageUrl)
    onBackgroundChange?.('image', imageUrl)
  }

  return (
    <div className={`space-y-6 ${className}`}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5" />
            Hero Background Manager
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="gradients" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="gradients" className="flex items-center gap-2">
                <Palette className="h-4 w-4" />
                Gradients
              </TabsTrigger>
              <TabsTrigger value="images" className="flex items-center gap-2">
                <Image className="h-4 w-4" />
                Images
              </TabsTrigger>
            </TabsList>

            <TabsContent value="gradients" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {backgroundOptions.map((option) => (
                  <motion.div
                    key={option.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant={selectedBackground === option.id ? "default" : "outline"}
                      className="w-full h-auto p-4 flex flex-col items-center space-y-3"
                      onClick={() => handleBackgroundSelect(option.id)}
                    >
                      <div
                        className="w-full h-16 rounded-md border"
                        style={{ background: option.preview }}
                      />
                      <div className="text-center">
                        <div className="font-medium">{option.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {option.description}
                        </div>
                      </div>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="images" className="space-y-4">
              <BackgroundImageProcessor
                onProcessedImage={handleProcessedImage}
              />
              
              {processedImageUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-2 text-sm font-medium text-green-600">
                    <Wand2 className="h-4 w-4" />
                    Background removed successfully!
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Your processed image is now being used as the hero background.
                  </p>
                </motion.div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

export default HeroBackgroundManager