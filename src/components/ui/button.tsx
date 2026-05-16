import {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import clsx from "clsx";

type Props =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;

    variant?:
      | "primary"
      | "secondary";
  };

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={clsx(
        "rounded-full px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-300",

        "active:scale-[0.98]",

        {
          "bg-green-800 text-white shadow-lg hover:-translate-y-1 hover:bg-green-900":
            variant === "primary",

          "border border-green-800 bg-white text-green-800 hover:bg-green-50":
            variant === "secondary",
        },

        className
      )}
    >
      {children}
    </button>
  );
}