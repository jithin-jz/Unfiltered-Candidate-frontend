import { useState } from 'react';
import Header from './components/Header';
import RoastInput from './components/RoastInput';
import RoastResult from './components/RoastResult';
import Footer from './components/Footer';
import HallOfFame from './components/HallOfFame';

export default function Roaster() {
  const [question, setQuestion] = useState('');
  const [language, setLanguage] = useState('english');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const [view, setView] = useState('roast');

  const handleRoast = async () => {
    if (!question.trim() || question.trim().length < 5) return;
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      let apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
      if (apiUrl.endsWith('/')) apiUrl = apiUrl.slice(0, -1);
      const response = await fetch(`${apiUrl}/api/roast`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, language }),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.detail || 'AI had a seizure.');
      }
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') handleRoast();
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start py-8 px-4" onKeyDown={handleKeyDown}>
      {view === 'roast' ? (
        <div className="w-full flex flex-col items-center">
          <Header />
          
          <RoastInput
            question={question}
            setQuestion={setQuestion}
            handleRoast={handleRoast}
            loading={loading}
            language={language}
            setLanguage={setLanguage}
          />

          {error && (
            <div className="mt-4 px-8 py-3 bg-roast-error border-4 border-roast-black text-white font-display font-black text-xs uppercase tracking-[0.2em] brutal-shadow animate-shake">
              // ERROR: {error}
            </div>
          )}

          <RoastResult result={result} question={question} />

          <button 
            onClick={() => setView('hall-of-fame')}
            className="mt-20 px-8 py-5 bg-white border-4 border-roast-black/10 text-roast-black/40 font-display font-black text-xs uppercase tracking-[0.4em] hover:border-roast-black hover:text-roast-black hover:brutal-shadow transition-all group"
          >
            // EXPLORE THE HALL OF SHAME //
          </button>
        </div>
      ) : (
        <HallOfFame onBack={() => setView('roast')} />
      )}

      <div className="mt-auto w-full">
        <Footer />
      </div>
    </div>
  );
}
