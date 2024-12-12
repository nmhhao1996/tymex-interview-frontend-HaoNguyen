'use client';
import Link from "next/link";
import "./styles.css";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

type HeaderMenuProps = {
  items: {
    title: string;
    url: string;
  }[];
};

export default function HeaderMenu({
  items,
}: HeaderMenuProps): JSX.Element {
  const activeURL = usePathname();

  return (
    <div className="fixed z-50 w-full h-header flex items-center bg-[#17161AB2]">
      <ul className="header-menu container mx-auto gap-3">
        {items.map((item) => (
          <li key={item.url} className="h-full">
            <Link
              href={item.url}
              className={twMerge(
                "font-bold px-3 text-white header-menu__item",
                activeURL === item.url ? "header-menu__item--active" : ""
              )}
            >
              {item.title}
              <div
                className={twMerge(
                  "header-menu__title-underline ml-1",
                  activeURL === item.url ? "header-menu__title-underline--active" : ""
                )}
              ></div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
