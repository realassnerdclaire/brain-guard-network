import { Link } from "react-router-dom";

const NavbarXBrainer = () => {
  return (
    <header className="w-full">
      <nav className="container flex items-center justify-between py-6">
        <Link to="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-primary shadow-elegant" aria-hidden="true" />
          <span className="text-lg font-semibold tracking-tight text-gradient-brand">XBrainer AI</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#vision" className="story-link">Vision</a>
          <a href="#features" className="story-link">Features</a>
          <a href="#how" className="story-link">How it works</a>
          <a href="#faq" className="story-link">FAQ</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#cta" className="hidden md:inline-block text-sm font-medium story-link">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default NavbarXBrainer;
