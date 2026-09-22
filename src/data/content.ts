// ─── Parish Data ─────────────────────────────────────────────────────────────

export const PARISH = {
  name: "Paroisse Saint Dominique Savio",
  shortName: "Saint Dominique Savio",
  location: "Douala · Cameroun",
  address: "Rue de la Messe Bonadoumbé, Douala",
  phone: "(+237) 655 529 999",
  email: "secretariat@paroissesaintdominiquesavio.com",
  hours: "Lun–Ven : 8h–13h & 15h30–18h30",
  founded: "4 décembre 1961",
  diocese: "Archidiocèse de Douala",
  deanery: "Doyenné Wouri I",
  tagline: "Une communauté de foi, de prière, de fraternité et de service",
  mapsUrl: "https://goo.gl/maps/bPGHqwpVQrioTF7n6",
};

// ─── Mass Schedule ────────────────────────────────────────────────────────────

export const MASS_SCHEDULE = [
  {
    day: "Lundi – Vendredi",
    times: [
      { time: "06h30", type: "Messe quotidienne", note: "Suivie d'adoration jusqu'à 18h30" },
    ],
  },
  {
    day: "Jeudi",
    times: [
      { time: "07h15", type: "Adoration", note: "Jusqu'à 21h" },
      { time: "17h00", type: "Confessions", note: "Jusqu'à 18h15" },
    ],
  },
  {
    day: "Samedi",
    times: [
      { time: "06h30", type: "Messe" },
      { time: "09h00", type: "Baptêmes d'enfants", note: "Dernier samedi du mois & veille des solennités" },
    ],
  },
  {
    day: "Dimanche",
    times: [
      { time: "07h00", type: "Messe" },
      { time: "09h00", type: "Messe" },
      { time: "11h00", type: "Messe principale" },
      { time: "18h30", type: "Messe du soir" },
    ],
  },
  {
    day: "3ᵉ Lundi du mois",
    times: [
      { time: "18h30", type: "Messe des malades", note: "Avec bénédiction sacramentelle" },
    ],
  },
  {
    day: "Nuit d'Adoration",
    times: [
      { time: "Nuit", type: "Adoration nocturne", note: "Chaque lundi & 1er vendredi du mois" },
    ],
  },
];

// ─── News ─────────────────────────────────────────────────────────────────────

