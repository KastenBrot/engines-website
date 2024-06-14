export default async function BecomeMemeber({ params }: { params: { page: string } }) {
    const gridCols = "grid grid-cols-3 flex justify-items-center";

    return (
        <section className="flex flex-col">
            <div className="flex justify-center h-1/3">
                <h1 className="absolute text-6xl mt-32 text-transparent bg-clip-text bg-gradient-to-r gradient-engines">Mitglied werden</h1>
            </div>
            
            <div className="flex flex-col gap-4 p-8 mt-48 mb-12 mx-auto w-1/2 bg-white rounded text-primary">
                <div className="text-center">
                    <h1 className="text-2xl">Du möchtest Teil der ENGINES-Familie werden?</h1>
                    <p>…dann würden wir uns sehr freuen, dich als Mitglied bei uns begrüßen zu dürfen! Wir zeigen dir hier, was eine aktive und passive Mitgliedschaft bei uns bedeutet.</p>
                    <p>Möchtest du einen direkten Einfluss auf die Ausrichtung und Entwicklung des Vereins haben, sowie von Rabatten auf Merchandise, Events und Ausflüge profitieren? Dann kommt für dich die aktive Mitgliedschaft in Frage.</p>
                    <p>Wenn du lediglich daran interessiert bist, mit uns auf Events und Ausflüge zu gehen, in einem unserer Teams zu spielen oder für uns zu streamen, dann raten wir dir zu einer passiven Mitgliedschaft.</p>
                    <p>Bei Fragen zur Mitgliedschaft kannst du uns jederzeit unter <a className="text-primaryGreen" href="mailto:info@engines-stuttgart.de">info@engines-stuttgart.de</a> kontaktieren!</p>
                </div>

                <div>
                    <div className="grid grid-row gap-5">
                        <div className={gridCols}>
                            <div className="uppercase text-2xl w-full my-auto"><h1>deine vorteile</h1></div>
                            <div className="flex flex-col bg-primaryGradient p-3 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#282a2e" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 self-center">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                                <span className="text-xl font-bold">Aktives Mitglied</span>
                            </div>
                            <div className="flex flex-col">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 self-center">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                    <span className="text-xl font-bold">Passives Mitglied</span>
                            </div>
                        </div>

                        <div className={gridCols}>
                            <div className="w-full"><p className="font-bold">Teilnahme an Events und Ausflügen</p></div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" className="size-12 text-primaryGreen">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" className="size-12 text-primaryGreen">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            </div>
                        </div>

                        <div className={gridCols}>
                            <div className="w-full"><p className="font-bold">Teilnahme an einem Team bei den Engines Stuttgart</p></div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" className="size-12 text-primaryGreen">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" className="size-12 text-primaryGreen">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            </div>
                        </div>

                        <div className={gridCols}>
                            <div className="w-full"><p className="font-bold">Die Option für die Engines Stuttgart zu streamen</p></div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" className="size-12 text-primaryGreen">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" className="size-12 text-primaryGreen">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            </div>
                        </div>

                        <div className={gridCols}>
                            <div className="w-full"><p className="font-bold">Stimmrecht</p></div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" className="size-12 text-primaryGreen">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" className="size-12 text-lightergray">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>

                        <div className={gridCols}>
                            <div className="w-full"><p className="font-bold">Rabatte auf Merch</p></div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" className="size-12 text-primaryGreen">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" className="size-12 text-lightergray">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>

                        <div className={gridCols}>
                            <div className="w-full"><p className="font-bold">Rabatte auf Events, Ausflüge und Bootcamps</p></div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" className="size-12 text-primaryGreen">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" className="size-12 text-lightergray">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>

                        <div className={gridCols}>
                            <div className="w-full"><p className="font-bold">Mitgliedsbeitrag</p></div>
                            <div className="text-center">
                                <p>Für Kinder, Jugendliche, Auszubildende, Schüler*innen und Studierende jeglichen Alters: <span className="text-primaryGreen">3,00€/Monat</span></p>
                                <p>Für Erwachsene ab dem vollendeten 18. Lebensjahr: <span className="text-primaryGreen">6,00€/Monat</span></p>
                            </div>
                            <div>
                                <p>Kostenlos</p>
                            </div>
                        </div>

                        <div className={gridCols}>
                            <div></div>
                            <div className="text-center">
                                <a href="https://engines.webling.eu/forms/memberform/80791f7fef3ead3c4aa4" target="_blank" className="btn-primary uppercase front-thin">Aktives Mitglied werden</a>
                            </div>
                            <div>
                                <a href="https://engines.webling.eu/forms/memberform/40b5ca27b45d9eb907b7" target="_blank" className="btn-secondary uppercase font-thin">Passives Mitglied werden</a>
                            </div>
                        </div>

                        <div className={gridCols}>
                            <div className="grid col-start-1 col-span-3 mt-10">
                                <p className="text-sm font-thin">Wir leiten dich zum Anmeldeformular in unserem Mitgliedsverwaltungstool Webling weiter.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
