import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FileText, Mail, Phone, MapPin, Building2, CreditCard, Info, ShieldCheck } from 'lucide-react';

export const Impressum = () => {
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
            <FileText className="w-8 h-8 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Impressum</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed"
          >
            Kontaktieren Sie uns über unser <Link to="/kontakt" className="text-secondary hover:underline">Kontaktformular</Link> oder unter: <a href="mailto:office@bildungscluster.at" className="text-secondary hover:underline">office@bildungscluster.at</a>
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column: Core Info */}
            <div className="space-y-12">
              {/* Publisher Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-10 rounded-3xl shadow-lg border border-gray-100"
              >
                <h2 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">Medieninhaber, Herausgeber und Hersteller</h2>
                <p className="text-gray-600 mb-6 italic">
                  Offenlegung gemäß §§ 24, 25 Mediengesetz und Informationen gemäß § 5 ECG
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Building2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-black text-gray-900">BildungsCluster c/o Business Cluster Network GmbH</p>
                      <p className="text-gray-600">Hafenstraße 47-51</p>
                      <p className="text-gray-600">4020 Linz</p>
                      <p className="text-gray-600">Austria</p>
                    </div>
                  </div>
                  <p className="font-bold text-gray-900 border-l-4 border-secondary pl-4">Mitglied der Wirtschaftskammer OÖ</p>
                </div>
              </motion.div>

              {/* Contact & Service Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-3xl border-2 border-gray-50 shadow-sm"
                >
                  <h3 className="text-xl font-black text-gray-900 mb-6 uppercase tracking-tight flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-primary" /> Kontakt
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p><span className="font-bold">Telefon:</span> <a href="tel:+437327700770" className="hover:text-primary">+43 (0) 732 / 77 00 77 – 0</a></p>
                    <p><span className="font-bold">Fax:</span> +43 (0) 732 / 77 00 77 – 11</p>
                    <p><span className="font-bold">E-Mail:</span> <a href="mailto:office@bildungscluster.at" className="hover:text-primary">office@bildungscluster.at</a></p>
                    <p><span className="font-bold">Web:</span> <a href="https://www.bildungscluster.at" className="hover:text-primary">www.bildungscluster.at</a></p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white p-8 rounded-3xl border-2 border-gray-50 shadow-sm"
                >
                  <h3 className="text-xl font-black text-gray-900 mb-6 uppercase tracking-tight flex items-center">
                    <Info className="w-5 h-5 mr-2 text-primary" /> Kundenservice
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p><span className="font-bold">MO-DO:</span> 9:00 – 16:00 Uhr</p>
                    <p><span className="font-bold">FR:</span> 9:00 – 12:00 Uhr</p>
                  </div>
                </motion.div>
              </div>

              {/* Company Data */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-10 rounded-3xl shadow-lg border border-gray-100"
              >
                <h2 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-tight">Unternehmensdaten</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4 text-gray-600">
                    <p><span className="font-bold text-gray-900">UID:</span> ATU 65800902</p>
                    <p><span className="font-bold text-gray-900">Firmenbuch:</span> FN 348165h</p>
                    <p><span className="font-bold text-gray-900">Datenschutz:</span> DVR Nr.: 4002716</p>
                    <p><span className="font-bold text-gray-900">Gerichtsstand:</span> Handelsgericht Linz</p>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p><span className="font-bold text-gray-900">Unternehmensgegenstand:</span> Unternehmensberatung, Ankündigungsunternehmen</p>
                    <p><span className="font-bold text-gray-900">Blattlinie:</span> Informationen zu den Bereichen Berufseinstieg, Karriere und Weiterbildung</p>
                  </div>
                </div>
              </motion.div>

              {/* Bank Details */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl border-2 border-gray-50 shadow-sm"
              >
                <h2 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-tight flex items-center">
                  <CreditCard className="w-6 h-6 mr-3 text-primary" /> Bankverbindung
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
                  <div className="space-y-2">
                    <p><span className="font-bold">Bank:</span> Raiffeisen OOE</p>
                    <p><span className="font-bold">BLZ:</span> 34777</p>
                    <p><span className="font-bold">Konto:</span> 950 5157</p>
                  </div>
                  <div className="space-y-2">
                    <p><span className="font-bold">BIC:</span> RZOOAT2L777</p>
                    <p><span className="font-bold">IBAN:</span> AT83 3477 7000 0950 5157</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Legal & Credits */}
            <div className="space-y-12">
              {/* Legal Notice */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-10 rounded-3xl shadow-lg border border-gray-100"
              >
                <h2 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-tight flex items-center">
                  <ShieldCheck className="w-6 h-6 mr-3 text-primary" /> Rechtshinweis
                </h2>
                <div className="space-y-6 text-gray-600 text-sm leading-relaxed text-justify">
                  <p>
                    Business Cluster Network GmbH macht keinerlei Zusicherung und übernimmt keinerlei Haftung für Schäden oder Nachteile, welcher Art immer, die durch den Zugriff auf die Website, die direkte oder indirekte Verwendung der Website bzw. deren Inhalte oder die Verwertung der auf der Website enthaltenen Informationen entstehen.
                  </p>
                  <p>
                    Diese Website enthält Verknüpfungen („Hyperlinks“) zu Websites Dritter. Diese Websites sind vollkommen unabhängig und liegen außerhalb der Kontrolle von Business Cluster Network GmbH. Business Cluster Network GmbH übernimmt keine Verantwortung für die Inhalte von externen Websites Dritter, die über Hyperlinks von dieser Website erreicht werden können oder die ihrerseits auf diese Website verweisen und übernimmt auch keinerlei Verantwortung für deren Richtigkeit, Vollständigkeit oder Gesetzeskonformität.
                  </p>
                  <p>
                    Business Cluster Network GmbH setzt auf den Websites sogenannte Cookies ein und erhebt, verarbeitet und nutzt damit Nutzungsdaten von Nutzern. Durch den Einsatz von Cookies ist es zum Beispiel möglich, dass beim nächsten Besuch des Rechners manche persönliche Voreinstellungen vorgefunden werden, die nicht wieder eingegeben werden müssen. Durch Cookies ist auch eine Analyse der Benutzung der Websites durch die Nutzer ermöglicht. Der Nutzer nimmt zur Kenntnis, dass die Funktionalität der Websites bei Ablehnung von funktionsbezogenen Cookies nicht oder nur eingeschränkt möglich ist.
                  </p>
                  <p>
                    Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. („Google“). Google Analytics verwendet Cookies. Die durch die Cookies erzeugten Informationen über Ihre Benutzung dieser Websites (einschließlich Ihrer IP-Adresse) werden an einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundenen Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrage von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten von Google in Verbindung bringen. Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; der Nutzer kann in diesem Fall aber gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen. Durch die Nutzung dieser Websites erklärt sich der Nutzer mit der Bearbeitung der über ihn erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.
                  </p>
                  <p>
                    Sofern nicht anders angegeben, liegt das Urheberrecht aller auf der Website von Business Cluster Network GmbH bereitgestellten Dokumente und der dafür verwendeten Materialien ausschließlich bei Business Cluster GmbH. Das Herunterladen, Drucken und Speichern von Dateien dieser Website für den ausschließlich privaten Gebrauch ist gestattet, darüber hinaus gehende Nutzung bedarf der ausdrücklichen Zustimmung von Business Cluster Network GmbH.
                  </p>
                  <p>
                    Die Werbung auf dieser Website wird von einem anderen Unternehmen bereitgestellt. Unser Werbepartner schaltet Anzeigen, die auf Basis der Daten über Ihren Besuch auf dieser und anderen Websites seiner Ansicht nach Ihren Interessen entsprechen. Zu diesem Zweck muss der Werbepartner ggf. ein Cookie auf Ihrem Computer ablegen. Weitere Informationen erhalten Sie unter <a href="http://www.youronlinechoices.eu" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.youronlinechoices.eu</a>.
                  </p>
                  <p className="pt-4 border-t border-gray-200">
                    Es gelten die AGB der Business Cluster Network GmbH – <a href="https://www.absolventen.at/agb/" target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:underline">AGB</a>
                  </p>
                </div>
              </motion.div>

              {/* Image Credits */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl border-2 border-gray-50 shadow-sm"
              >
                <h2 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">Bildnachweis</h2>
                <div className="space-y-2 text-gray-600">
                  <p>fotolia.com</p>
                  <p>unsplash.com</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
