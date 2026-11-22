import { Volume2, VolumeX } from 'lucide-react';
import { PROJECT_META, SECTION_ANCHORS } from '../data/birthdayContent';

interface NavigationProps {
  activeSection: string;
  audioEnabled: boolean;
  onToggleAudio: () => void;
  onNavigate: (id: string) => void;
}

export function Navigation({
  activeSection,
  audioEnabled,
  onToggleAudio,
  onNavigate,
}: NavigationProps) {
  const navLinks = SECTION_ANCHORS.slice(1);

  return (
    <header className="sticky top-0 z-40 border-b border-[#292723]/10 bg-[#F4EFE6]/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 h-14 flex items-center justify-between gap-6">
        <a
          href="#invitation"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('invitation');
          }}
          className="font-serif text-sm sm:text-base font-semibold tracking-tight text-[#292723] whitespace-nowrap shrink-0"
        >
          {PROJECT_META.title}
        </a>

        <nav
          aria-label="Sections de l'expérience"
          className="hidden md:flex items-center gap-6 text-xs font-medium tracking-wide text-[#292723]/70"
        >
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b ${
                  isActive
                    ? 'text-[#772E45] border-[#772E45]'
                    : 'border-transparent hover:text-[#292723]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onToggleAudio}
            aria-pressed={audioEnabled}
            aria-label={audioEnabled ? 'Couper la musique ambiante' : 'Activer la musique ambiante'}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#772E45] ${
              audioEnabled
                ? 'bg-[#772E45] text-[#FAF7F0] border-[#772E45]'
                : 'bg-[#FAF7F0] text-[#292723] border-[#292723]/15 hover:border-[#772E45]/40'
            }`}
          >
            {audioEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>{audioEnabled ? 'Sound On' : 'Sound Off'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