export const NEWS = [
  {
    id: 1,
    tag: "Catéchèse",
    tagColor: "#D4AF37",
    date: "12 septembre 2026",
    title: "Inscriptions ouvertes pour la catéchèse 2026–2027",
    excerpt: "Les inscriptions pour la catéchèse des enfants, des jeunes et des adultes sont désormais ouvertes pour l'année 2026–2027. Venez nous rejoindre au secrétariat paroissial pour plus d'informations.",
    img: "https://images.unsplash.com/photo-1774685398923-ba001b371579?w=800&h=450&fit=crop&auto=format",
    content: `La paroisse Saint Dominique Savio est heureuse d'annoncer l'ouverture des inscriptions pour la catéchèse 2026–2027.\n\nNous proposons des programmes adaptés à tous les âges :\n\n• **Catéchèse des enfants** (7–12 ans) : éveil à la foi, préparation aux sacrements\n• **Catéchèse des jeunes** (13–18 ans) : approfondissement de la foi, confirmation\n• **Catéchèse des adultes** : parcours biblique, initiation chrétienne (RICA)\n\nLes inscriptions se font au secrétariat paroissial du lundi au vendredi de 8h à 13h et de 15h30 à 18h30.\n\nDes documents sont requis : acte de baptême, carte d'identité des parents, photo d'identité.`,
  },
  {
    id: 2,
    tag: "Caritas",
    tagColor: "#D4AF37",
    date: "10 septembre 2026",
    title: "Opération rentrée scolaire : ensemble pour nos enfants",
    excerpt: "La Caritas paroissiale lance son opération de rentrée scolaire 2026/2027 en faveur des familles défavorisées de notre communauté.",
    img: "https://images.unsplash.com/photo-1535361251-cbe9d0d2357d?w=800&h=450&fit=crop&auto=format",
    content: `La Caritas de la paroisse Saint Dominique Savio organise son opération de rentrée scolaire 2026/2027.\n\nDans le cadre de sa mission de solidarité, notre Caritas paroissiale se mobilise pour aider les familles défavorisées à scolariser leurs enfants. Des fournitures scolaires, des uniformes et des contributions aux frais de scolarité seront distribués aux familles bénéficiaires.\n\nComment participer ?\n• **Faire un don** en espèces au secrétariat\n• **Offrir des fournitures** scolaires neuves\n• **Se porter volontaire** pour la distribution\n\nLes familles bénéficiaires doivent se présenter au secrétariat avec une pièce d'identité et un justificatif de résidence.`,
  },
  {
    id: 3,
    tag: "Vie paroissiale",
    tagColor: "#0B3D91",
    date: "8 septembre 2026",
    title: "Neuvaine à Marie qui défait les nœuds",
    excerpt: "Clôture du mois du Cœur Immaculé de Marie avec la neuvaine à Notre-Dame qui défait les nœuds. Rejoignez-nous chaque soir à 18h30.",
    img: "https://images.unsplash.com/photo-1573591013318-b942d6ea1092?w=800&h=450&fit=crop&auto=format",
    content: `La paroisse organise la neuvaine à Marie qui défait les nœuds pour clôturer le mois du Cœur Immaculé de Marie.\n\nCette dévotion, popularisée par le Pape François, consiste en neuf jours de prière intensive pour confier à la Vierge Marie les situations difficiles de nos vies.\n\n**Programme de la neuvaine :**\n• Chapelet à 18h00\n• Méditation et prière de la neuvaine à 18h30\n• Bénédiction finale\n\nToute la communauté paroissiale est invitée à participer à ces temps de prière. Venez avec vos intentions particulières.`,
  },
  {
    id: 4,
    tag: "Général",
    tagColor: "#6b7280",
    date: "5 septembre 2026",
    title: "Journée de prière pour la paix dans le monde",
    excerpt: "À l'initiative de l'Archidiocèse de Douala, notre paroisse participe à la journée de prière pour la paix dans le monde.",
    img: "https://images.unsplash.com/photo-1631648859463-a42e6ce6d1e4?w=800&h=450&fit=crop&auto=format",
    content: `Sur invitation de l'Archidiocèse de Douala, la paroisse Saint Dominique Savio s'unit à toute l'Église universelle pour une journée de prière pour la paix dans le monde.\n\nCette journée se déroulera avec un programme spirituel intense :\n\n• 06h30 : Messe d'intention pour la paix\n• 09h00 : Chapelet mondial en communion avec toutes les paroisses\n• 15h00 : Via Crucis pour la paix\n• 18h30 : Vêpres et bénédiction du Saint-Sacrement\n\n« Heureux les artisans de paix, car ils seront appelés fils de Dieu. » (Mt 5,9)`,
  },
  {
    id: 5,
    tag: "Annonces",
    tagColor: "#6b7280",
    date: "24 août 2026",
    title: "Service de nettoyage de l'église : CEV Notre Dame",
    excerpt: "Le service de nettoyage de l'église pour la semaine du 24 au 29 août est assuré par la CEV Notre Dame de l'Immaculée Conception.",
    img: "https://images.unsplash.com/photo-1687459730891-47dfa3217811?w=800&h=450&fit=crop&auto=format",
    content: `Le service hebdomadaire de nettoyage de notre église est assuré en rotation par les différentes Communautés Ecclésiales Vivantes (CEV) de la paroisse.\n\nPour la semaine du 24 au 29 août 2026, c'est la CEV Notre Dame de l'Immaculée Conception qui est chargée du nettoyage.\n\nNous remercions tous les membres qui contribuent généreusement de leur temps pour maintenir notre église propre et accueillante pour tous. C'est un service précieux rendu à toute la communauté.\n\nLe calendrier complet des services est disponible au secrétariat paroissial.`,
  },
  {
    id: 6,
    tag: "Méditation",
    tagColor: "#0B3D91",
    date: "1 septembre 2026",
    title: "Retraite spirituelle pour les jeunes – Octobre 2026",
    excerpt: "Une retraite spirituelle de trois jours est organisée pour les jeunes de la paroisse en octobre 2026. Inscriptions ouvertes.",
    img: "https://images.unsplash.com/photo-1573591012925-76dd1f406bd1?w=800&h=450&fit=crop&auto=format",
    content: `La paroisse Saint Dominique Savio organise une retraite spirituelle pour les jeunes du 10 au 12 octobre 2026.\n\nSous le thème « Enracinés dans le Christ », cette retraite de trois jours proposera :\n\n• Des temps de prière et d'adoration\n• Des conférences animées par le Père curé\n• Des partages en groupes\n• Une veillée de prière\n• La célébration de l'Eucharistie\n\n**Lieu :** Centre spirituel de Bonabéri\n**Coût de participation :** 15 000 FCFA (repas et hébergement inclus)\n\nInscriptions au secrétariat avant le 30 septembre 2026.`,
  },
];

