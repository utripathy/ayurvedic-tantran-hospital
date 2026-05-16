import Button from "@/src/components/ui/button";

export default function CTASection() {
  return (
    <section className="bg-green-800 py-20 text-white">
      <div className="container-custom text-center">
        <h2 className="text-4xl font-bold md:text-5xl">
          Begin Your Wellness Journey Today
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg">
          Consult with our experienced Ayurvedic specialists
          for personalized treatment plans.
        </p>

        <div className="mt-10">
          <Button className="bg-white text-green-700 hover:bg-gray-100">
            Book Appointment
          </Button>
        </div>
      </div>
    </section>
  );
}