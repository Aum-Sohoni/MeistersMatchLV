import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { HowItWorks } from './components/HowItWorks';
import { MarketSection } from './components/MarketSection';
import { PricingWaitlist } from './components/PricingWaitlist';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { translations } from './translations';

export type Language = 'en' | 'lv' | 'ru';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('app-lang') as Language) || 'en';
    }
    return 'en';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('app-lang', lang);
  };

  const t = translations[language];

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        language={language} 
        setLanguage={changeLanguage}
        t={t}
      />
      <main>
        <Hero t={t} language={language} />
        <ProblemSection t={t} />
        <SolutionSection t={t} />
        <HowItWorks t={t} />
        <MarketSection t={t} />
        <PricingWaitlist t={t} />
      </main>
      <Footer t={t} />
      <CookieConsent t={t} />
    </div>
  );
}