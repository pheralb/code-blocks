"use client";

import { useCallback, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { AnimatePresence, type Variants, motion } from "motion/react";

import { cn } from "@/utils/cn";
import { buttonVariants } from "@/ui/button";
import { useIsMounted } from "@/hooks/isMounted";

interface CopyButtonIconProps {
  isAnimating: boolean;
}

interface CopyButtonProps {
  text: string;
  className?: string;
  label?: string;
}

const COPY_ANIMATION_DURATION = 2000;

const variants: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2 },
  },
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.1 },
  },
};

const CopyButtonIcon = ({ isAnimating }: CopyButtonIconProps) => {
  return (
    <AnimatePresence mode="wait">
      {isAnimating ? (
        <motion.div
          animate="visible"
          exit="hidden"
          initial="hidden"
          key="copied"
          variants={variants}
        >
          <Check className="size-3.5" />
        </motion.div>
      ) : (
        <motion.div
          animate="visible"
          exit="hidden"
          initial="hidden"
          key="copy"
          variants={variants}
        >
          <Copy className="size-3.5" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CopyButton = ({ text, label, className }: CopyButtonProps) => {
  const timeout = useRef<number>(0);
  const isMounted = useIsMounted();
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const copyToClipboard = useCallback(async (text: string) => {
    window.clearTimeout(timeout.current);
    try {
      await navigator.clipboard.writeText(text);
    } catch {}
  }, []);

  const handleCopy = useCallback(() => {
    copyToClipboard(text);
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, COPY_ANIMATION_DURATION);
  }, [copyToClipboard, text]);

  return (
    <button
      aria-label={label}
      className={cn(
        buttonVariants({
          variant: "ghost",
          size: "icon",
        }),
        "px-1.5",
        className,
      )}
      onClick={handleCopy}
      title={label}
    >
      {isMounted && <CopyButtonIcon isAnimating={isAnimating} />}
    </button>
  );
};

export default CopyButton;
