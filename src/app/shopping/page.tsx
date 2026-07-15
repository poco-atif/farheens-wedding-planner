'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Plus, ShoppingBag, Check } from 'lucide-react';

export default function ShoppingPage() {
  const items = [
    { id: 1, name: 'Bride Lehenga', category: 'Clothes', budget: 200000, spent: 180000, status: 'purchased' },
    { id: 2, name: 'Gold Necklace', category: 'Jewelry', budget: 150000, spent: 155000, status: 'purchased' },
    { id: 3, name: 'Stage Flowers', category: 'Decorations', budget: 50000, spent: 0, status: 'pending' },
    { id: 4, name: 'Reception Catering', category: 'Food', budget: 250000, spent: 0, status: 'pending' },
  ];

  const categories = ['Clothes', 'Jewelry', 'Decorations', 'Food', 'Return Gifts', 'Wedding Cards'];
  const purchased = items.filter((i) => i.status === 'purchased').length;
  const pending = items.filter((i) => i.status === 'pending').length;

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold font-display text-slate-900 dark:text-white">Shopping Planner</h1>
        <Button size="lg" className="gap-2">
          <Plus className="w-4 h-4" />
          Add Item
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Total Items</p>
                <p className="text-3xl font-bold text-emerald-600">{items.length}</p>
              </div>
              <ShoppingBag className="w-8 h-8 text-emerald-600 opacity-50" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-green-50 dark:bg-green-950 border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Purchased</p>
                <p className="text-3xl font-bold text-green-600">{purchased}</p>
              </div>
              <Check className="w-8 h-8 text-green-600 opacity-50" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-yellow-50 dark:bg-yellow-950 border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Pending</p>
                <p className="text-3xl font-bold text-yellow-600">{pending}</p>
              </div>
              <ShoppingBag className="w-8 h-8 text-yellow-600 opacity-50" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Card key={cat} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <p className="font-medium text-slate-700 dark:text-slate-300">{cat}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Items */}
      <div className="space-y-4">
        {items.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.category}</p>
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      item.status === 'purchased'
                        ? 'bg-green-100 text-green-700 dark:bg-green-950'
                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950'
                    }`}
                  >
                    {item.status === 'purchased' ? '✓ Purchased' : 'Pending'}
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Budget</p>
                    <p className="text-lg font-bold text-emerald-600">₹{item.budget.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Spent</p>
                    <p className="text-lg font-bold text-gold-600">₹{item.spent.toLocaleString()}</p>
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
