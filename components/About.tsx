"use client";

import Button from "@/components/Buttons/Button";

type Props = {};

const About = (props: Props) => {
  const handleClick = (redirectPath: string) => {
    window.open(redirectPath);
  };

  return (
    <section id="about" className="p-0 md:p-8 lg:p-8 bg-secondary ">
      <div className="text-center p-4 md:p-8 lg:p-8 mx-auto w-[95vw] md:w-5/6 lg:w-5/6 bg-white rounded text-primary">
        <h1 className="text-base md:text-2xl">
          <span className="text-5xl md:text-6xl text-primaryGreen font-serif">
            "
          </span>
          Wir machen es uns zur Aufgabe, den E-Sport in der Metropolregion
          Stuttgart und darüber hinaus zu fördern und interessierten
          Spieler*innen ein professionelles Umfeld für ihre Entwicklung zu
          bieten.
        </h1>
        <div className="flex justify-end w-full pt-4">
          <Button
            className="p-4 w-[8rem] md:w-[12rem] bg-primaryGreen stroke-primaryGreen hover:scale-110 hover:shadow-lg"
            textStyle="font-anek text-md font-bold text-white"
            onClick={() => handleClick("/verein")}
          >
            About us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
