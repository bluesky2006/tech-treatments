"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { cn } from "@/lib/cn";

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = useMemo(() => pathname === "/", [pathname]);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClass = cn(
    "sticky top-0 z-20 transition-colors duration-300",
    isHome
      ? scrolled
        ? "bg-zinc-900/80 backdrop-blur-md"
        : "bg-transparent"
      : "bg-background/90 backdrop-blur-md border-b border-border"
  );

  const navTextClass = cn(
    "flex items-center gap-1 text-sm font-semibold",
    isHome ? "text-zinc-100" : "text-zinc-900 dark:text-zinc-100"
  );

  const linkClass = cn(
    "rounded-xl px-3 py-2 transition-colors hover:bg-teal-400 hover:text-zinc-900 dark:hover:text-zinc-900"
  );

  return (
    <header className={headerClass}>
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 font-semibold">
            <Image
              src="/logo.png"
              alt="Tech Treatments logo"
              width={50}
              height={50}
              className="rounded-xl"
              priority
            />

            <span className="text-2xl font-semibold">
              <span className="text-teal-500">Tech</span>
              <span className={cn(isHome ? "text-zinc-100" : "text-zinc-900 dark:text-zinc-100")}>
                Treatments
              </span>
            </span>
          </Link>

          <nav className={navTextClass} aria-label="Primary">
            <Link className={linkClass} href="/services">
              Services
            </Link>
            <Link className={linkClass} href="/about">
              About
            </Link>
            <Link className={linkClass} href="/contact">
              Contact
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
