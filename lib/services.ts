export type ServiceKey = "repairs" | "upgrades" | "custom" | "support" | "retro" | "disposal";

export type ServiceData = {
  key: ServiceKey;
  title: string;
  cardDescription: string;
  cardPoints: string[];
  imageSrc: string;

  intro: string;
  whatYouGet: string[];
  typicalJobs: string[];
  goodToKnow?: string[];
};

export const services: ServiceData[] = [
  {
    key: "repairs",
    title: "Computer help & repairs",
    cardDescription:
      "Help when something isn’t working properly – slow performance, crashes, startup problems and software that won’t behave. I’ll look for the simplest sensible fix and explain what’s going on in plain English.",
    cardPoints: [
      "Slow computers, crashes, startup issues",
      "Errors, pop-ups and software problems",
      "Overheating, noisy fans and hardware faults",
      "Basic printer / Wi-Fi issues",
    ],
    imageSrc: "/bsod.jpg",
    intro:
      "Tidy, practical troubleshooting for everyday problems – with clear explanations and sensible next steps.",
    whatYouGet: [
      "A quick assessment of what’s actually wrong",
      "The simplest sensible fix first",
      "Clear explanation in plain English",
      "Advice if it’s not worth the spend",
    ],
    typicalJobs: [
      "Slow performance, freezing, crashes",
      "Startup issues and annoying errors",
      "Overheating, noisy fans, random shutdowns",
      "Basic printer / Wi-Fi issues",
    ],
    goodToKnow: [
      "If parts are needed, I’ll share options and prices before ordering.",
      "Home visits available depending on the job.",
    ],
  },

  {
    key: "upgrades",
    title: "Upgrades",
    cardDescription:
      "Practical upgrades that make a real difference, especially for older machines. I’ll advise honestly on what’s worth doing – and just as importantly, what isn’t – so you don’t spend money unnecessarily.",
    cardPoints: [
      "SSD upgrades (often the biggest speed boost)",
      "RAM upgrades (when worthwhile)",
      "Health checks and tune-ups",
      "Advice on what’s worth upgrading",
    ],
    imageSrc: "/upgrades.jpg",
    intro:
      "Upgrades that genuinely improve the experience – with honest advice on what’s worth doing.",
    whatYouGet: [
      "A quick health check to confirm the best upgrade path",
      "Clear part options (budget vs best value)",
      "A noticeable speed boost where possible",
      "Better stability and reduced “weirdness”",
    ],
    typicalJobs: [
      "SSD upgrades (biggest improvement for older machines)",
      "RAM upgrades (only when it’ll help)",
      "CPU and GPU upgrades (case-by-case)",
      "General tune-up and clean-up",
      "Thermal paste / fan clean (case-by-case)",
    ],
    goodToKnow: ["I’ll always confirm compatibility before you buy anything."],
  },

  {
    key: "custom",
    title: "New & custom PCs",
    cardDescription:
      "Computers built around how you actually use them – whether that’s home office work, creative projects, or gaming. I’ll help you choose sensible components, build the machine and set everything up so it’s ready to use.",
    cardPoints: [
      "Quiet home office machines (reliable and tidy)",
      "Gaming PCs (budget-aware, explainable choices)",
      "Workstations for creative projects",
      "Data transfer from your old computer",
    ],
    imageSrc: "/gaming.jpg",
    intro:
      "A build that matches how you actually use your computer – no nonsense components, no overspending.",
    whatYouGet: [
      "Parts list tailored to your budget and needs",
      "Quiet, tidy build with sensible airflow",
      "Setup so it’s ready to use",
      "Data transfer from your old machine (if needed)",
    ],
    typicalJobs: [
      "Home office machines (quiet, reliable, tidy)",
      "Gaming PCs with explainable choices (budget-aware)",
      "Creative workstations (photo/video/music)",
      "Small form factor builds (where suitable)",
    ],
  },

  {
    key: "support",
    title: "Setup & everyday support",
    cardDescription:
      "Help with day-to-day computer tasks and setups that feel fiddly or confusing. From getting a new laptop ready to sorting email, printers, or backups, I’ll make sure everything works smoothly and is easy to use.",
    cardPoints: [
      "New computer setup and handover",
      "Email, accounts and password help",
      "Printers, scanners and home Wi-Fi setup",
      "Backups and keeping things tidy",
    ],
    imageSrc: "/update.jpg",
    intro:
      "Help with the fiddly stuff – accounts, printers, backups and new-computer setup without the stress.",
    whatYouGet: [
      "Calm, patient setup help",
      "Less clutter, fewer pop-ups, fewer surprises",
      "Bloat-free, streamlined setups",
      "Backups set up properly",
      "Simple handover so you know what’s what",
    ],
    typicalJobs: [
      "New computer setup and “make it feel right”",
      "Email, accounts and password help",
      "Printers/scanners and home Wi-Fi setup",
      "Backups and basic security checks",
    ],
  },

  {
    key: "retro",
    title: "Retro & restoration",
    cardDescription:
      "Sympathetic restoration and setup of older computers and systems – focusing on getting vintage machines usable again without invasive electronics work. I can also put together bespoke emulation machines, tailored to the games you love.",
    cardPoints: [
      "Bringing older machines back to a usable state",
      "Storage upgrades that suit the era",
      "File retrieval (case-by-case, where possible)",
      "Tailored emulation machines for classic games",
    ],
    imageSrc: "/retro.jpg",
    intro:
      "Careful, respectful work with vintage computers – concentrating on diagnosis, configuration, and era-appropriate improvements.",
    whatYouGet: [
      "Assessment of condition and likely causes of faults",
      "Upgrades and replacements where appropriate",
      "Advice on preservation vs practicality",
      "Optional modern conveniences added sensitively",
    ],
    typicalJobs: [
      "Machines that no longer boot or behave unpredictably",
      "Storage replacements or upgrades appropriate to the system",
      "Data and file recovery (case-by-case)",
      "Restoration of appearance where possible",
      "Basic cleaning and maintenance",
      "Custom emulation builds for classic games (RetroPie, etc.)",
    ],
    goodToKnow: [
      "This service does not include invasive electronics work (e.g. capacitor replacement, board repair, etc.).",
    ],
  },

  {
    key: "disposal",
    title: "Responsible disposal",
    cardDescription:
      "Safe and responsible handling of old computers you no longer need. This includes secure data wiping where required, reuse or refurbishment when possible and proper recycling when it isn’t.",
    cardPoints: [
      "Secure data wiping (on request)",
      "Reuse / refurb where possible – recycle otherwise",
      "Collection available depending on location / volume",
      "Confirmation once it’s been handled",
    ],
    imageSrc: "/ewaste.jpg",
    intro: "Safe and responsible handling of old computers – with secure wiping where required.",
    whatYouGet: [
      "Secure wipe on request (where possible)",
      "Reuse/refurbish where it makes sense",
      "Proper recycling when it doesn’t",
      "Confirmation once handled",
    ],
    typicalJobs: [
      "Old laptops/desktops you want gone",
      "Business clear-outs (small scale)",
      "Devices with sensitive data",
      "Mixed e-waste collections (case-by-case)",
    ],
    goodToKnow: ["Collection is usually free depending on location/volume."],
  },
];
