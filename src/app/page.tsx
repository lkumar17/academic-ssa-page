import Navbar from '@/components/layout/Navbar';
import HeroBanner from '@/components/sections/HeroBanner';
import StatsBar from '@/components/sections/StatsBar';
import WelcomeSection from '@/components/sections/WelcomeSection';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import NewsSection from '@/components/sections/NewsSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <StatsBar />
      <WelcomeSection />
      <NewsSection />
      <Footer />
    </>
  );
}
