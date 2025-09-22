import React, { useState } from "react";
import Home from "./features/shared/components/Home/home";
import Header from "../src/features/shared/components/Header/Header";
import ProductList from "../src/features/products/pages/ProductList";
import Cart from "./features/car/pages/Cart"
import About from "./features/shared/components/About/About";
import Contact from "./features/shared/components/Contact/Contact";
import Footer from "../src/features/shared/components/Footer/Footer";
import "./App.css";

function App() {
  const [view, setView] = useState("home");
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  // Agregar producto al carrito (lógica centralizada)
  const addToCart = (product) => {
    console.log("addToCart()", product.id, product.title);
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increaseQty = (id) =>
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p)));

  const decreaseQty = (id) =>
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, quantity: p.quantity - 1 } : p))
        .filter((p) => p.quantity > 0)
    );

  const removeFromCart = (id) => setCart((prev) => prev.filter((p) => p.id !== id));

  const clearCart = () => setCart([]);

  return (
    <div className="app-container">
      <Header
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)}
        setView={setView}
        toggleCart={() => setCartOpen((v) => !v)}
        setCartOpen={setCartOpen}
      />

      <main className="main-content">
        {view === "home" && <Home setView={setView} addToCart={addToCart} />}
        {view === "products" && <ProductList addToCart={addToCart} />}
        {view === "about" && <About />} 
        {view === "contact" && <Contact />}
      </main>

      <Cart
        cart={cart}
        cartOpen={cartOpen}
        toggleCart={() => setCartOpen(false)}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />

      <Footer />
    </div>
  );
}

export default App;
