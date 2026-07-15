'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Plus, Phone, Mail } from 'lucide-react';

export default function GuestsPage() {
  const guests = [
    { id: 1, name: 'Ayesha Khan', side: 'bride', rsvp: 'accepted', food: 'vegetarian' },
    { id: 2, name: 'Imran Ali', side: 'groom', rsvp: 'pending', food: 'non-vegetarian' },
    { id: 3, name: 'Sara Begum', side: 'bride', rsvp: 'declined', food: 'vegetarian' },
    { id: 4, name: 'Omar Sheikh', side: 'groom', rsvp: 'accepted', food: 'non-vegetarian' },
  ];

  const stats = {
    total: guests.length,
    confirmed: guests.filter((g) => g.rsvp === 'accepted').length,
    pending: guests.filter((g) => g.rsvp === 'pending').length,
    declined: guests.filter((g) => g.rsvp === 'declined').length,
  };

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold font-display text-slate-900 dark:text-white">Guest Management</h1>
        <Button size="lg" className="gap-2">
          <Plus className="w-4 h-4" />
          Add Guest
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Total Guests</p>
            <p className="text-3xl font-bold text-blue-600">{stats.total}</p>
          </CardContent>
        </Card>
        <Card className="bg-green-50 dark:bg-green-950 border-0">
          <CardContent className="p-6">
            <p className="text-sm text-green-700 dark:text-green-400 mb-1">Confirmed</p>
            <p className="text-3xl font-bold text-green-600">{stats.confirmed}</p>
          </CardContent>
        </Card>
        <Card className="bg-yellow-50 dark:bg-yellow-950 border-0">
          <CardContent className="p-6">
            <p className="text-sm text-yellow-700 dark:text-yellow-400 mb-1">Pending</p>
            <p className="text-3xl font-bold text-yellow-600">{stats.pending}</p>
          </CardContent>
        </Card>
        <Card className="bg-red-50 dark:bg-red-950 border-0">
          <CardContent className="p-6">
            <p className="text-sm text-red-700 dark:text-red-400 mb-1">Declined</p>
            <p className="text-3xl font-bold text-red-600">{stats.declined}</p>
          </CardContent>
        </Card>
      </div>

      {/* Guests Table */}
      <Card>
        <CardHeader>
          <CardTitle>Guests List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left py-3 px-4 font-semibold">Name</th>
                  <th className="text-left py-3 px-4 font-semibold">Side</th>
                  <th className="text-left py-3 px-4 font-semibold">RSVP Status</th>
                  <th className="text-left py-3 px-4 font-semibold">Food Preference</th>
                  <th className="text-left py-3 px-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {guests.map((guest, idx) => (
                  <motion.tr
                    key={guest.id}
                    className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <td className="py-3 px-4">{guest.name}</td>
                    <td className="py-3 px-4">
                      <span className="text-sm font-medium capitalize">{guest.side}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          guest.rsvp === 'accepted'
                            ? 'bg-green-100 text-green-700 dark:bg-green-950'
                            : guest.rsvp === 'pending'
                            ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950'
                            : 'bg-red-100 text-red-700 dark:bg-red-950'
                        }`}
                      >
                        {guest.rsvp}
                      </span>
                    </td>
                    <td className="py-3 px-4 capitalize text-sm">{guest.food}</td>
                    <td className="py-3 px-4 flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Mail className="w-4 h-4" />
                      </Button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
