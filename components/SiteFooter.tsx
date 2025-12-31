import Container from "./Container";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border py-8 text-sm text-muted">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Tech Treatments. Frome, Somerset.</p>
          <p className="flex flex-wrap gap-2">
            <a className="hover:text-white" href="mailto:techtreatments@gmail.com">
              techtreatments@gmail.com
            </a>
            <span className="text-white/20">·</span>
            <a className="hover:text-white" href="tel:+447000000000">
              07973 189 344
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
