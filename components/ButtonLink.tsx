import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "primary";
};

export default function ButtonLink({ href, children, variant = "default" }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-xl px-4 text-sm font-semibold transition hover:scale-105",
        variant === "default" &&
          "bg-card text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 hover:bg-teal-300 hover:text-zinc-900",
        variant === "primary" && "bg-teal-300 text-zinc-900"
      )}
    >
      {children}
    </Link>
  );
}
