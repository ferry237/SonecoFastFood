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
  updateQuantity: (name: string, newQuantity: number) => void; // ✅ nouveau
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],

  addToCart: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.name === item.name);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.name === item.name
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return { items: [...state.items, { ...item, quantity: 1 }] };
    }),

  removeFromCart: (name) =>
    set((state) => ({
      items: state.items.filter((i) => i.name !== name),
    })),

  updateQuantity: (name, newQuantity) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.name === name
          ? { ...i, quantity: Math.max(newQuantity, 1) } // empêche 0
          : i
      ),
    })),

  clearCart: () => set({ items: [] }),
}));
