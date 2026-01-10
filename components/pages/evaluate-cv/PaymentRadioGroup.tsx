"use client";

import * as React from "react";

type Option = {
  value: string;
  label: string;
};

type Props = {
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: Option[];
  className?: string;
};

export function PaymentRadioGroup({
  name,
  value,
  onChange,
  options,
  className = "",
}: Props) {
  return (
    <div className={`space-y-6 ${className}`} role="radiogroup" aria-label={name}>
      {options.map((opt) => {
        const id = `${name}-${opt.value}`;
        return (
          <label
            key={opt.value}
            htmlFor={id}
            className="flex items-center gap-4 cursor-pointer select-none"
          >
            <input
              id={id}
              name={name}
              type="radio"
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              className="peer sr-only"
            />

            {/* custom circle */}
            <span
              className="
                relative grid place-items-center
                h-6 w-6 rounded-full
                border-2 border-[#9CA3AF]
                peer-checked:border-[#10B981]
                peer-checked:border-7
              "
              aria-hidden="true"
            >
              <span
                className="
                  h-3.5 w-3.5 rounded-full bg-[#10B981]
                  scale-0 peer-checked:scale-100
                  transition-transform duration-150
                "
              />
            </span>

            {/* label */}
            <span
              className="
                text-[22px] leading-none text-[#555555]
                font-medium
                peer-checked:font-bold
              "
            >
              {opt.label}
            </span>
          </label>
        );
      })}
    </div>
  );
}

