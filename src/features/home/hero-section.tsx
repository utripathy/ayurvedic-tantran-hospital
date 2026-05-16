import Button from "@/src/components/ui/button";
import { heroData } from "@/src/data/home";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-900 to-green-700 text-white">
      <div className="container-custom py-32 text-center">
        <span className="rounded-full border border-white/20 px-5 py-2 text-sm">
          Trusted Ayurvedic Healthcare
        </span>

        <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
          {heroData.title}
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg text-green-50">
          {heroData.subtitle}
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button>
            Book Appointment
          </Button>

          <Button variant="secondary">
            Explore Services
          </Button>
        </div>
        <div className="mt-20">
          <Image
            src="/images/hero.png"
            alt="Ayurveda Tantran Hospital"
            width={1000}
            height={600}
            priority
            className="mx-auto rounded-[2rem] object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}