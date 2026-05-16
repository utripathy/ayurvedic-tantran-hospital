

import Footer from "@/src/components/layout/footer";
import Navbar from "@/src/components/layout/navbar";
import BlogCard from "@/src/components/ui/blog-card";
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
    <BlogCard
      key={blog.slug}
      slug={blog.slug}
      title={blog.title}
      excerpt={blog.excerpt}
    />
  ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}