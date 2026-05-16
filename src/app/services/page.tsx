
import Footer from "@/src/components/layout/footer";
import Navbar from "@/src/components/layout/navbar";
import PageHero from "@/src/components/ui/page-hero";
import { services } from "@/src/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Ayurvedic treatments and wellness therapies.",
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        title="Our Services"
        subtitle="Personalized Ayurvedic therapies for complete wellness."
      />

      <section className="py-20">
        <div className="container-custom grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="rounded-3xl bg-white p-8 shadow-sm"
            >
              <h3 className="text-2xl font-semibold text-green-700">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}