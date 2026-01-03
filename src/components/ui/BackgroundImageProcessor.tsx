"use client"

import React, { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Upload, Download, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { removeBackground, loadImage } from '@/utils/backgroundRemoval'

interface BackgroundImageProcessorProps {
  onProcessedImage?: (imageUrl: string) => void
  className?: string
}

const BackgroundImageProcessor: React.FC<BackgroundImageProcessorProps> = ({
  onProcessedImage,
  className = ""
}) => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [originalImage, setOriginalImage] = useState<string | null>(null)
  const [processedImage, setProcessedImage] = useState<string | null>(null)
  const { toast } = useToast()

  const handleFileUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file.",
        variant: "destructive"
      })
      return
    }

    try {
      setIsProcessing(true)
      const originalUrl = URL.createObjectURL(file)
      setOriginalImage(originalUrl)

      // Load image and remove background
      const imageElement = await loadImage(file)
      const processedBlob = await removeBackground(imageElement)
      const processedUrl = URL.createObjectURL(processedBlob)
      
      setProcessedImage(processedUrl)
      onProcessedImage?.(processedUrl)

      toast({
        title: "Background removed successfully!",
        description: "Your image is ready to use.",
      })
    } catch (error) {
      console.error('Error processing image:', error)
      toast({
        title: "Error processing image",
        description: "There was an error removing the background. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsProcessing(false)
    }
  }, [onProcessedImage, toast])

  const downloadProcessedImage = useCallback(() => {
    if (!processedImage) return
    
    const link = document.createElement('a')
    link.href = processedImage
    link.download = 'processed-image.png'
    link.click()
  }, [processedImage])

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">Background Image Processor</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Upload an image to automatically remove its background
        </p>
      </div>

      {/* Upload Area */}
      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
          id="image-upload"
          disabled={isProcessing}
        />
        <label
          htmlFor="image-upload"
          className="cursor-pointer flex flex-col items-center space-y-2"
        >
          {isProcessing ? (
            <Loader2 className="h-12 w-12 text-muted-foreground animate-spin" />
          ) : (
            <Upload className="h-12 w-12 text-muted-foreground" />
          )}
          <span className="text-sm font-medium">
            {isProcessing ? 'Processing...' : 'Click to upload image'}
          </span>
        </label>
      </div>

      {/* Image Preview */}
      {(originalImage || processedImage) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {originalImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-2"
            >
              <h4 className="text-sm font-medium text-center">Original</h4>
              <div className="border rounded-lg overflow-hidden">
                <img
                  src={originalImage}
                  alt="Original"
                  className="w-full h-48 object-cover"
                />
              </div>
            </motion.div>
          )}

          {processedImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-2"
            >
              <h4 className="text-sm font-medium text-center">Processed</h4>
              <div className="border rounded-lg overflow-hidden bg-checkerboard">
                <img
                  src={processedImage}
                  alt="Processed"
                  className="w-full h-48 object-contain"
                />
              </div>
              <Button
                onClick={downloadProcessedImage}
                variant="outline"
                size="sm"
                className="w-full"
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </motion.div>
          )}
        </div>
      )}
    </div>
  )
}

export default BackgroundImageProcessor