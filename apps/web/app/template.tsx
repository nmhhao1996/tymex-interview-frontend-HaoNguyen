import Image from "next/image";
import HeaderMenu from "../components/header-menu";

const menuItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Marketplace",
    url: "/marketplace",
  },
  {
    title: "Roadmap",
    url: "/roadmap",
  },
  {
    title: "Whitepaper",
    url: "/whitepaper",
  },
];

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <>
      <HeaderMenu items={menuItems} />
      <main>
        {children}
        <Image src="/img/footer-pattern.png" height={418} width={1920} alt={""} />
      </main>
    </>
  );
}
