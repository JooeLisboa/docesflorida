import { BackgroundEffects } from '@/components/BackgroundEffects';
import { BrandIntroSection } from '@/components/BrandIntroSection';
import { ContactSection } from '@/components/ContactSection';
import { FeaturedProductsSection } from '@/components/FeaturedProductsSection';
import { FloatingWhatsAppButton } from '@/components/FloatingWhatsAppButton';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';

export default function CartaoPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-hero-glow pb-24 pt-6">
      <BackgroundEffects />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 sm:gap-5 sm:px-6">
        <HeroSection />
        <BrandIntroSection />
        <FeaturedProductsSection />
        <ContactSection />
        <Footer />
      </div>
      <FloatingWhatsAppButton />
    </main>
  );
}
