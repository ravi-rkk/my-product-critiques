import React, { useState, useMemo } from "react";
import { Search, ChevronUp, X, ZoomIn } from "lucide-react";
import Header from "./Header";
import ProductGrid from "./ProductGrid";
import Footer from "./Footer";

// Images (same as before)
import Clothes from "./Images/clothes.jpg";
import ClothesFull from "./Images/clothes.jpg";

import Kiderjoy from "./Images/kiderJoy.png";
import KiderjoyFull from "./Images/kiderJoy.png";

import SouldeStore from "./Images/SouledStore.png";
import SouldeStoreFull from "./Images/SouledStore.png";

import TShirt from "./Images/T-shirt.png";
import TShirtFull from "./Images/T-shirt.png";

import Jeans from "./Images/Jeans.jpg";
import JeansFull from "./Images/Jeans.jpg";

import Earphone from "./Images/Earphone.png";
import EarphoneFull from "./Images/Earphone.png";

import Shoes from "./Images/shoes.jpg";
import ShoesFull from "./Images/shoes.jpg";

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const allProducts = [
    // ... your product data (unchanged)
    {
      id: 1,
      name: "Floral Midi Dress",
      rating: 4.5,
      reviews: 1289,
      price: "1,757",
      category: "Clothes",
      image: Clothes,
      fullImage: ClothesFull,
      description: "Elegant floral midi dress, perfect for casual and semi-formal occasions.",
    },
    {
      id: 2,
      name: "Kinder Joy Surprise Egg",
      rating: 4.6,
      reviews: 2892,
      price: "99",
      category: "Toys",
      image: Kiderjoy,
      fullImage: KiderjoyFull,
      description: "Delicious chocolate with a fun surprise toy inside!",
    },
    {
      id: 3,
      name: "Souled Store Graphic Tee",
      rating: 4.7,
      reviews: 2156,
      price: "599",
      category: "Clothes",
      image: SouldeStore,
      fullImage: SouldeStoreFull,
      description: "Premium cotton t-shirt with trendy pop culture prints.",
    },
    {
      id: 4,
      name: "Harry Potter Slytherin T-Shirt",
      rating: 4.8,
      reviews: 3420,
      price: "649",
      category: "Clothes",
      image: TShirt,
      fullImage: TShirtFull,
      description: "Official licensed Harry Potter merchandise for true Slytherin fans.",
    },
    {
      id: 5,
      name: "Slim Fit Denim Jeans",
      rating: 4.7,
      reviews: 4123,
      price: "1,299",
      category: "Jeans",
      image: Jeans,
      fullImage: JeansFull,
      description: "Comfortable stretch denim with modern slim fit.",
    },
    {
      id: 6,
      name: "Wireless Bluetooth Earphones",
      rating: 4.5,
      reviews: 8921,
      price: "1,999",
      category: "Electronics",
      image: Earphone,
      fullImage: EarphoneFull,
      description: "Crystal clear sound with 20-hour battery life and noise isolation.",
    },
    {
      id: 7,
      name: "Classic White Sneakers",
      rating: 4.9,
      reviews: 5678,
      price: "2,999",
      category: "Footwear",
      image: Shoes,
      fullImage: ShoesFull,
      description: "Timeless design, premium comfort, goes with everything.",
    },
  ];

  const filteredProducts = useMemo(() => {
    return allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const openFullImage = () => {
    if (selectedProduct?.fullImage) {
      window.open(selectedProduct.fullImage, "_blank");
    }
  };

  // Helper to render accurate star rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <span key={i} className="text-yellow-500 text-xl">★</span>;
          }
          if (i === fullStars && hasHalfStar) {
            return <span key={i} className="text-yellow-500 text-xl">★</span>; // You can use a half-star SVG if needed
          }
          return <span key={i} className="text-gray-300 text-xl">★</span>;
        })}
        <span className="ml-2 font-semibold text-gray-700">{rating}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 relative">
      {/* Header */}
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        totalProducts={allProducts.length}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <ProductGrid
          products={filteredProducts}
          onProductClick={setSelectedProduct}
        />
      </div>

      {/* Floating Search Indicator */}
      {searchTerm && filteredProducts.length > 0 && (
        <div className="fixed bottom-24 right-8 bg-white rounded-full shadow-2xl p-4 animate-bounce z-40">
          <Search className="w-6 h-6 text-purple-600" />
        </div>
      )}

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 left-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-purple-500/50 transform hover:scale-110 transition-all duration-300 z-50"
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      {/* Product Detail Modal - UPDATED RATING SECTION */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-8 relative max-h-screen overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-red-100 transition z-10"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            {/* Image with Zoom */}
            <div className="relative group cursor-zoom-in" onClick={openFullImage}>
              <img
                src={selectedProduct.fullImage}
                alt={selectedProduct.name}
                className="w-full h-96 object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl flex items-center justify-center">
                <ZoomIn className="w-16 h-16 text-white" />
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">
                {selectedProduct.name}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {selectedProduct.description}
              </p>

              {/* ONLY RATING - NO REVIEW COUNT */}
              <div className="mb-6">
                {renderStars(selectedProduct.rating)}
              </div>

              <p className="text-4xl font-bold text-purple-600 mb-8">
                ₹{selectedProduct.price}
              </p>

              <div className="flex gap-3">
                <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold hover:opacity-90 transition shadow-lg">
                  Buy Now
                </button>
                <button className="px-6 py-4 border-2 border-purple-600 text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProductsPage;