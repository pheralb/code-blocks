"use client";

import { usePathname } from "next/navigation";
import { SidebarLinksData } from "@/components/docs/sidebar-data";

import SidebarGroup from "@/components/docs/sidebar-group";
import SidebarSubItem from "@/components/docs/sidebar-sub-item";
import { SidebarLinkItem } from "@/components/docs/sidebar-link-item";

const SidebarLinks = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-1 flex-col space-y-6 pb-6">
      {SidebarLinksData.map((data) => (
        <SidebarGroup title={data.groupTitle} key={data.groupTitle}>
          {data.items.map((link) => {
            if (link.subItems) {
              return (
                <SidebarSubItem
                  key={link.title}
                  title={link.title}
                  icon={link.icon}
                >
                  {link.subItems.map((subItem) => (
                    <SidebarLinkItem
                      key={subItem.href}
                      href={subItem.href ?? ""}
                      isActive={pathname === subItem.href}
                    >
                      <p className="truncate">{subItem.title}</p>
                    </SidebarLinkItem>
                  ))}
                </SidebarSubItem>
              );
            }
            return (
              <SidebarLinkItem
                key={link.href}
                href={link.href ?? ""}
                isActive={pathname === link.href}
              >
                {link.icon && <link.icon size={16} className="shrink-0" />}
                <p className="truncate">{link.title}</p>
              </SidebarLinkItem>
            );
          })}
        </SidebarGroup>
      ))}
    </nav>
  );
};

export default SidebarLinks;
