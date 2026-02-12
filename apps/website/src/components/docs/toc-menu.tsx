"use client";

import type { ToCItem } from "@/mdx/plugins/generateToC";

import Link from "next/link";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";
import { CornerDownRightIcon, TextAlignStartIcon } from "lucide-react";

interface TableOfContentsProps {
  data: ToCItem[];
}

const TableOfContents = ({ data }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -80% 0px",
        threshold: 1,
      },
    );

    const headings = data.map((item) => document.getElementById(item.slug));
    headings.forEach((heading) => {
      if (heading) {
        observer.observe(heading);
      }
    });

    return () => {
      headings.forEach((heading) => {
        if (heading) {
          observer.unobserve(heading);
        }
      });
    };
  }, [data]);

  return (
    <div className="px-7 py-6">
      <div className="mb-3 flex items-center space-x-2.5 text-neutral-600 dark:text-neutral-400">
        <TextAlignStartIcon size={16} />
        <h2 className="text-sm font-semibold">On this page</h2>
      </div>
      <nav className={cn("flex flex-col text-sm leading-snug")}>
        {data.length > 0 &&
          data.map((item) => (
            <Link
              key={item.id}
              title={item.text}
              href={`#${item.slug}`}
              className={cn(
                "max-w-48 py-1 transition-colors",
                "flex items-center space-x-2 border-l",
                item.level === 2 && "pl-3.5",
                item.level === 3 && "pl-4",
                activeId === item.slug
                  ? "border-neutral-600 font-medium text-neutral-900 dark:border-neutral-400 dark:text-neutral-100"
                  : "border-neutral-300 text-neutral-600 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-100",
              )}
            >
              {item.level >= 3 && <CornerDownRightIcon size={12} />}
              <span className="truncate">{item.text}</span>
            </Link>
          ))}
      </nav>
    </div>
  );
};

export default TableOfContents;
