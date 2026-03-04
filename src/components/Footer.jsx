import React from 'react';
import LinkedinIcon from '@/components/ui/linkedin-icon';
import GithubIcon from '@/components/ui/github-icon';
import InstagramIcon from '@/components/ui/instagram-icon';

export default function Footer({ language }) {
  return (
    <footer className="mt-auto pt-12 pb-8 text-sm font-medium text-gray-400">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="text-center space-y-1">
          <h1 className="italic opacity-40 font-bold">
            {language === 'malayalam'
              ? '“നിങ്ങളുടെ ജോലി സാധ്യതകൾ വിജയകരമായി ഇല്ലാതാക്കി.”'
              : '“Successfully eliminating your career prospects since 2024.”'}
          </h1>
          <p className="text-[10px] uppercase tracking-[0.4em] opacity-30 font-black">
            Corporate Destruction Division
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-8 opacity-60 hover:opacity-100 transition-opacity">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jithin-kr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            <LinkedinIcon size={22} className="text-gray-400 hover:text-black" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/jithin-jz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            <GithubIcon size={22} className="text-gray-400 hover:text-black" />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/jithin.jz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            <InstagramIcon size={22} className="text-gray-400 hover:text-black" />
          </a>
        </div>
      </div>
    </footer>
  );
}
