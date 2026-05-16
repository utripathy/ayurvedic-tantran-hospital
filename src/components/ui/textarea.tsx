type Props =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string;
    error?: string;
  };

export default function Textarea({
  label,
  error,
  ...props
}: Props) {
  return (
    <div>
      <label className="mb-2 block font-medium">
        {label}
      </label>

      <textarea
        {...props}
        className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-green-700"
      />

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}