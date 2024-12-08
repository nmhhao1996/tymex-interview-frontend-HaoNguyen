import type { Metadata } from "next";
import {
  Content,
  Footer,
  Header,
  Layout as BaseLayout,
} from "../../components/ui/layout";
import MenuHeader from "../../components/ui/header-menu";

export const metadata: Metadata = {
  title: "TymeX",
  description: "TymeX",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <BaseLayout>
      <Header className="fixed top-0 w-full z-10">
        <MenuHeader />
      </Header>
      <Content className="bg-stars-image h-96">{children}</Content>
      <Footer>Footer</Footer>
    </BaseLayout>
  );
}
