

import Footer from "@/src/components/layout/footer";
import Navbar from "@/src/components/layout/navbar";
import PageHero from "@/src/components/ui/page-hero";
import { blogs } from "@/src/data/blogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Read Ayurvedic wellness and healthcare articles.",
};

export default function BlogsPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        title="Blogs"
        subtitle="Insights and wellness tips from Ayurveda experts."
      />

      <section className="py-20">
        <div className="container-custom grid gap-6 md:grid-cols-2">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="rounded-3xl bg-white p-8 shadow-sm"
            >
              <h3 className="text-2xl font-semibold">
                {blog.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {blog.excerpt}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}