'use client';

import { useEffect, useState } from 'react';
import { getWeddingDaysRemaining, getWeddingWeeksRemaining } from '@/lib/utils';
import { motion } from 'framer-motion';

const WEDDING_DATE = process.env.NEXT_PUBLIC_WEDDING_DATE || '2027-01-15';

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateCountdown = () => {
      const weddingDate = new Date(WEDDING_DATE);
      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Wedding Countdown</p>
      <p className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-gold-500 bg-clip-text text-transparent font-display">
        {timeLeft}
      </p>
    </motion.div>
  );
}
