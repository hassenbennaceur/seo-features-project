import Hero from "@/modules/core/components/hero";
import TOSContent from "@/modules/tos/components/tos";
import SubscribeSection from "@/modules/core/components/subscription";
import SocialMedia from "@/modules/core/components/social-media";
export default function TOS() {
  return (
    <main>
      <Hero />
      <TOSContent />
      <SocialMedia />
      <SubscribeSection />
    </main>
  );
}
