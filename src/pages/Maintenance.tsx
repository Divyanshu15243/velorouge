import logo from "@/assets/logo.png";

const Maintenance = () => (
  <div className="min-h-screen bg-dark flex flex-col items-center justify-center text-center px-6">
    <img src={logo} alt="VeloRouge" className="h-14 mb-8 opacity-90" />
    <h1 className="font-display text-4xl md:text-5xl font-black text-white mb-4">
      🚧 Under Maintenance
    </h1>
    <p className="text-dark-foreground/60 text-lg max-w-md">
      We're working on something great. We'll be back shortly — merci pour votre patience!
    </p>
  </div>
);

export default Maintenance;
