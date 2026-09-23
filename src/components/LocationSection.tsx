import React from 'react';
import { clinicConfig } from '../config/clinicData';
import { MapPin, Clock, Phone, MessageCircle, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export const LocationSection: React.FC = () => {
  const openDirections = () => {
    window.open(clinicConfig.socials.googleMaps, '_blank');
  };

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Find SmileCraft</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            Visit Our Clinic
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Conveniently situated on Station Road, Siwan with accessible parking, comfortable patient reception, and wheelchair accessibility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Business Details Cards */}
          <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
            
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-teal-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-100/70 text-teal-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-display">Clinic Address</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {clinicConfig.fullAddress}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Landmark: Opposite Railway Colony Gate</p>
                </div>
              </div>
            </div>

            {/* Timings Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-teal-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-100/70 text-sky-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h3 className="text-base font-bold text-slate-900 font-display">Consultation Hours</h3>
                  <div className="mt-2 space-y-1.5 text-xs sm:text-sm">
                    <div className="flex justify-between items-center text-slate-700">
                      <span className="font-medium">Monday – Saturday</span>
                      <span className="font-semibold text-slate-900">09:00 AM – 07:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-700">
                      <span className="font-medium">Sunday</span>
                      <span className="text-teal-700 font-semibold">10:00 AM – 02:00 PM (Appt)</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-200 flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Clinic is Open Today</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact & Directions Action */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-teal-400 font-medium uppercase tracking-wider">Need Directions?</span>
                <h4 className="text-base font-bold text-white font-display">Station Road, Siwan</h4>
              </div>
              <button
                onClick={openDirections}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm transition-colors cursor-pointer shrink-0"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </button>
            </div>

          </div>

          {/* Right Column: Visual Interactive Map Card */}
          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[360px] rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 flex flex-col">
              
              {/* Map Canvas Visual Mockup with Real Styling */}
              <div className="relative w-full h-full min-h-[360px] bg-slate-200 flex items-center justify-center overflow-hidden">
                {/* Stylized Map Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />

                {/* Road Graphic Mockup */}
                <div className="absolute w-full h-12 bg-slate-300 -rotate-12 top-1/2 -translate-y-1/2" />
                <div className="absolute h-full w-10 bg-slate-300 rotate-45 left-1/2 -translate-x-1/2" />

                {/* Pulsing Pin for SmileCraft Studio */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-teal-400 opacity-75" />
                    <div className="w-12 h-12 rounded-full bg-teal-600 text-white shadow-xl flex items-center justify-center border-2 border-white">
                      <MapPin className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <div className="mt-3 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-slate-200 text-center">
                    <div className="text-xs font-bold text-slate-900">{clinicConfig.clinicName}</div>
                    <div className="text-[11px] text-teal-700 font-medium">Station Road, Siwan</div>
                  </div>
                </div>

                {/* Surrounding Landmark Indicators */}
                <div className="absolute top-8 left-8 bg-white/85 text-[11px] font-semibold text-slate-600 px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs">
                  Railway Junction (400m)
                </div>
                <div className="absolute bottom-8 right-8 bg-white/85 text-[11px] font-semibold text-slate-600 px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs">
                  Main Market Area (800m)
                </div>
              </div>

              {/* Map Footer Bar */}
              <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  <span>Ample 2-wheeler and 4-wheeler parking reserved for patients</span>
                </div>
                <a
                  href={clinicConfig.socials.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
