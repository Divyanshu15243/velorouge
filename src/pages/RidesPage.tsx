import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import rideSundowner from "@/assets/ride-sundowner.jpg";
import rideMarket from "@/assets/Bar Hop Petite France.png";
import rideRiver from "@/assets/ride-river.jpg";
import rideLocal from "@/assets/ride-local.jpg";
import { Clock } from "lucide-react";

const rides = [
  {
    img: rideSundowner,
    title: "Strasbourg Sundowner",
    subtitle: "Chassez les derniers rayons. Les canaux de l'Ill à l'heure dorée.",
    price: "29€",
    tag: "VÉLO ÉLECTRIQUE",
    duration: "2h30",
    time: "18h00 – 20h30",
    groupSize: "personne",
    description: "On sait exactement où être à Strasbourg à 19h30. Et ce n'est pas la place de la Cathédrale. C'est notre balade phare — celle qui capture l'âme d'une ville baignée de lumière dorée, les reflets sur l'eau, cette effervescence si particulière du début de soirée en France. L'objectif n'est pas de vous montrer Strasbourg — c'est de vous faire sentir que vous l'avez découverte.",
  },
  {
    img: rideMarket,
    title: "Bar Hop Petite France",
    subtitle: "Quatre bars. Deux roues. Zéro regret.",
    price: "35€",
    tag: "VÉLO ÉLECTRIQUE",
    duration: "3h",
    time: "20h00 – 23h00",
    groupSize: "personne",
    description: "Ce n'est pas une tournée des bars. C'est un voyage initiatique à travers quatre siècles de culture alsacienne du verre. Strasbourg possède l'une des scènes bar les plus fascinantes de France — un mélange unique de tradition viticole française et de culture brassicole allemande, avec des winstubs qui n'ont presque pas changé depuis le XVIIe siècle. Cette balade rend tout ça accessible et convivial, sans tomber dans le piège touristique.",
  },
  {
    img: rideRiver,
    title: "Strasbourg Insolite",
    subtitle: "Les cours, les passages, les recoins que les guides ont oubliés.",
    price: "24€",
    tag: "VÉLO ÉLECTRIQUE",
    duration: "2h",
    time: "09h00 – 11h00 ou 15h00 – 17h00",
    groupSize: "personne",
    description: "On a passé six mois à dénicher les 11 trésors de Strasbourg qu'aucune visite ne montre jamais. Voici les 11. C'est la balade pour le voyageur curieux qui a « fait » la Cathédrale et la Petite France et qui veut aller plus loin. Segway pour relier les points, marche pour pénétrer les espaces. Un mélange de surprises architecturales, de légendes urbaines et de détails sensoriels.",
  },
  {
    img: rideLocal,
    title: "Échappée Franco-Allemande",
    subtitle: "De la France à l'Allemagne en 45 minutes. Café de l'autre côté.",
    price: "39€",
    tag: "VÉLO ÉLECTRIQUE",
    duration: "3h30",
    time: "10h00 – 13h30",
    groupSize: "personne",
    description: "Aucune autre ville en Europe ne vous permet de pédaler tranquillement entre deux pays avant le déjeuner. Nous, on le fait tous les samedis. La position unique de Strasbourg à la frontière franco-allemande est son atout touristique le plus puissant — et presque aucun opérateur ne l'exploite vraiment. Cet itinéraire traverse le Rhin sur la Passerelle Mimram (un pont piétonnier magnifique), passe par le Jardin des Deux Rives et atterrit dans la ville allemande de Kehl pour un café et un contraste culturel saisissant.",
  },
];

const RidesPage = () => (
  <main>
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-16 bg-dark text-dark-foreground">
      <div className="container">
        <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">Nos balades</p>
        <h1 className="font-display text-5xl md:text-7xl font-black leading-[0.95] max-w-3xl">
          Quatre façons de ressentir
          <br />
          <em className="text-primary">Strasbourg.</em>
        </h1>
        <p className="mt-6 text-dark-foreground/60 max-w-lg text-lg">
          Chaque balade est pensée par des locaux qui connaissent chaque pavé, chaque café, chaque canal secret.
        </p>
      </div>
    </section>

    {/* Rides List */}
    <section className="py-24 bg-background">
      <div className="container space-y-20">
        {rides.map((r, i) => (
          <div key={r.title} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
            <div className={`aspect-[4/3] overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <img src={r.img} alt={r.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              {r.tag && (
                <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 mb-3 tracking-wider">
                  {r.tag}
                </span>
              )}
              <h2 className="font-display text-3xl md:text-4xl font-black">{r.title}</h2>
              <p className="mt-2 text-lg text-muted-foreground italic">{r.subtitle}</p>
              <p className="mt-4 text-base text-muted-foreground max-w-md leading-relaxed">{r.description}</p>

              <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-primary" />
                  {r.duration} · {r.time}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <a href="#" className="bg-primary text-primary-foreground px-8 py-3 font-semibold text-sm hover:bg-primary/90 transition-colors">
                  RÉSERVER — {r.price} / {r.groupSize}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <Footer />
  </main>
);

export default RidesPage;
