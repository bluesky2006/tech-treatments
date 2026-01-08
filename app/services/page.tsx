import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Computer Services in Frome | Repairs, Upgrades & Builds",
  description:
    "Computer repairs, upgrades, new builds and retro restoration in Frome and nearby Somerset villages.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
