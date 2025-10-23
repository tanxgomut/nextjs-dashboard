"use client";
import Nav from './nav/page';
import { useCartStore } from '@/app/store/cartStore';

export default function Page() {
    const addToCart = useCartStore((state: any) => state.addToCart);
    const product = { id: 1, name: 'Laptop' };
  return (
    <div>
        <Nav />
        <button onClick={() => addToCart(product)} className='py-2 px-4 rounded-md bg-slate-500'>insert cart</button>
    </div>
  )
}
