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
    price: "€59",
    tag: "Bestseller",
    duration: "2.5 hrs",
    distance: "12 km",
    groupSize: "2–8",
    rating: "4.9",
    description: "Watch the sun dip behind the Cathedral as you cruise through cobblestone streets, past half-timbered houses, ending with a glass of Alsatian wine at a riverside terrace.",
  },
  {
    img: rideMarket,
    title: "Bites & Market Run",
    price: "€39",
    tag: null,
    duration: "1.5 hrs",
    distance: "6 km",
    groupSize: "2–12",
    rating: "4.8",
    description: "A morning ride through Strasbourg's best food markets. Sample local cheeses, charcuterie, and fresh pretzels while discovering hidden culinary gems.",
  },
  {
    img: rideRiver,
    title: "Rhine River Route",
    price: "€59",
    tag: "Popular",
    duration: "3 hrs",
    distance: "18 km",
    groupSize: "2–6",
    rating: "4.9",
    description: "Follow the Rhine from the heart of the city to the French-German border. Flat, scenic, and peaceful — perfect for those who want distance without the difficulty.",
  },
  {
    img: rideLocal,
    title: "Strasbourg Local Ride",
    price: "€49",
    tag: null,
    duration: "2 hrs",
    distance: "10 km",
    groupSize: "2–10",
    rating: "4.7",
    description: "See Strasbourg through the eyes of a local. Off-the-beaten-path neighbourhoods, secret street art, and the best coffee stops in town.",
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
              {r.tag && (
                <span className="relative -mt-10 ml-4 inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1">
                  {r.tag}
                </span>
              )}
            </div>
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <h2 className="font-display text-3xl md:text-4xl font-black">{r.title}</h2>
              <p className="mt-4 text-muted-foreground max-w-md">{r.description}</p>

              <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-primary" />
                  {r.duration}
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-primary" />
                  {r.distance}
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-primary" />
                  {r.groupSize}
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-primary" />
                  {r.rating}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <a href="#" className="bg-primary text-primary-foreground px-8 py-3 font-semibold text-sm hover:bg-primary/90 transition-colors">
                  BOOK NOW — {r.price}
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
