import { useTranslation } from "react-i18next";
import { Bike, Camera } from "lucide-react";

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Bike, value: "96+", label: t('about.stat1') },
    { icon: Camera, value: "850M+", label: t('about.stat3') },
  ];

  return (
  <section className="py-24 bg-background">
    <div className="container">
      <h2 className="font-display text-4xl md:text-5xl font-black leading-tight max-w-lg">
        {t('about.title')} <em className="text-primary">{t('about.titleHighlight')}</em>
      </h2>
      <p className="mt-6 text-muted-foreground max-w-xl text-lg">
        {t('about.subtitle')}
      </p>

      <div className="mt-12 flex flex-wrap gap-8">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold font-display">{s.value}</div>
              <div className="text-base text-muted-foreground">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default About;
