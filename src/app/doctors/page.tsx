import Navbar from "@/src/components/layout/navbar";
import Footer from "@/src/components/layout/footer";

import PageHero from "@/src/components/ui/page-hero";
import DoctorCard from "@/src/components/ui/doctor-card";

import { doctors } from "@/src/data/doctors";

export default function DoctorsPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        title="Our Doctors"
        subtitle="Meet our experienced Ayurvedic healthcare specialists."
      />

      <section className="section-padding">
        <div className="container-custom grid gap-8 md:grid-cols-2">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.slug}
              slug={doctor.slug}
              name={doctor.name}
              designation={
                doctor.designation
              }
              image={doctor.image}
              shortBio={doctor.shortBio}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}