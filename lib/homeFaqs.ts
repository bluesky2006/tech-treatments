// src/lib/homeFaqs.ts
import type { ReactNode } from "react";

export type FAQItem = {
  q: string;
  a: ReactNode;
};

export const homeFaqs: FAQItem[] = [
  {
    q: "Do you do home visits?",
    a: "Yes, depending on the job. Some problems are best handled at home, especially things like Wi-Fi, printers, or full setup issues. Workshop-style jobs can be collected and returned.",
  },
  {
    q: "What areas do you cover?",
    a: "Primarily Frome and the surrounding areas, though often wider Somerset. If you’re not sure, send your postcode and I’ll confirm.",
  },
  {
    q: "Can you help me with [insert exotic machine here]?",
    a: "I can help with many systems and platforms, new and old – just ask!",
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
    a: "It depends on the job, but I’ll always explain costs before doing any work. Simple fixes are often inexpensive and upgrades are priced clearly as labour plus parts.",
  },
  {
    q: "Do you offer remote support?",
    a: "Sometimes. For certain software issues, remote help can be quicker and cheaper. If it’s suitable, I’ll suggest it.",
  },
  {
    q: "Can you help me with my business set-up?",
    a: "I can assist with setting up new systems, networks and software for small businesses – just get in touch to discuss your needs.",
  },
  {
    q: "How long does a typical job take?",
    a: "Many issues can be resolved the same day. Others may take longer depending on parts or complexity. I’ll give you a realistic timeframe up front.",
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
