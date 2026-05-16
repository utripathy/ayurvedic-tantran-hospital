
import Footer from '../components/layout/footer';
import Navbar from '../components/layout/navbar';
import HeroSection from '../features/home/hero-section';
import ServicesPreview from '../features/home/services-preview';


export default function HomePage() {
  return (
    <main>
      <Navbar />

      <HeroSection />

      <ServicesPreview />

      <Footer />
    </main>
  );
}