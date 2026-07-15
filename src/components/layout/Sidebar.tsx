'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Menu,
  X,
  Home,
  Calendar,
  ShoppingBag,
  DollarSign,
  Users,
  Zap,
  Settings,
  LogOut,
} from 'lucide-react';
import { motion } from 'framer-motion';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Events', href: '/events', icon: Calendar },
  { name: 'Tasks', href: '/tasks', icon: Zap },
  { name: 'Shopping', href: '/shopping', icon: ShoppingBag },
  { name: 'Budget', href: '/budget', icon: DollarSign },
  { name: 'Guests', href: '/guests', icon: Users },
  { name: 'Vendors', href: '/vendors', icon: Zap },
  { name: 'Bookings', href: '/bookings', icon: Calendar },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const sidebarVariants = {
    hidden: { x: '-100%' },
    visible: { x: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      {/* Mobile toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-40">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="text-emerald-700"
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        variants={sidebarVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-emerald-50 to-white dark:from-slate-900 dark:to-slate-950 border-r border-emerald-200 dark:border-emerald-800 z-40 lg:relative lg:translate-x-0 overflow-y-auto"
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-gold-500 bg-clip-text text-transparent mb-8">
            💍 Farheen's Wedding
          </h1>

          <nav className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      isActive
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="absolute bottom-6 left-6 right-6 space-y-2 border-t border-emerald-200 dark:border-emerald-800 pt-6">
          <Link href="/settings">
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </Link>
          <Button variant="ghost" className="w-full justify-start text-red-600">
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </motion.aside>
    </>
  );
}
