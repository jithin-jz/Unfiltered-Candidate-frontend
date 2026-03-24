import React from 'react';
import LinkedinIcon from '@/components/ui/linkedin-icon';
import GithubIcon from '@/components/ui/github-icon';
import InstagramIcon from '@/components/ui/instagram-icon';

export default function Footer() {
  const socials = [
    { icon: LinkedinIcon, href: "https://www.linkedin.com/in/jithin-kr" },
    { icon: GithubIcon, href: "https://github.com/jithin-jz" },
    { icon: InstagramIcon, href: "https://instagram.com/jithin.jz" },
  ];
  return (
    <footer className="mt-auto pt-24 pb-12 w-full px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 border-t-4 border-roast-black pt-12">
        <div className="text-center md:text-left space-y-2">
          <h1 className="font-display font-black text-2xl text-roast-black leading-none">
            THE UNFILTERED CANDIDATE.
          </h1>
          <p className="text-[10px] uppercase tracking-[0.4em] text-roast-black/40 font-black">
            // CAREER DESTRUCTION DIVISION //
          </p>
        </div>

        <div className="flex justify-center items-center gap-6">
          {socials.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white border-4 border-roast-black text-roast-black hover:bg-roast-primary hover:translate-y-[-2px] brutal-shadow transition-all"
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-[8px] font-black text-roast-black/30 uppercase tracking-[0.2em] leading-relaxed">
            PRODUCED BY JITHIN<br />
            (C) 2026 UNFILTERED CANDIDATE
          </p>
        </div>
      </div>
    </footer>
  );
}
