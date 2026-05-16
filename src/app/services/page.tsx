import Footer from '@/src/components/layout/footer';
import Navbar from '@/src/components/layout/navbar';
import PageHero from '@/src/components/ui/page-hero';
import ServiceCard from '@/src/components/ui/service-card';
import { services } from '@/src/data/services';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore Ayurvedic treatments and wellness therapies.',
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      <PageHero title='Our Services' subtitle='Personalized Ayurvedic therapies for complete wellness.' />

      <section className='py-20'>
        <div className='container-custom grid gap-6 md:grid-cols-3'>
          {services.map((service) => (
            <ServiceCard key={service.slug} slug={service.slug} title={service.title} description={service.shortDescription} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
