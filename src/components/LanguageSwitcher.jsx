import React from 'react';

export default function LanguageSwitcher({ language, setLanguage }) {
  return (
    <div className="absolute top-4 right-4 md:top-8 md:right-8 flex gap-2 bg-[#FFF8E7] p-1.5 rounded-full z-50 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <button
        onClick={() => setLanguage('english')}
        className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
          language === 'english' 
            ? 'bg-[#F4D03F] text-black border-2 border-black shadow-sm' 
            : 'text-gray-500 hover:text-black'
        }`}
      >
        ENG
      </button>
      <button
        onClick={() => setLanguage('malayalam')}
        className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
          language === 'malayalam' 
            ? 'bg-[#F4D03F] text-black border-2 border-black shadow-sm' 
            : 'text-gray-500 hover:text-black'
        }`}
      >
        MAL
      </button>
    </div>
  );
}
