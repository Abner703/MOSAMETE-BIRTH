import { motion } from 'framer-motion';
import { INSPIRATION_CONTENT, MEDIA_ASSETS } from '../data/birthdayContent';
import { InspirationLightIllustration } from './EditorialIllustrations';
import { EditorialPhotoFrame } from './EditorialMediaFrame';

export function InspirationSection() {
  return (
    <section
      id="inspiration"
      className="px-6 py-28 sm:py-36 border-b border-[#292723]/10 bg-[#292723] text-[#F4EFE6]"
    >
      <div className="mx-auto max-w-6xl space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <p className="text-xs font-mono tracking-[0.16em] uppercase text-[#C5A46D]">
              {INSPIRATION_CONTENT.sectionIndex}
            </p>
            <h2 className="font-serif text-[clamp(2.2rem,4.4vw,3.5rem)] leading-[1.12] font-semibold tracking-tight text-[#FAF7F0] [text-wrap:balance]">
              {INSPIRATION_CONTENT.title}
            </h2>

            <div className="pt-2 max-w-[320px] opacity-90">
              <InspirationLightIllustration />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <EditorialPhotoFrame
              src={MEDIA_ASSETS.presentationPortrait.src}
              alt={MEDIA_ASSETS.presentationPortrait.alt}
              figureNumber={MEDIA_ASSETS.presentationPortrait.figureNumber}
              caption={MEDIA_ASSETS.presentationPortrait.caption}
              aspectClass="aspect-[4/3]"
              imageClassName="object-cover object-[50%_38%] scale-[1.12]"
              darkSurface
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7 pt-10 border-t border-[#F4EFE6]/15">
          {INSPIRATION_CONTENT.paragraphs.map((paragraph, idx) => {
            const isFinal = idx === INSPIRATION_CONTENT.paragraphs.length - 1;
            return (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.65,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={
                  isFinal
                    ? 'md:col-span-2 pt-4 font-serif italic text-2xl sm:text-3xl text-[#C5A46D] tracking-wide'
                    : 'text-base sm:text-[17px] leading-[1.8] text-[#F4EFE6]/88 tracking-[0.008em]'
                }
              >
                {paragraph}
              </motion.p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
