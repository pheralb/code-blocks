"use client";

import { useTheme } from "next-themes";
import { useIsMounted } from "@/hooks/isMounted";
import { MonitorIcon, MoonIcon, SunIcon, XIcon } from "lucide-react";

import { Button, buttonVariants } from "@/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";
import { useState } from "react";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isMounted = useIsMounted();
  const [open, setOpen] = useState<boolean>(false);
  const iconSize = 18;

  const toggleTheme = (theme: "light" | "dark" | "system") => {
    setTheme(theme);
  };

  if (!isMounted) return null;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        title="Toggle theme"
        className={buttonVariants({
          variant: "ghost",
          size: "icon",
        })}
      >
        {open ? (
          <XIcon size={18} />
        ) : theme === "light" ? (
          <SunIcon size={18} />
        ) : (
          <MoonIcon size={18} />
        )}
      </PopoverTrigger>
      <PopoverContent
        className="flex w-auto flex-col space-y-2"
        sideOffset={10}
      >
        <p className="text-sm text-neutral-600 dark:text-neutral-400">Theme</p>
        <div className="flex items-center space-x-1">
          <Button
            title="Light Theme"
            variant={theme === "light" ? "outline" : "ghost"}
            onClick={() => toggleTheme("light")}
          >
            <SunIcon width={iconSize} height={iconSize} />
          </Button>
          <Button
            title="Dark Theme"
            variant={theme === "dark" ? "outline" : "ghost"}
            onClick={() => toggleTheme("dark")}
          >
            <MoonIcon width={iconSize} height={iconSize} />
          </Button>
          <Button
            title="System Theme"
            variant={theme === "system" ? "outline" : "ghost"}
            onClick={() => toggleTheme("system")}
          >
            <MonitorIcon width={iconSize} height={iconSize} />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ModeToggle;
