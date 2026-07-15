import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { formatDistanceToNow, differenceInDays, isPast } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getWeddingDaysRemaining(weddingDate: string): number {
  return differenceInDays(new Date(weddingDate), new Date());
}

export function getWeddingWeeksRemaining(weddingDate: string): number {
  return Math.ceil(getWeddingDaysRemaining(weddingDate) / 7);
}

export function getPlanningProgressPercent(weddingDate: string): number {
  const today = new Date();
  const wedding = new Date(weddingDate);
  const yearAgo = new Date(wedding);
  yearAgo.setFullYear(yearAgo.getFullYear() - 1);
  
  const totalDays = differenceInDays(wedding, yearAgo);
  const daysElapsed = differenceInDays(today, yearAgo);
  const percent = Math.min(100, Math.round((daysElapsed / totalDays) * 100));
  
  return percent;
}

export function getUrgencyColor(daysUntilDue: number): string {
  if (daysUntilDue < 0) return 'text-red-600';
  if (daysUntilDue < 7) return 'text-red-600';
  if (daysUntilDue < 14) return 'text-orange-600';
  if (daysUntilDue < 30) return 'text-yellow-600';
  return 'text-green-600';
}

export function getUrgencyBgColor(daysUntilDue: number): string {
  if (daysUntilDue < 0) return 'bg-red-100 dark:bg-red-950';
  if (daysUntilDue < 7) return 'bg-red-100 dark:bg-red-950';
  if (daysUntilDue < 14) return 'bg-orange-100 dark:bg-orange-950';
  if (daysUntilDue < 30) return 'bg-yellow-100 dark:bg-yellow-950';
  return 'bg-green-100 dark:bg-green-950';
}

export function getVendorBookingUrgency(
  daysRemaining: number,
  category: string
): 'critical' | 'urgent' | 'high' | 'normal' {
  const leadTimes: { [key: string]: number } = {
    venue: 270,
    catering: 240,
    photographer: 180,
    videographer: 180,
    makeup_artist: 120,
    wedding_clothes: 120,
    decoration: 150,
    mehendi_artist: 90,
    dj_sound: 120,
    lighting: 120,
    flowers: 30,
    jeweler: 90,
    invitation_cards: 120,
    transportation: 60,
    accommodation: 180,
  };

  const requiredLeadTime = leadTimes[category.toLowerCase()] || 90;
  const daysUntilIdealBooking = daysRemaining - requiredLeadTime;

  if (daysUntilIdealBooking < -30) return 'critical';
  if (daysUntilIdealBooking < 0) return 'urgent';
  if (daysUntilIdealBooking < 14) return 'high';
  return 'normal';
}

export function formatTime(date: string): string {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

// ✅ New helper using isPast
export function getStatusLabel(date: string): string {
  const target = new Date(date);
  if (isPast(target)) {
    return '⚠️ Past Due';
  }
  return '✅ Upcoming';
}
