import React from 'react';
import { clinicConfig } from '../config/clinicData';
import { Award, Cpu, Heart, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Award,
    Cpu,
    Heart,
    FileText
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">
            <span>The SmileCraft Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            Why Patients Choose SmileCraft
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            We blend clinical dental excellence with patient warmth to deliver gentle, long-lasting dental treatments you can genuinely look forward to.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinicConfig.whyChooseUs.map((item, idx) => {
            const Icon = iconMap[item.icon] || Award;
            return (
              <motion.div
                key={item.index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-teal-300 hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  {/* Editorial Index + Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl font-bold text-teal-700">
                      {item.index}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-200/60 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-teal-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                  <span>Clinical Quality Assured</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
