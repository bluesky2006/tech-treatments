import Container from "./Container";

export default function SiteFooter() {
  return (
    <footer className="py-8 text-sm text-muted">
      <Container>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p>© {new Date().getFullYear()} Tech Treatments. Frome, Somerset.</p>
            <p className="mt-2">Computer repairs, upgrades and local tech help across Frome and nearby villages.</p>
          </div>
          <p className="flex flex-wrap gap-2">
            <a className="hover:text-zinc-100" href="mailto:techtreatments@gmail.com">
              techtreatments@gmail.com
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
