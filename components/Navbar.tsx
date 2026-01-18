import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Hammer } from 'lucide-react';
import { Language } from '../App';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode, language, setLanguage, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav_features, href: '#features' },
    { name: t.nav_how, href: '#how-it-works' },
    { name: t.nav_market, href: '#market' },
    { name: t.nav_about, href: '#footer' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const LangBtn = ({ lang, label }: { lang: Language, label: string }) => {
    const isActive = language === lang;
    return (
      <button
        onClick={() => setLanguage(lang)}
        className={`px-2 py-1 text-xs rounded-full transition-all duration-200 ${
          isActive 
            ? (isScrolled ? 'bg-riga-blue text-white font-bold' : 'bg-white/20 text-white font-bold') 
            : (isScrolled ? 'text-gray-500 hover:text-gray-900 dark:text-gray-400' : 'text-white/70 hover:text-white')
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-riga-blue p-2 rounded-lg text-white transform group-hover:rotate-12 transition-transform">
            <Hammer size={24} fill="currentColor" />
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
            Meister<span className="text-riga-blue">Match</span> LV
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-gray-700 dark:text-gray-300 hover:text-riga-blue' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <div className={`flex items-center gap-1 p-1 rounded-full border transition-colors ${
            isScrolled ? 'bg-gray-100/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700' : 'bg-white/10 border-white/10'
          }`}>
            <LangBtn lang="en" label="EN" />
            <LangBtn lang="lv" label="LV" />
            <LangBtn lang="ru" label="RU" />
          </div>

          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${
              isScrolled ? 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200' : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a href="#waitlist" onClick={(e) => handleNavClick(e, '#waitlist')}
            className="px-5 py-2.5 bg-riga-blue hover:bg-blue-500 text-white text-sm font-bold rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {t.nav_waitlist}
          </a>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleDarkMode} className={`p-2 rounded-full ${isScrolled ? 'bg-gray-100 dark:bg-gray-800' : 'bg-white/20 text-white'}`}>
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className={`p-2 rounded-lg ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-xl border-t border-gray-100 dark:border-gray-800 p-4 flex flex-col gap-4 animate-fade-in-down">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-medium text-gray-800 dark:text-gray-200 py-2 border-b border-gray-100 dark:border-gray-800 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <div className="flex justify-center gap-4 py-2">
            {(['en', 'lv', 'ru'] as Language[]).map(l => (
              <button key={l} onClick={() => { setLanguage(l); setIsOpen(false); }}
                className={`px-4 py-2 rounded-lg text-sm font-bold ${language === l ? 'bg-riga-blue text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600'}`}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a href="#waitlist" onClick={(e) => handleNavClick(e, '#waitlist')}
            className="w-full text-center py-3 bg-riga-blue text-white font-bold rounded-lg shadow-md active:scale-95"
          >
            {t.nav_waitlist}
          </a>
        </div>
      )}
    </nav>
  );
};