import gigimage from "@/assets/hi.png"; 
const GigHero = () => {
  return (
    <section className="grid md:grid-cols-2 min-h-[900px]">
      <div className="bg-[#C8102E] flex items-center justify-center px-12 lg:px-20">
        <div className="max-w-xl">
          <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-8">For Gig Workers</p>
          
          <h1 className="text-white text-5xl lg:text-6xl font-serif font-bold leading-tight mb-8">
            Deliver faster.<br />
            Own your bike.<br />
            Change your life.
          </h1>
          
          <p className="text-white/80 text-lg mb-12 leading-relaxed">
            Lease-to-own for just €150/month. Own your bike after 24 months with no hidden fees and full maintenance included.
          </p>
          
          <div className="flex gap-16 mb-12">
            <div>
              <div className="text-white text-4xl font-serif font-bold">€23,700</div>
              <div className="text-white/60 text-xs tracking-[0.15em] uppercase mt-2">Avg. Savings Over 5 Years</div>
            </div>
            <div>
              <div className="text-white text-4xl font-serif font-bold">98%</div>
              <div className="text-white/60 text-xs tracking-[0.15em] uppercase mt-2">Uptime vs 71% Industry</div>
            </div>
          </div>
          
          <button className="bg-[#F5F5DC] text-black px-8 py-4 text-sm tracking-wide uppercase font-medium hover:bg-[#ECECD0] transition-colors">
            Apply for Gig Plan
          </button>
        </div>
      </div>
      
      <div className="bg-[#C8102E] relative overflow-hidden flex items-center justify-center">
        <img 
          src={gigimage} 
          alt="Minimalist white fixed-gear bicycle"
          className="max-w-[80%] max-h-[80%] object-contain"
        />
      </div>
    </section>
  );
};

export default GigHero;
