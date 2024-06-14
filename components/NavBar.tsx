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
    <header className="fixed top-0 z-50 w-full">
      <nav
        className={`flex justify-between items-center py-1 ${
          scrollPosition > 20
            ? "transition ease-in duration-500 bg-tertiary "
            : "transition ease-in duration-500 bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center  mx-auto w-5/6">
          <div className="flex justify-between items-center  w-full gap-16">
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
              {navLinks.map((nav, index) => (
                <li key={nav.id} className="hover-link">
                  <Link href={`#${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>
            <ul className="flex justify-between items-center gap-5">
              {socialMedia.map((nav, index) => (
                <li key={nav.id} className="hover-link w-[2rem] h-[2rem]">
                  <Link
                    href={`${nav.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <nav.icon />
                  </Link>
                </li>
              ))}
            </ul>
            <Button onClick={testLog}>Shop</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
