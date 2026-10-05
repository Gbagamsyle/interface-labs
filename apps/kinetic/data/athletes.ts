export type AthleteCaseStudy = {
  name: string;
  discipline: string;
  event: string;
  before: string;
  after: string;
  change: string;
  image: string;
  alt: string;
};

export const athleteStories: AthleteCaseStudy[] = [
  {
    name: "MAYA OKAFOR",
    discipline: "100M / 200M",
    event: "SPRINT",
    before: "11.24",
    after: "10.98",
    change: "−2.3%",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1000&q=88",
    alt: "Athlete running outdoors during focused sprint preparation",
  },
  {
    name: "LIAM CARTER",
    discipline: "LONG JUMP",
    event: "POWER",
    before: "7.38 M",
    after: "7.61 M",
    change: "+3.1%",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=88",
    alt: "Athlete training strength with a heavy barbell",
  },
  {
    name: "SOFIA RUIZ",
    discipline: "CYCLING / ENDURANCE",
    event: "ENDURANCE",
    before: "245 W",
    after: "278 W",
    change: "+13.5%",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1000&q=88",
    alt: "Cyclists holding pace in a road race",
  },
];
