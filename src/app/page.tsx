'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-gold-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <motion.div
          className="text-center max-w-2xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Section */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold font-display bg-gradient-to-r from-emerald-600 to-gold-500 bg-clip-text text-transparent">
              💍 Farheen's Wedding Planner
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400">
              A premium, elegant dashboard to plan every detail of a magical celebration
            </p>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              '📅 Event Management',
              '✅ Smart Task Tracking',
              '🛍️ Shopping Planner',
              '💰 Budget Tracking',
              '👥 Guest Management',
              '🎭 Vendor Booking',
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="border-emerald-200 dark:border-emerald-800 hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 text-center font-semibold text-slate-700 dark:text-slate-300">
                    {feature}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/dashboard">
              <Button size="lg" className="gap-2 text-lg">
                Go to Dashboard <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
