import React from "react";

interface IconProps {
  className?: string;
  size?: number | string;
}

export default function RatingStarIcon({ className, size = 24 }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height={size} viewBox="0 0 25 24" fill="none" className={className}>
<path d="M24.9075 8.86053H15.3962L12.4583 0L9.5113 8.86053L0 8.85154L7.70268 14.3332L4.75565 23.1848L12.4583 17.7121L20.1518 23.1848L17.214 14.3332L24.9075 8.86053Z" fill="currentColor"/>
</svg>
  );
}