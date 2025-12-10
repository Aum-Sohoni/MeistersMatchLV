import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const avatars = [
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop"
  ];

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-riga-dark">
      {/* Background - Image Removed, replaced with gradients/pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient blobs for atmosphere */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-riga-blue/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-900/20 rounded-full blur-[100px]"></div>
        
        {/* Dark overlay base */}
        <div className="absolute inset-0 bg-riga-dark/80 backdrop-blur-[1px]"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center pt-16">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-6 max-w-xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium text-blue-100">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Live in Riga, Latvia
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Swipe Right for a <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-riga-blue to-white">
              Meister
            </span> <br/>
            Who Shows Up.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Latvia's fastest way to match with vetted masters. Plumbers, cleaners, babysitters & more.
            <br className="hidden md:block"/> No more ss.lv ghosts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#waitlist"
              className="px-8 py-4 bg-riga-blue hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1"
            >
              Join Waitlist <ArrowRight size={20} />
            </a>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all">
              <PlayCircle size={20} /> See Demo
            </button>
          </div>

          <div className="flex items-center gap-4 pt-6 text-sm text-gray-400">
            <div className="flex -space-x-2">
              {avatars.map((src, i) => (
                <img 
                  key={i}
                  src={src} 
                  alt={`User ${i}`} 
                  className="w-8 h-8 rounded-full border-2 border-riga-dark object-cover"
                />
              ))}
            </div>
            <p>Trusted by 500+ Riga locals on the waitlist</p>
          </div>
        </motion.div>

        {/* Phone Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:flex justify-center"
        >
          <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
            {/* Phone Screen */}
            <div className="absolute top-0 left-0 w-full h-full bg-gray-100 dark:bg-gray-800 flex flex-col">
              {/* Fake Status Bar */}
              <div className="h-6 w-full bg-black/20 flex justify-between px-6 items-center text-[10px] text-white">
                <span>9:41</span>
                <span>5G</span>
              </div>
              
              {/* App Header */}
              <div className="p-4 flex justify-between items-center bg-white dark:bg-gray-900 shadow-sm z-10">
                <span className="font-bold text-riga-blue">MeisterMatch</span>
                <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" className="w-full h-full object-cover" alt="Profile" />
                </div>
              </div>

              {/* Card Stack Simulation */}
              <div className="flex-1 relative p-4 flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900">
                {/* Background Card */}
                <div className="absolute w-[90%] h-[400px] bg-white dark:bg-gray-800 rounded-2xl shadow-lg transform translate-y-4 scale-95 opacity-50 border dark:border-gray-700"></div>
                {/* Middle Card */}
                <div className="absolute w-[90%] h-[400px] bg-white dark:bg-gray-800 rounded-2xl shadow-lg transform translate-y-2 scale-98 opacity-80 border dark:border-gray-700"></div>
                
                {/* Front Card */}
                <motion.div 
                  animate={{ 
                    x: [0, 50, 0, -50, 0],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative w-[90%] h-[400px] bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border dark:border-gray-700"
                >
                  <div className="h-2/3 w-full bg-gray-200 relative">
                     {/* Updated Phone Image - White Male Portrait */}
                     <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Meister Profile" />
                     <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-md flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span> 1.2km away
                     </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">Jānis Bērziņš, 32</h3>
                        <p className="text-gray-500 text-sm">Pro Plumber • 5 yr exp</p>
                      </div>
                      <div className="flex flex-col items-end">
                         <span className="text-riga-blue font-bold">€25/h</span>
                         <span className="text-yellow-500 text-sm">★ 4.9</span>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-red-100 text-red-500 flex items-center justify-center shadow-sm">✕</div>
                       <div className="w-12 h-12 rounded-full bg-green-100 text-green-500 flex items-center justify-center shadow-sm">♥</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};