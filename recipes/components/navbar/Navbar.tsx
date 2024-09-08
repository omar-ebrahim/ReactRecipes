"use client";

import Link from "next/link";
import { useState } from "react";
import RecipeIcon from "./recipeicon.svg";
import Hamburger from "./hamburger.svg";
import NavbarLink from "../navbarlink/NavbarLink";

import styles from './Navbar.module.css';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className={styles.navbar}>
      <Link legacyBehavior href="/">
        <a className={styles.navbarHomeLink}>
          <RecipeIcon />
          <span>Recipes</span>
        </a>
      </Link>
      <button
        className={styles.hamburgerMenuButton}
        onClick={handleClick}
      >
        <Hamburger />
      </button>
      <div
        className={`${active ? "" : styles.hidden} ${styles.hamburgerMenu}`} >
        <div className={styles.navLinksContainer}>
          <NavbarLink label="Home" url="/" />
          <NavbarLink label="About Us" url="/aboutus" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
