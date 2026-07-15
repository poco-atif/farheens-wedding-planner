'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Clock } from 'lucide-react';

interface BookingCategory {
  name: string;
  total: number;
  confirmed: number;
  pending: number;
  overdue: number;
}

interface BookingStatusProps {
  categories: BookingCategory[];
}

export function BookingStatus({ categories }: BookingStatusProps) {
  const totalBookings = categories.reduce((sum, cat) => sum + cat.total, 0);
  const confirmedBookings = categories.reduce((sum, cat) => sum + cat.confirmed, 0);
  const pendingBookings = categories.reduce((sum, cat) => sum + cat.pending, 0);
  const overdueBookings = categories.reduce((sum, cat) => sum + cat.overdue, 0);

  const progressPercent = Math.round((confirmedBookings / totalBookings) * 100);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Booking Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Progress Bar */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Overall Progress</span>
                <span className="text-sm font-bold text-emerald-600">{progressPercent}%</span>
              </div>
              <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-500 to-gold-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="text-xs text-slate-600 dark:text-slate-400">Total</p>
                <p className="text-2xl font-bold text-blue-600">{totalBookings}</p>
              </div>
              <div className="text-center p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto mb-1" />
                <p className="text-xs text-slate-600 dark:text-slate-400">Confirmed</p>
                <p className="text-2xl font-bold text-green-600">{confirmedBookings}</p>
              </div>
              <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                <Clock className="w-4 h-4 text-yellow-600 mx-auto mb-1" />
                <p className="text-xs text-slate-600 dark:text-slate-400">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">{pendingBookings}</p>
              </div>
              <div className="text-center p-3 bg-red-50 dark:bg-red-950 rounded-lg">
                <AlertCircle className="w-4 h-4 text-red-600 mx-auto mb-1" />
                <p className="text-xs text-slate-600 dark:text-slate-400">Overdue</p>
                <p className="text-2xl font-bold text-red-600">{overdueBookings}</p>
              </div>
            </div>

            {/* Category Breakdown */}
            <div className="space-y-2 mt-4">
              <p className="text-sm font-semibold">By Category</p>
              {categories.map((cat, idx) => {
                const catProgress = Math.round((cat.confirmed / cat.total) * 100);
                return (
                  <div key={idx}>
                    <div className="flex justify-between text-xs mb-1">
                      <span>{cat.name}</span>
                      <span className="font-semibold">{catProgress}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-emerald-500 to-gold-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${catProgress}%` }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
