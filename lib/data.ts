// Content adapted from the current lazarjeux.com site copy.
// Images are real free-license stock photos from lummi.ai, picked per section
// (laser tag arenas, karaoke, arcade/gaming, food, events) — not generic
// placeholders. Swap for real venue photography/video whenever it's ready.

export const lummi = (cid: string, w = 1200, h = 1500) =>
  `https://assets.lummi.ai/assets/${cid}?auto=format&fit=crop&w=${w}&h=${h}`;

export const SAMPLE_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export type Activity = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  cid: string;
  color: string;
};

export const activities: Activity[] = [
  {
    slug: "laser-game",
    name: "Laser Game",
    tagline: "Arène multi-niveaux, plongée dans le noir",
    description:
      "Notre arène immersive à plusieurs niveaux transforme chaque partie en mission commando. Gilets, brume, néons — l'équipe qui communique le mieux gagne.",
    cid: "QmWBT8WwSmagTYUCxTAo5QwqV3BrfgxEffMSjJLt1w9yVJ",
    color: "laser-pink",
  },
  {
    slug: "fléchettes",
    name: "Fléchettes électroniques",
    tagline: "Cibles connectées, scores en temps réel",
    description:
      "Des cibles électroniques qui comptent les points à votre place, pour se concentrer sur la précision et le trash-talk entre amis.",
    cid: "QmUUyk2apdmcjeFcRwpBR9u7yaL18XLn1LVG5o8nDXsjz5",
    color: "laser-cyan",
  },
  {
    slug: "karaoke",
    name: "Karaoké privé",
    tagline: "Votre salon, votre playlist, votre soirée",
    description:
      "Une cabine privée insonorisée, un catalogue multilingue et un système son taillé pour les refrains qu'on assume.",
    cid: "QmTJ1Js9S3od1XXu7716iaR16zTXipXZPubvBQ6YcHDPPa",
    color: "laser-violet",
  },
  {
    slug: "ps4-ps5",
    name: "PlayStation 4 / 5",
    tagline: "Dernières manettes, derniers titres",
    description:
      "Des postes PS4 et PS5 pensés pour le multijoueur : sport, course, combat — de quoi occuper une bande d'amis un après-midi entier.",
    cid: "QmdmfziseKLVZFRw52La9vu8Agvx7SxR4887eg6dDX2Wk3",
    color: "laser-lime",
  },
  {
    slug: "jeux-de-societe",
    name: "Jeux de société",
    tagline: "Une bibliothèque de classiques et de découvertes",
    description:
      "De quoi ralentir le rythme entre deux parties de laser game : stratégie, ambiance, coopératif — pour tous les âges.",
    cid: "QmXNo8rDKq6wPdDrK98xjSDZj4K11riVpMnNkPGdiuKhjM",
    color: "laser-orange",
  },
  {
    slug: "air-hockey",
    name: "Air Hockey",
    tagline: "Réflexes, palets et petit talk-trash",
    description:
      "Deux tables prêtes pour les duels rapides. Simple à comprendre, difficile à dominer.",
    cid: "Qmb9mDfEeE8EuV7EhKf8oQjMrBC7ESBGtjhADqkDbNE5oq",
    color: "laser-cyan",
  },
  {
    slug: "photobooth",
    name: "Photobooth 360°",
    tagline: "Le souvenir qu'on partage direct en story",
    description:
      "Une plateforme rotative et une caméra qui capture chaque angle en ralenti — le clou de tous nos évènements.",
    cid: "QmQodKvx9sDozw5myVHkv7vbrYX6fyCURaytjLhWb3ubRm",
    color: "laser-pink",
  },
  {
    slug: "evenements",
    name: "Évènements sur mesure",
    tagline: "Anniversaires, sorties scolaires, team building",
    description:
      "Des formules jusqu'à 200 personnes, activités combinées et espace bistro dédié — on s'occupe du reste.",
    cid: "Qme7T8A6CCP1b9hT646MK9MzR9NKCC85axqYZ8HYUuh925",
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

export const galleryImages = [
  // Homepage teaser shows the first four.
  { cid: "QmS964ZoPXDy2EeDcX8K5a2EH2SGGzXk2j4aGnp2JguKx8", caption: "La salle, en néon" },
  { cid: "QmQx6ZR5yq1SwcokPMNsbphG2br6kWDB5zsowMijSLfXn3", caption: "Photobooth 360°" },
  { cid: "Qmf5QMmtsA9Q4eTr5tXggPzP2mNTtZux4PA2wf6UXtf5Br", caption: "Les soirées" },
  { cid: "QmR2ntWuUZy9qBSxGhJTpp9nt2Vm7JnEjQnWJ76pdGVf5z", caption: "Ambiance néon" },
  { cid: "QmWBT8WwSmagTYUCxTAo5QwqV3BrfgxEffMSjJLt1w9yVJ", caption: "Arène laser game" },
  { cid: "QmUUyk2apdmcjeFcRwpBR9u7yaL18XLn1LVG5o8nDXsjz5", caption: "Coin arcade" },
  { cid: "QmTJ1Js9S3od1XXu7716iaR16zTXipXZPubvBQ6YcHDPPa", caption: "Soirée karaoké" },
  { cid: "QmdmfziseKLVZFRw52La9vu8Agvx7SxR4887eg6dDX2Wk3", caption: "PlayStation lounge" },
  { cid: "QmXNo8rDKq6wPdDrK98xjSDZj4K11riVpMnNkPGdiuKhjM", caption: "Jeux de société" },
  { cid: "QmNhbgGVgLQDKUYjL13jcP2LYapshMibKAjcEZ9oskkKSF", caption: "Bistro & burgers" },
  { cid: "Qme7T8A6CCP1b9hT646MK9MzR9NKCC85axqYZ8HYUuh925", caption: "Anniversaires" },
  { cid: "QmaZ3WYY6A5ThDt9fyxpNEQsb14PbpbZxUE5SdJfBFMaWD", caption: "Terrasse front de mer" },
  { cid: "Qma7NAshzbU9CBwmvL9BRnHqxGcWT3rrnRGDzfQUHQjRqF", caption: "Néons de nuit" },
];

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
    cid: "QmRBvEuuSqPSEmzqqdAnRZ3BbD8nyPLNfet4E5Nfjircdj",
    description:
      "Laser game, photobooth, gâteau et espace privatisé — une formule clé en main pensée pour ne rien gérer le jour J.",
  },
  {
    name: "Sorties scolaires",
    audience: "Établissements & centres",
    capacity: "Jusqu'à 200 élèves",
    cid: "Qma4Jwq2iN7YBb8jmE8wEc7yVwpxjX4JezKra3G57uUy5M",
    description:
      "Encadrement dédié, activités rotatives et espace restauration groupe — une journée complète hors les murs.",
  },
  {
    name: "Team building",
    audience: "Entreprises",
    capacity: "Jusqu'à 200 collaborateurs",
    cid: "QmQtafzoSsQNhSXd63hAtAez5ZzmYz6p98p538uqszSRtZ",
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
