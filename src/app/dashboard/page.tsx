'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  getWeddingDaysRemaining,
  getWeddingWeeksRemaining,
  getPlanningProgressPercent,
} from '@/lib/utils';
import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle2,AlertCircle, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Countdown } from '@/components/dashboard/Countdown';
import { ProgressRing } from '@/components/dashboard/ProgressRing';
import { TaskBoard } from '@/components/dashboard/TaskBoard';
import { BookingStatus } from '@/components/dashboard/BookingStatus';

const WEDDING_DATE = process.env.NEXT_PUBLIC_WEDDING_DATE || '2026-12-20';

export default function DashboardPage() {
  const [daysRemaining, setDaysRemaining] = useState(0);
  const [weeksRemaining, setWeeksRemaining] = useState(0);
  const [planningProgress, setPlanningProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDaysRemaining(getWeddingDaysRemaining(WEDDING_DATE));
    setWeeksRemaining(getWeddingWeeksRemaining(WEDDING_DATE));
    setPlanningProgress(getPlanningProgressPercent(WEDDING_DATE));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  if (!mounted) return null;

  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h1 className="text-5xl font-bold font-display text-slate-900 dark:text-white mb-2">
          💍 Welcome Back!
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Let's make Farheen's wedding magical ✨
        </p>
      </motion.div>

      {/* Countdown Widget */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <Card className="bg-gradient-to-br from-emerald-600 to-gold-500 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <Calendar className="w-12 h-12" />
              <div>
                <p className="text-sm opacity-90">Days Remaining</p>
                <p className="text-4xl font-bold">{daysRemaining}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gold-100 to-emerald-100 dark:from-slate-800 dark:to-slate-900 border-gold-300 dark:border-gold-700">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <Clock className="w-12 h-12 text-gold-600" />
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Weeks Left</p>
                <p className="text-4xl font-bold text-gold-600">{weeksRemaining}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-emerald-300 dark:border-emerald-700">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600" />
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Planning Progress
                </p>
                <p className="text-4xl font-bold text-emerald-600">{planningProgress}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Countdown Timer */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardContent className="p-6 text-center">
            <Countdown />
          </CardContent>
        </Card>
      </motion.div>

      {/* Progress Ring */}
      <motion.div variants={itemVariants} className="flex justify-center">
        <ProgressRing percent={planningProgress} />
      </motion.div>

      {/* Quick Stats Grid */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {[
          {
            icon: Zap,
            label: 'Urgent Tasks',
            value: '3',
            color: 'text-red-600',
            bg: 'bg-red-50 dark:bg-red-950',
          },
          {
            icon: Calendar,
            label: 'Today Tasks',
            value: '5',
            color: 'text-blue-600',
            bg: 'bg-blue-50 dark:bg-blue-950',
          },
          {
            icon: AlertCircle,
            label: 'Pending Bookings',
            value: '8',
            color: 'text-orange-600',
            bg: 'bg-orange-50 dark:bg-orange-950',
          },
          {
            icon: CheckCircle2,
            label: 'Events Ready',
            value: '2/4',
            color: 'text-green-600',
            bg: 'bg-green-50 dark:bg-green-950',
          },
        ].map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <Card key={idx} className={`${stat.bg} border-0`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                      {stat.label}
                    </p>
                    <p className={`text-3xl font-bold ${stat.color}`}>
                      {stat.value}
                    </p>
                  </div>
                  <Icon className={`w-8 h-8 ${stat.color} opacity-50`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </motion.div>

      {/* Task Board */}
      <motion.div variants={itemVariants}>
        <TaskBoard tasks={[]} />
      </motion.div>

      {/* Booking Status */}
      <motion.div variants={itemVariants}>
        <BookingStatus
          categories={[
            { name: 'Venue', total: 1, confirmed: 1, pending: 0, overdue: 0 },
            { name: 'Catering', total: 1, confirmed: 0, pending: 1, overdue: 0 },
            { name: 'Photography', total: 1, confirmed: 1, pending: 0, overdue: 0 },
            { name: 'Makeup', total: 1, confirmed: 0, pending: 1, overdue: 0 },
          ]}
        />
      </motion.div>

      {/* CTA */}
      <motion.div variants={itemVariants} className="text-center py-8">
        <Button size="lg" className="mr-4">
          Add New Event
        </Button>
        <Button variant="outline" size="lg">
          View All Tasks
        </Button>
      </motion.div>
    </motion.div>
  );
}
