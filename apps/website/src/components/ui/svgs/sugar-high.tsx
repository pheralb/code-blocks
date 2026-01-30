import type { SVGProps } from "react";

const SugarHigh = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 200 200"
    {...props}
  >
    <g clipPath="url(#clip0_4545_13)">
      <circle
        cx="100"
        cy="100"
        r="98"
        fill="#F6F6F6"
        stroke="#C9C9C9"
        strokeWidth="4"
        transform="rotate(-90 100 100)"
      ></circle>
      <circle
        cx="105.798"
        cy="96.165"
        r="44.776"
        fill="#F3F893"
        transform="rotate(-30 105.798 96.165)"
      ></circle>
      <ellipse
        cx="67.021"
        cy="118.553"
        fill="#FF7878"
        rx="13.433"
        ry="29.851"
        transform="rotate(-30 67.021 118.553)"
      ></ellipse>
    </g>
    <defs>
      <clipPath id="clip0_4545_13">
        <path fill="#fff" d="M0 0h200v200H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export { SugarHigh };
