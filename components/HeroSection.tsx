"use client";

import Image from "next/image";
import { HeroOriginal } from "@/public";
import ButtonTest from "@/components/ButtonTest";
import { useRouter } from "next/navigation";

type Props = {};

const HeroSection = (props: Props) => {
  const router = useRouter();

  const handleClick = (redirectPath: string) => {
    router.push(redirectPath);
  };

  const handleNavigate = (path: string) => {};
  return (
    <section
      id="#home"
      className="flex flex-col h-screen lg:h-[80vh] lg:flex-row customGradient"
    >
      {/* IMAGE CONTAINER */}
      <div className="relative h-1/2 lg:h-full lg:w-[60%] lg:order-2 heroGradient lg:mr-[-5%]">
        <Image
          src={HeroOriginal}
          alt="Hero Section Image"
          width={7148}
          height={4771}
          sizes="(max-width: 768px) 100vw, 
               (max-width: 1200px) 75vw, 
               50vw"
          placeholder="blur"
          priority
          className="object-cover"
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-[40%] flex flex-col gap-4 2xl:gap-8 items-start justify-center lg:order-1 lg:pl-20 2xl:pl-40">
        <span className="text-base 2xl:text-3xl text-primaryGreen font-inter font-semibold">
          ENGINES STUTTGART e.V.
        </span>
        <h1 className="text-4xl xl:text-5xl 2xl:text-8xl self-start uppercase">
          Wir bringen den E-Sport ins Ländle!
        </h1>
        <div className="flex w-full">
          <ButtonTest
            className="fill-primaryGreen stroke-primaryGreen hover:stroke-white"
            textStyle="font-anek text-lg font-bold stroke-none fill-white"
            onClick={() => handleClick("/mitglied-werden")}
          >
            Mitglied Werden
          </ButtonTest>
          <ButtonTest
            className="fill-transparent stroke-white hover:stroke-primaryGreen hover:text-primaryGreen"
            textStyle="font-anek text-lg font-bold stroke-none"
            rotateButton={true}
            onClick={() => handleClick("https://discord.com/invite/ngns")}
          >
            Join our Discord
          </ButtonTest>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
