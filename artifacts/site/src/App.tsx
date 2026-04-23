import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import NotFound from "@/pages/not-found";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CheckCircle2, ChevronRight, Menu, X, ArrowUpRight } from "lucide-react";
import { useState, useRef } from "react";

// Image imports
import heroImg from "./assets/hero.png";
import operationsImg from "./assets/operations.png";
import qualityImg from "./assets/quality.png";
import hrImg from "./assets/hr.png";

const queryClient = new QueryClient();

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function RevealText({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(4px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-serif text-2xl tracking-tighter text-primary font-semibold">
          TD Advisory.
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("ethos")} className="text-sm font-medium hover:text-accent transition-colors">Home</button>
          <button onClick={() => scrollTo("practices")} className="text-sm font-medium hover:text-accent transition-colors">About</button>
          <button onClick={() => scrollTo("services")} className="text-sm font-medium hover:text-accent transition-colors">Services</button>
          <button onClick={() => scrollTo("approach")} className="text-sm font-medium hover:text-accent transition-colors">Approach</button>
          <Button onClick={() => scrollTo("contact")} className="bg-primary text-primary-foreground rounded-none px-6 hover:bg-primary/90">
            Book an Appointment
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-6 shadow-xl">
          <button onClick={() => scrollTo("ethos")} className="text-lg font-serif text-left">Home</button>
          <button onClick={() => scrollTo("practices")} className="text-lg font-serif text-left">About</button>
          <button onClick={() => scrollTo("services")} className="text-lg font-serif text-left">Services</button>
          <button onClick={() => scrollTo("approach")} className="text-lg font-serif text-left">Approach</button>
          <Button onClick={() => scrollTo("contact")} className="w-full rounded-none">Book an Appointment</Button>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="max-w-2xl z-10">
          <RevealText>
            <h1 className="text-5xl md:text-7xl font-serif text-primary leading-[1.05] tracking-tight mb-6">
              Senior expertise, <br />
              <span className="italic text-accent">without the overhead.</span>
            </h1>
          </RevealText>
          <RevealText delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
              We partner with organizations to elevate operations, strengthen quality systems, and empower the teams that make growth sustainable.
            </p>
          </RevealText>
          <RevealText delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-none text-base h-14 px-8 bg-primary hover:bg-primary/90" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Discuss Your Challenge
              </Button>
              <Button size="lg" variant="outline" className="rounded-none text-base h-14 px-8 border-primary/20 hover:bg-primary/5" onClick={() => document.getElementById("practices")?.scrollIntoView({ behavior: "smooth" })}>
                Explore Our Practices
              </Button>
            </div>
          </RevealText>
        </div>
        <div className="relative h-[400px] lg:h-[600px] w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10" />
            <img src={heroImg} alt="Sunlit modern office" className="w-full h-full object-cover shadow-2xl" />
          </motion.div>
          
          {/* Decorative element */}
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent/10 -z-10" />
          <div className="absolute -top-6 -right-6 w-32 h-32 border border-primary/20 -z-10" />
        </div>
      </div>
    </section>
  );
}

