import deliverBike from "@/assets/deliver-bike.jpg";
import { useTranslation } from "react-i18next";

const DeliverSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-dark text-dark-foreground">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
              {t('gigHero.title1')}
              <br />
              {t('gigHero.title2')}
              <br />
              {t('gigHero.title3')}
            </h2>
            <p className="mt-6 text-dark-foreground/70 max-w-md">
              {t('gigHero.subtitle')}
            </p>
            <div className="mt-8 flex gap-8">
              <div>
                <div className="font-display text-3xl font-bold">21 500€</div>
                <div className="text-sm text-dark-foreground/50">saved by cyclists/year</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-dark-foreground/50">satisfaction rate</div>
              </div>
            </div>
            <a
              href="#"
              className="inline-block mt-8 bg-primary text-primary-foreground px-8 py-3 font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Start riding today
            </a>
          </div>
          <div className="aspect-square overflow-hidden rounded-full">
            <img src={deliverBike} alt="Cyclist in city" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverSection;
