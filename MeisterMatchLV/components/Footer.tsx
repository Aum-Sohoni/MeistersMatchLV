import React from 'react';
import { Twitter, Facebook, Instagram, Hammer } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="bg-riga-blue p-1.5 rounded-md text-white">
                <Hammer size={20} fill="currentColor" />
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                MeisterMatch LV
              </span>
            </a>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
              Founded in Riga. Solving local pains with global tech. Match in minutes, fix in hours.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-riga-blue transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-riga-blue transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-riga-blue transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#features" className="hover:text-riga-blue">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-riga-blue">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-riga-blue">Pricing</a></li>
              <li><a href="#" className="hover:text-riga-blue">For Meisters</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-riga-blue">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-riga-blue">Terms of Service</a></li>
              <li><a href="#" className="hover:text-riga-blue">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-riga-blue">GDPR Compliance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>info@meistermatch.lv</li>
              <li>+371 20 000 000</li>
              <li>Brīvības iela 123, Rīga</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2025 MeisterMatch LV. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-400">
             <span>Proudly made in</span>
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