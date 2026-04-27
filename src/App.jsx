/** @format */

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Pages/Home/hero/Hero";
import About from "./components/Pages/Home/About/About";
import ProductCard from "./components/Pages/Product/ProductCard";
import Contact from "./components/Pages/contact/Contact";
import CartModal from "./components/Pages/Modal/CartModal";
import FavoritesModal from "./components/FavoritesModal";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="bg-[#fffcf9]">
        <Navbar />
        <CartModal />
        <FavoritesModal />
        <Hero />
        <About />
        <main>
          <ProductCard />
        </main>
        <Contact />
      </div>
    </CartProvider>
  );
}





export default App;
