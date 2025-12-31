import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
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
              <span>Treatments</span>
            </span>
          </Link>
          <nav
            className="flex items-center gap-1 text-sm font-semibold text-foreground"
            aria-label="Primary"
          >
            <Link
              className="rounded-xl px-3 py-2 hover:bg-card hover:text-teal-400"
              href="/services"
            >
              Services
            </Link>
            <Link className="rounded-xl px-3 py-2 hover:bg-card hover:text-teal-400" href="/about">
              About
            </Link>
            <Link
              className="rounded-xl px-3 py-2 hover:bg-card hover:text-teal-400"
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
