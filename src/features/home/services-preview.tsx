import SectionHeading from "@/src/components/ui/section-heading";
import { servicesData } from "@/src/data/home";

export default function ServicesPreview() {
  return (
    <section className="bg-white py-20">
      <div className="container-custom">
        <SectionHeading
          title="Our Services"
          subtitle="Holistic Ayurvedic therapies designed for complete wellness."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border bg-[#f8f5f0] p-8 transition hover:-translate-y-2"
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
      </div>
    </section>
  );
}