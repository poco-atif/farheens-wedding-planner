'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface BudgetData {
  category: string;
  allocated: number;
  spent: number;
}

interface BudgetChartProps {
  data: BudgetData[];
}

export function BudgetChart({ data }: BudgetChartProps) {
  const totalAllocated = data.reduce((sum, item) => sum + item.allocated, 0);
  const totalSpent = data.reduce((sum, item) => sum + item.spent, 0);
  const remaining = totalAllocated - totalSpent;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Budget Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <p className="text-sm text-slate-500 dark:text-slate-400">Allocated</p>
              <p className="text-2xl font-bold text-emerald-600">₹{(totalAllocated / 100000).toFixed(1)}L</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-slate-500 dark:text-slate-400">Spent</p>
              <p className="text-2xl font-bold text-gold-600">₹{(totalSpent / 100000).toFixed(1)}L</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-slate-500 dark:text-slate-400">Remaining</p>
              <p className={`text-2xl font-bold ${remaining > 0 ? 'text-green-600' : 'text-red-600'}`}>
                ₹{(remaining / 100000).toFixed(1)}L
              </p>
            </div>
          </div>
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
    </motion.div>
  );
}
