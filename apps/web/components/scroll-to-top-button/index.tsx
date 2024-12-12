"use client";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export function ScrollToTopButton(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      className={twMerge(
        "fixed bottom-4 right-4 z-50 p-2 rounded-full bg-primary-gradient text-white opacity-80",
        isVisible ? "block" : "hidden"
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp />
    </button>
  );
}
