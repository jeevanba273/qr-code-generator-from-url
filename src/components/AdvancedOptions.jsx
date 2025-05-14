import React, { useRef, useEffect } from 'react';
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
  const inputRef = useRef(null);

  // Force 95% width on mount and after any DOM updates
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.width = '95%';
    }
  });

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="text-below" className="flex items-center text-white space-x-2 pl-4">
          <Type className="h-4 w-4" />
          <span>Text Below QR Code</span>
        </Label>
        {/* Using mx-auto to center the input with explicit width */}
        <div className="flex justify-center items-center w-full">
          <input 
            ref={inputRef}
            id="text-below" 
            value={text} 
            onChange={e => setText(e.target.value)} 
            placeholder="Enter text to display below QR code"
            className="rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            style={{
              width: '95%',
              height: '40px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="resolution" className="flex items-center text-white space-x-2 pl-4">
          <Maximize className="h-4 w-4" />
          <span>QR Code Resolution</span>
        </Label>
        <div className="flex flex-col items-center space-y-3">
          {/* Making slider container also 95% width to match */}
          <div style={{ width: '95%' }}>
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