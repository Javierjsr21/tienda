const ProductCard = ({ id, image, title, category, price, addToCart }) => {
    return (
    <div className="product-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p><strong>Categoría:</strong> {category}</p>
        <p className="price">${price}</p>
        <button onClick={() => addToCart({ id, title, image, price })}>
        ➕ Agregar al carrito
        </button>
    </div>
    );
};

export default ProductCard;
