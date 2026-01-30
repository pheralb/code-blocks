"use client";

import colors from "tailwindcss/colors";
import DocColor from "@/components/docs/doc-color";

const DocNeutralColors = () => {
  const neutralColors = Object.entries(colors.neutral);
  return (
    <div className="not-prose grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {neutralColors.map(([shade, color]) => (
        <DocColor key={shade} shade={shade} color={color as string} />
      ))}
    </div>
  );
};

export default DocNeutralColors;
