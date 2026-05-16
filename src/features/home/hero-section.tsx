import Button from "@/src/components/ui/button";
import { heroData } from "@/src/data/home";

export default function HeroSection() {
  return (
    <section className="bg-green-800 text-white">
      <div className="container-custom py-28 text-center">
        <h1 className="text-5xl font-bold leading-tight md:text-7xl">
          {heroData.title}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg">
          {heroData.subtitle}
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button>
            Book Appointment
          </Button>

          <Button variant="secondary">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}