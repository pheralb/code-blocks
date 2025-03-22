import { cn } from "@/utils/cn";

const Header = () => {
  return (
    <header className={cn("flex flex-col space-y-0.5", "w-full py-4", "border-b border-neutral-300 border-dashed dark:border-neutral-800")}>
      <div className="flex items-center space-x-2">
        <h2 className="text-3xl font-semibold font-headings tracking-tight">Codeblocks</h2>
      </div>
      <p className="text-neutral-700 dark:text-neutral-300">
        A beautifully codeblock UI component. Built with Shiki.
      </p>
    </header>
  );
};

export default Header;
