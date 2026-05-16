import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  excerpt: string;
};

export default function BlogCard({
  slug,
  title,
  excerpt,
}: Props) {
  return (
    <Link href={`/blogs/${slug}`}>
      <div className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
        <h3 className="text-2xl font-semibold">
          {title}
        </h3>

        <p className="mt-4 text-gray-600">
          {excerpt}
        </p>

        <div className="mt-6 font-medium text-green-700">
          Read More →
        </div>
      </div>
    </Link>
  );
}