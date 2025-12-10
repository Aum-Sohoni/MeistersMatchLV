import React from 'react';
import { TrendingUp, Users, ThumbsUp } from 'lucide-react';

export const MarketSection: React.FC = () => {
  return (
    <section id="market" className="py-20 bg-riga-blue text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">€50M Riga Gig Opportunity</h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            The gig economy is growing 7% annually. We are building the infrastructure for the next generation of Latvian workers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
            <TrendingUp className="w-10 h-10 mx-auto mb-4 text-green-300" />
            <h3 className="text-4xl font-extrabold mb-2">5-7%</h3>
            <p className="text-sm text-blue-100">CAGR Growth in Gig Economy</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
            <Users className="w-10 h-10 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-4xl font-extrabold mb-2">50,000+</h3>
            <p className="text-sm text-blue-100">Monthly searches for help in Riga</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
            <ThumbsUp className="w-10 h-10 mx-auto mb-4 text-pink-300" />
            <h3 className="text-4xl font-extrabold mb-2">70%</h3>
            <p className="text-sm text-blue-100">Interest from r/latvia polls</p>
          </div>
        </div>

        <div className="mt-16 bg-white/5 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="text-left md:w-2/3">
             <div className="text-2xl font-serif italic mb-4">"Saved my winter! The snow removal guy arrived in 45 minutes when my car was stuck. Essential app for Riga."</div>
             <div className="font-bold flex items-center gap-2">
               <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" className="w-10 h-10 rounded-full border border-white object-cover" alt="Anna"/>
               <div>
                  <div>Anna K.</div>
                  <div className="text-xs text-blue-200">Mom & Homeowner, Teika</div>
               </div>
             </div>
           </div>
           <div className="md:w-1/3 flex flex-wrap gap-6 justify-center items-center opacity-70">
              <img src="https://logo.clearbit.com/bta.lv" alt="BTA" className="h-10 object-contain" />
              {/* DEPO simulated logo */}
              <div className="h-10 px-4 bg-[#FF6600] text-black font-extrabold flex items-center justify-center text-xl tracking-tighter rounded-sm shadow-sm">
                DEPO
              </div>
              <img src="https://logo.clearbit.com/ss.com" alt="ss.com" className="h-8 object-contain" />
           </div>
        </div>
      </div>
    </section>
  );
};