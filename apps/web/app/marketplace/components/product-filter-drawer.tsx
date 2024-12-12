"use client";
import ProductFilter from "./product-filter";
import { Button } from "../../../components/ui/button";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Filter, X } from "lucide-react";

export default function ProductFilterDrawer(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={_toggleDrawer}
        className="w-10 h-10 px-0 flex justify-center items-center"
      >
        <Filter />
      </Button>
      <Drawer
        open={isOpen}
        onClose={_toggleDrawer}
        direction="right"
        className="!w-[100%] !bg-stars-image"
        lockBackgroundScroll
      >
        <div className="flex justify-end">
          <Button variant="link" onClick={_toggleDrawer}>
            <X />
          </Button>
        </div>
        <div className="p-4">
          <ProductFilter />
        </div>
      </Drawer>
    </>
  );

  function _toggleDrawer() {
    setIsOpen((prev) => !prev);
  }
}
