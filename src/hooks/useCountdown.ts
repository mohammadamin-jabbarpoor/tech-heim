import { useEffect, useState } from "react";

const initialState = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  isExpired: false,
};

function calculateTimeLeft(targetDate: string) {
  const difference = new Date(targetDate).getTime() - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isExpired: true,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
    isExpired: false,
  };
}

export function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState(initialState);

  useEffect(() => {
    const updateCountdown = () => {
      setTimeLeft(calculateTimeLeft(targetDate));
    };

    // محاسبه‌ی اولیه به‌صورت غیرهم‌زمان
    const timeout = setTimeout(updateCountdown, 0);

    const interval = setInterval(updateCountdown, 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [targetDate]);

  return timeLeft;
}
