'use client';

import { useCart } from "@/store/cart";
import Image from "next/image";

export default function CartPage() {
  const { items, removeFromCart, clearCart } = useCart();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">🛒 Your Cart</h1>

      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border p-4 rounded shadow"
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">
                    ${item.price} × {item.quantity} = ${item.price * item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right space-y-4">
            <h2 className="text-xl font-bold">Total: ${total}</h2>
            <button
              onClick={clearCart}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
