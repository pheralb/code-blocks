import { container } from "@/ui/container";
import { cn } from "@/utils/cn";

const Header = () => {
  return (
    <header
      className={cn(container, "flex flex-col space-y-0.5", "w-full pt-10 pb-6")}
    >
      <div className="flex items-center space-x-2">
        <h2 className="font-headings text-3xl font-semibold tracking-tight">
          Codeblocks
        </h2>
      </div>
      <p className="text-neutral-700 dark:text-neutral-400">
        A beautifully codeblock MDX & client component. Built with Shiki.
      </p>
    </header>
  );
};

export default Header;
