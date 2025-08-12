const FooterXBrainer = () => {
  return (
    <footer className="border-t">
      <div className="container py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} XBrainer AI. We don’t decode thoughts—we defend them.
        </p>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#vision" className="story-link">Vision</a>
          <a href="#features" className="story-link">Features</a>
          <a href="#how" className="story-link">How it works</a>
          <a href="#faq" className="story-link">FAQ</a>
        </nav>
      </div>
    </footer>
  );
};

export default FooterXBrainer;
