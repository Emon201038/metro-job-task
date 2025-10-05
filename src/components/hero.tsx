import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="lg:px-24 md:px-12 px-6 py-12 bg-gradient-to-r from-[rgb(13,4,20)] via-[rgb(13,4,20)] via-[rgba(13,4,20,0.9)] to-[rgb(13,4,20)] ">
      <h1 className="[text-shadow:1px_0_currentColor] text-4xl font-semibold tracking-wider text-left text-white">
        Expert to <br /> Digitalise Your <br />{" "}
        <span className="bg-gradient-to-r from-[rgb(192,109,252)] via-[rgb(192,109,252)] via-[rgb(192,109,252)] to-white bg-clip-text text-transparent font-bold">
          Growth
        </span>
      </h1>
      <p className="text-white/70 mt-4 max-w-md text-sm">
        We are constantly growing or learning and improving. Enter your the
        personal real estate santf vary, where finding idal hom is
      </p>
      <button className="bg-gradient-to-t from-[#9F63FF] via[#6D43E4] to-[#6331F1] py-2 px-4 rounded-full text-white mt-4 flex gap-1 justify-center items-center hover:scale-105 transition-all duration-200">
        <Image src="/star.png" width={24} height={24} alt="explore" />
        Explore Now
      </button>
    </div>
  );
};

export default Hero;
