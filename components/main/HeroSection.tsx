import { RefreshCcw } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="content bg-[#f4f4f5]">this is hero section</div>

      {/* bottom curve */}
      <div className="w-full h-20 -mt-px rotate-180 border">
        <svg
          className="w-full h-full block"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path d="M0,0 Q720,100 1440,0 L1440,100 L0,100 Z" fill="#f4f4f5" />
        </svg>
      </div>
    </div>
  );
}