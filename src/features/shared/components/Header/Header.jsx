import React, { useState } from "react";
import "./Header.css";

const Header = ({ cartCount, toggleCart, setView, setCartOpen }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const goHome = () => {
    setView("home");
    setIsMenuOpen(false);
    if (setCartOpen) setCartOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    };
    
    const handleNavClick = (view) => {
        setView(view);
        setIsMenuOpen(false);
    };

    return (
    <header className="header">
        <h1 className="logo" onClick={goHome} style={{ cursor: "pointer" }}>
        KeyStore
        </h1>

        <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
            ☰
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <button onClick={goHome}>Inicio</button>
        <button onClick={() => handleNavClick("products")}>Productos</button>
        <button onClick={() => handleNavClick("about")}>Sobre Nosotros</button>
        <button onClick={() => handleNavClick("contact")}>Contacto</button>
        <button onClick={() => { toggleCart(); setIsMenuOpen(false); }}>🛒 Carrito ({cartCount})</button>
        </nav>
    </header>
    );
};

export default Header;
