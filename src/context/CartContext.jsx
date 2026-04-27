/** @format */

import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  
  // Initialize cart from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("zahras_delights_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Initialize favorites from localStorage
  const [favorites, setFavorites] = useState(() => {
    const savedFavs = localStorage.getItem("zahras_delights_favs");
    return savedFavs ? JSON.parse(savedFavs) : [];
  });

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("zahras_delights_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("zahras_delights_favs", JSON.stringify(favorites));
  }, [favorites]);

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleFavorites = () => setIsFavoritesOpen(!isFavoritesOpen);

  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      const isFav = prev.find((item) => item.id === product.id);
      if (isFav) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const isFavorite = (productId) => favorites.some((item) => item.id === productId);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const favoritesCount = favorites.length;

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      clearCart, 
      cartCount, 
      cartTotal,
      isCartOpen, 
      toggleCart,
      favorites,
      toggleFavorite,
      isFavorite,
      favoritesCount,
      isFavoritesOpen,
      toggleFavorites
    }}>
      {children}
    </CartContext.Provider>
  );
};



