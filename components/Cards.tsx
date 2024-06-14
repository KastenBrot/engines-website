import { StaticImageData } from "next/image";
import React from "react";

interface Card {
    name: string,
    role: string,
    image: StaticImageData,
    mail: string,
    discord: string,
}

interface CardProps {
    props: Card[];
};

const Cards: React.FC<CardProps> = ({props}) => {
    return (
        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-">
            {props.map((item) => (
                <div className="flex flex-col m-6">
                    <p className="text-2xl bold">{item.name}</p>
                    <p className="">{item.role}</p>
                </div>
            ))}
        </div>
    );
}

export default Cards;
