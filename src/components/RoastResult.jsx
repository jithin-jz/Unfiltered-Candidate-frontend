import React from 'react';
import { Linkedin, Copy } from 'lucide-react';

export default function RoastResult({ result, language, question }) {
  const [copied, setCopied] = React.useState(false);
  const [displayScore, setDisplayScore] = React.useState(0);

  React.useEffect(() => {
    if (result) {
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

  // Create an eye-catching, viral-worthy share message
  const shareText = `🚨 I just got BRUTALLY roasted by an AI! 🔥

I tried "The Unfiltered Candidate" and here's what happened...

❓ The Question:
"${question}"

💀 The AI's Roast:
"${result.roasted_answer}"

📊 My Unemployability Score: ${result.unemployability_score}% 

${result.unemployability_score >= 80 ? '😱 RIP my career!' : result.unemployability_score >= 60 ? '😬 Yikes, that stings!' : result.unemployability_score >= 40 ? '🤔 Not sure if I should laugh or cry...' : '😅 Could be worse... right?'}

Think you can handle the truth? Try it yourself! 👇

#TheUnfilteredCandidate #AIRoast #CareerHumor #JobSearch #LinkedInFun #Unemployable`;

  const handleLinkedInShare = () => {
    // Use Web Share API if available (works great on mobile)
    if (navigator.share) {
      navigator.share({
        title: '🔥 I Got Roasted by The Unfiltered Candidate!',
        text: shareText,
      }).catch((error) => {
        // If user cancels, do nothing. If error, try LinkedIn direct
        if (error.name !== 'AbortError') {
          openLinkedInShare();
        }
      });
    } else {
      // Desktop: Open LinkedIn with pre-filled text
      openLinkedInShare();
    }
  };

  const openLinkedInShare = () => {
    // For desktop, we'll copy to clipboard and open LinkedIn
    // This is the best we can do since LinkedIn removed text pre-fill from URLs
    navigator.clipboard.writeText(shareText).then(() => {
      // Show a brief notification
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);

      // Open LinkedIn feed in a new tab
      const linkedInUrl = 'https://www.linkedin.com/feed/';
      window.open(linkedInUrl, '_blank');
    }).catch(() => {
      // If clipboard fails, just open LinkedIn
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
    <div className="w-full max-w-2xl relative mt-8">
      {/* Floating Emoji Icon */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#FFF8E7] p-2 rounded-2xl shadow-sm border border-orange-100 z-10">
        <span className="text-3xl">🍳</span>
      </div>

      <div className="w-full bg-[#FFF8E7] rounded-3xl p-8 pt-12 shadow-lg border-b-8 border-r-4 border-[#E5DCC5] relative overflow-hidden">
        {copied && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded-full animate-fade-in z-20">
            Copied to clipboard!
          </div>
        )}

        {/* Header */}
        <div className="flex justify-between items-center mb-10 border-b-2 border-black/5 pb-4">
          <div className="flex flex-col">
            <h3 className="font-black text-xs text-[#556987] uppercase tracking-[0.2em]">
              {language === 'malayalam' ? 'ഔദ്യോഗിക റിപ്പോർട്ട്' : 'OFFICIAL CASE REPORT'}
            </h3>
            <span className="text-[10px] font-bold text-gray-400">REF: ROAST-2024-UX-💀</span>
          </div>
          <div className="bg-black text-[10px] text-white px-2 py-1 rounded font-black tracking-widest uppercase">
            {language === 'malayalam' ? 'അത്യാപത്ത്' : 'CRITICAL FAILURE'}
          </div>
        </div>

        {/* Content */}
        <div className="mb-12 relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#F4D03F]" />
          <p className="text-xl md:text-2xl font-black text-gray-900 leading-[1.4] tracking-tight italic">
            "{result.roasted_answer}"
          </p>
        </div>

        {/* Red Flags Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {[
            { label: language === 'malayalam' ? 'അനാവശ്യ തള്ളുകൾ' : 'GASLIGHTING LEVEL', value: 'MAX' },
            { label: language === 'malayalam' ? 'ജീവിതം ഗോപി' : 'SURVIVAL RATE', value: '0.02%' },
            { label: language === 'malayalam' ? 'പണി പാളി' : 'HIRE-ABILITY', value: 'NONE' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-1 border-l-2 border-gray-100 pl-3">
              <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</span>
              <span className="text-xs font-black text-black">{stat.value}</span>
            </div>
          ))}
        </div>
        {/* Footer Section */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-6">

          {/* Score Pill */}
          <div className="flex flex-col gap-2 w-full md:w-auto">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
              {language === 'malayalam' ? 'പണി കിട്ടാനുള്ള സാധ്യത' : 'CAREER DOOM METER'}
            </span>
            <div className="flex items-center bg-[#F4D03F] rounded-full p-1.5 pr-6 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] w-full md:w-auto min-w-[200px]">
              <div className="bg-black text-[#F4D03F] rounded-full px-4 py-1.5 font-black text-xl min-w-[80px] text-center">
                {displayScore}%
              </div>
              <div className="flex-1 text-center font-black text-black uppercase tracking-wider text-sm ml-2">
                {language === 'malayalam' ? 'ജീവിതം ഗോപി' : 'OFFICIALLY BURNT'}
              </div>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleLinkedInShare}
              className="w-12 h-12 rounded-full bg-[#F4D03F] border-2 border-black flex items-center justify-center hover:translate-y-1 hover:shadow-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-black"
              title="Share on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </button>
            <button
              onClick={handleCopy}
              className="w-12 h-12 rounded-full bg-[#F4D03F] border-2 border-black flex items-center justify-center hover:translate-y-1 hover:shadow-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-black"
              title="Copy to Clipboard"
            >
              <Copy className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
