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
          <Link href="/contact" onClick={toggleMenu} className="text-white">
            Kontakt
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
              className="text-white ml-4"
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
