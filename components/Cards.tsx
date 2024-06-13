type Props = [{
    name: string,
    role: string,
    image: any,
    mail: string,
    discord: string,
}];

const Cards = ({value}) => {
    return (
        <div className="flex">
            {props.map((entry, index) => (
                <div className="flex flex-col m-6">
                    <p className="text-2xl bold">{entry.name}</p>
                    <p className="">{entry.role}</p>
                </div>
            ))}
        </div>
    );
}

export default Cards;
