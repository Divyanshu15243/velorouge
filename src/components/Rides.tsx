import rideSundowner from "@/assets/ride-sundowner.jpg";
import rideMarket from "@/assets/market.png";
import rideRiver from "@/assets/ride-river.jpg";
import rideLocal from "@/assets/ride-local.jpg";

const rides = [
  { img: rideSundowner, title: "Strasbourg Sundowner", price: "€59", tag: "Bestseller" },
  { img: rideMarket, title: "Bites & Market Run", price: "€39", tag: null },
  { img: rideRiver, title: "Rhine River Route", price: "€59", tag: "Popular" },
  { img: rideLocal, title: "Strasbourg Local Ride", price: "€49", tag: null },
];

const Rides = () => (
  <section id="rides" className="py-24 bg-background">
    <div className="container">
      <h2 className="font-display text-4xl md:text-5xl font-black leading-tight max-w-md">
        Four ways
        <br />
        to feel <em className="text-primary">Strasbourg.</em>
      </h2>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {rides.map((r) => (
          <div key={r.title} className="group cursor-pointer">
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
            <p className="text-muted-foreground text-sm">From {r.price}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Rides;
