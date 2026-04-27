/** @format */

import cakeProducts from "./Product";
import { ShoppingCart, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "../../../context/CartContext";

const ProductCard = () => {
  const { addToCart, toggleFavorite, isFavorite } = useCart();

  // Group products by category
  const groupedProducts = cakeProducts.reduce((acc, product) => {
    const category = product.category || "General";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <div id="menu" className="bg-[#fffcf9] min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {Object.entries(groupedProducts).map(([category, products]) => (
          <div key={category} className="mb-20">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-serif font-medium text-[#3e2723] mb-10 border-l-2 border-rose-300 pl-4 italic"
            >
              {category}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {products.map((cakeProduct, index) => (
                <motion.div
                  key={cakeProduct.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white rounded-[2rem] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(244,63,94,0.1)] transition-all duration-500 border border-rose-50/50 flex flex-col"
                >
                  {/* Image Section */}
                  <div className="relative h-64 w-full rounded-[1.5rem] overflow-hidden mb-6">
                    <img
                      src={cakeProduct.image}
                      alt={cakeProduct.cakeName}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <button 
                      onClick={() => toggleFavorite(cakeProduct)}
                      className={`absolute top-4 right-4 p-2.5 backdrop-blur-md rounded-full transition-all shadow-sm active:scale-90 z-10 ${
                        isFavorite(cakeProduct.id) 
                        ? "bg-rose-500 text-white shadow-rose-200" 
                        : "bg-white/90 text-rose-300 hover:text-rose-500"
                      }`}
                    >
                      <Heart size={18} fill={isFavorite(cakeProduct.id) ? "currentColor" : "none"} />
                    </button>
                  </div>


                  {/* Content Section */}
                  <div className="px-4 pb-4 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-2 gap-4">
                      <h3 className="text-xl font-serif font-semibold text-[#3e2723] group-hover:text-rose-400 transition-colors">
                        {cakeProduct.cakeName}
                      </h3>


                      <span className="text-xl font-bold text-rose-600 whitespace-nowrap">
                        {cakeProduct.currency}{cakeProduct.price}
                      </span>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                      {cakeProduct.description}
                    </p>

                    <button 
                      onClick={() => addToCart(cakeProduct)}
                      className="w-full bg-[#2d2d2d] text-white py-4 rounded-[1.5rem] font-bold flex items-center justify-center gap-3 hover:bg-rose-600 transition-all shadow-lg hover:shadow-rose-200 active:scale-95 group/btn mt-auto"
                    >
                      <ShoppingCart size={18} className="group-hover/btn:animate-bounce" />
                      Order Now
                    </button>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
