import CircleCheckIcon from "../../icons/CircleCheckIcon";
import SectionHeading from "../../reuseable/SectionHeading";

export default function PricingPlan() {
  return (
    <section className="mt-20">
      {/* title */}
      <div className="">
        <SectionHeading>A plan for every profile</SectionHeading>
        <p className="text-center max-w-[537px] mx-auto mt-[23px] text-[color:var(--1,#0D1B2A)] text-center  text-base font-normal leading-[23px] opacity-90 md:opacity-100">
          Whether you just want to evaluate your CV or aim for a role at BCG,
          Goldman Sachs, or LVMH, we have a plan for you.
        </p>
      </div>

      {/* cards */}

      <div>
        <div className="max-w-[1300px] mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-center md:justify-between gap-5 mt-10 mb-16 items-center">
          {/* Card 1 */}
          <div className="w-[305px] max-h-[456px]  [background:#FAFAFA] shadow-[0_2px_30px_1px_rgba(0,0,0,0.07)] rounded-lg p-6">
            <div>
              <p className="text-[#0D1B2A]  text-xl font-normal leading-[normal] opacity-80 mb-[5px]">
                Free
              </p>
              <h3 className="mb-5">
                <span className="text-[color:var(--1,#0D1B2A)] text-center font-secondary text-[44px] font-medium leading-[normal] tracking-[-1px]">
                  €0
                </span>{" "}
                <span className="text-[#0D1B2A] opacity-80">per month</span>{" "}
              </h3>

              <hr className="border-t opacity-20 [background:#0D1B2A] mb-5" />
            </div>
            <div className=" flex flex-col justify-between  gap-20">
              <div>
                {[
                  "Sign up and evaluate your CV for free",
                  "Get a score out of 100 with actionable tips",
                  "Perfect for testing",
                ].map((feature, index) => (
                  <div className="flex items-start gap-3 mb-2.5" key={index}>
                    <CircleCheckIcon className="shrink-0 mt-1 text-[#10B981]  " />
                    <p className=" text-[#120928] text-base font-normal leading-[25px] opacity-80">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <button className="w-full h-[53px] [background:var(--3,#10B981)] rounded-md text-[color:var(--2,#FAFAFA)] text-center  text-lg font-normal leading-[normal] tracking-[-0.5px] cursor-pointer">
                Evaluaate my CV
              </button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="w-[305px] max-h-[456px]  [background:#FAFAFA] shadow-[0_2px_30px_1px_rgba(0,0,0,0.07)] rounded-lg p-6">
            <div>
              <p className="text-[#0D1B2A]  text-xl font-normal leading-[normal] opacity-80 mb-[5px]">
                Starter
              </p>
              <h3 className="mb-5">
                <span className="text-[color:var(--1,#0D1B2A)] text-center font-secondary text-[44px] font-medium leading-[normal] tracking-[-1px]">
                  €4.90
                </span>{" "}
                <span className="text-[#0D1B2A] opacity-80">per month</span>{" "}
              </h3>

              <hr className="h-px opacity-20 [background:#0D1B2A] mb-5" />

              <div className="flex flex-col justify-between gap-12.5">
                <div className="">
                  {[
                    "Your first optimized CV",
                    "Generate a perfect CV",
                    "Downloadable in PDF format",
                    "Choose from templates: Finance, Consulting, or Startup/VC",
                  ].map((feature, index) => (
                    <div className="flex items-start gap-3 mb-2.5" key={index}>
                      <CircleCheckIcon className="shrink-0  text-[#10B981]  " />
                      <p className=" text-[#120928] text-base font-normal leading-[25px] opacity-80">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                <button className="w-full h-[53px] [background:var(--3,#10B981)] rounded-md text-[#FAFAFA] text-center  text-lg font-normal leading-[normal] tracking-[-0.5px]">
                  Generate my CV
                </button>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="w-[305px]  [background:#0D1B2A] shadow-[0_2px_30px_1px_rgba(0,0,0,0.07)] rounded-lg p-6">
            <div>
              <p className="text-[#FAFAFA]  text-xl font-normal leading-[normal] opacity-80 mb-[5px]">
                Standard
              </p>
              <h3 className="mb-5 text-[#FAFAFA]">
                <span className=" text-center font-secondary text-[44px] font-medium leading-[normal] tracking-[-1px]">
                  €24.90
                </span>{" "}
                <span className=" opacity-80">per month</span>{" "}
              </h3>

              <hr className=" h-px opacity-20 [border-color:#FAFAFA] mb-5" />

              <div className="flex flex-col justify-between gap-22">
                <div>
                  {[
                    "Generate unlimited CVs",
                    "Access to all premium templates",
                    "Personalized recommendations",
                    "Cover letters included",
                  ].map((feature, index) => (
                    <div className="flex items-start gap-3 mb-2.5" key={index}>
                      <CircleCheckIcon className="shrink-0  currentColor[#10B981] rounded-full text-white bg-[#10B981]  " />
                      <p className=" text-[#FAFAFA] text-base font-normal leading-[25px] opacity-80">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                <button className="w-full h-[53px] [background:var(--3,#10B981)] rounded-md text-[color:var(--2,#FAFAFA)] text-center  text-lg font-normal leading-[normal] tracking-[-0.5px] cursor-pointer">
                  Evaluaate my CV
                </button>
              </div>
            </div>
          </div>

          {/* cards 4 */}
          <div className="w-[305px]"></div>
        </div>
      </div>

      {/* bottom curve */}
      <div className="w-full h-10 md:h-20 -mt-px rotate-180 borde bg-[#F4F4F5]">
        <svg
          className="w-full h-full block"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path d="M0,0 Q720,100 1440,0 L1440,100 L0,100 Z" fill="#FAFAFA" />
        </svg>
      </div>
    </section>
  );
}
