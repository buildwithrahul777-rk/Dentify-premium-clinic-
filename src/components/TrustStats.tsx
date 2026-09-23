import React, { useEffect, useState, useRef } from 'react';
import { clinicConfig } from '../config/clinicData';
import { motion, useInView } from 'motion/react';
import { Award, Users, Stethoscope, Star } from 'lucide-react';

interface StatCounterProps {
  end: number;
  suffix: string;
  duration?: number;
}

const StatCounter: React.FC<StatCounterProps> = ({ end, suffix, duration = 1.8 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const isDecimal = end % 1 !== 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing curve: easeOutQuad
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      const currentVal = easedProgress * end;

      if (isDecimal) {
        setCount(Number(currentVal.toFixed(1)));
      } else {
        setCount(Math.floor(currentVal));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

export const TrustStats: React.FC = () => {
  const icons = [Award, Users, Stethoscope, Star];

  return (
    <section className="bg-slate-900 text-white relative py-12 border-y border-slate-800 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-32 bg-teal-500/10 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {clinicConfig.stats.map((stat, idx) => {
            const IconComponent = icons[idx] || Award;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center md:items-start text-center md:text-left relative group"
              >
                <div className="flex items-center gap-2 mb-2 text-teal-400">
                  <IconComponent className="w-5 h-5 text-teal-400" />
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                    {stat.subtext}
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
                  <StatCounter end={stat.value} suffix={stat.suffix} />
                </div>

                <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
