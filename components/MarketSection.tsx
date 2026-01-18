import React from 'react';
import { TrendingUp, Users, ThumbsUp } from 'lucide-react';

export const MarketSection: React.FC<{ t: any }> = ({ t }) => {
  return (
    <section id="market" className="py-20 bg-riga-blue text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.market_title}</h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">{t.market_desc}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
            <TrendingUp className="w-10 h-10 mx-auto mb-4 text-green-300" />
            <h3 className="text-4xl font-extrabold mb-2">5-7%</h3>
            <p className="text-sm text-blue-100">{t.market_stat_1}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
            <Users className="w-10 h-10 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-4xl font-extrabold mb-2">50,000+</h3>
            <p className="text-sm text-blue-100">{t.market_stat_2}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
            <ThumbsUp className="w-10 h-10 mx-auto mb-4 text-pink-300" />
            <h3 className="text-4xl font-extrabold mb-2">70%</h3>
            <p className="text-sm text-blue-100">{t.market_stat_3}</p>
          </div>
        </div>

        <div className="mt-16 bg-white/5 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="text-left md:w-2/3">
             <div className="text-2xl font-serif italic mb-4">{t.testimonial}</div>
             <div className="font-bold flex items-center gap-2">
               <img src="https://i.pravatar.cc/100?img=44" className="w-10 h-10 rounded-full border border-white object-cover" alt="Anna"/>
               <div>
                  <div>{t.testimonial_author}</div>
                  <div className="text-xs text-blue-200">{t.testimonial_role}</div>
               </div>
             </div>
           </div>
           <div className="md:w-1/3 flex flex-wrap gap-4 justify-center items-center">
              <div className="bg-white p-2 rounded shadow-sm w-20 flex items-center justify-center">
                <img src="https://logo.clearbit.com/bta.lv" className="max-h-6 grayscale opacity-80" alt="Partner" />
              </div>
              <div className="h-8 px-4 bg-[#FF6600] text-black font-extrabold flex items-center justify-center text-lg tracking-tighter rounded-sm shadow-sm border border-white">
                DEPO
              </div>
              <div className="bg-white p-2 rounded shadow-sm w-20 flex items-center justify-center">
                <img src="https://logo.clearbit.com/ss.com" className="max-h-6 grayscale opacity-80" alt="Partner" />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};