import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ctaBg from "@/assets/homebg.jpg";

const CTA = () => {
  const { t } = useTranslation();
  
  return (
  <section className="relative py-32 text-dark-foreground text-center overflow-hidden">
    <img src={ctaBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-dark/80" />
    <div className="container max-w-2xl relative z-10">
      <h2 className="font-display text-4xl md:text-6xl font-black leading-tight">
        {t('cta.title')}
        <br />
        {t('cta.titleLine2')} <em className="text-primary">{t('cta.titleHighlight')}</em>
      </h2>
      <p className="mt-6 text-dark-foreground/60 text-lg">
        {t('cta.subtitle')}
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          to="/#pricing"
          className="bg-primary text-primary-foreground px-10 py-4 font-semibold text-sm hover:bg-primary/90 transition-colors"
        >
          {t('cta.letsGo')}
        </Link>
        <Link
          to="/about"
          className="border border-dark-foreground/30 text-dark-foreground px-10 py-4 font-semibold text-sm hover:border-dark-foreground/60 transition-colors"
        >
          {t('cta.learnMore')}
        </Link>
      </div>
    </div>
  </section>
  );
};

export default CTA;
