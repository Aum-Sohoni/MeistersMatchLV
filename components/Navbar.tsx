import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Hammer } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Market', href: '#market' },
    { name: 'About', href: '#footer' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-riga-blue p-2 rounded-lg text-white transform group-hover:rotate-12 transition-transform">
            <Hammer size={24} fill="currentColor" />
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-gray-900 dark:text-white md:text-white shadow-sm md:shadow-none'}`}>
            Meister<span className="text-riga-blue">Match</span> LV
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium hover:text-riga-blue transition-colors ${
                isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${
              isScrolled 
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200' 
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#waitlist"
            onClick={(e) => handleNavClick(e, '#waitlist')}
            className="px-5 py-2.5 bg-riga-blue hover:bg-blue-500 text-white text-sm font-bold rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${
                isScrolled 
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200' 
                : 'bg-white/20 text-white'
            }`}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-lg ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-xl border-t border-gray-100 dark:border-gray-800 p-4 flex flex-col gap-4 animate-fade-in-down">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-medium text-gray-800 dark:text-gray-200 py-2 border-b border-gray-100 dark:border-gray-800 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={(e) => handleNavClick(e, '#waitlist')}
            className="w-full text-center py-3 bg-riga-blue text-white font-bold rounded-lg shadow-md active:scale-95 transition-transform"
          >
            Join Waitlist
          </a>
        </div>
      )}
    </nav>
  );
};