'use client'
import { useCart } from "@/store/cart";

export default function CartPage() {
  const { items, removeFromCart, clearCart } = useCart();
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border p-4 rounded shadow">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="font-semibold text-lg">{item.name}</h2>
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

          <div className="mt-8 text-right">
            <h2 className="text-xl font-bold mb-4">Total: ${total}</h2>

            {/* ✅ QR 코드 추가 */}
            <div className="mb-6">
              <p className="mb-2 text-gray-700">📱 결제를 위한 QR 코드를 스캔하세요:</p>
              <img
                src="/QR.png" // public 폴더 기준
                alt="결제 QR 코드"
                className="w-40 mx-auto border rounded"
              />
            </div>

            <button
              onClick={clearCart}
              className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
