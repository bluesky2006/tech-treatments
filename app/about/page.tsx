import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import BulletList from "@/components/BulletList";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Tech Treatments – friendly, plain-English computer help in Frome and nearby villages.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            {/* Left: copy */}
            <div className="md:col-span-7">
              <p className="text-xs font-semibold tracking-widest text-teal-400/80 uppercase">
                About
              </p>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                Calm, practical tech help
              </h1>

              <p className="mt-6 max-w-2xl text-foreground">
                Tech Treatments is for people who don’t want to become tech experts – they just want
                their computer to work properly.
              </p>

              <p className="mt-4 max-w-2xl text-foreground">
                I’ll explain your options in plain English, avoid upselling, and I’m happy to say
                when something isn’t worth fixing. As well as everyday repairs and upgrades, I enjoy
                restoration work – bringing older machines back to life and saving machines from
                landfill.
              </p>
              <div className="mt-10">
                <h2 className="text-xl font-semibold tracking-tight">What you can expect</h2>
                <p className="mt-2">
                  No jargon, no pressure – just sensible help and clear options.
                </p>
                <div className="mt-5 grid gap-1 sm:grid-cols-2">
                  <BulletList
                    items={[
                      "Clear advice without jargon",
                      "Honest guidance on what’s worth fixing",
                      "Care with your files and your setup",
                      "Respect for your time and budget",
                    ]}
                    className="space-y-1"
                  />
                </div>{" "}
                <div className="mt-7 flex flex-wrap gap-3">
                  <ButtonLink variant="primary" href="/contact">
                    Get in touch
                  </ButtonLink>
                </div>
                <p className="mt-14 text-sm text-muted">
                  Based near Frome, Somerset – home visits available depending on the job.
                </p>
              </div>
            </div>

            {/* Right: image */}
            <div className="md:col-span-5 md:mt-10">
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl border border-border bg-card">
                <Image
                  src="/profile.jpeg"
                  alt="Simon from Tech Treatments"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 40vw, 100vw"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
