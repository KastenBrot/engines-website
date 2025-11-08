"use client";

import Image from "next/image";
import { HeroOriginal } from "@/public";
import { Discord } from "./SVGs/Socials";
import ButtonTilted from "@/components/Buttons/ButtonTilted";

type Props = {};

const HeroSection = (props: Props) => {
  const handleClick = (redirectPath: string) => {
    window.open(redirectPath, "_blank");
  };

  return (
    <section
      id="#home"
      className="relative flex flex-col h-[40vh] md:h-[50vh] lg:h-[80vh] lg:flex-row customGradient"
    >
      {/* IMAGE CONTAINER */}
      <div className="absolute inset-0 heroGradient">
        <Image
          src={HeroOriginal}
          alt="Hero Section Image"
          width={7148}
          height={4771}
          sizes="(max-width: 1200px) 60vw,
              (max-width: 768px) 50vw,  
              50vw"
          placeholder="blur"
          priority
          className="object-cover w-full h-full filter blur-sm brightness-50"
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="relative z-10 h-full flex flex-col gap-4 items-start justify-center p-4 pt-10 lg:order-1 lg:pl-20 lg:h-full w-full sm:w-[65%] lg:w-[45%] 2xl:gap-8 2xl:pl-40">
        <span className="text-base md:text-2xl 2xl:text-3xl text-primaryGreen font-inter font-semibold">
          ENGINES STUTTGART e.V.
        </span>
        <h1 className="text-4xl sm:text-[2.75rem]/none lg:text-7xl 2xl:text-[5.5rem]/none self-start uppercase">
          Wir bringen den E-Sport ins Ländle!
        </h1>
        <div className="flex w-full">
          <ButtonTilted
            className="fill-primaryGreen stroke-primaryGreen hover:stroke-white"
            textStyle="font-anek text-lg font-bold stroke-none fill-white"
            onClick={() => handleClick("/mitglied-werden")}
          >
            Mitglied Werden
          </ButtonTilted>
          <ButtonTilted
            className="fill-transparent stroke-white hover:text-white hover:fill-discordBlue"
            textStyle="font-anek text-lg font-bold stroke-none"
            rotateButton={true}
            onClick={() => handleClick("https://discord.com/invite/UwA2eSZVB4")}
          >
            Join our Discord
          </ButtonTilted>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
