
import React, { useState, useRef, useCallback } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Copy, Download, Settings, Sparkles, Link, QrCode } from "lucide-react";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AdvancedOptions from './AdvancedOptions';

const QRCodeGenerator = () => {
  const [qrValue, setQRValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [textBelow, setTextBelow] = useState('');
  const [logo, setLogo] = useState('');
  const [showLogo, setShowLogo] = useState(false);
  const [resolution, setResolution] = useState(1000);
  const qrCodeRef = useRef(null);
  const previewSize = 200; // Fixed size for preview

  const generateQRCode = () => {
    if (!inputValue.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      setQRValue(inputValue);
      setIsGenerating(false);
      toast.success("QR Code generated successfully!");
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      generateQRCode();
    }
  };

  const generateQRCodeImage = useCallback(() => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      canvas.width = resolution;
      canvas.height = resolution;
      const ctx = canvas.getContext('2d');
      
      // Draw QR Code
      const qrSize = resolution * 0.8; // 80% of the resolution
      const qrPosition = (resolution - qrSize) / 2;
      const svgString = new XMLSerializer().serializeToString(qrCodeRef.current.querySelector('svg'));
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, qrPosition, qrPosition, qrSize, qrSize);
        
        // Draw text below
        if (textBelow) {
          const fontSize = resolution * 0.05;
          ctx.font = `bold ${fontSize}px Arial`;
          ctx.fillStyle = 'black';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'top';
          const textY = qrPosition + qrSize + (resolution * 0.05); // 5% padding below QR code
          ctx.fillText(textBelow, resolution / 2, textY);
        }
        
        resolve(canvas.toDataURL('image/png'));
      };
      img.src = 'data:image/svg+xml;base64,' + btoa(svgString);
    });
  }, [resolution, textBelow]);

  const copyToClipboard = async () => {
    try {
      const dataUrl = await generateQRCodeImage();
      const blob = await fetch(dataUrl).then(res => res.blob());
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob })
      ]);
      toast.success("QR Code copied to clipboard!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to copy QR Code");
    }
  };

  const saveAsPNG = async () => {
    try {
      const dataUrl = await generateQRCodeImage();
      const link = document.createElement('a');
      link.download = 'qr-code.png';
      link.href = dataUrl;
      link.click();
      toast.success("QR Code saved as PNG!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to save QR Code");
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl transition-all duration-500 hover:shadow-purple-500/20 animate-fade-in">
      <CardHeader className="bg-gradient-to-r from-violet-600 to-indigo-600 p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)] pointer-events-none"></div>
        <div className="flex items-center justify-center space-x-3">
          <QrCode className="w-8 h-8 text-white" />
          <CardTitle className="text-3xl font-bold text-white text-center">QR Forge</CardTitle>
        </div>
        <p className="text-white/80 text-center mt-2">Create beautiful QR codes instantly</p>
      </CardHeader>
      <CardContent className="p-8 space-y-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-3/5 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-white mb-2">
                <Link className="h-5 w-5" />
                <span className="font-medium">Enter your link or text</span>
              </div>
              <div className="relative">
                <Input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter text or URL and press Enter"
                  className="w-full text-lg pl-4 pr-10 py-3 backdrop-blur-sm bg-white/20 border-white/20 text-indigo-50 placeholder-white/60 focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Sparkles className="h-5 w-5 text-purple-300" />
                </div>
              </div>
            </div>
            
            <Button 
              onClick={generateQRCode} 
              className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold py-6 rounded-md transition duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-lg"
              disabled={isGenerating || !inputValue.trim()}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <span className="flex items-center justify-center">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Generate QR Code
                </span>
              )}
            </Button>
            
            <Accordion type="single" collapsible className="w-full backdrop-blur-sm bg-white/10 rounded-lg border border-white/20 px-4">
              <AccordionItem value="advanced-options" className="border-white/10">
                <AccordionTrigger className="py-4 text-white hover:text-purple-200 transition-colors">
                  <div className="flex items-center">
                    <Settings className="w-4 h-4 mr-2" />
                    Advanced Options
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 text-white/90">
                  <AdvancedOptions
                    text={textBelow}
                    setText={setTextBelow}
                    logo={logo}
                    setLogo={setLogo}
                    showLogo={showLogo}
                    setShowLogo={setShowLogo}
                    resolution={resolution}
                    setResolution={setResolution}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div className="w-full sm:w-2/5">
            {qrValue ? (
              <div className="space-y-4 animate-fade-in">
                <div className="flex justify-center">
                  <div ref={qrCodeRef} className="p-6 bg-white rounded-lg shadow-xl flex flex-col items-center transform transition-all duration-500 hover:scale-105" style={{ width: `${previewSize + 48}px`, minHeight: `${previewSize}px` }}>
                    <QRCodeSVG 
                      value={qrValue} 
                      size={Math.round(previewSize * 0.8)} // 80% of preview size
                      level="H"
                      imageSettings={showLogo && logo ? {
                        src: logo,
                        x: undefined,
                        y: undefined,
                        height: Math.round(previewSize * 0.16), // 20% of QR code size
                        width: Math.round(previewSize * 0.16),
                        excavate: true,
                      } : undefined}
                    />
                    {textBelow && (
                      <div className="text-center mt-4 text-sm font-semibold">
                        {textBelow}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-center space-x-4">
                  <Button onClick={copyToClipboard} className="flex items-center bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105 transition-all">
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                  </Button>
                  <Button onClick={saveAsPNG} className="flex items-center bg-violet-600 hover:bg-violet-700 transform hover:scale-105 transition-all">
                    <Download className="mr-2 h-4 w-4" />
                    Save
                  </Button>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-center p-6">
                <div className="text-white/70 space-y-3">
                  <QrCode className="w-16 h-16 mx-auto opacity-50" />
                  <p className="text-lg">Your QR code will appear here</p>
                  <p className="text-sm">Enter your text or URL and click generate</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QRCodeGenerator;
