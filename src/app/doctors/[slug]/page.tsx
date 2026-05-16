import Image from "next/image";

import Navbar from "@/src/components/layout/navbar";
import Footer from "@/src/components/layout/footer";
import PageHero from "@/src/components/ui/page-hero";

import { doctors } from "@/src/data/doctors";

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

  const doctor = doctors.find(
    (item) => item.slug === slug
  );

  if (!doctor) return {};

  return {
    title: doctor.name,
    description: doctor.shortBio,
  };
}

export default async function DoctorDetailsPage({
  params,
}: Props) {
  const { slug } = await params;

  const doctor = doctors.find(
    (item) => item.slug === slug
  );

  if (!doctor) {
    notFound();
  }

  return (
    <main>
      <Navbar />

      <PageHero
        title={doctor.name}
        subtitle={doctor.designation}
      />

      <section className="section-padding">
        <div className="container-custom grid gap-12 md:grid-cols-2">
          <div className="relative h-[500px] overflow-hidden rounded-[2rem]">
            <Image
              src={doctor.image}
              alt={doctor.name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-green-900">
              About Doctor
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              {doctor.description}
            </p>

            <div className="mt-10">
              <h3 className="text-2xl font-bold">
                Specialties
              </h3>

              <div className="mt-5 flex flex-wrap gap-4">
                {doctor.specialties.map(
                  (specialty) => (
                    <div
                      key={specialty}
                      className="rounded-full bg-green-100 px-5 py-3 font-medium text-green-800"
                    >
                      {specialty}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}