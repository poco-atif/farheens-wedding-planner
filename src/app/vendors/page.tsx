'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Plus, Phone, Star } from 'lucide-react';

export default function VendorsPage() {
  const vendors = [
    {
      id: 1,
      name: 'Royal Caterers',
      category: 'Catering',
      phone: '9876543211',
      rating: 5,
      advance: 50000,
      balance: 200000,
    },
    {
      id: 2,
      name: 'Dream Decor',
      category: 'Decoration',
      phone: '9123456789',
      rating: 4,
      advance: 20000,
      balance: 30000,
    },
    {
      id: 3,
      name: 'Glamour Studio',
      category: 'Makeup Artist',
      phone: '9988776644',
      rating: 5,
      advance: 10000,
      balance: 15000,
    },
    {
      id: 4,
      name: 'Lens Masters',
      category: 'Photography',
      phone: '9112233446',
      rating: 5,
      advance: 30000,
      balance: 40000,
    },
  ];

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold font-display text-slate-900 dark:text-white">Vendors</h1>
        <Button size="lg" className="gap-2">
          <Plus className="w-4 h-4" />
          Add Vendor
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {vendors.map((vendor, idx) => (
          <motion.div
            key={vendor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{vendor.name}</CardTitle>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{vendor.category}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(vendor.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  <a href={`tel:${vendor.phone}`} className="text-sm hover:text-emerald-600">
                    {vendor.phone}
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Advance Paid</p>
                    <p className="font-bold text-emerald-600">₹{(vendor.advance / 1000).toFixed(0)}k</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Balance Due</p>
                    <p className="font-bold text-gold-600">₹{(vendor.balance / 1000).toFixed(0)}k</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
