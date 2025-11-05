// 📁 /lib/cartStore.ts
import { create } from "zustand";

interface CartItem {
  name: string;
  prix: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (name: string) => void;
  updateQuantity: (name: string, newQuantity: number) => void;
  clearCart: () => void;
  lastAdded: number; // ✅ sert à déclencher une animation quand ça change
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  lastAdded: 0,

  addToCart: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.name === item.name);
      let updatedItems;
      if (existing) {
        updatedItems = state.items.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        updatedItems = [...state.items, { ...item, quantity: 1 }];
      }
      return { items: updatedItems, lastAdded: state.lastAdded + 1 }; // ✅ déclenche animation
    }),

  removeFromCart: (name) =>
    set((state) => ({
      items: state.items.filter((i) => i.name !== name),
    })),

  updateQuantity: (name, newQuantity) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.name === name
          ? { ...i, quantity: Math.max(newQuantity, 1) }
          : i
      ),
    })),

  clearCart: () => set({ items: [], lastAdded: 0 }),
}));
