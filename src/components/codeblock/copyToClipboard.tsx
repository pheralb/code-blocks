"use client";

import { motion, useAnimation, type Transition } from "motion/react";
import { copyToClipboard } from "@/utils/copyToClipboard";

const defaultTransition: Transition = {
  type: "spring",
  stiffness: 160,
  damping: 17,
  mass: 1,
};

interface CopyToClipboardBtnProps {
  content: string;
  className?: string;
}

const CopyToClipboardBtn = (props: CopyToClipboardBtnProps) => {
  const controls = useAnimation();

  const handleCopy = async () => {
    try {
      await copyToClipboard(props.content);
    } catch (error) {
      console.error(
        "⚠️ copyToClipboardBtn.tsx - Error copying to clipboard:",
        error
      );
    }
  };

  return (
    <button
      title="Copy to clipboard"
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
      onClick={() => handleCopy()}
      className="text-neutral-500 cursor-pointer transition-colors hover:text-black focus:outline-none dark:text-neutral-400 dark:hover:text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.rect
          width="14"
          height="14"
          x="8"
          y="8"
          rx="2"
          ry="2"
          variants={{
            normal: { translateY: 0, translateX: 0 },
            animate: { translateY: -3, translateX: -3 },
          }}
          animate={controls}
          transition={defaultTransition}
        />
        <motion.path
          d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
          variants={{
            normal: { x: 0, y: 0 },
            animate: { x: 3, y: 3 },
          }}
          transition={defaultTransition}
          animate={controls}
        />
      </svg>
    </button>
  );
};

export default CopyToClipboardBtn;
