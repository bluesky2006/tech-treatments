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
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <div className="relative h-80 w-full">
        <Image
          src={src}
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-3 text-foreground">{description}</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-foreground">
          {points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
