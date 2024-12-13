"use client";
import Link from "next/link";
import "./styles.css";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { AlignJustify, ChevronDown, Globe, X } from "lucide-react";
import Nav from "./nav";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useState } from "react";

type HeaderMenuProps = {
  items: {
    title: string;
    url: string;
  }[];
};

export default function HeaderMenu({ items }: HeaderMenuProps): JSX.Element {
  const activeURL = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed z-50 w-full h-header flex items-center bg-[#17161AB2]">
        <div className="container mx-auto flex items-center justify-between">
          <Button className="md:hidden ml-2" onClick={_toggleDrawer}>
            <AlignJustify />
          </Button>
          <div className="flex-1 flex justify-center">
            <Nav
              items={items}
              activeURL={activeURL}
              className="hidden md:flex"
            />
          </div>
          <div className="flex items-center gap-7">
            <Button>Connect Wallet</Button>
            <button className="flex items-center gap-2">
              <Globe color="white" />
              <ChevronDown color="white" />
            </button>
          </div>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={_toggleDrawer}
        direction="left"
        className="!w-[50%] overflow-auto"
        style={{ backgroundColor: "#17161AB2" }}
        lockBackgroundScroll
      >
        <div className="flex justify-end">
          <Button
            variant="link"
            onClick={_toggleDrawer}
            data-testid="close-button"
          >
            <X />
          </Button>
        </div>
        <div className="p-4">
          <Nav vertical items={items} activeURL={activeURL} />
        </div>
      </Drawer>
    </>
  );

  function _toggleDrawer() {
    setIsOpen((prev) => !prev);
  }
}
