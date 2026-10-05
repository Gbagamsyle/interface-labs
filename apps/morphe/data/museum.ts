export const museum = {
  name: "MORPHÉ CONTEMPORARY",
  address: ["18 Exchange Place", "London SE1 8SW", "United Kingdom"],
  hours: [
    { days: "Monday", time: "Closed" },
    { days: "Tuesday — Thursday", time: "10:00 — 18:00" },
    { days: "Friday", time: "10:00 — 21:00" },
    { days: "Saturday — Sunday", time: "10:00 — 18:00" },
  ],
  admission: [
    { label: "General", price: "£12" },
    { label: "Students", price: "£8" },
    { label: "Under 18", price: "Free" },
    { label: "Members", price: "Free" },
  ],
  accessibility:
    "Step-free access throughout. Seating is available in every gallery. Large-print guides and a quiet hour are offered on the first Sunday of each month.",
  travel: [
    { mode: "Underground", details: "Southwark (Jubilee line), 6 minutes on foot" },
    { mode: "Rail", details: "London Bridge, 10 minutes on foot" },
    { mode: "Bus", details: "Routes 21, 35, 40 and 133 stop nearby" },
    { mode: "Bicycle / walking", details: "Cycle stands at the entrance; a short walk from the Thames Path" },
  ],
  contacts: [
    { label: "General enquiries", value: "hello@morphe.contemporary", href: "mailto:hello@morphe.contemporary" },
    { label: "Telephone", value: "+44 (0)20 7946 0186", href: "tel:+442079460186" },
    { label: "Press", value: "press@morphe.contemporary", href: "mailto:press@morphe.contemporary" },
    { label: "Group visits", value: "groups@morphe.contemporary", href: "mailto:groups@morphe.contemporary" },
  ],
  contact: "hello@morphe.contemporary",
  phone: "+44 (0)20 7946 0186",
} as const;
