import React, { useState } from 'react';
import { clinicConfig } from '../config/clinicData';
import { Check, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface FeaturedTreatmentProps {
  onBookConsultation: () => void;
}

export const FeaturedTreatment: React.FC<FeaturedTreatmentProps> = ({ onBookConsultation }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const benefits = [
    {
      title: "Natural-looking results",
      desc: "Micro-layered porcelain veneers and composite artistry designed to harmonize with your facial aesthetics."
    },
    {
      title: "Comfortable treatment",
      desc: "Minimally invasive enamel preparation protocols with precision magnification and gentle anesthesia."
    },
    {
      title: "Personalized treatment planning",
      desc: "Digital 3D smile previews allowing you to preview and refine your new smile before treatment starts."
    },
    {
      title: "Modern techniques",
      desc: "Digital shade mapping and biomimetic bonding for durable, stain-resistant, and radiant smiles."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with floating badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-800 aspect-16/10">
              <img
                src={clinicConfig.images.cosmeticConsult}
                alt="Digital Smile Design Consultation at SmileCraft Dental Studio"
                referrerPolicy="no-referrer"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Floating feature tag */}
              <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-700 flex items-center gap-2.5 text-xs">
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span className="font-semibold text-white">Digital Smile Simulation Included</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Heading, Description & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/40 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Specialty</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-display">
                Transform Your Smile With Modern Cosmetic Dentistry
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you wish to fix chipped edges, close unwanted gaps, or achieve an evenly radiant white smile, our cosmetic treatments combine aesthetic precision with conservative tooth preservation.
            </p>

            {/* Benefits check list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {benefits.map((b) => (
                <div key={b.title} className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="flex items-center gap-2 mb-1.5 text-teal-400">
                    <div className="p-1 rounded-full bg-teal-500/20 text-teal-300">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-bold text-white">{b.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal pl-6">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <div className="pt-2">
              <button
                onClick={onBookConsultation}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg hover:shadow-teal-500/20 transition-all cursor-pointer group"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Book a Smile Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
