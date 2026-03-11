import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import ServiceContent from "@/components/ServiceContent";
import StructuredData from "@/components/StructuredData";
import { absoluteUrl, SERVICE_AREAS, SITE_NAME } from "@/lib/site";
import { getServiceBySlug, services } from "@/lib/services";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  const path = `/services/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${service.metaTitle} | ${SITE_NAME}`,
      description: service.metaDescription,
      url: path,
      images: [
        {
          url: absoluteUrl(service.imageSrc),
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.metaTitle} | ${SITE_NAME}`,
      description: service.metaDescription,
      images: [absoluteUrl(service.imageSrc)],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const path = `/services/${service.slug}`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    areaServed: SERVICE_AREAS,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
    serviceType: service.title,
    url: absoluteUrl(path),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Services",
        item: absoluteUrl("/services"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: service.title,
        item: absoluteUrl(path),
      },
    ],
  };

  return (
    <section className="pb-16 pt-32">
      <Container>
        <StructuredData data={serviceSchema} />
        <StructuredData data={breadcrumbSchema} />

        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/services" className="hover:text-foreground">
                Services
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground">{service.title}</li>
          </ol>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,1.1fr)] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest text-teal-400/80 uppercase">
              Service
            </p>
            <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">{service.title}</h1>
            <p className="mt-6 text-foreground">
              {service.metaDescription} Home visits are available depending on the job.
            </p>
            <p className="mt-4 text-foreground">{service.intro}</p>
            <p className="mt-4 text-sm text-muted">
              Typical local coverage includes {SERVICE_AREAS.slice(0, 8).join(", ")} and nearby
              villages, depending on the job.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink variant="primary" href="/contact">
                Ask about this service
              </ButtonLink>
              <ButtonLink href="/services">All services</ButtonLink>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="relative h-72 w-full sm:h-96">
              <Image
                src={service.imageSrc}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <ServiceContent service={service} />
        </div>
      </Container>
    </section>
  );
}
