import { useState, useEffect } from 'react';
import { Linkedin, Copy, Check, RefreshCw } from 'lucide-react';

export default function RoastResult({ result, language }) {
  const [copied, setCopied] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (result) {
      setScore(0);
      const timer = setTimeout(() => {
        let start = 0;
        const end = result.unemployability_score;
        const interval = setInterval(() => {
          if (start >= end) {
            setScore(end);
            clearInterval(interval);
          } else {
            start += 1;
            setScore(start);
          }
        }, 15);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [result]);

  if (!result) return null;

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
    <div className="w-full max-w-xl mt-6 animate-slide-up px-2 pb-10">
      <div className="brutalist-card rounded-2xl p-5 bg-white relative">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
          {language === 'malayalam' ? 'മറുപടി' : 'The Result'}
        </div>

        <p className="text-base md:text-lg font-bold text-black leading-tight mb-8 text-center pt-2">
          {result.roasted_answer}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t-2 border-black/5 pt-4">
          <div className="flex flex-col gap-1 flex-1 w-full">
            <div className="flex justify-between items-end mb-1">
              <span className="text-[10px] font-black uppercase tracking-tight text-gray-400">Security Escort Risk</span>
              <span className="text-xs font-black text-black">{score}%</span>
            </div>
            <div className="h-4 w-full bg-gray-100 border-2 border-black rounded-full overflow-hidden">
              <div
                className="h-full bg-red-500 transition-all duration-300"
                style={{ width: `${score}%` }}
              />
            </div>
            <span className="text-[10px] font-black uppercase text-red-500 mt-1">{getLabel(score)}</span>
          </div>

          <div className="flex gap-2">
            <button onClick={handleCopy} className="p-2.5 rounded-lg border-2 border-black bg-yellow-400 shadow-[2px_2px_0_0_#000] active:translate-y-0.5 active:shadow-none transition-all">
              {copied ? <Check size={18} /> : <Copy size={18} />}
            </button>
            <button onClick={() => window.open('https://linkedin.com')} className="p-2.5 rounded-lg border-2 border-black bg-white shadow-[2px_2px_0_0_#000] active:translate-y-0.5 active:shadow-none transition-all">
              <Linkedin size={18} />
            </button>
            <button onClick={() => window.location.reload()} className="p-2.5 rounded-lg border-2 border-black bg-white shadow-[2px_2px_0_0_#000] active:translate-y-0.5 active:shadow-none transition-all">
              <RefreshCw size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
