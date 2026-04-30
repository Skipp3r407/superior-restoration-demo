import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-rescue-500 text-white cta-glow hover:bg-rescue-600 hover:shadow-[0_0_34px_rgba(232,31,55,0.46)] focus-visible:outline-rescue-500",
  secondary:
    "border border-white/40 bg-white/14 text-white backdrop-blur hover:border-rescue-400 hover:bg-rescue-500 hover:text-white focus-visible:outline-white",
  ghost:
    "border border-navy-100 bg-white text-navy-900 shadow-sm hover:-translate-y-0.5 hover:border-rescue-500 hover:bg-rescue-500 hover:text-white focus-visible:outline-rescue-500",
  dark:
    "bg-navy-900 text-white shadow-premium hover:-translate-y-0.5 hover:bg-rescue-500 hover:shadow-[0_0_34px_rgba(232,31,55,0.38)] focus-visible:outline-navy-700"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = ""
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <Link
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center text-sm font-bold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
}
