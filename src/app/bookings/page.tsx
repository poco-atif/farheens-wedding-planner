'use client';

import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';

export default function BookingsPage() {
  const bookings = [
    {
      id: 1,
      vendor: 'Royal Caterers',
      category: 'Catering',
      status: 'confirmed',
      advance: 50000,
      balance: 200000,
      dueDate: '2027-01-10',
    },
    {
      id: 2,
      vendor: 'Dream Decor',
      category: 'Decoration',
      status: 'booked',
      advance: 20000,
      balance: 30000,
      dueDate: '2027-01-05',
    },
    {
      id: 3,
      vendor: 'Glamour Studio',
      category: 'Makeup Artist',
      status: 'negotiating',
      advance: 0,
      balance: 25000,
      dueDate: '2026-12-15',
    },
  ];

  const stats = {
    total: bookings.length,
    confirmed: bookings.filter((b) => b.status === 'confirmed').length,
    pending: bookings.filter((b) => b.status !== 'confirmed').length,
  };

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold font-display text-slate-900 dark:text-white">Vendor Bookings</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Total Bookings</p>
            <p className="text-3xl font-bold text-blue-600">{stats.total}</p>
          </CardContent>
        </Card>
        <Card className="bg-green-50 dark:bg-green-950 border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-700 dark:text-green-400 mb-1">Confirmed</p>
                <p className="text-3xl font-bold text-green-600">{stats.confirmed}</p>
              </div>
              <CheckCircle2 className="w-8 h-8 text-green-600 opacity-50" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-yellow-50 dark:bg-yellow-950 border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-yellow-700 dark:text-yellow-400 mb-1">Pending</p>
                <p className="text-3xl font-bold text-yellow-600">{stats.pending}</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-600 opacity-50" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bookings */}
      <div className="space-y-4">
        {bookings.map((booking, idx) => (
          <motion.div
            key={booking.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{booking.vendor}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{booking.category}</p>
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      booking.status === 'confirmed'
                        ? 'bg-green-100 text-green-700 dark:bg-green-950'
                        : booking.status === 'booked'
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-950'
                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950'
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Advance</p>
                    <p className="font-bold text-emerald-600">₹{booking.advance.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Balance</p>
                    <p className="font-bold text-gold-600">₹{booking.balance.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Due Date</p>
                    <p className="font-bold">{booking.dueDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
