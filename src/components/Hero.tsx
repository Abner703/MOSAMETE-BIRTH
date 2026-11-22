import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { HERO_CONTENT, PROJECT_META } from '../data/birthdayContent';
import { HeroBackdropMotif } from './EditorialIllustrations';

interface HeroProps {
  onDiscover: () => void;
}

export function Hero({ onDiscover }: HeroProps) {
  return (
    <section
      id="invitation"
      className="relative min-h-[calc(100svh-3.5rem)] flex items-center justify-center px-6 py-20 overflow-hidden border-b border-[#292723]/10"
    >
      <HeroBackdropMotif />

      <div className="relative z-10 mx-auto max-w-3xl text-center space-y-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-mono tracking-[0.18em] uppercase text-[#772E45]"
        >
          {HERO_CONTENT.kicker}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.12] font-semibold tracking-tight text-[#292723] [text-wrap:balance]"
        >
          {HERO_CONTENT.headline}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 max-w-xl mx-auto"
        >
          <p className="font-serif italic text-xl sm:text-2xl text-[#772E45]">
            {HERO_CONTENT.greeting}
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-[#292723]/80">
            {HERO_CONTENT.reflection}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="pt-4 flex flex-col items-center gap-6"
        >
          <button
            type="button"
            onClick={onDiscover}
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-lg bg-[#772E45] text-[#FAF7F0] text-sm font-medium tracking-wide hover:bg-[#5E2336] transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#772E45]"
          >
            <span>{HERO_CONTENT.ctaLabel}</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <p className="text-xs text-[#292723]/55">
            {PROJECT_META.recipient} · {PROJECT_META.sender}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
