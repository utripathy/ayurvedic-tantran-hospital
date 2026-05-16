import SectionHeading from "@/src/components/ui/section-heading";
import { testimonialsData } from "@/src/data/home";


export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <SectionHeading
          title="Patient Testimonials"
          subtitle="What our patients say about our Ayurvedic treatments."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl bg-white p-8 shadow-sm"
            >
              <p className="text-gray-600">
                “{testimonial.review}”
              </p>

              <h4 className="mt-6 text-lg font-semibold text-green-700">
                {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}