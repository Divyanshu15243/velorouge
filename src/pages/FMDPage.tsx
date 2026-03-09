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
              <span className="text-sm font-semibold">Éligible au FMD</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-black leading-tight mb-6">
              Remboursé jusqu'à <em className="text-primary">900€</em> par an par votre employeur
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Votre location de vélo électrique est entièrement éligible au Forfait Mobilités Durables (FMD) français.
            </p>
            <p className="text-muted-foreground mb-8">
              Si vous utilisez votre vélo électrique pour vos trajets domicile-travail, votre employeur peut vous rembourser jusqu'à 900€ par an — exonéré d'impôts et de charges sociales.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="bg-primary text-primary-foreground px-8 py-4 font-semibold hover:bg-primary/90 transition-colors">
                Commencer ma location
              </a>
              <a href="#companies" className="border-2 border-primary text-primary px-8 py-4 font-semibold hover:bg-primary/10 transition-colors">
                Je suis une entreprise
              </a>
            </div>
          </div>
          <div className="aspect-square overflow-hidden rounded-lg flex items-center justify-center">
            <img src={cycleImg} alt="Professionnel en déplacement sur vélo électrique" className="w-full h-full object-contain mix-blend-multiply" />
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
              Qu'est-ce que le Forfait Mobilités <em className="text-primary">Durables ?</em>
            </h2>
            <p className="text-dark-foreground/70 mb-6">
              Le Forfait Mobilités Durables (FMD) est un dispositif gouvernemental français qui permet aux employeurs de soutenir financièrement les déplacements durables.
            </p>
            <p className="text-dark-foreground/70 mb-6">
              Il permet aux entreprises de rembourser les employés pour les transports écologiques, notamment :
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-dark-foreground/70">Locations de vélos électriques</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-dark-foreground/70">Achats de vélos</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-dark-foreground/70">Combinaisons de transports en commun</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-dark-foreground/70">Covoiturage</span>
              </li>
            </ul>
          </div>
          <div className="bg-primary/10 border-2 border-primary p-8 rounded-lg">
            <h3 className="font-display text-2xl font-bold mb-6">Avantages clés</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold">Jusqu'à 900€ par an</div>
                  <div className="text-sm text-dark-foreground/60">Remboursement maximum</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold">100% exonéré d'impôts</div>
                  <div className="text-sm text-dark-foreground/60">Pas d'impôt sur le revenu sur le remboursement</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold">Exonéré de charges sociales</div>
                  <div className="text-sm text-dark-foreground/60">Pas de coûts supplémentaires</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold">Entièrement légal et soutenu par le gouvernement</div>
                  <div className="text-sm text-dark-foreground/60">Dispositif officiel français</div>
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
          Comment bénéficier du FMD avec <em className="text-primary">VéloRouge</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-3">Louez votre vélo électrique</h3>
            <p className="text-base text-muted-foreground">Louez votre vélo électrique pour vos trajets quotidiens.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-3">Obtenez votre facture</h3>
            <p className="text-base text-muted-foreground">Nous fournissons une facture conforme incluant : "Location de vélo électrique pour trajets domicile-travail – Éligible au FMD"</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-3">Soumettez aux RH</h3>
            <p className="text-base text-muted-foreground">Soumettez la facture à votre service RH.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">4</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-3">Soyez remboursé</h3>
            <p className="text-base text-muted-foreground">Votre employeur vous rembourse (jusqu'à 900€/an).</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="#" className="inline-block bg-primary text-primary-foreground px-10 py-4 font-semibold hover:bg-primary/90 transition-colors">
            Commencer ma location annuelle
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
              Les locations VéloRouge sont-elles <em className="text-primary">éligibles ?</em>
            </h2>
            <div className="bg-green-100 border-2 border-green-500 rounded-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-green-800">Oui, 100% éligible</span>
              </div>
            </div>
            <p className="text-dark-foreground/70 text-lg mb-6">
              Toutes nos locations sont entièrement éligibles selon la réglementation FMD :
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-dark-foreground/70">Locations longue durée</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-dark-foreground/70">Abonnements annuels</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-dark-foreground/70">Locations de flotte d'entreprise</span>
              </li>
            </ul>
          </div>
          <div>
            <img src={gallery1} alt="Location de vélo électrique éligible" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </section>

    {/* Companies Section */}
    <section id="companies" className="py-24 bg-muted">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-6">
            Vous êtes une <em className="text-primary">entreprise ?</em>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Soutenez la mobilité durable de vos employés tout en bénéficiant d'avantages fiscaux.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-background p-6 rounded-lg">
            <Building2 className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-display text-xl font-bold mb-3">Forfaits flotte d'entreprise</h3>
            <p className="text-base text-muted-foreground">Solutions adaptées à la taille de votre équipe</p>
          </div>
          <div className="bg-background p-6 rounded-lg">
            <FileText className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-display text-xl font-bold mb-3">Facturation centralisée</h3>
            <p className="text-base text-muted-foreground">Facturation mensuelle consolidée</p>
          </div>
          <div className="bg-background p-6 rounded-lg">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-display text-xl font-bold mb-3">Mise en œuvre du FMD</h3>
            <p className="text-base text-muted-foreground">Accompagnement et support complets</p>
          </div>
          <div className="bg-background p-6 rounded-lg">
            <Headphones className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-display text-xl font-bold mb-3">Support dédié</h3>
            <p className="text-base text-muted-foreground">Assistance prioritaire pour votre entreprise</p>
          </div>
          <div className="bg-background p-6 rounded-lg">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-display text-xl font-bold mb-3">Intégration des employés</h3>
            <p className="text-base text-muted-foreground">Configuration transparente pour votre équipe</p>
          </div>
          <div className="bg-background p-6 rounded-lg">
            <TrendingUp className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-display text-xl font-bold mb-3">Avantages fiscaux</h3>
            <p className="text-base text-muted-foreground">Maximisez les avantages fiscaux de votre entreprise</p>
          </div>
        </div>
        <div className="text-center">
          <a href="#" className="inline-block bg-primary text-primary-foreground px-10 py-4 font-semibold hover:bg-primary/90 transition-colors">
            Contactez notre équipe entreprise
          </a>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-24 bg-background">
      <div className="container max-w-3xl">
        <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-16 text-center">
          Questions <em className="text-primary">fréquentes</em>
        </h2>
        <div className="space-y-4">
          {[
            { q: "Les 900€ sont-ils obligatoires ?", a: "Non. L'employeur choisit le montant (jusqu'à 900€ par an)." },
            { q: "Puis-je combiner le FMD avec le remboursement des transports en commun ?", a: "Oui, selon la politique de l'entreprise." },
            { q: "Ai-je besoin d'une preuve de trajet domicile-travail ?", a: "Votre facture de VeloRouge est suffisante dans la plupart des cas." },
            { q: "Est-ce disponible pour tous les employés ?", a: "Oui, si l'employeur a mis en place le dispositif FMD." }
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
          Besoin d'aide pour convaincre votre <em className="text-primary">employeur ?</em>
        </h2>
        <p className="text-dark-foreground/70 text-lg mb-8">
          Téléchargez notre modèle d'e-mail prêt à envoyer pour demander le remboursement FMD.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-semibold hover:bg-primary/90 transition-colors">
            <Download className="w-5 h-5" />
            Télécharger le modèle d'e-mail
          </a>
          <a href="#" className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 font-semibold hover:bg-primary/10 transition-colors">
            <Download className="w-5 h-5" />
            Télécharger le PDF d'info FMD
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
          Commencez à rouler. Laissez votre employeur <em className="italic">payer.</em>
        </h2>
        <p className="text-xl mb-10 opacity-90">
          Louez votre vélo électrique aujourd'hui et bénéficiez de jusqu'à 900€ par an de remboursement.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="bg-white text-primary px-10 py-4 font-semibold hover:bg-gray-100 transition-colors">
            Voir les tarifs
          </a>
          <a href="#" className="border-2 border-white text-white px-10 py-4 font-semibold hover:bg-white/10 transition-colors">
            Nous contacter
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </main>
  );
};

export default FMDPage;
