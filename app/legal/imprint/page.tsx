export default async function Legal({ params }: { params: { page: string } }) {
    return (
        <section className="flex flex-col h-screen lg:h-[85vh]">
            <div className="flex justify-center h-1/3">
                <h1 className="absolute text-6xl mt-32 text-transparent bg-clip-text bg-gradient-to-r from-engines">Impressum</h1>
            </div>
            <div className="lg:order-1 lg:pl-36 flex p-8 lg:px-32">
                <p>
                    Angaben gemäß § 5 TMG: <br />
                    Verantwortlicher für den Internetauftritt: <br />
                    Simon clauß <br />
                    Engines Stuttgart e.V. <br />
                    Breitenstraße 7 <br />
                    71296 Heimsheim <br />
                    s.clauß@engines-stuttgart.de</p>
            </div>
        </section>
    );
}