"use client";
import Link from "next/link";
import "./styles.css";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { ChevronDown, Globe } from "lucide-react";

type HeaderMenuProps = {
  items: {
    title: string;
    url: string;
  }[];
};

export default function HeaderMenu({ items }: HeaderMenuProps): JSX.Element {
  const activeURL = usePathname();

  return (
    <div className="fixed z-50 w-full h-header flex items-center bg-[#17161AB2]">
      <div className="container mx-auto flex items-center justify-between">
        <ul className="header-menu  gap-3">
          {items.map((item) => (
            <li key={item.url} className="h-full">
              <Link
                href={item.url}
                className={twMerge(
                  "font-bold px-3 text-white header-menu__item font-drone-ranger-pro",
                  activeURL === item.url ? "header-menu__item--active" : "",
                )}
              >
                {item.title}
                <div
                  className={twMerge(
                    "header-menu__title-underline ml-1",
                    activeURL === item.url
                      ? "header-menu__title-underline--active"
                      : "",
                  )}
                ></div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-7">
          <Button>Connect Wallet</Button>
          <button className="flex items-center gap-2">
            <Globe color="white" />
            <ChevronDown color="white" />
          </button>
        </div>
      </div>
    </div>
  );
}
