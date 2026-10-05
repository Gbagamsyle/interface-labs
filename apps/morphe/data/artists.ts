export type Artist = {
  name: string;
  slug: string;
  discipline: string;
  location: string;
  image: string;
  alt: string;
  bio?: string;
  exhibitionSlug?: string;
};

const abstractImage = "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=900&q=84";
const fluidImage = "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=900&q=84";
const portraitImage = "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=900&q=84";

export const artists: Artist[] = [
  { name: "Aïcha Diallo", slug: "aicha-diallo", discipline: "Photography / Sculpture", location: "Dakar / London", image: portraitImage, alt: "Close-up painted portrait with expressive marks and warm colors" },
  {
    name: "Amara K. Mensah",
    slug: "amara-k-mensah",
    discipline: "Sculpture / Installation / Digital",
    location: "Accra / London",
    image: abstractImage,
    alt: "Vibrant abstract painting with fields of yellow, orange and teal",
    bio: "Amara K. Mensah works with sculpture, responsive light and the architecture of memory. Her installations give form to the traces people leave in a room, asking how absence can be felt as a material presence.",
    exhibitionSlug: "the-shape-of-absence",
  },
  { name: "Cleo Varga", slug: "cleo-varga", discipline: "Painting / Text", location: "Budapest / Berlin", image: fluidImage, alt: "Fluid abstract artwork in violet, magenta and electric blue" },
  { name: "Dae Park", slug: "dae-park", discipline: "Moving image", location: "Seoul", image: fluidImage, alt: "Fluid abstract artwork in violet, magenta and electric blue" },
  { name: "Elias Noor", slug: "elias-noor", discipline: "Sound / Sculpture", location: "Amman / London", image: abstractImage, alt: "Vibrant abstract painting with fields of yellow, orange and teal" },
  { name: "Farah El-Sayed", slug: "farah-el-sayed", discipline: "Photography", location: "Cairo / Paris", image: portraitImage, alt: "Close-up painted portrait with expressive marks and warm colors" },
  { name: "Gideon Bell", slug: "gideon-bell", discipline: "Digital / Sound", location: "London", image: fluidImage, alt: "Fluid abstract artwork in violet, magenta and electric blue" },
  { name: "Hanae Mori", slug: "hanae-mori", discipline: "Textile / Installation", location: "Kyoto / Rotterdam", image: abstractImage, alt: "Vibrant abstract painting with fields of yellow, orange and teal" },
  { name: "Ivo Mensink", slug: "ivo-mensink", discipline: "Painting", location: "Amsterdam", image: abstractImage, alt: "Vibrant abstract painting with fields of yellow, orange and teal" },
  { name: "Jules Okoro", slug: "jules-okoro", discipline: "Sculpture", location: "Lagos / London", image: fluidImage, alt: "Fluid abstract artwork in violet, magenta and electric blue" },
  { name: "Kaito Sato", slug: "kaito-sato", discipline: "Moving image / Research", location: "Tokyo", image: abstractImage, alt: "Vibrant abstract painting with fields of yellow, orange and teal" },
  { name: "Leila Okafor", slug: "leila-okafor", discipline: "Sound / Moving image", location: "Lagos / London", image: portraitImage, alt: "Close-up painted portrait with expressive marks and warm colors" },
  { name: "Mara Venn", slug: "mara-venn", discipline: "Textile / Spatial practice", location: "Copenhagen", image: fluidImage, alt: "Fluid abstract artwork in violet, magenta and electric blue" },
  { name: "Niko Sato", slug: "niko-sato", discipline: "Moving image / Sound", location: "Tokyo / London", image: abstractImage, alt: "Vibrant abstract painting with fields of yellow, orange and teal" },
  { name: "Oona Fraser", slug: "oona-fraser", discipline: "Photography / Text", location: "Glasgow", image: portraitImage, alt: "Close-up painted portrait with expressive marks and warm colors" },
  { name: "Pavel Ríos", slug: "pavel-rios", discipline: "Painting / Installation", location: "Mexico City / Madrid", image: fluidImage, alt: "Fluid abstract artwork in violet, magenta and electric blue" },
  { name: "Quinn Adebayo", slug: "quinn-adebayo", discipline: "Digital / Sculpture", location: "London", image: abstractImage, alt: "Vibrant abstract painting with fields of yellow, orange and teal" },
  { name: "Rafiq Hossain", slug: "rafiq-hossain", discipline: "Sound / Photography", location: "Dhaka / London", image: fluidImage, alt: "Fluid abstract artwork in violet, magenta and electric blue" },
  { name: "Sora Tanaka", slug: "sora-tanaka", discipline: "Installation", location: "Osaka / Berlin", image: portraitImage, alt: "Close-up painted portrait with expressive marks and warm colors" },
  { name: "Talia Nwosu", slug: "talia-nwosu", discipline: "Painting / Moving image", location: "Lagos / London", image: portraitImage, alt: "Close-up painted portrait with expressive marks and warm colors" },
];

export const artistRanges = [
  { label: "A — F", artists: artists.filter((artist) => /^[A-F]/i.test(artist.name)) },
  { label: "G — L", artists: artists.filter((artist) => /^[G-L]/i.test(artist.name)) },
  { label: "M — R", artists: artists.filter((artist) => /^[M-R]/i.test(artist.name)) },
  { label: "S — Z", artists: artists.filter((artist) => /^[S-Z]/i.test(artist.name)) },
];
