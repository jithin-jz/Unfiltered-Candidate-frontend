export default function Header({ language }) {
  return (
    <div className="animate-slide-up flex flex-col items-center mb-6 md:mb-10 pt-4">
      {/* Brand Badge */}
      <div className="group bg-white border-4 border-black rounded-2xl px-5 py-2 flex items-center gap-3 mb-6 shadow-[8px_8px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_#000] transition-all cursor-default">
        <span className="text-2xl md:text-3xl animate-bounce">💀</span>
        <div className="flex flex-col -space-y-1.5">
          <span className="text-lg md:text-xl font-black uppercase tracking-tighter text-black">
            {language === 'malayalam' ? 'കടക്ക് പുറത്ത്' : 'Unfiltered'}
          </span>
          <span className="text-[8px] font-black text-neon-orange uppercase tracking-[0.2em] text-center">
            Candidate AI
          </span>
        </div>
      </div>

      <div className="text-center px-4 max-w-2xl">
        <h1 className="text-3xl md:text-6xl font-[900] text-black leading-[0.9] tracking-tighter mb-4">
          {language === 'malayalam' ? (
            <>ഓരോരോ <br /><span className="text-red-500 underline decoration-4 underline-offset-8">തള്ളുകൾ!</span></>
          ) : (
            <>Stop the <br /><span className="text-red-500 underline decoration-8 underline-offset-10">Corporate BS.</span></>
          )}
        </h1>
        <p className="text-xs md:text-sm text-gray-400 font-black uppercase tracking-widest opacity-80 max-w-md mx-auto leading-relaxed mt-6">
          {language === 'malayalam'
            ? 'HR ചോദ്യങ്ങളിലെ കപടത റോസ്റ്റ് ചെയ്യാൻ ഒരു AI.'
            : 'AI roasts for interview questions that make you want to quit.'}
        </p>
      </div>
    </div>
  );
}

