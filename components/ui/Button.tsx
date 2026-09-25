"use client";
import Link from "next/link";

type ButtonProps = {
  children?: React.ReactNode;
  variant: "primary" | "secondary" | "danger";
  href?: string;
  onClick?: React.MouseEventHandler;
  className?: string;
};

export default function Button({
  children,
  variant,
  href,
  onClick,
  ...rest
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold transition-colors duration-200 cursor-pointer bg-black ";

  const variants = {
    primary: "bg-blue-600 text-black hover:bg-blue-700",
    secondary: "bg-gray-500 text-black hover:bg-gray-300",
    danger: "text-white hover:bg-red-600 bg-red-500",
  };

  if (href) {
    return (
      <Link href={href} className={baseStyles + variants[variant]} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={baseStyles + variants[variant]}
      {...rest}
    >
      {children}
    </button>
  );
}
