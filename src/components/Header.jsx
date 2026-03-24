import React from 'react';

export default function Header() {
  return (
    <>
      {/* Branding Pill */}
      <div className="flex justify-center mb-12 md:mb-16">
        <div className="bg-roast-black text-white px-8 py-2 border-4 border-roast-black brutal-shadow group cursor-default">
          <span className="font-display font-black text-xs md:text-sm tracking-[0.5em] uppercase transition-all group-hover:tracking-[0.6em]">
            The Unfiltered Candidate
          </span>
        </div>
      </div>
      {/* Main Heading */}
      <div className="text-center space-y-4 mb-20 md:mb-24 px-4 overflow-hidden">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-roast-black tracking-tighter uppercase leading-[0.9] font-display">
          Stop the Gaslighting.
          <br />
          <span className="bg-roast-primary px-3 sm:px-6 inline-block transform -rotate-2 mt-4 brutal-border">
            Become Unfiltered.
          </span>
        </h1>
        <p className="text-roast-black/60 font-bold max-w-lg mx-auto leading-relaxed uppercase tracking-[0.2em] text-[10px] md:text-xs pt-4">
          The AI-powered Reality Check for Your Professional Ego. Because someone has to tell you the truth.
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
