import { Check } from "lucide-react";

const plans = [
  { 
    name: "Touristes & Visiteurs", 
    price: "49€", 
    period: "/circuit", 
    features: [
      "Expérience guidée de la ville",
      "Itinéraires panoramiques à travers Strasbourg",
      "Arrêts photo & conseils locaux",
      "Formation adaptée aux débutants"
    ],
    cta: "Réserver maintenant"
  },
  { 
    name: "Résidents & Étudiants", 
    price: "15€", 
    period: "/semaine", 
    features: [
      "Mobilité quotidienne rapide",
      "Forfaits hebdomadaires flexibles",
      "Fiable et économique",
      "Support prioritaire"
    ],
    popular: true,
    cta: "S'engager maintenant"
  },
  { 
    name: "Équipe de livraison", 
    price: "99€", 
    period: "/mois", 
    features: [
      "Trajets illimités en semaine",
      "Accès campus & ville",
      "Tarification d'abonnement intelligente",
      "Parfait pour les trajets quotidiens"
    ],
    cta: "Louer maintenant"
  },
];

const Pricing = () => (
  <section id="pricing" className="py-24 bg-dark text-dark-foreground">
    <div className="container">
      <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
        Une ville.
        <br />
        Trois façons de <em className="text-primary">bouger.</em>
      </h2>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <li key={f} className="flex items-center gap-2 text-base text-dark-foreground/70">
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
              {p.cta || "Commencer"}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
