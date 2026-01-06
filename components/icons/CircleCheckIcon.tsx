import React from "react";

interface IconProps {
  className?: string;
  size?: number | string;
}

export default function CircleCheckIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      style={{ display: 'inline-block' }}
    >
      <path
        d="M10 0.5C15.2381 0.5 19.5 4.76192 19.5 10C19.5 15.2381 15.2381 19.5 10 19.5C4.76192 19.5 0.5 15.2381 0.5 10C0.5 4.76192 4.76192 0.5 10 0.5Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M14.5477 8.42273L9.13101 13.8393C8.96851 14.0018 8.75519 14.0836 8.54187 14.0836C8.32855 14.0836 8.11523 14.0018 7.95273 13.8393L5.24445 11.131C4.91852 10.8052 4.91852 10.2785 5.24445 9.95273C5.57022 9.6268 6.0968 9.6268 6.42273 9.95273L8.54187 12.0719L13.3694 7.24445C13.6952 6.91852 14.2218 6.91852 14.5477 7.24445C14.8735 7.57022 14.8735 8.0968 14.5477 8.42273Z"
        fill="currentColor"
      />
    </svg>
  );
}