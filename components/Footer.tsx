import Image from "next/image";
import Link from "next/link";
import { description, footerLinks, partners, socialMedia } from "@/constants";
import { Logo } from "@/public";

type Props = {};

export default function Footer(props: Props) {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-secondary shadow md:py-8">
      <div className="w-5/6 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="#" className="flex items-center mb-4 sm:mb-0">
            <Image
              src={Logo}
              alt="Logo"
              className="w-[10rem] min-h-[10rem] mr-52"
            />
          </Link>
          <div className="grid grid-cols-9">
            <div className="col-span-2">
              <h2 className="mb-6 text-xs font-semibold text-gray-900 uppercase dark:text-white">
                Engines Stuttgart e.V.
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li key="1">
                  <Link
                    href="https://flowbite.com/"
                    className="hover:underline text-sm"
                  >
                    Games
                  </Link>
                </li>
                <li key="2">
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline text-sm"
                  >
                    {/* News
                  </Link>
                </li>
                <li key="3">
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline text-sm"
                  > */}
                    Partner
                  </Link>
                </li>
                <li key="4">
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline text-sm"
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2">
              <h2 className="mb-6 text-xs font-semibold text-gray-900 uppercase dark:text-white">
                Rechtliches
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="">
                  <Link
                    href="/legal/imprint"
                    className="hover:underline text-sm"
                  >
                    Impressum
                  </Link>
                </li>
                <li key="5">
                  <Link
                    href="/legal/privacy"
                    className="hover:underline text-sm"
                  >
                    Datenschutzerklärung
                  </Link>
                </li>
                <li key="6">
                  <Link
                    href="/legal/statutes"
                    className="hover:underline text-sm"
                  >
                    Satzung
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2">
              <h2 className="mb-6 text-xs font-semibold text-gray-900 uppercase dark:text-white">
                Games
              </h2>
              <div className=" flex flex-direction: row">
                <ul className="text-gray-600 dark:text-gray-400 ">
                  <li className="">
                    <Link href="#" className="hover:underline">
                      LoL
                    </Link>
                  </li>
                  <li key="8">
                    <Link
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline text-sm"
                    >
                      Overwatch
                    </Link>
                  </li>
                  <li key="9">
                    <Link
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline text-sm"
                    >
                      Valorant
                    </Link>
                  </li>
                  <li key="10">
                    <Link
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline text-sm"
                    >
                      Rocket League
                    </Link>
                  </li>
                </ul>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="">
                    <Link href="#" className="hover:underline ml-10 text-sm">
                      CS:GO
                    </Link>
                  </li>
                  <li key="11">
                    <Link
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline ml-10 text-sm"
                    >
                      Apex
                    </Link>
                  </li>
                  <li key="12">
                    <Link
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline ml-10 text-sm"
                    >
                      Dota2
                    </Link>
                  </li>
                  <li key="13">
                    <Link
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline ml-10 text-sm"
                    >
                      F1 22 Sim Racing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-3">
              <h2 className="mb-6 text-xs font-semibold text-gray-900 uppercase dark:text-white">
                Über Uns
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 ">
                <li className="text-sm">
                  <p>{description}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-xs text-gray-400 sm:text-center">
          © {year}{" "}
          <Link href="#" className="hover:underline">
            Engines Stuttgart e.V.
          </Link>{" "}
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
  return <div></div>;
}
