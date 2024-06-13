import { StaticImageData } from "next/image";
import React from "react";

interface CardContent {
    values: [{
        name: string,
        role: string,
        image: StaticImageData,
        mail: string,
        discord: string,
    }]
};

const Cards: React.FC<CardContent> = ({values}) => {
    return (
        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {values.map((entry, index) => (
                <div className="flex flex-col m-6">
                    <p className="text-2xl bold">{entry.name}</p>
                    <p className="">{entry.role}</p>
                </div>
            ))}
        </div>
    );
}

export default Cards;
