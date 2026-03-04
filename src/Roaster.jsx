import { useState } from 'react';
import LanguageSwitcher from './components/LanguageSwitcher';
import Header from './components/Header';
import RoastInput from './components/RoastInput';
import RoastResult from './components/RoastResult';
import Footer from './components/Footer';

export default function Roaster() {
  const [question, setQuestion] = useState('');
  const [language, setLanguage] = useState('english');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleRoast = async () => {
    if (!question.trim() || question.trim().length < 5) return;

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      let apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
      // Clean up apiUrl to prevent double slashes
      if (apiUrl.endsWith('/')) {
        apiUrl = apiUrl.slice(0, -1);
      }
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
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      handleRoast();
    }
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-start py-8 px-4"
      onKeyDown={handleKeyDown}
    >
      <LanguageSwitcher language={language} setLanguage={setLanguage} />

      <div className="w-full flex flex-col items-center">
        <Header language={language} />

        <RoastInput
          question={question}
          setQuestion={setQuestion}
          handleRoast={handleRoast}
          loading={loading}
          language={language}
        />

        {error && (
          <div className="mt-4 px-6 py-2 bg-red-100 border-2 border-red-500 text-red-700 font-black text-[10px] uppercase tracking-widest rounded-full animate-shake">
            {error}
          </div>
        )}

        <RoastResult result={result} language={language} question={question} />
      </div>

      <div className="mt-auto">
        <Footer language={language} />
      </div>
    </div>
  );
}
