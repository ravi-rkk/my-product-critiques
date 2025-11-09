import React, { useState, useMemo } from "react";
import { Search, ChevronUp } from "lucide-react";
import Header from "./Header";
import ProductGrid from "./ProductGrid";
import Footer from "./Footer";
import Clothes from "./Images/clothes.jpg"
import Kiderjoy from "./Images/kiderJoy.png"
import SouldeStore from "./Images/SouledStore.png"
const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const allProducts = [
    {
      id: 1,
      name: "Midi Dress",
      rating: 4.5,
      reviews: 1289,
      price: "1,757",
      category: "Clothes",
      image: Clothes,
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      rating: 4.2,
      reviews: 892,
      price: "1999",
      category: "Wearables",
      image: Kiderjoy,
    },
    {
      id: 3,
      name: "Bluetooth Speaker X",
      rating: 4.7,
      reviews: 2156,
      price: "5999",
      category: "Audio",
      image: SouldeStore,
    },
    {
      id: 4,
      name: "4K Action Camera",
      rating: 4.6,
      reviews: 567,
      price: "29999",
      category: "Cameras",
      image: "camera",
    },
    {
      id: 5,
      name: "Gaming Mouse RGB",
      rating: 4.8,
      reviews: 3421,
      price: "499",
      category: "Gaming",
      image: "mouse",
    },
    {
      id: 6,
      name: "Mechanical Keyboard",
      rating: 4.9,
      reviews: 1892,
      price: "1299",
      category: "Gaming",
      image: "keyboard",
    },
  ];

  const filteredProducts = useMemo(() => {
    return allProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Header */}
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        totalProducts={allProducts.length}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <ProductGrid products={filteredProducts} />
      </div>

      {/* Floating Search Indicator */}
      {searchTerm && filteredProducts.length > 0 && (
        <div className="fixed bottom-8 right-8 bg-white rounded-full shadow-2xl p-4 animate-bounce">
          <Search className="w-6 h-6 text-purple-600" />
        </div>
      )}

      {/* Back‑to‑Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 left-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-purple-500/50 transform hover:scale-110 transition-all duration-300 z-50"
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductsPage;
