import Image from "next/image";
import BulletList from "./BulletList";

export default function HomeCard({
  title,
  points,
  src,
}: {
  title: string;
  points: string[];
  src: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <Image alt="" src={src} width={70} height={70} />
      <h2 className="text-xl font-semibold mt-4">{title}</h2>
      <BulletList items={points} className="mt-4" />
    </div>
  );
}
