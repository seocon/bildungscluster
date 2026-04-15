import React from 'react';
import { motion } from 'motion/react';
import { Globe, CheckCircle2 } from 'lucide-react';

export const Site = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#003d5b] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-4 mb-6"
          >
            <Globe className="w-8 h-8 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Site</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              <a href="https://www.bildungscluster.at/" className="hover:text-secondary transition-colors">
                BildungsCluster – Portal für Studium & Training
              </a>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-600 space-y-8"
          >
            {/* List of links */}
            <ul className="space-y-4 list-none p-0 mb-12">
              {[
                { href: "https://www.absolventen.at/", text: "Jobs für Absolventen KarriereGuides HTL, UNI, FH, HAK mit Karriere News und Tipps aus Österreich" },
                { href: "https://www.absolventen.de/", text: "Jobs für Absolventen mit Karriere News und Tipps aus Deutschland" },
                { href: "https://www.absolventen.de/", text: "Kostenloses Presseportal Österreich für KMU und Start-Ups Innovationsportraits" },
                { href: "https://www.businesscluster.at/startup-angebote", text: "Angebote und Start-up-Deals from Austria" },
                { href: "https://www.bildungscluster.at/", text: "Österreichische Training, Studien, Kurse, Master, Doktorate, MBAs und Weiterbildung finden Sie im BildungsCluster-Österreich" }
              ].map((item, i) => (
                <li key={i} className="flex items-start group">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 shrink-0" />
                  <a 
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-bold hover:text-secondary transition-colors leading-tight"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>

            <div className="space-y-8 leading-relaxed">
              <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">
                <a href="https://www.fernstudium.co.at/" className="hover:text-primary transition-colors">
                  Fernstudium Österreich Bachelor | Master | Doktorat
                </a>
              </h2>

              <p>
                Starten Sie ihr <a href="https://www.mba-fernstudium.at/" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">MBA Fernstudium Österreich</a> bzw. Ihr <a href="https://www.mba-fernstudium.xn--at-x2t/" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">MBA Studium</a>, es gibt Studiengänge als <a href="https://www.mba-fernstudium.at/ingenieur-mba-fernstudium-diplom-ingenieure-techniker/" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">MBA für Ingenieure und Techniker</a> oder ideal ist das Studium auch als Weiterbildung zum <a href="https://www.mba-fernstudium.at/offizier-mba-fernstudium-offiziere-angestellte-militaer-heer/" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">MBA für Offiziere und Heerespersonal</a>.
              </p>

              <p>
                Das Studium und der Erwerb des Titels <a href="https://www.mba-fernstudium.at/mba-ohne-matura/" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">MBA ohne Matura bzw. Abitur</a> ist möglich. Ihre Weiterbildung zum <a href="https://www.mba-fernstudium.at/mba-titel/" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">MBA Titel</a>. Der Weg zum <a href="https://www.mba-fernstudium.at/mba-ohne-studium-hochschulabschluss/" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">MBA ohne Studium bzw. Studienabschluss</a>.
              </p>

              <p>
                Die Studiengänge können berufsbegleitend als <a href="https://www.mba-fernstudium.at/mba-berufsbegleitend/" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">Fern-MBA</a> oder <a href="http://www.fern-bachelor.at/" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">Fern Bachelor</a> absolviert werden.
              </p>

              <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight pt-8">MBA Studium</h3>

              <p>
                Die <a href="https://www.fernstudium.co.at/master-of-business-administration/" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">MBA-Ausbildung</a> ist von überall aus möglich, sowohl als <a href="http://bildung-fernstudium.ch/" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">MBA Fernstudium Ausbildung Schweiz</a> oder als <a href="http://bildung-fernstudium.de/" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">Master of Business Administration Fernstudium Ausbildung Deutschland</a>. Die Studiengänge der <a href="https://www.fernstudium.co.at/kmuakademie/" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">KMU AKADEMIE</a> bzw. <a href="https://www.fernstudium.co.at/middlesex-university" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">Middlesex University</a> sind sowohl als <a href="http://www.fernstudium-bachelor.at/" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">Fernstudium zum Bachelor</a> als auch zum Beispiel als Makler als Weiterbildung zum <a href="https://fernstudium.co.at/master-of-business-administration/mba-immobilienmanagement/" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">MBA Immobilienwirtschaft, Immobilienmanager Ausbildung</a>, sowie in Sachen Touristik als <a href="https://fernstudium.co.at/master-of-business-administration/mba-tourismusmanagement/" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">MBA Tourismusmanagement, Tourismuswirtschaft Ausbildung</a> möglich.
              </p>

              <p>
                Das Studium zum Titel BSc ist ebenfalls berufsbegleitend und ortsunabhängig als <a href="http://www.bildung-fernstudium.de/bachelor/" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">Bachelor Fernstudium Deutschland</a> und <a href="http://www.bildung-fernstudium.ch/bachelor/" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">Bachelor Fernstudium Schweiz</a> zu absolvieren.
              </p>

              <p>
                Ein anerkannter, an einer renommierten Universität <a href="http://www.mba-fernstudium.at/middlesex-university" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">internationaler MBA per Fernstudium</a> fördert Ihre Karrierechancen. Das <a href="http://www.mba-fernstudium.at/" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">MBA Studium per E-Learning</a> ist ein <a href="http://www.fernstudium.co.at/middlesex-university" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">MBA aus England der Middlesex University London</a>.
              </p>

              <p>
                Treffen Sie die richtige Wahl: <a href="https://www.fernstudium.co.at/" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">Fernstudium Österreich – Fernstudien bzw. Fernstudienprogramme Austria</a> sowie <a href="http://bildung-fernstudium.de/" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">Fernstudium Deutschland – Fernstudien bzw. Fernstudienprogramme Deutschland</a> und <a href="http://bildung-fernstudium.ch/" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">Fernstudium Schweiz – Fernstudien bzw. Fernstudienprogramme Schweiz</a> sind der Garant für Ihren beruflichen Erfolg.
              </p>

              <h4 className="text-xl font-black text-gray-900 uppercase tracking-tight pt-8">
                <a href="https://www.mba-fernstudium.at/mba-studiengaenge-oesterreich" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">
                  MBA Studiengänge Österreich
                </a>
              </h4>

              <p>
                Wählen sie aus unseren Studiengängen: <a href="http://www.mba-fernstudium.at/mba-studiengaenge-oesterreich" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">MBA Studiengänge, MBA Studiengänge Österreich</a> oder zum Titel Dr. oder DBA in Österreich mit dem <a href="http://www.doktoratsstudium.at/" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">Doktoratsstudium – Fernstudium Doktorat</a> oder auch <a href="http://www.bildung-fernstudium.de/doktorat" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">Fernstudium Doktorat (Dr.) Deutschland</a>.
              </p>

              <p>
                Sie haben Interessen an einem Studium bzw. einer Ausbildung während Ihrer <a href="http://www.bildungskarenz.at/" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">Bildungskarenz</a> oder auch <a href="http://www.bildungskarenz.at/" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">Bildungsteilzeit</a>?
              </p>

              <p>
                Absolvieren Sie den MBA deutschsprachig bei uns oder in Englisch an der GHU: <a href="http://www.distance-study.com/" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">Distance Learning MBA, study online part time</a>
              </p>

              <h4 className="text-xl font-black text-gray-900 uppercase tracking-tight pt-8">
                <a href="https://www.bildungscluster.at/fakultaeten-institute/" target="_blank" rel="external noopener" className="text-primary font-bold hover:underline">
                  Fakultäten & Institute
                </a>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { name: "Donau Universität Krems", href: "https://www.bildungscluster.at/donau-universitaet-krems/" },
                  { name: "JKU Linz", href: "https://www.bildungscluster.at/jku-linz/" },
                  { name: "Universität Salzburg", href: "https://www.bildungscluster.at/universitaet-salzburg/" },
                  { name: "Universität Graz", href: "https://www.bildungscluster.at/universitaet-graz/" },
                  { name: "Universität Innsbruck", href: "https://www.bildungscluster.at/universitaet-innsbruck/" },
                  { name: "Universität Klagenfurt", href: "https://www.bildungscluster.at/universitaet-klagenfurt/" },
                  { name: "WU Wien", href: "https://www.bildungscluster.at/wu-wien/" },
                  { name: "Universität Wien", href: "https://www.bildungscluster.at/universitaet-wien/" },
                  { name: "TU Wien", href: "https://www.bildungscluster.at/tu-wien/" },
                  { name: "TU Graz", href: "https://www.bildungscluster.at/tu-graz/" },
                  { name: "Montanuniversität Leoben", href: "https://www.bildungscluster.at/montanuniversitaet-leoben/" },
                  { name: "BOKU Wien", href: "https://www.bildungscluster.at/boku-wien/" },
                  { name: "Vetmeduni Wien", href: "https://www.bildungscluster.at/vetmeduni-wien/" }
                ].map((uni, i) => (
                  <a 
                    key={i} 
                    href={uni.href} 
                    target="_blank" 
                    rel="external noopener" 
                    className="text-gray-600 hover:text-primary transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3 shrink-0" />
                    {uni.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
