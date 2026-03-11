import differenceimg from "@/assets/difference.png";
import { useTranslation } from "react-i18next";

const Difference = () => {
  const { t } = useTranslation();

  const features = [
    { title: "Zero downtime guarantee", desc: "If your e-bike has an issue on the road, we deliver a replacement. No questions." },
    { title: "Full maintenance included", desc: "Every rental and subscription includes complete mechanical coverage." },
    { title: "Central location", desc: "3 minutes walk from Kléber Square. Easy pickup, easy return." },
    { title: "Flexible plans", desc: "From hourly tourists to monthly residents — we've got your trip covered." },
    { title: "Eco-friendly", desc: "Replace 45,000 km of car travel per year with zero-emission trips." },
    { title: "Simple app", desc: "Book, unlock, and navigate — all in one click." },
  ];

  return (
    <section className="grid md:grid-cols-2 min-h-[600px] md:min-h-[900px]">
      <div className="bg-[#1a1612] flex items-center justify-center px-6 py-12 md:px-12 lg:px-20">
        <div className="max-w-xl">
          <p className="text-primary text-xs tracking-[0.2em] uppercase mb-6 md:mb-8">THE VELOROUGE DIFFERENCE</p>
          
          <h2 className="font-display text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 md:mb-8">
            Reliable.<br />
            Local.<br />
            <em className="text-primary">For you.</em>
          </h2>
          
          <p className="text-[#7a726e] text-base md:text-lg mb-8 md:mb-12 leading-relaxed italic">
            Every e-bike is maintained daily. Every route is ridden monthly.<br />
            We don't rent equipment — we hand you a city.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-6 md:gap-y-8">
            {features.map((f) => (
              <div key={f.title} className="border-l-2 border-primary pl-4">
                <h3 className="text-white text-sm font-medium mb-2">{f.title}</h3>
                <p className="text-[#7a726e] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-[#1A1612] relative overflow-hidden flex items-center justify-center min-h-[400px] md:min-h-0">
        <img
          src={differenceimg}
          alt="VeloRouge mechanic maintaining a bicycle"
          className="max-w-[80%] max-h-[80%] object-contain"
        />
        <div className="absolute top-1/2 left-8 md:left-14 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary shadow-[0_0_0_6px_rgba(192,24,42,0.2)] animate-pulse" />
        <div className="absolute bottom-12 md:bottom-20 left-8 md:left-14 bg-primary p-6 md:p-9 w-48 md:w-60">
          <div className="font-display text-white text-4xl md:text-6xl font-bold leading-none">98%</div>
          <div className="text-white/75 text-[9px] md:text-[10px] tracking-[0.12em] uppercase mt-2 md:mt-2.5 leading-relaxed">
            BIKE AVAILABILITY RATE.<br />INDUSTRY STANDARD IS 71%.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Difference;
