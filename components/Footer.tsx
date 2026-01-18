import React from 'react';
import { Hammer } from 'lucide-react';

export const Footer: React.FC<{ t: any }> = ({ t }) => {
  return (
    <footer id="footer" className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-riga-blue p-1.5 rounded-md text-white">
              <Hammer size={20} fill="currentColor" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">MeisterMatch LV</span>
          </a>
          <div className="flex gap-8 text-sm text-gray-500 dark:text-gray-400">
            <a href="#features" className="hover:text-riga-blue transition-colors">{t.nav_features}</a>
            <a href="#how-it-works" className="hover:text-riga-blue transition-colors">{t.nav_how}</a>
            <a href="#market" className="hover:text-riga-blue transition-colors">{t.nav_market}</a>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            {t.footer_rights}
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-400">
             <span>{t.footer_made}</span>
             <div className="h-3 w-5 bg-latvia-red relative border border-gray-600/20">
                <div className="absolute top-1/3 bottom-1/3 left-0 right-0 bg-white"></div>
             </div>
             <span>Latvia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};