import Image from "next/image";

import cylinderImage from "@/assets/cylinder.png";
import cogImage from "@/assets/cog.png";
import noodleImage from "@/assets/noodle.png";

const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#EAEEFE_66%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-119.5">
            <div className="tag">
              Version 2.0 is here
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-linear-to-b from-black to-[#001e80] text-transparent bg-clip-text">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010d3E] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your success
            </p>
            <div className="flex gap-1 items-center mt-7.5">
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
          <div className="mt-20 md:mt-0 md:h-162 md:flex-1 relative">
            <Image
              src={cogImage}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <Image
              src={cylinderImage}
              alt="Cylinder image"
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
            />
            <Image
              src={noodleImage}
              alt="Noodle image"
              width={220}
              className="hidden lg:block absolute top-131 left-112 rotate-30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


export default Hero;
