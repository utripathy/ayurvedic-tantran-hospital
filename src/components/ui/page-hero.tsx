type Props = {
  title: string;
  subtitle?: string;
};

export default function PageHero({
  title,
  subtitle,
}: Props) {
  return (
    <section className="bg-green-800 py-24 text-white">
      <div className="container-custom text-center">
        <h1 className="text-5xl font-bold md:text-6xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-6 max-w-3xl text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}