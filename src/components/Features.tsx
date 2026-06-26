import { useTranslation } from "react-i18next";
import { Wrench, MapPin, Bike } from "lucide-react";

const Features = () => {
  const { t } = useTranslation();
  
  const features = [
    { icon: MapPin, title: t('features.feature1Title'), desc: t('features.feature1Desc') },
    { icon: Bike, title: t('features.feature2Title'), desc: t('features.feature2Desc') },
    { icon: MapPin, title: t('features.feature4Title'), desc: t('features.feature4Desc') },
    { icon: Wrench, title: t('features.feature5Title'), desc: t('features.feature5Desc') },
  ];

  return (
  <section className="py-24 bg-background">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
            {t('features.title1')}
            <br />
            {t('features.title2')}
            <br />
            {t('features.title3')} <em className="text-primary">{t('features.titleHighlight')}</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((f) => (
            <div key={f.title}>
              <f.icon className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-display text-lg font-bold mb-1">{f.title}</h3>
              <p className="text-base text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Features;
