import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import rideSundowner from "@/assets/Circuit Culturel.png";
import rideRiver from "@/assets/Forêt de Robertsau & Rhin.png";
import rideLocal from "@/assets/Découverte Campagnarde.png";
import abt1 from "@/assets/abt1.jpeg";
import { useTranslation } from "react-i18next";
import { trackAddToCart } from "@/utils/analytics";

const RidesPage = () => {
  const { t } = useTranslation();

  const rides = [
    {
      img: rideRiver,
      objPos: "object-bottom",
      title: t('rides.ride1Title'),
      subtitle: t('ridesPage.ride1Subtitle'),
      tag: t('ridesPage.electricBike'),
      duration: t('ridesPage.ride1Duration'),
      time: t('ridesPage.ride1Time'),
      description: t('ridesPage.ride1Description'),
      price: t('ridesPage.price1'),
      priceLabel: t('ridesPage.price1Label'),
    },
    {
      img: abt1,
      objPos: "object-center",
      title: t('rides.ride2Title'),
      subtitle: t('ridesPage.ride2Subtitle'),
      tag: t('ridesPage.electricBike'),
      duration: t('ridesPage.ride2Duration'),
      time: t('ridesPage.ride2Time'),
      description: t('ridesPage.ride2Description'),
      price: t('ridesPage.price2'),
      priceLabel: t('ridesPage.price2Label'),
    },
    {
      img: rideSundowner,
      objPos: "object-bottom",
      title: t('rides.ride3Title'),
      subtitle: t('ridesPage.ride3Subtitle'),
      tag: t('ridesPage.electricBike'),
      duration: t('ridesPage.ride3Duration'),
      time: t('ridesPage.ride3Time'),
      description: t('ridesPage.ride3Description'),
      price: t('ridesPage.price3'),
      priceLabel: t('ridesPage.price3Label'),
    },
    {
      img: rideLocal,
      objPos: "object-bottom",
      title: t('rides.ride4Title'),
      subtitle: t('ridesPage.ride4Subtitle'),
      tag: t('ridesPage.electricBike'),
      duration: t('ridesPage.ride4Duration'),
      time: t('ridesPage.ride4Time'),
      description: t('ridesPage.ride4Description'),
      price: t('ridesPage.price4'),
      priceLabel: t('ridesPage.price4Label'),
    },
  ];

  return (
    <main>
      <SEO
        title="Nos Expériences - VéloRouge | Visites Guidées en Vélo Électrique à Strasbourg"
        description="Découvrez nos 4 expériences uniques en vélo électrique à Strasbourg. Coucher de soleil, bars de Petite France, Strasbourg insolite et échappée franco-allemande. 49€ par personne."
        canonical="/visitors"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-dark text-dark-foreground">
        <div className="container">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">{t('ridesPage.tag')}</p>
          <h1 className="font-display text-5xl md:text-6xl font-black leading-[0.95] max-w-3xl">
            {t('ridesPage.heroTitle1')}
            <br />
            <em className="text-primary">{t('ridesPage.heroTitleHighlight')}</em>
          </h1>
          <p className="mt-6 text-dark-foreground/60 max-w-lg text-lg">
            {t('ridesPage.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Rides List */}
      <section className="py-24 bg-background">
        <div className="container space-y-20">
          {rides.map((r, i) => (
            <div key={r.title} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
              <div className={`aspect-[4/3] overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img src={r.img} alt={r.title} className={`w-full h-full object-cover ${r.objPos} hover:scale-105 transition-transform duration-500`} loading="lazy" />
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                {r.tag && (
                  <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 mb-3 tracking-wider">
                    {r.tag}
                  </span>
                )}
                <h2 className="font-display text-3xl md:text-4xl font-black">{r.title}</h2>
                <p className="mt-2 text-lg text-muted-foreground italic">{r.subtitle}</p>
                <p className="mt-4 text-base text-muted-foreground max-w-md leading-relaxed">{r.description}</p>
                <a
                  href="https://bokun.io" // ← replace with your real Bokun booking URL
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackAddToCart(r.title, Number(r.price) || 49)}
                  className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  {t('ridesPage.bookButton')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default RidesPage;
