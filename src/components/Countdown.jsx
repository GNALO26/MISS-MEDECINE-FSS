import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBlock = ({ value, label }) => (
    <div className="relative group">
      {/* Glow Effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-500 rounded-3xl"></div>
      
      <div className="relative flex flex-col items-center">
        {/* Number Container */}
        <div className="glass-card p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl min-w-[80px] sm:min-w-[100px] lg:min-w-[120px] transform transition-all duration-500 hover:scale-105">
          {/* Top Reflection */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-2xl sm:rounded-t-3xl"></div>
          
          <div className="relative">
            {/* Number */}
            <span className="block text-3xl sm:text-5xl lg:text-6xl font-bold text-white transition-all duration-300 font-['Playfair_Display']">
              {String(value).padStart(2, '0')}
            </span>
            
            {/* Separator Line */}
            <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
        </div>
        
        {/* Label */}
        <span className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-base text-gray-400 font-medium uppercase tracking-[0.2em] group-hover:text-secondary transition-colors duration-300">
          {label}
        </span>
      </div>
    </div>
  );

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-accent to-black"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 animate-fadeInUp">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 border border-secondary/30 rounded-full text-secondary text-xs sm:text-sm font-semibold tracking-wider uppercase">
              Événement à venir
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="gradient-text-elegant block">Soirée de Couronnement</span>
            <span className="text-white block mt-2">Miss FSS-Médecine 2025</span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Rejoignez-nous pour une soirée inoubliable célébrant l'élégance, l'intelligence et la beauté
          </p>
        </div>

        {/* Countdown */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 animate-scaleIn animation-delay-200">
          <TimeBlock value={timeLeft.days} label="Jours" />
          <TimeBlock value={timeLeft.hours} label="Heures" />
          <TimeBlock value={timeLeft.minutes} label="Minutes" />
          <TimeBlock value={timeLeft.seconds} label="Secondes" />
        </div>

        {/* Decorative Line */}
        <div className="mt-12 sm:mt-16">
          <div className="h-px w-full max-w-3xl mx-auto bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;