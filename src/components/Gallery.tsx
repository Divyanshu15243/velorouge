import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/1.png";
import gallery3 from "@/assets/2.png";

const Gallery = () => (
  <section className="py-24 bg-background">
    <div className="container">
      <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">#VéloRouge</p>
      <h2 className="font-display text-4xl md:text-5xl font-black leading-tight max-w-md">
        Voici à quoi ressemble
        <br />
        une journée à <em className="text-primary">Strasbourg.</em>
      </h2>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="aspect-[4/3] overflow-hidden">
          <img src={gallery2} alt="Petite France district" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
        </div>
        <div className="aspect-[4/3] overflow-hidden">
          <img src={gallery1} alt="Cafe terrace at night" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
        </div>
        <div className="aspect-[4/3] overflow-hidden">
          <img src={gallery3} alt="Indoor plant" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
);

export default Gallery;
