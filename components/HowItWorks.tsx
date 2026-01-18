import React from 'react';

export const HowItWorks: React.FC<{ t: any }> = ({ t }) => {
  const steps = [
    { num: "01", title: t.step_1_title, desc: t.step_1_desc },
    { num: "02", title: t.step_2_title, desc: t.step_2_desc },
    { num: "03", title: t.step_3_title, desc: t.step_3_desc }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-16">{t.how_title}</h2>
        <div className="grid md:grid-cols-3 gap-12 text-left relative">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 border-2 border-riga-blue flex items-center justify-center font-bold text-riga-blue text-xl shadow-md mb-6 group-hover:scale-110 transition-transform">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};