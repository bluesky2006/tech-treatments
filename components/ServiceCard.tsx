import Image from "next/image";
import BulletList from "./BulletList";
import { renderEmphasis } from "@/lib/formatText";

export default function ServiceCard({
  title,
  points,
  src,
  description,
  className = "",
}: {
  title: string;
  points: string[];
  src: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={[
        "flex h-full flex-col rounded-2xl border border-border bg-card overflow-hidden transition cursor-pointer",
        "group-hover:border-teal-400/40 group-hover:shadow-lg",
        "group-focus-visible:border-teal-400/60 group-focus-visible:shadow-lg",
        className,
      ].join(" ")}
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={src}
          alt=""
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-3 text-foreground">{renderEmphasis(description)}</p>
        <BulletList items={points} className="mt-4" />
        <p className="mt-auto pt-4 text-sm text-foreground text-right transition group-hover:text-teal-400">
          Click for more details{" "}
          <span className="inline-block transition group-hover:translate-x-0.5">→</span>
        </p>
      </div>
    </div>
  );
}
