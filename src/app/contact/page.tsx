
import Footer from "@/src/components/layout/footer";
import Navbar from "@/src/components/layout/navbar";
import PageHero from "@/src/components/ui/page-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ayurveda Tantran Hospital for appointments and inquiries.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        title="Contact Us"
        subtitle="We are here to help you with your wellness journey."
      />

      <section className="py-20">
        <div className="container-custom max-w-3xl">
          <div className="rounded-3xl bg-white p-10 shadow-sm">
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-2xl border p-4"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-2xl border p-4"
              />

              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full rounded-2xl border p-4"
              />

              <button className="rounded-2xl bg-green-700 px-8 py-4 text-white">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}