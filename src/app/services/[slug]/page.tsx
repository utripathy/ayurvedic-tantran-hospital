import Navbar from "@/src/components/layout/navbar";
import Footer from "@/src/components/layout/footer";
import PageHero from "@/src/components/ui/page-hero";

import { services } from "@/src/data/services";

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

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailsPage({
  params,
}: Props) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <main>
      <Navbar />

      <PageHero
        title={service.title}
        subtitle={service.shortDescription}
      />

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-bold">
            About Treatment
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            {service.description}
          </p>

          <div className="mt-12">
            <h3 className="text-3xl font-bold">
              Benefits
            </h3>

            <ul className="mt-6 space-y-4">
              {service.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="rounded-2xl bg-white p-5 shadow-sm"
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}