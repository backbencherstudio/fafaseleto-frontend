import React from "react";

interface IconProps {
  className?: string;
  size?: number | string;
}

export default function CrownIcon2({ className, size = 24 }: IconProps) {
  return (
    <svg
      width="28"
      height="29"
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1.70432"
        y1="-1.70432"
        x2="16.9134"
        y2="-1.70432"
        transform="matrix(-0.397061 -0.917792 -0.917792 0.397061 25.148 19.4551)"
        stroke="#10B981"
        stroke-width="3.40864"
        stroke-linecap="round"
      />
      <line
        x1="1.70432"
        y1="-1.70432"
        x2="22.9755"
        y2="-1.70432"
        transform="matrix(-0.66255 -0.749017 -0.749017 0.66255 21.6715 24.1412)"
        stroke="#10B981"
        stroke-width="3.40864"
        stroke-linecap="round"
      />
      <line
        x1="1.70432"
        y1="-1.70432"
        x2="17.976"
        y2="-1.70432"
        transform="matrix(-0.92006 -0.391777 -0.391777 0.92006 18.8775 27.2526)"
        stroke="#10B981"
        stroke-width="3.40864"
        stroke-linecap="round"
      />
    </svg>
  );
}
