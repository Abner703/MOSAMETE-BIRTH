# A REMARKABLE EXISTENCE

> *Celebrating a mind that inspires.* — An immersive editorial birthday experience crafted for **Sephora (Joséphine) Mosamete**, from **Abner**.

---

## 1. Présentation du projet

**A REMARKABLE EXISTENCE** est une vitrine numérique personnelle pensée comme un récit éditorial en six chapitres :

1. **The Invitation** — Écran d’ouverture immersif et invitation à découvrir la surprise.
2. **A Mind Beyond the Ordinary** — Célébration de la profondeur intellectuelle et de la curiosité.
3. **Three Dimensions of a Beautiful Mind** — Exploration interactive autour de la lecture (*Books & Knowledge*), des systèmes embarqués (*Embedded Systems*) et de la réflexion (*Thoughts & Perspectives*).
4. **Your Existence, an Inspiration** — Séquence contemplative sur la portée d’un parcours qui inspire d’autres jeunes femmes.
5. **The Birthday Letter** — Correspondance personnelle présentée sur un papier éditorial.
6. **A Wish for Your New Chapter** — Vœux progressifs, message final et signature d’Abner.

L’expérience inclut une barre de progression discrète, une navigation épurée, le respect des préférences système de réduction des animations (`prefers-reduced-motion`) et une ambiance sonore optionnelle générée localement via Web Audio API (désactivée par défaut).

---

## 2. Technologies utilisées

- **React 19** + **TypeScript**
- **Vite 6** (outil de build et serveur de développement)
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Framer Motion** (transitions et animations au défilement)
- **Lucide React** (icônes minimalistes)
- **Web Audio API** (ambiance sonore optionnelle autonome, sans dépendance externe)

---

## 3. Structure des dossiers

```text
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BirthdayLetter.tsx
│   │   ├── EditorialIllustrations.tsx
│   │   ├── FinalWish.tsx
│   │   ├── Hero.tsx
│   │   ├── InspirationSection.tsx
│   │   ├── MindSection.tsx
│   │   ├── Navigation.tsx
│   │   ├── PassionsSection.tsx
│   │   └── ProgressIndicator.tsx
│   ├── data/
│   │   └── birthdayContent.ts
│   ├── styles/
│   │   └── globals.css
│   ├── utils/
│   │   └── ambientAudio.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vercel.json
└── vite.config.ts
```

---

## 4. Étapes d'installation

Prérequis : **Node.js 20+** et **npm**.

```bash
npm install
```

---

## 5. Lancement en local

```bash
npm run dev
```

L'application démarre sur `http://localhost:3000`.

Vérification TypeScript :

```bash
npm run lint
```

---

## 6. Génération du build de production

```bash
npm run build
```

Les fichiers statiques optimisés sont générés dans le dossier `dist/`.

Pour prévisualiser localement le build de production :

```bash
npm run preview
```

---

## 7. Déploiement sur Vercel

Le projet inclut `vercel.json` et ne requiert ni backend, ni base de données, ni variables d'environnement.

### Méthode 1 : Déploiement via GitHub

1. Exporter le projet et initialiser un dépôt Git si nécessaire.
2. Pousser le code source dans votre dépôt GitHub (`git push`).
3. Connecter le dépôt à [Vercel](https://vercel.com/new).
4. Sélectionner **Vite** comme framework si la détection automatique ne le fait pas.
5. Définir la commande de build : `npm run build`.
6. Définir le répertoire de sortie : `dist`.
7. Lancer le déploiement.

### Méthode 2 : Déploiement via Vercel CLI

1. Installer Vercel CLI globalement :
   ```bash
   npm install -g vercel
   ```
2. Se connecter à votre compte Vercel :
   ```bash
   vercel login
   ```
3. Déployer en prévisualisation depuis la racine du projet :
   ```bash
   vercel
   ```
4. Déployer en production :
   ```bash
   vercel --prod
   ```