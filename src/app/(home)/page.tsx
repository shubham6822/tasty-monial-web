import HeroSection from "../../components/home/HeroSection";
import FeatureSection from "../../components/home/FeatureSection";
import AvailableComponents from "../../components/home/AvailableComponents";
import KeyFeatures from "../../components/home/KeyFeatures";
import TestimonialSection from "../../components/home/TestimonialSection";
import WhyChoose from "../../components/home/WhyChoose";
import PricingSection from "../../components/home/PricingSection";
import FAQSection from "../../components/home/FAQSection";
import FinalCTASection from "../../components/home/FinalCTASection";
import Navbar from "../../components/home/Navbar";
import Footer from "../../components/home/Footer";
import { HomeInteractive } from "../../components/home/HomeInteractive";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col md:px-32">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />
        <HomeInteractive />
        <AvailableComponents />
        <KeyFeatures />
        <TestimonialSection />
        <WhyChoose />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
