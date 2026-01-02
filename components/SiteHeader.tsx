"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { cn } from "@/lib/cn";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll(); // run once on mount
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-20 transition-colors duration-300",
        scrolled ? "border-b bg-zinc-900/80 backdrop-blur-md" : "border-transparent bg-transparent"
      )}
    >
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
              <span className="text-zinc-100">Treatments</span>
            </span>
          </Link>

          <nav
            className="flex items-center gap-1 text-sm font-semibold text-zinc-100"
            aria-label="Primary"
          >
            <Link
              className="rounded-xl px-3 py-2 hover:bg-teal-400 hover:text-zinc-900"
              href="/services"
            >
              Services
            </Link>
            <Link className="rounded-xl px-3 py-2 hover:bg-teal-400 hover:text-zinc-900" href="/about">
              About
            </Link>
            <Link
              className="rounded-xl px-3 py-2 hover:bg-teal-400 hover:text-zinc-900"
              href="/contact"
            >
              Contact
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
