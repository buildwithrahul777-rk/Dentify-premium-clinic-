import React from 'react';
import { clinicConfig } from '../config/clinicData';
import { Cpu, ShieldCheck, Zap, Activity, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const Technology: React.FC = () => {
  const icons = [Zap, ShieldCheck, Activity, Cpu];

  return (
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      {/* Decorative subtle medical pattern lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">
            <span>Clinical Precision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            Modern Technology. Better Patient Experience.
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            By investing in advanced diagnostics and modern restorative systems, we ensure minimal discomfort, lower radiation, and faster treatment times.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {clinicConfig.technology.map((tech, idx) => {
            const Icon = icons[idx] || Cpu;

            return (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 border border-teal-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-100">
                      {tech.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-display mb-1">
                    {tech.name}
                  </h3>
                  <div className="text-xs text-teal-700 font-medium mb-3">
                    {tech.subtitle}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {tech.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>{tech.benefit}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
