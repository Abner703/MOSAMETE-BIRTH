import { motion } from 'framer-motion';
import { MEDIA_ASSETS, MIND_CONTENT } from '../data/birthdayContent';
import { EditorialPhotoFrame } from './EditorialMediaFrame';

export function MindSection() {
  return (
    <section
      id="mind"
      className="px-6 py-24 sm:py-32 border-b border-[#292723]/10"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 max-w-2xl"
        >
          <p className="text-xs font-mono tracking-[0.16em] uppercase text-[#772E45]">
            {MIND_CONTENT.sectionIndex}
          </p>
          <h2 className="font-serif text-[clamp(2rem,3.6vw,3.15rem)] leading-[1.15] font-semibold tracking-tight text-[#292723] [text-wrap:balance]">
            {MIND_CONTENT.title}
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-6 max-w-prose">
            {MIND_CONTENT.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`text-base sm:text-[17px] leading-[1.8] text-[#292723]/90 ${
                  index === 0
                    ? 'first-letter:font-serif first-letter:text-5xl first-letter:font-semibold first-letter:text-[#772E45] first-letter:float-left first-letter:mr-3 first-letter:leading-[0.9] first-letter:mt-1'
                    : index === 1
                    ? 'font-serif italic text-xl sm:text-2xl text-[#772E45] py-2'
                    : ''
                }`}
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.blockquote
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 py-7 border-y border-[#C5A46D]/45"
            >
              <p className="font-serif italic text-xl sm:text-2xl leading-relaxed text-[#292723]">
                “{MIND_CONTENT.pullQuote}”
              </p>
            </motion.blockquote>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-24 max-w-sm mx-auto w-full"
          >
            <EditorialPhotoFrame
              src={MEDIA_ASSETS.outdoorPortrait.src}
              alt={MEDIA_ASSETS.outdoorPortrait.alt}
              figureNumber={MEDIA_ASSETS.outdoorPortrait.figureNumber}
              caption={MEDIA_ASSETS.outdoorPortrait.caption}
              aspectClass="aspect-[3/4]"
              imageClassName="object-cover object-[50%_74%] scale-[1.06]"
            />
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
