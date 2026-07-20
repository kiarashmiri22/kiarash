export type Project = {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  link?: string;
};

// Add more projects here — each one becomes a card in the Projects section.
export const projects: Project[] = [
  {
    title: "Halden — LED Word Clock",
    description:
      "A handmade word clock powered by an Arduino Uno R3 and a DS3231 RTC, driving 135 WS2812B LEDs wired in an 11×12 grid with FastLED. Five color and effect modes, behind a laser-cut acrylic diffuser panel.",
    tags: ["Arduino", "C++", "FastLED", "Embedded"],
    icon: "lucide:clock-4",
  },
];
