export type Discipline = {
  number: string;
  name: string;
  promise: string;
  image: string;
  alt: string;
  treatment: "speed" | "power" | "endurance" | "recovery";
};

export const disciplines: Discipline[] = [
  {
    number: "01",
    name: "SPEED",
    promise: "BUILD EXPLOSIVE VELOCITY",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1400&q=88",
    alt: "Runners moving along a track at dusk, backlit by the setting sun",
    treatment: "speed",
  },
  {
    number: "02",
    name: "POWER",
    promise: "GENERATE GREATER FORCE",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=88",
    alt: "Athlete lifting a loaded barbell in a dark training space",
    treatment: "power",
  },
  {
    number: "03",
    name: "ENDURANCE",
    promise: "GO FURTHER",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1400&q=88",
    alt: "Road cyclists riding together during a race",
    treatment: "endurance",
  },
  {
    number: "04",
    name: "RECOVERY",
    promise: "TRAIN LONGER",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1400&q=88",
    alt: "Runner rebuilding rhythm during an outdoor recovery run",
    treatment: "recovery",
  },
];
