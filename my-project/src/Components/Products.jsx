import React from "react";

const ProductsPage = () => {
  const products = [
    { id: 1, name: "Wireless Headphones", rating: 4.5 },
    { id: 2, name: "Smart Watch", rating: 4.2 },
    { id: 3, name: "Bluetooth Speaker", rating: 4.7 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-indigo-600">
        Product Reviews
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold mb-2">{p.name}</h2>
            <p className="text-yellow-500 font-medium">⭐ {p.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
