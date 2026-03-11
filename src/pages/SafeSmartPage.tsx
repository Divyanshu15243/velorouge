import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import smartHelmet from "@/assets/smart-helmet.jpg";
import smartGps from "@/assets/gps.png";
import { Shield, MapPin, Bell, Smartphone, Lock, Eye, Zap, Wifi } from "lucide-react";
import { useTranslation } from 'react-i18next';

const SafeSmartPage = () => {
  const { t } = useTranslation();

  const safetyFeatures = [
    { icon: Shield, title: t('safeSmart.antiTheft'), desc: t('safeSmart.antiTheftDesc') },
    { icon: Lock, title: t('safeSmart.smartLock'), desc: t('safeSmart.smartLockDesc') },
    { icon: Bell, title: t('safeSmart.accidentDetection'), desc: t('safeSmart.accidentDetectionDesc') },
    { icon: Eye, title: t('safeSmart.nightVisibility'), desc: t('safeSmart.nightVisibilityDesc') },
  ];

  const smartFeatures = [
    { icon: MapPin, title: t('safeSmart.liveTracking'), desc: t('safeSmart.liveTrackingDesc') },
    { icon: Smartphone, title: t('safeSmart.appControl'), desc: t('safeSmart.appControlDesc') },
    { icon: Zap, title: t('safeSmart.batteryMonitoring'), desc: t('safeSmart.batteryMonitoringDesc') },
    { icon: Wifi, title: t('safeSmart.otaUpdates'), desc: t('safeSmart.otaUpdatesDesc') },
  ];

  const stats = [
    { value: "0", label: t('safeSmart.accidents') },
    { value: "99,8 %", label: t('safeSmart.reliability') },
    { value: "< 2 min", label: t('safeSmart.responseTime') },
    { value: "24/7", label: t('safeSmart.monitoring') },
  ];

  return (
  <main>
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-16 bg-dark text-dark-foreground">
      <div className="container">
        <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">{t('safeSmart.tag')}</p>
        <h1 className="font-display text-5xl md:text-7xl font-black leading-[0.95] max-w-3xl">
          {t('safeSmart.title')}
          <br />
          {t('safeSmart.titleHighlight')}
        </h1>
        <p className="mt-6 text-dark-foreground/60 max-w-lg text-lg">
          {t('safeSmart.subtitle')}
        </p>
      </div>
    </section>

    {/* Safety */}
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
              {t('safeSmart.safetyFirst')}
              <br />
              <em className="text-primary">{t('safeSmart.safetyFirstHighlight')}</em>
            </h2>
            <div className="mt-10 space-y-8">
              {safetyFeatures.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold">{f.title}</h3>
                    <p className="text-base text-muted-foreground mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square overflow-hidden">
            <img src={smartHelmet} alt="Smart helmet" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    {/* Smart */}
    <section className="py-24 bg-dark text-dark-foreground">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-square overflow-hidden md:order-1">
            <img src={smartGps} alt="GPS navigation on bike" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="md:order-2">
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
              {t('safeSmart.smarter')}
              <br />
              <em className="text-primary">{t('safeSmart.smarterHighlight')}</em>
            </h2>
            <div className="mt-10 space-y-8">
              {smartFeatures.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold">{f.title}</h3>
                    <p className="text-base text-dark-foreground/60 mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-24 bg-background">
      <div className="container text-center">
        <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
          {t('safeSmart.stats')} <em className="text-primary">{t('safeSmart.statsHighlight')}</em>
        </h2>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl font-black text-primary">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </main>
);
};

export default SafeSmartPage;
