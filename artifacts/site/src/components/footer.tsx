import { Link } from "wouter";
import { useSectionNav } from "@/components/section-nav";
import { PLAYBOOK_PATH } from "@/content/playbook";

export function Footer() {
  const goToSection = useSectionNav();

  return (
    <footer className="bg-primary text-primary-foreground py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 border-b border-primary-foreground/10 pb-16 mb-8">
        <div>
          <div className="font-serif text-3xl tracking-tighter font-semibold mb-6">
            TD Advisory.
          </div>
          <p className="text-primary-foreground/60 max-w-sm">
            Grounded expertise for mid-market operations. Measurable results, sustained by your team.
          </p>
        </div>
        <div className="flex gap-16">
          <div className="flex flex-col gap-3">
            <h5 className="font-bold uppercase tracking-widest text-accent text-xs mb-2">Menu</h5>
            <button onClick={() => goToSection("ethos")} className="text-primary-foreground/80 hover:text-white text-left transition-colors">Home</button>
            <button onClick={() => goToSection("practices")} className="text-primary-foreground/80 hover:text-white text-left transition-colors">About</button>
            <button onClick={() => goToSection("approach")} className="text-primary-foreground/80 hover:text-white text-left transition-colors">Approach</button>
            <Link href={PLAYBOOK_PATH} className="text-primary-foreground/80 hover:text-white text-left transition-colors">Playbook</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="font-bold uppercase tracking-widest text-accent text-xs mb-2">Legal</h5>
            <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/40">
        <p>© {new Date().getFullYear()} TD Advisory LLC. All rights reserved.</p>

      </div>
    </footer>
  );
}
