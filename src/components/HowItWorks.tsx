import { useTranslation } from "react-i18next";
import { Calendar, Bike, Headphones } from "lucide-react";

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Calendar,
      title: t('howItWorks.step1Title'),
      description: t('howItWorks.step1Desc')
    },
    {
      icon: Bike,
      title: t('howItWorks.step2Title'),
      description: t('howItWorks.step2Desc')
    },
    {
      icon: Headphones,
      title: t('howItWorks.step3Title'),
      description: t('howItWorks.step3Desc')
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-16 text-center">
          {t('howItWorks.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="border-2 border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <step.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl font-bold">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-primary/90 transition-colors"
          >
            {t('howItWorks.reserve')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
