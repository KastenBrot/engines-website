import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-secondary text-white pt-32 pb-16 px-4 lg:px-16 2xl:px-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r gradient-engines">
            Kontakt
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Engines Stuttgart e.V.</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="font-semibold text-white mb-2">Adresse</h3>
                <p>Engines Stuttgart e.V.</p>
                <p>Auf der Suche nach unserem Sitz?</p>
                <p>Kontaktiere uns per E-Mail oder Discord!</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-2">E-Mail</h3>
                <p>
                  info@engines-stuttgart.de
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-2">Discord</h3>
                <a
                  href="https://discord.gg/engines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Beitreten zum Discord Server
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Schnelle Links</h2>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="/#games" className="hover:underline transition">
                  → Games
                </a>
              </li>
              <li>
                <a href="/verein" className="hover:underline transition">
                  → Verein und Vorstand
                </a>
              </li>
              <li>
                <a href="/mitglied-werden" className="hover:underline transition">
                  → Mitglied werden
                </a>
              </li>
              <li>
                <a href="/legal/imprint" className="hover:underline transition">
                  → Impressum
                </a>
              </li>
              <li>
                <a href="/legal/privacy" className="hover:underline transition">
                  → Datenschutzerklärung
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-secondary rounded-lg p-8 border border-primary/20">
          <h3 className="text-xl font-semibold mb-4">Fragen oder Anregungen?</h3>
          <p className="text-gray-300">
            Wir freuen uns auf deine Nachricht! Schreib uns eine E-Mail oder tritt unserem Discord-Server bei, um mit uns in Kontakt zu treten.
          </p>
        </div>
      </div>
    </div>
  );
}
