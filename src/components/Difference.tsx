import differenceimg from "@/assets/difference.png";
const features = [
  { title: "Garantie zéro temps d'arrêt", desc: "Si votre vélo électrique a un problème en cours de route, nous livrons un remplacement. Sans questions." },
  { title: "Entretien complet inclus", desc: "Chaque location et abonnement comprend une couverture mécanique complète." },
  { title: "Emplacement central", desc: "À 3 minutes à pied de la Place Kléber. Retrait facile, retour facile." },
  { title: "Forfaits flexibles", desc: "Des touristes horaires aux résidents mensuels — nous avons votre trajet couvert." },
  { title: "Écologique", desc: "Remplacez 45 000 km de voiture par an par des trajets zéro émission." },
  { title: "Application simple", desc: "Réservez, déverrouillez et naviguez — tout en un seul clic." },
];

const Difference = () => (
  <section className="grid md:grid-cols-2 min-h-[900px]">
    <div className="bg-[#1a1612] flex items-center justify-center px-12 lg:px-20">
      <div className="max-w-xl">
        <p className="text-primary text-xs tracking-[0.2em] uppercase mb-8">LA DIFFÉRENCE VELOROUGE</p>
        
        <h2 className="font-display text-white text-5xl lg:text-6xl font-bold leading-tight mb-8">
          Fiable.<br />
          Local.<br />
          <em className="text-primary">À vous.</em>
        </h2>
        
        <p className="text-[#7a726e] text-lg mb-12 leading-relaxed italic">
          Chaque vélo électrique est entretenu quotidiennement. Chaque itinéraire est parcouru mensuellement.<br />
          Nous ne louons pas d'équipement — nous vous remettons une ville.
        </p>
        
        <div className="grid grid-cols-2 gap-x-12 gap-y-8">
          {features.map((f) => (
            <div key={f.title} className="border-l-2 border-primary pl-4">
              <h3 className="text-white text-sm font-medium mb-2">{f.title}</h3>
              <p className="text-[#7a726e] text-sm leading-relaxed">{f.desc}</p>
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
          TAUX DE DISPONIBILITÉ DES VÉLOS.<br />LA NORME INDUSTRIELLE EST DE 71%.
        </div>
      </div>
    </div>
  </section>
);

export default Difference;
