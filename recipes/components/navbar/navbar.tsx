"use client";

import Link from "next/link";
import { useState } from "react";
import RecipeIcon from "./recipeicon.svg";
import Hamburger from "./hamburger.svg";
import NavbarLink from "../navbarlink/NavbarLink";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="flex items-center flex-wrap bg-slate-400 p-3 ">
      <Link legacyBehavior href="/">
        <a className="inline-flex items-center p-2 mr-4 ">
          <RecipeIcon className="w-12 h-12 pr-4 fill-black" />
          <span className="text-xl text-black font-bold uppercase tracking-wide">
            Recipes
          </span>
        </a>
      </Link>
      <button
        className=" inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-black ml-auto hover:text-white outline-none"
        onClick={handleClick}
      >
        <Hamburger className="w-12 h-12" />
      </button>
      <div
        className={`${
          active ? "" : "hidden"
        } w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <NavbarLink label="Home" />
          <NavbarLink label="About Us" />
          <NavbarLink label="Contact" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
