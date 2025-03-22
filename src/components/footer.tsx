import { container } from "@/ui/container";
import { cn } from "@/utils/cn";

import { BuiltBy } from "@/components/builtBy";

const Footer = () => {
  return (
    <footer
      className={cn(
        "fixed bottom-0",
        "bg-neutral-100/30 backdrop-blur-md dark:bg-neutral-900/30",
        "w-full border py-2.5",
      )}
    >
      <div className={cn(container)}>
        <div className="flex items-center justify-between text-neutral-600 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white">
          <BuiltBy size={14} />
          <p>sdas</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
