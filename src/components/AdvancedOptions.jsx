import React from 'react';
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Type, Maximize } from 'lucide-react';

const AdvancedOptions = ({
  text,
  setText,
  logo,
  setLogo,
  showLogo,
  setShowLogo,
  resolution,
  setResolution
}) => {
  return (
    <div className="space-y-6 max-w-full">
      <div className="space-y-2">
        <Label htmlFor="text-below" className="flex items-center text-white space-x-2 pl-4">
          <Type className="h-4 w-4" />
          <span>Text Below QR Code</span>
        </Label>
        {/* Fixed-width container that's smaller than parent */}
        <div className="w-[95%] mx-auto relative">
          <input 
            id="text-below" 
            value={text} 
            onChange={e => setText(e.target.value)} 
            placeholder="Enter text to display below QR code"
            className="rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            style={{
              boxSizing: 'border-box',
              width: '100%',
              height: '40px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="resolution" className="flex items-center text-white space-x-2">
          <Maximize className="h-4 w-4" />
          <span>QR Code Resolution</span>
        </Label>
        <div className="flex items-center space-x-4">
          <div className="flex-grow">
            <Slider 
              id="resolution" 
              min={100} 
              max={1000} 
              step={10} 
              value={[resolution]} 
              onValueChange={value => setResolution(value[0])} 
            />
          </div>
          <span className="text-white/90 text-sm font-mono bg-white/10 px-2 py-1 rounded">
            {resolution}×{resolution}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdvancedOptions;