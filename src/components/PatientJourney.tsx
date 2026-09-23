import React from 'react';
import { clinicConfig } from '../config/clinicData';
import { Calendar, UserCheck, FileCheck2, Smile, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface PatientJourneyProps {
  onBookClick: () => void;
}

export const PatientJourney: React.FC<PatientJourneyProps> = ({ onBookClick }) => {
  const stepIcons = [Calendar, UserCheck, FileCheck2, Smile];

  return (
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">
            <span>Seamless Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            Your Visit, Made Simple
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            From the moment you connect with our reception to your completed smile restoration, every step is streamlined for clarity, comfort, and zero stress.
          </p>
        </div>

        {/* Steps Grid with Progress Line */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-slate-200 -translate-y-6 z-0" />
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ originX: 0 }}
            className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-teal-500 -translate-y-6 z-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {clinicConfig.patientJourney.map((step, idx) => {
              const Icon = stepIcons[idx] || Calendar;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Step Icon Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-lg border border-teal-100 shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                        Step {step.step}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 font-display">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-[11px] font-medium text-teal-700 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-teal-600" />
                    <span>{step.detail}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Quick CTA banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-bold text-slate-900 font-display">Ready for your initial consultation?</h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Same-day slots frequently available for new patients and emergencies.</p>
          </div>
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs shrink-0 cursor-pointer"
          >
            <span>Book Your First Visit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
