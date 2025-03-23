"use client";

import type { FC, SVGProps } from "react";
import type { Variants } from "motion/react";

import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/utils/cn";
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

const CopyIcon: FC<SVGProps<SVGElement>> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
  </svg>
);

const CheckIcon: FC<SVGProps<SVGElement>> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M20 6 9 17l-5-5"></path>
  </svg>
);

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
          <CheckIcon />
        </motion.div>
      ) : (
        <motion.div
          animate="visible"
          exit="hidden"
          initial="hidden"
          key="copy"
          variants={variants}
        >
          <CopyIcon />
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
      title={label}
      aria-label={label}
      className={cn(className)}
      onClick={handleCopy}
    >
      {isMounted && <CopyButtonIcon isAnimating={isAnimating} />}
    </button>
  );
};

export default CopyButton;
