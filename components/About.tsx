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
            <h1 className="text-xl md:text-2xl">
                <span className="text-6xl text-primaryGreen font-serif">"</span> Wir machen es uns zur Aufgabe, den E-Sport in der Metropolregion Stuttgart und darüber hinaus zu fördern und interessierten Spieler*innen ein professionelles Umfeld für ihre Entwicklung zu bieten.
            </h1>
            <div className="flex justify-end w-full">
              <Button
                className="w-[10rem] bg-primaryGreen stroke-primaryGreen hover:scale-110 hover:shadow-lg mt-4"
                textStyle="font-anek text-md font-bold text-white"
                onClick={() => handleClick("/verein")}
              >About us</Button>  
            </div>
        </div>
       
    </section>
  );
}

export default About;
