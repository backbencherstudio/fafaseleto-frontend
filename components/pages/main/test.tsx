import { CroissantIcon, RefreshCcw } from "lucide-react";
import { CustomButton } from "../../reuseable/CustomButton";
import RatingStarIcon from "../../icons/RatingStarIcon";
import CrownIcon from "../../icons/CrownIcon";
import CrownIcon2 from "../../icons/CrownIcon2";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden ">
      {/* hero content */}
      <div className=" bg-[#f4f4f5]">
        <div className="max-w-[1300px] mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-between gap-8.5 pt-12 pb-4">
          {/* left */}
          <div className="max-w-[390px] md:max-w-[559px]">
            <h1 className="text-[54px] md:text-[76px] font-bold leading-[58px] md:leading-[74px] tracking-[-2px] mb-6 md:mb-[45px] font-secondary">
              The{" "}
              <span className="relative ">
                difference
                <CrownIcon className=" absolute top-1.5 -right-5 w-5 md:w-6" />
              </span>{" "}
              between a{" "}
              <span className="italic bg-[#F00F0F] inline-flex -rotate-3 text-white pr-4  rounded-2xl py-[-1] font-medium">
                Refusal
              </span>{" "}
              <br />
              and an{" "}
              <span className="font-medium text-[#10B981] italic tracking-[-3px]">
                Interview.
              </span>
            </h1>

            <p className="self-stretch text-[#0D1B2A] text-lg font-normal leading-[30px] opacity-90 mb-[35px]">
              CV template by HEC and Polytechnique grades crafted to impress
              recruiters in finance, consulting, and startups.
            </p>

            <div className="flex items-center gap-4">
              <CustomButton className="h-[57px] md:h-15">
                Evaluate my CV
              </CustomButton>
              <CustomButton className="h-[57px] md:h-15" variant="outline">
                Optimize my CV
              </CustomButton>
            </div>

            {/* rating section */}

            <div className="flex items-center mt-[51px] gap-[13px] ">
              {/* Empty user (gray outlines) */}
              <div className="flex  ">
                <div className="w-[39px] h-[38px] rounded-full border border-gray-300 bg-white "></div>
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-[39px] h-[38px] rounded-full border border-gray-300 bg-white ml-[-18px]"
                  ></div>
                ))}
              </div>

              {/* Filled stars + text */}
              <div className="items-center gap-2 ">
                <div className="flex text-[#00b67a] text-xl">
                  {[...Array(5)].map((_, i) => (
                    <RatingStarIcon
                      className="w-[24.907px] h-[23.185px]"
                      key={i}
                    />
                  ))}
                </div>
                <p className="text-[#162456]  text-[15px] font-normal leading-6.75 opacity-70 ml-1">
                  Already 500 users
                </p>
              </div>
            </div>
          </div>
          {/* right */}
          {/* <div>this right side</div> */}

          <RightSide />
        </div>
      </div>

      {/* bottom curve */}
      <div className="w-full h-10 md:h-20 -mt-px rotate-180 ">
        <svg
          className="w-full h-full block"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path d="M0,0 Q720,100 1440,0 L1440,100 L0,100 Z" fill="#f4f4f5" />
        </svg>
      </div>
    </section>
  );
}

const RightSide = () => {
  return (
    <div>
      <div className="flex items-end">
        {/* before */}
        <div className="w-[117px] md:w-[193px] h-[461.047px] [background:#CCF7D2] rounded-[12px_0_0_0] pl-7.5 pt-3.5 relative">
          <p className="text-[#F00F0F] [font-family:Inter] text-xl italic font-medium leading-[normal] tracking-[-2px] mb-[9px]">
            Before
          </p>

          <div className="w-[335.818px] h-[447.756px] ">
            <img className="   " src="/images/before-cv2.svg" alt="" />
          </div>

          <div className=" absolute -bottom-0.5 z-90 -left-23.5 ">
            <ScoreCard
              type="Before"
              title="Messy Structure"
              statusLabel="Average"
              score="34"
              color="#F00F0F"
            />
          </div>
        </div>

        {/* after */}
        <div className="w-[335px] md:w-[411px] h-[555px]  [background:linear-gradient(157deg,rgba(16,185,129,0.70)_-1.1%,rgba(7,83,58,0.70)_146.07%)] rounded-[12px_12px_0_0] z-50 pl-9 pt-4.5 relative">
          <p className="text-white  text-xl italic font-medium leading-[normal] tracking-[-2px] mb-[11px]">
            After
          </p>

          <div className="w-[400px] h-full">
            <img className="w-fit h-" src="/images/after-cv.svg" alt="" />
          </div>

          <div className=" absolute z-90 -right-15 -bottom-4">
            <ScoreCard
              type="After"
              title="Optimized Layout"
              statusLabel="Perfect"
              score="94"
              color="#10B981"
            />
          </div>

          {/* crown icon */}

          <div className=" absolute z-99 -top-6 -left-7">
            <CrownIcon2 />
          </div>
        </div>
      </div>
    </div>
  );
};

const ScoreCard = ({
  type = "Before", // "Before" or "After"
  title = "Messy Structure",
  statusLabel = "Average",
  score = "34",
  color = "#F00F0F", // Default red from your code
}) => {
  return (
    <div className="w-[183.275px] h-[126px] bg-white p-[13px_15px_14px_17px] rounded-lg shadow-sm  border-gray-50">
      {/* Type Label (Before/After) */}
      <p
        style={{ color: color }}
        className="self-stretch [leading-trim:both] [text-edge:cap] font-sans text-xs font-medium leading-[normal] tracking-[-0.24px] capitalize pb-[7px]"
      >
        {type}
      </p>

      {/* Main Title */}
      <p className="text-[#7B8285] font-sans text-xs font-medium leading-[normal] tracking-[-0.24px] uppercase">
        {title}
      </p>

      {/* Divider */}
      <div className="opacity-[0.15] bg-[#0D1B2A] mt-2.5 mb-[15px] h-[1px]" />

      {/* Status Row */}
      <div className="flex mb-1.5 gap-[3.75px] items-center">
        <div
          style={{ backgroundColor: color }}
          className="w-[12.858px] h-[12.858px] rounded-[1.837px]"
        />
        <p className="text-black [leading-trim:both] [text-edge:cap] text-xs font-medium leading-[normal] tracking-[-0.24px] capitalize opacity-40">
          {statusLabel}
        </p>
      </div>

      {/* Final Score */}
      <h4 className="self-stretch text-black font-sans text-base font-bold leading-[normal] tracking-[-0.32px] capitalize">
        {score}/100
      </h4>
    </div>
  );
};
