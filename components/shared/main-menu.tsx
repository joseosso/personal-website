import { RiHome3Line, RiBriefcase4Line } from "react-icons/ri";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import { Component } from "react";

const MainMenu = () => {
  // type Route = {
  //   label: String,
  //   icon: Component,
  //   href: String,
  // }

  const routes = [
    {
      label: "Home",
      icon: RiHome3Line,
      href: "/",
    },
    {
      label: "Projects",
      icon: RiBriefcase4Line,
      href: "/projects",
    },
    {
      label: "About",
      icon: AiOutlineUser,
      href: "/about",
    },
    {
      label: "Contact",
      icon: AiOutlineMail,
      href: "/contact",
    },
  ];

  return (
    <ul>
      {routes.map((route) => (
        <li key={route.href}>
          <Link
            href={route.href}
            className="flex items-center gap-4 text-gray-400 px-8 py-5 hover:text-white transition-colors duration-300 border-b
             border-gray-500/30 hover:bg-gray-500/10"
          >
            <route.icon size={18} />
            {route.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;
