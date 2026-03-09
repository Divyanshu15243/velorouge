import { Shield, Wrench, MapPin, Bike, DollarSign } from "lucide-react";

const features = [
  { icon: MapPin, title: "Suivi GPS", desc: "Suivi de localisation en temps réel pour votre tranquillité d'esprit. Ne perdez jamais votre vélo." },
  { icon: Bike, title: "Segway + Vélos électriques", desc: "Choisissez entre des vélos électriques premium et des Segways pour votre aventure. Parfait pour tous les niveaux." },
  { icon: Shield, title: "Protection contre le vol", desc: "Chaque vélo électrique est couvert contre le vol et les dommages. Roulez sans souci." },
  { icon: MapPin, title: "Itinéraires organisés", desc: "Itinéraires sélectionnés par des experts locaux de Strasbourg. Découvrez des joyaux cachés." },
  { icon: Wrench, title: "Entretien gratuit", desc: "Réglages et réparations réguliers sans frais supplémentaires. Toujours prêt à rouler." },
  { icon: DollarSign, title: "Économies moyennes", desc: "Économisez jusqu'à 23 700€ sur 5 ans par rapport à la propriété. Investissement intelligent." },
];

const Features = () => (
  <section className="py-24 bg-background">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
            Tout ce dont
            <br />
            vous avez besoin
            <br />
            pour <em className="text-primary">rouler.</em>
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
