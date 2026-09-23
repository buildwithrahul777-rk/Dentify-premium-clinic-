import React from 'react';
import { ServiceItem } from '../config/clinicData';
import { X, Check, Clock, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 to-teal-950 p-6 text-white relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {service.badge && (
              <span className="inline-block px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase bg-teal-500/20 text-teal-300 border border-teal-500/30 rounded-md mb-2">
                {service.badge}
              </span>
            )}
            <h3 className="text-2xl font-bold font-display">{service.title}</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md">
              {service.shortDesc}
            </p>
          </div>

          {/* Body */}
          <div className="p-6 space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Clinical Overview
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {service.fullDesc}
              </p>
            </div>

            {/* Quick Metadata */}
            <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <Clock className="w-4 h-4 text-teal-600 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[10px]">Session Duration</span>
                  <span className="font-semibold">{service.duration}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[10px]">Standard</span>
                  <span className="font-semibold">Gentle Anesthesia Protocol</span>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Key Treatment Benefits
              </h4>
              <ul className="space-y-2">
                {service.keyBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <div className="p-0.5 rounded-full bg-teal-100 text-teal-700 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA in Modal */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onBookService(service.title);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Treatment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
