import React from 'react';
import { clinicConfig } from '../config/clinicData';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavClick: (href: string) => void;
  onServiceClick: (serviceTitle: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onServiceClick }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-teal-500 text-slate-950 flex items-center justify-center font-bold text-lg shadow-sm">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 6.5 3.5 10 .5.9 1.5 2 2.5 2s2-.9 2.5-2C16.5 14.5 18 11 18 8c0-3.5-2.5-6-6-6zm0 14c-1.7 0-3.1-1.4-3.1-3.1 0-.6.5-1 1-1s1 .4 1 1c0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1c0-.6.5-1 1-1s1 .4 1 1c0 1.7-1.4 3.1-3.1 3.1z"/>
                </svg>
              </span>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                {clinicConfig.clinicName}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {clinicConfig.tagline} Comprehensive restorative, cosmetic, and painless general dental care dedicated to family wellness in Siwan, Bihar.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="font-semibold text-white">{clinicConfig.doctorName}</div>
              <div>{clinicConfig.doctorDesignation}</div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Doctor', href: '#about' },
                { label: 'Our Treatments', href: '#services' },
                { label: 'Why Choose Us', href: '#why-us' },
                { label: 'Patient Reviews', href: '#testimonials' },
                { label: 'Clinic Gallery', href: '#gallery' },
                { label: 'Contact & Location', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavClick(link.href)}
                    className="text-slate-400 hover:text-teal-400 transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Dental Treatments
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                'General Dentistry',
                'Root Canal Treatment',
                'Dental Implants',
                'Cosmetic Dentistry',
                'Teeth Whitening',
                'Braces & Aligners',
                'Pediatric Care',
              ].map((serviceName) => (
                <li key={serviceName}>
                  <button
                    onClick={() => onServiceClick(serviceName)}
                    className="text-slate-400 hover:text-teal-400 transition-colors cursor-pointer text-left"
                  >
                    {serviceName}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contact & Hours
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{clinicConfig.locationDisplay}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${clinicConfig.phoneClean}`} className="hover:text-white transition-colors">
                  {clinicConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${clinicConfig.email}`} className="hover:text-white transition-colors">
                  {clinicConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-2 border-t border-slate-800 text-[11px]">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-slate-300">Mon - Sat: 9 AM - 7 PM</span>
                  <span>Sun: 10 AM - 2 PM (Appt)</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {clinicConfig.clinicName}. All rights reserved.
          </div>

          <div className="text-[11px] text-slate-500 text-center md:text-right max-w-md">
            This demo website uses placeholder information and imagery for presentation purposes.
          </div>
        </div>

      </div>
    </footer>
  );
};
