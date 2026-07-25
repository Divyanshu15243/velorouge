import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rides from "@/components/Rides";

const GigHero = lazy(() => import("@/components/GigHero"));
const Marquee = lazy(() => import("@/components/Marquee"));
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const Pricing = lazy(() => import("@/components/Pricing"));
const Showcase = lazy(() => import("@/components/Showcase"));
const FounderStory = lazy(() => import("@/components/FounderStory"));
const CityStats = lazy(() => import("@/components/CityStats"));
const Gallery = lazy(() => import("@/components/Gallery"));
const ReliableSection = lazy(() => import("@/components/ReliableSection"));
const Features = lazy(() => import("@/components/Features"));
const CTA = lazy(() => import("@/components/CTA"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => (
  <main>
    <SEO 
      title="VéloRouge - Expériences Premium en Vélo Électrique à Strasbourg"
      description="Découvrez Strasbourg en vélo électrique et Segway premium. Visites guidées, itinéraires sélectionnés et solutions de mobilité durable au cœur de l'Alsace."
      canonical="/"
    />
    <Navbar />
    <Hero />
    
    <About />
    <Rides />

    <Suspense fallback={null}>
      <Marquee />
      <HowItWorks />
      <Pricing />
      <Showcase />
      <FounderStory />
      <CityStats />
      <Gallery />
      <ReliableSection />
      <GigHero />
      <Features />
      {/* <Newsletter /> */}
      <CTA />
      <Footer />
    </Suspense>
  </main>
);

export default Index;
