import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { LETTER_CONTENT, MEDIA_ASSETS } from '../data/birthdayContent';
import { MonogramSeal } from './EditorialIllustrations';
import { EditorialVideoFrame } from './EditorialMediaFrame';

export function BirthdayLetter() {
  const [revealAll, setRevealAll] = useState(false);

  return (
    <section
      id="letter"
      className="px-6 py-24 sm:py-32 border-b border-[#292723]/10"
    >
      <div className="mx-auto max-w-6xl space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div className="space-y-3">
            <p className="text-xs font-mono tracking-[0.16em] uppercase text-[#772E45]">
              {LETTER_CONTENT.sectionIndex}
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.6vw,3.15rem)] leading-[1.15] font-semibold tracking-tight text-[#292723] [text-wrap:balance]">
              {LETTER_CONTENT.title}
            </h2>
          </div>

          {!revealAll && (
            <button
              type="button"
              onClick={() => setRevealAll(true)}
              className="inline-flex items-center gap-2 self-start sm:self-auto px-3.5 py-2 rounded-lg border border-[#292723]/15 bg-[#FAF7F0] text-xs font-medium text-[#292723]/80 hover:border-[#772E45]/45 hover:text-[#772E45] transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#772E45]"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Afficher la lettre entière</span>
            </button>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          <article className="lg:col-span-7 relative rounded-2xl bg-[#FAF7F0] border border-[#C5A46D]/40 p-7 sm:p-11 md:p-14 shadow-[0_24px_60px_-34px_rgba(41,39,35,0.22)]">
            <div className="flex items-start justify-between gap-6 pb-8 border-b border-[#292723]/10">
              <div className="space-y-1.5">
                <p className="text-xs font-mono uppercase tracking-[0.14em] text-[#292723]/55">
                  Correspondance personnelle
                </p>
                <p className="font-serif italic text-lg text-[#772E45]">
                  {LETTER_CONTENT.dateline}
                </p>
              </div>
              <MonogramSeal />
            </div>

            <div className="pt-8 space-y-6 max-w-prose">
              <p className="font-serif italic text-2xl text-[#292723]">
                {LETTER_CONTENT.salutation}
              </p>

              {LETTER_CONTENT.paragraphs.map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  initial={revealAll ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: revealAll ? 0 : idx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`text-base sm:text-[17px] leading-[1.85] text-[#292723]/90 ${
                    idx === LETTER_CONTENT.paragraphs.length - 1
                      ? 'font-serif italic text-xl text-[#772E45] pt-2'
                      : ''
                  }`}
                >
                  {paragraph}
                </motion.p>
              ))}

              <div className="pt-8 border-t border-[#292723]/10 space-y-1">
                <p className="text-sm text-[#292723]/70">{LETTER_CONTENT.closingLabel}</p>
                <p className="font-serif italic text-2xl text-[#772E45]">
                  {LETTER_CONTENT.senderName}
                </p>
              </div>
            </div>
          </article>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-24 flex justify-center"
          >
            <EditorialVideoFrame
              src={MEDIA_ASSETS.livingPortraitVideo.src}
              figureNumber={MEDIA_ASSETS.livingPortraitVideo.figureNumber}
              caption={MEDIA_ASSETS.livingPortraitVideo.caption}
            />
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
