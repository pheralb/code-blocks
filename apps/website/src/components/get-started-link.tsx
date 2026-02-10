"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useHotkeys } from "react-hotkeys-hook";

import { ChevronRightIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const GetStartedLink = () => {
  const navigate = useRouter();
  useHotkeys("c", () => navigate.push("/docs"));
  return (
    <Link
      href="/docs/getting-started/prerequisites"
      className={buttonVariants({
        size: "default",
        className: "group w-full md:w-auto",
      })}
    >
      <span>Get Started</span>
      <span className="rounded-sm bg-neutral-600/60 px-0.5 font-mono text-neutral-300 dark:bg-neutral-700/60">
        c
      </span>
      <ChevronRightIcon
        size={16}
        className="transition-transform group-hover:translate-x-0.5"
      />
    </Link>
  );
};

export default GetStartedLink;
