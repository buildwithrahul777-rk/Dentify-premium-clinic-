import React, { useState, useRef, useCallback } from 'react';
import { clinicConfig } from '../config/clinicData';
import { Sparkles, SlidersHorizontal, Info, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface CaseStudy {
  id: string;
  title: string;
  treatment: string;
  timeframe: string;
  description: string;
  beforeLabel: string;
  afterLabel: string;
  afterImage: string;
  beforeFilter: string; // CSS filter for before simulation
}

export const BeforeAfter: React.FC = () => {
  const [activeTab, setActiveTab] = useState('case-1');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const cases: CaseStudy[] = [
    {
      id: 'case-1',
      title: 'Aesthetic Smile Realignment & Veneers',
      treatment: 'Porcelain Veneers & Gum Contouring',
      timeframe: '2 Clinical Visits',
      description: 'Correction of micro-chipping, slight midline gap, and uneven enamel shade with ultra-thin ceramic veneers.',
      beforeLabel: 'Pre-Treatment',
      afterLabel: 'Post-Restoration',
      afterImage: clinicConfig.images.smileBeforeAfter,
      beforeFilter: 'sepia(0.35) contrast(0.9) brightness(0.9)'
    },
    {
      id: 'case-2',
      title: 'Chairside Enamel Whitening',
      treatment: 'LED Clinical Bleaching & Tartar Scaling',
      timeframe: 'Single 45-min Session',
      description: 'Elimination of deep tobacco & tea stains with remineralizing desensitizing treatment.',
      beforeLabel: 'Severe Tea/Coffee Stains',
      afterLabel: '7 Shades Radiant White',
      afterImage: clinicConfig.images.smileBeforeAfter,
      beforeFilter: 'sepia(0.65) hue-rotate(-20deg) brightness(0.85) contrast(1.1)'
    }
  ];

  const currentCase = cases.find((c) => c.id === activeTab) || cases[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="transformations" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Smile Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
            Real Clinical Outcomes
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            See how precision cosmetic and restorative treatments gently enhance smiles while maintaining authentic facial harmony.
          </p>

          {/* Interactive Case Switcher Buttons */}
          <div className="flex items-center justify-center gap-2 mt-6 p-1 bg-slate-100 rounded-xl max-w-md mx-auto">
            {cases.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveTab(c.id);
                  setSliderPosition(50);
                }}
                className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all cursor-pointer truncate ${
                  activeTab === c.id
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {c.treatment.split('&')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Showcase Container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-50 p-4 sm:p-6 rounded-3xl border border-slate-200/80 shadow-lg">
            
            {/* Meta info bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200 text-xs text-slate-600">
              <div>
                <span className="font-bold text-slate-900 text-sm">{currentCase.title}</span>
                <span className="mx-2 text-slate-300">·</span>
                <span>{currentCase.treatment}</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-teal-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>{currentCase.timeframe}</span>
              </div>
            </div>

            {/* Draggable Slider Component */}
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-16/9 sm:aspect-16/10 rounded-2xl overflow-hidden select-none cursor-ew-resize border border-slate-200 bg-slate-900"
            >
              {/* After Image (Background) */}
              <img
                src={currentCase.afterImage}
                alt="After smile restoration result"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />

              {/* Before Image (Clipped Foreground with cosmetic shade simulation) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={currentCase.afterImage}
                  alt="Before smile restoration result"
                  style={{ filter: currentCase.beforeFilter }}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Slider Line Divider */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Center Handle */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-slate-800 shadow-xl border border-slate-200 flex items-center justify-center">
                  <SlidersHorizontal className="w-4 h-4 text-teal-700" />
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-slate-700 pointer-events-none">
                {currentCase.beforeLabel}
              </div>
              <div className="absolute top-3 right-3 bg-teal-600/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-teal-500 pointer-events-none">
                {currentCase.afterLabel}
              </div>

              {/* Interactive Helper Text */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-xs px-3 py-1 rounded-full pointer-events-none flex items-center gap-1.5">
                <span>◀ Drag slider to compare ▶</span>
              </div>
            </div>

            {/* Case Description & Disclaimer */}
            <div className="mt-4 pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
              <p className="max-w-xl">{currentCase.description}</p>
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px] shrink-0">
                <Info className="w-3.5 h-3.5" />
                <span>Illustrative treatment results. Individual results may vary.</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
