import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">À propos de l'événement</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Découvrez l'histoire et les acteurs de Miss FSS-Médecine
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          {/* Event Description */}
          <section className="glass-effect rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">L'événement</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Miss FSS-Médecine est le concours de beauté et d'élégance le plus prestigieux de la Faculté des Sciences de Santé du Bénin. Cet événement annuel met en lumière l'intelligence, l'élégance et la beauté des étudiantes de notre faculté.
              </p>
              <p>
                Plus qu'un simple concours de beauté, Miss FSS-Médecine célèbre les valeurs académiques, l'engagement communautaire et le leadership des futures professionnelles de la santé. Chaque candidate représente l'excellence et la diversité de notre faculté.
              </p>
              <p>
                La soirée de couronnement sera une célébration grandiose mêlant élégance, talent et glamour. Les candidates présenteront leurs talents, répondront à des questions sur des enjeux sociaux et défileront dans des tenues qui reflètent leur personnalité unique.
              </p>
            </div>
          </section>

          {/* Organizer */}
          <section className="glass-effect rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8">L'organisateur</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img 
                src="/images/logo-aemc.png" 
                alt="AEMC" 
                className="w-32 h-32 object-contain"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-secondary mb-4">AEMC</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  L'Association des Étudiants en Médecine et Chirurgie (AEMC) est l'organisation étudiante qui représente et défend les intérêts de tous les étudiants de la Faculté des Sciences de Santé.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Depuis sa création, l'AEMC organise de nombreux événements culturels, académiques et sociaux qui enrichissent la vie étudiante et renforcent les liens au sein de notre communauté universitaire.
                </p>
              </div>
            </div>
          </section>

          {/* Developer */}
          <section className="glass-effect rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8">Le développeur</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img 
                  src="/images/photo-dev.jpg" 
                  alt="Développeur" 
                  className="w-32 h-32 rounded-full object-cover border-4 border-secondary"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src="/images/logo-guilok.png" 
                    alt="GUI-LOK Dev" 
                    className="h-16 w-auto"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-secondary">GUI-LOK Dev</h3>
                    <p className="text-gray-400">Solutions digitales professionnelles</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  GUI-LOK Dev est une entreprise spécialisée dans la création de solutions web et mobiles sur mesure. Nous accompagnons nos clients dans leur transformation digitale avec des technologies modernes et performantes.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Nos services incluent le développement d'applications web et mobiles, la création de sites vitrines et e-commerce, ainsi que l'intégration de systèmes de paiement et de gestion.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                    Développement Web
                  </span>
                  <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                    Applications Mobiles
                  </span>
                  <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                    E-commerce
                  </span>
                  <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                    Paiement en ligne
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Values */}
          <section className="glass-effect rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8">Notre mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
                <p className="text-gray-400 text-sm">
                  Promouvoir l'excellence académique et personnelle
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Communauté</h3>
                <p className="text-gray-400 text-sm">
                  Renforcer les liens entre étudiants
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Élégance</h3>
                <p className="text-gray-400 text-sm">
                  Célébrer la beauté sous toutes ses formes
                </p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="glass-effect rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Une question ?</h2>
            <p className="text-gray-400 mb-6">
              N'hésitez pas à nous contacter pour toute information complémentaire
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary font-semibold py-3 px-6 rounded-lg">
                Nous contacter
              </button>
              <button className="glass-effect text-white font-semibold py-3 px-6 rounded-lg hover:border-secondary transition-all">
                Suivez-nous
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;