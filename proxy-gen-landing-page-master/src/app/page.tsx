import Navbar from "@/modules/core/components/implements/navbar/navbar";
import Dashboard from "@/modules/core/components/implements/dashboard/dashboard";
import Sponsor from "@/modules/core/components/implements/sponsor/sponsor";
import FeatureSection1 from "@/modules/core/components/implements/features/feature1";
import FeatureSection2 from "@/modules/core/components/implements/features/feature2";
import TestimonialsSection from "@/modules/core/components/implements/client/client";
import Features from "@/modules/core/components/implements/efforts/efforts";
import Pricing from "@/modules/core/components/implements/pricing/pricing";
import JoinUs from "@/modules/core/components/implements/joinus/joinus";
import Footer from "@/modules/core/components/implements/footer/footer";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <Navbar />
        <Dashboard />
        <Sponsor />
        <FeatureSection1 />
        <TestimonialsSection />
        <Features />
        <Pricing />
        <JoinUs />
        <Footer />
      </div> 
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
