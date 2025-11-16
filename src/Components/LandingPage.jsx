import React from "react";
import { useNavigate } from "react-router-dom";
import { Star, Sparkles, ArrowRight, Zap } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <Sparkles className="w-6 h-6 text-white opacity-20" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Logo & Brand */}
        <div className="mb-8 flex items-center gap-3">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <Star className="w-9 h-9 text-white drop-shadow-md" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-300 to-white bg-clip-text text-transparent drop-shadow-2xl">
            ProductVerse
          </h1>
        </div>

        {/* Hero Text */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Discover <span className="text-yellow-300">Honest</span> Reviews
        </h2>
        <p className="text-lg md:text-xl text-pink-100 mb-10 max-w-2xl leading-relaxed">
          Join thousands of smart shoppers. Read real reviews, compare products, 
          and make confident purchases with our trusted community.
        </p>

        {/* Feature Highlights */}
      

        {/* CTA Button */}
        <button
          onClick={() => navigate("/products")}
          className="group relative inline-flex items-center gap-3 bg-white text-indigo-700 font-bold text-lg px-10 py-5 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-pink-500/50 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-pink-400 hover:text-white"
        >
          <span>Get Started Now</span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          <div className="absolute inset-0 rounded-full bg-white opacity-20 scale-0 group-hover:scale-150 transition-transform duration-700"></div>
        </button>

        
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;