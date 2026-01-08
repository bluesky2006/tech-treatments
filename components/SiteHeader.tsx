"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaXmark } from "react-icons/fa6";
import { cn } from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

const NAV_ITEMS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

function Brand({
  isHome,
  onClick,
  size = 50,
  imageClassName,
  textClassName = "text-2xl font-semibold",
}: {
  isHome: boolean;
  onClick?: () => void;
  size?: number;
  imageClassName?: string;
  textClassName?: string;
}) {
  return (
    <Link href="/" onClick={onClick} className="flex items-center gap-3 font-semibold">
      <Image
        src="/logo.png"
        alt="Tech Treatments logo"
        width={size}
        height={size}
        className={cn("rounded-xl", imageClassName)}
        priority
      />
      <span className={textClassName}>
        <span className="text-teal-500">Tech</span>
        <span className={cn(isHome ? "text-zinc-100" : "text-zinc-900 dark:text-zinc-100")}>
          Treatments
        </span>
      </span>
    </Link>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll → blur
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape key + scroll lock
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const headerClass = cn(
    "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
    isHome
      ? scrolled
        ? "bg-zinc-900/80 backdrop-blur-md"
        : "bg-transparent"
      : "bg-background/90 backdrop-blur-md border-b border-border"
  );

  const navTextClass = cn(
    "hidden md:flex items-center gap-1 text-sm font-semibold",
    isHome ? "text-zinc-100" : "text-zinc-900 dark:text-zinc-100"
  );

  const linkClass =
    "rounded-xl px-3 py-2 transition-colors hover:bg-teal-400 hover:text-zinc-900 dark:hover:text-zinc-900";

  const iconBtnClass = cn(
    "md:hidden inline-flex items-center justify-center rounded-xl px-3 py-2 transition-colors",
    "hover:bg-teal-400 hover:text-zinc-900",
    isHome ? "text-zinc-100" : "text-zinc-900 dark:text-zinc-100"
  );

  return (
    <>
      {/* Header */}
      <header className={headerClass}>
        <Container>
          <div className="flex h-20 items-center justify-between">
            <Brand isHome={isHome} />

            {/* Desktop nav */}
            <nav className={navTextClass} aria-label="Primary">
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} className={linkClass} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile toggle */}
            <button
              className={iconBtnClass}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? (
                <FaXmark className="h-5 w-5 translate-y-[0.5px]" />
              ) : (
                <FaBars className="h-5 w-5 translate-y-[0.5px]" />
              )}
            </button>
          </div>
        </Container>
      </header>

      {/* Fullscreen mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-opacity duration-300",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Backdrop */}
        <button
          type="button"
          className="absolute inset-0 bg-zinc-950/80 backdrop-blur-lg"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />

        <div className="relative flex h-full flex-col">
          {/* Top bar */}
          <div className="flex h-20 items-center justify-between px-5">
            <Brand isHome={isHome} onClick={() => setMenuOpen(false)} />

            <button
              className="inline-flex items-center justify-center rounded-xl px-3 py-2 text-zinc-100 hover:bg-teal-400 hover:text-zinc-900"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <FaXmark className="h-5 w-5 translate-y-[0.5px]" />
            </button>
          </div>

          {/* Nav */}
          <div className="flex flex-1 items-center justify-center px-6 pb-12">
            <nav className="w-full max-w-sm" aria-label="Mobile primary">
              <div className="flex flex-col gap-5 text-center">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-2xl px-6 py-4 text-3xl font-semibold text-zinc-100 hover:bg-teal-400 hover:text-zinc-900"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
