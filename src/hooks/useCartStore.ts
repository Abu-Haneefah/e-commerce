import { create } from "zustand";

type CartState = {
  cart: {
    lineItems: any[];
    subtotal: { amount: string };
  };
  isLoading: boolean;
  counter: number;
  getCart: () => void;
  addItem: (productId: string, variantId: string, quantity: number) => void;
  removeItem: (itemId: string) => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: {
    lineItems: [],
    subtotal: { amount: "0.00" },
  },
  isLoading: false,
  counter: 0,

  getCart: () => {
    // Mock getCart function
    set({
      cart: { lineItems: [], subtotal: { amount: "0.00" } },
      isLoading: false,
      counter: 0,
    });
  },

  addItem: async (productId, variantId, quantity) => {
    set((state) => ({ ...state, isLoading: true }));

    // Simulate API call delay
    setTimeout(() => {
      set((state) => {
        const newCart = { ...state.cart };
        const existingItem = newCart.lineItems.find(
          (item) => item.catalogReference.catalogItemId === productId
        );

        // If item already exists, update its quantity, else add new item
        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          newCart.lineItems.push({
            _id: Math.random().toString(),
            quantity: quantity,
            catalogReference: {
              catalogItemId: productId,
              options: { variantId },
            },
          });
        }

        const newCounter = newCart.lineItems.length;
        return {
          cart: newCart,
          counter: newCounter,
          isLoading: false,
        };
      });
    }, 500);
  },

  removeItem: async (itemId) => {
    set((state) => ({ ...state, isLoading: true }));

    // Simulate API call delay
    setTimeout(() => {
      set((state) => {
        const newCart = { ...state.cart };
        newCart.lineItems = newCart.lineItems.filter(
          (item) => item._id !== itemId
        );
        const newCounter = newCart.lineItems.length;

        return {
          cart: newCart,
          counter: newCounter,
          isLoading: false,
        };
      });
    }, 500);
  },
}));
