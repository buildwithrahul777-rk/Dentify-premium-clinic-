import React from 'react';
import { clinicConfig } from '../config/clinicData';
import { Calendar, Phone, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface FinalCTAProps {
  onBookClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBookClick }) => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-teal-900 via-teal-950 to-slate-950 text-white relative overflow-hidden">
      {/* Subtle floating glow effects */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Gentle Care · Lifelong Oral Health</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-display text-balance">
            Your Healthiest Smile Starts With One Appointment.
          </h2>

          <p className="text-base sm:text-lg text-teal-100 max-w-2xl mx-auto leading-relaxed">
            Take the first step toward confident, comfortable dental care. Experience modern dentistry with Dr. Aarav Sharma at SmileCraft Dental Studio.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onBookClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-base shadow-xl hover:shadow-teal-400/20 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-slate-950" />
              <span>Book an Appointment</span>
            </button>

            <a
              href={`tel:${clinicConfig.phoneClean}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/20 backdrop-blur-xs transition-colors"
            >
              <Phone className="w-4 h-4 text-teal-300" />
              <span>Call the Clinic: {clinicConfig.phone}</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-teal-200/80">
            <span>✓ No-obligation consultations</span>
            <span>✓ Same-day emergency appointments</span>
            <span>✓ Certified sterile environment</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
