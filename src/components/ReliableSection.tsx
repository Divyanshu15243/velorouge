import reliableImg from "@/assets/8.png";

const ReliableSection = () => (
  <section className="py-24 bg-dark text-dark-foreground">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
            Fiable.
            <br />
            Local.
            <br />
            <em className="text-primary">À vous.</em>
          </h2>
          <p className="mt-6 text-dark-foreground/70 max-w-md">
            Un abonnement VéloRouge, c'est un vélo toujours prêt, toujours entretenu, toujours à votre disposition. Pas de files d'attente, pas de bornes — juste la liberté sur deux roues.
          </p>
          <ul className="mt-6 space-y-3 text-base text-dark-foreground/70">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
              Un vélo électrique attritré, rien qu'à vous
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
              Entretien hebdomadaire par notre équipe locale
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
              Changez de modèle quand vous voulez, sans frais
            </li>
          </ul>
        </div>
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={reliableImg}
            alt="Cyclist riding through Strasbourg"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ReliableSection;
