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
              {t('reliableSection.title1')}
              <br />
              {t('reliableSection.title2')}
              <br />
              <em className="text-primary">{t('reliableSection.titleHighlight')}</em>
            </h2>
            <p className="mt-6 text-dark-foreground/70 max-w-md">
              {t('reliableSection.subtitle')}
            </p>
            <ul className="mt-6 space-y-3 text-base text-dark-foreground/70">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                {t('reliableSection.feature1')}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                {t('reliableSection.feature2')}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                {t('reliableSection.feature3')}
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
