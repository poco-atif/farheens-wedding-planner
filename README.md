# 💍 Farheen's Wedding Planner

A premium, elegant wedding planning dashboard built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Supabase**. Designed to help manage every detail of a magical celebration with a sophisticated emerald and gold theme.

![Wedding Planner](https://img.shields.io/badge/Wedding%20Planner-v1.0-emerald?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎉 **Dashboard** - Real-time wedding countdown, progress tracking, and quick stats
- 📅 **Event Management** - Create and manage wedding events
- ✅ **Smart Task Tracking** - Priority-based task management with status tracking
- 🛍️ **Shopping Planner** - Budget-aware shopping list with category management
- 💰 **Budget Management** - Real-time budget tracking with visual charts
- 👥 **Guest Management** - RSVP tracking, food preferences, and communication
- 🎭 **Vendor Booking** - Vendor ratings, payment tracking, and booking status
- 📊 **Analytics** - Beautiful charts and progress rings
- 🎨 **Elegant UI** - Premium design with Framer Motion animations
- 🌙 **Dark Mode** - Full dark mode support
- 📱 **Responsive** - Mobile-first design

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS, Class Variance Authority
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Backend**: Supabase (PostgreSQL + Auth)
- **Charts**: Recharts
- **Icons**: Lucide React
- **Font**: Playfair Display (Headers), Inter (Body)

## 📋 Prerequisites

- Node.js 18+ and npm/yarn
- Supabase account
- Environment variables configured

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/poco-atif/farheens-wedding-planner.git
cd farheens-wedding-planner
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Wedding Date (ISO format)
NEXT_PUBLIC_WEDDING_DATE=2027-01-15
```

### 4. Setup Supabase Database

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Create a new project
3. Run the SQL migration:
   - Open SQL Editor
   - Copy and paste the contents of `supabase/migrations/init.sql`
   - Click "Execute"

### 5. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
src/
├── app/
│   ├── dashboard/         # Dashboard pages
│   ├── tasks/            # Task management
│   ├── shopping/         # Shopping planner
│   ├── budget/           # Budget tracking
│   ├── guests/           # Guest management
│   ├── vendors/          # Vendor management
│   ├── bookings/         # Booking tracking
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles
│   └── page.tsx          # Home page
├── components/
│   ├── ui/              # Reusable UI components
│   ├── layout/          # Layout components (Sidebar, Navbar)
│   └── dashboard/       # Dashboard-specific components
├── lib/
│   ├── supabaseClient.ts # Supabase client
│   └── utils.ts         # Utility functions
├── store/
│   └── useStore.ts      # Zustand state management
├── types/
│   └── index.ts         # TypeScript type definitions
└── tailwind.config.js   # Tailwind configuration
```

## 🎨 Color Scheme

- **Primary**: Emerald (#10b981)
- **Secondary**: Gold (#f59e0b)
- **Background**: White/Slate-950
- **Accents**: Various gradients and shades

## 📊 Database Schema

### Tables

- `users` - User accounts and roles
- `wedding_events` - Wedding events (Mehendi, Nikah, Baraat, etc.)
- `tasks` - Task management
- `shopping_items` - Shopping list
- `budget_entries` - Budget tracking
- `guests` - Guest list
- `vendors` - Vendor directory
- `vendor_bookings` - Booking records

## 🔑 Key Functions

### Date Utilities

```typescript
getWeddingDaysRemaining(date) // Returns days until wedding
getWeddingWeeksRemaining(date) // Returns weeks until wedding
getPlanningProgressPercent(date) // Returns planning progress %
getVendorBookingUrgency(days, category) // Returns booking urgency
```

### State Management

```typescript
const store = useStore();
store.setUser(user);
store.addWeddingEvent(event);
store.updateTask(taskId, updates);
```

## 📱 Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Landing page with features |
| Dashboard | `/dashboard` | Main dashboard with overview |
| Tasks | `/tasks` | Task management |
| Shopping | `/shopping` | Shopping planner |
| Budget | `/budget` | Budget tracking |
| Guests | `/guests` | Guest management |
| Vendors | `/vendors` | Vendor directory |
| Bookings | `/bookings` | Booking management |

## 🎯 Getting Started

1. **Set Wedding Date** - Update `NEXT_PUBLIC_WEDDING_DATE` in `.env.local`
2. **Add Events** - Create wedding events (Mehendi, Nikah, etc.)
3. **Create Tasks** - Add tasks for each event
4. **Manage Shopping** - Add items with budgets
5. **Add Guests** - Import or manually add guests
6. **Book Vendors** - Add vendors and track bookings
7. **Track Budget** - Monitor spending vs. allocated budget

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Add environment variables in Vercel dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_WEDDING_DATE`

### Other Platforms

Follow the standard Next.js deployment guides for Netlify, AWS, etc.

## 📝 License

MIT License - feel free to use for your own wedding planning!

## 💬 Support

For issues or suggestions, please open a GitHub issue.

---

**Made with 💚 and 💛 for Farheen's Wedding 💍**
