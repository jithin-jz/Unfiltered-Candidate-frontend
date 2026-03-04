export default function Header({ language }) {
  return (
    <div className="animate-slide-up flex flex-col items-center mb-4 md:mb-6">
      {/* Brand Badge */}
      <div className="bg-white border-2 border-black rounded-full px-4 py-1.5 flex items-center gap-2.5 mb-5 shadow-[3px_3px_0_0_#000] animate-float">
        <span className="text-lg md:text-xl">💀</span>
        <div className="flex flex-col -space-y-1">
          <span className="text-base md:text-lg font-black uppercase tracking-tighter text-black">
            {language === 'malayalam' ? 'താൻ ചോദിക്ക്' : 'Unfiltered'}
          </span>
          <span className="text-[7px] font-black text-gray-400 uppercase tracking-widest text-center">
            Candidate
          </span>
        </div>
      </div>

      <div className="text-center px-4 max-w-2xl">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-black leading-tight mb-2">
          {language === 'malayalam' ? (
            <>കടക്ക് പുറത്ത്! <br /><span className="text-gray-400 font-extrabold">റോസ്റ്റ് ചെയ്യാം.</span></>
          ) : (
            <>HR questions are <br /><span className="text-gray-400 font-extrabold">pure comedy.</span></>
          )}
        </h1>
        <p className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-tight opacity-70">
          {language === 'malayalam'
            ? 'കപടതയില്ലാത്ത മറുപടികൾക്ക് സ്വാഗതം.'
            : 'Unfiltered AI roasts for the corporate delusional.'}
        </p>
      </div>
    </div>
  );
}
