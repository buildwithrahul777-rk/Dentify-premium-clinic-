import React, { useState } from 'react';
import { clinicConfig } from '../config/clinicData';
import { Calendar, ArrowRight, Star, ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onBookClick: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreServices }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-radial from-teal-50/60 via-slate-50 to-white">
      {/* Decorative background ambient glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-teal-200/25 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[350px] h-[350px] bg-sky-200/20 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Subtle floating medical decorative icons */}
      <motion.div
        animate={{ y: [-6, 6, -6], rotate: [0, 4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="hidden xl:block absolute top-36 left-12 p-3 bg-white/70 backdrop-blur-md rounded-2xl shadow-xs border border-teal-100 text-teal-600 pointer-events-none"
      >
        <Sparkles className="w-5 h-5 text-teal-500" />
      </motion.div>

      <motion.div
        animate={{ y: [6, -8, 6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden xl:block absolute bottom-24 left-1/3 p-2.5 bg-white/80 backdrop-blur-md rounded-full shadow-xs border border-sky-100 text-sky-500 pointer-events-none"
      >
        <Heart className="w-4 h-4 text-rose-400" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/60 text-teal-800 text-xs sm:text-sm font-semibold tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span>Trusted Dental Care in Siwan</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] text-balance font-display"
            >
              Your Smile Deserves <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-sky-700">
                Expert Care.
              </span>
            </motion.h1>

            {/* Supporting paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              From routine dental care to advanced cosmetic treatments, we provide comfortable, modern dentistry designed around you. Experience anxiety-free treatments with personalized clinical attention.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Book an Appointment</span>
              </button>

              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm sm:text-base border border-slate-200/80 shadow-xs hover:border-slate-300 transition-all cursor-pointer group"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-slate-200/70 flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 text-xs sm:text-sm text-slate-600 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-slate-900">4.9/5</span>
                <span>(350+ reviews)</span>
              </div>

              <span className="hidden sm:inline text-slate-300" aria-hidden="true">·</span>

              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span className="text-slate-800 font-semibold">2,000+ Happy Patients</span>
              </div>

              <span className="hidden sm:inline text-slate-300" aria-hidden="true">·</span>

              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                <span>10+ Years Experience</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual & Floating Cards */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Outer decorative gradient frame */}
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Backing glow circle */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-teal-500/20 via-sky-400/20 to-teal-300/10 rounded-3xl blur-2xl -z-10" />

              {/* Main doctor image container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-xl aspect-4/3 sm:aspect-1/1 lg:aspect-4/5"
              >
                {!imageError ? (
                  <img
                    src={clinicConfig.images.heroDoctor}
                    alt={`${clinicConfig.doctorName}, ${clinicConfig.doctorDesignation}`}
                    referrerPolicy="no-referrer"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                    className={`w-full h-full object-cover object-top transition-opacity duration-500 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-teal-800 to-slate-900 text-white p-6 text-center">
                    <ShieldCheck className="w-16 h-16 text-teal-300 mb-3" />
                    <h3 className="text-xl font-bold font-display">{clinicConfig.doctorName}</h3>
                    <p className="text-xs text-teal-200 mt-1">{clinicConfig.doctorDesignation}</p>
                    <span className="mt-3 text-xs bg-white/20 px-3 py-1 rounded-full">10+ Years Experience</span>
                  </div>
                )}

                {/* Subtle bottom gradient vignette */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-medium text-teal-300">Consultant In-Charge</div>
                  <div className="text-base sm:text-lg font-bold">{clinicConfig.doctorName}</div>
                  <div className="text-xs text-slate-200">{clinicConfig.doctorDesignation}</div>
                </div>
              </motion.div>

              {/* Floating Top Badge: Painless Protocol */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3 max-w-[220px]"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Gentle & Painless</div>
                  <div className="text-[11px] text-slate-500">Modern rotary anesthesia</div>
                </div>
              </motion.div>

              {/* Floating Bottom Badge: Verified Clinic */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-5 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Top Rated Dental Clinic</div>
                  <div className="text-[11px] text-slate-500">Siwan, Bihar · 4.9 Stars</div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
