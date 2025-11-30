import React from 'react';
import { Link } from 'react-router-dom';
import Countdown from '../components/Countdown';

const Home = () => {
  const eventDate = '2025-12-31T20:00:00';

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Votez pour votre favorite',
      description: 'Soutenez votre candidate préférée avec un vote à 100 FCFA. Votez autant de fois que vous le souhaitez.',
      gradient: 'from-primary to-red-800',
      link: '/vote',
      buttonText: 'Voter maintenant'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      ),
      title: 'Réservez votre place',
      description: 'Achetez vos billets dès maintenant pour assister à la grande soirée de couronnement.',
      gradient: 'from-secondary to-yellow-600',
      link: '/billetterie',
      buttonText: 'Voir les billets'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Une soirée mémorable',
      description: 'Vivez une expérience unique célébrant l\'élégance, l\'intelligence et la beauté.',
      gradient: 'from-purple-600 to-pink-600',
      link: '/a-propos',
      buttonText: 'En savoir plus'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/images/background-hero.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black"></div>
          
          {/* Animated Particles */}
          <div className="particles-bg">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 20}s`,
                  animationDuration: `${Math.random() * 10 + 15}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full animate-fadeIn">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gray-300">Événement 2025</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight animate-fadeInUp animation-delay-100">
              <span className="gradient-text-elegant block mb-2">Miss FSS-Médecine</span>
              <span className="text-white block">2025</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
              Élégance · Intelligence · Beauté
              <br />
              <span className="text-secondary font-semibold">Faculté des Sciences de Santé du Bénin</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-8 animate-fadeInUp animation-delay-300">
              <Link 
                to="/vote"
                className="btn-primary text-white font-semibold py-4 px-8 sm:px-10 rounded-2xl inline-flex items-center justify-center space-x-3 text-base sm:text-lg shadow-2xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
                <span>Voter maintenant</span>
              </Link>
              
              <Link 
                to="/billetterie"
                className="btn-secondary font-semibold py-4 px-8 sm:px-10 rounded-2xl inline-flex items-center justify-center space-x-3 text-base sm:text-lg shadow-2xl"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
                <span>Réserver ma place</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Countdown Section */}
      <Countdown targetDate={eventDate} />

      {/* Features Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-accent/50 to-black"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 border border-secondary/30 rounded-full text-secondary text-sm font-semibold tracking-wider uppercase mb-6">
              Participez
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text-elegant">Faites partie de l'événement</span>
            </h2>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Trois façons simples de participer à cette soirée exceptionnelle
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group glass-card rounded-3xl p-8 hover:scale-105 transition-all duration-500 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-white shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-secondary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
                  {feature.description}
                </p>

                {/* Button */}
                <Link
                  to={feature.link}
                  className="inline-flex items-center space-x-2 text-secondary hover:text-secondary-dark font-semibold group/btn transition-all duration-300"
                >
                  <span>{feature.buttonText}</span>
                  <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="gradient-text-elegant block mb-2">Prêt à participer ?</span>
              <span className="text-white">Ne manquez pas cet événement unique</span>
            </h2>
            
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Rejoignez-nous pour célébrer l'excellence, l'élégance et la beauté de nos futures professionnelles de la santé
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link 
                to="/vote"
                className="btn-primary text-white font-semibold py-4 px-10 rounded-2xl inline-flex items-center justify-center space-x-2 text-lg shadow-2xl"
              >
                <span>Commencer à voter</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link 
                to="/a-propos"
                className="btn-outline font-semibold py-4 px-10 rounded-2xl inline-block text-lg"
              >
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