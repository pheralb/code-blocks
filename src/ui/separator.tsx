import { cn } from "@/utils/cn";

interface SeparatorProps {
  className?: string;
}

const Separator = (props: SeparatorProps) => {
  return (
    <div
      className={cn("h-px bg-neutral-200 dark:bg-neutral-800", "my-6", props.className)}
    />
  );
};

export default Separator;
