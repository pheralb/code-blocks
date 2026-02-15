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
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";

import { cn } from "@/utils/cn";
import { SearchIcon } from "lucide-react";
import { getDocsByFolder } from "@/utils/docs";

const SearchDocs = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const docsByFolder = getDocsByFolder();

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
          {Object.entries(docsByFolder).map(([folder, docs], index, array) => (
            <div key={folder}>
              <CommandGroup heading={folder} className="my-1">
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
                    {doc.category && (
                      <div className="mt-1 flex items-center space-x-1">
                        {doc.category.map((cat) => (
                          <span
                            key={cat}
                            className={cn(
                              "bg-neutral-100 dark:bg-neutral-800",
                              "border border-neutral-300 dark:border-neutral-700",
                              "rounded-full px-2 py-0.5 text-xs tracking-tight text-neutral-600 dark:text-neutral-300",
                            )}
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
              {index < array.length - 1 && <CommandSeparator />}
            </div>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchDocs;
