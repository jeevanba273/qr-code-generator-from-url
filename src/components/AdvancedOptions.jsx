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

  // This useEffect handles focus/blur to control input width
  useEffect(() => {
    const handleFocus = () => {
      // Do nothing or add specific focus behavior if needed
      // The key is we're NOT letting the browser decide how to handle focus
    };

    const handleBlur = () => {
      // Ensure the input stays contained
      if (inputRef.current) {
        inputRef.current.style.width = '95%';
      }
    };

    const inputElement = inputRef.current;
    if (inputElement) {
      inputElement.addEventListener('focus', handleFocus);
      inputElement.addEventListener('blur', handleBlur);
      
      return () => {
        inputElement.removeEventListener('focus', handleFocus);
        inputElement.removeEventListener('blur', handleBlur);
      };
    }
  }, []);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="text-below" className="flex items-center text-white space-x-2 pl-4">
          <Type className="h-4 w-4" />
          <span>Text Below QR Code</span>
        </Label>
        {/* Container with centering for the 95% width input */}
        <div className="w-full flex justify-center">
          <input 
            ref={inputRef}
            id="text-below" 
            value={text} 
            onChange={e => setText(e.target.value)} 
            placeholder="Enter text to display below QR code"
            className="w-[95%] rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            style={{
              boxSizing: 'border-box',
              maxWidth: '95%',
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
        {/* Vertical layout with centered elements */}
        <div className="flex flex-col items-center space-y-3">
          {/* Slider with 95% width to match input */}
          <div className="w-[95%]">
            <Slider 
              id="resolution" 
              min={100} 
              max={1000} 
              step={10} 
              value={[resolution]} 
              onValueChange={value => setResolution(value[0])} 
            />
          </div>
          {/* Centered resolution display */}
          <span className="text-white/90 text-sm font-mono bg-white/10 px-2 py-1 rounded">
            {resolution}×{resolution}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdvancedOptions;