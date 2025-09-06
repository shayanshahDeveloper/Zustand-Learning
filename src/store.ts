// Getting from the zustand
import { create } from "zustand";

// define the type for store using typescript
type CounterStore = {
  count: number;
  increment: () => void;
  deccrement: () => void;
};

export const useCounter = create<CounterStore>((set) => ({
  // Initial Value or you can say state
  count: 0,

  increment: () => set((state) => ({ count: state.count + 1 })),

  // Taking the Initial Count and then using the set change the State of count
  deccrement: () => set((state) => ({ count: state.count - 1 })),
}));
