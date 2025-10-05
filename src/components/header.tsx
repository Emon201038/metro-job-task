import Image from "next/image";
import Link from "next/link";
import React from "react";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About us",
    link: "/about-us",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "White label",
    link: "/white-label",
  },
  {
    name: "Contact us",
    link: "/contact-us",
  },
];

const Header = () => {
  return (
    <header className="w-full py-2 flex justify-between items-center lg:px-24 md:px-12 px-6">
      {/* Logo */}
      <div>
        <Image src={"/logo.png"} alt="Logo" width={100} height={100} />
      </div>

      {/* Navigation Items */}
      <div className="flex gap-2 justify-center items-center bg-[rgb(21,13,28)] px-4 py-2 rounded-full text-white">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className="p-px rounded-4xl whitespace-nowrap hover:scale-105 transition-all duration-200 bg-gradient-to-r from-[rgb(192,109,252)]  to-white/70"
          >
            <p className="bg-[rgb(21,13,28)] rounded-4xl py-2 px-4">
              {item.name}
            </p>
          </Link>
        ))}
      </div>

      {/* Auth Info */}
      <div className="flex justify-between items-center gap-2">
        <button className="size-14 rounded-full bg-gradient-to-r from-[rgb(66,32,120)] via-[rgb(21,13,28)] to-[rgb(66,32,120)] flex justify-center items-center hover:scale-105 transition-all duration-200 text-white relative">
          <Image src="/cart.png" width={24} height={24} alt="cart" />
          <div className="absolute top-3 right-3 bg-red-500 rounded-full w-4 h-4 flex justify-center items-center text-white text-xs">
            1
          </div>
        </button>
        <div className="size-14 rounded-full bg-gradient-to-r from-[rgb(66,32,120)] via-[rgb(21,13,28)] to-[rgb(66,32,120)] flex justify-center items-center hover:scale-105 transition-all duration-200 text-white">
          <Image src={"/user.png"} width={56} height={56} alt="user" />
        </div>
      </div>
    </header>
  );
};

export default Header;
