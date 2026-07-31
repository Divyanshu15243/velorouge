import { useTranslation } from "react-i18next";
import Picture from "@/components/ui/picture";
import sundowner from "@/assets/petite-france.webp";
import sundownerAvif from "@/assets/petite-france.avif";
import cathedrale from "@/assets/cathedral.webp";
import cathedraleAvif from "@/assets/cathedral.avif";
import neustadt from "@/assets/Neustadt.webp";
import neustadtAvif from "@/assets/Neustadt.avif";
import marcheNoel from "@/assets/marché-de-noël1.webp";
import marcheNoelAvif from "@/assets/marché-de-noël1.avif";
import barrageVauban from "@/assets/barrage-vauban.webp";
import barrageVaubanAvif from "@/assets/barrage-vauban.avif";
import rhineBorder from "@/assets/rhine1.webp";
import rhineBorderAvif from "@/assets/rhine1.avif";

const Showcase = () => {
  const { t } = useTranslation();

  const locations = [
    { image: sundowner, imageAvif: sundownerAvif, w: 1200, h: 670, titleKey: 'showcase.location1Title', descKey: 'showcase.location1Desc' },
    { image: cathedrale, imageAvif: cathedraleAvif, w: 1200, h: 670, titleKey: 'showcase.location2Title', descKey: 'showcase.location2Desc' },
    { image: neustadt, imageAvif: neustadtAvif, w: 1200, h: 674, titleKey: 'showcase.location3Title', descKey: 'showcase.location3Desc' },
    { image: marcheNoel, imageAvif: marcheNoelAvif, w: 1200, h: 670, titleKey: 'showcase.location4Title', descKey: 'showcase.location4Desc' },
    { image: barrageVauban, imageAvif: barrageVaubanAvif, w: 1200, h: 800, titleKey: 'showcase.location5Title', descKey: 'showcase.location5Desc' },
    { image: rhineBorder, imageAvif: rhineBorderAvif, w: 1200, h: 757, titleKey: 'showcase.location6Title', descKey: 'showcase.location6Desc' }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-16 text-center">
          {t('showcase.titlePart1')} <em className="text-primary">{t('showcase.titleHighlight')}</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {locations.map((location, index) => (
            <div key={index} className="border-2 border-border rounded-lg overflow-hidden hover:border-primary transition-colors">
              <div className="h-64 overflow-hidden">
                <Picture
                  avif={location.imageAvif}
                  src={location.image}
                  alt={t(location.titleKey)}
                  width={location.w}
                  height={location.h}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-xl font-bold mb-2">
                  {t(location.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(location.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
