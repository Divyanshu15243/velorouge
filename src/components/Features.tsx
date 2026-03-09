import { Shield, Wrench, MapPin, Bike, DollarSign } from "lucide-react";

const features = [
  { icon: MapPin, title: "Localisation GPS", desc: "Suivi en temps réel pour votre tranquillité. Ne perdez jamais votre vélo." },
  { icon: Bike, title: "Vélos & Segways premium", desc: "Adapté à tous les niveaux. Choisissez votre monture idéale pour explorer la ville." },
  { icon: Shield, title: "Protection antivol", desc: "Chaque vélo assuré contre vol et dommages. Roulez l'esprit tranquille." },
  { icon: MapPin, title: "Parcours sur mesure", desc: "Itinéraires conçus par des Strasbourgeois passionnés. Découvrez les secrets de la ville." },
  { icon: Wrench, title: "Entretien offert", desc: "Révisions et réparations sans frais. Toujours prêt à rouler." },
  { icon: DollarSign, title: "Économies garanties", desc: "Jusqu'à 23 700€ sur 5 ans. Un investissement intelligent pour votre mobilité." },
];

const Features = () => (
  <section className="py-24 bg-background">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
            Tout ce qu'il faut
            <br />
            pour rouler
            <br />
            l'esprit <em className="text-primary">libre.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((f) => (
            <div key={f.title}>
              <f.icon className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-display text-lg font-bold mb-1">{f.title}</h3>
              <p className="text-base text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Features;