function Ethos() {
  return (
    <section id="ethos" className="py-24 md:py-32 bg-primary text-primary-foreground px-6">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
            We believe that complexity is the enemy of execution. True operational excellence is quiet, deliberate, and entirely measurable.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Founded on the belief that operational excellence drives sustainable growth, TD Advisory partners with organizations to unlock their full potential. We bring deep expertise in operations, quality management, and human resources to help organizations thrive.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function PracticeArea({ title, description, features, image, reversed = false }: { title: string, description: string, features: string[], image: string, reversed?: boolean }) {
  return (
    <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center py-16 md:py-24 border-b border-border/50 last:border-0`}>
      <div className="w-full lg:w-1/2">
        <FadeIn>
          <div className="relative h-[400px] md:h-[500px] w-full group overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 transition-opacity duration-500 group-hover:opacity-0 z-10" />
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </FadeIn>
      </div>
      <div className="w-full lg:w-1/2">
        <FadeIn>
          <h3 className="text-3xl md:text-4xl font-serif text-primary mb-6">{title}</h3>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {description}
          </p>
          <ul className="space-y-4">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-base text-foreground/80">{feature}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </div>
  );
}

function Practices() {
  return (
    <section id="practices" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-16 md:mb-24">
            <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-6xl font-serif text-primary">Focused disciplines.<br />Measurable impact.</h2>
          </div>
        </FadeIn>

        <PracticeArea 
          title="Operations Consulting"
          description="Streamline processes, optimize supply chains, and drive operational excellence across your organization."
          features={[
            "Process mapping & optimization",
            "Supply chain management",
            "Lean & Six Sigma implementation",
            "Operational cost reduction",
            "Operations Office Outsourcing",
            "Performance measurement systems"
          ]}
          image={operationsImg}
        />

        <PracticeArea 
          title="Laboratory Management"
          description="Implement robust quality systems, achieve ISO certifications, and build a culture of continuous improvement."
          features={[
            "Laboratory Design and Set-up",
            "ISO 15189 accreditation preparedness and implementation",
            "Quality management systems training for lab teams",
            "Internal audits, proficiency testing, and CAPA programs",
            "Document control, traceability, and quality manual development"
          ]}
          image={qualityImg}
          reversed
        />

        <PracticeArea 
          title="Human Resources Support"
          description="Transform your workforce strategy with talent development, organizational design, and change management."
          features={[
            "Organizational design & restructuring",
            "Talent management strategy",
            "Change management",
            "Leadership development programs",
            "HR policy & compliance"
          ]}
          image={hrImg}
        />
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      name: "Quality Management Systems Training",
      desc: "Hands-on training that gives your team fluency in QMS principles, documentation discipline, and audit readiness.",
    },
    {
      name: "ISO 15189 Accreditation Preparedness",
      desc: "End-to-end guidance for medical laboratories pursuing or maintaining ISO 15189 accreditation — from gap analysis to assessment day.",
    },
    {
      name: "Operations Management",
      desc: "Day-to-day operational leadership and improvement — workflow, throughput, capacity, and cost discipline.",
    },
    {
      name: "Process Design and Optimization",
      desc: "Mapping, redesigning, and instrumenting processes so quality and speed stop being a tradeoff.",
    },
    {
      name: "Laboratory Design and Setup",
      desc: "Greenfield and expansion projects — layout, equipment selection, workflow planning, and commissioning support.",
    },
    {
      name: "LIS and Healthcare Information Systems",
      desc: "Selection, configuration, and rollout of laboratory and healthcare information systems that actually fit how your team works.",
    },
    {
      name: "Regulations and Registrations",
      desc: "Navigating the regulatory and licensing requirements that stand between you and operating with confidence.",
    },
    {
      name: "Market Access and Penetration",
      desc: "Practical go-to-market support for clinical and lab services — positioning, partnerships, and commercial pathways.",
    },
    {
      name: "Business Strategy",
      desc: "Strategic clarity for owners and executive teams — where to focus, what to build, and what to walk away from.",
    },
    {
      name: "Team Building and Management",
      desc: "Hiring frameworks, role design, and leadership coaching so your people scale alongside your operation.",
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 md:mb-20">
            <div className="max-w-2xl">
              <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">Service Offerings</span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
                Ten disciplines.<br />One standard of work.
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-md">
              Every engagement is shaped from these capabilities — combined to fit the problem in front of you.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-primary/10 border border-primary/10">
          {services.map((s, i) => (
            <FadeIn key={s.name} delay={(i % 5) * 0.06}>
              <div className="group h-full bg-background p-5 md:p-6 flex flex-col transition-colors duration-300 hover:bg-primary">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="text-xs font-mono text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-primary/30 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
                </div>
                <h3 className="text-base md:text-lg font-serif text-primary leading-snug group-hover:text-primary-foreground transition-colors">
                  {s.name}
                </h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const steps = [
    { num: "01", title: "Discovery & Audit", desc: "We spend time on your floor, not just in your boardroom. We map the reality of your current state." },
    { num: "02", title: "Strategic Roadmap", desc: "We deliver a prioritized, pragmatic action plan with clear ROI and resource requirements." },
    { num: "03", title: "Execution Partnership", desc: "We work alongside your team to implement changes, providing interim leadership if necessary." },
    { num: "04", title: "Sustainable Handoff", desc: "We train your people and establish the KPIs needed to maintain improvements permanently." }
  ];

  return (
    <section id="approach" className="py-24 md:py-32 bg-secondary px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div>
              <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">How We Work</span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary">The TD Advisory Method</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-md">
              A structured, transparent approach to problem-solving that minimizes disruption to your daily operations.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1} className="relative">
              <div className="p-8 border border-primary/10 bg-background h-full flex flex-col group hover:border-accent transition-colors duration-300">
                <span className="text-5xl font-serif text-primary/20 mb-6 group-hover:text-accent/40 transition-colors">{step.num}</span>
                <h4 className="text-xl font-serif text-primary mb-4">{step.title}</h4>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message received.",
        description: "One of our senior partners will contact you within 24 hours.",
        duration: 5000,
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6">Let's discuss your operations.</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-md">
              Whether you're facing a specific bottleneck or need a comprehensive operational audit, we're ready to help.
            </p>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-sm uppercase tracking-widest text-accent font-bold mb-2">Office</h4>
                <p className="text-primary font-serif text-lg">Gbagada Phase 1, Lagos NG</p>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-widest text-accent font-bold mb-2">Direct</h4>
                <p className="text-primary font-serif text-lg">enquiries@tdadvisory.co</p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="bg-white p-8 md:p-12 border border-border shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-primary">Full Name</label>
                  <Input id="name" required className="rounded-none h-12 bg-background border-border focus-visible:ring-primary focus-visible:border-primary" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-primary">Company</label>
                  <Input id="company" required className="rounded-none h-12 bg-background border-border focus-visible:ring-primary focus-visible:border-primary" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-primary">Work Email</label>
                <Input id="email" type="email" required className="rounded-none h-12 bg-background border-border focus-visible:ring-primary focus-visible:border-primary" />
              </div>

              <div className="space-y-2">
                <label htmlFor="interest" className="text-sm font-medium text-primary">Area of Interest</label>
                <Select required>
                  <SelectTrigger className="rounded-none h-12 bg-background border-border focus:ring-primary focus:border-primary">
                    <SelectValue placeholder="Select a practice area" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none">
                    <SelectItem value="ops">Operations Consulting</SelectItem>
                    <SelectItem value="quality">Laboratory Quality (ISO 15189)</SelectItem>
                    <SelectItem value="hr">Human Resources Support</SelectItem>
                    <SelectItem value="other">General Enquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-primary">Brief Description of Needs</label>
                <Textarea id="message" required className="rounded-none min-h-[120px] bg-background border-border focus-visible:ring-primary focus-visible:border-primary resize-y" />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full rounded-none h-14 text-base bg-primary hover:bg-primary/90 mt-4 group">
                {isSubmitting ? "Sending..." : "Submit Enquiry"}
                {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              </Button>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
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
            <button onClick={() => document.getElementById("ethos")?.scrollIntoView({ behavior: "smooth" })} className="text-primary-foreground/80 hover:text-white text-left transition-colors">Home</button>
            <button onClick={() => document.getElementById("practices")?.scrollIntoView({ behavior: "smooth" })} className="text-primary-foreground/80 hover:text-white text-left transition-colors">About</button>
            <button onClick={() => document.getElementById("approach")?.scrollIntoView({ behavior: "smooth" })} className="text-primary-foreground/80 hover:text-white text-left transition-colors">Approach</button>
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
        <p className="mt-4 md:mt-0">Designed for operational excellence.</p>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Ethos />
        <Practices />
        <Services />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Switch>
            <Route path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
