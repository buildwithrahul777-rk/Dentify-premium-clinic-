import React, { useState } from 'react';
import { clinicConfig } from '../config/clinicData';
import { Award, GraduationCap, HeartHandshake, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutDoctorProps {
  onMeetDoctorClick: () => void;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ onMeetDoctorClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const iconMap: Record<string, React.ElementType> = {
    Award,
    GraduationCap,
    HeartHandshake,
    ShieldCheck
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Experience Ribbon */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative background shape */}
              <div className="absolute -inset-4 bg-teal-50 rounded-3xl -rotate-2 -z-10" />

              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100 aspect-4/5">
                <img
                  src={clinicConfig.images.heroDoctor}
                  alt={`${clinicConfig.doctorName} at SmileCraft Dental Studio`}
                  referrerPolicy="no-referrer"
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full h-full object-cover object-top transition-all duration-700 ${
                    imageLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                  }`}
                />

                {/* Subtle overlay card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-slate-900">{clinicConfig.doctorName}</div>
                      <div className="text-xs text-teal-700 font-medium">{clinicConfig.doctorDegrees}</div>
                    </div>
                    <div className="p-2 rounded-lg bg-teal-50 text-teal-700">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                    <span>Registered Dental Specialist · IDA Member</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">
                <span>{clinicConfig.aboutDoctor.eyebrow}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
                {clinicConfig.aboutDoctor.heading}
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              {clinicConfig.aboutDoctor.bioParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {clinicConfig.aboutDoctor.credentials.map((cred) => {
                const Icon = iconMap[cred.icon] || Award;
                return (
                  <div
                    key={cred.title}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-teal-300 hover:bg-teal-50/30 transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white shadow-xs border border-slate-200/60 flex items-center justify-center text-teal-600 mb-3 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{cred.title}</h3>
                    <p className="text-xs text-slate-500 leading-normal">{cred.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                onClick={onMeetDoctorClick}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer group"
              >
                <span>Book a Consultation with Dr. Sharma</span>
                <ArrowRight className="w-4 h-4 text-teal-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
