import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({ children, variant = "primary", className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-sky-600 text-white hover:bg-sky-700"
      : "bg-white text-sky-700 border border-sky-600 hover:bg-sky-50";

  return <button className={`${base} ${styles} ${className}`}>{children}</button>;
}
