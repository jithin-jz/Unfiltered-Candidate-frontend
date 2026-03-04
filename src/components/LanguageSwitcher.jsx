export default function LanguageSwitcher({ language, setLanguage }) {
  return (
    <div className="fixed top-4 right-4 md:top-6 md:right-6 flex gap-1 bg-[#FFF8E7] p-1 rounded-full z-50 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
      <button
        onClick={() => setLanguage('english')}
        className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${language === 'english'
            ? 'bg-[#F4D03F] text-black border border-black/20 shadow-inner'
            : 'text-gray-400 hover:text-black'
          }`}
      >
        ENG
      </button>
      <button
        onClick={() => setLanguage('malayalam')}
        className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${language === 'malayalam'
            ? 'bg-[#F4D03F] text-black border border-black/20 shadow-inner'
            : 'text-gray-400 hover:text-black'
          }`}
      >
        MAL
      </button>
    </div>
  );
}
