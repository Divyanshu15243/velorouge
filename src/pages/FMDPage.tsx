import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import cycleImg from "@/assets/cycle.png";
import heroBg from "@/assets/hero-bg.jpg";
import gallery1 from "@/assets/approach.png";
import { Check, Download, Building2, Users, FileText, Headphones, ChevronDown, TrendingUp } from "lucide-react";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FMDPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t } = useTranslation();

  const faqItems = [
    { q: t('fmd.faq1Q'), a: t('fmd.faq1A') },
    { q: t('fmd.faq2Q'), a: t('fmd.faq2A') },
    { q: t('fmd.faq3Q'), a: t('fmd.faq3A') },
    { q: t('fmd.faq4Q'), a: t('fmd.faq4A') }
  ];

  return (
  <main>
    <Navbar />

    {/* Hero Section */}
    <section className="relative min-h-[80vh] flex items-center bg-background pt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
              <Check className="w-4 h-4" />
              <span className="text-sm font-semibold">{t('fmd.eligible')}</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-black leading-tight mb-6">
              {t('fmd.title')} <em className="text-primary">{t('fmd.titleHighlight')}</em>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              {t('fmd.subtitle')}
            </p>
            <p className="text-muted-foreground mb-8">
              {t('fmd.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="bg-primary text-primary-foreground px-8 py-4 font-semibold hover:bg-primary/90 transition-colors">
                {t('fmd.startRental')}
              </a>
              <a href="#companies" className="border-2 border-primary text-primary px-8 py-4 font-semibold hover:bg-primary/10 transition-colors">
                {t('fmd.forCompanies')}
              </a>
            </div>
          </div>
          <div className="aspect-square overflow-hidden rounded-lg flex items-center justify-center">
            <img src={cycleImg} alt="Professional on electric bike" className="w-full h-full object-contain mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>

    {/* What is FMD */}
    <section className="py-24 bg-dark text-dark-foreground">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-6">
              {t('fmd.whatIs')} <em className="text-primary">{t('fmd.whatIsHighlight')}</em>
            </h2>
            <p className="text-dark-foreground/70 mb-6">
              {t('fmd.whatIsDesc')}
            </p>
            <p className="text-dark-foreground/70 mb-6">
              {t('fmd.whatIsDesc2')}
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-dark-foreground/70">{t('fmd.ebike')}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-dark-foreground/70">{t('fmd.bikePurchase')}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-dark-foreground/70">{t('fmd.publicTransit')}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-dark-foreground/70">{t('fmd.carpooling')}</span>
              </li>
            </ul>
          </div>
          <div className="bg-primary/10 border-2 border-primary p-8 rounded-lg">
            <h3 className="font-display text-2xl font-bold mb-6">{t('fmd.keyBenefits')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold">{t('fmd.upTo900')}</div>
                  <div className="text-sm text-dark-foreground/60">{t('fmd.maxReimbursement')}</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold">{t('fmd.taxFree')}</div>
                  <div className="text-sm text-dark-foreground/60">{t('fmd.noIncomeTax')}</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold">{t('fmd.socialExempt')}</div>
                  <div className="text-sm text-dark-foreground/60">{t('fmd.noAdditionalCosts')}</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold">{t('fmd.legal')}</div>
                  <div className="text-sm text-dark-foreground/60">{t('fmd.frenchProgram')}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="py-24 bg-background">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-16 text-center">
          {t('fmd.howItWorks')} <em className="text-primary">VéloRouge</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-3">{t('fmd.rentBike')}</h3>
            <p className="text-base text-muted-foreground">{t('fmd.rentBikeDesc')}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-3">{t('fmd.receiveInvoice')}</h3>
            <p className="text-base text-muted-foreground">{t('fmd.invoiceDesc')}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-3">{t('fmd.submitToHR')}</h3>
            <p className="text-base text-muted-foreground">{t('fmd.submitDesc')}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">4</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-3">{t('fmd.getReimbursed')}</h3>
            <p className="text-base text-muted-foreground">{t('fmd.reimbursedDesc')}</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="#" className="inline-block bg-primary text-primary-foreground px-10 py-4 font-semibold hover:bg-primary/90 transition-colors">
            {t('fmd.startAnnual')}
          </a>
        </div>
      </div>
    </section>

    {/* Eligibility */}
    <section className="py-24 bg-dark text-dark-foreground">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-8">
              {t('fmd.areEligible')} <em className="text-primary">{t('fmd.areEligibleHighlight')}</em>
            </h2>
            <div className="bg-green-100 border-2 border-green-500 rounded-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-green-800">{t('fmd.yesEligible')}</span>
              </div>
            </div>
            <p className="text-dark-foreground/70 text-lg mb-6">
              {t('fmd.allRentalsCompliant')}
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-dark-foreground/70">{t('fmd.longTermRentals')}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-dark-foreground/70">{t('fmd.annualSubscriptions')}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-dark-foreground/70">{t('fmd.corporateFleets')}</span>
              </li>
            </ul>
          </div>
          <div>
            <img src={gallery1} alt="Eligible e-bike rental" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </section>

    {/* Companies Section */}
    <section id="companies" className="py-24 bg-muted">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-6">
            {t('fmd.youCompany')} <em className="text-primary">{t('fmd.youCompanyHighlight')}</em>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t('fmd.supportSustainability')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-background p-6 rounded-lg">
            <Building2 className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-display text-xl font-bold mb-3">{t('fmd.customFleets')}</h3>
            <p className="text-base text-muted-foreground">{t('fmd.customFleetsDesc')}</p>
          </div>
          <div className="bg-background p-6 rounded-lg">
            <FileText className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-display text-xl font-bold mb-3">{t('fmd.centralizedBilling')}</h3>
            <p className="text-base text-muted-foreground">{t('fmd.centralizedBillingDesc')}</p>
          </div>
          <div className="bg-background p-6 rounded-lg">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-display text-xl font-bold mb-3">{t('fmd.completeFMD')}</h3>
            <p className="text-base text-muted-foreground">{t('fmd.completeFMDDesc')}</p>
          </div>
          <div className="bg-background p-6 rounded-lg">
            <Headphones className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-display text-xl font-bold mb-3">{t('fmd.dedicatedSupport')}</h3>
            <p className="text-base text-muted-foreground">{t('fmd.dedicatedSupportDesc')}</p>
          </div>
          <div className="bg-background p-6 rounded-lg">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-display text-xl font-bold mb-3">{t('fmd.smoothIntegration')}</h3>
            <p className="text-base text-muted-foreground">{t('fmd.smoothIntegrationDesc')}</p>
          </div>
          <div className="bg-background p-6 rounded-lg">
            <TrendingUp className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-display text-xl font-bold mb-3">{t('fmd.taxOptimization')}</h3>
            <p className="text-base text-muted-foreground">{t('fmd.taxOptimizationDesc')}</p>
          </div>
        </div>
        <div className="text-center">
          <a href="#" className="inline-block bg-primary text-primary-foreground px-10 py-4 font-semibold hover:bg-primary/90 transition-colors">
            {t('fmd.contactTeam')}
          </a>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-24 bg-background">
      <div className="container max-w-3xl">
        <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-16 text-center">
          {t('fmd.faqTitle')} <em className="text-primary">{t('fmd.faqHighlight')}</em>
        </h2>
        <div className="space-y-4">
          {faqItems.map((faq, index) => (
            <div key={index} className="border border-border rounded-lg">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
              >
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6">
                  <p className="text-base text-muted-foreground">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Download Templates */}
    <section className="py-24 bg-dark text-dark-foreground">
      <div className="container max-w-4xl text-center">
        <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-6">
          {t('fmd.needHelp')} <em className="text-primary">{t('fmd.needHelpHighlight')}</em>
        </h2>
        <p className="text-dark-foreground/70 text-lg mb-8">
          {t('fmd.downloadTemplate')}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-semibold hover:bg-primary/90 transition-colors">
            <Download className="w-5 h-5" />
            {t('fmd.downloadEmail')}
          </a>
          <a href="#" className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 font-semibold hover:bg-primary/10 transition-colors">
            <Download className="w-5 h-5" />
            {t('fmd.downloadSheet')}
          </a>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-32 bg-primary text-primary-foreground text-center relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}></div>
      <div className="absolute inset-0 bg-primary/90"></div>
      <div className="container max-w-3xl relative z-10">
        <h2 className="font-display text-4xl md:text-6xl font-black leading-tight mb-6">
          {t('fmd.finalTitle')} <em className="italic">{t('fmd.finalTitleEmph')}</em>
        </h2>
        <p className="text-xl mb-10 opacity-90">
          {t('fmd.finalDesc')}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="bg-white text-primary px-10 py-4 font-semibold hover:bg-gray-100 transition-colors">
            {t('fmd.seePricing')}
          </a>
          <a href="#" className="border-2 border-white text-white px-10 py-4 font-semibold hover:bg-white/10 transition-colors">
            {t('fmd.contactUs')}
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </main>
  );
};

export default FMDPage;
