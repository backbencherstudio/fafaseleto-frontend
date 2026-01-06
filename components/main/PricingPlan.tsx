import SectionHeading from "../reuseable/SectionHeading";

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
