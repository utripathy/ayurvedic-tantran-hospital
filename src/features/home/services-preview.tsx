import SectionHeading from "@/src/components/ui/section-heading";
import { servicesPreview } from "@/src/data/home";


export default function ServicesPreview() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <SectionHeading
          title="Our Services"
          subtitle="Holistic Ayurvedic therapies for complete wellness."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {servicesPreview.map((service) => (
            <div
              key={service.title}
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
      </div>
    </section>
  );
}