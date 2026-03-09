import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import rideSundowner from "@/assets/ride-sundowner.jpg";
import rideMarket from "@/assets/Bar Hop Petite France.png";
import rideRiver from "@/assets/ride-river.jpg";
import rideLocal from "@/assets/ride-local.jpg";
import { Clock, MapPin, Users, Star } from "lucide-react";

const rides = [
  {
    img: rideSundowner,
    title: "Coucher de soleil à Strasbourg",
    subtitle: "Chassez la dernière lumière. Les canaux de l'Ill à l'heure dorée.",
    price: "29€",
    tag: "VÉLO ÉLECTRIQUE",
    duration: "2,5 h",
    time: "18h00 – 20h30",
    groupSize: "par personne",
    rating: "4.9",
    description: "Nous savons exactement où être à Strasbourg à 19h30. Ce n'est pas la place de la cathédrale. C'est le produit phare. Il vend le sentiment d'une ville vivante avec une lumière dorée, des reflets d'eau et l'ambiance particulière du début de soirée en France. L'objectif n'est pas de leur montrer Strasbourg — c'est de leur faire sentir qu'ils l'ont découvert.",
  },
  {
    img: rideMarket,
    title: "Tournée des bars Petite France",
    subtitle: "Quatre bars. Deux roues. Zéro regret.",
    price: "35€",
    tag: "VÉLO ÉLECTRIQUE",
    duration: "3 h",
    time: "20h00 – 23h00",
    groupSize: "par personne",
    rating: "4.8",
    description: "Ce n'est pas une tournée des bars. C'est un itinéraire de dégustation organisé à travers quatre siècles de culture de la boisson alsacienne. Strasbourg possède l'une des cultures de bar les plus captivantes de France — un mélange unique de tradition vinicole française et de culture de la bière allemande, avec des winstubs qui ont à peine changé depuis les années 1600. Cette visite la rend lisible et sociale sans être touristique.",
  },
  {
    img: rideRiver,
    title: "Strasbourg caché",
    subtitle: "Les cours, passages et coins que les guides ont oubliés.",
    price: "24€",
    tag: "VÉLO ÉLECTRIQUE",
    duration: "2 h",
    time: "09h00 – 11h00 ou 15h00 – 17h00",
    groupSize: "par personne",
    rating: "4.9",
    description: "Nous avons passé six mois à trouver les 11 choses à Strasbourg qu'aucune visite ne montre jamais. Voici les 11. C'est le produit pour le voyageur curieux qui a 'fait' la cathédrale et la Petite France et veut aller plus loin. Segway pour relier les points, marche pour entrer dans les espaces. Un mélange de surprise architecturale, de légende urbaine et de détail sensoriel.",
  },
  {
    img: rideLocal,
    title: "Frontière du Rhin",
    subtitle: "De la France à l'Allemagne en 45 minutes. Café de l'autre côté.",
    price: "39€",
    tag: "VÉLO ÉLECTRIQUE",
    duration: "3,5 h",
    time: "10h00 – 13h30",
    groupSize: "par personne",
    rating: "4.7",
    description: "Aucune autre ville d'Europe ne vous permet de faire du vélo entre deux pays avant le déjeuner. Nous le faisons tous les samedis. La position unique de Strasbourg à la frontière franco-allemande est son atout le plus puissant pour le tourisme — et presque aucun opérateur ne l'exploite correctement. Cet itinéraire traverse le Rhin sur la Passerelle Mimram (un magnifique pont piétonnier), passe par le Jardin des Deux Rives et arrive dans la ville allemande de Kehl pour un café et un contraste culturel.",
  },
];

const RidesPage = () => (
  <main>
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-16 bg-dark text-dark-foreground">
      <div className="container">
        <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">Nos circuits</p>
        <h1 className="font-display text-5xl md:text-7xl font-black leading-[0.95] max-w-3xl">
          Quatre façons de ressentir
          <br />
          <em className="text-primary">Strasbourg.</em>
        </h1>
        <p className="mt-6 text-dark-foreground/60 max-w-lg text-lg">
          Chaque trajet est conçu à la main par des locaux qui connaissent chaque pavé, café et canal caché.
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
                  RÉSERVER MAINTENANT — {r.price} / {r.groupSize}
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
