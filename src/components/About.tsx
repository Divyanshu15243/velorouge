import { Bike, MapPin, Clock } from "lucide-react";

const stats = [
  { icon: Bike, value: "80+", label: "Vélos électriques disponibles" },
  { icon: MapPin, value: "12", label: "Itinéraires organisés" },
  { icon: Clock, value: "4 500+", label: "Cyclistes heureux" },
];

const About = () => (
  <section className="py-24 bg-background">
    <div className="container">
      <h2 className="font-display text-4xl md:text-5xl font-black leading-tight max-w-lg">
        Pas votre <em className="text-primary">location de vélo électrique</em> typique.
      </h2>
      <p className="mt-6 text-muted-foreground max-w-xl text-lg">
        VéloRouge est une plateforme premium d'abonnement et d'expérience vélo électrique basée à Strasbourg. 
        Nous croyons que chaque trajet devrait raconter une histoire.
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
