import SectionHeading from "@/src/components/ui/section-heading";
import ServiceCard from "@/src/components/ui/service-card";
import { services } from "@/src/data/services";

export default function ServicesPreview() {
  return (
    <section className="bg-white py-20">
      <div className="container-custom">
        <SectionHeading
          title="Our Services"
          subtitle="Holistic Ayurvedic therapies designed for complete wellness."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} slug={service.slug} title={service.title} description={service.shortDescription} />
          ))}
        </div>
      </div>
    </section>
  );
}