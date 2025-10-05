import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="lg:px-24 md:px-12 px-6 mt-12">
      <div className="bg-[#FFFFFF0A] w-full rounded-2xl py-4">
        <div className=" w-full flex flex-col justify-center items-center">
          <div className="h-20 w-full flex justify-center items-center">
            <Image src="/logo.png" alt="Logo" width={100} height={60} />
            <div className="h-full flex flex-col justify-center items-center text-white ml-2">
              <h1 className="font-bold tracking-wider">Metro Solver</h1>
              <p className="text-xs">your IT partner</p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 px-4 gap-2">
          <div className="h-full flex flex-col justify-center items-center text-white ml-2">
            <h1 className="font-bold tracking-wider">
              Subscribe to Our Newsletter
            </h1>
            <p className="text-xs">Join the 25000+ client, in our company</p>
          </div>
          <div className="h-12 bg-white rounded-full w-full relative px-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-full w-full bg-transparent outline-none px-4"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-t from-[#9F63FF] via[#6D43E4] to-[#6331F1] py-2 px-4 rounded-full text-white flex gap-1 justify-center items-center hover:scale-105 transition-all duration-200">
              <Image src="/star.png" width={24} height={24} alt="explore" />
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
