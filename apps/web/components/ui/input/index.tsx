import React from "react";
import { twMerge } from "tailwind-merge";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export default function Input(props: InputProps) {
  return (
    <input
      {...props}
      className={twMerge(
        "bg-transparent border border-input h-10 rounded w-full text-white px-4 outline-white placeholder:text-input",
        props.className,
      )}
    />
  );
}
