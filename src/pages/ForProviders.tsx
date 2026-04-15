import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Briefcase, CheckCircle2, TrendingUp, Users, Globe, Target } from 'lucide-react';

export const ForProviders = () => {
  const benefits = [
    {
      title: 'Präsenz Ihres Bildungsangebotes',
      desc: (
        <>
          Ihr Bildungsangebot in guten Händen: Stellen Sie Ihre Weiterbildungsangebote vor und erreichen Sie über unser breites Netzwerk um{' '}
          <a href="https://www.bildungscluster.at" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.bildungscluster.at</a>
          {' '}und{' '}
          <a href="https://www.absolventen.at" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.absolventen.at</a>
          {' '}eine Vielzahl an potentiellen Weiterbildungsinteressierten.
        </>
      ),
      icon: Briefcase
    },
    {
      title: 'Zahlreiche Pluspunkte',
      desc: 'Mit der Nutzung unseres Netzwerks genießen Sie zahlreiche Pluspunkte. Profitieren Sie von unserer langjährige Erfahrung im Bereich der Social Media Arbeit und unserer Rundumbetreuung sowie einer großen Reichweite für Ihre Weiterbildungsangebote und Programme.',
      icon: CheckCircle2
    },
    {
      title: 'Unsere Leistungen:',
      desc: (
        <ul className="space-y-2 list-none p-0">
          {[
            'Multi-Channel-Strategie: Sharing Ihres Bildungsangebots in unserem Social Media Netzwerk. BildungsCluster.at und www.absolventen.at auf Facebook, Instagram, Twitter etc.',
            'Über 17.000 zielgruppenaffine Social-Media-Abonnenten',
            'Eintragung Ihres Bildungsangebots mit 1 Jahr Laufzeit im BildungsCluster (günstige Verlängerungsmöglichkeit).',
            'Schaltung von Social Media – News*',
            'Full Service: Wir stellen die Bildungsangebote für Sie ein. Der Vorteil: Professionelle Beschlagwortung unter SEO-relevanten Gesichtspunkten',
            '*Anmerkung max. 2 Mal pro Jahr pro Anbieter.'
          ].map((item, i) => (
            <li key={i} className="flex items-start">
              <CheckCircle2 className="w-4 h-4 text-secondary mr-2 mt-1 shrink-0" />
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      ),
      icon: Target
    },
    {
      title: 'Zusätzliche Werbepräsenz',
      desc: 'Neben der Präsenz im BildungsCluster-Netzwerk bieten wir Ihnen zahlreiche weitere Werbeformen an. Von Print-Werbeformen in unseren Magazinen bis hin zu Online-Werbeformen wie Bannerwerbung oder Newsletter-Marketing.',
      icon: TrendingUp
    }
  ];

  const adForms = [
    {
      title: 'Print-Werbeformen',
      intro: 'Sie wollen ein hochwertiges redaktionelles Umfeld? Dann präsentieren Sie sich in unseren seit vielen Jahren sehr erfolgreichen Printmedien*: unserer absolventen.at KarriereGuides!',
      items: [
        { text: 'Alle Printmedien im Überblick', href: 'https://www.absolventen.at/start-unternehmen/' },
        { text: 'HTL / FS und HAK / HBLA / HLW KarriereGuides', href: 'https://www.absolventen.at/inserat-im-htl-und-hak-karriereguide/' },
        { text: 'UNI und FH KarriereGuides', href: 'https://www.absolventen.at/inserat-im-uni-und-fh-karriereguide/' },
        { text: 'MBA Postgraduate Guide', href: 'https://www.absolventen.at/inserat-im-weiterbildungsguide/' },
        { text: 'HTL und HAK / HBLA / HLW Maturafolder', href: 'https://www.absolventen.at/hak-und-htl-maturafolder/' }
      ]
    },
    {
      title: 'Online-Werbeformen',
      intro: 'Verschaffen Sie sich mehr Aufmerksamkeit und Reichweite mit unseren Online-Werbeformen. Ob Banner, Newsletter oder redaktionelle Beiträge wir verfügen auf allen Websites über ein Breites Angebot um Ihre Präsenz zu stärken!',
      items: [
        { text: 'Kontaktieren Sie uns einfach direkt', href: '/kontakt', internal: true }
      ]
    }
  ];

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
            <Briefcase className="w-8 h-8 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Für Anbieter</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed"
          >
            Präsentieren Sie Ihr Weiterbildungsprogramm in unserem Netzwerk!
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight uppercase">{benefit.title}</h3>
                <div className="text-gray-600 leading-relaxed">
                  {benefit.desc}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Ad Forms Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            {adForms.map((form, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl border-2 border-gray-50 shadow-sm"
              >
                <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight">{form.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{form.intro}</p>
                <ul className="space-y-4">
                  {form.items.map((item, j) => (
                    <li key={j} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-secondary mr-3 shrink-0" />
                      {item.internal ? (
                        <Link to={item.href} className="text-primary font-bold hover:underline">
                          {item.text}
                        </Link>
                      ) : (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">
                          {item.text}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};
