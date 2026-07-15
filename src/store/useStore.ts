import { create } from 'zustand';
import { User, WeddingEvent, Task } from '@/types';

interface StoreState {
  user: User | null;
  weddingEvents: WeddingEvent[];
  selectedEventId: string | null;
  tasks: Task[];
  isLoading: boolean;
  error: string | null;
  setUser: (user: User | null) => void;
  setWeddingEvents: (events: WeddingEvent[]) => void;
  setSelectedEventId: (eventId: string) => void;
  setTasks: (tasks: Task[]) => void;
  setIsLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  addWeddingEvent: (event: WeddingEvent) => void;
  removeWeddingEvent: (eventId: string) => void;
  updateWeddingEvent: (eventId: string, updates: Partial<WeddingEvent>) => void;
  addTask: (task: Task) => void;
  updateTask: (taskId: string, updates: Partial<Task>) => void;
  removeTask: (taskId: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  user: null,
  weddingEvents: [],
  selectedEventId: null,
  tasks: [],
  isLoading: false,
  error: null,
  setUser: (user) => set({ user }),
  setWeddingEvents: (events) => set({ weddingEvents: events }),
  setSelectedEventId: (eventId) => set({ selectedEventId: eventId }),
  setTasks: (tasks) => set({ tasks }),
  setIsLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
  addWeddingEvent: (event) =>
    set((state) => ({
      weddingEvents: [...state.weddingEvents, event],
    })),
  removeWeddingEvent: (eventId) =>
    set((state) => ({
      weddingEvents: state.weddingEvents.filter((e) => e.id !== eventId),
    })),
  updateWeddingEvent: (eventId, updates) =>
    set((state) => ({
      weddingEvents: state.weddingEvents.map((e) =>
        e.id === eventId ? { ...e, ...updates } : e
      ),
    })),
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),
  updateTask: (taskId, updates) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === taskId ? { ...t, ...updates } : t
      ),
    })),
  removeTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== taskId),
    })),
}));
