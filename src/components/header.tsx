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
    <header className="w-screen py-4 flex justify-between items-center px-12">
      {/* Logo */}
      <div>Logo</div>

      {/* Navigation Items */}
      <div className="flex gap-2 flex-1 justify-center items-center">
        {navItems.map((item) => (
          <Link key={item.name} href={item.link}>
            {item.name}
          </Link>
        ))}
      </div>

      {/* Auth Info */}
      <div className="flex justify-between items-center gap-2">
        <div>Cart Icon</div>
        <div>Sing In </div>
        <div>Avatar</div>
      </div>
    </header>
  );
};

export default header;
