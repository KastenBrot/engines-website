import Image from "next/image";
import Link from "next/link";
import { description, socialMedia } from "@/constants";
import { Logo } from "@/public";

type Props = {};

export default function Footer(props: Props) {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col w-full justify-center items-center bg-secondary shadow border-t-2 border-primary p-6 lg:px-16 2xl:px-32 gap-4">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
        <Link href="#">
          <Image src={Logo} alt="Logo" className="w-32 md:w-40 md:h-40" />
        </Link>

        <div className="text-center sm:text-left">
          <h2 className="mb-4 xl:mb-6 text-xs font-semibold text-white uppercase">
            Engines Stuttgart e.V.
          </h2>
          <ul className="text-gray-400 space-y-1">
            <li key="1">
              <Link href="/mitglied-werden" className="hover:underline text-sm">
                Mitglied werden
              </Link>
            </li>
            <li key="2">
              <Link href="/verein" className="hover:underline text-sm">
                Verein und Vorstand
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h2 className="mb-4 xl:mb-6 text-xs font-semibold text-white uppercase">
            Rechtliches
          </h2>
          <ul className="text-gray-400 space-y-1">
            <li className="">
              <Link href="/legal/imprint" className="hover:underline text-sm">
                Impressum
              </Link>
            </li>
            <li key="5">
              <Link href="/legal/privacy" className="hover:underline text-sm">
                Datenschutzerklärung
              </Link>
            </li>
            <li key="6">
              <Link href="/legal/statutes" className="hover:underline text-sm">
                Satzung
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden lg:block">
          <h2 className="mb-4 xl:mb-6 text-xs font-semibold text-white uppercase">
            Games
          </h2>
          <div>
            <ul className="text-start text-gray-400 columns-2 space-y-1">
              <li>
                <Link href="/games/lol" className="hover:underline">
                  LoL
                </Link>
              </li>
              <li key="8">
                <Link
                  href="/games/overwatch"
                  className="hover:underline text-sm"
                >
                  Overwatch
                </Link>
              </li>
              <li key="9">
                <Link
                  href="/games/valorant"
                  className="hover:underline text-sm"
                >
                  Valorant
                </Link>
              </li>
              <li key="10">
                <Link
                  href="/games/rocketleague"
                  className="hover:underline text-sm"
                >
                  Rocket League
                </Link>
              </li>

              <li className="text-start">
                <Link href="/games/cs2" className="hover:underline text-sm">
                  CS:GO
                </Link>
              </li>
              <li key="11">
                <Link href="/games/f1" className="hover:underline text-sm">
                  F1 2023
                </Link>
              </li>
              <li key="12">
                <Link href="/games/assetto" className="hover:underline text-sm">
                  Assetto Corsa
                </Link>
              </li>
              <li key="13">
                <Link href="/games/rainbow" className="hover:underline text-sm">
                  Rainbow Six Siege
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden md:block md:w-1/2 lg:w-2/5 xl:w-1/3">
          <h2 className="mb-4 xl:mb-6 text-xs font-semibold text-white uppercase ">
            Über Uns
          </h2>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
      <hr className="w-full border-primary" />

      {/* Social Links for Mobile */}
      <div className="flex justify-center gap-4 md:hidden">
        {socialMedia.map((nav) => (
          <li key={nav.id} className="list-none">
            <Link href={`${nav.link}`} target="_blank">
              <nav.icon className="fill-current text-2xl 2xl:text-4xl" />
            </Link>
          </li>
        ))}
      </div>

      <span className="text-xs text-gray-400 text-center">
        © {year}{" "}
        <Link href="#" className="hover:underline">
          Engines Stuttgart e.V.
        </Link>{" "}
        All Rights Reserved.
      </span>
    </footer>
  );
}
