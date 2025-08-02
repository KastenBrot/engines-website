"use client";

import Link from "next/link";
import ShopButton from "@/components/Buttons/ShopButton";
import { navLinks, socialMedia } from "@/constants";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { LogoWithText } from "./SVGs/EnginesLogos";
import { ShoppingBag } from "./SVGs/Icons";
import { useState } from "react";

type Props = {};

function NavBar(props: Props) {
  const scrollPosition = useScrollPosition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (redirectPath: string) => {
    window.open(redirectPath, "_blank");
  };

  return (
    <header
      className={`flex items-center justify-between px-4 lg:px-16 2xl:px-32 transition ease-in-out duration-300 gap-16 2xl:gap-48 ${
        scrollPosition > 20 || isMenuOpen ? "bg-tertiary" : "bg-transparent"
      }`}
    >
      <Link href="/">
        <LogoWithText className="h-[4rem] 2xl:h-[5rem] cursor-pointer flex-shrink-0" />
      </Link>

      {/* Burger Menu for Mobile */}
      <button
        className="lg:hidden text-white"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {isMenuOpen && (
        <div
          className={`absolute top-16 left-0 w-full bg-tertiary p-4 flex flex-col gap-4 lg:hidden transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <Link href="/#home" onClick={toggleMenu} className="text-white">
            Home
          </Link>
          <Link href="/#games" onClick={toggleMenu} className="text-white">
            Games
          </Link>
          <Link href="/verein" onClick={toggleMenu} className="text-white">
            Verein
          </Link>
          <button
            className="text-white flex items-center gap-2"
            onClick={() => {
              toggleMenu();
              handleClick("https://www.xoose.de/ngns/");
            }}
          >
            <ShoppingBag className="fill-current flex-shrink-0" />
            <span>Shop</span>
          </button>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="relative hidden grow lg:flex items-center justify-between gap-16 fill">
        <ul className="flex justify-between items-center list-none gap-3 line">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <Link href={`${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        <ul className="flex justify-between items-center list-none">
          {socialMedia.map((nav) => (
            <li key={nav.id}>
              <Link href={`${nav.link}`} target="_blank">
                <nav.icon className="fill-current text-2xl 2xl:text-4xl" />
              </Link>
            </li>
          ))}
          <li>
            <ShopButton
              className="text-white"
              onClick={() => handleClick("https://www.xoose.de/ngns/")}
            >
              <ShoppingBag className="fill-current flex-shrink-0" />
              <span>Shop</span>
            </ShopButton>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;

/** Later needed for responsiveness
 * 
 * <button
        id="toggleSidebar"
        data-drawer-target="sidebar"
        data-drawer-toggle="sidebar"
        aria-controls="sidebar"
        type="button"
        className="pr-4 text-gray-600 rounded cursor-pointer lg:hidden hover:text-secondaryBlue hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100"
      >
        <span className="sr-only">Open Sidebar</span>
        <svg
          className="w-7 h-7"
          aria-hidden="false"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
        <svg
          className="w-7 h-7 hidden"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          />
        </svg>

      </button> */
