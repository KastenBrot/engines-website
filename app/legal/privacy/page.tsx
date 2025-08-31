export default async function Legal({ params }: { params: { page: string } }) {
  return (
    <section className="flex flex-col">
      <div className="flex justify-center h-1/3">
        <h1 className="absolute text-4xl mt-24 md:text-6xl md:mt-32 text-transparent bg-clip-text bg-gradient-to-r gradient-engines">
          Datenschutzerklärung
        </h1>
      </div>
      <div className="relative flex flex-col m-6 mt-36 gap-6 md:p-8 md:mt-44 md:mx-32 lg:mx-96">
        <article>
          <h2 className="hidden mb-4 font-bold md:block md:text-3xl">
            Datenschutzerklärung für den ehrenamtlichen Esports Verein Engines
            Stuttgart e.V.
          </h2>
          <p className="leading-relaxed text-justify">
            Der Ehrenamtliche Esports Verein Engines Stuttgart e.V., vertreten
            durch Simon Clauß nimmt den Schutz Ihrer persönlichen Daten sehr
            ernst. Nachfolgend informieren wir Sie gemäß den gesetzlichen
            Bestimmungen, insbesondere der Datenschutz-Grundverordnung (DSGVO),
            über die Verarbeitung Ihrer personenbezogenen Daten durch unseren
            Verein.
          </p>
        </article>

        <article>
          <h3 className="text-2xl font-semibold mb-3">1. Verantwortlicher</h3>
          <p className="leading-relaxed mb-4 text-justify">
            Verantwortlich für die Verarbeitung personenbezogener Daten im Sinne
            der DSGVO ist der ehrenamtlicher Esports Verein Engines Stuttgart
            e.V.
          </p>
          <address className="ml-4 space-y-1">
            <div>Engines Stuttgart. e.V</div>
            <div>Breitenstraße 7</div>
            <div>71296 Heimsheim</div>
            <div>Tel.: 015787044511</div>
            <div>Email: info@engines-stuttgart.de</div>
          </address>
        </article>

        <article>
          <h3 className="text-2xl font-semibold mb-3">
            2. Zweck der Datenverarbeitung
          </h3>
          <p className="leading-relaxed text-justify">
            Die Verarbeitung personenbezogener Daten erfolgt zur Erfüllung der
            satzungsgemäßen Aufgaben des Vereins, insbesondere zur Organisation
            und Durchführung von Esports-Veranstaltungen, zur Kommunikation mit
            den Mitgliedern sowie zur Wahrung der Vereinsinteressen.
          </p>
        </article>

        <article>
          <h3 className="text-2xl font-semibold mb-3">
            3. Arten der verarbeiteten Daten
          </h3>
          <p className="leading-relaxed text-justify">
            Zu den verarbeiteten Daten gehören insbesondere Name, Adresse,
            E-Mail-Adresse, Telefonnummer, Geburtsdatum, Esports-spezifische
            Informationen (z. B. Spielernamen, Ranglistenplatzierungen) sowie
            sonstige für die Vereinszwecke erforderliche Daten.
          </p>
        </article>

        <article>
          <h3 className="text-2xl font-semibold mb-3">
            4. Rechtsgrundlagen der Verarbeitung
          </h3>
          <p className="leading-relaxed text-justify">
            Die Verarbeitung Ihrer Daten erfolgt auf Grundlage der DSGVO sowie
            des Bundesdatenschutzgesetzes (BDSG). Insbesondere kommen die
            Artikel 6 Absatz 1 lit. a (Einwilligung) und lit. b
            (Vertragserfüllung) DSGVO zur Anwendung.
          </p>
        </article>

        <article>
          <h3 className="text-2xl font-semibold mb-3">
            5. Weitergabe von Daten an Dritte
          </h3>
          <p className="leading-relaxed text-justify">
            Personenbezogene Daten werden nur an Dritte weitergegeben, wenn dies
            gesetzlich erlaubt ist oder Sie eingewilligt haben. Eine
            Übermittlung in Drittländer außerhalb der EU erfolgt nur, soweit
            dies zur Durchführung unserer Vereinszwecke erforderlich ist und im
            Einklang mit den gesetzlichen Bestimmungen steht.
          </p>
        </article>

        <article>
          <h3 className="text-2xl font-semibold mb-3">6. Speicherdauer</h3>
          <p className="leading-relaxed text-justify">
            Personenbezogene Daten werden nur so lange gespeichert, wie es für
            die Vereinszwecke erforderlich ist oder gesetzliche
            Aufbewahrungsfristen bestehen.
          </p>
        </article>

        <article>
          <h3 className="text-2xl font-semibold mb-3">
            7. Rechte der betroffenen Personen
          </h3>
          <p className="leading-relaxed text-justify">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung und Datenübertragbarkeit Ihrer
            personenbezogenen Daten. Bei Fragen oder Anliegen zur Verarbeitung
            Ihrer Daten sowie zur Ausübung Ihrer Rechte können Sie sich an den
            Verein wenden.
          </p>
        </article>

        <article>
          <h3 className="text-2xl font-semibold mb-3">8. Widerrufsrecht</h3>
          <p className="leading-relaxed text-justify">
            Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
            können Sie diese jederzeit widerrufen. Der Widerruf berührt nicht
            die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung.
          </p>
        </article>

        <article>
          <h3 className="text-2xl font-semibold mb-3">
            9. Beschwerderecht bei der Aufsichtsbehörde
          </h3>
          <p className="leading-relaxed text-justify">
            Sie haben das Recht, sich bei der Datenschutz-Aufsichtsbehörde zu
            beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer
            personenbezogenen Daten gegen Datenschutzrechtliche Bestimmungen
            verstößt.
          </p>
        </article>

        <article>
          <h3 className="text-2xl font-semibold mb-3">
            10. Schlussbestimmungen
          </h3>
          <p className="leading-relaxed text-justify">
            Diese Datenschutzerklärung kann von Zeit zu Zeit aktualisiert
            werden, um Änderungen in den rechtlichen Anforderungen oder in der
            Verarbeitung personenbezogener Daten zu berücksichtigen. Die
            aktuelle Version der Datenschutzerklärung ist jederzeit auf der
            Website des Vereins abrufbar.
          </p>
        </article>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="space-y-2">
            <span>
              <strong>Stand:</strong> 14.01.2024
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}
