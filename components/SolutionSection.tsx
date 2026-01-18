import React from 'react';
import { Smartphone, CheckCircle, MessageSquare, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const SolutionSection: React.FC<{ t: any }> = ({ t }) => {
  const features = [
    { icon: <Smartphone className="w-6 h-6" />, title: t.sol_1_title, description: t.sol_1_desc, color: "bg-blue-500" },
    { icon: <CheckCircle className="w-6 h-6" />, title: t.sol_2_title, description: t.sol_2_desc, color: "bg-green-500" },
    { icon: <MessageSquare className="w-6 h-6" />, title: t.sol_3_title, description: t.sol_3_desc, color: "bg-purple-500" },
    { icon: <MapPin className="w-6 h-6" />, title: t.sol_4_title, description: t.sol_4_desc, color: "bg-red-500" }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-riga-blue font-bold tracking-wider uppercase text-sm">{t.solution_label}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-6">{t.solution_title}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div key={index} whileHover={{ y: -5 }} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col items-start transition-all">
              <div className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 shadow-md`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-center text-center">
            <p className="text-sm text-gray-500 mb-6 uppercase tracking-widest">{t.secure_payments}</p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 items-center">
                {[
                  "https://logo.clearbit.com/swedbank.lv",
                  "https://logo.clearbit.com/seb.lv",
                  "https://logo.clearbit.com/citadele.lv",
                  "https://logo.clearbit.com/revolut.com"
                ].map((src, i) => (
                  <div key={i} className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center w-32 h-16">
                    <img src={src} className="max-h-full max-w-full object-contain" alt="Partner Bank" />
                  </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};