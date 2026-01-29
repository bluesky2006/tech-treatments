export type ServiceKey = "help" | "upgrades" | "custom" | "retro";

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
  pricingHint?: string;
};

export const services: ServiceData[] = [
  {
    key: "help",
    title: "Computer Help & Repairs",
    cardDescription:
      "Help when something isn’t working properly – **slow performance**, **crashes**, **startup problems**, **printers**, **Wi-Fi**, and everyday device setup (TVs, phones and tablets). Calm troubleshooting and clear explanations in plain English.",
    cardPoints: [
      "Slow computers, crashes and startup issues",
      "Errors, pop-ups and software problems",
      "Printers, Wi-Fi and home setup problems",
      "New devices set up properly (TVs, phones, tablets)",
    ],
    imageSrc: "/bsod.jpg",
    intro:
      "Practical help for everyday tech problems and setup – with clear explanations and sensible next steps.",
    whatYouGet: [
      "A quick assessment of what’s actually wrong",
      "The simplest sensible fix first",
      "Clear explanation in plain English",
      "Advice if repair isn’t worthwhile",
    ],
    typicalJobs: [
      "Slow performance, freezing or crashes",
      "Startup issues and confusing error messages",
      "Printers, scanners and home Wi-Fi problems",
      "New computer setup and handover",
      "New TV setup and streaming apps",
      "Phone and tablet setup",
      "Email, accounts and password help",
      "Backups and basic security checks",
    ],
    goodToKnow: [
      "Home visits available depending on the job.",
      "If parts are needed, options and prices are agreed first.",
    ],
  },

  {
    key: "upgrades",
    title: "Upgrades & Performance Improvements",
    cardDescription:
      "Targeted upgrades that genuinely **improve how your computer feels to use**. I’ll advise honestly on what’s worth doing – and just as importantly, what isn’t – so you don’t spend money unnecessarily.",
    cardPoints: [
      "SSD upgrades (often the biggest speed boost)",
      "RAM upgrades where they actually help",
      "Health checks, clean-ups and tune-ups",
      "Straight advice on value vs cost",
    ],
    imageSrc: "/upgrades.jpg",
    intro: "Upgrades that make a real difference – without overspending or unnecessary parts.",
    whatYouGet: [
      "A health check to confirm the best upgrade path",
      "Clear options (budget vs best value)",
      "Noticeable speed and stability improvements",
      "Quieter, cooler machines where possible",
    ],
    typicalJobs: [
      "SSD upgrades for older laptops and desktops",
      "RAM upgrades (when worthwhile)",
      "General system clean-ups and tune-ups",
      "Fan cleaning and thermal paste (case-by-case)",
    ],
    goodToKnow: ["Compatibility is always confirmed before you buy anything."],
  },

  {
    key: "custom",
    title: "New & Custom Computers",
    cardDescription:
      "Computers built around how you actually use them – whether that’s **home office** work, **creative projects** or **gaming**. Sensible component choices, tidy builds and no unnecessary extras.",
    cardPoints: [
      "Quiet home office PCs",
      "Gaming PCs with explainable choices",
      "Creative workstations",
      "Data transfer from your old computer",
    ],
    imageSrc: "/gaming.jpg",
    intro: "A computer that fits how you work or play – not a generic spec sheet.",
    whatYouGet: [
      "Parts list tailored to your needs and budget",
      "Quiet, tidy build with sensible airflow",
      "Setup so it’s ready to use",
      "Optional data transfer from your old machine",
    ],
    typicalJobs: [
      "Home office machines (quiet and reliable)",
      "Gaming PCs with clear budget trade-offs",
      "Creative workstations (photo, video, music)",
      "Small form-factor builds where appropriate",
    ],
  },

  {
    key: "retro",
    title: "Retro, Reuse & Responsible Disposal",
    cardDescription:
      "Careful handling of older and end-of-life computers – from sympathetic **retro restoration** to **secure data wiping** and **responsible recycling**. Focused on preservation, reuse and honesty.",
    cardPoints: [
      "Retro computers and vintage systems",
      "Era-appropriate storage upgrades",
      "Secure data wiping where required",
      "Reuse, refurbish or recycle responsibly",
    ],
    imageSrc: "/retro.jpg",
    intro:
      "Respectful work with older machines – balancing preservation, practicality and sustainability.",
    whatYouGet: [
      "Assessment of condition and realistic options",
      "Sensitive upgrades where appropriate",
      "Advice on preserve vs replace decisions",
      "Secure handling of data when disposing",
    ],
    typicalJobs: [
      "Vintage machines that no longer boot",
      "Storage replacements suited to the era",
      "File and data recovery (case-by-case)",
      "Custom emulation machines for classic games",
      "Old laptops and desktops needing secure disposal",
    ],
    goodToKnow: [
      "Note: I do not perform invasive electronics repair (board-level or capacitor work).",
      "Collection often free depending on location and volume.",
    ],
  },
];
