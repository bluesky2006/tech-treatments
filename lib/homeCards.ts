export type HomeCardData = {
  title: string;
  points: string[];
  src: string;
  href: string;
};

export const homeCards: HomeCardData[] = [
  {
    title: "Help & repairs",
    points: [
      "Slow laptops and PCs",
      "Crashes, errors, odd behaviour",
      "Wi-Fi, printers and device setup (TVs, phones)",
    ],
    src: "/icons/pc-tower.png",
    href: "/services?service=help",
  },
  {
    title: "Upgrades",
    points: ["SSD and RAM upgrades", "Tune-ups and health checks", "Cooler, quieter machines"],
    src: "/icons/cpu.png",
    href: "/services?service=upgrades",
  },
  {
    title: "New & custom PCs",
    points: ["Quiet home office builds", "Gaming PCs (budget-aware)", "Creative workstations"],
    src: "/icons/tower-pc.png",
    href: "/services?service=custom",
  },
  {
    title: "Retro & disposal",
    points: ["Retro machines and restoration", "Emulation builds", "Secure wiping and recycling"],
    src: "/icons/computer.png",
    href: "/services?service=retro",
  },
];
