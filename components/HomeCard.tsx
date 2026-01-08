import Image from "next/image";
import Link from "next/link";
import BulletList from "./BulletList";

type HomeCardProps = {
  title: string;
  points: string[];
  src: string;
  href?: string;
};

export default function HomeCard({ title, points, src, href }: HomeCardProps) {
  const CardInner = (
    <div className="rounded-2xl border border-border bg-card p-5 transition hover:shadow-sm">
      <Image alt="" src={src} width={70} height={70} />
      <h2 className="text-xl font-semibold mt-4">{title}</h2>
      <BulletList items={points} className="mt-4 text-sm" />
    </div>
  );

  if (!href) return CardInner;

  return (
    <Link
      href={href}
      className="block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60"
      aria-label={`${title} – view details`}
    >
      {CardInner}
    </Link>
  );
}
