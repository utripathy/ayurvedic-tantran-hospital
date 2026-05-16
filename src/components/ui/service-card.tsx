import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  description: string;
};

export default function ServiceCard({
  slug,
  title,
  description,
}: Props) {
  return (
    <Link href={`/services/${slug}`}>
      <div className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
        <h3 className="text-2xl font-semibold text-green-700">
          {title}
        </h3>

        <p className="mt-4 text-gray-600">
          {description}
        </p>

        <div className="mt-6 font-medium text-green-700">
          Learn More →
        </div>
      </div>
    </Link>
  );
}