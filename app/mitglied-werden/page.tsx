"use client";

import Button from "@/components/Buttons/Button";
import { Check, Cross, Heart } from "@/components/SVGs/Perks";

export default function BecomeMemeber() {
  const handleClick = (redirectPath: string) => {
    window.open(redirectPath, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="flex flex-col justify-start items-center mx-4 my-24 md:my-32 xl:gap-6">
      <h1 className="text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r gradient-engines">
        Mitglied werden
      </h1>

      <div className="flex flex-col gap-12 p-4 md:p-8 md:w-3/4 xl:w-1/2 bg-white rounded text-primary">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl">
            Du möchtest Teil der ENGINES-Familie werden?
          </h2>
          <p>
            …dann würden wir uns sehr freuen, dich als Mitglied bei uns begrüßen
            zu dürfen! Wir erklären dir hier, was eine <b>aktive</b> und{" "}
            <b>passive Mitgliedschaft</b> bei uns bedeutet.
          </p>
          <br />
          <p>
            Möchtest du einen direkten Einfluss auf die Ausrichtung und
            Entwicklung des Vereins haben, sowie von Rabatten auf Merchandise,
            Events und Ausflüge profitieren? Dann kommt für dich die{" "}
            <b>aktive Mitgliedschaft</b> in Frage.
          </p>
          <br />
          <p>
            Wenn du lediglich daran interessiert bist, mit uns auf Events und
            Ausflüge zu gehen, in einem unserer Teams zu spielen oder für uns zu
            streamen, dann raten wir dir zu einer <b>passiven Mitgliedschaft</b>
            .
          </p>
          <br />
          <p>
            Aus Jugendschutzgründen, können wir nur Mitglieder{" "}
            <b>ab 16 Jahren</b> aufnehmen.
          </p>
          <br />
          <p>
            Bei Fragen zur Mitgliedschaft kannst du uns jederzeit unter{" "}
            <a
              className="text-primaryGreen"
              href="mailto:info@engines-stuttgart.de"
            >
              info@engines-stuttgart.de
            </a>{" "}
            kontaktieren!
          </p>
        </div>

        <table className="w-full border-separate border-spacing-y-4 table-fixed">
          <colgroup>
            <col className="w-[40%]" />
            <col className="w-[30%]" />
            <col className="w-[30%]" />
          </colgroup>
          <thead>
            <tr>
              <th className="text-start text-xl md:text-2xl">DEINE VORTEILE</th>
              <th>
                <div className="flex flex-col items-center bg-primaryGreen py-2">
                  <Heart
                    className="inline size-8 md:size-12"
                    fill="white"
                    stroke="white"
                  />
                  <span className="text-sm md:text-lg text-white font-bold">
                    Aktives Mitglied
                  </span>
                </div>
              </th>
              <th>
                <div className="flex flex-col items-center py-2">
                  <Heart className="inline size-8 md:size-12" fill="none" />
                  <span className="text-sm md:text-lg font-bold">
                    Passives Mitglied
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300 divide-[2px]">
            <tr>
              <td className="font-bold border-b-2 border-gray-300 pb-2">
                Teilnahme an Events und Ausflügen
              </td>
              <td className="text-center  border-b-2 border-gray-300 pb-2">
                <Check className="inline size-8 md:size-12 text-primaryGreen" />
              </td>
              <td className="text-center border-b-2 border-gray-300 pb-2">
                <Check className="inline size-8 md:size-12 text-primaryGreen" />
              </td>
            </tr>
            <tr>
              <td className="font-bold border-b-2 border-gray-300 pb-2">
                Teilnahme an einem Team bei den Engines Stuttgart
              </td>
              <td className="text-center border-b-2 border-gray-300 pb-2">
                <Check className="inline size-8 md:size-12 text-primaryGreen" />
              </td>
              <td className="text-center border-b-2 border-gray-300 pb-2">
                <Check className="inline size-8 md:size-12 text-primaryGreen" />
              </td>
            </tr>
            <tr>
              <td className="font-bold border-b-2 border-gray-300 pb-2">
                Die Option für die Engines Stuttgart zu streamen
              </td>
              <td className="text-center border-b-2 border-gray-300 pb-2">
                <Check className="inline size-8 md:size-12 text-primaryGreen" />
              </td>
              <td className="text-center border-b-2 border-gray-300 pb-2">
                <Check className="inline size-8 md:size-12 text-primaryGreen" />
              </td>
            </tr>
            <tr>
              <td className="font-bold border-b-2 border-gray-300 pb-2">
                Stimmrecht
              </td>
              <td className="text-center border-b-2 border-gray-300 pb-2">
                <Check className="inline size-8 md:size-12 text-primaryGreen" />
              </td>
              <td className="text-center border-b-2 border-gray-300 pb-2">
                <Cross className="inline size-8 md:size-12 text-lightergray" />
              </td>
            </tr>
            <tr>
              <td className="font-bold border-b-2 border-gray-300 pb-2">
                Rabatte auf Merch
              </td>
              <td className="text-center border-b-2 border-gray-300 pb-2">
                <Check className="inline size-8 md:size-12 text-primaryGreen" />
              </td>
              <td className="text-center border-b-2 border-gray-300 pb-2">
                <Cross className="inline size-8 md:size-12 text-lightergray" />
              </td>
            </tr>
            <tr>
              <td className="font-bold border-b-2 border-gray-300 pb-2">
                Rabatte auf Events, Ausflüge und Bootcamps
              </td>
              <td className="text-center border-b-2 border-gray-300 pb-2">
                <Check className="inline size-8 md:size-12 text-primaryGreen" />
              </td>
              <td className="text-center border-b-2 border-gray-300 pb-2">
                <Cross className="inline size-8 md:size-12 text-lightergray" />
              </td>
            </tr>
            <tr>
              <td className="font-bold align-top break-words">
                Mitgliedsbeitrag
              </td>
              <td className="text-center">
                <p>
                  Für Kinder, Jugendliche, Auszubildende, Schüler*innen und
                  Studierende jeglichen Alters:{" "}
                  <span className="text-primaryGreen">3,00€/Monat</span>{" "}
                </p>
                <p>
                  Für Erwachsene ab dem vollendeten 18. Lebensjahr:{" "}
                  <span className="text-primaryGreen">6,00€/Monat</span>
                </p>
              </td>
              <td className="text-center align-top">Kostenlos</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <Button
                  className="w-[6rem] md:w-[12rem] p-2 md:p-4 bg-primaryGreen stroke-primaryGreen hover:scale-110 hover:shadow-lg cursor-pointer"
                  textStyle="font-anek text-base md:text-xl font-light text-white"
                  onClick={() =>
                    handleClick(
                      "https://engines.webling.eu/forms/memberform/80791f7fef3ead3c4aa4"
                    )
                  }
                >
                  <span>Aktives Mitglied werden</span>
                </Button>
              </td>
              <td>
                <Button
                  className="w-[6rem] md:w-[12rem] p-2 md:p-4 hover:scale-110 hover:shadow-lg cursor-pointer hover:bg-gray-300"
                  textStyle="font-anek text-base md:text-xl font-extralight text-black"
                  onClick={() =>
                    handleClick(
                      "https://engines.webling.eu/forms/memberform/40b5ca27b45d9eb907b7"
                    )
                  }
                >
                  <span>Passives Mitglied werden</span>
                </Button>
              </td>
            </tr>
          </tbody>
        </table>

        <p className="text-sm font-thin">
          Wir leiten dich zum Anmeldeformular in unserem
          Mitgliedsverwaltungstool Webling weiter.
        </p>
      </div>
    </section>
  );
}
