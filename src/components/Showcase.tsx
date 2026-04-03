import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import sundowner from "@/assets/petite-france.jpg";
import cathedrale from "@/assets/cathedral.jpg";
import neustadt from "@/assets/Neustadt.jpeg";
import marcheNoel from "@/assets/marché-de-noël1.jpg";
import barrageVauban from "@/assets/barrage-vauban.jpg";
import rhineBorder from "@/assets/rhine1.jpeg";

const Showcase = () => {
  const { t } = useTranslation();

  const locations = [
    { image: sundowner, titleKey: 'showcase.location1Title', descKey: 'showcase.location1Desc' },
    { image: cathedrale, titleKey: 'showcase.location2Title', descKey: 'showcase.location2Desc' },
    { image: neustadt, titleKey: 'showcase.location3Title', descKey: 'showcase.location3Desc' },
    { image: marcheNoel, titleKey: 'showcase.location4Title', descKey: 'showcase.location4Desc' },
    { image: barrageVauban, titleKey: 'showcase.location5Title', descKey: 'showcase.location5Desc' },
    { image: rhineBorder, titleKey: 'showcase.location6Title', descKey: 'showcase.location6Desc' }
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
                <img 
                  src={location.image} 
                  alt={t(location.titleKey)}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-xl font-bold mb-2">
                  {t(location.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {t(location.descKey)}
                </p>
                <Link 
                  to="/" 
                  className="block w-full bg-dark text-dark-foreground text-center py-3 text-sm font-semibold hover:bg-dark/90 transition-colors"
                >
                  {t('showcase.exploreNow')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
