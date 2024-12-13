import Link from "next/link";
import { twMerge } from "tailwind-merge";

type NavProps = {
  items: {
    title: string;
    url: string;
  }[];
  activeURL: string;
  vertical?: boolean;
  className?: string;
};
export default function Nav({
  items,
  activeURL,
  vertical,
  className,
}: NavProps) {
  return (
    <>
      <ul
        className={twMerge(
          "header-menu gap-3 flex",
          className,
          vertical && "header-menu--vertical",
        )}
      >
        {items.map((item) => (
          <li key={item.url} className="h-full">
            <Link
              href={item.url}
              className={twMerge(
                "font-bold px-3 text-white header-menu__item font-drone-ranger-pro",
                activeURL === item.url ? "header-menu__item--active" : ""
              )}
            >
              {item.title}
              <div
                className={twMerge(
                  "header-menu__title-underline ml-1",
                  activeURL === item.url
                    ? "header-menu__title-underline--active"
                    : ""
                )}
              ></div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
