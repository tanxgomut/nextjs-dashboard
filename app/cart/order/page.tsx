"use client";
import { useCartStore } from '@/app/store/cartStore';
export default function Order() {
    const cartItems = useCartStore((state: any) => state.cartItems);
  return (
    <div>
      🛒 Cart: ({cartItems.length})
    </div>
  )
}