import { cn } from "@/utils/cn";

const Header = () => {
  return (
    <header className={cn("w-full py-4")}>
      <div className="flex items-center space-x-2">
        <h2 className="text-2xl font-semibold tracking-tight">Codeblocks</h2>
      </div>
    </header>
  );
};

export default Header;
