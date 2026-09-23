import React, { useState } from 'react';
import { clinicConfig } from '../config/clinicData';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQProps {
  onWhatsAppClick: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onWhatsAppClick }) => {
  const [openId, setOpenId] = useState<string | null>(clinicConfig.faqs[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Clear answers to help you prepare for your dental visit with complete confidence.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {clinicConfig.faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200/90 overflow-hidden bg-slate-50/50 hover:border-teal-300 transition-colors"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 pr-4 font-display">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-teal-600 text-white' : 'bg-white text-slate-500 border border-slate-200'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Question Support Box */}
        <div className="mt-12 p-6 rounded-2xl bg-teal-50 border border-teal-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-teal-950">Have a question not listed here?</h4>
            <p className="text-xs text-teal-800 mt-0.5">Chat directly with our dental support desk on WhatsApp for instant assistance.</p>
          </div>
          <button
            onClick={onWhatsAppClick}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold shadow-xs transition-colors shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
