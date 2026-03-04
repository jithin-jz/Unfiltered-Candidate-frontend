import { Megaphone, Zap, TriangleAlert } from 'lucide-react';
import { useMemo } from 'react';

const SUGGESTIONS_EN = [
  "We are like a family here",
  "Why is there a gap in your resume?",
  "Tell me your biggest weakness",
  "What's your current CTC?",
];

const SUGGESTIONS_ML = [
  "എന്തിനാ ഇപ്പൊ പഴയ ജോലി വിടുന്നത്?",
  "അഞ്ചു കൊല്ലം കഴിഞ്ഞാൽ താൻ എവിടെയായിരിക്കും?",
  "മൂന്ന് മാസം നോട്ടീസ് പീരിയഡ് നിൽക്കാൻ പറ്റുമോ?",
  "പഴയ ശമ്പളം എത്രയായിരുന്നു മോളെ/മോനെ?",
];

const toxicAdvices = [
  "HR is lying to you.",
  "Don't mention the office fire.",
  "They definitely stalked your LinkedIn.",
  "Salary 'commensurate' means 'we are stingy'.",
  "Casual Fridays are a trap."
];

export default function RoastInput({ question, setQuestion, handleRoast, loading, language }) {
  const suggestions = language === 'malayalam' ? SUGGESTIONS_ML : SUGGESTIONS_EN;

  const toxicAdvice = useMemo(() => {
    if (question.length > 10) {
      // Use the length as a seed to keep it stable but "random" per length change
      return toxicAdvices[question.length % toxicAdvices.length];
    }
    return '';
  }, [question.length]);

  return (
    <div className="w-full max-w-lg animate-slide-up delay-100 px-2 lg:px-0">
      {/* Input Box */}
      <div className="brutalist-card rounded-3xl p-6 mb-4 relative overflow-hidden bg-white group">
        <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none group-hover:rotate-12 transition-transform duration-500">
          <Zap size={120} fill="black" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-1">
            <TriangleAlert size={14} className="text-red-500" />
            <span className="text-[10px] font-black uppercase tracking-tighter text-red-500">
              High Toxicity Warning
            </span>
          </div>

          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder={language === 'malayalam' ? "ചോദ്യം ഇവിടെ തള്ളിക്കോ..." : "Describe the corporate gaslighting here..."}
            className="w-full bg-transparent border-none outline-none text-lg md:text-xl font-black placeholder-gray-200 text-black resize-none min-h-[100px] leading-tight"
            rows={3}
          />

          <div className="flex flex-wrap gap-2 mt-2">
            {suggestions.map((s, i) => (
              <button
                key={i}
                onClick={() => setQuestion(s)}
                className="text-[9px] font-black uppercase px-3 py-1.5 rounded-full bg-gray-50 border-2 border-black/5 hover:bg-black hover:text-white hover:border-black transition-all cursor-pointer"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-6 pt-4 border-t-2 border-black/5">
          <span className="text-[10px] font-black text-neon-orange animate-pulse">
            {toxicAdvice}
          </span>
          <span className={`text-[9px] font-black tracking-[0.2em] ${question.length < 5 && question.length > 0 ? 'text-red-500' : 'text-gray-300'}`}>
            {question.length} / 500
          </span>
        </div>
      </div>

      {/* Roast Button */}
      <div className="flex justify-center flex-col items-center gap-3">
        <button
          onClick={handleRoast}
          disabled={loading || question.trim().length < 5}
          className="brutalist-button w-full py-5 rounded-2xl flex items-center justify-center gap-4 group"
        >
          {loading ? (
            <div className="flex items-center gap-3">
              <div className="animate-spin rounded-full h-5 w-5 border-4 border-black border-t-transparent" />
              <span className="text-base font-black italic">COOKING THE TRUTH...</span>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Megaphone size={20} className="group-hover:rotate-12 transition-transform" />
              <span className="text-base font-black uppercase tracking-[0.1em]">{language === 'malayalam' ? 'നാണം കെടുത്തൂ' : 'Destroy Interview'}</span>
            </div>
          )}
        </button>
        <p className="text-[8px] md:text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mt-2 opacity-50">
          Hold Shift + Enter to skip HR drama
        </p>
      </div>
    </div>
  );
}

