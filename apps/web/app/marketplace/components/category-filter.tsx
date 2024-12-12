"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "../../../components/ui/button";
import { Category } from "../../../models";

export default function CategoryFilter(): JSX.Element {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const selectedCategory = searchParams.get("category");
  const categoryEntries = Object.entries(Category);
  const isAll =
    !selectedCategory ||
    !categoryEntries.some(([, value]) => value === selectedCategory);

  const btnClassName =
    "h-10 bg-primary-gradient-2 disabled:opacity-100 disabled:bg-primary-gradient";
  return (
    <div className="overflow-auto whitespace-nowrap space-x-4">
      <Button
        className={btnClassName}
        disabled={isAll}
        onClick={_onCategoryClick()}
      >
        All
      </Button>
      {categoryEntries.map(([key, value]) => (
        <Button
          key={key}
          className={btnClassName}
          disabled={selectedCategory === value}
          onClick={_onCategoryClick(value)}
        >
          {value}
        </Button>
      ))}
    </div>
  );

  function _onCategoryClick(category?: string) {
    return () => {
      const newSearchParams = new URLSearchParams(searchParams.toString());
      if (!category) {
        newSearchParams.delete("category");
      } else {
        newSearchParams.set("category", category);
      }


      let queryStr = newSearchParams.toString();
      if (queryStr) {
        queryStr = `?${queryStr}`;
      }
      router.push(`${pathname}${queryStr}`, {
        scroll: false,
      });
    };
  }
}
