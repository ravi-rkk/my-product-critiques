import React from "react";
import { Star, ShoppingBag, ArrowRight } from "lucide-react";

export default function ProductGrid({ products }) {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-300 text-gray-300"
        }`}
      />
    ));
  };

  const productImages = {
    headphones: "bg-gradient-to-br from-purple-400 to-pink-400",
    watch: "bg-gradient-to-br from-indigo-400 to-blue-400",
    speaker: "bg-gradient-to-br from-green-400 to-teal-400",
    camera: "bg-gradient-to-br from-orange-400 to-red-400",
    mouse: "bg-gradient-to-br from-pink-400 to-rose-400",
    keyboard: "bg-gradient-to-br from-cyan-400 to-blue-500",
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto mb-6" />
        <h3 className="text-2xl font-semibold text-gray-600 mb-2">No products found</h3>
        <p className="text-gray-500">Try adjusting your search term</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, idx) => (
        <div
          key={product.id}
          className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
          style={{ animationDelay: `${idx * 100}ms` }}
        >
          {/* Image */}
          <div className="relative overflow-hidden">
            <div
              className={`h-64 ${productImages[product.image]} flex items-center justify-center`}
            >
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 m-8 shadow-xl">
                <ShoppingBag className="w-20 h-20 text-white" />
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-sm font-medium text-purple-600">
                {product.category}
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Info */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
              {product.name}
            </h3>

            <div className="flex items-center gap-2 mb-3">
              <div className="flex">{renderStars(product.rating)}</div>
              <span className="text-sm font-medium text-gray-600">
                {product.rating} ({product.reviews.toLocaleString()} reviews)
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-800">{product.price}</p>
                <p className="text-xs text-gray-500">Free shipping</p>
              </div>
              <button className="group/btn bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}