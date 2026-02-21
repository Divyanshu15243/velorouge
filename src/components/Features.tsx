import { Shield, Wrench, MapPin, Clock, Heart, Zap } from "lucide-react";

const features = [
  { icon: Shield, title: "Theft protection", desc: "Every bike is covered against theft and damage." },
  { icon: Wrench, title: "Free maintenance", desc: "Regular tune-ups and repairs at no extra cost." },
  { icon: MapPin, title: "GPS tracking", desc: "Real-time location tracking for peace of mind." },
  { icon: Clock, title: "24h delivery", desc: "Get your bike delivered within 24 hours." },
  { icon: Heart, title: "Curated routes", desc: "Hand-picked routes by local Strasbourg experts." },
  { icon: Zap, title: "Swap anytime", desc: "Switch your bike model whenever you want." },
];

const Features = () => (
  <section className="py-24 bg-background">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
            Everything
            <br />
            you need
            <br />
            to <em className="text-primary">ride.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((f) => (
            <div key={f.title}>
              <f.icon className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-display text-lg font-bold mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Features;
