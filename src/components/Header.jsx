import React from 'react';

export default function Header({ language }) {
  return (
    <>
      {/* Branding Pill */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex items-center gap-4 px-8 py-3 bg-[#FFF9E6] rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] transition-transform cursor-default select-none">
          <div className="w-12 h-12 flex-shrink-0">
            <img
              src="https://img.icons8.com/bubbles/100/mad-libs.png"
              alt="Mad Libs"
              className="w-full h-full object-contain animate-float"
            />
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
      <div className="text-center space-y-4 mb-20">
        <h1 className={`text-4xl md:text-6xl font-black text-brand-dark tracking-tighter ${language === 'malayalam' ? 'font-malayalam' : 'font-display'}`}>
          {language === 'malayalam' ? 'തള്ളുകൾ മതിയാക്കി' : 'Stop the Gaslighting.'}
          <br />
          <span className="text-[#F4D03F] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            {language === 'malayalam' ? 'റോസ്റ്റ് തുടങ്ങാം!' : "Let's Roast 'Em."}
          </span>
        </h1>
        <p className={`text-gray-500 font-medium max-w-md mx-auto leading-relaxed ${language === 'malayalam' ? 'font-malayalam' : ''}`}>
          {language === 'malayalam'
            ? 'സത്യം പറഞ്ഞാൽ ജീവിതം ഗോപി. അവിടുത്തെ ജോലി സാധ്യതകൾ ഇതാ ഞങ്ങൾ ഇല്ലാതാക്കുന്നു.'
            : 'The AI-powered career suicide tool. We turn your "professional accomplishments" into absolute garbage.'}
        </p>
      </div>

      {/* Trusted By Section (Funny) */}
      <div className="w-full max-w-4xl mx-auto mb-16 overflow-hidden">
        <p className="text-[10px] font-black tracking-[0.3em] text-gray-400 uppercase text-center mb-6">
          DISMISSED BY LEADERS AT
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 grayscale opacity-40">
          {['Overthinker Labs', 'Gaslightly', 'PayCut Inc', 'Status Query', 'Deadline.ai'].map((company) => (
            <span key={company} className="font-display font-black text-sm tracking-tight italic">
              {company}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
