export interface DimensionNote {
  label: string;
  title: string;
  detail: string;
}

export interface PassionDimension {
  id: 'books' | 'embedded' | 'thoughts';
  index: string;
  title: string;
  subtitle: string;
  quote: string;
  description: string;
  accentHex: string;
  surfaceTag: string;
  interactiveLabel: string;
  notes: DimensionNote[];
}

export interface SectionAnchor {
  id: string;
  number: string;
  label: string;
}

export const PROJECT_META = {
  title: 'A REMARKABLE EXISTENCE',
  editorialSignature: 'Celebrating a mind that inspires.',
  recipient: 'Sephora (Joséphine) Mosamete',
  recipientShort: 'Sephora',
  sender: 'Abner',
  editionLabel: 'Édition Personnelle · Honoring Thought & Curiosity',
};

export const SECTION_ANCHORS: SectionAnchor[] = [
  { id: 'invitation', number: '01', label: 'Invitation' },
  { id: 'mind', number: '02', label: 'The Mind' },
  { id: 'passions', number: '03', label: 'Dimensions' },
  { id: 'inspiration', number: '04', label: 'Inspiration' },
  { id: 'letter', number: '05', label: 'The Letter' },
  { id: 'wish', number: '06', label: 'New Chapter' },
];

export const HERO_CONTENT = {
  kicker: 'A Remarkable Existence · Celebrating a mind that inspires.',
  headline: 'A LITTLE CELEBRATION OF SOMEONE EXTRAORDINARY.',
  greeting: 'Dear Sephora, today this little space is entirely yours.',
  reflection:
    'Some people are special not because they seek to be noticed, but because of the light they carry.',
  ctaLabel: 'Discover your surprise',
};

export const MEDIA_ASSETS = {
  outdoorPortrait: {
    src: '/assets/aistudio/Screenshot_20261122-105049_b9f10064.jpg',
    alt: 'Sephora souriante en plein air, rayonnante dans une robe prune et pourpre',
    figureNumber: 'Fig. 01',
    caption: 'Une présence lumineuse et singulière.',
  },
  presentationPortrait: {
    src: '/assets/aistudio/Screenshot_20261122-105121_0fcbdd4a.jpg',
    alt: 'Sephora prenant la parole avec assurance devant un auditoire et un ordinateur portable',
    figureNumber: 'Fig. 02',
    caption: 'Prendre la parole, défendre ses idées, ouvrir la voie.',
  },
  livingPortraitVideo: {
    src: '/assets/aistudio/VID-20261122-WA0003_429c9478.mp4',
    figureNumber: 'Fig. 03',
    caption: 'Instantané vivant · Une élégance simple et naturelle.',
  },
};

export const MIND_CONTENT = {
  sectionIndex: '02 · Portrait Intellectuel',
  title: 'A mind beyond the ordinary.',
  pullQuote:
    'La singularité véritable naît de la profondeur de la pensée, de la curiosité qui veille et des questions que l’on ose poser.',
  marginCaption: 'Étude sur la curiosité et l’exigence intérieure.',
  paragraphs: [
    "Il existe des personnes dont la singularité ne se mesure pas simplement à ce qu'elles savent, mais à la profondeur avec laquelle elles pensent, à la curiosité qui les anime et aux questions qu'elles osent se poser.",
    'Tu fais partie de ces personnes, Sephora.',
    "Ton amour pour la lecture, ta richesse intellectuelle et cette manière particulière de réfléchir font de toi une personnalité qui mérite d'être célébrée.",
    "Ce qui est admirable, ce n'est pas seulement ce que tu connais aujourd'hui, mais aussi cette volonté de continuer à découvrir, à comprendre et à repousser les frontières de ton propre savoir.",
  ],
};

