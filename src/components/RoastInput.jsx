import React from 'react';
import SendHorizontalIcon from '@/components/ui/send-horizontal-icon';

export default function RoastInput({ question, setQuestion, handleRoast, loading, language, setLanguage }) {
  return (
    <>
      <div className="w-full max-w-2xl relative mb-12 px-2">
        <label className="text-[10px] font-black tracking-[0.4em] text-roast-black/30 uppercase ml-2 mb-4 block">
          {language === 'malayalam' ? 'നിങ്ങളുടെ ചോദ്യങ്ങൾ സമർപ്പിക്കുക' : '// SUBMIT STATEMENT FOR ASSESSMENT'}
        </label>
        <div className="bg-white p-6 md:p-10 border-4 border-roast-black brutal-shadow focus-within:translate-x-[-2px] focus-within:translate-y-[-2px] focus-within:shadow-brutal-lg transition-all duration-300 relative group">
          {/* Language Toggle */}
          <div className="absolute top-4 right-4 flex gap-1 bg-roast-bg p-1 border-2 border-roast-black z-10 transition-transform group-focus-within:translate-x-[2px] group-focus-within:translate-y-[2px]">
            <button
              onClick={() => setLanguage('english')}
              className={`px-3 py-1 text-[8px] font-black tracking-widest uppercase transition-all ${
                language === 'english' ? 'bg-roast-primary text-roast-black' : 'text-roast-black/40 hover:text-roast-black'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('malayalam')}
              className={`px-3 py-1 text-[8px] font-black tracking-widest uppercase transition-all ${
                language === 'malayalam' ? 'bg-roast-primary text-roast-black' : 'text-roast-black/40 hover:text-roast-black'
              }`}
            >
              ML
            </button>
          </div>

          <div className="flex items-start gap-4">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder={language === 'malayalam' ? "അവിടുത്തെ തള്ളുകൾ ഇവിടെ..." : "PASTE YOUR SOUL-CRUSHING HR QUESTIONS HERE..."}
              className="w-full bg-transparent border-none outline-none text-lg md:text-2xl font-display font-black placeholder-roast-black/10 text-roast-black resize-none min-h-[120px] md:min-h-[160px] uppercase tracking-tighter pr-20"
              rows={4}
            />
          </div>
        </div>

        {/* Suggestions */}
        <div className="mt-4 flex flex-wrap gap-2 justify-end">
          {["Greatest Weakness?", "Why hire you?", "Handle pressure?", "Why this job?"].map((suggestion, index) => (
            <button
              key={index}
              onClick={() => setQuestion(suggestion)}
              className={`text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-black px-4 py-2 bg-white border-4 border-roast-black/10 text-roast-black/40 hover:border-roast-black hover:text-roast-black hover:brutal-sm transition-all active:scale-95 ${language === 'malayalam' ? 'font-sans' : ''}`}
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={handleRoast}
        disabled={loading}
        className="bg-roast-primary text-roast-black px-12 py-5 flex items-center gap-4 font-display font-black text-xl md:text-3xl border-4 border-roast-black brutal-shadow hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-brutal-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-brutal-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed mb-24 uppercase group"
      >
        {loading ? (
          <span className="animate-pulse">DECONSTRUCTING LIES...</span>
        ) : (
          <>
            <span>PROCEED TO ASSESSMENT</span>
            <SendHorizontalIcon size={28} className="transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
    </>
  );
}
