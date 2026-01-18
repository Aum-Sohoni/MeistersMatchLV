
import React, { useState } from 'react';
import { ArrowRight, Heart, X, Hammer } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

const MOCK_CARDS = [
  { id: 1, name: "Jānis Bērziņš", age: 32, job: "Pro Plumber", exp: "5 yr exp", price: "€25/h", dist: "1.2km", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "Ieva Kalniņa", age: 28, job: "Deep Cleaner", exp: "3 yr exp", price: "€15/h", dist: "0.8km", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "Artūrs Liepiņš", age: 45, job: "Electrician", exp: "15 yr exp", price: "€40/h", dist: "2.5km", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop" },
  { id: 4, name: "Sintija Ozola", age: 24, job: "Babysitter", exp: "2 yr exp", price: "€10/h", dist: "0.5km", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop" }
];

export const Hero: React.FC<{ t: any, language: string }> = ({ t, language }) => {
  const [cards, setCards] = useState(MOCK_CARDS);
  const [isLoading, setIsLoading] = useState(false);

  const handleSwipe = (direction: 'left' | 'right') => {
    setCards(prev => {
      const next = prev.slice(1);
      if (next.length === 0) {
        setIsLoading(true);
        setTimeout(() => {
          setCards(MOCK_CARDS);
          setIsLoading(false);
        }, 1500);
      }
      return next;
    });
  };

  return (
    <section className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden bg-riga-dark">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-riga-blue/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-900/20 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-riga-dark/80 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center pt-16">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="text-white space-y-6 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium text-blue-100">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            {t.hero_badge}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            {t.hero_title_1} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-riga-blue to-white">{t.hero_title_highlight}</span> <br/>
            {t.hero_title_2}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">{t.hero_desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#waitlist" className="px-8 py-4 bg-riga-blue hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1">
              {t.hero_cta} <ArrowRight size={20} />
            </a>
          </div>
          <div className="flex items-center gap-4 pt-6 text-sm text-gray-400">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} className="w-8 h-8 rounded-full border-2 border-riga-dark" alt="User" />
              ))}
            </div>
            <p>{t.hero_trusted}</p>
          </div>
        </motion.div>

        <div className="relative hidden md:flex justify-center">
          <div className="relative w-[320px] h-[640px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden select-none">
            <div className="absolute top-0 left-0 w-full h-full bg-gray-100 dark:bg-gray-800 flex flex-col">
              <div className="h-8 w-full bg-black/20 flex justify-between px-6 items-center text-[10px] text-white z-20">
                <span>9:41</span><span>5G</span>
              </div>
              <div className="p-4 flex justify-between items-center bg-white dark:bg-gray-900 shadow-sm z-20">
                <span className="font-bold text-riga-blue flex items-center gap-1">
                  <Hammer size={16} /> MeisterMatch
                </span>
                <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                  <img src="https://i.pravatar.cc/100?img=1" className="w-full h-full object-cover" alt="Profile" />
                </div>
              </div>
              <div className="flex-1 relative p-4 flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900">
                <AnimatePresence mode="popLayout">
                  {isLoading ? (
                    <motion.div key="loader" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 border-4 border-riga-blue border-t-transparent rounded-full animate-spin mb-4"></div>
                      <p className="text-gray-500 text-sm font-medium px-4">{t.loading_masters}</p>
                    </motion.div>
                  ) : (
                    cards.length > 0 && (
                      <SwipeCard 
                        key={cards[0].id} 
                        data={cards[0]} 
                        onSwipe={handleSwipe} 
                      />
                    )
                  )}
                </AnimatePresence>
              </div>
              <div className="h-20 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex items-center justify-center gap-8 z-20">
                <button onClick={() => handleSwipe('left')} className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 text-red-500 shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:scale-110 transition-transform">
                  <X size={24} />
                </button>
                <button onClick={() => handleSwipe('right')} className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 text-green-500 shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:scale-110 transition-transform">
                  <Heart size={24} fill="currentColor" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Fix: Use React.FC to properly handle React internal props like 'key'
const SwipeCard: React.FC<{ data: any, onSwipe: (dir: 'left' | 'right') => void }> = ({ data, onSwipe }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);
  const likeOpacity = useTransform(x, [50, 150], [0, 1]);
  const nopeOpacity = useTransform(x, [-150, -50], [1, 0]);

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x > 100) onSwipe('right');
    else if (info.offset.x < -100) onSwipe('left');
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      style={{ x, rotate, opacity }}
      onDragEnd={handleDragEnd}
      className="absolute w-[260px] h-[380px] bg-white dark:bg-gray-800 rounded-2xl shadow-xl border dark:border-gray-700 cursor-grab active:cursor-grabbing overflow-hidden"
    >
      <div className="h-2/3 w-full bg-gray-200 relative pointer-events-none">
        <img src={data.img} className="w-full h-full object-cover" alt={data.name} />
        <motion.div style={{ opacity: likeOpacity }} className="absolute top-4 left-4 border-4 border-green-500 text-green-500 font-black text-2xl px-2 py-1 rounded rotate-[-15deg]">LIKE</motion.div>
        <motion.div style={{ opacity: nopeOpacity }} className="absolute top-4 right-4 border-4 border-red-500 text-red-500 font-black text-2xl px-2 py-1 rounded rotate-[15deg]">NOPE</motion.div>
        <div className="absolute bottom-2 left-2 bg-black/50 text-white text-[10px] px-2 py-1 rounded flex items-center">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span> {data.dist}
        </div>
      </div>
      <div className="p-4 pointer-events-none">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-base text-gray-900 dark:text-white">{data.name}, {data.age}</h3>
            <p className="text-gray-500 text-xs">{data.job}</p>
            <p className="text-gray-400 text-[10px]">{data.exp}</p>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-riga-blue font-bold text-sm">{data.price}</span>
            <span className="text-yellow-500 text-[10px]">★ 4.9</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
