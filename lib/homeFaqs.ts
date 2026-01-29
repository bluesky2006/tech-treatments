// src/lib/homeFaqs.ts
import type { ReactNode } from "react";

export type FAQItem = {
  q: string;
  a: ReactNode;
};

export const homeFaqs: FAQItem[] = [
  {
    q: "Do you do home visits?",
    a: "Yes, depending on the job. Some problems are best handled at home, especially Wi-Fi, printers, TVs and device setup. Workshop-style jobs can be collected and returned.",
  },
  {
    q: "What areas do you cover?",
    a: "Primarily Frome and the surrounding areas, though often wider Somerset. If you’re not sure, send your postcode and I’ll confirm.",
  },
  {
    q: "Do you work with Macs and Windows PCs?",
    a: "Yes – Windows and macOS, as well as Linux. Plus iPhones/iPads and Android.",
  },
  {
    q: "Can you help me with [insert exotic machine here]?",
    a: "Often, yes. I work with plenty of systems, new and old. If you tell me what it is and what it’s doing (or not doing), I’ll let you know whether it’s something I can take on.",
  },
  {
    q: "Can you help me decide whether it’s worth fixing?",
    a: "Definitely. I’ll explain the options and likely costs up front – and I’m happy to tell you when something isn’t worth doing.",
  },
  {
    q: "Will my files and photos be safe?",
    a: "I treat your data with care. If anything involves moving or backing up files, I’ll explain what’s happening and give you clear choices.",
  },
  {
    q: "How much does it usually cost?",
    a: "It depends on the job, but I’ll always explain costs before doing any work. Simple fixes are often quick, and upgrades are priced clearly as labour plus parts.",
  },
  {
    q: "Do you offer remote support?",
    a: "Sometimes. For certain software issues, remote help can be quicker and cheaper. If it’s suitable, I’ll suggest it.",
  },
  {
    q: "Can you help me with my business set-up?",
    a: "Yes. I can help small businesses get set up with the basics – computers, Wi-Fi, printers, accounts and backups. Get in touch and I’ll suggest a sensible approach.",
  },
  {
    q: "How long does a typical job take?",
    a: "Some issues can be resolved quickly, while others take longer depending on parts or complexity. I’ll give you a realistic timeframe up front and keep you updated if anything changes.",
  },
  {
    q: "Do you help with old or unusual computers?",
    a: "Yes. I enjoy restoration and retro projects, from reviving older machines to building emulation setups for classic games.",
  },
  {
    q: "What happens to old computers you collect?",
    a: "Where possible, machines are reused or refurbished. If that’s not practical, they’re responsibly recycled. Secure data wiping is available on request.",
  },
];
