"use client";
import ProductFilter from "./product-filter";
import { Button } from "../../../components/ui/button";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Filter, X } from "lucide-react";
import { useFilterData } from "./product-filter/hooks";

export default function ProductFilterDrawer(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const { hasFilter } = useFilterData();

  return (
    <>
      <Button
        onClick={_toggleDrawer}
        className="relative w-10 h-10 px-0 flex justify-center items-center"
        data-testid="filter-button"
      >
        <Filter />
        {hasFilter && (
          <div className="absolute -top-1 -right-1" data-testid="ping">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
            </span>
          </div>
        )}
      </Button>
      <Drawer
        open={isOpen}
        onClose={_toggleDrawer}
        direction="right"
        className="!w-[100%] !bg-stars-image overflow-auto"
        lockBackgroundScroll
      >
        <div className="flex justify-end">
          <Button variant="link" onClick={_toggleDrawer} data-testid="close-button">
            <X />
          </Button>
        </div>
        <div className="p-4">
          <ProductFilter onFilterChange={_toggleDrawer} />
        </div>
      </Drawer>
    </>
  );

  function _toggleDrawer() {
    setIsOpen((prev) => !prev);
  }
}
