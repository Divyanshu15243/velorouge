import { Bike, MapPin, Clock } from "lucide-react";

const stats = [
  { icon: Bike, value: "80+", label: "vélos disponibles" },
  { icon: MapPin, value: "12", label: "itinéraires secrets" },
  { icon: Clock, value: "4 500+", label: "explorateurs conquis" },
];

const About = () => (
  <section className="py-24 bg-background">
    <div className="container">
      <h2 className="font-display text-4xl md:text-5xl font-black leading-tight max-w-lg">
        Bien plus qu'une <em className="text-primary">simple location.</em>
      </h2>
      <p className="mt-6 text-muted-foreground max-w-xl text-lg">
        VéloRouge, c'est l'expérience Strasbourg réinventée. Chaque parcours raconte une histoire. Chaque coup de pédale vous rapproche de l'âme de la ville.
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
