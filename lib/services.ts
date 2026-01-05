export type ServiceKey = "repairs" | "upgrades" | "custom" | "support" | "retro" | "disposal";

export type ServiceData = {
  key: ServiceKey;
  title: string;
  cardDescription: string;
  cardPoints: string[];
  cardImageSrc: string;

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
      "Help when something isn’t working properly – slow performance, crashes, startup problems, and software that won’t behave. I’ll look for the simplest sensible fix and explain what’s going on in plain English.",
    cardPoints: [
      "Slow computers, crashes, startup issues",
      "Errors, pop-ups and software problems",
      "Overheating, noisy fans and hardware faults",
      "Basic printer / Wi-Fi issues",
    ],
    cardImageSrc: "/bsod.jpg",
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
    cardImageSrc: "/upgrades.jpg",
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
      "General tune-up and clean-up",
      "Thermal paste / fan clean (case-by-case)",
    ],
    goodToKnow: ["I’ll always confirm compatibility before you buy anything."],
  },

  {
    key: "custom",
    title: "New & custom PCs",
    cardDescription:
      "Computers built around how you actually use them – whether that’s home office work, creative projects, or gaming. I’ll help you choose sensible components, build the machine, and set everything up so it’s ready to use.",
    cardPoints: [
      "Quiet home office machines (reliable and tidy)",
      "Gaming PCs (budget-aware, explainable choices)",
      "Workstations for creative projects",
      "Data transfer from your old computer",
    ],
    cardImageSrc: "/gaming.jpg",
    intro:
      "A build that matches how you actually use your computer – no nonsense components, no overspending.",
    whatYouGet: [
      "Parts list tailored to your budget and needs",
      "Quiet, tidy build with sensible airflow",
      "Setup so it’s ready to use",
      "Data transfer from your old machine (if needed)",
    ],
    typicalJobs: [
      "Home office machines that stay quiet",
      "Gaming PCs with explainable choices",
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
    cardImageSrc: "/update.jpg",
    intro:
      "Help with the fiddly stuff – accounts, printers, backups, and new-computer setup without the stress.",
    whatYouGet: [
      "Calm, patient setup help",
      "Less clutter, fewer pop-ups, fewer surprises",
      "Backups set up properly",
      "Simple handover so you know what’s what",
    ],
    typicalJobs: [
      "New laptop setup and “make it feel right”",
      "Email, accounts and password help",
      "Printers/scanners and home Wi-Fi setup",
      "Backups + basic security checks",
    ],
  },

  {
    key: "retro",
    title: "Retro & restoration",
    cardDescription:
      "Careful restoration of older computers and systems – from reviving machines that no longer start to making vintage setups usable again. I can also put together bespoke emulation machines, tailored to the games you love.",
    cardPoints: [
      "Bringing older machines back to life",
      "Storage upgrades that suit the era",
      "File retrieval (case-by-case, where possible)",
      "Tailored emulation machines for classic games",
    ],
    cardImageSrc: "/retro.jpg",
    intro:
      "Careful, respectful restoration of vintage machines – plus tailored emulation builds for classic games.",
    whatYouGet: [
      "Gentle fault-finding and revival work",
      "Era-appropriate upgrades where sensible",
      "Advice on preservation vs practicality",
      "Optional modern conveniences (carefully added)",
    ],
    typicalJobs: [
      "Machines that no longer boot",
      "Storage upgrades that suit the era",
      "File retrieval (case-by-case)",
      "Bespoke emulation machines",
    ],
  },

  {
    key: "disposal",
    title: "Responsible disposal",
    cardDescription:
      "Safe and responsible handling of old computers you no longer need. This includes secure data wiping where required, reuse or refurbishment when possible, and proper recycling when it isn’t.",
    cardPoints: [
      "Secure data wiping (on request)",
      "Reuse / refurb where possible – recycle otherwise",
      "Collection available depending on location / volume",
      "Confirmation once it’s been handled",
    ],
    cardImageSrc: "/ewaste.jpg",
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
