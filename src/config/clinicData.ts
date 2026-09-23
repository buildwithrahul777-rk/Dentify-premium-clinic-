// Centralized clinic configuration for easy client re-branding and customization
export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  duration: string;
  recommendedFor: string;
  badge?: string;
  keyBenefits: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  treatment: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Clinic' | 'Treatment' | 'Technology' | 'Team';
  imageUrl: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface TechItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  benefit: string;
  badge: string;
}

export const clinicConfig = {
  // Brand & Doctor identity
  clinicName: "SmileCraft Dental Studio",
  tagline: "Modern Dentistry. Gentle Care. Confident Smiles.",
  doctorName: "Dr. Aarav Sharma",
  doctorDesignation: "Consultant Dentist & Cosmetic Dental Specialist",
  doctorDegrees: "BDS, MDS (Cosmetic & Conservative Dentistry)",
  doctorExperience: "10+ Years of Clinical Practice",
  locationDisplay: "Station Road, Siwan, Bihar, India",
  fullAddress: "Station Road, Near Railway Colony Junction, Siwan, Bihar 841226, India",
  city: "Siwan",
  state: "Bihar",
  country: "India",
  phone: "+91 98765 43210",
  phoneClean: "+919876543210",
  whatsappNumber: "+91 98765 43210",
  whatsappClean: "919876543210",
  email: "hello@smilecraftdental.in",
  
  // Working Hours
  hours: {
    weekdays: "Monday – Saturday: 9:00 AM – 7:00 PM",
    sunday: "Sunday: By Appointment (10:00 AM – 2:00 PM)",
    emergency: "24/7 Priority Emergency Line available",
  },

  // Key Statistics
  stats: [
    { value: 10, suffix: "+", label: "Years Experience", subtext: "Serving Siwan & beyond" },
    { value: 2000, suffix: "+", label: "Happy Patients", subtext: "Confident healthy smiles" },
    { value: 15, suffix: "+", label: "Dental Treatments", subtext: "Comprehensive in-house care" },
    { value: 4.9, suffix: "/5", label: "Patient Rating", subtext: "Based on 350+ reviews" },
  ],

  // Image assets
  images: {
    heroDoctor: "/src/assets/images/hero_dentist_portrait_1790164229315.jpg",
    clinicInterior: "/src/assets/images/clinic_interior_suite_1790164243287.jpg",
    cosmeticConsult: "/src/assets/images/cosmetic_smile_consultation_1790164258560.jpg",
    smileBeforeAfter: "/src/assets/images/dental_smile_before_after_1790164271851.jpg",
    clinicTech: "/src/assets/images/clinic_equipment_tech_1790164283747.jpg",
  },

  // Doctor bio & credentials
  aboutDoctor: {
    eyebrow: "Meet Your Dentist",
    heading: "Personalized Care From a Dentist You Can Trust.",
    bioParagraphs: [
      "Dr. Aarav Sharma believes that visiting the dentist should be a gentle, reassuring, and dignified experience. With over a decade of dedicated clinical practice in restorative and aesthetic dentistry, Dr. Sharma combines advanced clinical protocols with a calm, patient-first demeanor.",
      "Trained at premier dental institutions and regularly participating in continuing national dental education, he focuses on conservative dentistry—preserving natural tooth structure whenever possible while leveraging modern digital diagnostics.",
      "At SmileCraft Dental Studio, patients of all age groups receive attentive, transparent consultations where every treatment option is clearly explained before any procedure begins."
    ],
    credentials: [
      {
        title: "10+ Years Experience",
        desc: "Over a decade delivering gentle, evidence-based dental care.",
        icon: "Award"
      },
      {
        title: "Advanced Dental Training",
        desc: "Specialized in micro-endodontics & aesthetic smile rehabilitation.",
        icon: "GraduationCap"
      },
      {
        title: "Patient-Centered Care",
        desc: "Anxiety-free appointments with personalized treatment pace.",
        icon: "HeartHandshake"
      },
      {
        title: "Modern Equipment",
        desc: "Strict multi-stage Class-B autoclaving & digital low-dose radiography.",
        icon: "ShieldCheck"
      }
    ]
  },

  // Core Services
  services: [
    {
      id: "general-dentistry",
      title: "General Dentistry",
      shortDesc: "Comprehensive oral examinations, painless fillings, and ongoing preventive dental health plans.",
      fullDesc: "Complete preventive care designed to detect issues early and preserve natural teeth for life. Includes digital exams, tooth-colored composite restorations, and enamel remineralization.",
      iconName: "Shield",
      duration: "30 - 45 mins",
      recommendedFor: "Routine checkups & early cavity prevention",
      badge: "Essential Care",
      keyBenefits: ["Tooth-colored composite restorations", "Digital oral screening", "Gentle cavity treatment"]
    },
    {
      id: "teeth-cleaning",
      title: "Teeth Cleaning & Polishing",
      shortDesc: "Ultrasonic scaling to remove stubborn tartar, plaque, and surface tea or tobacco stains safely.",
      fullDesc: "Gentle ultrasonic cleaning clears hard sub-gingival calculus that daily brushing cannot reach, protecting against gingivitis and ensuring fresh breath and polished enamel.",
      iconName: "Sparkles",
      duration: "40 mins",
      recommendedFor: "Recommended every 6 months for gum health",
      badge: "Preventive",
      keyBenefits: ["Painless ultrasonic scaling", "Stain removal & enamel glossing", "Gum pocket health check"]
    },
    {
      id: "root-canal",
      title: "Root Canal Treatment",
      shortDesc: "Painless single-sitting rotary endodontics designed to save infected or painful teeth safely.",
      fullDesc: "Using state-of-the-art rotary nickel-titanium files and digital apex locators, we comfortably eliminate pulp infection while preserving your natural tooth root.",
      iconName: "Activity",
      duration: "45 - 60 mins",
      recommendedFor: "Severe tooth pain, sensitivity, or deep decay",
      badge: "Painless Rotary",
      keyBenefits: ["Local anesthesia comfort protocol", "Precision digital apex locator", "Same-day crown preparation available"]
    },
    {
      id: "dental-implants",
      title: "Dental Implants",
      shortDesc: "Permanent, bio-compatible titanium tooth replacements that look, feel, and chew like natural teeth.",
      fullDesc: "Regain full chewing power and natural smile aesthetics. Implants integrate directly into jawbone tissue to prevent bone loss and avoid grinding adjacent teeth.",
      iconName: "Anchor",
      duration: "45 - 90 mins",
      recommendedFor: "Missing single or multiple teeth",
      badge: "Permanent Solution",
      keyBenefits: ["Osseointegrated titanium posts", "Natural chewing sensation", "Preserves adjacent healthy teeth"]
    },
    {
      id: "teeth-whitening",
      title: "Teeth Whitening",
      shortDesc: "Safe, chairside enamel whitening that brightens your smile by up to 5-8 shades in one session.",
      fullDesc: "Clinical-grade LED whitening breaks down deep micro-pigmentations from coffee, tea, and aging without causing enamel demineralization or long-term sensitivity.",
      iconName: "Sun",
      duration: "45 mins",
      recommendedFor: "Weddings, special occasions, or dull enamel",
      badge: "Instant Results",
      keyBenefits: ["Up to 8 shades brighter", "Sensitivity-reduction gel included", "Long-lasting radiant polish"]
    },
    {
      id: "cosmetic-dentistry",
      title: "Cosmetic Dentistry",
      shortDesc: "Custom porcelain veneers, composite bonding, and aesthetic smile contouring.",
      fullDesc: "Crafted specifically to harmonize with your facial proportions. We correct chipped teeth, awkward gaps, uneven lengths, and persistent discolorations.",
      iconName: "Smile",
      duration: "Custom plan",
      recommendedFor: "Gaps, chips, smile makeover goals",
      badge: "Artistic Design",
      keyBenefits: ["Digital smile preview", "Ultra-thin porcelain veneers", "Micro-aesthetic bonding"]
    },
    {
      id: "braces-aligners",
      title: "Braces & Clear Aligners",
      shortDesc: "Discreet clear aligners and modern low-profile ceramic braces for straight, balanced smiles.",
      fullDesc: "Modern orthodontic alignment for teenagers and adults. Clear aligners are virtually invisible, removable for meals, and customized via computer 3D simulations.",
      iconName: "Layers",
      duration: "6 - 18 months",
      recommendedFor: "Crowded teeth, gaps, bite correction",
      badge: "Discreet Options",
      keyBenefits: ["Custom 3D treatment roadmap", "Removable clear trays", "Low friction ceramic brackets"]
    },
    {
      id: "pediatric-dentistry",
      title: "Pediatric Dentistry",
      shortDesc: "Compassionate, gentle dental care designed to make children feel calm, safe, and happy.",
      fullDesc: "Specialized care for infants, children, and teens. We emphasize preventive pit & fissure sealants, fluoride treatments, and gentle behavior-guidance techniques.",
      iconName: "Baby",
      duration: "30 mins",
      recommendedFor: "Children age 1 to 15 years",
      badge: "Kid Friendly",
      keyBenefits: ["Friendly, non-intimidating approach", "Fluoride varnish & sealant protection", "Oral habit counseling"]
    }
  ] as ServiceItem[],

  // Why Choose Us
  whyChooseUs: [
    {
      index: "01",
      title: "Experienced Dental Care",
      desc: "Lead dentist Dr. Aarav Sharma brings over a decade of focused clinical practice, conservative diagnosis, and thousands of successful treatments.",
      icon: "Award"
    },
    {
      index: "02",
      title: "Modern Technology",
      desc: "Low-dose digital radiography, rotary endodontics, ultrasonic scalers, and digital intraoral cameras deliver pinpoint accuracy and gentler treatment.",
      icon: "Cpu"
    },
    {
      index: "03",
      title: "Comfort-First Approach",
      desc: "We understand dental anxiety. From soothing operatory ergonomics to gentle local anesthesia protocols, your comfort is prioritized at every moment.",
      icon: "Heart"
    },
    {
      index: "04",
      title: "Transparent Treatment Plans",
      desc: "No surprises. We explain all clinical findings, discuss procedure alternatives, and provide honest, printed itemized cost estimates before starting.",
      icon: "FileText"
    }
  ],

  // Patient Journey Steps
  patientJourney: [
    {
      step: "01",
      title: "Book Your Appointment",
      desc: "Schedule online, call directly, or send a WhatsApp message. Choose a convenient time slot that fits your personal schedule.",
      detail: "Fast confirmation within minutes"
    },
    {
      step: "02",
      title: "Meet Your Dentist",
      desc: "Experience a calm, unhurried consultation. Dr. Sharma conducts a thorough digital examination and listens to all your concerns.",
      detail: "Gentle non-judgmental discussion"
    },
    {
      step: "03",
      title: "Get Your Treatment Plan",
      desc: "Review your digital X-rays and clear treatment roadmap. We answer every question and explain timelines and transparent costs.",
      detail: "Clear options with no hidden fees"
    },
    {
      step: "04",
      title: "Leave With Confidence",
      desc: "Complete your procedure with gentle care and receive clear aftercare instructions, plus dedicated post-treatment follow-up.",
      detail: "Long-term smile health guaranteed"
    }
  ],

  // Testimonials
  testimonials: [
    {
      id: "t1",
      name: "Priya S.",
      location: "Station Road, Siwan",
      treatment: "Teeth Whitening & Cleaning",
      rating: 5,
      date: "Last month",
      comment: "Dr. Aarav and the team made my treatment experience comfortable from start to finish. The clinic feels modern, clean and welcoming. My teeth look noticeably brighter without any lingering sensitivity!",
      verified: true
    },
    {
      id: "t2",
      name: "Rahul K.",
      location: "Dharmasabha, Siwan",
      treatment: "Painless Root Canal Treatment",
      rating: 5,
      date: "2 months ago",
      comment: "I was extremely nervous about my root canal, but the entire process was explained clearly and handled very professionally. I felt virtually no discomfort throughout the entire sitting.",
      verified: true
    },
    {
      id: "t3",
      name: "Ananya M.",
      location: "Gopalganj Road, Siwan",
      treatment: "Cosmetic Veneers & Smile Makeover",
      rating: 5,
      date: "3 weeks ago",
      comment: "The staff was friendly and the treatment was much smoother than I expected. Dr. Sharma showed me digital previews before starting. I can finally smile freely in family photographs.",
      verified: true
    },
    {
      id: "t4",
      name: "Vikram P.",
      location: "Hospital Road, Siwan",
      treatment: "Dental Implant",
      rating: 5,
      date: "3 months ago",
      comment: "Superb clinical cleanliness and hygiene protocols. Having had a missing molar for 3 years, the implant feels just like my natural tooth. Transparent pricing with zero surprises.",
      verified: true
    }
  ] as TestimonialItem[],

  // Technology highlights
  technology: [
    {
      id: "tech-1",
      name: "Digital RVG X-Rays",
      subtitle: "Ultra Low Radiation Imaging",
      description: "Instant high-resolution diagnostic imaging that reduces patient radiation exposure by up to 80% compared to traditional dental films.",
      benefit: "Immediate chairside diagnosis with 80% less radiation",
      badge: "Digital Precision"
    },
    {
      id: "tech-2",
      name: "Ergonomic Dental Suites",
      subtitle: "Contoured Comfort Delivery",
      description: "Italian-engineered dental chairs with memory-foam contouring and integrated soft LED illumination for maximum patient relaxation during treatments.",
      benefit: "Anxiety-relieving lumbar and neck support",
      badge: "Patient Comfort"
    },
    {
      id: "tech-3",
      name: "Class-B Autoclave Sterilization",
      subtitle: "Hospital-Grade Infection Control",
      description: "Rigorous 4-stage vacuum sterilization protocols with chemical indicator verification and single-use sealed pouches for every instrument.",
      benefit: "100% sterile guarantee for every patient visit",
      badge: "Sterile Standard"
    },
    {
      id: "tech-4",
      name: "Rotary Endodontics & Apex Locators",
      subtitle: "Single-Sitting Precision Root Canals",
      description: "Micro-motor rotary instrumentation provides smooth, quiet, and precise canal shaping, dramatically cutting treatment time and post-procedure soreness.",
      benefit: "Faster, quieter, and virtually painless procedures",
      badge: "Micro-Precision"
    }
  ] as TechItem[],

  // Gallery
  gallery: [
    {
      id: "gal-1",
      title: "Modern Operatory Suite",
      category: "Clinic",
      imageUrl: "/src/assets/images/clinic_interior_suite_1790164243287.jpg",
      description: "Spacious treatment bay equipped with panoramic natural lighting and ergonomic chair."
    },
    {
      id: "gal-2",
      title: "Cosmetic Smile Consultation",
      category: "Treatment",
      imageUrl: "/src/assets/images/cosmetic_smile_consultation_1790164258560.jpg",
      description: "Interactive digital smile designing with personalized shade matching."
    },
    {
      id: "gal-3",
      title: "Advanced Clinical Equipment",
      category: "Technology",
      imageUrl: "/src/assets/images/clinic_equipment_tech_1790164283747.jpg",
      description: "Digital low-dose diagnostic sensors and high-speed precision sterilization unit."
    },
    {
      id: "gal-4",
      title: "Smile Aesthetics Case Study",
      category: "Treatment",
      imageUrl: "/src/assets/images/dental_smile_before_after_1790164271851.jpg",
      description: "Natural tooth shade alignment, stain correction, and contour refinement."
    },
    {
      id: "gal-5",
      title: "Consultant Dental Specialist",
      category: "Team",
      imageUrl: "/src/assets/images/hero_dentist_portrait_1790164229315.jpg",
      description: "Dr. Aarav Sharma welcoming patients to SmileCraft Dental Studio."
    }
  ] as GalleryItem[],

  // FAQs
  faqs: [
    {
      id: "faq-1",
      question: "Do I need an appointment before visiting?",
      answer: "While we do accommodate urgent dental emergencies and walk-ins whenever possible, we strongly recommend booking an appointment in advance. This ensures zero wait time and gives Dr. Sharma dedicated time for your comprehensive consultation."
    },
    {
      id: "faq-2",
      question: "How often should I get my teeth professionally cleaned?",
      answer: "The Indian Dental Association and global oral health guidelines recommend a professional scaling and dental check-up every 6 months. Regular cleaning removes hardened calculus that regular toothbrushing cannot budge, keeping gums healthy and preventing bad breath."
    },
    {
      id: "faq-3",
      question: "Is root canal treatment painful?",
      answer: "No. With modern local anesthesia techniques and digital rotary instruments, root canal treatment is comfortable and feels very similar to receiving a routine dental filling. In fact, the procedure immediately relieves the severe toothache caused by the inflamed nerve."
    },
    {
      id: "faq-4",
      question: "Do you offer cosmetic dental treatments?",
      answer: "Yes, SmileCraft specializes in conservative aesthetic dentistry. Our treatments include custom porcelain veneers, composite smile bonding, teeth whitening, gap closures, and clear aligners to design a naturally confident smile."
    },
    {
      id: "faq-5",
      question: "Do you treat children?",
      answer: "Absolutely! We provide compassionate pediatric dental care. We focus on preventive fluoride varnishes, cavity-preventing fissure sealants, and positive habit reinforcement in a gentle, warm environment that keeps kids calm and smiling."
    },
    {
      id: "faq-6",
      question: "How can I book an appointment?",
      answer: "You can book directly using the online form on this website, call our clinic at +91 98765 43210, or send us a WhatsApp message. Our care coordinator will confirm your preferred date and time slot within a few minutes."
    }
  ] as FaqItem[],

  // Social Links
  socials: {
    instagram: "https://instagram.com/smilecraftdental",
    facebook: "https://facebook.com/smilecraftdental",
    youtube: "https://youtube.com/@smilecraftdental",
    googleMaps: "https://maps.google.com/?q=Station+Road+Siwan+Bihar"
  }
};
