import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSectionNav } from "@/components/section-nav";
import { PLAYBOOK_PATH } from "@/content/playbook";

const SECTIONS = [
  { id: "ethos", label: "Home" },
  { id: "practices", label: "About" },
  { id: "services", label: "Services" },
  { id: "approach", label: "Approach" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const goToSection = useSectionNav();

  const onPlaybook = location === PLAYBOOK_PATH;

  const scrollTo = (id: string) => {
    setIsOpen(false);
    goToSection(id);
  };

  // On the sales page the most prominent control should sell the product;
  // everywhere else it books consulting.
  const primaryCta = onPlaybook
    ? { label: "Get the Playbook", onClick: () => { setIsOpen(false); document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" }); } }
    : { label: "Book a Consultation", onClick: () => scrollTo("contact") };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl tracking-tighter text-primary font-semibold">
          TD Advisory.
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {SECTIONS.map((s) => (
            <button key={s.id} onClick={() => scrollTo(s.id)} className="text-sm font-medium hover:text-accent transition-colors">{s.label}</button>
          ))}
          <Link
            href={PLAYBOOK_PATH}
            className={`text-sm font-medium transition-colors ${onPlaybook ? "text-accent" : "hover:text-accent"}`}
            aria-current={onPlaybook ? "page" : undefined}
          >
            Playbook
          </Link>
          <Button onClick={primaryCta.onClick} className="bg-primary text-primary-foreground rounded-none px-6 hover:bg-primary/90">
            {primaryCta.label}
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-6 shadow-xl">
          {SECTIONS.map((s) => (
            <button key={s.id} onClick={() => scrollTo(s.id)} className="text-lg font-serif text-left">{s.label}</button>
          ))}
          <Link
            href={PLAYBOOK_PATH}
            onClick={() => setIsOpen(false)}
            className="text-lg font-serif text-left"
            aria-current={onPlaybook ? "page" : undefined}
          >
            Playbook
          </Link>
          <Button onClick={primaryCta.onClick} className="w-full rounded-none">{primaryCta.label}</Button>
        </div>
      )}
    </nav>
  );
}
