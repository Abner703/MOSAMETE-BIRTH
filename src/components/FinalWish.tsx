import { motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';
import { FINAL_WISH_CONTENT, PROJECT_META } from '../data/birthdayContent';

interface FinalWishProps {
  onRelive: () => void;
}

const CELEBRATION_MOTES = [
  { left: '12%', top: '18%', size: 6, color: '#C5A46D', delay: 0.1 },
  { left: '24%', top: '72%', size: 5, color: '#A9B49A', delay: 0.4 },
  { left: '42%', top: '14%', size: 4, color: '#772E45', delay: 0.7 },
  { left: '68%', top: '22%', size: 6, color: '#C5A46D', delay: 0.25 },
  { left: '84%', top: '66%', size: 5, color: '#A9B49A', delay: 0.55 },
  { left: '90%', top: '28%', size: 4, color: '#772E45', delay: 0.85 },
];

export function FinalWish({ onRelive }: FinalWishProps) {
  return (
    <section
      id="wish"
      className="relative px-6 py-28 sm:py-36 overflow-hidden"
    >
      {/* Subtle light motes for quiet celebration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {CELEBRATION_MOTES.map((mote, idx) => (
          <motion.span
            key={idx}
            className="absolute rounded-full"
            style={{
              left: mote.left,
              top: mote.top,
              width: mote.size,
              height: mote.size,
              backgroundColor: mote.color,
            }}
            initial={{ opacity: 0, scale: 0.6, y: 8 }}
            whileInView={{ opacity: [0, 0.65, 0.3, 0.65], scale: 1, y: [-4, 4, -4] }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 5.5,
              delay: mote.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center space-y-12">
        <p className="text-xs font-mono tracking-[0.16em] uppercase text-[#772E45]">
          {FINAL_WISH_CONTENT.sectionIndex}
        </p>

        <div className="space-y-5">
          {FINAL_WISH_CONTENT.wishes.map((wish, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.65,
                delay: idx * 0.14,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-serif text-xl sm:text-2xl text-[#292723]/85"
            >
              {wish}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="py-10 border-y border-[#C5A46D]/45 space-y-6"
        >
          <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.1] font-bold tracking-tight text-[#772E45] [text-wrap:balance]">
            {FINAL_WISH_CONTENT.headline}
          </h2>

          <div className="space-y-1.5">
            <p className="font-serif italic text-xl sm:text-2xl text-[#292723]">
              {FINAL_WISH_CONTENT.signature}
            </p>
            <p className="text-sm font-medium tracking-wide text-[#292723]/70">
              {FINAL_WISH_CONTENT.fromLine}
            </p>
          </div>
        </motion.div>

        <div className="pt-2 flex flex-col items-center gap-6">
          <button
            type="button"
            onClick={onRelive}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border border-[#772E45]/35 bg-[#FAF7F0] text-sm font-medium text-[#772E45] hover:bg-[#772E45] hover:text-[#FAF7F0] transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#772E45]"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{FINAL_WISH_CONTENT.reliveCta}</span>
          </button>

          <p className="text-xs text-[#292723]/55">
            {PROJECT_META.title} · {PROJECT_META.editorialSignature}
          </p>
        </div>
      </div>
    </section>
  );
}
