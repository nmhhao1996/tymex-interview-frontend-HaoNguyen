import Image from "next/image";
import CategoryFilter from "./components/category-filter";
import ProductFilter from "./components/product-filter";
import ProductFilterDrawer from "./components/product-filter-drawer";
import ProductList from "./components/product-list";
import { Banner } from "./components/banner";

export default function Page(): JSX.Element {
  return (
    <>
      <Banner />
      <div className="container mx-auto pt-14">
        <div className="grid grid-cols-1 px-3 md:grid-cols-4 gap-8">
          <div className="hidden md:block static">
            <div className="sticky top-[calc(var(--header-height)+2rem)]">
              <ProductFilter />
            </div>
          </div>
          <div className="col-span-1 md:col-span-3 space-y-10">
            <div className="flex">
              <div className="md:hidden pr-2 mr-2 border-r border-r-input">
                <ProductFilterDrawer />
              </div>
              <div className="flex-1 overflow-auto">
                <CategoryFilter />
              </div>
            </div>
            <ProductList />
          </div>
        </div>
      </div>
    </>
  );
}
