"use client";

import Button from "@/components/Buttons/Button";
import { PersonCircle } from "@/components/SVGs/Icons";

const MembersSection = () => {
  const handleClick = () => {
    window.open("https://engines.webling.eu/portal#/", "_blank");
  };

  return (
    <section id="members" className="p-0 md:p-8 lg:p-8 bg-secondary">
      <div className="text-center p-4 md:p-8 lg:p-8 mx-auto w-[95vw] md:w-5/6 lg:w-5/6 bg-white rounded text-primary">
        <h2 className="text-lg md:text-2xl font-bold">Mitgliederbereich</h2>
        <p className="pt-2">
          Als Mitglied könnt ihr hier eure persönlichen Daten einsehen und bearbeiten.
        </p>
        <div className="flex justify-center w-full pt-4">
          <Button
            className="flex items-center justify-center gap-2 p-4 min-w-[12rem] w-auto bg-primaryGreen stroke-primaryGreen hover:scale-105 hover:shadow-lg"
            textStyle="font-anek text-sm md:text-md font-bold text-white"
            onClick={handleClick}
          >
            <PersonCircle className="h-5 w-5 flex-shrink-0 fill-white" />
            Zum Mitgliederbereich
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
