export default async function Legal({ params }: { params: { page: string } }) {
    return (
        <section className="flex flex-col">
            <div className="flex justify-center h-1/3">
                <h1 className="absolute text-6xl mt-32 text-transparent bg-clip-text bg-gradient-to-r from-engines">Satzung</h1>
            </div>
            <div className="flex flex-col gap-4 p-8 mt-44 relative lg:mx-96 md:mx-32 mx-12">
                <h2 className="mt-5 mb-0 text-lg">§1 Name, Sitz, Geschäftsjahr</h2>

                <ol className="list-decimal pl-8">
                    <li>Der Verein führt den Namen „Engines Stuttgart e.V.“</li>
                    <li>Der Verein hat seinen Sitz in Stuttgart und soll in das Vereinsregister eingetragen werden.</li>
                    <li>Das Geschäftsjahr des Vereins ist das Kalenderjahr.</li>
                </ol>

                <h2 className="mt-5 mb-0 text-lg">§2 Vereinszweck</h2>

                <ol className="list-decimal pl-8">
                    <li>Zweck des Vereins ist die Förderung des virtuellen Breitensports in der Metropolregion Stuttgart.</li>
                    <li>Der Satzungszweck soll insbesondere durch folgende Maßnahmen verwirklicht werden:</li>
                    <ol className="list-decimal pl-8">
                        <li>Die Durchführung regelmäßiger Veranstaltungen als öffentliche und betreute Freizeitangebote für junge Menschen.</li>
                        <li>Medienpädagogische Betreuung junger Menschen, um diese zur kritischen Reflexion von Chancen und Gefahren des elektronischen Sports, der Gesundheitsrisiken und zur verantwortungsvollen Kommunikation im Internet zu befähigen.</li>
                        <li>Ein Angebot von betreuten Online-Trainings und -Treffen zur Kompetenzbildung und Aufklärung junger Menschen. Kompetenzen, die hierbei gefördert werden, beinhalten motorische und geistige Fähigkeiten (Hand-Auge-Koordination, Reaktionsgeschwindigkeit und taktisches Denkvermögen) sowie soziale Kompetenzen (Teamfähigkeit, Kommunikation und Konfliktbewältigung). Zur Zweckverwirklichung arbeitet der Verein mit anderen gleichgerichteten Organisationen zusammen.</li>
                        <li>Organisation von Teams für den digitalen Wettbewerb.</li>
                    </ol>
                    <li>Mittel des Vereins dürfen nur für satzungsgemäße Zwecke verwendet werden. Die Mitglieder erhalten keine Zuwendungen aus Mitteln des Vereins. Es darf keine Person durch Ausgaben, die dem Zweck des Vereins fremd sind oder durch unverhältnismäßig hohe Vergütungen, begünstigt werden.</li>
                    <li>Alle Inhaber von Vereinsämtern sind grundsätzlich ehrenamtlich tätig. Die Mitgliederversammlung kann davon abweichend beschließen, dass für die Tätigkeit in Vereinsämtern eine angemessene Tätigkeitsvergütung gezahlt wird.</li>
                </ol>

                <h2 className="mt-5 mb-0 text-lg">§3 Rechtsgrundlagen</h2>

                <ol className="list-decimal pl-8">
                    <li>Der Verein ist eine rechtskräftig eingetragene Vereinigung und soll im Rechtsverkehr durch ein Mitglied des geschäftsführenden Vorstands (siehe §8.1a) jeweils in Einzelvertretungsberechtigung vertreten werden.</li>
                    <li>Der Verein kann Mitglied weiterer Organisationen sein, wenn es für die Erfüllung seiner Aufgaben von Nutzen ist. Er übt die Mitgliedschaft im Interesse seiner Abteilungen und Mitglieder aus.</li>
                    <li>Der Verein regelt die Arbeit durch Ordnungen und Entscheidungen seiner Organe. Grundlage hierfür ist die Vereinssatzung.</li>
                    <li>Der Verein ist offen für alle Interessenten, unabhängig von deren Staatsangehörigkeit, Geschlecht, Sexualität, Herkunft, Religion, Weltanschauung, Parteizugehörigkeit, körperliche oder geistige Beeinträchtigung und gesellschaftlicher Stellung.</li>
                </ol>

                <h2 className="mt-5 mb-0 text-lg">§4 Erwerb der Mitgliedschaft</h2>

                <ol className="list-decimal pl-8">
                    <li>Mitglied kann jede natürliche oder juristische Person werden.</li>
                    <li>Der Verein besteht aus:</li>
                    <ol className="list-decimal pl-8">
                        <li>Aktiven Mitgliedern</li>
                        <li>Passiven Mitgliedern</li>
                        <li>Ehrenmitgliedern</li>
                    </ol>
                    <li>Aktive Mitglieder sind die im Verein direkt mitarbeitenden Mitglieder. Passive Mitglieder sind Mitglieder, die sich nicht aktiv innerhalb des Vereins betätigen und kein Stimmrecht besitzen, jedoch die Ziele und auch den Zweck des Vereins in geeigneter Weise fördern und unterstützen. Zum Ehrenmitglied werden Mitglieder ernannt, die sich in besonderer Weise um den Verein verdient gemacht haben. Hierfür ist ein Beschluss der Mitgliederversammlung erforderlich. Ehrenmitglieder haben alle Rechte eines aktiven Mitgliedes.</li>
                    <li>Der Antrag einer natürlichen Person auf Erwerb der Mitgliedschaft soll den vollen Namen, das Geburtsdatum, Anschrift und E-Mail-Adresse des Antragstellenden enthalten. Der Aufnahmeantrag Minderjähriger bedarf der Unterschrift mindestens eines der gesetzlichen Vertreter.</li>
                    <li>Anträge von juristischen Personen, Personen- oder Handelsgesellschaften, nicht rechtsfähigen Vereinen oder Anstalten und Körperschaften des öffentlichen Rechts auf Erwerb der Mitgliedschaft sollen den Namen der Firma bzw. Geschäftsbezeichnung, die Handels- oder Vereinsregisternummer sowie das zuständige Registergericht enthalten. Über die Aufnahme weiterer Angaben in den Antrag entscheidet der Gesamtvorstand.</li>
                    <li>Die Mindestdauer der aktiven Mitgliedschaft beträgt sechs Monate.</li>
                    <li>Über den Antrag auf Erwerb der Mitgliedschaft entscheidet der Gesamtvorstand. Bei mehrheitlicher Ablehnung des Antrages ist der Gesamtvorstand nicht verpflichtet, dem Antragsteller die Gründe mitzuteilen. Bei Annahme des Antrags durch den Gesamtvorstand beginnt die Mitgliedschaft mit der Zahlung des ersten Mitgliedsbeitrags nach §6 der Satzung.</li>
                    <li>Ummeldungen in der Mitgliedschaft (von aktiver Mitgliedschaft auf passive Mitgliedschaft) müssen mit einer einmonatigen Frist, unter Einhaltung der Mindestmitgliedschaft (siehe §4.4), dem Gesamtvorstand schriftlich mitgeteilt werden.</li>
                    <li>Änderungen der personenbezogenen Daten eines Mitglieds müssen unverzüglich dem/der amtierenden Schatzmeister/in schriftlich oder in Textform mitgeteilt werden.</li>
                </ol>

                <h2 className="mt-5 mb-0 text-lg">§5 Beendigung der Mitgliedschaft</h2>

                <ol className="list-decimal pl-8">
                    <li>Die Mitgliedschaft endet</li>
                    <ol className="list-decimal pl-8">
                        <li>mit dem Tod des Mitglieds; im Falle von juristischen Personen, Personen-oder Handelsgesellschaften, nicht rechtsfähigen Vereinen sowie Anstalten und Körperschaften des öffentlichen Rechts durch deren Auflösung und Erlöschung;</li>
                        <li>durch freiwilligen Austritt;</li>
                        <li>durch Streichung von der Mitgliederliste;</li>
                        <li>durch Ausschluss aus dem Verein.</li>
                    </ol>
                    <li>Der freiwillige Austritt erfolgt durch schriftliche Erklärung gegenüber einem Mitglied des Gesamtvorstands. Er ist nur zum Schluss eines Quartals (31.03., 30.06., 30.09., 31.12) unter Einhaltung einer Kündigungsfrist von einem Monat, sowie der Mindestdauer der Mitgliedschaft von sechs Monaten zulässig.</li>
                    <li>Ein Mitglied kann durch Beschluss des Gesamtvorstands von der Mitgliederliste gestrichen werden, wenn es trotz zweimaliger Mahnung mit der Zahlung des Beitrags im Rückstand ist. Die Streichung darf erst beschlossen werden, wenn seit der Absendung des zweiten Mahnschreibens ein Monat verstrichen ist und die Beitragsschulden nicht beglichen worden sind. Die Streichung ist dem Mitglied mitzuteilen.</li>
                    <li>Der Ausschluss eines Mitglieds mit sofortiger Wirkung und aus wichtigem Grund kann dann ausgesprochen werden, wenn das Mitglied in grober Weise gegen die Satzung, Ordnungen, den Satzungszweck oder die Vereinsinteressen verstößt. Über den Ausschluss eines Mitglieds entscheidet der Gesamtvorstand mit Zweidrittelmehrheit der abgegebenen Stimmen. Dem Mitglied ist unter Fristsetzung von einem Monat Gelegenheit zu geben, sich vor dem Vereinsausschluss zu den erhobenen Vorwürfen zu äußern.</li>
                    <li>Bei Beendigung der Mitgliedschaft, gleich aus welchem Grund, erlöschen alle Ansprüche aus dem Mitgliedsverhältnis. Eine Rückgewähr von Beiträgen, Spenden oder sonstigen Unterstützungsleistungen ist grundsätzlich ausgeschlossen. Der Anspruch des Vereins auf rückständige Beiträge bleibt hiervon unberührt.</li>
                </ol>

                <h2 className="mt-5 mb-0 text-lg">§6 Mitgliedsbeiträge</h2>

                <ol className="list-decimal pl-8">
                    <li>Von den aktiven Mitgliedern werden Beiträge erhoben.</li>
                    <li>Die Höhe des Mitgliedsbeitrages sowie etwaiger Gebühren für Zusatzangebote und deren Fälligkeiten werden vom Gesamtvorstand in einer Beitragsordnung festgesetzt.</li>
                    <li>Ehrenmitglieder und passive Mitglieder sind von der Beitragspflicht befreit.</li>
                </ol>

                <h2 className="mt-5 mb-0 text-lg">§7 Organe des Vereins</h2>

                <ol className="list-decimal pl-8">
                    <li>Die Organe des Vereins sind:</li>
                    <ol className="list-decimal pl-8">
                        <li>der Gesamtvorstand,</li>
                        <li>die Mitgliederversammlung.</li>
                    </ol>
                    <li>Der Verein kann einen nicht bestimmenden Beirat einrichten. Die Einrichtung eines Beirats und die Auswahl der Beiratsmitglieder obliegt dem Gesamtvorstand.</li>
                </ol>

                <h2 className="mt-5 mb-0 text-lg">§8 Der Gesamtvorstand</h2>

                <ol className="list-decimal pl-8">
                    <li>Der Gesamtvorstand besteht aus:</li>
                    <ol className="list-decimal pl-8">
                        <li>dem geschäftsführenden Vorstand (bestehend aus dem/der Vorsitzenden, dem/der stellvertretenden Vorsitzenden und dem/der Schatzmeister/in),</li>
                        <li>auf Beschluss der Mitgliederversammlung bis zu fünf Beisitzern.</li>
                    </ol>
                    <li>Der geschäftsführende Vorstand vertritt den Verein gerichtlich und außergerichtlich. Dabei ist ein Mitglied des geschäftsführenden Vorstandes berechtigt, den Verein zu vertreten.</li>
                    <li>Der Gesamtvorstand kann sich eine Geschäftsordnung geben. In der Geschäftsordnung kann insbesondere eine Verteilung der Aufgaben auf die jeweiligen Mitglieder des Gesamtvorstands erfolgen. Abschluss, Änderung und Aufhebung einer Geschäftsordnung für den Gesamtvorstand bedürfen eines einstimmigen Beschlusses des Gesamtvorstands.</li>
                    <li>Der Gesamtvorstand kann besondere Aufgaben unter seinen Mitgliedern verteilen und Ausschüsse für deren Bearbeitung oder Vorbereitung einsetzen.</li>
                </ol>

                <h2 className="mt-5 mb-0 text-lg">§9 Zuständigkeit des Gesamtvorstands</h2>

                <ol className="list-decimal pl-8">
                    <li>Der Gesamtvorstand ist für die Angelegenheiten des Vereins zuständig, soweit sie nicht durch die Satzung einem anderen Vereinsorgan zugewiesen sind.</li>
                    <li>Der Gesamtvorstand hat vor allem folgende Aufgaben:</li>
                    <ol className="list-decimal pl-8">
                        <li>Vorbereitung der Mitgliederversammlung und Aufstellung der Tagesordnung</li>
                        <li>Einberufung der Mitgliederversammlung</li>
                        <li>Ausführung der Beschlüsse der Mitgliederversammlung</li>
                        <li>Beschlussfassung über Aufnahme, Streichung und Ausschluss von Mitgliedern.</li>
                        <li>Der ehrenamtliche Arbeitsumfang beträgt wöchentlich mindestens fünf Stunden.</li>
                    </ol>
                    <li>Der geschäftsführende Vorstand hat vor allem folgende Aufgaben:</li>
                    <ol className="list-decimal pl-8">
                        <li>Verwaltung des Vereinsvermögens; insbesondere die Aufstellung eines Haushaltsplans für jedes Geschäftsjahr; Buchführung; Erstellung eines Jahresberichts.</li>
                        <li>Abschluss und Kündigung von Verträgen</li>
                    </ol>
                    <li>Die bis zu fünf Beisitzer lassen sich in folgende Bereiche wählen:</li>
                    <ol className="list-decimal pl-8">
                        <li>Bereichskoordinator/in Informationstechnik (IT)</li>
                        <li>Bereichskoordinator/in Marketing</li>
                        <li>Bereichskoordinator/in Sportliche Leitung</li>
                        <li>Bereichskoordinator/in Events</li>
                        <li>Bereichskoordinator/in Grafik</li>
                    </ol>
                </ol>

                <h2 className="mt-5 mb-0 text-lg">§10 Amtsdauer des Gesamtvorstands</h2>

                <ol className="list-decimal pl-8">
                    <li>Die Mitglieder des Gesamtvorstands werden von der Mitgliederversammlung für die Dauer von einem Jahr, vom Tage der Wahl an gerechnet, gewählt. Ein Gesamtvorstandsmitglied bleibt auch nach Ablauf seiner regulären Amtszeit bis zur gültigen Wahl eines neuen Gesamtvorstands im Amt. Zur gleichen Zeit endet die Amtszeit eines Gesamtvorstandsmitglieds mit der gültigen Wahl eines neuen Gesamtvorstands.</li>
                    <li>Jedes Mitglied des geschäftsführenden Vorstands ist einzeln zu wählen. Über den Modus zur Wahl der Beisitzenden entscheidet die Versammlungsleitung in Abstimmung mit der Mitgliederversammlung.</li>
                    <li>Die Bestellung zum Gesamtvorstand ist jederzeit widerruflich, jedoch nur aus wichtigem Grund und nach Maßgabe der Mehrheitsanforderungen gem. § 14 Abs. 6 Satz 4 dieser Satzung.</li>
                    <li>Scheidet ein Gesamtvorstandsmitglied vor Ablauf seiner Wahlperiode aus, ist der Gesamtvorstand berechtigt, ein kommissarisches Gesamtvorstandsmitglied zu berufen. Auf diese Weise bestimmte Gesamtvorstandsmitglieder bleiben bis zur nächsten Mitgliederversammlung im Amt.</li>
                    <li>Wählbar sind nur aktive Vereinsmitglieder, mit der Mitgliedschaft im Verein endet auch die Mitgliedschaft im Gesamtvorstand.</li>
                    <li>Wiederwahl ist zulässig.</li>
                </ol>

                <h2 className="mt-5 mb-0 text-lg">§11 Beschlussfassung des Gesamtvorstands</h2>

                <ol className="list-decimal pl-8">
                    <li>Der Gesamtvorstand fasst seine Beschlüsse im Allgemeinen in Sitzungen, die schriftlich, fernmündlich oder in Textform (bspw. E-Mail) einberufen werden. Jedes Gesamtvorstandsmitglied ist einberufungsberechtigt. Eine Einberufungsfrist von einer Woche soll eingehalten werden. In dringenden Fällen ist eine Einberufung mit kürzerer Frist zulässig. Einer Mitteilung der Tagesordnung bedarf es nicht. Der Leiter ist zu Beginn jeder Sitzung zu wählen.</li>
                    <li>Über die Sitzungen des Gesamtvorstands soll ein Protokoll aufgenommen werden. Die Niederschrift soll Ort und Zeit der Gesamtvorstandssitzung, die Namen der Teilnehmenden, die gefassten Beschlüsse und das Abstimmungsergebnis enthalten.</li>
                    <li>Der Gesamtvorstand ist beschlussfähig, wenn mindestens fünf Gesamtvorstandsmitglieder anwesend sind oder schriftlich zustimmen, von denen mindestens eine/r dem geschäftsführenden Vorstand angehören muss. Bei der Beschlussfassung entscheidet die einfache Mehrheit der abgegebenen gültigen Stimmen. Bei Stimmengleichheit gilt der Antrag als abgelehnt. Die Beschlüsse des Gesamtvorstands sollen zu Beweiszwecken in ein Beschlussbuch eingetragen und vom Sitzungsleiter unterschrieben werden.</li>
                    <li>Besteht für eine einberufene Sitzung des Gesamtvorstands Beschlussunfähigkeit, ist jedes Gesamtvorstandsmitglied berechtigt, eine zweite Versammlung mit der gleichen Tagesordnung einzuberufen, die ohne Rücksicht auf die Zahl der Anwesenden beschlussfähig ist. Darauf muss in der Einberufung hingewiesen werden.</li>
                    <li>Gesamtvorstandsbeschlüsse können auch fernmündlich gefasst werden.</li>
                    <li>Jedes Mitglied des geschäftsführenden Vorstands hat das Recht gegen einen Tagesordnungspunkt oder eine Entscheidung des Gesamtvorstands jederzeit ein einmaliges Vetorecht auszuüben. Das Vetorecht bewirkt die Verschiebung des betroffenen Tagesordnungspunktes auf die nächste Sitzung. Beschlüsse, welche vom Vetorecht erfasst sind, sind in der nächsten Sitzung vom Gesamtvorstand neu abzustimmen und dürfen nicht erneut mit dem Vetorecht verschoben werden.</li>
                </ol>

                <h2 className="mt-5 mb-0 text-lg">§12 Die Mitgliederversammlung</h2>

                <ol className="list-decimal pl-8">
                    <li>In der Mitgliederversammlung hat jedes aktive Mitglied – auch ein Ehrenmitglied – eine Stimme. Eine Vertretung in der Mitgliederversammlung durch die gesetzlichen Vertreter ist jederzeit zulässig. Zur Ausübung des Stimmrechts kann auch ein anderes Mitglied schriftlich oder in Textform (bspw. E-Mail) bevollmächtigt werden.</li>
                    <li>Die Bevollmächtigung ist für jede Mitgliederversammlung gesondert zu erteilen. Ein Mitglied darf jedoch nicht mehr als drei fremde Stimmen vertreten.</li>
                    <li>Die Mitgliederversammlung ist für folgende Angelegenheiten zuständig:</li>
                    <ol className="list-decimal pl-8">
                        <li>Genehmigung des vom Gesamtvorstand aufgestellten Haushaltsplans für das nächste Geschäftsjahr,</li>
                        <li>Entgegennahme des Jahresberichts des Gesamtvorstands,</li>
                        <li>Die Entlastung des Gesamtvorstands, die Wahl der einzelnen Gesamtvorstandsmitglieder und deren Abberufung,</li>
                        <li>Beschlussfassungen über die Änderung der Satzung und Beschlussfassung über die Auflösung des Vereins,</li>
                        <li>Beschlussfassung über die Berufung gegen einen Ausschließungsbeschluss des Gesamtvorstands,</li>
                        <li>Ernennung von Ehrenmitgliedern.</li>
                    </ol>
                </ol>

                <h2 className="mt-5 mb-0 text-lg">§13 Einberufung der Mitgliederversammlung</h2>

                <ol className="list-decimal pl-8">
                    <li>Die Mitgliederversammlung soll einmal jährlich in den ersten sechs Monaten des Jahres stattfinden.</li>
                    <li>Die Mitgliederversammlung wird vom Gesamtvorstand mit einer Frist von vier Wochen schriftlich, fernschriftlich oder in Textform, unter Verwendung elektronischer Kommunikationsmittel, unter Angabe der Tagesordnung einberufen. Die Frist beginnt mit dem auf die Absendung des Einladungsschreibens folgenden Tag. Der Tag der Mitgliederversammlung wird bei der Fristberechnung nicht mitgezählt. Das Einladungsschreiben gilt dem Mitglied als zugegangen, wenn es an die letzte vom Mitglied dem Verein schriftlich bekanntgegebene oder tatsächliche Adresse oder E-Mail-Adresse gerichtet ist.</li>
                    <li>Die Tagesordnung setzt der Gesamtvorstand fest.</li>
                </ol>

                <h2 className="mt-5 mb-0 text-lg">§14 Beschlussfassung der Mitgliederversammlung</h2>

                <ol className="list-decimal pl-8">
                    <li>Die Mitgliederversammlung wird von der/dem Vorsitzenden oder bei deren/dessen Verhinderung von dem/der stellvertretenden Vorsitzenden geleitet. Ist kein Mitglied des geschäftsführenden Vorstands anwesend, bestimmt die Mitgliederversammlung die/den Leitenden.</li>
                    <li>Der/Die Protokollführende wird von dem/der Versammlungsleitenden bestimmt; zum/zur Protokollführenden kann auch ein Nichtmitglied bestimmt werden.</li>
                    <li>Die Art der Abstimmung bestimmt der/die Versammlungsleitende. Sofern er/sie nichts anderes bestimmt, erfolgt die Abstimmung offen durch Handmeldung. Auf Antrag eines Mitgliedes ist geheim abzustimmen.</li>
                    <li>Die Mitgliederversammlung ist nicht öffentlich. Der/Die Versammlungsleitende kann Gäste zulassen. Über die Zulassung der Presse, des Rundfunks und des Fernsehens sowie einen Internetauftritt beschließt der Gesamtvorstand.</li>
                    <li>Die Mitgliederversammlung ist im Hinblick auf einen konkreten Beschlussgegenstand beschlussfähig, soweit mindestens acht stimmberechtigte Mitglieder zum Zeitpunkt der jeweiligen Beschlussfassung anwesend oder ordnungsgemäß vertreten sind. Besteht für eine einberufene Mitgliederversammlung Beschlussunfähigkeit, ist der Gesamtvorstand berechtigt, eine zweite Versammlung mit der gleichen Tagesordnung einzuberufen, die ohne Rücksicht auf die Zahl der Anwesenden beschlussfähig ist. Darauf muss in der Einladung hingewiesen werden.</li>
                    <li>Die Mitgliederversammlung fasst Beschlüsse im Allgemeinen mit einfacher Mehrheit der abgegebenen gültigen Stimmen; Stimmenthaltungen gelten als nicht abgegebene Stimmen. Beschlüsse über Satzungsänderungen bedürfen zu ihrer Rechtswirksamkeit einer Zweidrittelmehrheit der abgegebenen Stimmen; zur Änderung des Zweckes des Vereins ist eine Dreiviertelmehrheit nötig. Beschlüsse über die Auflösung des Vereins bedürfen der Vierfünftelmehrheit der abgegebenen Stimmen. Die Mitgliederversammlung kann Mitglieder des Gesamtvorstands mit einer Mehrheit von zwei Dritteln der abgegebenen Stimmen abwählen. Ein/e Nachfolger/in muss in derselben Versammlung bestimmt werden.</li>
                    <li>Für Wahlen gilt folgendes: Hat im ersten Wahlgang kein/e Kandidierende/r die Mehrheit der abgegebenen gültigen Stimmen erreicht, findet eine Stichwahl zwischen den Kandidierenden statt, welche die beiden höchsten Stimmenzahlen erreicht haben.</li>
                    <li>Über die Beschlüsse der Mitgliederversammlung ist ein Protokoll anzufertigen, das von der/dem Verhandlungsleitenden, der/dem jeweiligen Protokollführenden und mindestens einem Mitglied des geschäftsführenden Vorstands zu unterzeichnen ist. Es soll folgende Feststellungen enthalten: Ort und Zeit der Versammlung, die Person der/des Versammlungsleitenden und der/des Protokollführenden, die Zahl der abwesenden/erschienenen Mitglieder, die Tagesordnung, die einzelnen Abstimmungsergebnisse und die Art der Abstimmung. Bei Satzungsänderungen soll der genaue Wortlaut angegeben werden.</li>
                </ol>

                <h2 className="mt-5 mb-0 text-lg">§15 Nachträgliche Anträge zur Tagesordnung</h2>

                <ol className="list-decimal pl-8">
                    <li>Jedes Mitglied kann bis spätestens eine Woche vor dem Tag der Mitgliederversammlung beim Gesamtvorstand schriftlich beantragen, dass weitere Angelegenheiten nachträglich auf die Tagesordnung gesetzt werden. Über den Antrag entscheidet der Gesamtvorstand. Der/Die Versammlungsleitende hat zu Beginn der Mitgliederversammlung die Tagesordnung entsprechend zu ergänzen.</li>
                    <li>Über Anträge auf Ergänzung der Tagesordnung, die erst in der Mitgliederversammlung gestellt werden, beschließt die Mitgliederversammlung. Zur Annahme des Antrags ist eine Mehrheit von zwei Dritteln der abgegebenen gültigen Stimmen erforderlich, soweit nicht nach dieser Satzung eine größere Mehrheit erforderlich ist.</li>
                </ol>

                <h2 className="mt-5 mb-0 text-lg">§16 Außerordentliche Mitgliederversammlung</h2>

                <ol className="list-decimal pl-8">
                    <li>Der Gesamtvorstand kann jederzeit eine außerordentliche Mitgliederversammlung einberufen. Diese muss einberufen werden, wenn das Interesse des Vereins es erfordert.</li>
                    <li>Eine außerordentliche Mitgliederversammlung ist ferner auf schriftliches Verlangen von mindestens 20% aller stimmberechtigten Vereinsmitglieder binnen vier Wochen durch den Gesamtvorstand einzuberufen. Der Antrag ist schriftlich unter Angabe des Zwecks und der Gründe beim Gesamtvorstand zu stellen. Für die außerordentliche Mitgliederversammlung gelten die §§ 12, 13, 14 und 15 entsprechend.</li>
                </ol>

                <h2 className="mt-5 mb-0 text-lg">§17 Jugendschutzbeauftragte/r</h2>
                <ol className="list-decimal pl-8">
                    <li>Über die Jahresmitgliederversammlung wird ein/e Jugendschutzbeauftragte/r für die Dauer von einem Jahr gewählt.</li>
                    <li>Der/Die Jugendschutzbeauftragte dient als erste/r Ansprechpartner/in für junge Menschen sowie Eltern und Erziehungsberechtigte bei Fragen zum eigenverantwortlichen Umgang mit dem Medium Videospiele. Er/Sie ist weiterhin für die Altersverifikation der Mitglieder verantwortlich, um den Schutz vor gefährdenden Einflüssen sicherzustellen und wirkt auf die Einhaltung der Jugendschutzgesetze hin. Bei Veranstaltungen des Vereins berät er/sie zur altersgerechten Durchführung der Veranstaltung. Er/Sie ist bei Veranstaltungen und durch den Verein bereitgestellten Angeboten rechtzeitig zu beteiligen und über das jeweilige Angebot vollständig zu informieren. Er/Sie kann dem Verein Beschränkungen oder Änderungen des Angebots vorschlagen.</li>
                </ol>

                <h2 className="mt-5 mb-0 text-lg">§18 Auflösung des Vereins</h2>
                <ol className="list-decimal pl-8">
                    <li>Die Auflösung des Vereins kann nur durch eine zu diesem Zweck mit einer Frist von sechs Wochen einberufenen Mitgliederversammlung und mit der in §14 Abs. 6 Satz 3 dieser Satzung genannten Stimmenmehrheit beschlossen werden.</li>
                    <li>Sofern die Mitgliederversammlung nichts anderes beschließt, erfolgt die Liquidation durch die/den Vorsitzende/n und den/die Schatzmeister/in. Diese Vorschriften gelten entsprechend für den Fall, dass der Verein aus einem anderen Grund aufgelöst wird oder seine Rechtsfähigkeit verliert.</li>
                    <li>Bei Auflösung oder Aufhebung des Vereins oder bei Wegfall steuerbegünstigter Zwecke fällt das Vermögen des Vereins an eine juristische Person des öffentlichen Rechts oder eine andere steuerbegünstigte Körperschaft zwecks Verwendung für die Förderung der Jugendhilfe.</li>
                </ol>

                <h2 className="mt-5 mb-0 text-lg">§19 Haftung</h2>
                <ol className="list-decimal pl-8">
                    <li>Für alle Verbindlichkeiten des Vereins haftet ausschließlich das Vereinsvermögen. Eine persönliche Haftung der Mitglieder für Verbindlichkeiten des Vereins besteht nicht.</li>
                </ol>

                <p className="mt-8">Diese Satzung wurde am 18.04.2021 durch die Mitgliederversammlung beschlossen.</p>
            </div>
        </section>
    );
}
