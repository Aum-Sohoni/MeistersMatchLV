import React from 'react';
import { useForm } from 'react-hook-form';
import { Check, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

type FormData = {
  email: string;
  userType: 'customer' | 'meister';
};

export const PricingWaitlist: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();
  const [isSuccess, setIsSuccess] = React.useState(false);

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="waitlist" className="py-24 bg-white dark:bg-gray-900 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Pricing Info */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Free to Start. <br/>Fair for All.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
              We charge a small commission only when the job is done. No hidden fees.
            </p>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border-l-4 border-riga-blue shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Customers</h3>
                <div className="text-3xl font-extrabold my-2 text-riga-blue">Free</div>
                <ul className="space-y-2 mt-4">
                   <li className="flex gap-2 items-center text-sm text-gray-700 dark:text-gray-300"><Check size={16} className="text-green-500"/> Unlimited Swipes</li>
                   <li className="flex gap-2 items-center text-sm text-gray-700 dark:text-gray-300"><Check size={16} className="text-green-500"/> Secure Escrow Payments</li>
                   <li className="flex gap-2 items-center text-sm text-gray-700 dark:text-gray-300"><Check size={16} className="text-green-500"/> 24/7 Support</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border-l-4 border-gray-400 shadow-sm opacity-75">
                <div className="flex justify-between items-center">
                   <h3 className="text-xl font-bold text-gray-900 dark:text-white">Meisters</h3>
                   <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded-full uppercase font-bold text-gray-500">Coming Soon</span>
                </div>
                <div className="text-3xl font-extrabold my-2 text-gray-900 dark:text-gray-200">€9.99<span className="text-sm font-normal text-gray-500">/mo</span></div>
                <p className="text-sm text-gray-500">Premium profile & lower commissions.</p>
              </div>
            </div>
          </div>

          {/* Waitlist Form */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
               LAUNCHING Q1 2026
             </div>

             <div className="text-center mb-8">
               <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Get Early Access</h3>
               <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                 Join 500+ locals on the list. First job is commission-free!
               </p>
             </div>

             {isSuccess ? (
               <div className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 p-6 rounded-xl text-center">
                 <div className="w-16 h-16 bg-green-200 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                   <Check size={32} />
                 </div>
                 <h4 className="font-bold text-lg">You're on the list!</h4>
                 <p className="text-sm mt-2">Keep an eye on your inbox for your exclusive invite.</p>
               </div>
             ) : (
               <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input 
                        {...register("email", { 
                          required: "Email is required", 
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        type="email" 
                        placeholder="janis@example.com"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-riga-blue outline-none transition-all"
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">I am a...</label>
                    <div className="grid grid-cols-2 gap-4">
                      <label className="cursor-pointer">
                        <input 
                          type="radio" 
                          value="customer" 
                          {...register("userType", { required: true })}
                          className="peer sr-only" 
                          defaultChecked 
                        />
                        <div className="p-3 text-center rounded-xl border border-gray-200 dark:border-gray-700 peer-checked:border-riga-blue peer-checked:bg-blue-50 dark:peer-checked:bg-blue-900/20 peer-checked:text-riga-blue transition-all">
                          Customer
                        </div>
                      </label>
                      <label className="cursor-pointer">
                        <input 
                          type="radio" 
                          value="meister" 
                          {...register("userType", { required: true })}
                          className="peer sr-only" 
                        />
                        <div className="p-3 text-center rounded-xl border border-gray-200 dark:border-gray-700 peer-checked:border-riga-blue peer-checked:bg-blue-50 dark:peer-checked:bg-blue-900/20 peer-checked:text-riga-blue transition-all">
                          Meister
                        </div>
                      </label>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-riga-blue hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-4">
                    No spam. Unsubscribe anytime.
                  </p>
               </form>
             )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};