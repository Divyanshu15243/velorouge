import differenceimg from "@/assets/difference.png";
const features = [
  { title: "Zero Downtime Guarantee", desc: "If your bike has a problem mid-ride, we deliver a replacement. No questions." },
  { title: "Full Maintenance Included", desc: "Every rental and subscription includes complete mechanical cover." },
  { title: "Central Location", desc: "3-minute walk from Place Kléber. Easy pickup, easy return." },
  { title: "Flexible Plans", desc: "Hourly tourists to monthly residents — we have your ride covered." },
  { title: "Eco-Friendly", desc: "Replace 45,000 car km per year with zero-emission rides." },
  { title: "Simple App", desc: "Book, unlock, and navigate — all in one tap." },
];

const Difference = () => (
  <section className="grid md:grid-cols-2 min-h-[900px]">
    <div className="bg-[#1a1612] flex items-center justify-center px-12 lg:px-20">
      <div className="max-w-xl">
        <p className="text-primary text-xs tracking-[0.2em] uppercase mb-8">THE VELOROUGE DIFFERENCE</p>
        
        <h2 className="font-display text-white text-5xl lg:text-6xl font-bold leading-tight mb-8">
          Reliable.<br />
          Local.<br />
          <em className="text-primary">Yours.</em>
        </h2>
        
        <p className="text-[#7a726e] text-lg mb-12 leading-relaxed italic">
          Every bike is maintained daily. Every route is ridden monthly.<br />
          We don't rent out equipment — we hand you a city.
        </p>
        
        <div className="grid grid-cols-2 gap-x-12 gap-y-8">
          {features.map((f) => (
            <div key={f.title} className="border-l-2 border-primary pl-4">
              <h3 className="text-white text-sm font-medium mb-2">{f.title}</h3>
              <p className="text-[#7a726e] text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    <div className="bg-[#1A1612] relative overflow-hidden flex items-center justify-center">
      <img
        src={differenceimg}
        alt="VeloRouge mechanic maintaining a bicycle"
        className="max-w-[80%] max-h-[80%] object-contain"
      />
      <div className="absolute top-1/2 left-14 -translate-y-1/2 w-5 h-5 rounded-full bg-primary shadow-[0_0_0_6px_rgba(192,24,42,0.2)] animate-pulse" />
      <div className="absolute bottom-20 left-14 bg-primary p-9 w-60">
        <div className="font-display text-white text-6xl font-bold leading-none">98%</div>
        <div className="text-white/75 text-[10px] tracking-[0.12em] uppercase mt-2.5 leading-relaxed">
          BIKE AVAILABILITY RATE.<br />INDUSTRY STANDARD IS 71%.
        </div>
      </div>
    </div>
  </section>
);

export default Difference;
