export default async function Legal({ params }: { params: { page: string } }) {
  return (
    <section className="flex flex-col">
      <div className="flex justify-center h-1/3">
        <h1 className="absolute text-4xl mt-24 md:text-6xl md:mt-32 text-transparent bg-clip-text bg-gradient-to-r gradient-engines">
          Impressum
        </h1>
      </div>
      <div className="relative flex flex-col m-6 mt-36 gap-6 md:p-8 md:mt-44 md:mx-32 lg:mx-96">
        <h1 className="text-2xl">Engines Stuttgart e.V.</h1>

        <p>Angaben gemäß § 5 TMG:</p>

        <h2 className="mt-5 mb-0 text-lg">
          Verantwortlicher für den Internetauftritt:
        </h2>
        <p>
          Simon clauß <br />
          Engines Stuttgart e.V. <br />
          Breitenstraße 7 <br />
          71296 Heimsheim <br />
          s.clauß@engines-stuttgart.de
        </p>

        <h2 className="mt-5 mb-0 text-lg">
          Engines Stuttgart e.V. wird vertreten durch:
        </h2>

        <p>
          Simon Clauß <br />
          Jonathan Berg <br />
          Sabrina Mank <br />
          Registergericht: Amtsgericht Stuttgart <br />
          Registernummer: VR 724081 <br />
        </p>

        <h2 className="mt-5 mb-0 text-lg">Haftung für Inhalte</h2>

        <p>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
          Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </p>

        <h2 className="mt-5 mb-0 text-lg">Haftung für Links</h2>

        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>
      </div>
    </section>
  );
}
