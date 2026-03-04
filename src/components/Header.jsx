import React from 'react';
import SkullEmoji from '@/components/ui/skull-emoji';

export default function Header({ language }) {
  return (
    <>
      {/* Branding Pill */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex items-center gap-4 px-8 py-3 bg-[#FFF9E6] rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] transition-transform cursor-default select-none">
          <div className="relative">
            <div className="w-10 h-10 bg-[#E8E8FF] rounded-full border-2 border-[#D1D1FF] flex items-center justify-center">
              <SkullEmoji size={24} color="black" strokeWidth={2.5} />
            </div>
            {/* Sparkles */}
            <div className="absolute -top-1 -right-1 text-xs">✨</div>
            <div className="absolute -bottom-1 -left-1 text-[8px]">✨</div>
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl leading-tight tracking-tight text-black">
              YOU QUESTIONED
            </span>
            <span className="text-[9px] font-black tracking-[0.2em] text-[#556987] uppercase">
              The Unfiltered Candidate
            </span>
          </div>
        </div>
      </div>
      {/* Main Heading */}
      <div className="text-center space-y-2 mb-12">
        <h1 className={`text-3xl md:text-5xl font-black text-brand-dark tracking-tighter ${language === 'malayalam' ? 'font-malayalam' : 'font-display'}`}>
          {language === 'malayalam' ? 'തള്ളുകൾ മതിയാക്കി' : 'Stop the Gaslighting.'}
        </h1>
        <h1 className={`text-3xl md:text-5xl font-black text-brand-dark tracking-tighter ${language === 'malayalam' ? 'font-malayalam' : 'font-display'}`}>
          {language === 'malayalam' ? 'റോസ്റ്റ് തുടങ്ങാം!' : 'Let\'s Roast \'Em.'}
        </h1>
        <p className={`text-gray-400 font-medium mt-4 ${language === 'malayalam' ? 'font-malayalam' : ''}`}>
          {language === 'malayalam'
            ? 'സത്യം പറഞ്ഞാൽ ജീവിതം ഗോപി.'
            : 'Warning: Side effects include immediate resignation.'}
        </p>
      </div>
    </>
  );
}
