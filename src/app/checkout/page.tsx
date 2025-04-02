'use client';

import { useCart } from "@/store/cart";
import Image from "next/image";

export default function CheckoutPage() {
  const { items, clearCart } = useCart();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">💳 Checkout</h1>

      {items.length === 0 ? (
        <p className="text-gray-600">장바구니가 비어있습니다.</p>
      ) : (
        <>
          <ul className="space-y-4 mb-6">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between border-b pb-2">
                <span>{item.name} × {item.quantity}</span>
                <span>${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-4">총 금액: ${total}</h2>

          {/* ✅ QR 코드 이미지 표시 */}
          <div className="mb-6 text-center">
            <p className="text-gray-700 mb-2">QR 코드를 스캔하여 결제하세요</p>
            <Image
              src="/qrcode.png" // ✅ public 폴더에 이미지 넣었다면 이렇게 사용
              alt="QR Code"
              width={200}
              height={200}
              className="mx-auto border rounded"
            />
          </div>

          <button
            onClick={clearCart}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            ✅ 결제 완료 후 장바구니 비우기
          </button>
        </>
      )}
    </div>
  );
}
