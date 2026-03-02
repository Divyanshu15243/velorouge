import { Bike, MapPin, Clock } from "lucide-react";

const stats = [
  { icon: Bike, value: "80+", label: "E-bikes available" },
  { icon: MapPin, value: "12", label: "Routes curated" },
  { icon: Clock, value: "4,500+", label: "Happy riders" },
];

const About = () => (
  <section className="py-24 bg-background">
    <div className="container">
      <h2 className="font-display text-4xl md:text-5xl font-black leading-tight max-w-lg">
        Not your typical <em className="text-primary">e-bike rental.</em>
      </h2>
      <p className="mt-6 text-muted-foreground max-w-xl text-lg">
        VéloRouge is a premium e-bike subscription & ride experience platform based in Strasbourg. 
        We believe every ride should tell a story.
      </p>

      <div className="mt-12 flex flex-wrap gap-8">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold font-display">{s.value}</div>
              <div className="text-base text-muted-foreground">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
