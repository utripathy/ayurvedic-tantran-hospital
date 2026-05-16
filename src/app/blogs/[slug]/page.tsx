import Navbar from "@/src/components/layout/navbar";
import Footer from "@/src/components/layout/footer";
import PageHero from "@/src/components/ui/page-hero";

import { blogs } from "@/src/data/blogs";

import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props) {
  const { slug } = await params;

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    return {};
  }

  return {
    title: blog.title,
    description: blog.excerpt,
  };
}

export default async function BlogDetailsPage({
  params,
}: Props) {
  const { slug } = await params;

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    notFound();
  }

  return (
    <main>
      <Navbar />

      <PageHero
        title={blog.title}
        subtitle={blog.excerpt}
      />

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <article className="rounded-3xl bg-white p-10 shadow-sm">
            <p className="text-lg leading-8 text-gray-700">
              {blog.content}
            </p>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}