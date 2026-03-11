import reliableImg from "@/assets/8.png";
import { useTranslation } from "react-i18next";

const ReliableSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-dark text-dark-foreground">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
              Reliable.
              <br />
              Local.
              <br />
              <em className="text-primary">For you.</em>
            </h2>
            <p className="mt-6 text-dark-foreground/70 max-w-md">
              A VéloRouge subscription means a bike always ready, always maintained, always at your disposal. No queues, no stations — just freedom on two wheels.
            </p>
            <ul className="mt-6 space-y-3 text-base text-dark-foreground/70">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                A dedicated electric bike, just for you
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                Weekly maintenance by our local team
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                Switch models whenever you want, no fees
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
};

export default ReliableSection;
