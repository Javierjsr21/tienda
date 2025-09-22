import React from "react";

const Cart = ({
    cart,
    cartOpen,
    toggleCart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
}) => {
    // const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
    <>
        {/* Overlay */}
    {cartOpen && (
    <div
        className="cart-overlay"
      onClick={toggleCart}   // Solo cierra si haces click fuera del carrito
    ></div>
    )}

  {/* Carrito */}
    <div className={`cart ${cartOpen ? "open" : ""}`}>
    <div className="cart-header">
        <h2>🛒 Carrito</h2>
        <button onClick={toggleCart}>✖</button>
    </div>

    {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
    ) : (
        cart.map((item) => (
        <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="cart-item-info">
            <h4>{item.title}</h4>
            <p>Precio: ${item.price}</p>
            <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
            <div className="qty-controls">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
            </div>
            <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
            >
                ❌ Eliminar
            </button>
            </div>
        </div>
        ))
    )}

    {cart.length > 0 && (
        <>
        <div className="cart-total">
            Total: $
            {cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
        </div>
        <button className="clear-btn" onClick={clearCart}>
            🗑 Vaciar Carrito
        </button>
        </>
    )}
  </div>
</>
    );
};

export default Cart;
