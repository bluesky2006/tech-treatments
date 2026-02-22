import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import HomeCard from "@/components/HomeCard";
import ServiceArea from "@/components/ServiceArea";
import { homeCards } from "@/lib/homeCards";
import Testimonials from "@/components/Testimonials";
import { testimonials } from "@/lib/testimonials";
import RotatingHeadline from "@/components/RotatingHeadline";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-dvh overflow-hidden flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/hero.jpg)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-zinc-900/75" aria-hidden="true" />

        <Container>
          <div className="relative -mt-16 md:-mt-24">
            <p className="text-xs font-semibold tracking-widest text-teal-400/80 uppercase">
              Local computer help
            </p>

            <RotatingHeadline />

            <p className="mt-8 max-w-3xl text-lg sm:text-xl text-zinc-100 leading-tight">
              Clear, practical computer help –{" "}
              <span className="text-teal-400 font-medium">repairs, upgrades and new setups</span>{" "}
              across Frome and the wider Somerset area.
            </p>

            <div className="mt-12 flex flex-wrap gap-3">
              <ButtonLink variant="primary" href="/contact">
                Get in touch
              </ButtonLink>
              <ButtonLink href="/services">See services</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {homeCards.map((card) => (
              <HomeCard key={card.title} {...card} />
            ))}
          </div>
        </Container>
      </section>

      <Testimonials items={testimonials} />

      <ServiceArea />
    </>
  );
}
