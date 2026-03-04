import { Github, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-10 flex flex-col items-center gap-8 mt-auto">
      <div className="flex items-center gap-6">
        <a
          href="https://github.com/jithin-jz"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white border-4 border-black rounded-2xl shadow-[6px_6px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:scale-95"
        >
          <Github size={22} />
        </a>
        <a
          href="https://instagram.com/jithin.jz"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white border-4 border-black rounded-2xl shadow-[6px_6px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:scale-95"
        >
          <Instagram size={22} />
        </a>
      </div>

      <div className="flex flex-col items-center gap-3">
        <p className="text-[9px] md:text-[11px] font-[900] uppercase tracking-[0.5em] text-gray-400 text-center px-4">
          Built to distract you from unemployment
        </p>
        <div className="flex items-center gap-2.5 bg-black/[0.03] px-4 py-1.5 rounded-full border border-black/5">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-glow" />
          <span className="text-[8px] font-black text-black/40 uppercase tracking-[0.2em] pt-0.5">
            AI Roaster Online & Judging
          </span>
        </div>
      </div>
    </footer>
  );
}

