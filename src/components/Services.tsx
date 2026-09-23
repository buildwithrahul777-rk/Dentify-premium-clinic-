import React, { useState } from 'react';
import { clinicConfig, ServiceItem } from '../config/clinicData';
import { ServiceDetailModal } from './ServiceDetailModal';
import {
  Shield,
  Sparkles,
  Activity,
  Anchor,
  Sun,
  Smile,
  Layers,
  Baby,
  ArrowRight,
  Clock,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesProps {
  onBookService: (serviceTitle?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onBookService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const iconMap: Record<string, React.ElementType> = {
    Shield,
    Sparkles,
    Activity,
    Anchor,
    Sun,
    Smile,
    Layers,
    Baby
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">
            <span>Specialized Treatments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            Complete Dental Care Under One Roof
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            From preventive care to smile transformation, our treatments are designed to keep your oral health strong and your smile confident.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinicConfig.services.map((service, index) => {
            const Icon = iconMap[service.iconName] || Shield;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100/70 text-teal-600 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>
                    {service.badge && (
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200/60">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors font-display mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Highlight Benefits List */}
                  <ul className="space-y-1.5 pt-2 border-t border-slate-100 mb-6">
                    {service.keyBenefits.slice(0, 2).map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2 text-xs text-slate-500">
                        <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="truncate">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Row */}
                <div className="pt-2 flex items-center justify-between text-xs font-semibold">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-teal-700 hover:text-teal-800 transition-colors cursor-pointer group-hover:underline underline-offset-4"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <span className="text-[11px] text-slate-400 flex items-center gap-1 font-normal">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {service.duration}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500">
            Need consultation for a specific concern?{' '}
            <button
              onClick={() => onBookService()}
              className="text-teal-700 font-semibold hover:underline inline-flex items-center gap-1"
            >
              Speak with Dr. Aarav Sharma <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </p>
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={onBookService}
      />
    </section>
  );
};
