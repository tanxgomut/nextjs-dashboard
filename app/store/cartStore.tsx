import { create } from 'zustand';
export interface Product {
    id: number;
    name?: string;
}
export const useCartStore = create((set) => ({
    cartItems: [],
    addToCart: (product: Product) => {
        set((state: any) => {
            return { cartItems: [...state.cartItems, product] }
        })
    }
})) 