/** @format */

import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ShoppingBag, MessageCircle, Plus, Minus } from "lucide-react";
import { useCart } from "../../../context/CartContext";

const CartModal = () => {
  const { cart, removeFromCart, isCartOpen, toggleCart, cartTotal, clearCart, updateQuantity } =
    useCart();


  const handleWhatsAppOrder = () => {
    const phoneNumber = "+6581045226"; // Owner's WhatsApp number
    const businessName = "Zahra's Delights";

    let message = `*Order from ${businessName}*\n\n`;
    message += `Hello! I would like to place an order for:\n\n`;

    cart.forEach((item) => {
      const basePrice = item.discountPrice || item.price || 0;
      const itemPrice = item.bulkDiscount && item.quantity >= item.bulkDiscount.threshold 
        ? item.bulkDiscount.discountedPrice 
        : basePrice;
      message += `• *${item.cakeName}* (x${item.quantity}) - $${itemPrice * item.quantity}\n`;
    });


    message += `\n*Total Amount: $${cartTotal}*\n\n`;
    message += `Please confirm my order. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
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
                <ShoppingBag className="text-rose-500" size={24} />
                <h2 className="text-xl font-serif font-bold text-[#3e2723]">
                  Your Selection
                </h2>
              </div>
              <button
                onClick={toggleCart}
                className="p-2 hover:bg-rose-100 rounded-full transition-colors text-gray-500"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center">
                    <ShoppingBag size={40} className="text-rose-200" />
                  </div>
                  <p className="text-gray-400 italic">
                    Your cart is empty. Start adding some delights!
                  </p>
                  <button
                    onClick={toggleCart}
                    className="text-rose-500 font-bold border-b-2 border-rose-500 pb-1"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.cakeName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-gray-800">
                          {item.cakeName}
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-300 hover:text-rose-500 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <div className="flex items-center gap-3 mb-3 mt-1">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 hover:bg-rose-500 hover:text-white transition-all active:scale-90"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-bold text-gray-700 min-w-[1.2rem] text-center">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 hover:bg-rose-500 hover:text-white transition-all active:scale-90"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <p className="font-bold text-rose-600">
                        ${(item.bulkDiscount && item.quantity >= item.bulkDiscount.threshold 
                          ? item.bulkDiscount.discountedPrice 
                          : (item.discountPrice || item.price || 0)) * item.quantity}
                        {item.bulkDiscount && item.quantity >= item.bulkDiscount.threshold && (
                          <span className="ml-2 text-[10px] text-green-500 font-bold uppercase">Bulk Deal!</span>
                        )}
                      </p>

                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-rose-50 bg-rose-50/10 space-y-4">
                <div className="flex justify-between items-center text-lg">
                  <span className="text-gray-600">Total Amount</span>
                  <span className="font-bold text-[#3e2723] text-2xl">
                    ${cartTotal}
                  </span>
                </div>

                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-green-100 hover:bg-[#128C7E] transition-all active:scale-95"
                >
                  <MessageCircle size={22} />
                  Order via WhatsApp
                </button>

                <button
                  onClick={clearCart}
                  className="w-full text-gray-400 text-sm hover:text-rose-500 transition-colors"
                >
                  Clear Selection
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartModal;
