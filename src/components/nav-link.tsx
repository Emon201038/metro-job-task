"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`p-px rounded-4xl whitespace-nowrap hover:scale-105 transition-all duration-200  ${
        pathname === href
          ? "bg-gradient-to-r from-[rgb(192,109,252)]  to-white/70"
          : ""
      }`}
    >
      <p className="bg-[rgb(21,13,28)] rounded-4xl py-2 px-4">{children}</p>
    </Link>
  );
};

export default NavLink;
