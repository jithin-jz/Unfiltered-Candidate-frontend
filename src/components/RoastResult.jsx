import React from 'react';
import { Linkedin, Copy } from 'lucide-react';

export default function RoastResult({ result, question }) {
  const [copied, setCopied] = React.useState(false);
  const [displayScore, setDisplayScore] = React.useState(0);

  const [reportRef, setReportRef] = React.useState('');

  React.useEffect(() => {
    if (result) {
      setReportRef(Math.random().toString(36).substring(2, 10).toUpperCase());
      let start = 0;
      const end = result.unemployability_score;
      const duration = 1500;
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayScore(end);
          clearInterval(timer);
        } else {
          setDisplayScore(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [result]);

  if (!result) return null;

  const shareText = `🚨 I just got BRUTALLY roasted by an AI! 🔥
Question: "${question}"
Roast: "${result.roasted_answer}"
Score: ${result.unemployability_score}%`;

  const handleLinkedInShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '🔥 I Got Roasted!',
        text: shareText,
      }).catch((error) => {
         if (error.name !== 'AbortError') openLinkedInShare();
      });
    } else {
      openLinkedInShare();
    }
  };

  const openLinkedInShare = () => {
    navigator.clipboard.writeText(shareText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
      window.open('https://www.linkedin.com/feed/', '_blank');
    }).catch(() => {
      window.open('https://www.linkedin.com/feed/', '_blank');
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result.roasted_answer).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="w-full max-w-2xl relative mt-24 animate-fade-in px-2">

      <div className="w-full bg-white p-6 md:p-12 pt-16 border-4 border-roast-black brutal-shadow relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-roast-primary/5 to-transparent pointer-events-none" />
        
        {copied && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-roast-black text-white text-[10px] font-black px-4 py-1 uppercase tracking-widest animate-fade-in z-20">
            BURN COPIED!
          </div>
        )}

        <div className="flex justify-between items-center mb-8 border-b-4 border-roast-black pb-6">
          <div className="flex flex-col">
            <h3 className="font-display font-black text-xs md:text-sm text-roast-black uppercase tracking-[0.3em]">
              OFFICIAL REVIEW
            </h3>
            <span className="text-[10px] font-black text-roast-black/30 uppercase tracking-widest mt-1">ID: {reportRef} // VERIFIED</span>
          </div>
          <div className="bg-roast-error text-white px-3 py-1 font-black text-[10px] uppercase tracking-[0.2em] border-2 border-roast-black">
            DOOM ENCOUNTERED
          </div>
        </div>

        <div className="mb-10 relative p-6 md:p-8 bg-roast-bg border-l-8 border-roast-primary">
          <p className="text-xl md:text-3xl font-display font-black text-roast-black leading-tight uppercase tracking-tighter">
            "{result.roasted_answer}"
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {[
            { label: 'GASLIGHTING', value: '100%' },
            { label: 'SURVIVAL', value: '0%' },
            { label: 'HIRE-ABILITY', value: 'NONE' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col p-4 bg-white border-2 border-roast-black/10 hover:border-roast-black transition-colors">
              <span className="text-[8px] font-black text-roast-black/40 uppercase tracking-[0.3em] mb-1">{stat.label}</span>
              <span className="text-xs md:text-sm font-display font-black text-roast-black uppercase">{stat.value}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <span className="text-[10px] font-black text-roast-black/30 uppercase tracking-[0.3em] ml-1">
              UNEMPLOYABILITY RISK
            </span>
            <div className="flex items-center bg-white border-4 border-roast-black brutal-shadow p-2 pr-6 w-full md:w-auto min-w-[280px]">
              <div className="bg-roast-primary text-roast-black px-4 py-2 font-display font-black text-3xl min-w-[100px] text-center brutal-border">
                {displayScore}%
              </div>
              <div className="flex-1 text-center font-display font-black text-roast-black uppercase tracking-tighter text-lg ml-4">
                CAREER ENDED
              </div>
            </div>
          </div>

          <div className="flex gap-4 w-full md:w-auto justify-end">
            <button onClick={handleLinkedInShare} className="w-14 h-14 md:w-16 md:h-16 bg-white border-4 border-roast-black text-roast-black flex items-center justify-center hover:bg-roast-primary hover:translate-y-[-2px] brutal-shadow transition-all">
              <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button onClick={handleCopy} className="w-14 h-14 md:w-16 md:h-16 bg-white border-4 border-roast-black text-roast-black flex items-center justify-center hover:bg-roast-primary hover:translate-y-[-2px] brutal-shadow transition-all">
              <Copy className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
