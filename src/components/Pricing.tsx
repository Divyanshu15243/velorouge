import { Check } from "lucide-react";

const plans = [
  { name: "Single", price: "€12", period: "/ride", features: ["One-time ride", "Any route", "Basic support"] },
  { name: "Explorer", price: "€39", period: "/mo", features: ["4 rides/month", "Priority booking", "Route recommendations"], popular: true },
  { name: "Weekly", price: "€19", period: "/wk", features: ["Unlimited weekday rides", "Flexible schedule", "Email support"] },
  { name: "Go Monthly", price: "€69", period: "/mo", features: ["Unlimited rides", "All routes", "24/7 support", "Guest passes"] },
];

const Pricing = () => (
  <section id="pricing" className="py-24 bg-dark text-dark-foreground">
    <div className="container">
      <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
        Your city.
        <br />
        Your <em className="text-primary">pace.</em>
      </h2>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`p-6 border ${p.popular ? "border-primary bg-dark-surface" : "border-dark-surface"} flex flex-col`}
          >
            <div className="text-sm text-dark-foreground/60 mb-2">{p.name}</div>
            <div className="font-display text-3xl font-bold">
              {p.price}
              <span className="text-sm font-body text-dark-foreground/50">{p.period}</span>
            </div>
            <ul className="mt-6 space-y-3 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-dark-foreground/70">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className={`mt-6 block text-center py-3 text-sm font-semibold transition-colors ${
                p.popular
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border border-dark-foreground/20 text-dark-foreground hover:border-dark-foreground/40"
              }`}
            >
              Get started
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
