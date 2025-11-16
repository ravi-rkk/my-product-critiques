import React, { useState, useMemo } from "react";
import { Search, ChevronUp, X } from "lucide-react";
import Header from "./Header";
import ProductGrid from "./ProductGrid";
import Footer from "./Footer";
import Clothes from "./Images/clothes.jpg";
import Kiderjoy from "./Images/kiderJoy.png";
import SouldeStore from "./Images/SouledStore.png";
import TShirt from "./Images/T-shirt.png";
import Jeans from "./Images/Jeans.jpg";
import Earphone from "./Images/Earphone.png"

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null); // <-- new

  const allProducts = [
    {
      id: 1,
      name: "Midi Dress",
      rating: 4.5,
      reviews: 1289,
      price: "1,757",
      category: "Clothes",
      image: Clothes,
      description: "A beautiful midi dress perfect for any occasion.",
    },
    {
      id: 2,
      name: "Toys",
      rating: 4.2,
      reviews: 892,
      price: "1999",
      category: "Wearables",
      image: Kiderjoy,
      description: "Fun and educational toys for all ages.",
    },
    {
      id: 3,
      name: "Clothes",
      rating: 4.7,
      reviews: 2156,
      price: "5999",
      category: "Audio",
      image: SouldeStore,
      description: "Trendy apparel from The Souled Store.",
    },
    {
      id: 4,
      name: "Harry Potter: Slytherin",
      rating: 4.6,
      reviews: 567,
      price: "649",
      category: "Clothes",
      image: TShirt,
      description: "Official Harry Potter merchandise T-shirt.",
    },
    {
      id: 5,
      name: "Jeans",
      rating: 4.8,
      reviews: 3421,
      price: "499",
      category: "Jeans",
      image: Jeans,
      description: "Stylish denim jeans with comfortable fit.",
    },
       {
      id: 6,
      name: "Earphone",
      rating: 4.8,
      reviews: 1500,
      price: "499",
      category: "Electronic",
      image: Earphone,
      description: "Stylish denim jeans with comfortable fit.",
    },
       {
      id: 7,
      name: "Jeans",
      rating: 4.8,
      reviews: 3421,
      price: "499",
      category: "Jeans",
      image: Jeans,
      description: "Stylish denim jeans with comfortable fit.",
    },
       {
      id: 8,
      name: "Jeans",
      rating: 4.8,
      reviews: 3421,
      price: "499",
      category: "Jeans",
      image: Jeans,
      description: "Stylish denim jeans with comfortable fit.",
    },
       {
      id: 9,
      name: "Jeans",
      rating: 4.8,
      reviews: 3421,
      price: "499",
      category: "Jeans",
      image: Jeans,
      description: "Stylish denim jeans with comfortable fit.",
    },
       {
      id: 10,
      name: "Jeans",
      rating: 4.8,
      reviews: 3421,
      price: "499",
      category: "Jeans",
      image: Jeans,
      description: "Stylish denim jeans with comfortable fit.",
    },
       {
      id: 11,
      name: "Jeans",
      rating: 4.8,
      reviews: 3421,
      price: "499",
      category: "Jeans",
      image: Jeans,
      description: "Stylish denim jeans with comfortable fit.",
    },
       {
      id: 12,
      name: "Jeans",
      rating: 4.8,
      reviews: 3421,
      price: "499",
      category: "Jeans",
      image: Jeans,
      description: "Stylish denim jeans with comfortable fit.",
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
          onProductClick={setSelectedProduct} // pass handler
        />
      </div>

      {/* Floating Search Indicator */}
      {searchTerm && filteredProducts.length > 0 && (
        <div className="fixed bottom-8 right-8 bg-white rounded-full shadow-2xl p-4 animate-bounce">
          <Search className="w-6 h-6 text-purple-600" />
        </div>
      )}

      {/* Back-to-Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 left-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-purple-500/50 transform hover:scale-110 transition-all duration-300 z-50"
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-6">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {selectedProduct.name}
            </h2>
            <p className="text-gray-600 mb-2">{selectedProduct.description}</p>
            <p className="text-gray-800 font-semibold mb-1">
              Rating: ⭐ {selectedProduct.rating} ({selectedProduct.reviews} reviews)
            </p>
            <p className="text-2xl font-bold text-purple-600 mb-4">
              ₹{selectedProduct.price}
            </p>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:opacity-90 transition-all">
              Buy Now
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductsPage;
