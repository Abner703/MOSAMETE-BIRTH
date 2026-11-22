import { motion } from 'framer-motion';

export function HeroBackdropMotif() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 800 520"
      fill="none"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-55"
      preserveAspectRatio="xMidYMid slice"
    >
      <motion.path
        d="M60 110 H210 L248 148 H360"
        stroke="#C5A46D"
        strokeWidth="0.9"
        strokeOpacity="0.45"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
      />
      <motion.path
        d="M740 410 H585 L542 368 H430"
        stroke="#A9B49A"
        strokeWidth="1"
        strokeOpacity="0.55"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.8, delay: 0.2, ease: 'easeOut' }}
      />
      <circle cx="210" cy="110" r="3" fill="#C5A46D" fillOpacity="0.65" />
      <circle cx="360" cy="148" r="3" stroke="#772E45" strokeOpacity="0.5" strokeWidth="1" />
      <circle cx="585" cy="410" r="3" fill="#A9B49A" fillOpacity="0.8" />
      <circle cx="430" cy="368" r="3" stroke="#C5A46D" strokeOpacity="0.7" strokeWidth="1" />

      <circle
        cx="400"
        cy="260"
        r="210"
        stroke="#C5A46D"
        strokeOpacity="0.18"
        strokeWidth="0.8"
        strokeDasharray="4 6"
      />
      <circle cx="400" cy="260" r="158" stroke="#772E45" strokeOpacity="0.1" strokeWidth="0.8" />
    </svg>
  );
}

export function MindStudyIllustration() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 360 320"
      fill="none"
      className="w-full h-auto max-w-[320px] mx-auto"
    >
      <rect
        x="24"
        y="24"
        width="312"
        height="272"
        rx="12"
        fill="#FAF7F0"
        stroke="#292723"
        strokeOpacity="0.12"
      />
      <line x1="76" y1="24" x2="76" y2="296" stroke="#772E45" strokeOpacity="0.18" />
      <line x1="24" y1="74" x2="336" y2="74" stroke="#292723" strokeOpacity="0.08" />

      <circle cx="188" cy="164" r="68" stroke="#C5A46D" strokeWidth="1.1" strokeDasharray="3 5" />
      <circle cx="188" cy="164" r="44" stroke="#772E45" strokeWidth="1.2" strokeOpacity="0.7" />
      <path
        d="M116 164 H144 M232 164 H274 L294 144"
        stroke="#A9B49A"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M188 96 V120 M188 208 V244 L212 264"
        stroke="#C5A46D"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="188" cy="164" r="7" fill="#772E45" />
      <circle cx="294" cy="144" r="4" fill="#A9B49A" />
      <circle cx="212" cy="264" r="3.5" fill="#C5A46D" />
      <circle cx="116" cy="164" r="3.5" stroke="#772E45" strokeWidth="1.2" />

      <rect x="40" y="96" width="22" height="3" rx="1.5" fill="#292723" fillOpacity="0.2" />
      <rect x="40" y="108" width="16" height="3" rx="1.5" fill="#292723" fillOpacity="0.14" />
      <rect x="40" y="120" width="20" height="3" rx="1.5" fill="#772E45" fillOpacity="0.35" />
    </svg>
  );
}

export function BooksIllustration() {
  return (
    <svg aria-hidden="true" viewBox="0 0 280 180" fill="none" className="w-full h-auto">
      <path
        d="M36 42 C72 34, 112 38, 140 52 C168 38, 208 34, 244 42 V140 C208 132, 168 136, 140 150 C112 136, 72 132, 36 140 Z"
        fill="#FAF7F0"
        stroke="#772E45"
        strokeWidth="1.25"
      />
      <line x1="140" y1="52" x2="140" y2="150" stroke="#772E45" strokeWidth="1.25" />
      <path
        d="M58 64 C82 60, 104 62, 124 70 M58 80 C82 76, 104 78, 124 86 M58 96 C82 92, 104 94, 118 100 M58 112 C80 109, 98 110, 114 115"
        stroke="#292723"
        strokeOpacity="0.28"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M156 70 C176 62, 198 60, 222 64 M156 86 C176 78, 198 76, 222 80 M156 102 C176 94, 196 92, 214 96"
        stroke="#292723"
        strokeOpacity="0.28"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path d="M188 38 V92 L196 84 L204 92 V37" fill="#772E45" fillOpacity="0.16" stroke="#772E45" strokeWidth="1.1" />
      <circle cx="204" cy="116" r="10" stroke="#C5A46D" strokeWidth="1" strokeDasharray="2 3" />
      <circle cx="204" cy="116" r="2.5" fill="#C5A46D" />
    </svg>
  );
}

