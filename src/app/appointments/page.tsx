

import Footer from "@/src/components/layout/footer";
import Navbar from "@/src/components/layout/navbar";
import PageHero from "@/src/components/ui/page-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Appointments",
  description:
    "Book appointments with Ayurvedic specialists.",
};

export default function AppointmentsPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        title="Book Appointment"
        subtitle="Consult our Ayurvedic experts for personalized treatments."
      />

      <section className="py-20">
        <div className="container-custom max-w-3xl">
          <div className="rounded-3xl bg-white p-10 shadow-sm">
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Patient Name"
                className="w-full rounded-2xl border p-4"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-2xl border p-4"
              />

              <textarea
                placeholder="Symptoms / Message"
                rows={5}
                className="w-full rounded-2xl border p-4"
              />

              <button className="rounded-2xl bg-green-700 px-8 py-4 text-white">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}