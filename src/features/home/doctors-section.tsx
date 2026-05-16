import SectionHeading from "@/src/components/ui/section-heading";

import DoctorCard from "@/src/components/ui/doctor-card";

import { doctors } from "@/src/data/doctors";

export default function DoctorsSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Meet Our Doctors"
          subtitle="Experienced Ayurvedic specialists dedicated to holistic healing and wellness."
        />

        <div className="grid gap-8 md:grid-cols-2">
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
      </div>
    </section>
  );
}