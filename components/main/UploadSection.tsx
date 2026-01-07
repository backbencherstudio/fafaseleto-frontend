import Image from "next/image";
import React from "react";
import BrifeCaseIcon from "../icons/BrifeIcon";
import StarBadgeIcon from "../icons/StarBadgeIcon";
import CheseIcon from "../icons/CheseIcon";
import CircularTickIcon from "../icons/CircularTickIcon";
import DocIcon from "../icons/DocIcon";
import HatIcon from "../icons/HatIcon";
import MarkIcon from "../icons/MarkIcon";
import SettngIcon from "../icons/SettngIcon";

export default function UploadSection() {
  return (
    <div>
      <section className="bg-[#F4F4F5] pt-20">
        <div className="md:px-18 px-4 max-w-7xl mx-auto  min-h-[350px] [background:var(--1,#0D1B2A)] flex flex-col md:flex-row justify-between items-center ">
          {/* Left Side: img */}
          <LeftSide />
          {/* middle */}
          <div className="max-w-[535px]">
            <h2 className=" text-[#FAFAFA] text-center font-secondary text-4xl md:text-[56px] font-bold leading-normal md:leading-[55px] mb-4.5 md:mb-4">
              Turn your CV into your strongest asset
            </h2>
            <p className="max-w-[448px] mx-auto text-[#FAFAFA] text-center  text-sm md:text-base font-normal leading-[23px] mb-6 md:mb-5">
              Stand out to recruiters in finance, consulting, and startups with
              a CV designed to impress.
            </p>

            <button className="flex justify-center items-center gap-3 [background:#FFF] px-[29px] py-[9px] md:py-[19px] rounded-lg mx-auto text-[color:var(--1,#0D1B2A)] [font-family:Inter] text-lg font-bold leading-[normal]">
              Upload Your CV
            </button>
          </div>

          {/* right Side: img */}
          <RightSide />
        </div>
      </section>

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
    </div>
  );
}

const LeftSide = () => {
  return (
    <div className="w-full md:w-auto ">
      <div className="hidden md:block">
        <Image
          src={"images/homepages/group-icon1.svg"}
          alt=""
          width={204}
          height={249}
        />
      </div>

      <div className="block md:hidden text-white w-full mb-8">
        <div className="flex  justify-between mt-1">
          <BrifeCaseIcon className="-ml-4" />
          <StarBadgeIcon className="ml-4" />
          <HatIcon className="-mt-2" />
          {/* <DocIcon className="rounded bg-white" /> */}
        </div>
        <div className="flex justify-between mt-1">
          <div></div>
          <CircularTickIcon className=" " />
          <CheseIcon className=" " />
          <div></div>
        </div>
      </div>
    </div>
  );
};

const RightSide = () => {
  return (
    <div className="w-full md:w-auto ">
      <div className="hidden md:block">
        <Image
          src={"images/homepages/group-icon2.svg"}
          alt=""
          width={204}
          height={249}
        />
      </div>

      <div className="block md:hidden text-white w-full mt-10">
        <div className="flex  justify-between mt-1">
          <HatIcon className=" -ml-4" />

          <SettngIcon className="mt-8" />
        </div>
        <div className="flex justify-between mt-1">
          <div></div>
          <MarkIcon className="-mb-1.5 rotate-12 bg-white w-10 h-10 rounded p-1" />
          <DocIcon className="bg-white w-9 h-9 rounded -mt-16" />
          <div></div>
        </div>
      </div>
    </div>
  );
};
