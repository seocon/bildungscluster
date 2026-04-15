import React from 'react';
import { motion } from 'motion/react';
import { Handshake, ExternalLink } from 'lucide-react';

export const Partner = () => {
  const partners = [
    { 
      name: 'absolventen.at', 
      url: 'https://www.absolventen.at/', 
      logo: 'https://www.bildungscluster.at/wp-content/uploads/2025/01/absolventen.at_small-196x44.jpg',
      desc: 'absolventen.at wurde 2013 mit einem klaren Ziel aus der Taufe gehoben: Ein Karrierenetzwerk, das AbsolventInnen und Unternehmen in Östereich zusammenbringt und den Berufseinstieg und die Jobsuche so angenehm wie möglich gestaltet. Als gänzlich eigenständiges Unternehmen verfolgen wir seither unser Vorhaben.' 
    },
    { 
      name: 'BMBWF', 
      url: 'https://www.bmbwf.gv.at/', 
      logo: 'https://www.bildungscluster.at/wp-content/uploads/2025/01/BMBWF_LOGO-300x86-2-199x99.png',
      desc: 'Bundesministerium für Bildung, Wissenschaft und Forschung' 
    },
    { 
      name: 'Wirtschaftskammer Österreich', 
      url: 'http://www.wko.at/bildung', 
      logo: 'https://www.bildungscluster.at/wp-content/uploads/2025/01/WKO-Logo-179x149.jpg',
      desc: 'Wirtschaftskammer Österreich' 
    },
    { 
      name: 'BeSt³', 
      url: 'http://www.bestinfo.at/', 
      logo: 'https://www.bildungscluster.at/wp-content/uploads/2025/01/BeSt-logo-300x150.gif',
      desc: (
        <>
          <strong>Die Messe für Beruf, Studium und Weiterbildung</strong><br />
          Die BeSt richtet sich an MaturantInnen, SchülerInnen, Studierende, Schul- und StudienabbrecherInnen sowie an Eltern, LehrerInnen, HochschulabsolventInnen, Berufstätige und an Weiterbildung Interessierte.
        </>
      )
    },
    { 
      name: 'AIESEC', 
      url: 'http://www.aiesec.at/', 
      logo: 'https://www.bildungscluster.at/wp-content/uploads/2025/01/aisec-rect-179x149.jpg',
      desc: 'Present in over 113 countries and territories and with over 86,000 members, AIESEC is the world’s largest youth-run organisation. Focused on providing a platform for youth leadership development, AIESEC offers young people the opportunity to be global citizens, to change the world, and to get practical experience and skills that matter today.' 
    },
    { 
      name: 'Magazin TRAiNiNG', 
      url: 'http://www.magazintraining.com/', 
      logo: 'https://www.bildungscluster.at/wp-content/uploads/2025/01/training2-179x134.jpg',
      desc: 'Das Magazin für Weiterbildung und HR-Management.' 
    },
    { 
      name: 'BusinessCluster', 
      url: 'http://businesscluster.at/', 
      logo: 'https://www.bildungscluster.at/wp-content/uploads/2025/08/businesss-cluster-1.png',
      desc: 'Der BusinessCluster ist ein Netzwerk für Start-ups und KMUs und bietet die drei Leistungssäulen Presseportal, Innovationsportraits und Start-up-Deals an.' 
    },
    { 
      name: 'drunomics', 
      url: 'http://drunomics.com/', 
      logo: 'https://www.bildungscluster.at/wp-content/uploads/2025/01/drunomics-150x150.png',
      desc: 'Drupal Consulting – Drupal Training – Drupal Development' 
    },
    { 
      name: 'seoCon', 
      url: 'https://www.seocon.at/', 
      logo: 'https://www.bildungscluster.at/wp-content/uploads/2025/01/seoCon-Logo-1-182x34.png',
      desc: (
        <>
          <a href="http://www.seocon.at/seo-suchmaschinenoptimierung/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Suchmaschinenoptimierung</a> | <a href="http://www.seocon.at/sem-suchmaschinenmarketing" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Suchmaschinenmarketing</a> | <a href="http://www.seocon.at/webdesign" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Webdesign</a> von <a href="http://www.seocon.at/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">seoCon – Online Marketing Agentur</a> – Ein Unternehmen der teamCon GmbH – <a href="http://www.teamcon.at/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Unternehmensberatung & Corporate Finance aus Linz</a>
        </>
      )
    },
    { 
      name: 'Education Group', 
      url: 'https://www.edugroup.at/', 
      logo: 'https://www.bildungscluster.at/wp-content/uploads/2025/01/Logo_educationgroup_RGB-399x199.jpg',
      desc: 'Karriere-Verzeichnis – Das Webverzeichnis für den persönlichen Erfolg' 
    },
    { 
      name: 'berufszentrum.de', 
      url: 'http://www.berufszentrum.de/', 
      logo: 'https://www.bildungscluster.at/wp-content/uploads/2025/01/Berufszentrum.de_Logo-399x199.png',
      desc: 'Berufszentrum – deutscher und internationaler Bewerbungsservice' 
    },
    { 
      name: 'Textfeld', 
      url: 'http://textfeld.ac.at/', 
      logo: 'https://www.bildungscluster.at/wp-content/uploads/2025/01/text-feld-logo.gif',
      desc: 'Der Verein textfeld setzt sich für die Online-Publikation akademischer Texte ein. AkademikerInnen und Studierende aller Fachbereiche können hier ihre Texte kostenlos online veröffentlichen und ihre Expertise sichtbar machen' 
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
            <Handshake className="w-8 h-8 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Partner BildungsCluster</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed"
          >
            Wir arbeiten eng mit führenden Institutionen aus Bildung, Politik und Wirtschaft zusammen, um die besten Weiterbildungsmöglichkeiten in Österreich zu fördern.
          </motion.p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="h-24 flex items-center justify-center mb-6 bg-white rounded-2xl p-4 shadow-sm overflow-hidden">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} Logo`}
                    className="max-h-full max-w-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tight">
                  <a href={partner.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    {partner.name}
                  </a>
                </h3>
                <div className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                  {partner.desc}
                </div>
                <a 
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors mt-auto"
                >
                  Zur Website
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