export const PASSIONS_CONTENT = {
  sectionIndex: '03 · Trois Dimensions',
  title: 'Three dimensions of a beautiful mind.',
  intro:
    'Entre les pages qui nourrissent l’esprit, les architectures embarquées qui donnent forme aux idées et le silence fécond de la réflexion.',
  dimensions: [
    {
      id: 'books',
      index: '01',
      title: 'BOOKS & KNOWLEDGE',
      subtitle: 'Littérature, savoir et carnets de lecture',
      quote: 'Every book you open is another world you choose to explore.',
      description:
        'Lire n’est jamais un simple passe-temps pour toi : c’est une manière d’habiter plusieurs mondes, d’affiner ton regard et d’entretenir une conversation vivante avec les grandes idées.',
      accentHex: '#772E45',
      surfaceTag: 'Folio & Annotations',
      interactiveLabel: 'Feuilleter les pages',
      notes: [
        {
          label: 'Page I',
          title: 'La patience du lecteur attentif',
          detail:
            'Chaque chapitre lu avec attention laisse une empreinte durable dans la manière de nommer le monde et d’en saisir les nuances.',
        },
        {
          label: 'Page II',
          title: 'La bibliothèque intérieure',
          detail:
            'Les livres deviennent des repères silencieux : ils nourrissent la clarté d’esprit, l’éloquence et l’indépendance de jugement.',
        },
        {
          label: 'Page III',
          title: 'Notes en marge',
          detail:
            'Ce que tu retiens des textes révèle autant ta sensibilité que ton exigence intellectuelle.',
        },
      ],
    },
    {
      id: 'embedded',
      index: '02',
      title: 'EMBEDDED SYSTEMS',
      subtitle: 'Microcontrôleurs, logique et précision matérielle',
      quote:
        "Some minds don't just observe how the world works. They imagine how to make it work better.",
      description:
        'Là où la logique du code rencontre la matière du silicium, tu trouves un terrain d’expression exigeant : comprendre chaque signal, orchestrer le temps réel et bâtir des systèmes fiables.',
      accentHex: '#4F6347',
      surfaceTag: 'MCU · Bus & Signaux',
      interactiveLabel: 'Explorer l’architecture',
      notes: [
        {
          label: 'NODE 0x01',
          title: 'Du schéma à l’intention',
          detail:
            'Derrière chaque piste de cuivre et chaque interruption matérielle se cache une architecture pensée avec rigueur et créativité.',
        },
        {
          label: 'NODE 0x02',
          title: 'Précision & temps réel',
          detail:
            'Les systèmes embarqués exigent patience, méthode et lucidité — autant de qualités qui te caractérisent naturellement.',
        },
        {
          label: 'NODE 0x03',
          title: 'L’ingénierie au service du réel',
          detail:
            'Concevoir ce qui fonctionne discrètement mais sûrement, là où la technologie devient utile et concrète.',
        },
      ],
    },
    {
      id: 'thoughts',
      index: '03',
      title: 'THOUGHTS & PERSPECTIVES',
      subtitle: 'Profondeur, écoute et questionnement continu',
      quote: 'A beautiful mind is one that never stops asking meaningful questions.',
      description:
        'Au-delà des disciplines, il y a cette qualité rare : la capacité de prendre de la hauteur, d’interroger les évidences et de relier des idées qui semblaient éloignées.',
      accentHex: '#9C7A42',
      surfaceTag: 'Réflexion & Horizon',
      interactiveLabel: 'Ouvrir les perspectives',
      notes: [
        {
          label: 'Perspective A',
          title: 'La force des bonnes questions',
          detail:
            'Les réponses éclairent un instant ; les questions justes transforment une trajectoire entière.',
        },
        {
          label: 'Perspective B',
          title: 'Profondeur et douceur',
          detail:
            'Penser avec rigueur sans jamais perdre la chaleur humaine et l’attention portée aux autres.',
        },
        {
          label: 'Perspective C',
          title: 'Une vision en mouvement',
          detail:
            'Ne pas se contenter de suivre des chemins tracés, mais observer avec lucidité pour ouvrir les siens.',
        },
      ],
    },
  ] satisfies PassionDimension[],
};

export const INSPIRATION_CONTENT = {
  sectionIndex: '04 · Rayonnement',
  title: 'Your existence can inspire more than you imagine.',
  leadLine: 'Ton histoire mérite d’être écrite.',
  paragraphs: [
    "Je souhaite que tu réalises une chose : ta singularité ne s'arrête pas à ce que tu es aujourd'hui.",
    'Dans un monde où tant de jeunes femmes cherchent encore des raisons de croire en leurs capacités, en leur intelligence et en leurs ambitions, des personnes comme toi peuvent devenir des repères.',
    'Par ta curiosité, ton amour du savoir, ta passion pour la technologie et ta manière de penser, tu peux inspirer bien au-delà de ton propre parcours.',
    "Peut-être qu'un jour, une jeune fille découvrira les sciences, ouvrira un livre, osera concevoir quelque chose de grand ou choisira de poursuivre ses ambitions parce qu'elle aura vu une femme comme toi le faire.",
    'Ne sous-estime jamais la portée de ce que tu peux devenir.',
    "Ton histoire mérite d'être écrite.",
  ],
};

export const LETTER_CONTENT = {
  sectionIndex: '05 · Correspondance',
  title: 'A letter, just for you.',
  dateline: 'Pour Sephora (Joséphine) Mosamete',
  salutation: 'Chère Sephora,',
  paragraphs: [
    "Aujourd'hui, je ne célèbre pas simplement une année supplémentaire dans ta vie. Je célèbre une personne, une intelligence, une sensibilité et une personnalité qui méritent d'être reconnues.",
    "Je voudrais que cette nouvelle année t'apporte encore plus de découvertes, de connaissances, de belles rencontres et d'occasions de donner vie à tes ambitions.",
    "Continue de lire, de réfléchir, de questionner, d'apprendre et de construire.",
    "Ne laisse jamais les limites que le monde pourrait essayer de t'imposer réduire la grandeur de ce que tu peux accomplir.",
    "Que tes idées trouvent leur chemin, que tes projets prennent forme et que ton parcours puisse, à son tour, ouvrir des horizons à d'autres.",
    'Que cette nouvelle année soit remplie de belles perspectives, de progrès, de sérénité et de moments qui te rappelleront combien la vie peut être belle.',
    'Joyeux anniversaire à une personne véritablement particulière.',
  ],
  closingLabel: 'Avec toute mon estime et mon amitié,',
  senderName: 'Abner',
};

export const FINAL_WISH_CONTENT = {
  sectionIndex: '06 · Vœux pour la suite',
  wishes: [
    'May you grow in wisdom.',
    'May you build what you once only imagined.',
    'May you inspire without even trying.',
    'And may life give you beautiful reasons to smile.',
  ],
  headline: 'HAPPY BIRTHDAY, SEPHORA.',
  signature: 'With admiration and warm wishes.',
  fromLine: "De la part d'Abner.",
  reliveCta: 'Relive this beautiful moment',
};
