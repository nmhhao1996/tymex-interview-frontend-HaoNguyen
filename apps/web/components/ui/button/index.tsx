import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const variants = {
  default:
    "bg-primary-gradient text-white rounded px-4 h-9 disabled:opacity-50",
  link: "bg-transparent rounded text-primary px-4 h-9 disabled:opacity-50",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
};

export function Button({
  variant = "default",
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={twMerge(variants[variant], className)} {...props} />
  );
}
