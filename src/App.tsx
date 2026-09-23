import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { AboutDoctor } from './components/AboutDoctor';
import { Services } from './components/Services';
import { FeaturedTreatment } from './components/FeaturedTreatment';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PatientJourney } from './components/PatientJourney';
import { BeforeAfter } from './components/BeforeAfter';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { Technology } from './components/Technology';
import { FAQ } from './components/FAQ';
import { AppointmentSection } from './components/AppointmentSection';
import { LocationSection } from './components/LocationSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { clinicConfig } from './config/clinicData';

export default function App() {
  const [preSelectedService, setPreSelectedService] = useState<string | undefined>(undefined);

  const scrollToAppointment = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPreSelectedService(serviceTitle);
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenWhatsApp = () => {
    const msg = encodeURIComponent("Hello Dr. Aarav, I have an inquiry about dental treatments at SmileCraft Dental Studio.");
    window.open(`https://wa.me/${clinicConfig.whatsappClean}?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-600 selection:text-white flex flex-col">
      {/* Sticky Global 3-Zone Navbar */}
      <Navbar onBookClick={() => scrollToAppointment()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onBookClick={() => scrollToAppointment()}
          onExploreServices={scrollToServices}
        />

        {/* 2. Trust & Statistics Strip (High Contrast Visual Rhythm) */}
        <TrustStats />

        {/* 3. About the Lead Dentist */}
        <AboutDoctor onMeetDoctorClick={() => scrollToAppointment()} />

        {/* 4. Complete Services Grid & Interactive Modals */}
        <Services onBookService={(serviceTitle) => scrollToAppointment(serviceTitle)} />

        {/* 5. Featured Treatment Spotlight (High Contrast Cosmetic Focus) */}
        <FeaturedTreatment onBookConsultation={() => scrollToAppointment("Cosmetic Smile Makeover")} />

        {/* 6. Why Choose Us */}
        <WhyChooseUs />

        {/* 7. Patient Journey Timeline */}
        <PatientJourney onBookClick={() => scrollToAppointment()} />

        {/* 8. Before & After Interactive Smile Slider */}
        <BeforeAfter />

        {/* 9. Patient Testimonials & Proof */}
        <Testimonials />

        {/* 10. Clinic Facility Gallery & Lightbox */}
        <Gallery />

        {/* 11. Modern Technology & Equipment */}
        <Technology />

        {/* 12. Frequently Asked Questions Accordion */}
        <FAQ onWhatsAppClick={handleOpenWhatsApp} />

        {/* 13. High-Converting Appointment Booking Section */}
        <AppointmentSection preSelectedService={preSelectedService} />

        {/* 14. Location, Map & Clinic Hours */}
        <LocationSection />

        {/* 15. Final Call-to-Action Bar */}
        <FinalCTA onBookClick={() => scrollToAppointment()} />
      </main>

      {/* Footer */}
      <Footer
        onNavClick={handleNavClick}
        onServiceClick={(serviceTitle) => scrollToAppointment(serviceTitle)}
      />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions />
    </div>
  );
}