// ─── Agenda Events ────────────────────────────────────────────────────────────

export const EVENTS = [
  { id: 1, date: "2026-09-14", time: "07h00", title: "Messe dominicale", category: "Messe", location: "Église principale" },
  { id: 2, date: "2026-09-14", time: "09h00", title: "Messe dominicale", category: "Messe", location: "Église principale" },
  { id: 3, date: "2026-09-14", time: "11h00", title: "Messe principale", category: "Messe", location: "Église principale" },
  { id: 4, date: "2026-09-14", time: "18h30", title: "Messe du soir", category: "Messe", location: "Église principale" },
  { id: 5, date: "2026-09-15", time: "06h30", title: "Messe quotidienne + Adoration", category: "Messe", location: "Église principale" },
  { id: 6, date: "2026-09-17", time: "07h15", title: "Adoration (journée)", category: "Adoration", location: "Église principale" },
  { id: 7, date: "2026-09-17", time: "17h00", title: "Confessions", category: "Sacrement", location: "Confessionnaux" },
  { id: 8, date: "2026-09-19", time: "18h30", title: "Messe des malades", category: "Messe", location: "Église principale" },
  { id: 9, date: "2026-09-20", time: "15h00", title: "Réunion CEV Saint-Joseph", category: "Communauté", location: "Salle paroissiale" },
  { id: 10, date: "2026-09-21", time: "09h00", title: "Catéchèse des enfants", category: "Catéchèse", location: "Salles de catéchèse" },
  { id: 11, date: "2026-09-26", time: "09h00", title: "Baptêmes d'enfants", category: "Sacrement", location: "Fonts baptismaux" },
  { id: 12, date: "2026-09-28", time: "10h00", title: "Assemblée paroissiale", category: "Communauté", location: "Grande salle" },
  { id: 13, date: "2026-10-10", time: "08h00", title: "Retraite spirituelle des jeunes (Jour 1)", category: "Spiritualité", location: "Centre de Bonabéri" },
  { id: 14, date: "2026-10-11", time: "08h00", title: "Retraite spirituelle des jeunes (Jour 2)", category: "Spiritualité", location: "Centre de Bonabéri" },
  { id: 15, date: "2026-10-12", time: "08h00", title: "Retraite spirituelle des jeunes (Jour 3)", category: "Spiritualité", location: "Centre de Bonabéri" },
];

// ─── Homilies ─────────────────────────────────────────────────────────────────

