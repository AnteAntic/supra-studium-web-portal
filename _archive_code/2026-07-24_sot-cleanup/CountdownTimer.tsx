import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string; // ISO date string
  className?: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  targetDate, 
  className = "" 
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div 
            className="text-2xl font-bold font-mono transition-all duration-300"
            style={{
              color: "#C8A24A",
              textShadow: "0 0 10px rgba(200, 162, 74, 0.3)"
            }}
          >
            {String(value).padStart(2, '0')}
          </div>
          <div className="text-xs text-[#666] uppercase tracking-wider">
            {unit === 'days' ? 'dana' : 
             unit === 'hours' ? 'sati' : 
             unit === 'minutes' ? 'min' : 'sek'}
          </div>
        </div>
      ))}
    </div>
  );
};