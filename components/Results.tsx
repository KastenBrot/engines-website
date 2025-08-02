"use client";
import Match from "@/components/Match";
import Button from "@/components/Buttons/Button";

type Props = {};

const Results = (props: Props) => {
  const testLog = () => {
    console.log("CLICK!");
  };

  return (
    <section className="w-full bg-primary shadow-[0_20px_50px_rgba(26,_27,_26,_1)]">
      <div className="w-5/6 mx-auto">
        <div className="pt-8 flex-row ">
          <div className="text-[3rem] flex justify-center items-center align-top">
            Match Historie
          </div>
        </div>
        <div className="flex justify-between items-center  pb-8">
          <Match
            tournament={"Uniliga Woche 4"}
            format={"First-to-1"}
            score={{
              team1: "Engines Stuttgart",
              score1: "13",
              score2: "3",
              team2: "KIT SC Esports",
            }}
          />
          <Match
            tournament={"Uniliga Woche 3"}
            format={"First-to-1"}
            score={{
              team1: "Engines Stuttgart",
              score1: "13",
              score2: "11",
              team2: "1.ECF Frankfurt",
            }}
          />
          <Match
            tournament={"Uniliga Woche 2"}
            format={"First-to-1"}
            score={{
              team1: "Engines Stuttgart",
              score1: "13",
              score2: "8",
              team2: "AIX eSports",
            }}
          />
          <Match
            tournament={"Uniliga Woche 1"}
            format={"First-to-1"}
            score={{
              team1: "Engines Stuttgart",
              score1: "13",
              score2: "12",
              team2: "DG Fire",
            }}
          />
        </div>
        <div className="pb-8 flex justify-center items-center ">
          <div className="h-30 text-[2.5rem]">
            <Button onClick={testLog}>Alle Matches</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
