
import Footer from "@/src/components/layout/footer";
import Navbar from "@/src/components/layout/navbar";
import PageHero from "@/src/components/ui/page-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Downloads",
  description:
    "Download wellness guides and Ayurvedic resources.",
};

export default function DownloadsPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        title="Downloads"
        subtitle="Free Ayurvedic wellness resources and guides."
      />

      <section className="py-20">
        <div className="container-custom grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-3xl bg-white p-8 shadow-sm"
            >
              <h3 className="text-2xl font-semibold">
                Wellness Guide PDF
              </h3>

              <p className="mt-4 text-gray-600">
                Download Ayurvedic wellness resources.
              </p>

              <button className="mt-6 rounded-2xl bg-green-700 px-6 py-3 text-white">
                Download
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}