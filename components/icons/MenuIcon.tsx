import React from "react";

interface IconProps {
  className?: string;
  size?: number | string;
}

export default function MenuIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_240_13183)">
        <path
          d="M1 3H17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 9H17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 15H17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_240_13183">
          <rect width="18" height="18" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}
