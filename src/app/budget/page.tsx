'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { category: 'Venue', allocated: 150000, spent: 150000 },
  { category: 'Catering', allocated: 250000, spent: 50000 },
  { category: 'Decorations', allocated: 100000, spent: 20000 },
  { category: 'Photography', allocated: 80000, spent: 30000 },
];

export default function BudgetPage() {
  const totalAllocated = data.reduce((sum, item) => sum + item.allocated, 0);
  const totalSpent = data.reduce((sum, item) => sum + item.spent, 0);
  const remaining = totalAllocated - totalSpent;
  const percentSpent = Math.round((totalSpent / totalAllocated) * 100);

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold font-display text-slate-900 dark:text-white">Budget Management</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900 border-0">
          <CardContent className="p-6">
            <p className="text-sm text-emerald-700 dark:text-emerald-400 mb-1">Total Allocated</p>
            <p className="text-3xl font-bold text-emerald-600">₹{(totalAllocated / 100000).toFixed(1)}L</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-gold-50 to-gold-100 dark:from-gold-950 dark:to-gold-900 border-0">
          <CardContent className="p-6">
            <p className="text-sm text-gold-700 dark:text-gold-400 mb-1">Total Spent</p>
            <p className="text-3xl font-bold text-gold-600">₹{(totalSpent / 100000).toFixed(1)}L</p>
            <p className="text-xs text-gold-600 mt-1">{percentSpent}% of budget</p>
          </CardContent>
        </Card>
        <Card className={`bg-gradient-to-br ${remaining > 0 ? 'from-green-50 to-green-100 dark:from-green-950 dark:to-green-900' : 'from-red-50 to-red-100 dark:from-red-950 dark:to-red-900'} border-0`}>
          <CardContent className="p-6">
            <p className={`text-sm ${remaining > 0 ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'} mb-1`}>
              Remaining
            </p>
            <p className={`text-3xl font-bold ${remaining > 0 ? 'text-green-600' : 'text-red-600'}`}>
              ₹{(remaining / 100000).toFixed(1)}L
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Budget by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="allocated" fill="#10b981" />
              <Bar dataKey="spent" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Category Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Category Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {data.map((item, idx) => {
            const percentSpent = Math.round((item.spent / item.allocated) * 100);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{item.category}</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {percentSpent}%
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-emerald-500 to-gold-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${percentSpent}%` }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
                <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 mt-1">
                  <span>₹{(item.spent / 1000).toFixed(0)}k</span>
                  <span>₹{(item.allocated / 1000).toFixed(0)}k</span>
                </div>
              </motion.div>
            );
          })}
        </CardContent>
      </Card>
    </motion.div>
  );
}
