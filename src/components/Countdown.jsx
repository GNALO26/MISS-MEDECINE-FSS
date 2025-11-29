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
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-br from-primary to-red-800 rounded-lg p-4 md:p-6 shadow-xl min-w-[80px] md:min-w-[100px]">
        <span className="text-3xl md:text-5xl font-bold text-white block">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-sm md:text-base text-gray-400 mt-2 font-medium uppercase tracking-wide">
        {label}
      </span>
    </div>
  );

  return (
    <div className="py-16 bg-gradient-to-b from-black to-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Soirée de Couronnement</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Rejoignez-nous pour une soirée inoubliable
          </p>
        </div>

        <div className="flex justify-center gap-4 md:gap-8">
          <TimeBlock value={timeLeft.days} label="Jours" />
          <TimeBlock value={timeLeft.hours} label="Heures" />
          <TimeBlock value={timeLeft.minutes} label="Minutes" />
          <TimeBlock value={timeLeft.seconds} label="Secondes" />
        </div>
      </div>
    </div>
  );
};

export default Countdown;