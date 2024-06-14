"use client";

import Link from "next/link";
import Image from "next/image";
import { LogoWithText } from "@/public";
import Button from "@/components/Button";
import { navLinks, socialMedia } from "@/constants";
import { useScrollPosition } from "@/hooks/useScrollPosition";

type Props = {};

const NavBar = (props: Props) => {
  const scrollPosition = useScrollPosition();
  const testLog = () => {
    console.log("CLICK!");
  };

  return (
    /*<header className="">
      <nav
        className={`flex justify-between items-center py-1 transition ease-in duration-500 ${
          scrollPosition > 20 ? "bg-tertiary" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center mx-auto w-5/6">
          <div className="flex justify-between items-center w-full gap-16">
            <div className="flex-shrink-0">
              <Link href="#">
                <Image
                  className="w-[14rem] min-h-[5rem] cursor-pointer"
                  src={LogoWithText}
                  alt="logo"
                />
              </Link>
            </div>
            <ul className="flex justify-between items-center gap-12 text-xl">
              {navLinks.map((nav) => (
                <li key={nav.id} className="hover-link">
                  <Link href={`#${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>
            <ul className="flex justify-between items-center gap-5">
              {socialMedia.map((nav) => (
                <li key={nav.id} className="hover-link w-[2rem] h-[2rem]">
                  <Link href={`${nav.link}`}>
                    <Image src={nav.icon} alt={nav.name} />
                  </Link>
                </li>
              ))}
            </ul>
            <Button onClick={testLog}>Shop</Button>
          </div>
        </div>
      </nav>
    </header>*/
    <header
      className={`flex items-center justify-between px-4 lg:px-32 transition ease-in duration-500 ${
        scrollPosition > 20 ? "bg-tertiary" : "bg-transparent"
      }`}
    >
      <Link href="#">
        <Image
          className="w-[10rem] lg:w-[14rem] min-h-[5rem] cursor-pointer"
          src={LogoWithText}
          alt="logo"
        />
      </Link>
      <button
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
      </button>
      <nav className="flex items-center justify-between gap-20">
        <ul className="flex justify-between items-center gap-12 text-xl">
          {navLinks.map((nav) => (
            <li key={nav.id} className="hover-link">
              <Link href={`#${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex justify-between items-center gap-5">
          {socialMedia.map((nav) => (
            <li key={nav.id} className="hover-link w-[2rem] h-[2rem]">
              <Link target="_blank" href={`${nav.link}`}>
                <Image src={nav.icon} alt={nav.name} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button onClick={testLog}>Shop</Button>
    </header>
  );
};

export default NavBar;
