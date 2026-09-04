// Content adapted from the current lazarjeux.com site copy.
// Images are seeded picsum.photos placeholders — swap for real venue photography/video.

export const img = (seed: string, w = 1200, h = 1500) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const SAMPLE_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export type Activity = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  seed: string;
  color: string;
};

export const activities: Activity[] = [
  {
    slug: "laser-game",
    name: "Laser Game",
    tagline: "Arène multi-niveaux, plongée dans le noir",
    description:
      "Notre arène immersive à plusieurs niveaux transforme chaque partie en mission commando. Gilets, brume, néons — l'équipe qui communique le mieux gagne.",
    seed: "lazar-laser",
    color: "laser-pink",
  },
  {
    slug: "fléchettes",
    name: "Fléchettes électroniques",
    tagline: "Cibles connectées, scores en temps réel",
    description:
      "Des cibles électroniques qui comptent les points à votre place, pour se concentrer sur la précision et le trash-talk entre amis.",
    seed: "lazar-darts",
    color: "laser-cyan",
  },
  {
    slug: "karaoke",
    name: "Karaoké privé",
    tagline: "Votre salon, votre playlist, votre soirée",
    description:
      "Une cabine privée insonorisée, un catalogue multilingue et un système son taillé pour les refrains qu'on assume.",
    seed: "lazar-karaoke",
    color: "laser-violet",
  },
  {
    slug: "ps4-ps5",
    name: "PlayStation 4 / 5",
    tagline: "Dernières manettes, derniers titres",
    description:
      "Des postes PS4 et PS5 pensés pour le multijoueur : sport, course, combat — de quoi occuper une bande d'amis un après-midi entier.",
    seed: "lazar-ps5",
    color: "laser-lime",
  },
  {
    slug: "jeux-de-societe",
    name: "Jeux de société",
    tagline: "Une bibliothèque de classiques et de découvertes",
    description:
      "De quoi ralentir le rythme entre deux parties de laser game : stratégie, ambiance, coopératif — pour tous les âges.",
    seed: "lazar-board",
    color: "laser-orange",
  },
  {
    slug: "air-hockey",
    name: "Air Hockey",
    tagline: "Réflexes, palets et petit talk-trash",
    description:
      "Deux tables prêtes pour les duels rapides. Simple à comprendre, difficile à dominer.",
    seed: "lazar-hockey",
    color: "laser-cyan",
  },
  {
    slug: "photobooth",
    name: "Photobooth 360°",
    tagline: "Le souvenir qu'on partage direct en story",
    description:
      "Une plateforme rotative et une caméra qui capture chaque angle en ralenti — le clou de tous nos évènements.",
    seed: "lazar-360",
    color: "laser-pink",
  },
  {
    slug: "evenements",
    name: "Évènements sur mesure",
    tagline: "Anniversaires, sorties scolaires, team building",
    description:
      "Des formules jusqu'à 200 personnes, activités combinées et espace bistro dédié — on s'occupe du reste.",
    seed: "lazar-events",
    color: "laser-violet",
  },
];

export const stats = [
  { value: "8", label: "Expériences sous un même toit" },
  { value: "4.5/5", label: "Note moyenne, 600+ avis" },
  { value: "200", label: "Invités par évènement, formule max" },
  { value: "6", label: "Pays équipés par notre pôle arène (Ultratag)" },
];

export const menuCategories = [
  {
    name: "Signatures",
    items: [
      { name: "Brioche perdue pistache & kunafa", price: "75 DH" },
      { name: "Pain perdu banane & Lotus", price: "65 DH" },
      { name: "Bowl açaï maison", price: "55 DH" },
    ],
  },
  {
    name: "Salé",
    items: [
      { name: "Pizza margherita revisitée", price: "70 DH" },
      { name: "Tacos poulet grillé", price: "60 DH" },
      { name: "Bowl poke saumon", price: "80 DH" },
    ],
  },
  {
    name: "Sucré",
    items: [
      { name: "Crêpe Nutella & fruits", price: "45 DH" },
      { name: "Churros maison, chocolat chaud", price: "40 DH" },
      { name: "Glace artisanale, 2 boules", price: "35 DH" },
    ],
  },
];

