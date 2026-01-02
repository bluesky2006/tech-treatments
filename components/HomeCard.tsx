import Image from "next/image";

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
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <ul className="mt-4 space-y-1 text-foreground">
        {points.map((p) => (
          <li key={p} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-teal-400/70" aria-hidden="true" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
