import HeroSection from "@/components/pages/main/HeroSection";
import ClientOffersSection from "@/components/pages/main/ClientOffersSection";
import HowItWorks from "@/components/pages/main/HowItWorks";
import PricingPlan from "@/components/pages/main/PricingPlan";
import WhyPostulae from "@/components/pages/main/WhyPostulae";
import FaqSection from "@/components/pages/main/FaqSection";
import UploadSection from "@/components/pages/main/UploadSection";
export default function page() {
  return (
    <div>
      <HeroSection />
      <ClientOffersSection />
      <HowItWorks />
      <PricingPlan />
      <WhyPostulae />
      <FaqSection />
      <UploadSection />
    </div>
  );
}
