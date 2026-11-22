import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Compass, Cpu } from 'lucide-react';
import { PASSIONS_CONTENT, type PassionDimension } from '../data/birthdayContent';
import {
  BooksIllustration,
  EmbeddedIllustration,
  PerspectivesIllustration,
} from './EditorialIllustrations';

function renderIllustration(dimensionId: PassionDimension['id'], activeNoteIndex: number) {
  switch (dimensionId) {
    case 'books':
      return <BooksIllustration />;
    case 'embedded':
      return <EmbeddedIllustration activePin={activeNoteIndex} />;
    case 'thoughts':
      return <PerspectivesIllustration />;
  }
}

function renderIcon(dimensionId: PassionDimension['id']) {
  switch (dimensionId) {
    case 'books':
      return <BookOpen className="w-4 h-4" />;
    case 'embedded':
      return <Cpu className="w-4 h-4" />;
    case 'thoughts':
      return <Compass className="w-4 h-4" />;
  }
}

export function PassionsSection() {
  const [activeId, setActiveId] = useState<PassionDimension['id']>('books');
  const [noteIndices, setNoteIndices] = useState<Record<PassionDimension['id'], number>>({
    books: 0,
    embedded: 0,
    thoughts: 0,
  });

  const activeDimension =
    PASSIONS_CONTENT.dimensions.find((d) => d.id === activeId) ??
    PASSIONS_CONTENT.dimensions[0];

  const activeNoteIdx = noteIndices[activeDimension.id] ?? 0;
  const activeNote = activeDimension.notes[activeNoteIdx] ?? activeDimension.notes[0];

  const handleSelectNote = (dimensionId: PassionDimension['id'], index: number) => {
    setNoteIndices((prev) => ({ ...prev, [dimensionId]: index }));
  };

  return (
    <section
      id="passions"
      className="px-6 py-24 sm:py-32 border-b border-[#292723]/10 bg-[#FAF7F0]/60"
    >
      <div className="mx-auto max-w-6xl space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl space-y-4"
        >
          <p className="text-xs font-mono tracking-[0.16em] uppercase text-[#772E45]">
            {PASSIONS_CONTENT.sectionIndex}
          </p>
          <h2 className="font-serif text-[clamp(2rem,3.6vw,3.15rem)] leading-[1.15] font-semibold tracking-tight text-[#292723] [text-wrap:balance]">
            {PASSIONS_CONTENT.title}
          </h2>
          <p className="text-base leading-relaxed text-[#292723]/75">
            {PASSIONS_CONTENT.intro}
          </p>
        </motion.div>

        {/* Three interactive dimension cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PASSIONS_CONTENT.dimensions.map((dimension, idx) => {
            const isSelected = dimension.id === activeId;
            return (
              <motion.button
                key={dimension.id}
                type="button"
                onClick={() => setActiveId(dimension.id)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                aria-pressed={isSelected}
                className={`text-left rounded-2xl p-6 sm:p-7 border transition-all flex flex-col justify-between gap-6 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#772E45] ${
                  isSelected
                    ? 'bg-[#FAF7F0] border-[#772E45] shadow-[0_14px_32px_-20px_rgba(119,46,69,0.35)]'
                    : 'bg-[#F4EFE6]/80 border-[#292723]/12 hover:border-[#292723]/30'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className="text-xs font-mono tracking-[0.14em] uppercase"
                      style={{ color: dimension.accentHex }}
                    >
                      {dimension.index} · {dimension.surfaceTag}
                    </span>
                    <span
                      className="text-[#292723]/70"
                      style={{ color: isSelected ? dimension.accentHex : undefined }}
                    >
                      {renderIcon(dimension.id)}
                    </span>
                  </div>

                  <div className="py-2">
                    {renderIllustration(dimension.id, noteIndices[dimension.id] ?? 0)}
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-semibold text-[#292723]">
                      {dimension.index}. {dimension.title}
                    </h3>
                    <p className="text-xs text-[#292723]/60">{dimension.subtitle}</p>
                  </div>
                </div>

                <p className="font-serif italic text-base leading-relaxed text-[#292723]/90 pt-4 border-t border-[#292723]/10">
                  “{dimension.quote}”
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* Interactive deep-dive panel for the selected dimension */}
        <motion.div
          key={activeDimension.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-[#292723]/12 bg-[#FAF7F0] p-6 sm:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <p
                className="text-xs font-mono tracking-[0.15em] uppercase"
                style={{ color: activeDimension.accentHex }}
              >
                {activeDimension.index} · {activeDimension.title}
              </p>
              <p className="font-serif text-2xl leading-snug text-[#292723]">
                “{activeDimension.quote}”
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#292723]/80">
                {activeDimension.description}
              </p>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                {activeDimension.notes.map((note, idx) => {
                  const isCurrent = idx === activeNoteIdx;
                  return (
                    <button
                      key={note.label}
                      type="button"
                      onClick={() => handleSelectNote(activeDimension.id, idx)}
                      className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#772E45] ${
                        isCurrent
                          ? 'bg-[#292723] text-[#FAF7F0]'
                          : 'bg-[#F4EFE6] text-[#292723]/75 border border-[#292723]/12 hover:text-[#292723]'
                      }`}
                    >
                      {note.label}
                    </button>
                  );
                })}
              </div>

              <div className="rounded-xl border border-[#292723]/10 bg-[#F4EFE6]/70 p-6 space-y-2.5">
                <p className="text-xs font-mono uppercase tracking-wider text-[#292723]/55">
                  {activeDimension.interactiveLabel} · {activeNote.label}
                </p>
                <h4 className="font-serif text-xl font-semibold text-[#292723]">
                  {activeNote.title}
                </h4>
                <p className="text-sm sm:text-base leading-relaxed text-[#292723]/85">
                  {activeNote.detail}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
