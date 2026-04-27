/** @format */

import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import logo from "../../../../assets/logo/zahras_logo.jpeg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-30 overflow-hidden bg-[#fffcf9]">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-rose-50/50 rounded-l-[10rem] hidden lg:block" />
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-rose-200/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-amber-100/30 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 bg-rose-50 text-rose-500 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
            >
              Artisanal Bakery & Desserts
            </motion.span>
            
            <h1 className="text-4xl md:text-7xl font-serif font-medium text-[#3e2723] leading-[1.1] mb-8">
              Sweetening your <br />
              <span className="italic text-rose-400">most precious</span> moments.
            </h1>
            
            <p className="text-sm md:text-base text-gray-500 mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed font-light">
              Experience the magic of handcrafted delights. From fudgy brownies to royal Arabian desserts, we bring sweetness to life.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#menu" className="w-full sm:w-auto">
                <button className="w-full px-8 py-4 bg-[#3e2723] text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-rose-600 transition-all shadow-xl shadow-rose-100 active:scale-95">
                  Explore Menu
                  <ChevronRight size={20} />
                </button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <button className="w-full px-8 py-4 bg-white text-[#3e2723] border-2 border-rose-100 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-rose-50 transition-all active:scale-95">
                  Contact Us
                  <ArrowRight size={20} className="text-rose-400" />
                </button>
              </a>
            </div>


            {/* Stats/Trust Badges */}
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-4 md:gap-8 border-t border-rose-50 pt-8 overflow-x-auto">
              <div className="flex-shrink-0">
                <p className="text-xl md:text-2xl font-bold text-[#3e2723]">100%</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-tighter">Homemade</p>
              </div>
              <div className="w-px h-8 bg-rose-100 flex-shrink-0" />
              <div className="flex-shrink-0">
                <p className="text-xl md:text-2xl font-bold text-[#3e2723]">Premium</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-tighter">Ingredients</p>
              </div>
              <div className="w-px h-8 bg-rose-100 flex-shrink-0" />
              <div className="flex-shrink-0">
                <p className="text-xl md:text-2xl font-bold text-[#3e2723]">Fast</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-tighter">Delivery</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Logo/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-[28rem] md:h-[28rem]">
              {/* Outer Decorative Rings */}
              <div className="absolute inset-0 border-2 border-dashed border-rose-200 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-4 border border-rose-100 rounded-full" />
              
              {/* Logo Container */}
              <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl border-8 border-white group">
                <img 
                  src={logo} 
                  alt="Zahra's Delights Logo" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>


              {/* Floating Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-rose-50 hidden md:block"
              >
                <span className="text-2xl block">🍰</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase">Fresh Daily</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-rose-50 hidden md:block"
              >
                <span className="text-2xl block">🍫</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase">Premium Choco</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
