# Paroisse Saint Dominique Savio — Site web

Site web vitrine de la **Paroisse Saint Dominique Savio** (Archidiocèse de Douala, Doyenné Wouri I, Cameroun). Le site présente la paroisse, sa vie communautaire, les horaires de célébrations, les actualités, l'agenda, la médiathèque et divers services aux paroissiens (dons, boutique, espace paroissien, etc.).

Ce projet est issu d'un export **Figma Make** et a été adapté pour un usage npm classique.

## Technologies utilisées

- **[React 19](https://react.dev/)** — bibliothèque UI, en TypeScript
- **[React Router 8](https://reactrouter.com/)** — routage côté client (`createBrowserRouter`)
- **[Vite 8](https://vitejs.dev/)** — outil de build et serveur de développement
- **[Tailwind CSS 4](https://tailwindcss.com/)** — styles utilitaires (configuration via `@theme` dans `src/index.css`)
- **TypeScript 5** — typage statique
- **oxfmt** — formatage du code

## Structure du projet

```
src/
├── main.tsx              # Point d'entrée de l'application
├── App.tsx                # Composant racine (RouterProvider)
├── routes.tsx              # Déclaration de toutes les routes
├── index.css                # Styles globaux et thème Tailwind
├── components/
│   └── Layout.tsx           # En-tête, navigation, pied de page communs
├── data/
│   └── content.ts             # Contenu statique du site (infos paroisse, horaires de messes, actualités, etc.)
├── imports/                    # Images, logos et documents (PDF) du site
└── pages/                      # Une page par section du site
    ├── Home.tsx, Contact.tsx, Agenda.tsx, Actualites.tsx, Homelies.tsx,
    │   Mediatheque.tsx, Don.tsx, Boutique.tsx, EspaceMembre.tsx, ...
    ├── paroisse/               # Histoire, Genèse, Saint Dominique Savio, Équipe, Organisation, Archidiocèse...
    ├── vie-paroissiale/        # Mouvements & groupes, Caritas, Projets, Registre paroissial
    ├── celebrer/               # Horaires des messes, Sacrements, Intention de messe, Bans
    └── se-nourrir/             # Catéchèse, Prière, Journal
```

### Sections principales du site

- **La Paroisse** — histoire, genèse, présentation de Saint Dominique Savio, équipe pastorale, organisation, rattachement à l'Archidiocèse, médiathèque
- **Vie paroissiale** — mouvements & groupes, Caritas, projets, registre paroissial
- **Célébrer** — horaires des messes, sacrements, intentions de messe, publication des bans
- **Se nourrir** — catéchèse, prière, journal paroissial
- **Actualités & Agenda** — actualités de la paroisse et événements à venir
- **Homélies & Médiathèque** — contenus audio/vidéo et photos
- **Contact, Don, Boutique, Espace paroissien** — services complémentaires

Le contenu (coordonnées de la paroisse, horaires de messes, actualités) est centralisé dans `src/data/content.ts`, ce qui permet de le modifier facilement sans toucher aux composants.

## Prérequis

- [Node.js](https://nodejs.org/) 22 (voir `.mise.toml`)
- npm

## Installation et démarrage

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire la version de production
npm run build

# Prévisualiser la version de production
npm run preview

# Formater le code
npm run format
```

## Alias d'import

Le chemin `@/` pointe vers le dossier `src/` (configuré dans `tsconfig.json` et `vite.config.ts`), par exemple :

```ts
import { PARISH } from "@/data/content";
```
