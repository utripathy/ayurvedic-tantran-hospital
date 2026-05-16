type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-14 text-center">
      <span className="font-semibold uppercase tracking-[0.2em] text-green-700">
        Ayurveda Wellness
      </span>

      <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}