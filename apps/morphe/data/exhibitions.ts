export type ExhibitionStatus = "current" | "upcoming" | "past";

export type Artwork = {
  src: string;
  alt: string;
  caption: string;
  year: string;
};

export type Exhibition = {
  number: string;
  slug: string;
  title: string;
  titleLines: string[];
  artist: string;
  dates: string;
  discipline: string;
  categories: string[];
  status: ExhibitionStatus;
  summary: string;
  statement: string[];
  artistStatement: {
    quote: string;
    note: string;
  };
  gallery: string;
  hero: Artwork;
  works: Artwork[];
};

const artImages = {
  absence:
    "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1800&q=88",
  dream:
    "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1800&q=88",
  image:
    "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1800&q=88",
  detailA:
    "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1400&q=88",
  detailB:
    "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1400&q=88",
  detailC:
    "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1400&q=88",
};

export const exhibitions: Exhibition[] = [
  {
    number: "01",
    slug: "the-shape-of-absence",
    title: "The Shape of Absence",
    titleLines: ["The Shape", "of Absence"],
    artist: "Amara K. Mensah",
    dates: "18.09 — 14.12.26",
    discipline: "Sculpture / Installation / Digital",
    categories: ["Sculpture", "Installation", "Digital"],
    status: "current",
    summary: "What remains when a presence leaves the room?",
    statement: [
      "Absence is not an empty space. It is a pressure, a contour, a thing with edges. In her first institutional exhibition, Amara K. Mensah asks us to look at what cannot be held and to notice the forms it leaves behind.",
      "Across suspended forms, responsive light and hand-worked surfaces, the gallery becomes a place of careful listening. Each work is a record of relation: between body and architecture, memory and material, the visible and the almost-seen.",
    ],
    artistStatement: {
      quote: "I make a place for what cannot stay, and ask what its outline might teach us.",
      note: "Amara K. Mensah works across sculpture, installation and responsive light. Her practice attends to the quiet architecture of memory: how a room changes when someone leaves it, and how materials can hold the trace of that change.",
    },
    gallery: "Gallery 02 · Upper Room",
    hero: {
      src: artImages.absence,
      alt: "Vibrant abstract painting with fields of yellow, orange and teal",
      caption: "A room held open, 2026",
      year: "2026",
    },
    works: [
      {
        src: artImages.detailA,
        alt: "Vibrant abstract painting with fields of yellow, orange and teal",
        caption: "A room held open",
        year: "2026",
      },
      {
        src: artImages.detailB,
        alt: "Fluid abstract artwork in violet, magenta and electric blue",
        caption: "The distance between us",
        year: "2025",
      },
      {
        src: artImages.detailC,
        alt: "Close-up portrait painting with expressive marks and warm colors",
        caption: "Inventory of a quiet room",
        year: "2026",
      },
    ],
  },
  {
    number: "02",
    slug: "machines-that-dream",
    title: "Machines That Dream",
    titleLines: ["Machines That", "Dream"],
    artist: "Niko Sato & Leila Okafor",
    dates: "16.01 — 29.03.27",
    discipline: "Moving image / Sound",
    categories: ["Moving image", "Sound", "Research"],
    status: "upcoming",
    summary: "On the images machines make when no one is watching.",
    statement: [
      "Machines That Dream gathers moving-image and sound works made in the unstable space between instruction and intuition. The artists build systems that misremember, improvise and return to the same image changed.",
      "Rather than asking whether a machine can imagine, the exhibition asks what imagination becomes when it is shared with something nonhuman. The answer is not a future forecast, but a set of vivid, unfinished encounters.",
    ],
    artistStatement: {
      quote: "A machine's mistake can be the beginning of a new image.",
      note: "Niko Sato and Leila Okafor make moving-image and sound works with systems that remember imperfectly. Their collaborative practice treats technology not as a neutral tool, but as a material with its own habits and blind spots.",
    },
    gallery: "Gallery 01 · The Light Room",
    hero: {
      src: artImages.dream,
      alt: "Fluid abstract artwork in violet, magenta and electric blue",
      caption: "A rehearsal for elsewhere, 2026",
      year: "2026",
    },
    works: [
      {
        src: artImages.dream,
        alt: "Fluid abstract artwork in violet, magenta and electric blue",
        caption: "A rehearsal for elsewhere",
        year: "2026",
      },
      {
        src: artImages.detailB,
        alt: "Vibrant abstract painting with fields of yellow, orange and teal",
        caption: "Latency study no. 4",
        year: "2026",
      },
      {
        src: artImages.detailC,
        alt: "Close-up portrait painting with expressive marks and warm colors",
        caption: "Soft error, hard light",
        year: "2025",
      },
    ],
  },
  {
    number: "03",
    slug: "after-the-image",
    title: "After the Image",
    titleLines: ["After the", "Image"],
    artist: "Aïcha Diallo",
    dates: "04.04 — 21.06.27",
    discipline: "Photography / Sculpture",
    categories: ["Photography", "Sculpture"],
    status: "upcoming",
    summary: "A study of looking, copying and looking again.",
    statement: [
      "Images arrive before we do. Aïcha Diallo follows their afterlife through photographs, casts and assembled surfaces that hold the marks of repeated looking.",
      "These works do not ask us to choose between the original and the copy. They make space for the small distortions that gather in between: a hand’s pressure, a screen’s glare, the private weather of attention.",
    ],
    artistStatement: {
      quote: "Looking is never passive; every image comes back changed by the person who sees it.",
      note: "Aïcha Diallo moves between photography and sculpture, tracing the distance between an image and its many afterlives. Her works hold on to the soft evidence of touch, reflection and repetition.",
    },
    gallery: "Gallery 03 · South Gallery",
    hero: {
      src: artImages.image,
      alt: "Close-up portrait painting with expressive marks and warm colors",
      caption: "The second look, 2026",
      year: "2026",
    },
    works: [
      {
        src: artImages.image,
        alt: "Close-up portrait painting with expressive marks and warm colors",
        caption: "The second look",
        year: "2026",
      },
      {
        src: artImages.detailA,
        alt: "Vibrant abstract painting with fields of yellow, orange and teal",
        caption: "Image with a thumbprint",
        year: "2025",
      },
      {
        src: artImages.detailB,
        alt: "Fluid abstract artwork in violet, magenta and electric blue",
        caption: "A surface remembers",
        year: "2026",
      },
    ],
  },
  {
    number: "04",
    slug: "soft-architecture",
    title: "Soft Architecture",
    titleLines: ["Soft Architecture"],
    artist: "Mara Venn",
    dates: "12.06 — 30.08.26",
    discipline: "Textile / Spatial practice",
    categories: ["Textile", "Spatial practice"],
    status: "past",
    summary: "Rooms for bodies that refuse to stay still.",
    statement: [
      "Soft Architecture considered the room as a living collaborator: made and remade by bodies, fabric, air and time. Mara Venn’s large-scale textile forms shifted gently with the movement of visitors.",
      "The exhibition left no fixed route. Instead, it offered a sequence of temporary shelters in which the ordinary act of passing through became a way of paying attention.",
    ],
    artistStatement: {
      quote: "A room is not finished until somebody moves through it.",
      note: "Mara Venn's textile and spatial practice makes temporary structures for bodies in motion. Her work considers softness as a form of resistance to fixed boundaries and prescribed routes.",
    },
    gallery: "Gallery 02 · Upper Room",
    hero: {
      src: artImages.detailB,
      alt: "Fluid abstract artwork in violet, magenta and electric blue",
      caption: "An interior for passing through, 2026",
      year: "2026",
    },
    works: [
      {
        src: artImages.detailB,
        alt: "Fluid abstract artwork in violet, magenta and electric blue",
        caption: "An interior for passing through",
        year: "2026",
      },
      {
        src: artImages.detailC,
        alt: "Close-up portrait painting with expressive marks and warm colors",
        caption: "Fabric for a moving room",
        year: "2026",
      },
      {
        src: artImages.detailA,
        alt: "Vibrant abstract painting with fields of yellow, orange and teal",
        caption: "The room changes shape",
        year: "2026",
      },
    ],
  },
  {
    number: "05",
    slug: "a-field-between-us",
    title: "A Field Between Us",
    titleLines: ["A Field", "Between Us"],
    artist: "Talia Nwosu",
    dates: "07.02 — 26.04.26",
    discipline: "Painting / Moving image",
    categories: ["Painting", "Moving image"],
    status: "past",
    summary: "Images of distance, and the gestures that cross it.",
    statement: [
      "A Field Between Us brought together paintings and short moving-image works made across two cities. Talia Nwosu follows the small exchanges that survive distance: a color remembered, a message held, a familiar shape found somewhere new.",
      "The works were arranged as a sequence of encounters rather than a single view. Each image offered a pause in which attention could travel between people, places and time zones.",
    ],
    artistStatement: {
      quote: "Distance is not the opposite of closeness; it is one of the ways we learn to notice it.",
      note: "Talia Nwosu works across painting and moving image. Her practice gathers fragments of everyday communication into vivid studies of connection, translation and belonging.",
    },
    gallery: "Gallery 01 · North Room",
    hero: {
      src: artImages.detailC,
      alt: "Close-up portrait painting with expressive marks and warm colors",
      caption: "A place held in common, 2026",
      year: "2026",
    },
    works: [
      {
        src: artImages.detailC,
        alt: "Close-up portrait painting with expressive marks and warm colors",
        caption: "A place held in common",
        year: "2026",
      },
      {
        src: artImages.detailA,
        alt: "Vibrant abstract painting with fields of yellow, orange and teal",
        caption: "The color of your voice",
        year: "2025",
      },
      {
        src: artImages.detailB,
        alt: "Fluid abstract artwork in violet, magenta and electric blue",
        caption: "Across the hour between us",
        year: "2026",
      },
    ],
  },
];

export const homeExhibitions = exhibitions.slice(0, 3);

export function getExhibitionBySlug(slug: string) {
  return exhibitions.find((exhibition) => exhibition.slug === slug);
}

export function getRelatedExhibitions(slug: string) {
  const nextSlugs: Record<string, string> = {
    "the-shape-of-absence": "machines-that-dream",
    "machines-that-dream": "after-the-image",
    "after-the-image": "the-shape-of-absence",
    "soft-architecture": "the-shape-of-absence",
    "a-field-between-us": "soft-architecture",
  };
  const next = exhibitions.find((exhibition) => exhibition.slug === nextSlugs[slug]);
  return next ? [next] : [];
}
