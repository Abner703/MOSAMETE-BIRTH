import { useCallback, useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { BirthdayLetter } from './components/BirthdayLetter';
import { FinalWish } from './components/FinalWish';
import { Hero } from './components/Hero';
import { InspirationSection } from './components/InspirationSection';
import { MindSection } from './components/MindSection';
import { Navigation } from './components/Navigation';
import { PassionsSection } from './components/PassionsSection';
import { ProgressIndicator } from './components/ProgressIndicator';
import { SECTION_ANCHORS } from './data/birthdayContent';
import { ambientAudio } from './utils/ambientAudio';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('invitation');
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
  const [experienceKey, setExperienceKey] = useState<number>(0);

  const scrollToSection = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleToggleAudio = useCallback(() => {
    const nextState = ambientAudio.toggle();
    setAudioEnabled(nextState);
  }, []);

  const handleRelive = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.setTimeout(() => {
      setExperienceKey((prev) => prev + 1);
      setActiveSection('invitation');
    }, 350);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -45% 0px',
        threshold: [0.15, 0.35, 0.6],
      }
    );

    SECTION_ANCHORS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [experienceKey]);

  useEffect(() => {
    return () => {
      ambientAudio.stop();
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div key={experienceKey} className="min-h-screen paper-grain">
        <ProgressIndicator />
        <Navigation
          activeSection={activeSection}
          audioEnabled={audioEnabled}
          onToggleAudio={handleToggleAudio}
          onNavigate={scrollToSection}
        />

        <main>
          <Hero onDiscover={() => scrollToSection('mind')} />
          <MindSection />
          <PassionsSection />
          <InspirationSection />
          <BirthdayLetter />
          <FinalWish onRelive={handleRelive} />
        </main>
      </div>
    </MotionConfig>
  );
}