export const HOMELIES = [
  {
    id: 1,
    title: "Hosanna ! – Dimanche des Rameaux",
    date: "10 septembre 2026",
    priest: "Père Curé",
    readings: "Is 50,4-7 · Ph 2,6-11 · Lc 22,14 – 23,56",
    sunday: "Dimanche des Rameaux",
    duration: "18 min",
    excerpt: "En ce dimanche des Rameaux, nous entrons dans la Semaine Sainte en suivant Jésus dans sa montée vers Jérusalem...",
    img: "https://images.unsplash.com/photo-1573591013318-b942d6ea1092?w=400&h=240&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "La Croix Glorieuse – Source de salut",
    date: "14 septembre 2026",
    priest: "Père Curé",
    readings: "Nb 21,4b-9 · Ph 2,6-11 · Jn 3,13-17",
    sunday: "Fête de la Croix Glorieuse",
    duration: "22 min",
    excerpt: "Aujourd'hui, nous célébrons la fête de la Croix Glorieuse. La croix est le signe par excellence de l'amour de Dieu pour l'humanité...",
    img: "https://images.unsplash.com/photo-1687459730891-47dfa3217811?w=400&h=240&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "Là où est ton trésor – Matthieu 6",
    date: "7 septembre 2026",
    priest: "Père Curé",
    readings: "Am 6,1a.4-7 · 1Tm 6,11-16 · Lc 16,19-31",
    sunday: "26ᵉ dimanche du Temps ordinaire",
    duration: "20 min",
    excerpt: "L'Évangile de ce dimanche nous invite à réfléchir sur nos priorités et sur ce qui compte vraiment dans nos vies...",
    img: "https://images.unsplash.com/photo-1573591012925-76dd1f406bd1?w=400&h=240&fit=crop&auto=format",
  },
  {
    id: 4,
    title: "Perdre sa vie pour la trouver",
    date: "31 août 2026",
    priest: "Père Curé",
    readings: "Jr 20,7-9 · Rm 12,1-2 · Mt 16,21-27",
    sunday: "22ᵉ dimanche du Temps ordinaire",
    duration: "19 min",
    excerpt: "Jésus nous invite aujourd'hui à prendre notre croix et à le suivre. Mais que signifie concrètement ce chemin de renoncement ?",
    img: "https://images.unsplash.com/photo-1515657241610-a6b33f0f6c5a?w=400&h=240&fit=crop&auto=format",
  },
  {
    id: 5,
    title: "Tu es Pierre et sur cette pierre",
    date: "24 août 2026",
    priest: "Père Curé",
    readings: "Is 22,19-23 · Rm 11,33-36 · Mt 16,13-20",
    sunday: "21ᵉ dimanche du Temps ordinaire",
    duration: "17 min",
    excerpt: "La question que Jésus pose à ses disciples est fondamentale : « Et vous, qui dites-vous que je suis ? »",
    img: "https://images.unsplash.com/photo-1631648859463-a42e6ce6d1e4?w=400&h=240&fit=crop&auto=format",
  },
  {
    id: 6,
    title: "Le pain vivant descendu du ciel",
    date: "17 août 2026",
    priest: "Père Curé",
    readings: "Pr 9,1-6 · Ep 5,15-20 · Jn 6,51-58",
    sunday: "20ᵉ dimanche du Temps ordinaire",
    duration: "21 min",
    excerpt: "L'Eucharistie est au cœur de notre foi. Jésus se donne lui-même comme nourriture pour notre vie spirituelle...",
    img: "https://images.unsplash.com/photo-1763517789508-f23012039417?w=400&h=240&fit=crop&auto=format",
  },
];

// ─── Sacraments ───────────────────────────────────────────────────────────────

