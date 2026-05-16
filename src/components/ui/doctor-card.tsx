import Image from "next/image";
import Link from "next/link";

type Props = {
  slug: string;
  name: string;
  designation: string;
  image: string;
  shortBio: string;
};

export default function DoctorCard({
  slug,
  name,
  designation,
  image,
  shortBio,
}: Props) {
  return (
    <Link href={`/doctors/${slug}`}>
      <div className="soft-shadow overflow-hidden rounded-[2rem] bg-white transition-all duration-500 hover:-translate-y-3">
        <div className="relative h-[320px] w-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold text-green-900">
            {name}
          </h3>

          <p className="mt-2 font-medium text-green-700">
            {designation}
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            {shortBio}
          </p>

          <div className="mt-6 font-semibold text-green-800">
            View Profile →
          </div>
        </div>
      </div>
    </Link>
  );
}