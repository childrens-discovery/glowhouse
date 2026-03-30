import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductSection from "@/components/ProductSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import LearningOutcomes from "@/components/LearningOutcomes";
import ChallengesSection from "@/components/ChallengesSection";
import CurriculumSection from "@/components/CurriculumSection";
import DigitalPlatform from "@/components/DigitalPlatform";
import HowItWorks from "@/components/HowItWorks";
import ImpactStats from "@/components/ImpactStats";
import AboutCD from "@/components/AboutCD";
import RegisterSection from "@/components/RegisterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductSection />
        <FeaturesGrid />
        <LearningOutcomes />
        <ChallengesSection />
        <CurriculumSection />
        <DigitalPlatform />
        <HowItWorks />
        <ImpactStats />
        <AboutCD />
        <RegisterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
