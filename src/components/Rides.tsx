import { Link } from "react-router-dom";
import rideSundowner from "@/assets/ride-sundowner.jpg";
import rideMarket from "@/assets/Bar Hop Petite France.png";
import rideRiver from "@/assets/ride-river.jpg";
import rideLocal from "@/assets/ride-local.jpg";

const rides = [
  { img: rideSundowner, title: "Coucher de soleil à Strasbourg", price: "29€", tag: "Meilleure vente" },
  { img: rideMarket, title: "Tournée des bars Petite France", price: "35€", tag: null },
  { img: rideRiver, title: "Strasbourg caché", price: "24€", tag: "Populaire" },
  { img: rideLocal, title: "Frontière du Rhin", price: "39€", tag: null },
];

const Rides = () => (
  <section id="rides" className="py-24 bg-background">
    <div className="container">
      <h2 className="font-display text-4xl md:text-5xl font-black leading-tight max-w-md">
        Quatre façons
        <br />
        de ressentir <em className="text-primary">Strasbourg.</em>
      </h2>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {rides.map((r) => (
          <Link key={r.title} to="/visitors" className="group cursor-pointer">
            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src={r.img}
                alt={r.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {r.tag && (
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1">
                  {r.tag}
                </span>
              )}
            </div>
            <h3 className="mt-4 font-display text-lg font-bold">{r.title}</h3>
            <p className="text-muted-foreground text-sm">À partir de {r.price}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Rides;
