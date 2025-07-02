import { EnhancedHeroSection } from "@/components/enhanced-hero-section"
import { EnhancedServicesSection } from "@/components/enhanced-services-section"
import { PricingSection } from "@/components/pricing-section"
import { EnhancedAboutSection } from "@/components/enhanced-about-section"
import { EnhancedContactSection } from "@/components/enhanced-contact-section"

export default function HomePage() {
  return (
    <>
      <EnhancedHeroSection />
      <EnhancedServicesSection />
      <PricingSection />
      <EnhancedAboutSection />
      <EnhancedContactSection />
    </>
  )
}
