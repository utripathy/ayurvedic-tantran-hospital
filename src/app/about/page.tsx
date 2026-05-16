

import Footer from "@/src/components/layout/footer";
import Navbar from "@/src/components/layout/navbar";
import PageHero from "@/src/components/ui/page-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Ayurveda Tantran Hospital and our Ayurvedic healthcare philosophy.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        title="About Us"
        subtitle="Holistic Ayurvedic healthcare with modern wellness practices."
      />

      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-bold">
            Our Mission
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ayurveda Tantran Hospital focuses on natural
            healing through authentic Ayurvedic therapies,
            lifestyle improvements, and holistic wellness.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our expert doctors provide personalized
            treatment plans for long-term health and
            balance.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}