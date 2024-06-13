import { Jonathan, Simon } from "@/public";
import Cards from "@/components/Cards";


export default async function AboutUs({ params }: { params: { page: string } }) {
    return (
        <section className="flex flex-col">
            <div className="flex justify-center h-1/3">
                <h1 className="absolute text-6xl mt-32 text-transparent bg-clip-text bg-gradient-to-r gradient-engines">Verein und Vorstand</h1>
            </div>
            <div className="flex flex-col gap-4 p-8 mt-48 mb-12 mx-auto w-1/2 bg-white rounded text-primary">
                <div className="text-center">
                    <h1 className="text-2xl">
                        <span className="text-6xl text-primaryGreen font-serif">"</span> Wir machen es uns zur Aufgabe, den eSport in der Metropolregion Stuttgart und darüber hinaus zu fördern und interessierten Spieler*innen ein professionelles Umfeld für ihre Entwicklung zu bieten.
                    </h1>
                  
                    <p className="mt-12 text-left">Der Engines Stuttgart e.V. ist der erste eSport-Verein in der Metropolregion Stuttgart. Seit Anfang 2018 machen wir es uns zur Aufgabe kompetitives Videospielen lokal zu fördern um Breiten(e)sport Strukturen aufzubauen und somit den eSport Standort Deutschland zu stärken.</p>
                </div>

                <div className="mt-6">
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-engines">Woher wir kommen</h2>
                    <p>Wir haben unseren Ursprung in der Hochschule der Medien Stuttgart. 2017 gründeten Studenten die Hochschulinitiative “Campus eSports”, welche Gaming und eSport zu ihren Zielen zählte. Nachdem die Hochschulgruppe einen enormen Zuwachs (unter anderen von Externen) erfuhr, gründeten sich die “Engines Stuttgart“, die auch außerhalb der Hochschule tätig sein wollten. Kurz darauf wurde die “Engines Stuttgart Universität” aus dem Boden gestampft, die die Engines Stuttgart in der Universität Stuttgart vertreten. Nach zahlreichen erfolgreichen Events wie den “Media Legends” oder der “Stuggilan” beschlossen die Engines Stuttgart ein Verein zu werden. Dadurch können die Engines Stuttgart nun komplett unabhängig von der Hochschule agieren.</p>
                </div>

                <div className="mt-6">
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-engines">Was wir machen</h2>
                    <p className="my-4">Durch den Ursprung als Hochschulgruppe liegt es nahe, dass wir an der “Uniliga” teilnehmen, um uns mit anderen Universitäten/ Städten in verschiedenen Spielen zu messen. Wir sind aber auch bei weiteren Turnieren wie den “MLP Legends” oder den “MT Legends” zu finden.</p>
                    <p className="my-4">Zusätzlich wollen wir Events wie die Stuggilan organisieren - welche übrigens mit über 230 Teilnehmern die größte Lanparty Stuttgarts war. Auch treffen wir uns zu Viewings von wichtigen Spielen wie den “League of Legend World Finals” und sind als Aussteller auf dem Stuttgarter Messeherbst und der ComicCon Stuttgart vertreten.</p>
                    <p className="my-4">Neben unserer Liebe zu Videospielen treffen wir uns auch gerne zum Grillen, oder geben beim Karaoke oder auf dem Canstatter Wasen unsere Gesangskünste zum Besten.</p>
                </div>

                <div className="my-6">
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-engines">Vorstand und Verantwortliche</h2>
                    <h3 className="text-xl font-bold mt-4">Geschäftsführender Vorstand</h3>
                    <Cards value={content} />                    <hr />
                    <h3 className="text-xl font-bold mt-4">Vorstandsbeisitzende</h3>
                    <Cards value={content} />
                </div>
            </div>
        </section>
    );
}

const content = [
    {
        name: "Simon Clauß",
        role: "Vorstandsvorsitzender",
        image: Simon,
        mail: "s.clauss@engines-stuttgart.de",
        discord: ""
    },    
    {
        name: "Jonathan Berg",
        role: "Stellv. Vorstandsvorsitzender",
        image: Jonathan,
        mail: "j.berg@engines-stuttgart.de",
        discord: ""
    },
    {
        name: "Sabrina Mank",
        role: "Vorstand – Schatzmeisterin",
        image: Jonathan,
        mail: "s.mank@engines-stuttgart.de",
        discord: ""
    }
]
