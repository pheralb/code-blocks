"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";

import { SearchIcon } from "lucide-react";
import { getDocsByCategory } from "@/utils/docs";

const SearchDocs = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const docsByCategory = getDocsByCategory();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        size="sm"
        variant="outline"
        onClick={() => setOpen(true)}
        className="space-x-1 rounded-2xl"
      >
        <SearchIcon size={14} />
        <span className="font-mono text-xs tracking-tight text-neutral-600 dark:text-neutral-400">
          Ctrl + k
        </span>
      </Button>
      <CommandDialog
        title="Search Docs"
        description="Search Code-Blocks docs..."
        open={open}
        onOpenChange={setOpen}
      >
        <CommandInput placeholder="Search" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {docsByCategory.map(({ category, docs }) => (
            <CommandGroup key={category} heading={category} className="my-2">
              {docs.map((doc) => (
                <CommandItem
                  key={doc._meta.path}
                  onSelect={() => {
                    router.push(`/docs/${doc.folder}/${doc._meta.path}`);
                    setOpen(false);
                  }}
                >
                  <span className="font-medium">{doc.title}</span>
                  <span className="max-w-110 truncate text-xs text-neutral-600 dark:text-neutral-400">
                    {doc.description}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchDocs;
