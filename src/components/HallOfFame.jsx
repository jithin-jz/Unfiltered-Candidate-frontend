import React from 'react';
import { ArrowLeft, Trophy, Share2, ThumbsDown } from 'lucide-react';

const FAME_DATA = [
  {
    question: "What is your greatest weakness?",
    roast: "Your greatest weakness is clearly your inability to come up with a better question than the one everyone else found on the first page of Google.",
    toxicity: 85,
  },
  {
    question: "Why should we hire you?",
    roast: "Because you're cheaper than a functional department and more obedient than a golden retriever with a mid-life crisis.",
    toxicity: 94,
  },
  {
    question: "Where do you see yourself in 5 years?",
    roast: "Still explaining this gap in your resume to a 22-year-old HR intern who thinks 'corporate culture' involves free table tennis.",
    toxicity: 89,
  }
];

export default function HallOfFame({ onBack }) {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-6 animate-fade-in">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20 md:mb-24 px-4 overflow-hidden">
        <button 
          onClick={onBack}
          className="order-2 md:order-1 p-4 bg-white border-4 border-roast-black text-roast-black hover:bg-roast-primary hover:translate-y-[-2px] brutal-shadow transition-all group"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        </button>
        <h1 className="order-1 md:order-2 font-display font-black text-5xl md:text-8xl text-roast-black uppercase tracking-tighter text-center md:text-right leading-[0.8] relative">
          Hall of <br />
          <span className="bg-roast-primary px-4 inline-block transform -rotate-1 brutal-border">Shame</span>
        </h1>
      </div>

      <div className="grid gap-12 md:gap-16">
        {FAME_DATA.map((entry, i) => (
          <div key={i} className="bg-white p-8 md:p-12 border-4 border-roast-black brutal-shadow relative group">
            <div className="absolute -top-6 -left-6 bg-roast-primary text-roast-black px-6 py-2 font-display font-black text-2xl border-4 border-roast-black brutal-shadow z-10 transition-transform group-hover:scale-110">
              #{i + 1}
            </div>
            
            <div className="mb-10">
              <span className="text-[10px] font-black text-roast-black/30 uppercase tracking-[0.4em] mb-4 block">// INVESTIGATIVE QUERY</span>
              <p className="text-xl md:text-3xl font-display font-black text-roast-black/30 uppercase tracking-tighter leading-tight">{entry.question}</p>
            </div>

            <div className="mb-12 p-8 bg-roast-bg border-l-8 border-roast-primary">
              <span className="text-[10px] font-black text-roast-primary uppercase tracking-[0.4em] mb-4 block">// THE DESTRUCTION</span>
              <p className="text-2xl md:text-4xl font-display font-black text-roast-black uppercase tracking-tighter leading-[0.9]">"{entry.roast}"</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-10 border-t-4 border-roast-black/5 pt-10">
              <div className="w-full md:w-2/3">
                <span className="text-[10px] font-black text-roast-black/30 uppercase tracking-[0.4em] mb-4 block">BRUTALITY INDEX</span>
                <div className="h-6 bg-roast-bg border-4 border-roast-black relative overflow-hidden">
                  <div 
                    className="h-full bg-roast-primary transition-all duration-1000 ease-out" 
                    style={{ width: `${entry.toxicity}%` }}
                  />
                  <span className="absolute inset-0 flex items-center justify-center font-display font-black text-roast-black text-[10px] uppercase tracking-widest">{entry.toxicity}% LETHAL</span>
                </div>
              </div>

              <div className="flex gap-4 w-full md:w-auto">
                <button className="flex-1 md:flex-none p-4 bg-white border-4 border-roast-black text-roast-black hover:bg-roast-primary transition-all active:scale-95">
                  <ThumbsDown className="w-6 h-6 mx-auto" />
                </button>
                <button className="flex-1 md:flex-none p-4 bg-white border-4 border-roast-black text-roast-black hover:bg-roast-primary transition-all active:scale-95">
                  <Share2 className="w-6 h-6 mx-auto" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 text-center pb-20">
        <p className="font-display font-black text-roast-black/20 uppercase tracking-[0.6em] mb-8 text-[10px]">Ready to Join the Ranks?</p>
        <button 
          onClick={onBack}
          className="bg-roast-primary text-roast-black px-12 md:px-16 py-6 md:py-8 font-display font-black text-2xl md:text-4xl border-4 border-roast-black brutal-shadow hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg active:translate-x-[2px] active:translate-y-[2px] transition-all uppercase leading-none"
        >
          Begin assessment
        </button>
      </div>
    </div>
  );
}
