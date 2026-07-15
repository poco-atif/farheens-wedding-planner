'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Task } from '@/types';
import { Zap, Clock, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface TaskBoardProps {
  tasks: Task[];
}

export function TaskBoard({ tasks }: TaskBoardProps) {
  const urgentTasks = tasks.filter((t) => t.priority === 'critical' || t.priority === 'high');
  const todayTasks = tasks.filter((t) => t.due_date === new Date().toISOString().split('T')[0]);
  const completedTasks = tasks.filter((t) => t.status === 'completed').length;

  const stats = [
    { icon: Zap, label: 'Urgent', value: urgentTasks.length, color: 'text-red-600', bg: 'bg-red-50 dark:bg-red-950' },
    { icon: Clock, label: 'Today', value: todayTasks.length, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-950' },
    { icon: AlertCircle, label: 'Completed', value: completedTasks, color: 'text-green-600', bg: 'bg-green-50 dark:bg-green-950' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className={`${stat.bg} border-0`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">{stat.label}</p>
                    <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                  </div>
                  <Icon className={`w-8 h-8 ${stat.color} opacity-50`} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
