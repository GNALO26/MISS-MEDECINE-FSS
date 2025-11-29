import React from 'react';
import { Link } from 'react-router-dom';
import Countdown from '../components/Countdown';

const Home = () => {
  // Date de l'événement - à personnaliser
  const eventDate = '2026-01-21T20:00:00';

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/background-hero.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Miss FSS-Médecine</span>
              <br />
              <span className="text-white">2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Élégance, Intelligence et Beauté
              <br />
              <span className="text-secondary">Faculté des Sciences de Santé</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/vote"
                className="btn-primary text-white font-semibold py-4 px-8 rounded-lg inline-flex items-center justify-center space-x-2"
              >
                <span>Voter pour votre favorite</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                to="/billetterie"
                className="btn-secondary font-semibold py-4 px-8 rounded-lg inline-flex items-center justify-center space-x-2"
              >
                <span>Réserver votre place</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Countdown Section */}
      <Countdown targetDate={eventDate} />

      {/* Features Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Participez à l'événement</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Soutenez votre candidate préférée et vivez une soirée exceptionnelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect rounded-xl p-8 text-center hover:border-secondary transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Votez</h3>
              <p className="text-gray-400 leading-relaxed">
                100 FCFA par vote. Votez autant de fois que vous le souhaitez pour soutenir votre candidate
              </p>
            </div>

            <div className="glass-effect rounded-xl p-8 text-center hover:border-secondary transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Réservez</h3>
              <p className="text-gray-400 leading-relaxed">
                Achetez vos billets pour assister à la grande soirée de couronnement
              </p>
            </div>

            <div className="glass-effect rounded-xl p-8 text-center hover:border-secondary transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Célébrez</h3>
              <p className="text-gray-400 leading-relaxed">
                Vivez une soirée mémorable remplie d'élégance et de glamour
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Prêt à participer ?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Ne manquez pas cette opportunité unique de faire partie de cet événement exceptionnel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/vote"
              className="btn-primary text-white font-semibold py-4 px-8 rounded-lg inline-block"
            >
              Commencer à voter
            </Link>
            <Link 
              to="/a-propos"
              className="glass-effect text-white font-semibold py-4 px-8 rounded-lg inline-block hover:border-secondary transition-all"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;