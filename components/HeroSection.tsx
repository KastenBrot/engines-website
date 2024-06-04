"use client";

import Image from "next/image";
import { Discord, Hero } from "@/public";
import Button from "@/components/Button";

type Props = {};

const HeroSection = (props: Props) => {
  const testLog = () => {
    console.log("CLICK!");
  };

  return (
    <section
      id="home"
      className="md:flex items-center justify-end w-full md:h-[85vh] customGradient"
    >
      <div className="flex items-center w-11/12 h-full py-10">
        <div className="flex flex-col items-start gap-8 basis-1/3 p-12">
          <p className="text-xl text-secondaryGreen">
            Mit #Vollgas aus Stuttgart in die ganze Nation!
          </p>
          <h1 className="text-7xl">
            Engines
            <br /> Stuttgart e.V.
          </h1>
          <p className="text-lg pb-10 text-justify">
            Der Engines Stuttgart e.V. ist der erste E-Sport-Verein in der
            Metropolregion Stuttgart. Seit Anfang 2018 machen wir es uns zur
            Aufgabe kompetitives Videospielen lokal zu fördern um
            Breiten(e)sport Strukturen aufzubauen und somit den E-Sport Standort
            Deutschland zu stärken.
          </p>
          <div className="flex items-center gap-2">
            <Button onClick={testLog}>Werde Mitglied!</Button>
            <span>oder</span>
            <Button onClick={testLog}>Join us on Discord</Button>
          </div>
        </div>
        <div className="w-full h-full basis-2/3">
          <Image
            className="object-cover mix-blend-lighten"
            src={Hero}
            alt="Hero Section Image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
