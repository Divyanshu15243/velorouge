import { useTranslation } from "react-i18next";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { t } = useTranslation();
  
  return (
  <section className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden">
    <img
      src={heroBg}
      alt="Strasbourg"
      className="absolute inset-0 w-full h-full object-cover opacity-40"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />

    <div className="container relative z-10 text-center">
      <div className="inline-flex items-center gap-2 bg-dark/80 backdrop-blur-sm border border-dark-foreground/20 rounded-full px-6 py-3 mb-8">
        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        <p className="text-xs font-semibold text-dark-foreground tracking-widest uppercase">
          {t('hero.tag')}
        </p>
      </div>
      <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold text-dark-foreground leading-tight max-w-3xl mx-auto">
        {t('hero.title')}
        <br />
        <em className="text-primary">{t('hero.titleHighlight')}</em>
      </h1>
      <p className="mt-6 text-dark-foreground/70 max-w-2xl text-lg md:text-xl mx-auto">
        {t('hero.subtitle')}
      </p>
      <div className="mt-8 flex justify-center">
        <a
          href="#pricing"
          className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-primary/90 transition-colors"
        >
          {t('hero.bookYourRide')}
        </a>
      </div>
    </div>
  </section>
  );
};

export default Hero;
