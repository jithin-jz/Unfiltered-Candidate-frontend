export default function Footer() {
  return (
    <footer className="mt-8 pb-4 text-center opacity-40 hover:opacity-100 transition-opacity duration-500">
      <div className="flex flex-col items-center gap-2">
        <p className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-500">
          Built to distract you from unemployment
        </p>

        <div className="flex items-center gap-1.5 text-[7px] font-bold text-gray-400 uppercase tracking-widest">
          <span>Powered by</span>
          <span className="text-black">Groq AI</span>
          <span className="text-gray-200">/</span>
          <span>Made with 💀</span>
        </div>

        <div className="flex justify-center items-center gap-4 mt-1">
          <a href="https://github.com/jithin-jz" target="_blank" className="hover:scale-125 transition-transform" aria-label="GitHub">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12C.5 17.1 3.8 21.4 8.4 22.9C9 23 9.2 22.6 9.2 22.3V20.3C6 21 5.3 18.9 5.3 18.9C4.8 17.7 4.2 17.4 4.2 17.4C3.3 16.8 4.3 16.8 4.3 16.8C5.3 16.9 5.9 17.8 5.9 17.8C6.8 19.4 8.3 18.9 8.9 18.6C9 17.9 9.3 17.5 9.6 17.2C7 16.9 4.3 15.9 4.3 11.3C4.3 10 4.8 8.9 5.5 8.1C5.4 7.8 5 6.6 5.6 5C5.6 5 6.6 4.7 8.9 6.2C11.2 5.4 13.6 5.4 15.9 6.2C18.2 4.7 19.2 5 19.2 5C19.8 6.6 19.4 7.8 19.3 8.1C20 8.9 20.5 10 20.5 11.3C20.5 15.9 17.8 16.9 15.2 17.2C15.6 17.6 16 18.3 16 19.5V22.4C16 22.7 16.2 23.1 16.8 23C21.4 21.4 24.7 17.1 24.7 12C24.7 5.65 19.35.5 12 .5Z" /></svg>
          </a>
          <a href="https://instagram.com/jithin.jz" target="_blank" className="hover:scale-125 transition-transform" aria-label="Instagram">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2H17C20 2 22 4 22 7V17C22 20 20 22 17 22H7C4 22 2 20 2 17V7C2 4 4 2 7 2ZM12 7.3A4.7 4.7 0 1 0 16.7 12A4.7 4.7 0 0 0 12 7.3ZM12 15A3 3 0 1 1 15 12A3 3 0 0 1 12 15ZM17.1 7.2A1.1 1.1 0 1 1 16 8.3A1.1 1.1 0 0 1 17.1 7.2Z" /></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
