import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLink from "./nav-link";
import { ChevronDown } from "lucide-react";

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
    showArrow: true,
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
    <header className="w-full py-2 flex justify-between items-center lg:px-24 md:px-12 px-6 fixed top-0 z-50 bg-[rgb(13,4,20)] backdrop-blur-sm">
      {/* Logo */}
      <div>
        <Image
          src={"/logo.png"}
          alt="Logo"
          width={100}
          height={100}
          className="lg:block hidden"
        />
        <Image
          src={"/menue.png"}
          alt="Logo"
          width={40}
          height={40}
          className="block lg:hidden cursor-pointer"
        />
      </div>

      <div className="block lg:hidden cursor-pointer">
        <Image src={"/logo.png"} alt="Logo" width={60} height={32} />
      </div>

      {/* Navigation Items */}
      <div className="lg:flex gap-2 justify-center items-center bg-[rgb(21,13,28)] px-4 py-2 rounded-full text-white hidden">
        {navItems.map((item) => (
          <NavLink key={item.name} href={item.link}>
            <p className="bg-[rgb(21,13,28)] rounded-4xl py-1 px-4 flex gap-1 items-center justify-center">
              {item.name}{" "}
              {item.showArrow && (
                <span className="ml-1">
                  <ChevronDown />
                </span>
              )}
            </p>
          </NavLink>
        ))}
      </div>

      {/* Auth Info */}
      <Image
        src={"/message.png"}
        alt="Logo"
        width={40}
        height={40}
        className="block lg:hidden cursor-pointer"
      />
      <div className="lg:flex hidden justify-between items-center gap-2">
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
