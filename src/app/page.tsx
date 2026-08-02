import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import StickyCTA from "@/components/layout/sticky-cta";
import HeroSection from "@/components/sections/hero";
import TrustedIndustries from "@/components/sections/trusted-industries";
import SolutionsSection from "@/components/sections/solutions";
import WhyNexfuga from "@/components/sections/why-nexfuga";
import ProcessSection from "@/components/sections/process";
import IndustryModalSection from "@/components/sections/industry-modal";
import FeaturedProjects from "@/components/sections/featured-projects";
import TechPartners from "@/components/sections/tech-partners";
import Testimonials from "@/components/sections/testimonials";
import FAQSection from "@/components/sections/faq";
import CTABanner from "@/components/sections/cta-banner";
import ContactForm from "@/components/forms/contact-form";
import ExitIntentDialog from "@/components/forms/exit-intent-dialog";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <TrustedIndustries />
      <SolutionsSection />
      <WhyNexfuga />
      <ProcessSection />
      <IndustryModalSection />
      <FeaturedProjects />
      <TechPartners />
      <Testimonials />
      <FAQSection />
      <CTABanner />
      <ContactForm />
      <Footer />
      <StickyCTA />
      <ExitIntentDialog />
    </main>
  );
}