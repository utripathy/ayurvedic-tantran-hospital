type Props = {
  title: string;
  subtitle?: string;
};

export default function PageHero({
  title,
  subtitle,
}: Props) {
  return (
    <section className="bg-gradient-to-b from-green-800 to-green-700 py-28 text-white">
      <div className="container-custom text-center">
        <h1 className="text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-green-50/90">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}