import React from 'react';
import { Smartphone, CheckCircle, MessageSquare, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const SolutionSection: React.FC = () => {
  const features = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Swipe Matching",
      description: "Intuitive Tinder-style interface. Swipe right to hire, left to pass. See photos, prices, and ratings instantly.",
      color: "bg-blue-500"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Vetted Meisters",
      description: "Rigorous ID checks and skills verification. Only 4.8+ star rated pros stay on the platform.",
      color: "bg-green-500"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Easy Booking",
      description: "In-app chat with auto-translation (LV/RU/EN). Escrow payments ensure safety for both sides.",
      color: "bg-purple-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Riga-First",
      description: "Hyper-local geo-matching. Special badges for snow removal and winter emergencies.",
      color: "bg-red-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-riga-blue font-bold tracking-wider uppercase text-sm">The Solution</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
            Match in Minutes, <span className="italic text-gray-500 font-serif">Fix in Hours.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col items-start"
            >
              <div className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 shadow-md`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mock Swedbank/Payment visual for localized trust */}
        <div className="mt-16 flex flex-col items-center justify-center text-center">
            <p className="text-sm text-gray-500 mb-6 uppercase tracking-widest">Secure Local Payments</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all items-center">
                <img src="https://logo.clearbit.com/swedbank.lv" alt="Swedbank" className="h-8 md:h-10 object-contain" />
                <img src="https://logo.clearbit.com/seb.lv" alt="SEB" className="h-8 md:h-10 object-contain" />
                <img src="https://logo.clearbit.com/citadele.lv" alt="Citadele" className="h-8 md:h-10 object-contain" />
                <img src="https://logo.clearbit.com/revolut.com" alt="Revolut" className="h-8 md:h-10 object-contain" />
            </div>
        </div>
      </div>
    </section>
  );
};