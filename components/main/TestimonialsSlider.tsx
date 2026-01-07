"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import GoldStarIcon from "../icons/GoldStarIcon";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur. Ac ipsum elementum proin aliquet. Sodales ipsum. Ac ipsum elementum proin aliquet. Sodales ipsum.",
    name: "Rachal R",
    rating: 5,
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur. Ac ipsum elementum. Lorem ipsum dolor sit amet consectetur. Ac ipsum elementum. Lorem ipsum dolor sit amet.",
    name: "Rachal R",
    rating: 4,
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur. Ac ipsum elementum proin aliquet. Sodales ipsum. Ac ipsum elementum proin aliquet.",
    name: "Rachal R",
    rating: 4,
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur. Ac ipsum elementum proin aliquet. Sodales ipsum. Ac ipsum elementum proin aliquet.",
    name: "Rachal R",
    rating: 4,
  },
];

const TestimonialSlider = () => {
  return (
    <div className="py-16 px-4 max-w-360 mx-auto">
      <Swiper
        modules={[Pagination]}
        spaceBetween={28}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10! md:pb-11! "
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col justify-between h-75 max-w-130.5 items- border border-[#CAD5E2] [background:#FFF] pl-7.5 pr-13.25 py-7.5 rounded-lg border-solid">
              {/* Testimonial Text */}
              <p className="text-black  text-xl font-normal leading-7.25">
                {item.text}
              </p>

              {/* Bottom Section: Stars and Name */}
              <div className="space-y-3">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <GoldStarIcon
                      key={i}
                      className={
                        i < item.rating ? "text-[#E4B245]" : "text-gray-200"
                      }
                    />
                  ))}
                </div>
                <p className="self-stretch text-black text-xl font-medium leading-[normal] uppercase">
                  {item.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
