import Navbar from "@/modules/core/components/implements/navbar/navbar";
import Dashboard from "@/modules/core/components/implements/dashboard/dashboard";
import Sponsor from "@/modules/core/components/implements/sponsor/sponsor";
import FeatureSection1 from "@/modules/core/components/implements/features/feature1";
import FeatureSection2 from "@/modules/core/components/implements/features/feature2";
import TestimonialsSection from "@/modules/core/components/implements/client/client";
import Features from "@/modules/core/components/implements/efforts/efforts";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Dashboard />
      <Sponsor />
      <FeatureSection1 />
      <FeatureSection2 />
      <TestimonialsSection />
      <Features />
     {/* <Hero />
      <CustomersChoose />
      <Count />
      <Feature />
      <Work />
      <VisitGuide />
      <Compare />
      <Partner />
      <Pricing />
      <ProxyFarm />
      <Proxy />
      <Faq />
      <Cta />
      <SocialMedia />
      <Subscription />*/} 
    </main>
  );
}
