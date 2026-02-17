"use client";

import {
  useMemo,
  useId,
  useEffect,
  useState,
  type ComponentProps,
} from "react";

import {
  motion,
  AnimatePresence,
  type Transition,
  type Variants,
} from "motion/react";

import { cn } from "@/utils/cn";
import { copyToClipboard } from "@/utils/copy";

interface CopyTextAnimatedProps extends ComponentProps<"button"> {
  content: string;
  iconSize?: number;
}

export type TextMorphProps = {
  children: string;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
  variants?: Variants;
  transition?: Transition;
};

export function TextMorph({
  children,
  as: Component = "p",
  className,
  style,
  variants,
  transition,
}: TextMorphProps) {
  const uniqueId = useId();

  const characters = useMemo(() => {
    const charCounts: Record<string, number> = {};

    return children.split("").map((char) => {
      const lowerChar = char.toLowerCase();
      charCounts[lowerChar] = (charCounts[lowerChar] || 0) + 1;

      return {
        id: `${uniqueId}-${lowerChar}${charCounts[lowerChar]}`,
        label: char === " " ? "\u00A0" : char,
      };
    });
  }, [children, uniqueId]);

  const defaultVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const defaultTransition: Transition = {
    type: "spring",
    stiffness: 280,
    damping: 18,
    mass: 0.3,
  };

  return (
    <Component className={cn(className)} aria-label={children} style={style}>
      <AnimatePresence mode="popLayout" initial={false}>
        {characters.map((character) => (
          <motion.span
            key={character.id}
            layoutId={character.id}
            className="inline-block"
            aria-hidden="true"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants || defaultVariants}
            transition={transition || defaultTransition}
          >
            {character.label}
          </motion.span>
        ))}
      </AnimatePresence>
    </Component>
  );
}

const CopyTextMorph = ({
  content,
  className,
  ...props
}: CopyTextAnimatedProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    if (!isCopied) return;

    const timeout = setTimeout(() => {
      setIsCopied(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [isCopied]);

  const handleCopy = async () => {
    await copyToClipboard(content);
    setIsCopied(true);
  };

  return (
    <button
      title="Copy to clipboard"
      className={cn(
        "cursor-pointer",
        "transition-colors duration-200 ease-in-out",
        "text-xs text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-neutral-50",
        "rounded-md bg-neutral-300/60 px-1.5 py-1 dark:bg-neutral-700/60",
        "border border-transparent hover:border-neutral-400/60 dark:hover:border-neutral-600/60",
        isCopied && "text-neutral-950 dark:text-neutral-50",
        className,
      )}
      onClick={handleCopy}
      {...props}
    >
      <TextMorph>{isCopied ? `Copied` : `Copy`}</TextMorph>
    </button>
  );
};

export { CopyTextMorph };
