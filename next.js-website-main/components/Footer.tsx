import Image from "next/image";
import Link from "next/link";
import { footerLinks, partners, socialMedia } from "@/constants";
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
                <li>
                  <Link
                    href="https://flowbite.com/"
                    className="hover:underline text-sm"
                  >
                    Games
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline text-sm"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline text-sm"
                  >
                    Partner
                  </Link>
                </li>
                <li>
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
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline text-sm"
                  >
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline text-sm"
                  >
                    Datenschutzerklärung
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline text-sm"
                  >
                    Satzung
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline text-sm"
                  >
                    Presse
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2">
              <h2 className="mb-6 text-xs font-semibold text-gray-900 uppercase dark:text-white">
                Teams und Spieler
              </h2>
              <div className=" flex flex-direction: row">
                <ul className="text-gray-600 dark:text-gray-400 ">
                  <li className="">
                    <Link href="#" className="hover:underline">
                      LoL
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline text-sm"
                    >
                      Overwatch
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline text-sm"
                    >
                      Valorant
                    </Link>
                  </li>
                  <li>
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
                  <li>
                    <Link
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline ml-10 text-sm"
                    >
                      Apex
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline ml-10 text-sm"
                    >
                      Dota2
                    </Link>
                  </li>
                  <li>
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
                  <p>
                    Der Engines Stuttgart e.V. ist der erste E-Sport-Verein in
                    der Metropolregion Stuttgart. Seit Anfang 2018 machen wir es
                    uns zur Aufgabe kompetitives Videospielen lokal zu fördern
                    um Breiten(e)sport Strukturen aufzubauen und somit den
                    E-Sport Standort Deutschland zu stärken.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-xs text-gray-500 sm:text-start dark:text-gray-400">
          © {year}{" "}
          <Link href="#" className="hover:underline">
            Engines Stuttgart e.V.
          </Link>{" "}
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
