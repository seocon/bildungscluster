import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export const Privacy = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            <ShieldCheck className="w-8 h-8 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Datenschutz</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed"
          >
            Datenschutzerklärung
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1 space-y-4 sticky top-32 h-fit hidden lg:block">
              {[
                '1. Allgemeines',
                '2. Datenquellen',
                '3. Aktualisierung',
                '4. Zwecke der Datenverarbeitung',
                '5. Technisch notwendige Daten',
                '6. Weitergabe der Daten',
                '7. Speicherung',
                '8. Newsletter',
                '9. Widerruf und Auskunft',
                '10. Cookies',
                '11. Tools',
                '12. Haftungsausschluss',
                '13. Links',
                '14. Meldung von Verstößen'
              ].map((item, i) => (
                <a 
                  key={i}
                  href={`#section-${i + 1}`}
                  className="block px-6 py-3 rounded-xl text-gray-600 hover:bg-gray-100 hover:text-primary font-bold transition-all"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Content Area */}
            <div className="lg:col-span-2 space-y-20">
              <section id="section-1" className="space-y-6">
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">1. Allgemeines zur Datenschutzerklärung:</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Verantwortlich für die Verarbeitung Ihrer personenbezogenen Daten im Zusammenhang mit dieser Webseite sind wir, die Business Cluster Network GmbH, Hafenstraße 47-51 (techcEnter Linz Winterhafen), <a href="mailto:office@businesscluster.at" className="text-primary hover:underline">office@businesscluster.at</a>.
                  </p>
                  <p>
                    Wir schützen Ihre personenbezogenen Daten durch angemessene technische und organisatorische Maßnahmen. Bei Kommunikation mittels Email können wir die Datensicherheit für den Übermittlungsvorgang aber nicht gewährleisten.
                  </p>
                </div>
              </section>

              <section id="section-2" className="space-y-6">
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">2. Datenquellen:</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Die von uns, der Business Cluster Network GmbH ermittelten, verarbeiteten oder eingestellten Daten wurden uns durch die Kunden oder sonstigen Nutzer zur Verfügung gestellt oder wurden durch unsere Mitarbeiter von den Homepages der Unternehmen, auf denen diese die Daten öffentlich bekannt gemacht haben, selbst recherchiert.
                  </p>
                  <p>
                    Die Daten wurden nicht aus Telefonverzeichnissen, anderen Firmenverzeichnissen oder dergleichen gewonnen.
                  </p>
                  <p>
                    Die nicht von uns eingestellten Daten stammen aus selbständigen Eintragungen unserer Kunden.
                  </p>
                </div>
              </section>

              <section id="section-3" className="space-y-6">
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">3. Aktualisierung:</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Wir überprüfen und aktualisieren regelmäßig die von uns eingestellten Daten der Unternehmen. Eine Haftung oder Garantie für Aktualität, Korrektheit oder Vollständigkeit der Daten und/oder Informationen wird nicht übernommen.
                  </p>
                </div>
              </section>

              <section id="section-4" className="space-y-6">
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">4. Zwecke der Datenverarbeitung:</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Durch die Registrierung bei uns, durch die Verwaltung Ihres Profils auf unserer Website, durch das öffentliche Posten von Informationen, durch das Ausfüllen von Kontaktformularen auf unseren Websites und Senden dieser Daten des Kontaktformulars an uns oder durch das Opt-In beim Treffen von Auswahlen haben Sie zugestimmt, dass wir Ihre Daten auf folgende Arten nutzen können:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Vermittlung von Kontaktdaten zwischen potentiellen Arbeitgebern und Personen, die Stellen suchen;</li>
                    <li>Vermittlung von Kontaktdaten zwischen Interessenten an Fort- und Weiterbildung und Bildungseinrichtungen (Universitäten, Fachhochschulen, etc.)</li>
                    <li>für Unternehmen zum Erstellen eines Profils, zum Hinzufügen von Daten zum bereits erstellten Profil und Bereitstellen von Präsentationsmöglichkeiten (Portraits);</li>
                    <li>Bereitstellung von Informationen, Karrierechancen, Bewerbungstipps und dergleichen an stellensuchende Personen;</li>
                    <li>Speicherung des Lebenslaufes von stellensuchende Personen;</li>
                    <li>Übermittlung des Lebenslaufes von stellensuchenden Personen an potentielle Arbeitgeber;</li>
                    <li>Bereitstellung von Werbemöglichkeiten für Unternehmen;</li>
                    <li>Bereitstellung eines Presseportals für Unternehmen;</li>
                    <li>Vermittlung von Kontaktdaten zwischen potentiellen Investoren und Startup-Unternehmen;</li>
                    <li>für Reichweitenmessung und Marketing-Zwecke;</li>
                    <li>zur Beantwortung von Anfragen und Kommunikation mit Kunden und sonstigen Nutzern sowie zum Kundenservice;</li>
                    <li>um Suchmaschinen Zugriffe auf öffentliche Daten zu bieten;</li>
                    <li>Sicherheitsmaßnahmen</li>
                    <li>Auftragsabwicklung.</li>
                  </ul>
                  <p>
                    Einige unserer Produkte und Dienstleistungen ermöglichen es dritten Personen, personenbezogene Daten von Ihnen zu sehen und Sie zu kontaktieren. Die von Ihnen in den öffentlichen Bereichen von unserer Website angegebenen Daten können von dritten Personen überall aufgerufen, verarbeitet und gespeichert werden. <strong>Bitte veröffentlichen Sie keine sensiblen Daten oder andere Daten, von denen Sie nicht möchten, dass diese öffentliche zugänglich sind, auf unserer Website oder auf öffentlichen Websites!</strong> Auch wenn wir Maßnahmen zur Sicherung Ihrer Daten gegen unberechtigten Zugriff und unangemessene Nutzung treffen, haben wir keine Kontrolle über diese dritten Personen und wir haften nicht für deren Nutzung der Daten, die Sie uns übergeben haben.
                  </p>
                  <p>
                    Zu den genannten Zwecken verarbeiten wir und unsere Dienstleister Ihre Daten auf Grundlage von Artikel 6 (1) (a), (b), (c) und (f) der Europäischen Datenschutz-Grundverordnung.
                  </p>
                </div>
              </section>

              <section id="section-5" className="space-y-6">
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">5. Technisch notwendige Daten/Logdaten:</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Die Nutzungsdaten, die bei jedem Zugriff auf das Netzwerk in einer Protokolldatei, dem Server-Log, gespeichert werden, sind folgende:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>die IP Adresse des zugreifenden Rechners</li>
                    <li>die Produkt- und Versionsinformationen des verwendeten Browsers (User-Agent)</li>
                    <li>die Uhrzeit, der Status, die übertragene Datenmenge sowie die Internetseite, von der der Nutzer auf die angeforderte Seite gekommen ist,</li>
                    <li>der Name der aufgerufenen Datei bzw. Seite mit Referrer</li>
                    <li>das verwendete Betriebssystem</li>
                  </ul>
                  <p>
                    Die Protokolldateien werden unter anderem für statistische Auswertungen verwendet sowie dazu, um mögliche Fehler, wie z.B. fehlerhafte Links oder Programmfehler, zu erkennen. Unter anderem wird von uns untersucht, woher die Besucher kommen, welche Bereiche des Netzwerks aufgesucht werden und wie oft welche Seiten gesehen werden. Bei einer solchen Analyse können unter anderem auch Cookies und/oder Java Script eingesetzt werden.
                  </p>
                  <p>
                    Die in Logdateien gespeicherten Daten werden in regelmäßigen Abständen, spätestens jedoch nach sechs Monaten gelöscht. Sie haben bei diesen Daten keine Widerrufsmöglichkeit, da diese für den Betrieb der Websites zwingend erforderlich sind.
                  </p>
                  <p>
                    Diese Daten sind für uns nicht bestimmten Personen zuordenbar bzw. werden im Fall der IP-Adresse (diese ist theoretisch nach bestehender Judikatur einer bestimmten Person zuordenbar und wird daher als personenbezogenes Datum eingestuft) nicht zugeordnet. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Eine diesbezügliche Verarbeitung erfolgt gemäß Art 6 Abs 1 lit f DSGVO. Eine darüber hinausgehende Verwendung findet nicht statt. Wir behalten uns allerdings vor, die Server-Logfiles nachträglich zu überprüfen, sollten konkrete Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.
                  </p>
                </div>
              </section>

              <section id="section-6" className="space-y-6">
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">6. Weitergabe der Daten:</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    a) Wir geben Ihre Daten an unsere Auftragsverarbeiter weiter, das sind vor allem Unternehmen, die in unserem Auftrag Dienste bereitstellen, wie zum Beispiel das Hosten unserer Webserver, die Zurverfügungstellung von Kundenservice, Assistenz bei Marketingleistungen, Analyse von Daten oder die Abwicklung von Kreditkartenzahlungen. Die Auftragsverarbeiter haben lediglich Zugang zu Ihren personenbezogenen Daten, welche für die Durchführung ihrer Funktionen erforderlich sind, und dürfen diese nicht für andere Zwecke verwenden. Wir bleiben weiterhin verantwortlich für alle Daten, die auf diese Weise weitergegeben werden.
                  </p>
                  <p>
                    b) Wir geben Ihre Daten im Fall des Bestehens einer gesetzlichen Verpflichtung dazu weiter.
                  </p>
                  <p>
                    c) Wir können Ihre personenbezogenen Daten Dritten offenlegen und an diese Dritte weiterleiten, wenn sie einen Teil oder das gesamte Geschäftsvermögen der Business Cluster Network GmbH übernehmen.
                  </p>
                  <p>
                    d) Wir geben Ihre Daten weiter, falls dies zur Verfolgung unserer rechtlichen Interessen notwendig wird.
                  </p>
                  <p>
                    e) Wir geben Ihre Daten weiter, falls dies notwendig wird, um die öffentliche Sicherheit oder die persönliche Sicherheit von Personen zu schützen.
                  </p>
                  <p>
                    f) Wir können Ihre Daten offenlegen, die wir von anderen öffentlichen Websites erhoben haben.
                  </p>
                  <p>
                    g) Wir können Ihre Daten offenlegen und weitergeben, falls dies zur Erfüllung einer der in Punkt 4. dieser Datenschutzerklärung genannten Zwecke erforderlich ist und dies keiner gesonderten Zustimmung bedarf. Insbesondere geben wir ihre Daten weiter, wenn der Zweck der Datenverarbeitung die Übermittlung von Kontaktdaten ist und Stellensuchende, Interessenten an Fort- und Weiterbildung, Startup-Unternehmen, etc. zu diesem Zweck ihre Daten an uns übermitteln (z.B. durch Ausfüllen eines Kontaktformulars auf einer unserer Websites und Senden der im Kontaktformular ausgefüllten Daten an uns).
                  </p>
                  <p>
                    h) Wir können Daten an Dritte weiterleiten, wenn Sie dem ausdrücklich oder schlüssig (insoweit dies nach den geltenden Datenschutzbestimmungen zulässig ist) zustimmen.
                  </p>
                  <p>
                    Wir geben Kontaktinformationen nicht zu direkten Werbezwecken an Dritte weiter, außer Sie stimmen dem ausdrücklich zu.
                  </p>
                </div>
              </section>

              <section id="section-7" className="space-y-6">
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">7. Speicherung:</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Ihre Daten werden solange gespeichert, als dies für die jeweiligen Verarbeitungszwecke erforderlich ist. Wenn die Daten ausschließlich zu Aufbewahrungszwecken gespeichert werden, wird der Zugriff auf die Daten entsprechend eingeschränkt. Die rein zu Werbezwecken und/oder Marketingzwecken gespeicherten Daten werden solange gespeichert, als die Einwilligung dazu von Ihnen nicht widerrufen wird.
                  </p>
                  <p>
                    Die Personen und Unternehmen, an die die Daten weitergegeben wurden (z.B. Arbeitgeber, Bildungseinrichtungen, potentielle Investoren) speichern Ihre Daten solange, als die Einwilligung dazu von Ihnen nicht widerrufen wird, außer diese Personen und Unternehmen benötigen die Daten zur Vertragserfüllung oder es besteht schon eine gesonderte Vereinbarung diesbezüglich zwischen Ihnen und der Person bzw. dem Unternehmen, dem die Daten weitergegeben wurden.
                  </p>
                </div>
              </section>

              <section id="section-8" className="space-y-6">
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">8. Newsletter:</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    a) Wir versenden Newsletter, E-Mails und weitere elektronische Benachrichtigungen mit werblichen Informationen (nachfolgend „Newsletter“) nur mit der Einwilligung der Empfänger oder einer gesetzlichen Erlaubnis.
                  </p>
                  <p>
                    b) Die Anmeldung zu unserem Newsletter erfolgt gesondert, ohne an die Zustimmung zu unseren AGBs oder unserer Datenschutzerklärung gekoppelt zu sein. Die Anmeldungen zum Newsletter werden protokolliert, um den Anmeldeprozess entsprechend den rechtlichen Anforderungen nachweisen zu können. Hierzu gehört die Speicherung des Anmelde- und des Bestätigungszeitpunkts, als auch der IP-Adresse. Ebenso werden die Änderungen Ihrer bei dem Versanddienstleister gespeicherten Daten protokolliert.
                  </p>
                  <p>
                    c) Versanddienstleister: Der Versand der Newsletter erfolgt mittels dem Unternehmen Indoblo Commerce Limited, Zweigniederlassung Deutschland, Am Heidberg 1, D-24226 Heikendorf (<a href="https://www.flatrate-newsletter.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https:www.flatrate-newsletter.de</a>), nachfolgend bezeichnet als „Versanddienstleister“. Die Datenschutzbestimmungen des Versanddienstleisters können Sie hier einsehen: <a href="https://www.flatrate-newsletter.de/datenschutzrichtlinie" target="_blank" rel="external noopener" className="text-primary hover:underline">https://www.flatrate-newsletter.de/datenschutzrichtlinie</a>.
                  </p>
                  <p>
                    d) Des Weiteren kann der Versanddienstleister nach eigenen Informationen diese Daten in pseudonymer Form, d.h. ohne Zuordnung zu einem Nutzer, zur Optimierung oder Verbesserung der eigenen Services nutzen, z.B. zur technischen Optimierung des Versandes und der Darstellung der Newsletter oder für statistische Zwecke, um zu bestimmen aus welchen Ländern die Empfänger kommen, verwenden. Der Versanddienstleister nutzt die Daten unserer Newsletterempfänger jedoch nicht, um diese selbst anzuschreiben oder an Dritte weiterzugeben.
                  </p>
                  <p>
                    e) Der Einsatz des Versanddienstleisters sowie die Protokollierung des Anmeldeverfahrens erfolgen auf Grundlage unserer berechtigten Interessen gem. Art. 6 Abs. 1 lit. f DSGVO. Unser Interesse richtet sich auf den Einsatz eines nutzerfreundlichen sowie sicheren Newslettersystems, das sowohl unseren geschäftlichen Interessen dient, als auch den Erwartungen der Nutzer entspricht.
                  </p>
                  <p>
                    f) Kündigung/Widerruf: Sie können den Empfang unseres Newsletters jederzeit kündigen, d.h. Ihre Einwilligungen widerrufen. Damit erlöschen gleichzeitig Ihre Einwilligungen in dessen Versand durch den Versanddienstleister. Einen Link zur Kündigung des Newsletters finden Sie am Ende eines jeden Newsletters. Wenn die Nutzer sich nur zum Newsletter angemeldet und diese Anmeldung gekündigt haben, werden ihre personenbezogenen Daten gelöscht.
                  </p>
                </div>
              </section>

              <section id="section-9" className="space-y-6">
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">9. Widerruf und Auskunftserteilung:</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    a) Bezüglich Kündigung/Widerruf des Newsletters siehe Punkt 8.f) dieser Datenschutzerklärung.
                  </p>
                  <p>
                    b) Sie können Ihre Zustimmung zu dieser Datenschutzerklärung und zur Verwendung und Weitergabe Ihrer personenbezogenen Daten jederzeit unter <a href="mailto:office@businesscluster.at" className="text-primary hover:underline">office@businesscluster.at</a> oder auf jede andere Art und Weise ohne Einhaltung einer bestimmten Form oder Frist mit Wirkung für die Zukunft widerrufen. In diesem Fall werden die von Ihnen bekannt gegebenen personenbezogenen Daten, insofern diese Daten nicht zur Erfüllung eines Vertrages erforderlich sind, gelöscht.
                  </p>
                  <p>
                    c) Sie haben jederzeit ein Recht auf unentgeltliche Auskunft über Ihre bei uns gespeicherten Daten. Ihre Rechte auf Berichtigung, Löschung, Einschränkung, Widerspruch, Datenübertragbarkeit werden von uns im gesetzlichen Umfang eingehalten.
                  </p>
                </div>
              </section>

              <section id="section-10" className="space-y-6">
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">10. Cookies:</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Wir verwenden auf unserer Website so genannte Cookies. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an. Durch den Einsatz von Cookies ist es zum Beispiel möglich, dass beim nächsten Besuch des Rechners manche persönliche Voreinstellungen vorgefunden werden, die nicht wieder eingegeben werden müssen.
                  </p>
                  <p>
                    Wenn Sie dies nicht wünschen, so können Sie ihren Browser so einrichten, dass er Sie über das Setzen von Cookies informiert und Sie dies nur im Einzelfall erlauben.
                  </p>
                  <p>
                    Bei der Deaktivierung von Cookies kann die Funktionalität unserer Website eingeschränkt sein.
                  </p>
                  <p>
                    Klicken Sie hier, um Ihre Cookie-Einstellungen zu bearbeiten:
                  </p>
                  <button 
                    onClick={scrollToTop}
                    className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-secondary transition-all"
                  >
                    Hier klicken
                  </button>
                </div>
              </section>

              <section id="section-11" className="space-y-6">
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">11. Tools:</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Diese Webseite nutzt verschiedene Tools, um Verknüpfungen zu sozialen Netzwerken zu ermöglichen und den Kontakt zu den Nutzern durch Tracking, Retargeting und Analytics zu verbessern. Nachfolgend informieren wir über die Funktionsweise dieser Tools.
                  </p>
                  
                  <div className="space-y-12 mt-8">
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                      <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tight">a) Google Analytics:</h3>
                      <p className="mb-4">
                        Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. („Google“). Google Analytics verwendet Cookies. Die durch die Cookies erzeugten Informationen über ihre Benutzung dieser Websites (einschließlich Ihrer IP-Adresse) werden an einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundenen Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrage von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten von Google in Verbindung bringen. Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; der Nutzer kann in diesem Fall aber gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen.
                      </p>
                      <p className="mb-4">
                        Weiterhin können Sie durch ein Browser-Plugin verhindern, dass die durch Cookies gesammelten Informationen (inklusive Ihrer IP-Adresse) an die Google Inc. gesendet und von der Google Inc. genutzt werden. Folgender Link führt Sie zu dem entsprechenden Plugin: <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener external" className="text-primary hover:underline">https://tools.google.com/dlpage/gaoptout?hl=de</a><br />
                        Hier finden Sie weitere Informationen zur Datennutzung durch die Google Inc.: <a href="https://support.google.com/analytics/answer/6004245?hl=de" target="_blank" rel="noopener external" className="text-primary hover:underline">https://support.google.com/analytics/answer/6004245?hl=de</a>
                      </p>
                      <p className="mb-4">Klicken Sie hier, um Ihre Cookie-Einstellungen zu bearbeiten:</p>
                      <button 
                        onClick={scrollToTop}
                        className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-secondary transition-all"
                      >
                        Hier klicken
                      </button>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                      <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tight">b) Facebook:</h3>
                      <p className="mb-4">
                        Auf unseren Seiten sind Plugins des sozialen Netzwerks Facebook, Anbieter Facebook Inc., 1 Hacker Way, Menlo Park, California 94025, USA, integriert. Die Facebook-Plugins erkennen Sie an dem Facebook-Logo oder dem „Like-Button“ („Gefällt mir“) auf unserer Seite. Eine Übersicht über die Facebook-Plugins finden Sie hier: <a href="http://developers.facebook.com/docs/plugins/" target="_blank" rel="noopener external" className="text-primary hover:underline">developers.facebook.com/docs/plugins/</a>.
                      </p>
                      <p className="mb-4">
                        Wenn Sie unsere Seiten besuchen, wird über das Plugin eine direkte Verbindung zwischen Ihrem Browser und dem Facebook-Server hergestellt. Facebook erhält dadurch die Information, dass Sie mit Ihrer IP-Adresse unsere Seite besucht haben. Wenn Sie den Facebook „Like-Button“ anklicken während Sie in Ihrem Facebook-Account eingeloggt sind, können Sie die Inhalte unserer Seiten auf Ihrem Facebook-Profil verlinken. Dadurch kann Facebook den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen.
                      </p>
                      <p className="mb-4">
                        Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Facebook erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Facebook unter <a href="http://de-de.facebook.com/policy.php" target="_blank" rel="noopener external" className="text-primary hover:underline">de-de.facebook.com/policy.php</a>.
                      </p>
                      <p className="mb-4">
                        Wenn Sie nicht wünschen, dass Facebook den Besuch unserer Seiten Ihrem Facebook- Nutzerkonto zuordnen kann, loggen Sie sich bitte aus Ihrem Facebook-Benutzerkonto aus.
                      </p>
                      <p className="mb-4">Klicken Sie hier, um Ihre Cookie-Einstellungen zu bearbeiten:</p>
                      <button 
                        onClick={scrollToTop}
                        className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-secondary transition-all"
                      >
                        Hier klicken
                      </button>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                      <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tight">c) Google+ :</h3>
                      <p>
                        Unsere Webseite verwendet die „+1“-Schaltfläche des sozialen Netzwerks Google+, welches von der Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA betrieben wird. Beim Aufruf unserer Webseite werden bestimmte Daten an Google übermittelt. Hierzu gehört auch die IP-Adresse und ggf. von Google gespeicherte Cookies. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Webseite (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in den USA übertragen und dort gespeichert. Wenn Sie als Nutzer bei Google angemeldet sind, werden die Daten mit Ihren Google Daten verknüpft. Andernfalls werden sie in der Regel nach zwei Wochen gelöscht. Da die Daten direkt an Google übermittelt werden, haben wir keinen Einfluss auf die Datenerhebung und die weitere Verwendung. Wenn Sie nicht möchten, dass die Daten ihrem Google Profil zugeordnet werden, sollten sie sich vor dem Besuch der Webseite von Google ausloggen. Informationen über die Verwendung Ihrer Daten durch Google erhalten Sie unter: <a href="http://www.google.com/intl/de/+/policy/+1button.html" target="_blank" rel="noopener external" className="text-primary hover:underline">google.com/intl/de/+/policy/+1button.html</a>.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                      <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tight">d) YouTube:</h3>
                      <p>
                        Wir verwenden Plugins von YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA. Die Plugins stellen eine direkte Verbindung zum Server von YouTube her. Wenn Sie als Nutzer bei Youtube angemeldet sind, werden die Daten mit Ihren YouTube Daten verknüpft. Da die Daten direkt an YouTube übermittelt werden, haben wir keinen Einfluss auf die Datenerhebung und die weitere Verwendung. Wenn Sie nicht möchten, dass die Daten Ihren YouTube Daten zugeordnet werden, sollten sie sich vor dem Besuch der Webseite bei YouTube ausloggen. Informationen über die Verwendung Ihrer Daten durch YouTube erhalten Sie unter: <a href="http://www.google.de/intl/de/policies/privacy" target="_blank" rel="noopener external" className="text-primary hover:underline">google.de/intl/de/policies/privacy</a>.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                      <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tight">e) Tracking- und Retargeting:</h3>
                      <p className="mb-4">
                        Wir verwenden Tools unserer Marketingpartner (derzeit Google Inc., Facebook Inc.), um Sie gezielt mit interessenbezogener Werbung (in Form des Schaltens von Anzeigen auf Webseiten im Internet) ansprechen zu können. Außerdem helfen uns die Tools, unsere Online-Marketing-Maßnahmen besser zu koordinieren. Sowohl das Tracking als auch die Einblendung der Werbemittel beim Retargeting erfolgt auf der Basis einer Cookie-basierten Analyse des Nutzerverhaltens. Bei den hierfür platzierten Cookies handelt es sich jeweils um anonyme, zufallsbasierte Kennungen, die zu keinem Zeitpunkt den Rückschluss auf personenbezogene Daten wie Ihren Namen oder Ihre Anschrift ermöglichen. Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern (siehe Ziffer 7). Weitere Informationen zur Verwendung der Daten durch unsere Marketingpartner erhalten Sie unter:
                      </p>
                      <p className="mb-4">
                        Google: <a href="http://www.google.com/policies/technologies/ads/" target="_blank" rel="noopener external" className="text-primary hover:underline">www.google.com/policies/technologies/ads/</a> (siehe dort unter „Anzeigeneinstellungen“)<br />
                        Facebook: <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener external" className="text-primary hover:underline">https://www.facebook.com/policy.php</a>
                      </p>
                      <p className="mb-4">Klicken Sie hier, um Ihre Cookie-Einstellungen zu bearbeiten:</p>
                      <button 
                        onClick={scrollToTop}
                        className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-secondary transition-all"
                      >
                        Hier klicken
                      </button>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                      <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tight">f) Twitter:</h3>
                      <p className="mb-4">
                        Auf unserer Website sind Funktionen des Dienstes Twitter eingebunden. Diese Funktionen werden angeboten durch die Twitter Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA. Durch das Benutzen von Twitter und der Funktion „Re-Tweet“ werden die von Ihnen besuchten Webseiten mit Ihrem Twitter-Account verknüpft und anderen Nutzern bekannt gegeben. Dabei werden auch Daten an Twitter übertragen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Twitter erhalten. Weiter Informationen hierzu finden Sie in der Datenschutzerklärung von Twitter unter <a href="https://twitter.com/de/privacy" target="_blank" rel="noopener external" className="text-primary hover:underline">twitter.com/privacy</a>.
                      </p>
                      <p>
                        Ihre Datenschutzeinstellungen bei Twitter können Sie in den Konto-Einstellungen unter <a href="https://twitter.com/account/settings" target="_blank" rel="external noopener" className="text-primary hover:underline">twitter.com/account/settings</a> ändern.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                      <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tight">g) Instagram:</h3>
                      <p className="mb-4">
                        Auf unseren Seiten sind Plugins des Dienstes Instagram eingebunden. Diese Dienste werden angeboten durch die Instagram LLC., 1601 Willow Road, Menlo Park, CA 94025, USA. Eine Übersicht über die Instagram-buttons und deren Aussehen finden Sie hier: <a href="http://blog.instagram.com/post/36222022872/introducing-instagram-badges" target="_blank" rel="noopener external" className="text-primary hover:underline">http://blog.instagram.com/post/36222022872/introducing-instagram-badges</a>.
                      </p>
                      <p className="mb-4">
                        Wenn Sie unsere Seiten besuchen, wird über das Plugin eine direkte Verbindung zwischen Ihrem Browser und dem Instagram-Server hergestellt. Instagram erhält dadurch die Information, dass Sie mit Ihrer IP-Adresse unsere Seite besucht haben. Wenn Sie das Instagram Plugin anklicken, während Sie in Ihrem Instagram-Account eingeloggt sind, können Sie die Inhalte unserer Seiten auf Ihrem Instagram-Profil verlinken. Dadurch kann Instagram den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen.
                      </p>
                      <p>
                        Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Instagram erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Instagram unter <a href="https://help.instagram.com/155833707900388/" target="_blank" rel="noopener external" className="text-primary hover:underline">https://help.instagram.com/155833707900388/</a>.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="section-12" className="space-y-6">
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">12. Haftungsausschluss:</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Die Nutzer veröffentlichen Daten, Informationen und Inhalte auf unserer Website auf eigene Verantwortung. Wir übernehmen keinerlei Haftung, falls diese Daten, Informationen und Inhalte von unberechtigten Personen, eingesehen, gespeichert und oder gesammelt werden. Wir übernehmen keinerlei Haftung, falls diese von Nutzern veröffentlichten Daten, Informationen und Inhalte manipuliert missbraucht und/oder unerlaubterweise gesammelt oder gespeichert werden. Die Nutzer werden ersucht, jedes unerlaubte Verhalten auf unserer Website unter der Emailadresse <a href="mailto:office@businesscluster.at" className="text-primary hover:underline">office@businesscluster.at</a> zu melden.
                  </p>
                </div>
              </section>

              <section id="section-13" className="space-y-6">
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">13. Links:</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Unsere Website samt ihren Unterseiten enthält Links zu anderen Websites. Diese Websites sind vollkommen unabhängig und liegen außerhalb unserer Kontrolle. Wir übernehmen keine Verantwortung für die Inhalte von externen Websites Dritter, die über Links von dieser Website erreicht werden können oder die ihrerseits auf diese Website verweisen und übernehmen keinerlei Verantwortung für den Inhalt solcher Websites oder deren Richtigkeit, Vollständigkeit oder Gesetzeskonformität.
                  </p>
                </div>
              </section>

              <section id="section-14" className="space-y-6">
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">14. Meldung von Verstößen:</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Sollten von Nutzern unserer Website rechtswidrige Inhalte oder Inhalte, die Rechte Dritter beeinträchtigen, eingestellt, verwendet, veröffentlicht oder verbreitet werden, oder sollten von Nutzern unserer Website gesetzlich (z.B. durch das Urheber-, Marken-, Patent-, Geschmacksmuster- oder Gebrauchsmusterrecht) geschützte Inhalte bzw. geistige Eigentumsrechte Dritter verwendet, eingestellt oder veröffentlicht werden, ohne dazu berechtigt zu sein ersuchen wir um Benachrichtigung unter der Emailadresse <a href="mailto:office@businesscluster.at" className="text-primary hover:underline">office@businesscluster.at</a>.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
