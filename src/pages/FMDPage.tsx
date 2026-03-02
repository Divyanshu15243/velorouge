import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import cycleImg from "@/assets/cycle.png";
import heroBg from "@/assets/hero-bg.jpg";
import gallery1 from "@/assets/approach.png";
import { Check, Download, Building2, Users, FileText, Headphones, ChevronDown, TrendingUp } from "lucide-react";
import { useState } from 'react';

const FMDPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
              <span className="text-sm font-semibold">Eligible for FMD</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-black leading-tight mb-6">
              Reimbursed up to <em className="text-primary">€900</em> per year by your employer
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Your electric bike rental is fully eligible for the French Forfait Mobilités Durables (FMD).
            </p>
            <p className="text-muted-foreground mb-8">
              If you use your electric bike for commuting, your employer can reimburse you up to €900 per year — tax-free and exempt from social charges.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="bg-primary text-primary-foreground px-8 py-4 font-semibold hover:bg-primary/90 transition-colors">
                Start My Rental
              </a>
              <a href="#companies" className="border-2 border-primary text-primary px-8 py-4 font-semibold hover:bg-primary/10 transition-colors">
                I'm a Company
              </a>
            </div>
          </div>
          <div className="aspect-square overflow-hidden rounded-lg flex items-center justify-center">
            <img src={cycleImg} alt="Professional commuting on e-bike" className="w-full h-full object-contain mix-blend-multiply" />
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
              What is the Forfait Mobilités <em className="text-primary">Durables?</em>
            </h2>
            <p className="text-dark-foreground/70 mb-6">
              The Forfait Mobilités Durables (FMD) is a French government scheme that allows employers to financially support sustainable commuting.
            </p>
            <p className="text-dark-foreground/70 mb-6">
              It enables companies to reimburse employees for eco-friendly transport, including:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-dark-foreground/70">Electric bike rentals</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-dark-foreground/70">Bicycle purchases</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-dark-foreground/70">Public transport combinations</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-dark-foreground/70">Carpooling</span>
              </li>
            </ul>
          </div>
          <div className="bg-primary/10 border-2 border-primary p-8 rounded-lg">
            <h3 className="font-display text-2xl font-bold mb-6">Key Benefits</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold">Up to €900 per year</div>
                  <div className="text-sm text-dark-foreground/60">Maximum reimbursement</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold">100% tax-free</div>
                  <div className="text-sm text-dark-foreground/60">No income tax on reimbursement</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold">Exempt from social charges</div>
                  <div className="text-sm text-dark-foreground/60">No additional costs</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold">Fully legal & government-backed</div>
                  <div className="text-sm text-dark-foreground/60">Official French scheme</div>
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
          How to Benefit from FMD with <em className="text-primary">VéloRouge</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-3">Rent Your E-Bike</h3>
            <p className="text-base text-muted-foreground">Rent your electric bike for daily commuting.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-3">Get Your Invoice</h3>
            <p className="text-base text-muted-foreground">We provide a compliant invoice including: "Electric bike rental for home-to-work commuting – Eligible for FMD"</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-3">Submit to HR</h3>
            <p className="text-base text-muted-foreground">Submit the invoice to your HR department.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">4</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-3">Get Reimbursed</h3>
            <p className="text-base text-muted-foreground">Your employer reimburses you (up to €900/year).</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="#" className="inline-block bg-primary text-primary-foreground px-10 py-4 font-semibold hover:bg-primary/90 transition-colors">
            Start My Annual Rental
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
              Are VéloRouge rentals <em className="text-primary">eligible?</em>
            </h2>
            <div className="bg-green-100 border-2 border-green-500 rounded-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-green-800">Yes, 100% Eligible</span>
              </div>
            </div>
            <p className="text-dark-foreground/70 text-lg mb-6">
              All of our rentals are fully eligible under FMD regulations:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-dark-foreground/70">Long-term rentals</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-dark-foreground/70">Annual subscriptions</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-dark-foreground/70">Corporate fleet rentals</span>
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
            Are You a <em className="text-primary">Company?</em>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Support your employees' sustainable mobility while benefiting from tax advantages.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-background p-6 rounded-lg">
            <Building2 className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-display text-xl font-bold mb-3">Corporate Fleet Packages</h3>
            <p className="text-base text-muted-foreground">Tailored solutions for your team size</p>
          </div>
          <div className="bg-background p-6 rounded-lg">
            <FileText className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-display text-xl font-bold mb-3">Centralized Invoicing</h3>
            <p className="text-base text-muted-foreground">Monthly consolidated billing</p>
          </div>
          <div className="bg-background p-6 rounded-lg">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-display text-xl font-bold mb-3">FMD Implementation</h3>
            <p className="text-base text-muted-foreground">Complete guidance and support</p>
          </div>
          <div className="bg-background p-6 rounded-lg">
            <Headphones className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-display text-xl font-bold mb-3">Dedicated Support</h3>
            <p className="text-base text-muted-foreground">Priority assistance for your company</p>
          </div>
          <div className="bg-background p-6 rounded-lg">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-display text-xl font-bold mb-3">Employee Onboarding</h3>
            <p className="text-base text-muted-foreground">Seamless setup for your team</p>
          </div>
          <div className="bg-background p-6 rounded-lg">
            <TrendingUp className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-display text-xl font-bold mb-3">Tax Benefits</h3>
            <p className="text-base text-muted-foreground">Maximize your company's tax advantages</p>
          </div>
        </div>
        <div className="text-center">
          <a href="#" className="inline-block bg-primary text-primary-foreground px-10 py-4 font-semibold hover:bg-primary/90 transition-colors">
            Contact Our Corporate Team
          </a>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-24 bg-background">
      <div className="container max-w-3xl">
        <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-16 text-center">
          Frequently Asked <em className="text-primary">Questions</em>
        </h2>
        <div className="space-y-4">
          {[
            { q: "Is the €900 mandatory?", a: "No. The employer chooses the amount (up to €900 per year)." },
            { q: "Can I combine FMD with public transport reimbursement?", a: "Yes, depending on company policy." },
            { q: "Do I need proof of commuting?", a: "Your invoice from VeloRouge is sufficient in most cases." },
            { q: "Is this available for all employees?", a: "Yes, if the employer has implemented the FMD scheme." }
          ].map((faq, index) => (
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
          Need Help Convincing Your <em className="text-primary">Employer?</em>
        </h2>
        <p className="text-dark-foreground/70 text-lg mb-8">
          Download our ready-to-send email template to request FMD reimbursement.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-semibold hover:bg-primary/90 transition-colors">
            <Download className="w-5 h-5" />
            Download Email Template
          </a>
          <a href="#" className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 font-semibold hover:bg-primary/10 transition-colors">
            <Download className="w-5 h-5" />
            Download FMD Info PDF
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
          Start Riding. Let Your Employer <em className="italic">Pay.</em>
        </h2>
        <p className="text-xl mb-10 opacity-90">
          Rent your electric bike today and benefit from up to €900 per year in reimbursement.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="bg-white text-primary px-10 py-4 font-semibold hover:bg-gray-100 transition-colors">
            View Pricing
          </a>
          <a href="#" className="border-2 border-white text-white px-10 py-4 font-semibold hover:bg-white/10 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </main>
  );
};

export default FMDPage;
