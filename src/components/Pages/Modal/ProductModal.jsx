import { ShoppingCart, X, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../../context/CartContext";

const ProductModal = ({ product, onClose }) => {
  const { addToCart, toggleFavorite, isFavorite } = useCart();
  
  if (!product) return null;

  const title = product.name || product.cakeName;
  const displayPrice = product.discountPrice || product.price;
  const currency = product.currency || "Rs. ";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[1000] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
        <motion.div 
          onClick={(e) => e.stopPropagation()}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="bg-white w-full max-w-4xl sm:rounded-[2rem] rounded-t-[2rem] overflow-hidden flex flex-col sm:flex-row relative shadow-[0_30px_60px_rgba(0,0,0,0.15)] max-h-[90vh]"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-rose-50 rounded-full backdrop-blur-md transition-colors shadow-sm text-gray-600 hover:text-rose-600"
          >
            <X size={20} />
          </button>

          {/* Image Section */}
          <div className="w-full sm:w-1/2 h-[40vh] sm:h-auto relative shrink-0">
            <img 
              src={product.image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay for better contrast at the top on mobile */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent sm:hidden" />
          </div>

          {/* Content Section */}
          <div className="w-full sm:w-1/2 p-6 sm:p-10 flex flex-col overflow-y-auto bg-[#fffcf9] max-h-[50vh] sm:max-h-none">
            <div className="flex justify-between items-start mb-4 gap-4 shrink-0">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#3e2723]">
                {title}
              </h2>
              
              <button 
                onClick={() => toggleFavorite(product)}
                className={`p-2.5 rounded-full transition-all flex-shrink-0 border ${
                  isFavorite(product.id) 
                  ? "bg-rose-50 border-rose-200 text-rose-500" 
                  : "bg-white border-gray-200 text-gray-400 hover:border-rose-300 hover:text-rose-400"
                }`}
              >
                <Heart size={20} fill={isFavorite(product.id) ? "currentColor" : "none"} />
              </button>
            </div>

            <div className="flex flex-col mb-6 shrink-0">
               {product.actualPrice && (
                  <span className="text-sm font-medium text-gray-400 line-through decoration-rose-300/80 mb-[-4px]">
                    {currency}{product.actualPrice}
                  </span>
                )}
                <span className="text-3xl font-black text-rose-600 tracking-tight">
                  {currency}{displayPrice}
                </span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
              {product.description}
            </p>

            <div className="mt-auto pt-4 border-t border-rose-50 shrink-0">
              <button 
                onClick={() => { addToCart(product); onClose(); }}
                className="w-full bg-[#2d2d2d] text-white py-4 rounded-[1.5rem] font-bold flex items-center justify-center gap-3 hover:bg-rose-600 transition-all shadow-lg hover:shadow-rose-200 active:scale-95 group/btn"
              >
                <ShoppingCart size={20} className="group-hover/btn:animate-bounce" />
                Add to Cart
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProductModal;