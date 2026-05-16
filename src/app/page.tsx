
import Footer from '../components/layout/footer';
import Navbar from '../components/layout/navbar';
import AboutPreview from '../features/home/about-preview';
import CTASection from '../features/home/cta-section';
import DoctorsSection from '../features/home/doctors-section';
import HeroSection from '../features/home/hero-section';
import ServicesPreview from '../features/home/services-preview';
import Testimonials from '../features/home/testimonials';


export default function HomePage() {
  return (
    <main>
      <Navbar />

      <HeroSection />

      <AboutPreview />

      <ServicesPreview />

      <DoctorsSection />

      <Testimonials />

      <CTASection />

      <Footer />
    </main>
  );
}