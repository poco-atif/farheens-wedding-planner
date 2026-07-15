'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient'; // make sure you have this helper set up
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Plus, Trash2, Edit } from 'lucide-react';

interface Task {
  id: string;
  name: string;
  description: string;
  priority: string;
  status: string;
  due_date: string;
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data, error } = await supabase
        .from('tasks')
        .select('id, name, description, priority, status, due_date')
        .order('due_date', { ascending: true });

      if (error) {
        console.error('Error fetching tasks:', error.message);
      } else {
        setTasks(data || []);
      }
    };

    fetchTasks();
  }, []);

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold font-display text-slate-900 dark:text-white">
          Tasks
        </h1>
        <Button size="lg" className="gap-2">
          <Plus className="w-4 h-4" />
          Add Task
        </Button>
      </div>

      {tasks.length === 0 ? (
        <p className="text-slate-500 dark:text-slate-400">No tasks found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((task, idx) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{task.name}</CardTitle>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex gap-2">
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        task.priority === 'critical'
                          ? 'bg-red-100 text-red-700 dark:bg-red-950'
                          : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950'
                      }`}
                    >
                      {task.priority}
                    </span>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950">
                      {task.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Due: {task.due_date}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
