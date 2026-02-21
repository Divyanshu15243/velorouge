import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/about-hero.jpg";
import teamPhoto from "@/assets/7.png";
import { Bike, Heart, Users, Globe } from "lucide-react";

const values = [
  { icon: Bike, title: "Freedom first", desc: "We believe mobility should be effortless. No queues, no docks — just you and the open road." },
  { icon: Heart, title: "Local love", desc: "Every route, every recommendation — crafted by people who live and breathe Strasbourg." },
  { icon: Users, title: "Community driven", desc: "Our riders shape our product. From route suggestions to feature requests, we listen." },
  { icon: Globe, title: "Sustainability", desc: "Every ride replaces a car trip. We're committed to making Strasbourg greener, one pedal at a time." },
];

const timeline = [
  { year: "2021", event: "Founded in a garage in Petite France with 5 bikes." },
  { year: "2022", event: "Grew to 40 bikes and launched our first curated routes." },
  { year: "2023", event: "Subscription model launched — 500 members in 3 months." },
  { year: "2024", event: "Expanded fleet to 80+ bikes, added GPS & smart features." },
  { year: "2025", event: "4,500+ happy riders. Strasbourg's #1 bike experience." },
];

const AboutPage = () => (
  <main>
    <Navbar />

    {/* Hero */}
    <section className="relative min-h-[60vh] flex items-end pb-20 bg-dark overflow-hidden pt-20">
      <img src={aboutHero} alt="Strasbourg aerial view" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
      <div className="container relative z-10">
        <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">About us</p>
        <h1 className="font-display text-5xl md:text-7xl font-black text-dark-foreground leading-[0.95] max-w-3xl">
          Born in
          <br />
          <em className="text-primary">Strasbourg.</em>
          <br />
          Built for riders.
        </h1>
      </div>
    </section>

    {/* Mission */}
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
              We started with a
              <br />
              simple <em className="text-primary">question.</em>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-md">
              Why is it so hard to just… ride a bike in the city? No complicated apps, no broken docking stations. 
              VeloRouge was born from the frustration of riders who wanted something better.
            </p>
            <p className="mt-4 text-muted-foreground max-w-md">
              Today, we're Strasbourg's leading bike experience platform — serving over 4,500 riders 
              with premium bikes, curated routes, and a community that feels like home.
            </p>
          </div>
          <div className="aspect-video overflow-hidden">
            <img src={teamPhoto} alt="VeloRouge team" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-24 bg-dark text-dark-foreground">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-16">
          What we
          <br />
          stand <em className="text-primary">for.</em>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v) => (
            <div key={v.title}>
              <v.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-xl font-bold mb-2">{v.title}</h3>
              <p className="text-sm text-dark-foreground/60">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-24 bg-background">
      <div className="container max-w-2xl">
        <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-16 text-center">
          Our <em className="text-primary">journey.</em>
        </h2>
        <div className="space-y-0">
          {timeline.map((t, i) => (
            <div key={t.year} className="flex gap-6 items-start">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0 mt-1.5" />
                {i < timeline.length - 1 && <div className="w-px h-16 bg-border" />}
              </div>
              <div className="pb-8">
                <div className="font-display text-xl font-bold text-primary">{t.year}</div>
                <p className="text-muted-foreground mt-1">{t.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </main>
);

export default AboutPage;
