import React, { useState, useEffect } from 'react';
import { clinicConfig } from '../config/clinicData';
import {
  Calendar,
  Clock,
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  User,
  Mail,
  FileText,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AppointmentSectionProps {
  preSelectedService?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ preSelectedService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: 'Morning (09:00 AM - 12:00 PM)',
    treatment: preSelectedService || 'General Consultation & Check-up',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (preSelectedService) {
      setFormData((prev) => ({ ...prev, treatment: preSelectedService }));
    }
  }, [preSelectedService]);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number';
    } else if (!/^[0-9+ -]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please provide a valid phone number (10 digits)';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }

    if (!formData.date) {
      errs.date = 'Please pick a preferred date';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable API response
    setTimeout(() => {
      const generatedRef = `SC-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingRef(generatedRef);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      date: '',
      timeSlot: 'Morning (09:00 AM - 12:00 PM)',
      treatment: 'General Consultation & Check-up',
      notes: '',
    });
    setErrors({});
  };

  const openWhatsAppConfirmation = () => {
    const text = encodeURIComponent(
      `Hello SmileCraft Dental Studio, I submitted an appointment request (Ref: ${bookingRef}) for ${formData.fullName} for ${formData.treatment} on ${formData.date} (${formData.timeSlot}). Please confirm my booking.`
    );
    window.open(`https://wa.me/${clinicConfig.whatsappClean}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-radial from-slate-900 via-slate-950 to-navy-950 text-white relative overflow-hidden">
      {/* Subtle background ambient lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Priority Online Scheduling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
            Ready to Take the Next Step Toward a Healthier Smile?
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Book a consultation with our dental team and get a personalized treatment plan. Zero waiting time with reserved chairside slots.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Quick Contact Info & Reassurance */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-700/70">
              <h3 className="text-xl font-bold font-display text-white mb-2">Direct Appointment Assistance</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Prefer to talk to our reception desk immediately? Reach out directly via call or WhatsApp.
              </p>

              <div className="space-y-4">
                <a
                  href={`tel:${clinicConfig.phoneClean}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-700/80 hover:border-teal-500/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">Call Reception</div>
                    <div className="text-sm font-bold text-white">{clinicConfig.phone}</div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${clinicConfig.whatsappClean}?text=${encodeURIComponent("Hello Dr. Aarav, I would like to book a dental appointment at SmileCraft Dental Studio.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-700/80 hover:border-emerald-500/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">WhatsApp Help Desk</div>
                    <div className="text-sm font-bold text-white">{clinicConfig.whatsappNumber}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Clinic Promise Badges */}
            <div className="p-6 rounded-2xl bg-teal-950/40 border border-teal-800/40 space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-teal-200">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Zero wait time with confirmed slot</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-teal-200">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Strict multi-stage Class-B autoclaving</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-teal-200">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Transparent written cost estimates before care</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-800/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="booking-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-slate-700">
                      <h3 className="text-lg font-bold text-white font-display">Schedule Your Visit</h3>
                      <span className="text-[11px] text-teal-400">Step 1 of 1 · Instant Request</span>
                    </div>

                    {/* Full Name & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Full Name <span className="text-rose-400">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="e.g. Ramesh Kumar"
                            className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-teal-500 transition-colors ${
                              errors.fullName ? 'border-rose-500' : 'border-slate-700'
                            }`}
                          />
                          <User className="absolute right-3 top-3 w-4 h-4 text-slate-500 pointer-events-none" />
                        </div>
                        {errors.fullName && (
                          <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Phone Number <span className="text-rose-400">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="e.g. 9876543210"
                            className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-teal-500 transition-colors ${
                              errors.phone ? 'border-rose-500' : 'border-slate-700'
                            }`}
                          />
                          <Phone className="absolute right-3 top-3 w-4 h-4 text-slate-500 pointer-events-none" />
                        </div>
                        {errors.phone && (
                          <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email & Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Email Address <span className="text-slate-500">(Optional)</span>
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="name@example.com"
                            className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-teal-500 transition-colors ${
                              errors.email ? 'border-rose-500' : 'border-slate-700'
                            }`}
                          />
                          <Mail className="absolute right-3 top-3 w-4 h-4 text-slate-500 pointer-events-none" />
                        </div>
                        {errors.email && (
                          <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Preferred Date <span className="text-rose-400">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            min={new Date().toISOString().split('T')[0]}
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-teal-500 transition-colors ${
                              errors.date ? 'border-rose-500' : 'border-slate-700'
                            }`}
                          />
                        </div>
                        {errors.date && (
                          <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.date}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Time Slot & Treatment */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Preferred Time Window
                        </label>
                        <select
                          value={formData.timeSlot}
                          onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                        >
                          <option>Morning (09:00 AM - 12:00 PM)</option>
                          <option>Afternoon (12:00 PM - 04:00 PM)</option>
                          <option>Evening (04:00 PM - 07:00 PM)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Reason for Visit / Treatment
                        </label>
                        <select
                          value={formData.treatment}
                          onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                        >
                          <option>General Consultation & Check-up</option>
                          <option>Teeth Cleaning & Scaling</option>
                          <option>Root Canal Treatment (Tooth Pain)</option>
                          <option>Dental Implants</option>
                          <option>Teeth Whitening</option>
                          <option>Cosmetic Smile Makeover</option>
                          <option>Braces / Clear Aligners</option>
                          <option>Child Dental Care</option>
                          <option>Urgent Dental Relief</option>
                        </select>
                      </div>
                    </div>

                    {/* Notes / Message */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Any specific symptoms or questions? <span className="text-slate-500">(Optional)</span>
                      </label>
                      <textarea
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="e.g. Mild sensitivity to cold water on lower left tooth..."
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                      />
                    </div>

                    {/* Primary Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 px-6 rounded-xl bg-teal-500 hover:bg-teal-400 disabled:opacity-60 text-slate-950 font-bold text-sm sm:text-base shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                            <span>Confirming Availability...</span>
                          </>
                        ) : (
                          <>
                            <Calendar className="w-5 h-5 text-slate-950" />
                            <span>Request Appointment</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-400 text-center pt-1">
                      Our care coordinator will call or message to confirm your exact appointment slot within 15 minutes during operating hours.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="booking-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 sm:p-6 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div>
                      <span className="text-xs uppercase font-mono tracking-wider text-teal-400 font-semibold">
                        Request Received · Ref: {bookingRef}
                      </span>
                      <h3 className="text-2xl font-bold font-display text-white mt-1">
                        Thank You, {formData.fullName}!
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto">
                        Your appointment request for <strong className="text-white">{formData.treatment}</strong> on <strong className="text-white">{formData.date}</strong> has been received by Dr. Aarav Sharma's clinic desk.
                      </p>
                    </div>

                    {/* Confirmation Summary Box */}
                    <div className="bg-slate-900 p-4 rounded-2xl border border-slate-700 text-left text-xs space-y-2 max-w-md mx-auto">
                      <div className="flex justify-between text-slate-400">
                        <span>Patient Name:</span>
                        <span className="text-white font-semibold">{formData.fullName}</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Contact Phone:</span>
                        <span className="text-white font-semibold">{formData.phone}</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Preferred Window:</span>
                        <span className="text-white font-semibold">{formData.timeSlot}</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Clinic Address:</span>
                        <span className="text-white font-semibold">{clinicConfig.locationDisplay}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={openWhatsAppConfirmation}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Confirm Instant via WhatsApp</span>
                      </button>

                      <button
                        onClick={resetForm}
                        className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold transition-colors cursor-pointer"
                      >
                        Schedule Another Patient
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
