"use client";

import Image from "next/image";
import { redirect } from "next/navigation";
import { Discord, Hero, HeroOriginal } from "@/public";
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
    <section className="flex flex-col h-screen lg:h-[80vh] lg:flex-row customGradient">
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
      <div className="h-1/2 lg:h-full lg:w-[40%] flex flex-col gap-8 items-start justify-center lg:order-1 lg:pl-40 lg:ml-[5%]">
        <span className="md:text-3xl text-primaryGreen font-inter font-semibold">
          ENGINES STUTTGART e.V.
        </span>
        <h1 className="text-5xl lg:text-8xl self-start uppercase">
          Wir bringen den E-Sport ins Ländle!
        </h1>
        <div className="flex w-full">
          <ButtonTest
            className="mr-[-0.5em] fill-primaryGreen stroke-primaryGreen hover:stroke-white"
            textStyle="font-anek text-xl font-bold stroke-none fill-white"
            onClick={() => handleClick("become-member")}
          >
            Mitglied Werden
          </ButtonTest>
          <ButtonTest
            className="ml-[-0.5em] fill-transparent stroke-white hover:stroke-primaryGreen hover:text-primaryGreen"
            textStyle="font-anek text-xl font-bold stroke-none"
            rotateButton={true}
            onClick={() => handleClick("https://discord.com/invite/ngns")}
          >
            Join our Discord
          </ButtonTest>
        </div>
      </div>
    </section>
  );*/
  return (
    <section className="flex flex-col h-screen lg:h-[85vh] lg:flex-row gap-10 customGradient">
      {/* IMAGE CONTAINER */}
      <div className="relative h-1/2 lg:h-full lg:w-2/3 lg:order-2 heroGradient">
        <Image
          src={HeroOriginal}
          alt="Hero Section Image"
          fill={true}
          className="object-cover"
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/3 flex flex-col gap-8 items-center justify-center lg:order-1 px-10 lg:pl-36">
        <h1 className="text-4xl lg:text-6xl self-start">
          ENGINES <br /> STUTTGART e.V.
        </h1>
        <p className="md:text-xl text-justify">{description}</p>
        <div className="w-full flex flex-col md:flex-row items-center justify-start gap-3 md:gap-6">
          <Button onClick={testLog}>Werde Mitglied!</Button>
          <span>oder</span>
          <Button onClick={testLog}>Join us on Discord</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
