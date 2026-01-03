import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';
import { toast } from 'sonner';

const LogoProcessorPage = () => {
  const [processing, setProcessing] = useState(false);
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  const processLogo = async () => {
    setProcessing(true);
    try {
      // Fetch the logo
      const response = await fetch('/lovable-uploads/logo-sharp-back.png');
      const blob = await response.blob();
      
      // Load as image element
      const img = await loadImage(blob);
      
      // Remove background
      toast.info('Processing logo... This may take a moment.');
      const processedBlob = await removeBackground(img);
      
      // Create object URL for preview and download
      const url = URL.createObjectURL(processedBlob);
      setProcessedImage(url);
      
      toast.success('Background removed successfully!');
    } catch (error) {
      console.error('Error processing logo:', error);
      toast.error('Failed to process logo. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  const downloadLogo = () => {
    if (!processedImage) return;
    
    const link = document.createElement('a');
    link.href = processedImage;
    link.download = 'logo-transparent.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success('Logo downloaded!');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Logo Background Remover</h1>
          <p className="text-muted-foreground">
            Remove the white background from the logo using AI
          </p>
        </div>

        <div className="space-y-4">
          <div className="border rounded-lg p-6 bg-card">
            <h2 className="text-lg font-semibold mb-4">Original Logo</h2>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-8 rounded-lg flex items-center justify-center">
              <img 
                src="/lovable-uploads/logo-sharp-back.png" 
                alt="Original Logo" 
                className="max-h-32 w-auto"
              />
            </div>
          </div>

          <Button 
            onClick={processLogo} 
            disabled={processing}
            size="lg"
            className="w-full"
          >
            {processing ? 'Processing...' : 'Remove Background'}
          </Button>

          {processedImage && (
            <div className="border rounded-lg p-6 bg-card space-y-4">
              <h2 className="text-lg font-semibold">Processed Logo (Transparent)</h2>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-8 rounded-lg flex items-center justify-center">
                <img 
                  src={processedImage} 
                  alt="Processed Logo" 
                  className="max-h-32 w-auto"
                />
              </div>
              <Button 
                onClick={downloadLogo}
                size="lg"
                variant="outline"
                className="w-full"
              >
                Download Transparent Logo
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                After downloading, save it as <code className="bg-muted px-2 py-1 rounded">/lovable-uploads/logo-transparent.png</code>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogoProcessorPage;
