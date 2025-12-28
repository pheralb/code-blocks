import type { ReactNode } from "react";

import SidebarLinks from "@/components/docs/sidebar-links";
import { Sidebar, SidebarPageContent } from "@/components/ui/sidebar";
import Header from "@/components/header";
import SidebarMobileMenu from "@/components/docs/sidebar-mobile-menu";

interface DocsLayoutProps {
  children: ReactNode;
}

const DocsLayout = async ({ children }: DocsLayoutProps) => {
  return (
    <>
      <Header layout="docs" />
      <Sidebar position="left">
        <SidebarLinks />
      </Sidebar>
      <SidebarPageContent>
        <SidebarMobileMenu />
        {children}
      </SidebarPageContent>
    </>
  );
};

export default DocsLayout;
