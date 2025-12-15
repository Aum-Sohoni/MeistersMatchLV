import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Pick a Category",
      desc: "Plumbing, cleaning, electric, or snow removal. Tell us what you need."
    },
    {
      num: "02",
      title: "Swipe & Match",
      desc: "Browse vetted profiles nearby. Swipe right on the price and rating that fits."
    },
    {
      num: "03",
      title: "Chat & Fix",
      desc: "Confirm details in chat. The Meister arrives, does the job. Payment is released."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              3 Swipes to <span className="text-riga-blue underline decoration-4 decoration-riga-blue/30">Saved</span>.
            </h2>
            
            <div className="space-y-10 relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

              {steps.map((step, idx) => (
                <div key={idx} className="relative flex gap-6">
                  <div className="z-10 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-riga-blue flex items-center justify-center font-bold text-riga-blue shadow-sm shrink-0">
                    {step.num}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-green-100 dark:from-blue-900/20 dark:to-green-900/20 rounded-full blur-3xl opacity-50"></div>
            {/* Video Placeholder */}
            <div className="relative aspect-video bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border-4 border-white dark:border-gray-800 group cursor-pointer">
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                     <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
                  </div>
               </div>
               <img src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=800&auto=format&fit=crop" alt="Video thumbnail" className="w-full h-full object-cover opacity-60" />
               <div className="absolute bottom-4 left-4 text-white font-medium">
                  Watch how Anna fixed her sink in 15 mins
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};