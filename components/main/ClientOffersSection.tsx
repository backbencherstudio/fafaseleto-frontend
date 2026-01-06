"use client";

import Image from "next/image";
import SectionHeading from "../reuseable/SectionHeading";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import RatingStarIcon from "../icons/RatingStarIcon";

function ClientOffersSection() {
  return (
    <section>
      <div className="py-10 container mx-auto">
        <SectionHeading className="mb-13 md:mb-12.5 ">
          Our Clients Received Such Offers, What about you?
        </SectionHeading>

        {/* carosol cards */}
        <div className="relative mb-[51px]">
          {/* left side layer */}
          <div className="w-[365px] h-[372px] hidden md:block [background:linear-gradient(90deg,rgba(250,250,250,0.89)_43.79%,rgba(250,250,250,0.00)_82.52%)] rounded-lg absolute -top-7 left-0 z-10 pointer-events-none"></div>

          {/* right side layer */}
          <div className="w-[365px] h-[372px] hidden md:block [background:linear-gradient(270deg,rgba(250,250,250,0.89)_43.79%,rgba(250,250,250,0.00)_82.52%)] rounded-lg absolute -top-7 right-0 z-10 pointer-events-none"></div>

          {/* Swiper */}
          <div className="overflow-hidden py-6 -my-6">
            <Swiper
              modules={[Navigation]}
              loop={true}
              // loopAdditionalSlides={8}
              // watchSlidesProgress={true}
              slidesPerView="auto"
              centeredSlides={true}
              centeredSlidesBounds={true}
              spaceBetween={14}
              slidesOffsetBefore={16}
              slidesOffsetAfter={16}
              navigation={{
                nextEl: ".next-btn",
                prevEl: ".prev-btn",
              }}
              breakpoints={{
                768: {
                  centeredSlides: false,
                  centeredSlidesBounds: false,
                  slidesOffsetBefore: 0,
                  slidesOffsetAfter: 0,
                  spaceBetween: 20,
                },
              }}
              className="!overflow-visible"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <SwiperSlide key={item} className="!w-[305px] md:!w-[305px]">
                  <OfferCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* controls */}
          <div>
            {/* RIGHT BUTTON = NEXT */}
            <button className="next-btn w-9 h-9 md:w-[50px] md:h-[50px] [background:var(--3,#10B981)] rounded-[50px] z-99 absolute  top-36 right-5 md:right-12 flex justify-center items-center cursor-pointer hover:border border-white transition-colors duration-200">
              <Image
                src="/images/next-arrow.svg"
                alt="next"
                fill={true}
                className="w-full h-full"
              />
            </button>

            {/* LEFT BUTTON = PREV */}
            <button className="prev-btn w-9 h-9 md:w-[50px] md:h-[50px] [background:var(--3,#10B981)] rounded-[50px] z-99 absolute top-36 left-5 md:left-12 flex justify-center items-center cursor-pointer hover:border border-white transition-colors duration-200">
              <Image
                src="/images/prev-arrow.svg"
                alt="prev"
                fill={true}
                className="w-full h-full"
              />
            </button>
          </div>
        </div>

        <div className="px-4 md:px-0">
          {/* bottom rating */}
          <div className="flex flex-col md:flex-row max-w-[752px] mx-auto justify-center items-center gap-[9px] md:gap-6 [background:var(--neutral-50,#FAFAFA)] shadow-[0_1px_6px_1px_rgba(0,0,0,0.13)] md:px-4 py-3 rounded-[10px] md:rounded-[50px] px-12">
            <div className="flex items-center gap-[13px] ">
              {/* Empty user (gray outlines) */}
              <div className="flex  ">
                <div className="w-7 h-[27px] md:w-[39px] md:h-[38px] rounded-full border border-gray-300 bg-white "></div>
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-7 h-[27px] md:w-[39px] md:h-[38px] rounded-full border border-gray-300 bg-white ml-[-18px]"
                  ></div>
                ))}
              </div>

              {/* Filled stars + text */}
              <div className="items-center gap-2 ">
                <div className="flex text-[#00b67a] text-xl">
                  {[...Array(5)].map((_, i) => (
                    <RatingStarIcon
                      className="w-3.5 h-3.5 md:w-[24.907px] md:h-[23.185px]"
                      key={i}
                    />
                  ))}
                </div>
                <p className="text-[#162456] text-xs md:text-[15px] font-normal leading-6.75 opacity-70 ml-1">
                  Already 500 users
                </p>
              </div>
            </div>

            <div className="md:w-px w-full  h-[1px]  md:h-[47px] [background:#D4D4D4] mx-6 md:mx-0"></div>

            <p className="text-black font-secondary text-sm md:text-base font-bold leading-[normal] text-center">
              Backed by experts who know what top employers look for
            </p>
          </div>
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

export default ClientOffersSection;

const OfferCard = ({ item }: { item: number }) => {
  return (
    <div className="w-full h-[319px] [background:#FAFAFA] shadow-[0_2px_30px_1px_rgba(0,0,0,0.07)] rounded-lg px-4 pt-4 flex flex-col gap-10">
      <Image
        className="w-24 h-[35px]"
        src="/images/client1.png"
        alt="client offer"
        width={96}
        height={140}
      />

      <div className="pl-[2.5px] pr-[24.5px]">
        <div className="w-full h-[228px] borde r [background:rgba(0,0,0,0.01)] backdrop-blur-[0.5px] rounded-[8px_8px_0_0] relative">
          <div className="absolute top-[9px] left-[17px] inline-flex justify-center items-center gap-[7.901px] [background:#10B981] px-[12.642px] py-[6.321px] rounded-[5px] text-[color:var(--2,#FAFAFA)] text-center font-secondary text-[12.642px] font-bold leading-[normal]">
            9{item}/100
          </div>
        </div>
      </div>
    </div>
  );
};
