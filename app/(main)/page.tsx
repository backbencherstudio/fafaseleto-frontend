import HeroSection from "@/components/main/HeroSection";
import ClientOffersSection from "@/components/main/ClientOffersSection";
import HowItWorks from "@/components/main/HowItWorks";
import PricingPlan from "@/components/main/PricingPlan";
export default function page() {
  return (
    <div>
      <HeroSection />
      <ClientOffersSection />
      <HowItWorks />

      <PricingPlan />
    </div>
  );
}