export const SACREMENTS = [
  {
    id: "bapteme",
    icon: "💧",
    title: "Baptême",
    subtitle: "Naître à la vie en Christ",
    description: "Le Baptême est le premier des sacrements, celui par lequel nous naissons à la vie divine et devenons membres de l'Église.",
    details: [
      "Baptêmes d'enfants : dernier samedi du mois à 9h00",
      "Préparation obligatoire des parents (2 sessions)",
      "Parrain et marraine catholiques pratiquants requis",
      "Contact : secrétariat paroissial",
    ],
    img: "https://images.unsplash.com/photo-1573591013318-b942d6ea1092?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: "mariage",
    icon: "💍",
    title: "Mariage",
    subtitle: "L'amour sanctifié par Dieu",
    description: "Le Mariage est le sacrement par lequel un homme et une femme s'unissent devant Dieu et l'Église pour fonder une famille chrétienne.",
    details: [
      "Publication des bans 3 semaines avant la cérémonie",
      "Préparation au mariage obligatoire (session collective)",
      "Entretien préalable avec le curé",
      "Délai minimum : 6 mois avant la date souhaitée",
    ],
    img: "https://images.unsplash.com/photo-1515657241610-a6b33f0f6c5a?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: "confirmation",
    icon: "🕊️",
    title: "Confirmation",
    subtitle: "L'Esprit Saint au cœur de la foi",
    description: "La Confirmation complète le Baptême et donne les dons de l'Esprit Saint pour témoigner de la foi chrétienne.",
    details: [
      "Préparation de 2 ans minimum",
      "Réservée aux adolescents et adultes baptisés",
      "Parcours de catéchèse approfondie",
      "Parrain ou marraine catholique pratiquant",
    ],
    img: "https://images.unsplash.com/photo-1687459730891-47dfa3217811?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: "eucharistie",
    icon: "✝️",
    title: "Eucharistie",
    subtitle: "Le Corps et le Sang du Christ",
    description: "L'Eucharistie est « la source et le sommet de toute la vie chrétienne ». Première Communion et messes dominicales.",
    details: [
      "Première Communion : après 2 ans de catéchèse",
      "Messes quotidiennes à 06h30",
      "Messes dominicales : 7h, 9h, 11h, 18h30",
      "Communion aux malades sur demande",
    ],
    img: "https://images.unsplash.com/photo-1573591012925-76dd1f406bd1?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: "confession",
    icon: "🙏",
    title: "Confession",
    subtitle: "La réconciliation avec Dieu",
    description: "Le sacrement de Réconciliation nous offre le pardon de Dieu et la paix intérieure après le péché.",
    details: [
      "Confessions chaque jeudi de 17h00 à 18h15",
      "Confessions avant chaque messe sur demande",
      "Préparation à la première confession incluse dans la catéchèse",
    ],
    img: "https://images.unsplash.com/photo-1631648859463-a42e6ce6d1e4?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: "onction",
    icon: "🕯️",
    title: "Onction des malades",
    subtitle: "La grâce dans l'épreuve",
    description: "L'Onction des malades apporte la grâce divine aux personnes gravement malades ou âgées, en union avec la souffrance du Christ.",
    details: [
      "Messe des malades : 3ᵉ lundi du mois à 18h30",
      "Visite aux malades sur demande au secrétariat",
      "Onction possible à domicile ou à l'hôpital",
      "Contact d'urgence : (+ 237) 655 529 999",
    ],
    img: "https://images.unsplash.com/photo-1763517789508-f23012039417?w=600&h=400&fit=crop&auto=format",
  },
];

// ─── Movements ────────────────────────────────────────────────────────────────

export const MOUVEMENTS = [
  { icon: "👦", name: "Mouvements de jeunesse", desc: "Scouts, JEC, MJC – groupes pour les jeunes de la paroisse", color: "#D4AF37" },
  { icon: "🎵", name: "Chorale paroissiale", desc: "Animer la liturgie par le chant et la musique sacrée", color: "#0B3D91" },
  { icon: "👨‍👩‍👧", name: "Équipes Notre-Dame", desc: "Groupes de couples mariés pour approfondir la vie conjugale", color: "#D4AF37" },
  { icon: "❤️", name: "Caritas paroissiale", desc: "Service de solidarité et d'entraide pour les plus démunis", color: "#e74c3c" },
  { icon: "📿", name: "Légion de Marie", desc: "Apostolat marial et service pastoral", color: "#0B3D91" },
  { icon: "🌿", name: "CEV (Communautés Ecclésiales Vivantes)", desc: "Petites communautés de quartier pour vivre la foi ensemble", color: "#27ae60" },
  { icon: "🎓", name: "Mouvement Eucharistique des Jeunes", desc: "Formation spirituelle et apostolat des jeunes par l'Eucharistie", color: "#D4AF37" },
  { icon: "🕊️", name: "Renouveau Charismatique", desc: "Prière en communauté, louange et guérison", color: "#9b59b6" },
];

