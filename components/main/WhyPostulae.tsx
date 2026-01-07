import Image from "next/image";
import SectionHeading from "../reuseable/SectionHeading";
import TestimonialSlider from "./TestimonialsSlider";

export default function WhyPostulae() {
  return (
    <div>
      <div className="bg-[#F4F4F5]  pt-18">
        <div>
          <SectionHeading className="mb-12.5">Why Postulae?</SectionHeading>
          <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 px-4">
            <FeatureCard
              imageSrc="/images/postulae1.svg"
              title="Thought out by the elite"
              description="Our templates were designed by graduates of HEC and Polytechnique"
            />
            <FeatureCard
              imageSrc="/images/postulae2.svg"
              title="A powerful algorithm"
              description="Instant recommendations based on your profile, sector, and goal."
            />
            <FeatureCard
              imageSrc="/images/postulae3.svg"
              title="Premium templates"
              description="Layouts designed to convince even the most demanding recruiters."
            />
          </section>
        </div>

        {/* testmonials */}

        <section className="pt-24">
          <SectionHeading>Testimonials</SectionHeading>
          <TestimonialSlider />
        </section>
      </div>
      {/* bottom curve */}
      <div className="w-full h-10 md:h-20 -mt-[1px] rotate-180 ">
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

interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
  imageAlt?: string;
}

const FeatureCard = ({
  imageSrc,
  title,
  description,
  imageAlt = "",
}: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center gap-12 border border-[#CAD5E2] bg-white p-5 rounded-lg border-solid">
      {/* Image Container */}
      <div className="w-25 h-25 flex items-center justify-center">
        <Image src={imageSrc} alt={imageAlt} width={100} height={100} />
      </div>

      {/* Text Content */}
      <div>
        <h3 className="self-stretch text-[#0D1B2A] text-center text-xl font-semibold leading-normal tracking-[-1px] mb-3">
          {title}
        </h3>
        <p className="w-84 mx-auto text-center text-base font-normal leading-6 opacity-80">
          {description}
        </p>
      </div>
    </div>
  );
};
