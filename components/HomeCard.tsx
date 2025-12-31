import Image from "next/image";

export default function HomeCard({
  title,
  points,
  src,
  description,
}: {
  title: string;
  points: string[];
  src: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <Image alt="" src={src} width={70} height={70} />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-foreground">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
