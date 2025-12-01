import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate) - new Date();
      if (diff > 0) {
        setTime({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        });
      }
    };
    calc();
    const timer = setInterval(calc, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBlock = ({ value, label }) => (
    <div className="text-center">
      <div className="glass-pro rounded-2xl p-6 lg:p-8 mb-3 min-w-[90px] lg:min-w-[120px]">
        <div className="text-4xl lg:text-6xl font-semibold text-white font-['Cormorant_Garamond'] tabular-nums">
          {String(value).padStart(2, '0')}
        </div>
      </div>
      <span className="text-xs lg:text-sm text-gray-400 uppercase tracking-wider font-medium">
        {label}
      </span>
    </div>
  );

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[#0a0a0a] to-black">
      <div className="container-pro">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto fade-up">
          <span className="badge-gold mx-auto mb-6">À venir</span>
          
          <h2 className="heading-section mb-6">
            <span className="text-gold">Soirée de Couronnement</span>
            <br />
            <span className="text-white">Miss FSS-Médecine 2025</span>
          </h2>
          
          <p className="text-lg text-gray-400">
            Rejoignez-nous pour une soirée inoubliable
          </p>
        </div>

        {/* Countdown */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8 mb-12 fade-up delay-2">
          <TimeBlock value={time.days} label="Jours" />
          <TimeBlock value={time.hours} label="Heures" />
          <TimeBlock value={time.minutes} label="Minutes" />
          <TimeBlock value={time.seconds} label="Secondes" />
        </div>

        {/* CTA */}
        <div className="text-center fade-up delay-3">
          <a href="/billetterie" className="btn-gold">
            Réserver ma place
          </a>
        </div>
      </div>
    </section>
  );
};

export default Countdown;