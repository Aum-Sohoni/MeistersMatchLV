import React, { useState, useEffect } from 'react';
import { Check, Mail, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../supabase';

export const PricingWaitlist: React.FC<{ t: any }> = ({ t }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [position, setPosition] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const savedEmail = localStorage.getItem('waitlist-email');
    if (savedEmail) {
      setIsSuccess(true);
      setPosition(localStorage.getItem('waitlist-position') || '---');
      // Optionally fetch real-time position from DB
      fetchCurrentPosition(savedEmail);
    }
  }, []);

  const fetchCurrentPosition = async (emailStr: string) => {
    try {
      const { count, error } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact', head: true })
        .lt('created_at', (await supabase.from('waitlist').select('created_at').eq('email', emailStr).single()).data?.created_at || new Date().toISOString());

      if (!error && count !== null) {
        const pos = (count + 1).toString();
        setPosition(pos);
        localStorage.setItem('waitlist-position', pos);
      }
    } catch (e) {
      console.error("Failed to fetch position", e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setErrorMsg(null);
    
    try {
      // 1. Insert into Supabase
      const { data, error } = await supabase
        .from('waitlist')
        .insert([{ email }])
        .select();

      if (error) {
        // Handle unique constraint (email already exists)
        if (error.code === '23505') {
          // Already on the list, just show success
          await fetchCurrentPosition(email);
          setIsSuccess(true);
          localStorage.setItem('waitlist-email', email);
        } else {
          throw error;
        }
      } else {
        // New signup success
        await fetchCurrentPosition(email);
        setIsSuccess(true);
        localStorage.setItem('waitlist-email', email);
      }
    } catch (err: any) {
      console.error(err);
      setErrorMsg("Failed to join waitlist. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t.pricing_title.split('.')[0]}.<br/>{t.pricing_title.split('.')[1]}
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border-l-4 border-riga-blue shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t.cust_title}</h3>
                <div className="text-3xl font-extrabold my-2 text-riga-blue">{t.cust_price}</div>
                <ul className="space-y-2 mt-4 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex gap-2 items-center"><Check size={16} className="text-green-500" /> {t.cust_feat_1}</li>
                  <li className="flex gap-2 items-center"><Check size={16} className="text-green-500" /> {t.cust_feat_2}</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border-l-4 border-gray-400 shadow-sm opacity-75">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t.meister_title}</h3>
                  <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded-full uppercase font-bold text-gray-500">{t.meister_badge}</span>
                </div>
                <div className="text-3xl font-extrabold my-2 text-gray-900 dark:text-gray-200">{t.meister_price}</div>
              </div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-3 py-1 rounded-bl-lg z-10">{t.launch_badge}</div>
            
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-6">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={32} />
                  </div>
                  <h4 className="font-bold text-xl mb-2">{t.waitlist_success_title}</h4>
                  <p className="text-gray-500 text-sm mb-8">{t.waitlist_success_desc}</p>
                  
                  <div className="p-5 bg-gray-50 dark:bg-black/20 rounded-2xl border border-gray-200 dark:border-gray-700 text-left">
                    <p className="text-[10px] uppercase font-black text-gray-400 mb-1">{t.waitlist_status_label}</p>
                    <div className="text-3xl font-black text-riga-blue tracking-tighter">#{position || '---'}</div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-3 overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} transition={{ delay: 0.5, duration: 1 }} className="bg-riga-blue h-full" />
                    </div>
                    <p className="text-[10px] mt-3 text-gray-500">{t.waitlist_status_cta}</p>
                  </div>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t.access_title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">{t.access_desc}</p>
                  </div>
                  
                  {errorMsg && (
                    <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-xl text-sm flex items-center gap-3 border border-red-100 dark:border-red-900/30">
                      <AlertCircle size={18} />
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">{t.email_label}</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input 
                        type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="janis@example.com"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-riga-blue outline-none transition-all"
                      />
                    </div>
                  </div>
                  <button type="submit" disabled={isSubmitting}
                    className="w-full py-4 bg-riga-blue hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50"
                  >
                    {isSubmitting ? 'Joining...' : t.btn_join}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};