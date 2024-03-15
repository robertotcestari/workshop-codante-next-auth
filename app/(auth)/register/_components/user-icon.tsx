import { SVGProps } from "react";

export function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none">
        <path
          fill="currentColor"
          d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2"
          opacity=".16"
        ></path>
        <path
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
        ></path>
        <circle
          cx="12"
          cy="7"
          r="3"
          stroke="currentColor"
          strokeWidth="2"
        ></circle>
      </g>
    </svg>
  );
}
