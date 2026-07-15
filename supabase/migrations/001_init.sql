-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  role VARCHAR(50) DEFAULT 'family_member',
  avatar_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create wedding_events table
CREATE TABLE IF NOT EXISTS wedding_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  description TEXT,
  location VARCHAR(255),
  color_gradient VARCHAR(100),
  icon VARCHAR(50),
  is_archived BOOLEAN DEFAULT FALSE,
  "order" INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create tasks table
CREATE TABLE IF NOT EXISTS tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID REFERENCES wedding_events(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(100),
  priority VARCHAR(50) DEFAULT 'medium',
  due_date DATE,
  status VARCHAR(50) DEFAULT 'not_started',
  completion_percent INT DEFAULT 0,
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create task_assignments table
CREATE TABLE IF NOT EXISTS task_assignments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create checklist_items table
CREATE TABLE IF NOT EXISTS checklist_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
  text VARCHAR(500) NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  assigned_to UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create task_comments table
CREATE TABLE IF NOT EXISTS task_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  text TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create shopping_items table
CREATE TABLE IF NOT EXISTS shopping_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID REFERENCES wedding_events(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100),
  quantity INT DEFAULT 1,
  unit VARCHAR(50),
  budget DECIMAL(10, 2),
  actual_price DECIMAL(10, 2),
  store VARCHAR(255),
  status VARCHAR(50) DEFAULT 'pending',
  assigned_to UUID REFERENCES users(id),
  receipt_url TEXT,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create budget_entries table
CREATE TABLE IF NOT EXISTS budget_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID REFERENCES wedding_events(id) ON DELETE CASCADE,
  category VARCHAR(100) NOT NULL,
  budgeted_amount DECIMAL(12, 2),
  actual_amount DECIMAL(12, 2) DEFAULT 0,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create guests table
CREATE TABLE IF NOT EXISTS guests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  phone VARCHAR(20),
  side VARCHAR(50),
  relation VARCHAR(100),
  rsvp_status VARCHAR(50) DEFAULT 'pending',
  food_preference VARCHAR(100),
  plus_ones INT DEFAULT 0,
  invitation_sent BOOLEAN DEFAULT FALSE,
  sent_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create vendors table
CREATE TABLE IF NOT EXISTS vendors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100),
  phone VARCHAR(20),
  email VARCHAR(255),
  address TEXT,
  rating DECIMAL(3, 1),
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create vendor_bookings table
CREATE TABLE IF NOT EXISTS vendor_bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  vendor_id UUID REFERENCES vendors(id) ON DELETE CASCADE,
  event_id UUID REFERENCES wedding_events(id) ON DELETE CASCADE,
  category VARCHAR(100),
  status VARCHAR(50) DEFAULT 'not_booked',
  booking_date DATE,
  contract_signed BOOLEAN DEFAULT FALSE,
  advance_paid DECIMAL(12, 2) DEFAULT 0,
  balance_due DECIMAL(12, 2) DEFAULT 0,
  final_payment_due DATE,
  contact_person VARCHAR(255),
  contact_phone VARCHAR(20),
  trial_scheduled DATE,
  contract_url TEXT,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX idx_tasks_event_id ON tasks(event_id);
CREATE INDEX idx_tasks_status ON tasks(status);
CREATE INDEX idx_tasks_due_date ON tasks(due_date);
CREATE INDEX idx_shopping_items_event_id ON shopping_items(event_id);
CREATE INDEX idx_shopping_items_status ON shopping_items(status);
CREATE INDEX idx_budget_entries_event_id ON budget_entries(event_id);
CREATE INDEX idx_guests_rsvp_status ON guests(rsvp_status);
CREATE INDEX idx_vendor_bookings_status ON vendor_bookings(status);
CREATE INDEX idx_vendor_bookings_vendor_id ON vendor_bookings(vendor_id);

-- Insert sample data (optional)
INSERT INTO wedding_events (name, date, description, location, color_gradient, icon, "order")
VALUES 
  ('Mehendi', '2026-12-18', 'Mehendi celebration with family and friends', 'Home', 'from-emerald-400 to-green-600', '💚', 1),
  ('Nikah', '2026-12-19', 'Official wedding ceremony', 'Mosque', 'from-gold-400 to-yellow-600', '💛', 2),
  ('Baraat & Reception', '2026-12-20', 'Groom arrival and reception party', 'Banquet Hall', 'from-emerald-600 to-gold-500', '🎉', 3),
  ('Walima', '2026-12-21', 'Post-wedding celebration', 'Banquet Hall', 'from-pink-400 to-rose-600', '💕', 4);
