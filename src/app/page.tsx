import Image from "next/image";

const products = [
  { id: 1, name: "Smartphone", price: "$699", img: "/sample-product-1.png" },
  { id: 2, name: "Laptop", price: "$999", img: "/sample-product-2.png" },
  { id: 3, name: "Tablet", price: "$499", img: "/sample-product-3.png" },
  { id: 4, name: "Headphones", price: "$199", img: "/sample-product-4.png" },
];

export default function Home() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* ✅ 타이틀 */}
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">
        🔥 Best Deals on Electronics!
      </h1>

      {/* ✅ 프로모션 문구 */}
      <p className="text-center text-gray-700 mb-8">
       안녕하세요 Up to <strong>70% off</strong> on all gadgets!
      </p>

      {/* ✅ CTA 버튼 */}
      <div className="flex justify-center mb-12">
        <a
          href="/products"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Explore Now
        </a>
      </div>

      {/* ✅ 상품 목록 */}
      <h2 className="text-2xl font-bold mb-6 text-center">
        Recommended Products
      </h2>

      {/* ✅ grid 적용 부분 수정 */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300 bg-white"
          >
            {/* ✅ 이미지 */}
            <Image
              src={product.img}
              alt={product.name}
              width={300}
              height={200}
              className="rounded-md object-cover w-full h-48"
            />
            {/* ✅ 상품명 */}
            <h3 className="text-lg font-semibold mt-4 text-center">
              {product.name}
            </h3>
            {/* ✅ 가격 */}
            <p className="text-gray-600 text-center mb-2">{product.price}</p>
            {/* ✅ 추가 버튼 */}
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700 transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
