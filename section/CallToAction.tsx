import Image from "next/image";

import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";

const CallToAction = () => {
  return (
    <section className="bg-linear-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts
          </p>
          <Image
            src={starImage}
            alt="Star Image"
            width={360}
            className="hidden md:block absolute -left-87.5 -top-34.25"
          />
          <Image
            src={springImage}
            alt="Spring Image"
            width={360}
            className="hidden md:block absolute -right-82.75 -top-4.75"
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            {/* Icon - Arrow Right */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
