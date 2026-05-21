import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import GigHero from "@/components/GigHero";
import About from "@/components/About";
import Rides from "@/components/Rides";
import Marquee from "@/components/Marquee";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Showcase from "@/components/Showcase";
import FounderStory from "@/components/FounderStory";
import CityStats from "@/components/CityStats";
import Gallery from "@/components/Gallery";
import ReliableSection from "@/components/ReliableSection";
import DeliverSection from "@/components/DeliverSection";
import Difference from "@/components/Difference";
import Features from "@/components/Features";
import Newsletter from "@/components/Newsletter";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

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
  </main>
);

export default Index;