// ─── Team / Priests ───────────────────────────────────────────────────────────

export const TEAM = [
  {
    id: "mbanda",
    name: "Abbé Philippe Pacôme MBANDA MANDENGUE",
    role: "Curé, President catéchèse",
    photo: "https://backoffice.paroissesaintdominiquesavio.com/assets/1d560b70-b07d-4f42-bde1-aaf5b36318a7",
    motto: "Par Lui, avec Lui et en Lui",
    born: "9 mai 1978 à Souza",
    ordained: "8 décembre 2010",
    ordainedBy: "Mgr Samuel Kleda",
    bio: "Bac D, puis Grand Séminaire Mbanga (2000), Philosophat Bafoussam (2001-2004), Université Catholique de Yaoundé (2004-2006), Théologat Douala (2006-2010). Ordonné le 8 décembre 2010 par Mgr Samuel Kleda.",
    ministries: [
      "Vicaire Saint Sacrement de Ndogbong (2010-2013)",
      "Vicaire Cathédrale Saint Pierre et Paul (2013-2016)",
      "Vicaire Jésus le Bon Pasteur de Boko (2016-2018)",
      "Formateur Grand Séminaire Bafoussam (2018-2019)",
      "Curé Saint André de Manoka (2019-2020)",
      "Curé Saint Dominique Savio (2020-présent)",
    ],
  },
  {
    id: "nwind",
    name: "Abbé Jean Bernard Emmanuel NWIND",
    role: "Vicaire, Aumônier Commission Vocations",
    photo: "https://backoffice.paroissesaintdominiquesavio.com/assets/d337dcaa-3da9-4047-b647-01541e822385",
    motto: "",
    born: "",
    ordained: "6 décembre 2014",
    ordainedBy: "Mgr Samuel Kleda",
    bio: "Directeur adjoint Radio Veritas, Aumônier Collège Maria-Goretti de New-Bell, étudiant en communication à l'Université de Douala.",
    ministries: [
      "Vicaire Jésus le Bon Pasteur de Mboko",
      "Vicaire Notre Dame de l'Amour de Ngwelè",
      "Vicaire Saint Augustin de Nyanka",
      "Vicaire Saint Luc de New-Bell",
      "Vicaire Saint Dominique Savio (2019-présent)",
    ],
  },
  {
    id: "saïdou",
    name: "Abbé Jean-Claude SAÏDOU",
    role: "Vicaire, Aumônier Commission Liturgie",
    photo: "https://backoffice.paroissesaintdominiquesavio.com/assets/522ec247-9b25-423b-8c95-adb9b0d1c5e1",
    motto: "",
    born: "1 janvier 1966 à Pitoa (Nord-Cameroun)",
    ordained: "1 avril 1995",
    ordainedBy: "",
    bio: "Vicaire Saint Joseph de Touboro, DUT UCAC Yaoundé, Économe Grand Séminaire Saint Augustin de Maroua (2000-2005), Chef département Administratif & Financier CENC Yaoundé (2006-2011). Soins médicaux Milan (2019-2020).",
    ministries: [
      "Vicaire Saint Joseph de Touboro",
      "Économe Grand Séminaire Saint Augustin de Maroua (2000-2005)",
      "Recteur Cathédrale Notre Dame des Apôtres de Ngaoundéré",
      "Chef département Administratif & Financier CENC Yaoundé (2006-2011)",
      "Curé Saint Kisito de Gasuriga (2012-2019)",
      "Vicaire Saint Dominique Savio (2020-présent)",
    ],
  },
  {
    id: "mohomye",
    name: "Abbé Gustave MOHOMYE",
    role: "Vicaire",
    photo: "https://backoffice.paroissesaintdominiquesavio.com/assets/cfa580ad-0b7d-49b2-ad90-ade1459fa5bf",
    motto: "Je suis venu pour qu'ils aient la vie (Jean 10:10)",
    born: "",
    ordained: "2005",
    ordainedBy: "",
    bio: "Prêtre du Diocèse de Douala. Professeur à l'Institut Universitaire Catholique Saint Jérôme de Douala depuis 8 ans.",
    ministries: [
      "Professeur Institut Universitaire Catholique Saint Jérôme de Douala (8 ans)",
      "Vicaire Saint Dominique Savio",
    ],
  },
];

