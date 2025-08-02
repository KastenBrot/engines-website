
type Props = {};

export default function About(props: Props) {
  return (
    <section id="about" className="py-8 px-8 bg-secondary ">
        <div className="text-center p-4 md:p-8 lg:p-8 mx-auto w-[95vw] md:w-5/6 lg:w-5/6 bg-white rounded text-primary">
            <h1 className="text-xl md:text-2xl">
                <span className="text-6xl text-primaryGreen font-serif">"</span> Wir machen es uns zur Aufgabe, den eSport in der Metropolregion Stuttgart und darüber hinaus zu fördern und interessierten Spieler*innen ein professionelles Umfeld für ihre Entwicklung zu bieten.
            </h1>

            <button>About us</button>
        </div>
    </section>
  );
}
