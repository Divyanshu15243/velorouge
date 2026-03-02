import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import rideSundowner from "@/assets/ride-sundowner.jpg";
import rideMarket from "@/assets/ride-market.jpg";
import rideRiver from "@/assets/ride-river.jpg";
import rideLocal from "@/assets/ride-local.jpg";
import { Clock, MapPin, Users, Star } from "lucide-react";

const rides = [
  {
    img: rideSundowner,
    title: "Strasbourg Sundowner",
    subtitle: "Chase the last light. The Ill canals at golden hour.",
    price: "€29",
    tag: "E-BIKE",
    duration: "2.5 hrs",
    time: "18:00 – 20:30",
    groupSize: "per person",
    rating: "4.9",
    description: "'We know exactly where to be in Strasbourg at 7:30pm. It isn't the cathedral square.' This is the hero product. It sells the feeling of a city alive with golden light, water reflections, and the particular buzz of early evening in France. The goal is not to show them Strasbourg — it is to make them feel they have discovered it.",
  },
  {
    img: rideMarket,
    title: "Bar Hop Petite France",
    subtitle: "Four bars. Two wheels. Zero regrets.",
    price: "€35",
    tag: "E-BIKE",
    duration: "3 hrs",
    time: "20:00 – 23:00",
    groupSize: "per person",
    rating: "4.8",
    description: "'This is not a pub crawl. It is a curated tasting route through four centuries of Alsatian drinking culture.' Strasbourg has one of the most compelling bar cultures in France — a unique blend of French wine tradition and German beer culture, with winstubs that have barely changed since the 1600s. This tour makes it legible and social without being touristy.",
  },
  {
    img: rideRiver,
    title: "Hidden Strasbourg",
    subtitle: "The courtyards, passages, and corners the guidebooks forgot.",
    price: "€24",
    tag: "SEGWAY + WALKING",
    duration: "2 hrs",
    time: "09:00 – 11:00 or 15:00 – 17:00",
    groupSize: "per person",
    rating: "4.9",
    description: "'We spent six months finding the 11 things in Strasbourg that no tour ever shows. This is all 11 of them.' This is the product for the curious traveller who has 'done' the cathedral and Petite France and wants to go deeper. Segway to connect the dots, walk to enter the spaces. A mix of architectural surprise, urban legend, and sensory detail.",
  },
  {
    img: rideLocal,
    title: "Rhine Border Run",
    subtitle: "France to Germany in 45 minutes. Coffee on the other side.",
    price: "€39",
    tag: "E-BIKE",
    duration: "3.5 hrs",
    time: "10:00 – 13:30",
    groupSize: "per person",
    rating: "4.7",
    description: "'No other city in Europe lets you casually cycle between two countries before lunch. We do it every Saturday.' Strasbourg's unique position on the French-German border is its single most powerful asset for tourism — and almost no operator exploits it properly. This route crosses the Rhine on the Passerelle Mimram (a magnificent pedestrian bridge), passes through the Jardin des Deux Rives, and lands in the German city of Kehl for a coffee and a cultural contrast.",
  },
];

const RidesPage = () => (
  <main>
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-16 bg-dark text-dark-foreground">
      <div className="container">
        <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">Our rides</p>
        <h1 className="font-display text-5xl md:text-7xl font-black leading-[0.95] max-w-3xl">
          Four ways to feel
          <br />
          <em className="text-primary">Strasbourg.</em>
        </h1>
        <p className="mt-6 text-dark-foreground/60 max-w-lg text-lg">
          Each ride is hand-crafted by locals who know every cobblestone, café, and hidden canal.
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
                  BOOK NOW — {r.price} / {r.groupSize}
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
