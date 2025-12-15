import React from 'react';
import { Ghost, Clock, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "1-3 Day Waits",
      description: "For urgent fixes? A pipe burst doesn't wait for business hours."
    },
    {
      icon: <Ghost className="w-8 h-8 text-gray-500" />,
      title: "ss.lv Ghosts",
      description: "You call, they promise to come, then vanish. Typical Friday."
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-red-500" />,
      title: "No Accountability",
      description: "Scams on unverified directories. No reviews, no trust."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tired of <span className="text-riga-blue">ss.lv</span> Ghosts & Facebook Flakes?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            50k+ Riga folks search for help daily—80% are frustrated with the current chaos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual Comic Side */}
          <div className="relative">
            <div className="absolute inset-0 bg-riga-blue/5 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                   <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0 overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" alt="Ghosted" className="w-full h-full object-cover" />
                   </div>
                   <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-r-xl rounded-bl-xl flex-1">
                      <p className="font-semibold text-gray-500 text-xs uppercase mb-1">The Old Way</p>
                      <p className="text-gray-800 dark:text-gray-300 text-sm">"Hello? Can you fix my sink today?"</p>
                      <p className="text-red-500 text-xs font-bold mt-2">Read 10:45 AM • No Reply</p>
                   </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <span className="text-2xl">⬇️</span>
                </div>

                <div className="flex gap-4">
                   <div className="w-12 h-12 bg-riga-blue rounded-full flex-shrink-0 flex items-center justify-center text-white overflow-hidden ring-2 ring-riga-blue ring-offset-2 dark:ring-offset-gray-800">
                      <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" alt="Meister" className="w-full h-full object-cover" />
                   </div>
                   <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 p-4 rounded-r-xl rounded-bl-xl flex-1 shadow-sm">
                      <p className="font-semibold text-riga-blue text-xs uppercase mb-1">MeisterMatch</p>
                      <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">Match found! Jānis is 1.2km away.</p>
                      <div className="mt-3 flex gap-2">
                        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Vetted</span>
                        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">4.9 ★</span>
                        <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded">&lt; 30 mins</span>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bullets Side */}
          <div className="space-y-8">
            {problems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors"
              >
                <div className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};