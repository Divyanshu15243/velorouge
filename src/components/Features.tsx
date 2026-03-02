import { Shield, Wrench, MapPin, Bike, DollarSign } from "lucide-react";

const features = [
  { icon: MapPin, title: "GPS tracking", desc: "Real-time location tracking for peace of mind. Never lose your ride." },
  { icon: Bike, title: "Segway + E-bike rides", desc: "Choose between premium e-bikes and Segways for your adventure. Perfect for all skill levels." },
  { icon: Shield, title: "Theft protection", desc: "Every e-bike is covered against theft and damage. Ride worry-free." },
  { icon: MapPin, title: "Curated routes", desc: "Hand-picked routes by local Strasbourg experts. Discover hidden gems." },
  { icon: Wrench, title: "Free maintenance", desc: "Regular tune-ups and repairs at no extra cost. Always ride-ready." },
  { icon: DollarSign, title: "Average savings", desc: "Save up to €23,700 over 5 years compared to ownership. Smart investment." },
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
              <p className="text-base text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Features;