export function EmbeddedIllustration({ activePin = 1 }: { activePin?: number }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 280 180" fill="none" className="w-full h-auto">
      <rect
        x="84"
        y="46"
        width="112"
        height="88"
        rx="8"
        fill="#FAF7F0"
        stroke="#4F6347"
        strokeWidth="1.35"
      />
      <rect
        x="98"
        y="60"
        width="84"
        height="60"
        rx="4"
        stroke="#A9B49A"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <circle cx="96" cy="58" r="3" fill="#C5A46D" />

      {/* Left traces */}
      <path d="M28 66 H84" stroke="#A9B49A" strokeWidth="1.4" />
      <path d="M40 90 H84" stroke={activePin === 0 ? '#772E45' : '#A9B49A'} strokeWidth="1.4" />
      <path d="M28 114 H84" stroke="#A9B49A" strokeWidth="1.4" />

      {/* Right traces */}
      <path d="M196 66 H244 L256 54" stroke={activePin === 1 ? '#772E45' : '#A9B49A'} strokeWidth="1.4" />
      <path d="M196 90 H252" stroke="#A9B49A" strokeWidth="1.4" />
      <path d="M196 114 H236 L252 130" stroke={activePin === 2 ? '#C5A46D' : '#A9B49A'} strokeWidth="1.4" />

      {/* Top & bottom pins */}
      <path d="M116 26 V46 M140 26 V46 M164 26 V46" stroke="#C5A46D" strokeWidth="1.2" />
      <path d="M116 134 V154 M140 134 V154 M164 134 V154" stroke="#C5A46D" strokeWidth="1.2" />

      <circle cx="28" cy="66" r="3" fill="#A9B49A" />
      <circle cx="40" cy="90" r="3.5" fill={activePin === 0 ? '#772E45' : '#A9B49A'} />
      <circle cx="256" cy="54" r="3.5" fill={activePin === 1 ? '#772E45' : '#A9B49A'} />
      <circle cx="252" cy="130" r="3.5" fill={activePin === 2 ? '#C5A46D' : '#A9B49A'} />

      <text
        x="140"
        y="94"
        textAnchor="middle"
        fill="#292723"
        fillOpacity="0.72"
        fontSize="10"
        fontFamily="JetBrains Mono, monospace"
      >
        MCU · CORE
      </text>
    </svg>
  );
}

export function PerspectivesIllustration() {
  return (
    <svg aria-hidden="true" viewBox="0 0 280 180" fill="none" className="w-full h-auto">
      <circle cx="140" cy="90" r="56" stroke="#C5A46D" strokeWidth="1.15" strokeOpacity="0.7" />
      <circle cx="116" cy="90" r="34" stroke="#772E45" strokeWidth="1.1" strokeOpacity="0.45" />
      <circle cx="164" cy="90" r="34" stroke="#A9B49A" strokeWidth="1.2" strokeOpacity="0.75" />
      <line x1="48" y1="90" x2="232" y2="90" stroke="#292723" strokeOpacity="0.16" strokeDasharray="3 4" />
      <line x1="140" y1="22" x2="140" y2="158" stroke="#292723" strokeOpacity="0.16" strokeDasharray="3 4" />
      <circle cx="140" cy="90" r="4.5" fill="#772E45" />
      <circle cx="140" cy="34" r="3" fill="#C5A46D" />
      <circle cx="196" cy="90" r="3" fill="#A9B49A" />
      <circle cx="84" cy="90" r="3" fill="#772E45" fillOpacity="0.65" />
    </svg>
  );
}

export function InspirationLightIllustration() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 420 260"
      fill="none"
      className="w-full h-auto max-w-[420px] mx-auto"
    >
      {/* Radiating paths & propagating light */}
      <circle cx="96" cy="130" r="14" fill="#C5A46D" fillOpacity="0.22" />
      <circle cx="96" cy="130" r="6" fill="#772E45" />
      <circle cx="96" cy="130" r="34" stroke="#C5A46D" strokeOpacity="0.55" strokeWidth="1" />
      <circle
        cx="96"
        cy="130"
        r="62"
        stroke="#C5A46D"
        strokeOpacity="0.3"
        strokeWidth="0.9"
        strokeDasharray="3 5"
      />

      <motion.path
        d="M102 130 C168 130, 210 68, 368 54"
        stroke="#772E45"
        strokeWidth="1.35"
        strokeOpacity="0.7"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      />
      <motion.path
        d="M102 130 C182 130, 232 114, 386 116"
        stroke="#C5A46D"
        strokeWidth="1.4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.5, delay: 0.15, ease: 'easeOut' }}
      />
      <motion.path
        d="M102 130 C176 130, 224 166, 376 184"
        stroke="#A9B49A"
        strokeWidth="1.45"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.5, delay: 0.25, ease: 'easeOut' }}
      />
      <motion.path
        d="M102 130 C158 138, 198 214, 344 226"
        stroke="#292723"
        strokeOpacity="0.28"
        strokeWidth="1.1"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.6, delay: 0.35, ease: 'easeOut' }}
      />

      <circle cx="368" cy="54" r="4" fill="#772E45" />
      <circle cx="386" cy="116" r="4" fill="#C5A46D" />
      <circle cx="376" cy="184" r="4" fill="#A9B49A" />
      <circle cx="344" cy="226" r="3" stroke="#292723" strokeOpacity="0.45" strokeWidth="1.1" />
    </svg>
  );
}

export function MonogramSeal() {
  return (
    <svg aria-hidden="true" viewBox="0 0 88 88" fill="none" className="w-16 h-16">
      <circle cx="44" cy="44" r="38" stroke="#772E45" strokeOpacity="0.35" strokeWidth="1" />
      <circle
        cx="44"
        cy="44"
        r="31"
        stroke="#C5A46D"
        strokeOpacity="0.8"
        strokeWidth="1"
        strokeDasharray="2 3"
      />
      <text
        x="44"
        y="49"
        textAnchor="middle"
        fill="#772E45"
        fontSize="16"
        fontFamily="Playfair Display, Georgia, serif"
        fontStyle="italic"
      >
        S.M.
      </text>
    </svg>
  );
}
