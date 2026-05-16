import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  className,
}: Props) {
  return (
    <button
      className={clsx(
        "rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300",
        {
          "bg-green-700 text-white hover:bg-green-800":
            variant === "primary",

          "border border-green-700 bg-white text-green-700 hover:bg-green-50":
            variant === "secondary",
        },
        className
      )}
    >
      {children}
    </button>
  );
}