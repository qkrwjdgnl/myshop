import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Product = {
  id: number
  name: string
  price: number
  img: string
}

type CartState = {
  items: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addToCart: (product) =>
        set((state) => ({
          items: [...state.items, product],
        })),
      removeFromCart: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
    }),
    {
      name: 'myshop-cart-storage', // localStorage key 이름
    }
  )
)
