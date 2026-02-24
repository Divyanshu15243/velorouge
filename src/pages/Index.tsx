import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GigHero from "@/components/GigHero";
import About from "@/components/About";
import Rides from "@/components/Rides";
import Marquee from "@/components/Marquee";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import ReliableSection from "@/components/ReliableSection";
import DeliverSection from "@/components/DeliverSection";
import Difference from "@/components/Difference";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => (
  <main>
    <Navbar />
    <Hero />
    
    <About />
    <Rides />
    <Marquee />
    <Pricing />
    <Gallery />
    <ReliableSection />
    <GigHero />
    <Features />
    <CTA />
    <Footer />
  </main>
);

export default Index;
