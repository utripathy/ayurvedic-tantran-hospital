import Button from "@/src/components/ui/button";

export default function AboutPreview() {
  return (
    <section className="py-20">
      <div className="container-custom grid items-center gap-10 md:grid-cols-2">
        <div>
          <div className="h-[400px] rounded-3xl bg-green-200" />
        </div>

        <div>
          <span className="font-semibold uppercase tracking-widest text-green-700">
            About Us
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight">
            Healing Naturally Through Ayurveda
          </h2>

          <p className="mt-6 text-gray-600">
            Ayurveda Tantran Hospital combines traditional
            Ayurvedic wisdom with modern healthcare practices
            to provide holistic wellness solutions.
          </p>

          <p className="mt-4 text-gray-600">
            Our treatments focus on restoring balance,
            improving lifestyle, and promoting long-term
            health naturally.
          </p>

          <div className="mt-8">
            <Button>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}