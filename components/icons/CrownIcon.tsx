import React from "react";

interface IconProps {
  className?: string;
  size?: number | string;
}

export default function CrownIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="29"
      viewBox="0 0 28 29"
      fill="none"
      className={className}
    >
      <line
        x1="1.78634"
        y1="17.2141"
        x2="7.82527"
        y2="3.25533"
        stroke="currentColor"
        strokeWidth="3.40864"
        strokeLinecap="round"
      />
      <line
        x1="6.00302"
        y1="21.7355"
        x2="20.0963"
        y2="5.80299"
        stroke="currentColor"
        strokeWidth="3.40864"
        strokeLinecap="round"
      />
      <line
        x1="9.8447"
        y1="25.0167"
        x2="24.8156"
        y2="18.6419"
        stroke="currentColor"
        strokeWidth="3.40864"
        strokeLinecap="round"
      />
    </svg>
  );
}
