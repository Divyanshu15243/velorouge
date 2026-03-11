import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import rideSundowner from "@/assets/ride-sundowner.jpg";
import rideMarket from "@/assets/Bar Hop Petite France.png";
import rideRiver from "@/assets/ride-river.jpg";
import rideLocal from "@/assets/ride-local.jpg";
import { Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const RidesPage = () => {
  const { t } = useTranslation();

  const rides = [
    {
      img: rideSundowner,
      title: t('rides.ride1'),
      subtitle: "Chase the last rays. The Ill canals at golden hour.",
      price: "29€",
      tag: "ELECTRIC BIKE",
      duration: "2h30",
      time: "18h00 – 20h30",
      groupSize: "person",
      description: "We know exactly where to be in Strasbourg at 19h30. And it's not Cathedral Square. This is our flagship ride — the one that captures the soul of a city bathed in golden light, reflections on the water, that special buzz of early evening in France. The goal isn't to show you Strasbourg — it's to make you feel like you've discovered it.",
    },
    {
      img: rideMarket,
      title: t('rides.ride2'),
      subtitle: "Four bars. Two wheels. Zero regrets.",
      price: "35€",
      tag: "ELECTRIC BIKE",
      duration: "3h",
      time: "20h00 – 23h00",
      groupSize: "person",
      description: "This isn't a bar crawl. It's an initiation journey through four centuries of Alsatian glass culture. Strasbourg has one of France's most fascinating bar scenes — a unique blend of French wine tradition and German brewing culture, with winstubs that have barely changed since the 17th century. This ride makes it all accessible and convivial, without falling into the tourist trap.",
    },
    {
      img: rideRiver,
      title: t('rides.ride3'),
      subtitle: "The courtyards, passages, and corners that guides forgot.",
      price: "24€",
      tag: "ELECTRIC BIKE",
      duration: "2h",
      time: "09h00 – 11h00 or 15h00 – 17h00",
      groupSize: "person",
      description: "We spent six months uncovering the 11 treasures of Strasbourg that no tour ever shows. Here they are. This is the ride for the curious traveler who's 'done' the Cathedral and Petite France and wants to go deeper. Segway to connect the dots, walking to enter the spaces. A mix of architectural surprises, urban legends, and sensory details.",
    },
    {
      img: rideLocal,
      title: t('rides.ride4'),
      subtitle: "From France to Germany in 45 minutes. Coffee on the other side.",
      price: "39€",
      tag: "ELECTRIC BIKE",
      duration: "3h30",
      time: "10h00 – 13h30",
      groupSize: "person",
      description: "No other city in Europe lets you pedal leisurely between two countries before lunch. We do it every Saturday. Strasbourg's unique position at the Franco-German border is its most powerful tourist asset — and almost no operator really exploits it. This route crosses the Rhine on the Mimram Footbridge (a magnificent pedestrian bridge), passes through the Two Banks Garden, and lands in the German city of Kehl for coffee and striking cultural contrast.",
    },
  ];

  return (
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
            Each ride is designed by locals who know every cobblestone, every café, every secret canal.
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
                    BOOK — {r.price} / {r.groupSize}
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
};

export default RidesPage;
