import React from "react";

type Props = {
  value: number; // 29
  max?: number; // 100
};

export const SoftCircleArc: React.FC<Props> = ({ value, max = 100 }) => {
  const clamped = Math.max(0, Math.min(value, max));
  const pct = max === 0 ? 0 : clamped / max;

  // fixed size: 111x111
  const size = 111;

  // soft bg circle size (inside the container)
  const bgSize = 111;

  // arc thickness
  const stroke = 8;

  // radius so the stroke stays INSIDE the soft circle
  const r = size / 2 - stroke / 2; // 46 - 4 = 42
  const c = 2 * Math.PI * r;
  const dash = c * pct;

  // center of the soft circle in the 111x111 box
  const cx = size / 2;
  const cy = size / 2;

  return (
    <div className="relative grid place-items-center w-[111px] h-[111px]">
      {/* soft circle */}
      <div className="absolute rounded-full bg-[#fdecee] w-[111px] h-[111px]" />

      {/* arc INSIDE the soft circle */}
      <svg
        className="absolute"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        aria-hidden="true"
      >
        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="#f11b2a"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${dash} ${c - dash}`}
          />
        </g>
      </svg>

      {/* text */}
      <div className="relative text-[color:var(--red-600,#E7000B)] text-center  text-[21.262px] font-bold leading-[normal]">
        {clamped}/{max}
      </div>
    </div>
  );
};

// usage:
// <SoftCircleArc value={29} max={100} />
