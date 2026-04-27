/** @format */

import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

const FavoritesModal = () => {
  const { favorites, toggleFavorite, isFavoritesOpen, toggleFavorites, addToCart } = useCart();

  return (
    <AnimatePresence>
      {isFavoritesOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleFavorites}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col font-sans"
          >
            {/* Header */}
            <div className="p-6 border-b border-rose-50 flex justify-between items-center bg-rose-50/30">
              <div className="flex items-center gap-3">
                <Heart className="text-rose-500 fill-rose-500" size={24} />
                <h2 className="text-xl font-serif font-bold text-[#3e2723] uppercase tracking-tighter">Your Favorites</h2>
              </div>
              <button
                onClick={toggleFavorites}
                className="p-2 hover:bg-rose-100 rounded-full transition-colors text-gray-400"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {favorites.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center">
                    <Heart size={40} className="text-rose-200" />
                  </div>
                  <p className="text-gray-400 italic text-sm">No favorites yet. Give some love to our treats!</p>
                  <button 
                    onClick={toggleFavorites}
                    className="text-[#3e2723] font-bold text-xs uppercase tracking-widest border-b border-[#3e2723] pb-1"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                favorites.map((product) => (
                  <div key={product.id} className="flex gap-4 group items-center bg-rose-50/20 p-4 rounded-3xl border border-rose-50/50 hover:border-rose-100 transition-all">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm">
                      <img src={product.image} alt={product.cakeName} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-gray-800 text-sm">{product.cakeName}</h3>
                        <button 
                          onClick={() => toggleFavorite(product)}
                          className="text-rose-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-rose-500 font-bold mb-3">{product.currency}{product.price}</p>
                      
                      <button 
                        onClick={() => {
                          addToCart(product);
                          toggleFavorites();
                        }}
                        className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest bg-[#3e2723] text-white px-4 py-2 rounded-xl hover:bg-rose-500 transition-all active:scale-95"
                      >
                        <ShoppingCart size={12} />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-rose-50 text-center">
              <p className="text-[10px] text-gray-400 font-medium uppercase tracking-[0.2em]">Crafted with love for you</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FavoritesModal;