// ─── Journal paroissial ───────────────────────────────────────────────────────

export const JOURNAL_TARIFS = [
  { label: "Mensuel", price: "500 FCFA", issues: 4, period: "1 mois" },
  { label: "Trimestriel", price: "1 500 FCFA", issues: 12, period: "3 mois" },
  { label: "Semestriel", price: "3 000 FCFA", issues: 24, period: "6 mois" },
  { label: "Annuel", price: "6 000 FCFA", issues: 52, period: "1 an" },
];

// ─── Boutique ─────────────────────────────────────────────────────────────────

export const BOUTIQUE_PRODUCTS = [
  { id: 1, nom: "La prière - Un guide complet", prix: 7000, category: "Livres", img: "https://images.unsplash.com/photo-1573591013318-b942d6ea1092?w=300&h=300&fit=crop", desc: "Un guide complet sur la vie de prière chrétienne." },
  { id: 2, nom: "Un temps pour changer", prix: 7000, category: "Livres", img: "https://images.unsplash.com/photo-1573591013318-b942d6ea1092?w=300&h=300&fit=crop", desc: "Ouvrage de conversion et de renouveau spirituel." },
  { id: 3, nom: "Le COVID est notre moment de Noé", prix: 3000, category: "Livres", img: "https://images.unsplash.com/photo-1573591013318-b942d6ea1092?w=300&h=300&fit=crop", desc: "Réflexion spirituelle sur la pandémie et la foi." },
  { id: 4, nom: "Vices et vertus", prix: 4000, category: "Livres", img: "https://images.unsplash.com/photo-1573591013318-b942d6ea1092?w=300&h=300&fit=crop", desc: "Enseignement moral chrétien sur les vertus et les vices." },
  { id: 5, nom: "Les fondamentaux de la foi chrétienne", prix: 4500, prixBarre: 5000, category: "Livres", img: "https://images.unsplash.com/photo-1573591013318-b942d6ea1092?w=300&h=300&fit=crop", desc: "Introduction complète aux fondements de la foi catholique." },
  { id: 6, nom: "La Bonne Nouvelle de l'Église sur le mariage", prix: 2000, category: "Livres", img: "https://images.unsplash.com/photo-1573591013318-b942d6ea1092?w=300&h=300&fit=crop", desc: "L'enseignement de l'Église catholique sur le sacrement du mariage." },
  { id: 7, nom: "Chapelet", prix: 500, category: "Accessoires", img: "https://images.unsplash.com/photo-1631648859463-a42e6ce6d1e4?w=300&h=300&fit=crop", desc: "Chapelet classique pour la prière mariale." },
  { id: 8, nom: "Collier", prix: 1000, category: "Accessoires", img: "https://images.unsplash.com/photo-1631648859463-a42e6ce6d1e4?w=300&h=300&fit=crop", desc: "Collier religieux béni." },
  { id: 9, nom: "Chaîne blanche", prix: 1500, category: "Accessoires", img: "https://images.unsplash.com/photo-1631648859463-a42e6ce6d1e4?w=300&h=300&fit=crop", desc: "Chaîne blanche pour la foi." },
];
