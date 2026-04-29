/** @format */

import { useState, useEffect } from "react";
import { ShoppingCart, Search, Menu, X, Heart, User, ChevronDown, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo/zahras_logo.jpeg";
import { useCart } from "../../context/CartContext";
import cakeProducts from "../Pages/Product/Product";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cartCount, toggleCart, addToCart, favoritesCount, toggleFavorites } = useCart();

  // Group products for Mega Menu
  const groupedProducts = cakeProducts.reduce((acc, product) => {
    const category = product.category || "General";
    if (!acc[category]) acc[category] = [];
    acc[category].push(product);
    return acc;
  }, {});

  // Search Results
  const searchResults = searchQuery.trim() === "" 
    ? [] 
    : cakeProducts.filter(p => 
        p.cakeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category?.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu", hasMegaMenu: true },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];


  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-11 h-11 rounded-full overflow-hidden border border-rose-100 shadow-sm">
                <img src={logo} alt="Zahra's Delights" className="w-full h-full object-cover" />
              </div>
              <span className="text-2xl hidden sm:block font-bold text-[#3e2723]" style={{ fontFamily: 'var(--font-playwrite)' }}>
                Zahra's <span className="text-rose-500">Delights</span>
              </span>
            </motion.div>


            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <div 
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasMegaMenu && setIsMegaMenuOpen(true)}
                  onMouseLeave={() => link.hasMegaMenu && setIsMegaMenuOpen(false)}
                >
                  <a
                    href={link.href}
                    className="text-[11px] font-sans font-semibold text-[#3e2723]/90 hover:text-rose-500 transition-colors relative group flex items-center gap-1.5 py-5 uppercase tracking-[0.2em]"
                  >
                    {link.name}
                    {link.hasMegaMenu && <ChevronDown size={12} className={`transition-transform duration-300 ${isMegaMenuOpen ? "rotate-180" : ""}`} />}
                    <span className="absolute bottom-4 left-0 w-0 h-[1.5px] bg-rose-500 transition-all group-hover:w-full" />
                  </a>

                  {/* Mega Menu */}
                  <AnimatePresence>
                    {link.hasMegaMenu && isMegaMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-5xl bg-white rounded-[2rem] shadow-[0_40px_100px_rgba(0,0,0,0.12)] border border-rose-50/50 p-10 flex flex-col gap-10"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 overflow-y-auto max-h-[60vh] p-2">
                          {Object.entries(groupedProducts).map(([category, products]) => (
                            <div key={category} className="space-y-6">
                              <h4 className="text-[#3e2723] font-sans font-bold uppercase tracking-[0.3em] text-[10px] border-b border-rose-50 pb-3">
                                {category}
                              </h4>
                              <div className="space-y-4">
                                {products.map((product) => (
                                  <div 
                                    key={product.id}
                                    className="group/item flex items-center justify-between p-3 rounded-2xl hover:bg-rose-50/50 transition-all cursor-pointer"
                                  >
                                    <div className="flex items-center gap-4">
                                      <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-sm border border-rose-50">
                                        <img src={product.image} className="w-full h-full object-cover transition-transform group-hover/item:scale-110" />
                                      </div>
                                      <div>
                                        <p className="text-xs font-bold text-gray-800 tracking-tight">{product.cakeName}</p>
                                        <p className="text-[10px] text-rose-500 font-bold mt-0.5">{product.currency}{product.discountPrice || product.price}</p>
                                      </div>
                                    </div>
                                    <button 
                                      onClick={(e) => {
                                        e.preventDefault();
                                        addToCart(product);
                                      }}
                                      className="p-2.5 bg-white text-[#3e2723] rounded-xl shadow-sm hover:bg-rose-500 hover:text-white transition-all transform hover:scale-105 active:scale-95"
                                    >
                                      <Plus size={14} />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="border-t border-rose-50 pt-6 flex justify-between items-center">
                          <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">Handcrafted with passion</p>
                          <a href="#menu" onClick={() => setIsMegaMenuOpen(false)} className="text-[#3e2723] font-bold text-xs uppercase tracking-widest hover:text-rose-500 transition-colors">Discover More</a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-1 sm:gap-4">
              {/* Search - Desktop only */}
              <div className="hidden lg:flex relative items-center">
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.input
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 180, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      autoFocus
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-rose-50/50 border-0 rounded-full px-4 py-1.5 text-[10px] focus:ring-1 focus:ring-rose-200 outline-none mr-2 font-medium"
                    />
                  )}
                </AnimatePresence>
                <button 
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className={`p-2 transition-all ${isSearchOpen ? "text-rose-500" : "text-[#3e2723]/60 hover:text-rose-500"}`}
                >
                  {isSearchOpen ? <X size={18} strokeWidth={2} /> : <Search size={20} strokeWidth={1.5} />}
                </button>

                {/* Search Results Dropdown */}
                <AnimatePresence>
                  {isSearchOpen && searchResults.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 mt-4 w-72 bg-white rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-rose-50 p-4 z-[60]"
                    >
                      <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-4 px-2">Top Matches</p>
                      <div className="space-y-2">
                        {searchResults.map((product) => (
                          <div 
                            key={product.id}
                            onClick={() => {
                              addToCart(product);
                              setIsSearchOpen(false);
                              setSearchQuery("");
                            }}
                            className="flex items-center gap-3 p-2 rounded-xl hover:bg-rose-50 transition-all cursor-pointer group"
                          >
                            <div className="w-10 h-10 rounded-lg overflow-hidden border border-rose-50">
                              <img src={product.image} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <p className="text-[11px] font-bold text-gray-800">{product.cakeName}</p>
                              <p className="text-[9px] text-rose-500 font-bold">{product.currency}{product.discountPrice || product.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Favorites - Desktop only */}
              <button 
                onClick={toggleFavorites}
                className="hidden md:flex p-2 text-[#3e2723]/60 hover:text-rose-500 transition-all relative"
              >
                <Heart size={20} strokeWidth={1.5} />
                {favoritesCount > 0 && (
                  <span className="absolute top-1 -right-1 bg-rose-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded-full border border-white">
                    {favoritesCount}
                  </span>
                )}
              </button>


              {/* Cart - Always visible */}
              <button 
                onClick={toggleCart}
                className="p-2 text-[#3e2723]/60 hover:text-rose-500 transition-all relative"
              >
                <ShoppingCart size={20} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute top-1 -right-1 bg-[#3e2723] text-white text-[8px] font-black px-1.5 py-0.5 rounded-full border border-white">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden p-2 text-[#3e2723] hover:text-rose-500 transition-all"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Menu Drawer - Outside Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[10000] bg-white md:hidden flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-serif font-bold text-[#3e2723] tracking-tighter uppercase">Menu</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="p-2 text-[#3e2723] hover:bg-rose-50 rounded-full transition-all"
              >
                <X size={32} />
              </button>
            </div>

            {/* Mobile Search */}
            <div className="mb-6 relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-300" size={18} />
                <input 
                  type="text"
                  placeholder="Search treats..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-rose-50 rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-rose-100 outline-none shadow-sm"
                />
              </div>

              {/* Mobile Search Results */}
              <AnimatePresence>
                {searchQuery.trim() !== "" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 space-y-3 bg-white rounded-2xl p-2 border border-rose-50 shadow-lg max-h-[30vh] overflow-y-auto"
                  >
                    {searchResults.length > 0 ? (
                      searchResults.map((product) => (
                        <div 
                          key={product.id}
                          onClick={() => {
                            addToCart(product);
                            setIsMobileMenuOpen(false);
                            setSearchQuery("");
                          }}
                          className="flex items-center gap-4 p-3 hover:bg-rose-50 rounded-xl transition-all"
                        >
                          <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                            <img src={product.image} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-800">{product.cakeName}</p>
                            <p className="text-xs text-rose-500 font-bold">{product.currency}{product.discountPrice || product.price}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-gray-400 italic text-center py-4">No treats found...</p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="flex flex-col gap-6 overflow-y-auto flex-grow py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-serif font-medium text-[#3e2723] hover:text-rose-500 transition-all border-b border-rose-50/50 pb-4 last:border-0"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-auto pt-8 flex flex-col gap-6">
              <div className="flex gap-4">
                <button 
                  onClick={() => { toggleFavorites(); setIsMobileMenuOpen(false); }}
                  className="flex-1 bg-white border border-rose-100 text-rose-500 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all"
                >
                  <Heart size={22} fill="currentColor" /> 
                  <span className="tracking-wide">Favorites ({favoritesCount})</span>
                </button>
              </div>
              <div className="flex justify-center gap-6 text-[#3e2723]/40 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Zahra's Delights</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


export default Navbar;
