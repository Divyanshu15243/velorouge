import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/about-hero.jpg";
import teamPhoto from "@/assets/7.png";
import travelersPhoto from "@/assets/gallery-1.jpg";
import ctaBg from "@/assets/hero-bg.jpg";
import { Bike, Heart, Users, Globe, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t } = useTranslation();

  const values = [
    { icon: Bike, title: t('aboutPage.value1Title'), desc: t('aboutPage.value1Desc') },
    { icon: Heart, title: t('aboutPage.value2Title'), desc: t('aboutPage.value2Desc') },
    { icon: Users, title: t('aboutPage.value3Title'), desc: t('aboutPage.value3Desc') },
    { icon: Globe, title: t('aboutPage.value4Title'), desc: t('aboutPage.value4Desc') },
  ];

  const faqs = [
    { q: t('aboutPage.faq1Q'), a: t('aboutPage.faq1A') },
    { q: t('aboutPage.faq2Q'), a: t('aboutPage.faq2A') },
    { q: t('aboutPage.faq3Q'), a: t('aboutPage.faq3A') },
    { q: t('aboutPage.faq4Q'), a: t('aboutPage.faq4A') },
    { q: t('aboutPage.faq5Q'), a: t('aboutPage.faq5A') },
    { q: t('aboutPage.faq6Q'), a: t('aboutPage.faq6A') },
    { q: t('aboutPage.faq7Q'), a: t('aboutPage.faq7A') },
    { q: t('aboutPage.faq8Q'), a: t('aboutPage.faq8A') },
    { q: t('aboutPage.faq9Q'), a: t('aboutPage.faq9A') },
    { q: t('aboutPage.faq10Q'), a: t('aboutPage.faq10A') },
  ];

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-20 bg-dark overflow-hidden pt-20">
        <img src={aboutHero} alt="Strasbourg aerial view" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
        <div className="container relative z-10">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">{t('aboutPage.tag')}</p>
          <h1 className="font-display text-5xl md:text-7xl font-black text-dark-foreground leading-[0.95] max-w-3xl">
            {t('aboutPage.heroTitle1')}
            <br />
            <em className="text-primary">{t('aboutPage.heroTitle2')}</em>
            <br />
            {t('aboutPage.heroTitle3')}
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
                {t('aboutPage.missionTitle1')}
                <br />
                {t('aboutPage.missionTitle2')} <em className="text-primary">{t('aboutPage.missionTitleHighlight')}</em>
              </h2>
              <p className="mt-6 text-muted-foreground text-lg max-w-md">
                {t('aboutPage.missionSubtitle')}
              </p>
              <p className="mt-4 text-muted-foreground max-w-md">
                {t('aboutPage.missionDesc1')}
              </p>
              <p className="mt-4 text-muted-foreground max-w-md">
                {t('aboutPage.missionDesc2')}
              </p>
              <p className="mt-4 text-muted-foreground max-w-md">
                {t('aboutPage.missionDesc3')}
              </p>
            </div>
            <div className="aspect-video overflow-hidden">
              <img src={teamPhoto} alt="VeloRouge team" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Built for travelers */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={travelersPhoto} alt="Travelers exploring Strasbourg" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-8">
                {t('aboutPage.travelersTitle1')}
                <br />
                {t('aboutPage.travelersTitle2')} <em className="text-primary">{t('aboutPage.travelersTitleHighlight')}</em>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mb-12">
                {t('aboutPage.travelersSubtitle')}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-muted-foreground">{t('aboutPage.travelersFeature1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-muted-foreground">{t('aboutPage.travelersFeature2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-muted-foreground">{t('aboutPage.travelersFeature3')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-muted-foreground">{t('aboutPage.travelersFeature4')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-muted-foreground">{t('aboutPage.travelersFeature5')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-dark text-dark-foreground">
        <div className="container">
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-16">
            {t('aboutPage.valuesTitle1')}
            <br />
            {t('aboutPage.valuesTitle2')} <em className="text-primary">{t('aboutPage.valuesTitle2')}</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title}>
                <v.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">{v.title}</h3>
                <p className="text-base text-dark-foreground/60">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-12 text-center">
            {t('aboutPage.trustTitle1')}
            <br />
            <em className="text-primary">{t('aboutPage.trustTitleHighlight')}</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-primary text-3xl font-bold mb-2">★★★★★</div>
              <p className="text-muted-foreground">{t('aboutPage.trustStat1')}</p>
            </div>
            <div className="text-center">
              <div className="text-primary text-3xl font-bold mb-2">30+</div>
              <p className="text-muted-foreground">{t('aboutPage.trustStat2')}</p>
            </div>
            <div className="text-center">
              <div className="text-primary text-3xl font-bold mb-2">100%</div>
              <p className="text-muted-foreground">{t('aboutPage.trustStat3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Marquee - Full Width */}
      <div className="w-full bg-primary text-primary-foreground py-6 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="font-display text-xl italic font-normal tracking-wide mx-4" style={{color: 'rgba(245, 240, 232, 0.9)'}}>{t('aboutPage.marqueeText')}</span>
        </div>
      </div>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container max-w-3xl">
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-16 text-center">
            {t('aboutPage.faqTitle1')}
            <br />
            <em className="text-primary">{t('aboutPage.faqTitle2')}</em>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-display text-lg font-bold pr-4">{faq.q}</h3>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-base text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tourist CTA */}
      <section className="relative py-24 text-dark-foreground text-center overflow-hidden">
        <img src={ctaBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/80" />
        <div className="container max-w-2xl relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
            {t('aboutPage.ctaTitle1')}
            <br />
            <em className="text-primary">{t('aboutPage.ctaTitleHighlight')}</em>
          </h2>
          <p className="mt-6 text-dark-foreground/70 text-lg">
            {t('aboutPage.ctaSubtitle')}
          </p>
          <a
            href="#"
            className="inline-block mt-8 bg-primary text-primary-foreground px-10 py-4 font-semibold text-sm hover:bg-primary/90 transition-colors"
          >
            {t('aboutPage.ctaButton')}
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
