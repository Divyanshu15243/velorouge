import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/about-hero.jpg";
import teamPhoto from "@/assets/7.png";
import travelersPhoto from "@/assets/gallery-1.jpg";
import ctaBg from "@/assets/hero-bg.jpg";
import { Bike, Heart, Users, Globe, ChevronDown } from "lucide-react";
import { useState } from "react";

const values = [
  { icon: Bike, title: "La liberté avant tout", desc: "Se déplacer devrait être un plaisir. Pas de files, pas de casse-tête — explorez la ville à votre rythme." },
  { icon: Heart, title: "L'amour du local", desc: "Chaque parcours est imaginé par des gens qui vivent à Strasbourg. Les visiteurs découvrent les incontournables et les pépites secrètes." },
  { icon: Users, title: "Porté par la communauté", desc: "Nos voyageurs et cyclistes façonnent les nouvelles expériences. Des suggestions d'itinéraires aux demandes de fonctionnalités — on écoute." },
  { icon: Globe, title: "Engagé pour la planète", desc: "Chaque balade remplace un trajet en voiture et soutient le voyage durable. Nous rendons Strasbourg plus verte, un coup de pédale à la fois." },
];

const faqs = [
  { q: "Ai-je besoin d'expérience pour conduire un Segway ?", a: "Pas du tout. Avant chaque visite guidée, notre équipe propose une courte session de formation pour vous assurer de vous sentir à l'aise et confiant. La plupart des cyclistes maîtrisent en quelques minutes." },
  { q: "Est-ce sûr de rouler ?", a: "Oui. La sécurité est notre priorité absolue. Tous les trajets incluent des instructions de base, et nos véhicules sont régulièrement inspectés et entretenus. Les visites guidées sont dirigées par du personnel formé pour garantir une expérience fluide et sûre." },
  { q: "Comment réserver une visite ou un trajet ?", a: "Vous pouvez réserver directement via notre site Web ou via l'application VéloRouge. Choisissez simplement votre date, heure et expérience préférées, puis confirmez votre réservation en quelques clics." },
  { q: "Où se déroulent les visites ?", a: "Nos visites se déroulent à Strasbourg et dans certaines zones voisines en Alsace. Les itinéraires incluent des rues historiques, des canaux pittoresques et des monuments clés." },
  { q: "Que dois-je porter pour le trajet ?", a: "Nous recommandons des vêtements confortables et des chaussures plates. Par temps froid ou pluvieux, une veste légère est une bonne idée. Veuillez éviter les articles très amples qui pourraient interférer avec la conduite." },
  { q: "Y a-t-il une limite d'âge ou de poids ?", a: "Oui. Les cyclistes doivent généralement avoir au moins 12 à 14 ans (selon le type de visite) et se situer dans les limites de poids de sécurité standard pour les Segways ou les vélos électriques. Les exigences exactes sont indiquées lors de la réservation." },
  { q: "Proposez-vous des réductions étudiantes ?", a: "Oui ! Nous proposons des tarifs spéciaux adaptés aux étudiants et des options d'abonnement. Le statut d'étudiant peut devoir être vérifié via l'application ou lors de la réservation." },
  { q: "Comment fonctionne le trajet basé sur l'application ?", a: "Téléchargez l'application VéloRouge, trouvez un véhicule à proximité, scannez le code QR et commencez votre trajet. Le paiement est géré directement dans l'application et vous pouvez terminer votre trajet dans les zones de stationnement désignées." },
  { q: "Que se passe-t-il s'il pleut ?", a: "Une pluie légère n'arrête généralement pas les visites. Cependant, pour des raisons de sécurité, les visites peuvent être reprogrammées en cas de mauvais temps. Si cela se produit, nous vous aiderons à choisir un nouveau créneau." },
  { q: "Puis-je annuler ou reprogrammer ma réservation ?", a: "Oui. Les annulations ou les reprogrammations sont possibles dans le délai indiqué dans notre politique de réservation. Tous les détails sont fournis lors du paiement." },
];

const timeline = [
  { year: "2021", event: "Founded in a garage in Petite France with 5 e-bikes." },
  { year: "2022", event: "Grew to 40 e-bikes and launched our first curated routes." },
  { year: "2023", event: "Subscription model launched — 500 members and growing tourist bookings." },
  { year: "2024", event: "Expanded fleet and introduced guided city experiences for visitors." },
  { year: "2025", event: "4,500+ happy riders from over 30 countries." },
];

const AboutPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
  <main>
    <Navbar />

    {/* Hero */}
    <section className="relative min-h-[60vh] flex items-end pb-20 bg-dark overflow-hidden pt-20">
      <img src={aboutHero} alt="Strasbourg aerial view" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
      <div className="container relative z-10">
        <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">À propos</p>
        <h1 className="font-display text-5xl md:text-7xl font-black text-dark-foreground leading-[0.95] max-w-3xl">
          Né à
          <br />
          <em className="text-primary">Strasbourg.</em>
          <br />
          Conçu pour les curieux.
        </h1>
      </div>
    </section>

    {/* Mission */}
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
              Tout a commencé
              <br />
              par une <em className="text-primary">question.</em>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-md">
              Pourquoi découvrir une ville devrait-il être lent, bondé et compliqué ?
            </p>
            <p className="mt-4 text-muted-foreground max-w-md">
              Plus d'attente. Plus d'itinéraires confus. Plus de trésors cachés ratés.
            </p>
            <p className="mt-4 text-muted-foreground max-w-md">
              VéloRouge est né pour réinventer la façon dont on explore Strasbourg — que vous soyez de passage pour une journée ou résident depuis toujours.
            </p>
            <p className="mt-4 text-muted-foreground max-w-md">
              Aujourd'hui, nous accompagnons des milliers de voyageurs et de Strasbourgeois à travers des parcours sur mesure, des visites guidées et une mobilité premium conçue pour vivre de vraies expériences.
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
              Pensé pour les voyageurs.
              <br />
              Adopté par les <em className="text-primary">locaux.</em>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mb-12">
              Du premier visiteur à l'explorateur chevronné, VéloRouge vous permet de voir plus de Strasbourg en moins de temps.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                <span className="text-muted-foreground">Visites guidées par des experts locaux</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                <span className="text-muted-foreground">Itinéraires panoramiques à travers les quartiers historiques</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                <span className="text-muted-foreground">Pauses photo devant les monuments emblématiques</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                <span className="text-muted-foreground">Accessible aux débutants, aucune expérience requise</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                <span className="text-muted-foreground">Formules flexibles pour les courts séjours et excursions</span>
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
          Ce en quoi
          <br />
          nous <em className="text-primary">croyons.</em>
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
          Pourquoi les voyageurs choisissent
          <br />
          <em className="text-primary">VéloRouge</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-primary text-3xl font-bold mb-2">★★★★★</div>
            <p className="text-muted-foreground">Élu parmi les meilleures façons de découvrir Strasbourg</p>
          </div>
          <div className="text-center">
            <div className="text-primary text-3xl font-bold mb-2">30+</div>
            <p className="text-muted-foreground">pays représentés</p>
          </div>
          <div className="text-center">
            <div className="text-primary text-3xl font-bold mb-2">100%</div>
            <p className="text-muted-foreground">accessible aux débutants</p>
          </div>
        </div>
      </div>
    </section>

    {/* Trust Marquee - Full Width */}
    <div className="w-full bg-primary text-primary-foreground py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="font-display text-xl italic font-normal tracking-wide mx-4" style={{color: 'rgba(245, 240, 232, 0.9)'}}>Sûr et adapté aux débutants  •  Vélos électriques et Segways premium  •  Réservation flexible et accès via application  •  Support multilingue  •  Sûr et adapté aux débutants  •  Vélos électriques et Segways premium  •  Réservation flexible et accès via application  •  Support multilingue  •  </span>
      </div>
    </div>

    {/* FAQ */}
    <section className="py-24 bg-background">
      <div className="container max-w-3xl">
        <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-16 text-center">
          Questions
          <br />
          <em className="text-primary">fréquentes.</em>
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
          Prêt à explorer
          <br />
          <em className="text-primary">Strasbourg ?</em>
        </h2>
        <p className="mt-6 text-dark-foreground/70 text-lg">
          Réservez votre balade guidée aujourd'hui et voyez plus en moins de temps.
        </p>
        <a
          href="#"
          className="inline-block mt-8 bg-primary text-primary-foreground px-10 py-4 font-semibold text-sm hover:bg-primary/90 transition-colors"
        >
          Réserver mon expérience
        </a>
      </div>
    </section>

    <Footer />
  </main>
  );
};

export default AboutPage;
