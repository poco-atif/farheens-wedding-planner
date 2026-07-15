export type UserRole = 'admin' | 'family_member' | 'volunteer';

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  role: UserRole;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface WeddingEvent {
  id: string;
  name: string;
  date: string;
  description?: string;
  location?: string;
  color_gradient: string;
  icon: string;
  is_archived: boolean;
  order: number;
  created_at: string;
  updated_at: string;
}

export interface Task {
  id: string;
  event_id: string;
  title: string;
  description?: string;
  category: string;
  assigned_to: string[];
  priority: 'critical' | 'high' | 'medium' | 'low';
  due_date: string;
  status: 'not_started' | 'in_progress' | 'waiting' | 'blocked' | 'completed' | 'cancelled';
  completion_percent: number;
  checklist: ChecklistItem[];
  comments: TaskComment[];
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
  assigned_to?: string;
}

export interface TaskComment {
  id: string;
  user_id: string;
  text: string;
  created_at: string;
}

export interface ShoppingItem {
  id: string;
  event_id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  budget: number;
  actual_price?: number;
  store?: string;
  status: 'pending' | 'purchased' | 'returned';
  assigned_to?: string;
  receipt_url?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface BudgetEntry {
  id: string;
  event_id: string;
  category: string;
  budgeted_amount: number;
  actual_amount: number;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface Guest {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  side: 'bride' | 'groom' | 'both';
  relation: string;
  rsvp_status: 'pending' | 'confirmed' | 'declined';
  food_preference?: string;
  plus_ones: number;
  invitation_sent: boolean;
  sent_date?: string;
  created_at: string;
  updated_at: string;
}

export interface Vendor {
  id: string;
  name: string;
  category: string;
  phone: string;
  email?: string;
  address?: string;
  rating?: number;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface VendorBooking {
  id: string;
  vendor_id: string;
  event_id: string;
  category: string;
  status: 'not_booked' | 'enquired' | 'negotiating' | 'booked' | 'confirmed' | 'cancelled';
  booking_date?: string;
  contract_signed: boolean;
  advance_paid: number;
  balance_due: number;
  final_payment_due?: string;
  contact_person: string;
  contact_phone: string;
  trial_scheduled?: string;
  fitting_dates?: string[];
  contract_url?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
}
