import React, { useState, useEffect } from 'react';
import { clinicConfig } from '../config/clinicData';
import { Phone, ArrowUp, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent("Hello, I would like to book a dental appointment.");
    window.open(`https://wa.me/${clinicConfig.whatsappClean}?text=${msg}`, '_blank');
  };

  return (
    <>
      {/* Floating Action Cluster on Bottom Right */}
      <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        
        {/* Scroll To Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-slate-200 text-slate-700 hover:text-teal-700 hover:border-teal-300 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Floating Button */}
        <div className="relative flex items-center">
          {/* Tooltip on hover/focus */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute right-full mr-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-lg whitespace-nowrap pointer-events-none"
              >
                Chat with us
                <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-900" />
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={openWhatsApp}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onFocus={() => setShowTooltip(true)}
            onBlur={() => setShowTooltip(false)}
            aria-label="Chat with SmileCraft on WhatsApp"
            className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 active:scale-95 cursor-pointer"
          >
            {/* Pulsing ring indicator */}
            <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping group-hover:opacity-0" />
            <MessageCircle className="w-7 h-7 relative z-10" />
          </button>
        </div>

      </div>

      {/* Floating Bottom Quick Call Action for Mobile (Hidden on Tablet/Desktop, sticky, lightweight) */}
      <div className="sm:hidden fixed bottom-4 left-4 z-40">
        <a
          href={`tel:${clinicConfig.phoneClean}`}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/95 backdrop-blur-md text-white shadow-lg border border-slate-700/80 text-xs font-semibold active:scale-95 transition-transform"
          aria-label="Call clinic directly"
        >
          <Phone className="w-3.5 h-3.5 text-teal-400" />
          <span>Call Now</span>
        </a>
      </div>
    </>
  );
};
