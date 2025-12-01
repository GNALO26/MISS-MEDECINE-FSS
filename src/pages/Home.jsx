import React from 'react';
import { Link } from 'react-router-dom';
import Countdown from '../components/Countdown';

const Home = () => {
  const eventDate = '2025-12-31T20:00:00';

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/background-hero.jpg)' }}
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Content */}
        <div className="container-pro relative z-10 pt-32 pb-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8 fade-up">
            {/* Badge */}
            <div className="badge-gold mx-auto">
              <span className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse" />
              <span>Événement 2025</span>
            </div>

            {/* Title */}
            <h1 className="heading-hero">
              <span className="text-gold">Miss FSS-Médecine</span>
              <br />
              <span className="text-white">2025</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Élégance · Intelligence · Beauté
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Link to="/vote" className="btn-gold w-full sm:w-auto">
                Voter maintenant
              </Link>
              <Link to="/billetterie" className="btn-outline-gold w-full sm:w-auto">
                Réserver ma place
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <Countdown targetDate={eventDate} />

      {/* Features */}
      <section className="py-24 bg-black">
        <div className="container-pro">
          <div className="text-center mb-16 max-w-3xl mx-auto fade-up">
            <span className="badge-gold mx-auto mb-6">Participez</span>
            <h2 className="heading-section mb-6">
              <span className="text-gold">Comment participer</span>
            </h2>
            <p className="text-lg text-gray-400">
              Trois façons simples de faire partie de cet événement unique
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Vote */}
            <div className="card-clean p-8 text-center fade-up delay-1">
              <div className="w-16 h-16 bg-[#FFD700] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </div>
              <h3 className="heading-card mb-4 text-white">Votez</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Soutenez votre candidate préférée avec un vote à 100 FCFA
              </p>
              <Link to="/vote" className="text-[#FFD700] font-medium hover:underline">
                Voter →
              </Link>
            </div>

            {/* Billetterie */}
            <div className="card-clean p-8 text-center fade-up delay-2">
              <div className="w-16 h-16 bg-[#FFD700] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <h3 className="heading-card mb-4 text-white">Réservez</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Achetez vos billets pour la soirée de couronnement
              </p>
              <Link to="/billetterie" className="text-[#FFD700] font-medium hover:underline">
                Voir les billets →
              </Link>
            </div>

            {/* À propos */}
            <div className="card-clean p-8 text-center fade-up delay-3">
              <div className="w-16 h-16 bg-[#FFD700] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="heading-card mb-4 text-white">Découvrez</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                En savoir plus sur l'événement et les organisateurs
              </p>
              <Link to="/a-propos" className="text-[#FFD700] font-medium hover:underline">
                À propos →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="container-pro text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="heading-section">
              <span className="text-gold">Prêt à participer ?</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Ne manquez pas cette opportunité unique de célébrer l'excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/vote" className="btn-gold">
                Commencer à voter
              </Link>
              <Link to="/a-propos" className="btn-dark">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;