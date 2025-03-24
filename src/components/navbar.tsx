"use client";

import { container } from "@/ui/container";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    title: "MDX Component",
    path: "/",
  },
  {
    title: "Client Component",
    path: "/client",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav
      className={cn(
        "sticky top-0 z-50",
        "bg-neutral-100/30 backdrop-blur-md dark:bg-neutral-900/30",
        "border-y border-dashed border-neutral-200 dark:border-neutral-800",
      )}
    >
      <div className={cn(container, "flex items-center")}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={cn(
              "px-4 py-3",
              "text-neutral-900 dark:text-neutral-50",
              "hover:bg-neutral-200 dark:hover:bg-neutral-800",
              "transition-colors",
              link.path === pathname &&
                "border-b border-neutral-400 dark:border-neutral-500",
            )}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