export const faqs = [
  {
    q: "Quels sont vos horaires ?",
    a: "Mardi–Vendredi : 14h–22h. Samedi–Dimanche : 12h–23h. Fermé le lundi.",
  },
  {
    q: "Faut-il réserver à l'avance ?",
    a: "Fortement recommandé, surtout le weekend et pour les groupes de plus de 6 personnes. Réservation directe par WhatsApp.",
  },
  {
    q: "À partir de quel âge peut-on jouer au laser game ?",
    a: "Dès 7 ans, accompagné d'un adulte pour les moins de 12 ans. Aucune limite d'âge maximum.",
  },
  {
    q: "Proposez-vous des formules anniversaire ?",
    a: "Oui — formules enfants, ados et adultes jusqu'à 200 invités, combinant plusieurs activités et un espace privatisé.",
  },
  {
    q: "Où êtes-vous situés ?",
    a: "Sur le front de mer de Harhoura, Témara — à quelques minutes de Rabat.",
  },
  {
    q: "Peut-on manger sur place ?",
    a: "Oui, notre bistro sert une carte complète préparée à la commande, du petit-déjeuner tardif au dîner.",
  },
];

export const galleryImages = Array.from({ length: 13 }).map((_, i) => ({
  seed: `lazar-gallery-${i + 1}`,
  caption:
    [
      "Arène laser game",
      "Terrasse front de mer",
      "Soirée karaoké",
      "Anniversaire enfants",
      "Sortie scolaire",
      "Team building entreprise",
      "Bistro & brunch",
      "Photobooth 360°",
      "Air hockey",
      "Fléchettes électroniques",
      "PlayStation lounge",
      "Coucher de soleil sur Harhoura",
      "Jeux de société en terrasse",
    ][i] ?? "Lazar Jeux Club",
}));

export const contact = {
  phone1: "+212 537 626 651",
  phone2: "+212 676 877 771",
  email: "lazarjeux@gmail.com",
  whatsapp: "https://wa.me/212676877771",
  address: "Front de mer, Harhoura, Témara — Rabat, Maroc",
  instagram: "https://instagram.com/lazarjeux",
  tiktok: "https://tiktok.com/@lazarjeux",
  hours: [
    { days: "Mardi – Vendredi", time: "14h00 – 22h00" },
    { days: "Samedi – Dimanche", time: "12h00 – 23h00" },
    { days: "Lundi", time: "Fermé" },
  ],
};

export const eventPackages = [
  {
    name: "Anniversaires",
    audience: "Enfants & ados",
    capacity: "Jusqu'à 200 invités",
    seed: "lazar-bday",
    description:
      "Laser game, photobooth, gâteau et espace privatisé — une formule clé en main pensée pour ne rien gérer le jour J.",
  },
  {
    name: "Sorties scolaires",
    audience: "Établissements & centres",
    capacity: "Jusqu'à 200 élèves",
    seed: "lazar-school",
    description:
      "Encadrement dédié, activités rotatives et espace restauration groupe — une journée complète hors les murs.",
  },
  {
    name: "Team building",
    audience: "Entreprises",
    capacity: "Jusqu'à 200 collaborateurs",
    seed: "lazar-corp",
    description:
      "Challenges laser game par équipes, débrief autour d'un buffet — pour souder une équipe autrement qu'en salle de réunion.",
  },
];

export const ultratag = {
  intro:
    "Notre pôle international conçoit, construit et installe des arènes laser game clé en main pour des opérateurs à travers le monde.",
  countries: ["Pays-Bas", "France", "Suède", "Allemagne", "Italie", "Afrique du Nord"],
  services: [
    {
      title: "Conception d'arène",
      description: "Plans sur-mesure adaptés à votre surface, votre thème et votre flux visiteurs.",
    },
    {
      title: "Construction",
      description: "Structures multi-niveaux, effets lumineux, brume et sonorisation intégrés.",
    },
    {
      title: "Installation & formation",
      description: "Montage sur site et formation de vos équipes à l'exploitation quotidienne.",
    },
  ],
};
