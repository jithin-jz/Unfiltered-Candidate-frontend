import { useState, useEffect } from 'react';
import { Linkedin, Copy, Check, RefreshCw, ShieldAlert, Ghost, Skull } from 'lucide-react';

export default function RoastResult({ result, language }) {
  const [copied, setCopied] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => {
        let current = 0;
        const end = result.unemployability_score;
        const interval = setInterval(() => {
          if (current >= end) {
            setScore(end);
            clearInterval(interval);
          } else {
            current += Math.ceil((end - current) / 10);
            if (current > end) current = end;
            setScore(current);
          }
        }, 30);
        return () => clearInterval(interval);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [result]);

  if (!result) return null;

  const getCommentary = (s) => {
    if (s >= 95) return language === 'malayalam' ? "ദയവായി ഇപ്പോൾ തന്നെ ഓഫീസ് വിടുക. സെക്യൂരിറ്റി പിന്നിലുണ്ട്." : "Please pack your bags. Security is already behind you.";
    if (s >= 85) return language === 'malayalam' ? "നിങ്ങൾ ഈ കമ്പനിക്ക് ഒരു ബാധ്യതയാണ്." : "You are a legally recognized liability to this company.";
    if (s >= 70) return language === 'malayalam' ? "ഈ ആത്മവിശ്വാസം എവിടെ നിന്ന് കിട്ടുന്നു?" : "Where do you buy this much unearned confidence?";
    return language === 'malayalam' ? "കുഴപ്പമില്ല, പക്ഷേ ഇനിയും തള്ളണ്ട." : "Nice try, but HR can smell the desperation.";
  };

  const getLabel = (s) => {
    if (s >= 90) return language === 'malayalam' ? 'പുറത്താക്കാൻ റെഡി' : 'FUTURE BURNT';
    if (s >= 80) return language === 'malayalam' ? 'തൊഴില്ലായ്മ വേതനം' : 'BLACKLISTED';
    return language === 'malayalam' ? 'വെറും തള്ളു മാത്രം' : 'UNHIREABLE';
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result.roasted_answer);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-xl mt-8 animate-slide-up px-2 pb-12">
      <div className="brutalist-card rounded-[2.5rem] p-8 bg-white relative overflow-hidden group">
        {/* Decorative elements */}
        <div className="absolute top-4 right-8 opacity-10 group-hover:scale-110 transition-transform">
          {score > 90 ? <Skull size={40} /> : <Ghost size={40} />}
        </div>

        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-neon-yellow px-6 py-1.5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-lg">
          {language === 'malayalam' ? 'വിധി' : 'The Verdict'}
        </div>

        <div className="mt-4 mb-10">
          <p className="text-xl md:text-2xl font-black text-black leading-[1.15] text-center italic">
            "{result.roasted_answer}"
          </p>
        </div>

        <div className="space-y-6 pt-6 border-t-4 border-black/5">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center text-black">
              <div className="flex items-center gap-2">
                <ShieldAlert size={16} className={score > 80 ? "text-red-500 animate-pulse" : "text-black"} />
                <span className="text-[11px] font-[900] uppercase tracking-widest leading-none pt-0.5">
                  Unemployability Score
                </span>
              </div>
              <span className="text-2xl font-black tabular-nums">{score}%</span>
            </div>

            <div className="h-6 w-full bg-gray-100 border-4 border-black rounded-full overflow-hidden p-0.5 shadow-inner">
              <div
                className={`h-full transition-all duration-500 ease-out rounded-full ${score > 90 ? 'bg-red-500' : score > 70 ? 'bg-orange-500' : 'bg-yellow-400'
                  }`}
                style={{ width: `${score}%` }}
              />
            </div>

            <div className="flex justify-between items-start mt-1">
              <span className="text-[10px] font-black uppercase text-red-500 tracking-wider">
                [{getLabel(score)}]
              </span>
              <p className="text-[10px] font-extrabold text-gray-400 max-w-[200px] text-right leading-none">
                {getCommentary(score)}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <button
              onClick={handleCopy}
              className="flex-1 brutalist-button py-3 rounded-2xl flex items-center justify-center gap-2"
              title="Copy to clipboard"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              <span className="text-xs">{copied ? 'COPIED!' : 'COPY ROAST'}</span>
            </button>
            <button
              onClick={() => window.open('https://linkedin.com')}
              className="p-3 rounded-2xl border-4 border-black bg-white shadow-[4px_4px_0_0_#000] active:translate-y-1 active:shadow-none hover:bg-gray-50 transition-all"
              title="Post on LinkedIn (don't)"
            >
              <Linkedin size={20} fill="black" strokeWidth={0} />
            </button>
            <button
              onClick={() => window.location.reload()}
              className="p-3 rounded-2xl border-4 border-black bg-white shadow-[4px_4px_0_0_#000] active:translate-y-1 active:shadow-none hover:bg-gray-50 transition-all"
              title="Try again"
            >
              <RefreshCw size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

