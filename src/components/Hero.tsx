import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Picture from "@/components/ui/picture";
import heroBg from "@/assets/hero-bg.webp";
import heroBgAvif from "@/assets/hero-bg.avif";
import heroBg640 from "@/assets/hero-bg-640w.webp";
import heroBg1024 from "@/assets/hero-bg-1024w.webp";
import heroBg1600 from "@/assets/hero-bg-1600w.webp";
import heroBgAvif640 from "@/assets/hero-bg-640w.avif";
import heroBgAvif1024 from "@/assets/hero-bg-1024w.avif";
import heroBgAvif1600 from "@/assets/hero-bg-1600w.avif";

const heroBgWebpSrcSet = `${heroBg640} 640w, ${heroBg1024} 1024w, ${heroBg1600} 1600w, ${heroBg} 1920w`;
const heroBgAvifSrcSet = `${heroBgAvif640} 640w, ${heroBgAvif1024} 1024w, ${heroBgAvif1600} 1600w, ${heroBgAvif} 1920w`;

const Hero = () => {
  const { t } = useTranslation();

  return (
  <section className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden">
    <Helmet>
      <link rel="preload" as="image" imageSrcSet={heroBgAvifSrcSet} imageSizes="100vw" type="image/avif" fetchPriority="high" />
    </Helmet>
    <Picture
      avifSrcSet={heroBgAvifSrcSet}
      webpSrcSet={heroBgWebpSrcSet}
      sizes="100vw"
      src={heroBg}
      alt="Strasbourg"
      width={1920}
      height={1088}
      className="absolute inset-0 w-full h-full object-cover opacity-40"
      fetchPriority="high"
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
