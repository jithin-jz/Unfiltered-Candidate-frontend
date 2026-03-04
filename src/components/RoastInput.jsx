import React from 'react';
import SendHorizontalIcon from '@/components/ui/send-horizontal-icon';

export default function RoastInput({ question, setQuestion, handleRoast, loading, language }) {
  return (
    <>
      <div className="w-full max-w-2xl relative mb-8">
        <div className="bg-[#FFF8E7] rounded-3xl p-6 shadow-lg border-b-8 border-r-4 border-[#E5DCC5] focus-within:border-[#D4C5A5] transition-all duration-300">
          <div className="flex items-start gap-4">
            <SendHorizontalIcon size={24} color="black" className="mt-1 flex-shrink-0" />
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder={language === 'malayalam' ? "അവിടുത്തെ തള്ളുകൾ ഇവിടെ..." : "Describe the gaslighting here..."}
              className="w-full bg-transparent border-none outline-none text-lg font-medium placeholder-gray-400 text-gray-900 resize-none min-h-[120px]"
              rows={3}
            />
          </div>
        </div>

        {/* Suggestions */}
        <div className="mt-4 flex flex-wrap gap-2 justify-end">
          {["What is your greatest weakness?", "Why do you want this job?", "How do you handle pressure?", "Why should we hire you?", "Where do you see yourself in 5 yrs?"].map((suggestion, index) => (
            <button
              key={index}
              onClick={() => setQuestion(suggestion)}
              className={`text-xs font-bold px-3 py-1.5 rounded-full bg-white/50 backdrop-blur-sm border border-gray-200 text-gray-500 hover:border-black hover:text-black transition-all shadow-sm active:scale-95 ${language === 'malayalam' ? 'font-sans' : ''}`}
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
        className="bg-[#F4D03F] text-black rounded-full px-10 py-4 flex items-center gap-3 font-black text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black hover:translate-y-1 hover:shadow-none active:translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed mb-16"
      >
        {loading ? (
          <span className="animate-pulse">Preparing the Burn...</span>
        ) : (
          <>
            <SendHorizontalIcon size={20} color="black" />
            <span className="uppercase tracking-wide">Burn My Career</span>
          </>
        )}
      </button>
    </>
  );
}
