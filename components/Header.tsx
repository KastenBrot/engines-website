"use client";

import Link from "next/link";
import Button from "@/components/Button";
import { navLinks, socialMedia } from "@/constants";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { LogoWithText } from "./SVGs/EnginesLogos";
import { ShoppingBag } from "./SVGs/Icons";
import { useRouter } from "next/navigation";

type Props = {};

function NavBar(props: Props) {
  const scrollPosition = useScrollPosition();
  const router = useRouter();

  const handleClick = (redirectPath: string) => {
    router.push(redirectPath);
  };

  return (
    <header
      className={`flex items-center justify-between px-4 lg:px-16 2xl:px-32 transition ease-in duration-500 gap-16 2xl:gap-48 ${
        scrollPosition > 20 ? "bg-tertiary" : "bg-transparent"
      }`}
    >
      <Link href="/">
        <LogoWithText className="h-[4rem] 2xl:h-[5rem] cursor-pointer flex-shrink-0" />
      </Link>

      <nav className="relative hidden grow lg:flex items-center justify-between gap-16 fill">
        <ul className="flex justify-between items-center list-none gap-3 line">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <Link href={`#${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        <ul className="flex justify-between items-center list-none">
          {socialMedia.map((nav) => (
            <li key={nav.id}>
              <Link href={`${nav.link}`}>
                <nav.icon className="fill-current text-2xl 2xl:text-4xl" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button
        className="text-white"
        onClick={() => handleClick("https://www.xoose.de/ngns/")}
      >
        <ShoppingBag className="fill-current flex-shrink-0" />
        <span>Shop</span>
      </Button>
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
