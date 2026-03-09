import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import smartHelmet from "@/assets/smart-helmet.jpg";
import smartGps from "@/assets/gps.png";
import { Shield, MapPin, Bell, Smartphone, Lock, Eye, Zap, Wifi } from "lucide-react";

const safetyFeatures = [
  { icon: Shield, title: "Protection contre le vol", desc: "Chaque vélo électrique VéloRouge est couvert contre le vol. Suivi GPS 24h/24 et 7j/7 avec alertes instantanées en cas de déplacement non autorisé." },
  { icon: Lock, title: "Serrure intelligente", desc: "Verrouillez et déverrouillez votre vélo électrique depuis votre téléphone. Pas de clés, pas de codes — juste appuyez et partez." },
  { icon: Bell, title: "Détection d'accident", desc: "Les capteurs intégrés détectent les chutes et les impacts. Les contacts d'urgence sont notifiés automatiquement si vous ne répondez pas." },
  { icon: Eye, title: "Visibilité nocturne", desc: "Lumières LED intégrées avec luminosité automatique. Soyez visible à plus de 200 m dans toutes les conditions." },
];

const smartFeatures = [
  { icon: MapPin, title: "Suivi GPS en direct", desc: "Sachez où se trouve votre vélo électrique à tout moment. Localisation en temps réel visible dans l'application VéloRouge." },
  { icon: Smartphone, title: "Contrôle par application", desc: "Gérez votre vélo électrique, suivez les trajets, vérifiez l'état de maintenance et réservez des itinéraires — le tout depuis une seule application." },
  { icon: Zap, title: "Surveillance de la batterie", desc: "Pour les abonnés de vélos électriques, surveillez le niveau de batterie et trouvez le point de recharge le plus proche." },
  { icon: Wifi, title: "Mises à jour OTA", desc: "Votre vélo électrique devient plus intelligent avec le temps. Les mises à jour du firmware sont envoyées sans fil, améliorant automatiquement les performances." },
];

const SafeSmartPage = () => (
  <main>
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-16 bg-dark text-dark-foreground">
      <div className="container">
        <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">Sûr & Intelligent</p>
        <h1 className="font-display text-5xl md:text-7xl font-black leading-[0.95] max-w-3xl">
          Roulez en sécurité.
          <br />
          Roulez <em className="text-primary">intelligemment.</em>
        </h1>
        <p className="mt-6 text-dark-foreground/60 max-w-lg text-lg">
          Chaque vélo électrique VéloRouge est équipé d'une technologie de sécurité et intelligente de pointe.
        </p>
      </div>
    </section>

    {/* Safety */}
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
              La sécurité n'est
              <br />
              pas une <em className="text-primary">option.</em>
            </h2>
            <div className="mt-10 space-y-8">
              {safetyFeatures.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold">{f.title}</h3>
                    <p className="text-base text-muted-foreground mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square overflow-hidden">
            <img src={smartHelmet} alt="Casque intelligent" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    {/* Smart */}
    <section className="py-24 bg-dark text-dark-foreground">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-square overflow-hidden md:order-1">
            <img src={smartGps} alt="Navigation GPS sur vélo" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="md:order-2">
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
              Plus intelligent
              <br />
              à chaque <em className="text-primary">trajet.</em>
            </h2>
            <div className="mt-10 space-y-8">
              {smartFeatures.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold">{f.title}</h3>
                    <p className="text-base text-dark-foreground/60 mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-24 bg-background">
      <div className="container text-center">
        <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
          Les chiffres parlent <em className="text-primary">d'eux-mêmes.</em>
        </h2>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "0", label: "Accidents en 2025" },
            { value: "99,8%", label: "Fiabilité de disponibilité" },
            { value: "<2min", label: "Temps de réponse moyen" },
            { value: "24/7", label: "Surveillance en direct" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl font-black text-primary">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </main>
);

export default SafeSmartPage;
