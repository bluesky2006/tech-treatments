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
        "inline-flex h-11 items-center justify-center rounded-xl border px-4 text-sm font-semibold transition border-border bg-card hover:bg-teal-300 hover:scale-105 hover:text-zinc-900",
        variant === "primary" && "bg-teal-100 text-zinc-900"
      )}
    >
      {children}
    </Link>
  );
}
