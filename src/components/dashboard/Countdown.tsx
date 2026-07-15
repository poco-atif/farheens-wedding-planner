'use client';

import { useEffect, useState } from 'react';
import { getWeddingDaysRemaining, getWeddingWeeksRemaining } from '@/lib/utils';
import { motion } from 'framer-motion';

const WEDDING_DATE = process.env.NEXT_PUBLIC_WEDDING_DATE || '2027-01-15';

export default function Countdown() {
  const [daysRemaining, setDaysRemaining] = useState<number>(0);
  const [weeksRemaining, setWeeksRemaining] = useState<number>(0);

  useEffect(() => {
    setDaysRemaining(getWeddingDaysRemaining(WEDDING_DATE));
    setWeeksRemaining(getWeddingWeeksRemaining(WEDDING_DATE));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-center"
    >
      <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-300 mb-2">
        Wedding Countdown
      </h2>
      <p className="text-lg text-slate-700 dark:text-slate-300">
        {daysRemaining} days ({weeksRemaining} weeks) remaining
      </p>
    </motion.div>
  );
}
