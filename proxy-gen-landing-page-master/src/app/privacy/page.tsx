import Hero from "@/modules/core/components/hero";
import PrivacyContent from "@/modules/privacy/components/privacy";
import SubscribeSection from "@/modules/core/components/subscription";
import SocialMedia from "@/modules/core/components/social-media";
export default function Privacy() {
  return (
    <main>
      <Hero
        title={"privacy policy"}
        bgImgSrc="/images/privacy/hero.webp"
        mobileImgSrc="/images/privacy/privacy-mobile.webp"
      />
      <PrivacyContent />
      <SocialMedia />
      <SubscribeSection />
    </main>
  );
}
