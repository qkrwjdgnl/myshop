import Image from "next/image";

const products = [
  { id: 1, name: "Smartphone", price: "$699", img: "/sample-product-1.png" },
  { id: 2, name: "Laptop", price: "$999", img: "/sample-product-2.png" },
  { id: 3, name: "Tablet", price: "$499", img: "/sample-product-3.png" },
  { id: 4, name: "Headphones", price: "$199", img: "/sample-product-4.png" },
];

export default function Products() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* ✅ 제목 */}
      <h2 className="text-3xl font-bold mb-6 text-center">Recommended Products</h2>
      
      {/* ✅ ✅ ✅ grid 레이아웃 수정 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300 bg-white"
          >
            {/* ✅ 이미지 */}
            <Image
              src={product.img}
              alt={product.name}
              width={200} // ✅ width 고정
              height={150} // ✅ height 고정
              className="rounded-md object-cover w-full h-40" // ✅ object-cover 추가
            />
            {/* ✅ 상품명 */}
            <h3 className="text-lg font-semibold mt-4 text-center">
              {product.name}
            </h3>
            {/* ✅ 가격 */}
            <p className="text-gray-600 text-center mb-2">{product.price}</p>
            {/* ✅ 버튼 */}
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
