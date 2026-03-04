import { Megaphone, Zap } from 'lucide-react';

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

export default function RoastInput({ question, setQuestion, handleRoast, loading, language }) {
  const suggestions = language === 'malayalam' ? SUGGESTIONS_ML : SUGGESTIONS_EN;

  return (
    <div className="w-full max-w-lg animate-slide-up delay-100 px-2">
      {/* Input Box */}
      <div className="brutalist-card rounded-xl p-4 mb-3 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 p-2 opacity-5 pointer-events-none">
          <Zap size={60} fill="currentColor" />
        </div>

        <div className="flex flex-col gap-2">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder={language === 'malayalam' ? "ചോദ്യം ഇവിടെ തള്ളിക്കോ..." : "Paste the cringe here..."}
            className="w-full bg-transparent border-none outline-none text-sm md:text-base font-bold placeholder-gray-300 text-black resize-none min-h-[70px] leading-snug"
            rows={3}
          />

          <div className="flex flex-wrap gap-1.5 mt-2">
            {suggestions.map((s, i) => (
              <button
                key={i}
                onClick={() => setQuestion(s)}
                className="text-[8px] font-black uppercase px-2 py-1 rounded bg-gray-50 border border-black/10 hover:bg-yellow-100 hover:border-black transition-all cursor-pointer"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end mt-1">
          <span className={`text-[8px] font-black tracking-widest ${question.length < 5 && question.length > 0 ? 'text-red-500' : 'text-gray-300'}`}>
            {question.length} CHARS
          </span>
        </div>
      </div>

      {/* Roast Button */}
      <div className="flex justify-center flex-col items-center gap-1.5 md:gap-2">
        <button
          onClick={handleRoast}
          disabled={loading || question.trim().length < 5}
          className="brutalist-button w-full py-4 rounded-xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent" />
              <span className="text-sm font-black">BURN IN PROGRESS...</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Megaphone size={16} fill="black" />
              <span className="text-sm font-black uppercase tracking-wider">{language === 'malayalam' ? 'നാണം കെടുത്തൂ' : 'Destroy Interview'}</span>
            </div>
          )}
        </button>
        <p className="text-[7px] md:text-[8px] font-black text-gray-400 uppercase tracking-widest mt-1">
          Ctrl + Enter = Instant Career Suicide
        </p>
      </div>
    </div>
  );
}
