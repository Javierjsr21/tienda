import React, { useState } from "react";

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

// Estilos CSS inline para responsive
const styles = `
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: relative;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }
  
  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  
  .nav-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .nav button {
    width: 100%;
    text-align: left;
    padding: 1rem;
    border: none;
    background: none;
    border-bottom: 1px solid #eee;
  }
}
`;

// Inyectar estilos
if (typeof document !== 'undefined' && !document.getElementById('header-responsive-styles')) {
  const styleSheet = document.createElement('style');
  styleSheet.id = 'header-responsive-styles';
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
