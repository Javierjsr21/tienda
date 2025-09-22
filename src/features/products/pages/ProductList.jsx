import React, { useState, useEffect } from "react";
import CategoryFilter from "../components/CategoryFilter";
import "../styles/categories.css";

const ProductList = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [loadingTimeout, setLoadingTimeout] = useState(false);

    useEffect(() => {
    // Timeout para mostrar error si tarda mucho
    const timeout = setTimeout(() => {
      if (loading) {
        setLoadingTimeout(true);
        setError("La carga está tomando más tiempo del esperado. Verifica tu conexión.");
        setLoading(false);
      }
    }, 5000); // 5 segundos

    // Consultar productos al abrir la página
    const fetchProducts = async () => {
        try {
        setLoading(true);
        setError("");
        setLoadingTimeout(false);
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Error en la consulta");
        const data = await res.json();
        setProducts(data);
        setFilteredProducts(data);
        
        // Extraer categorías únicas
        const uniqueCategories = [...new Set(data.map(product => product.category))];
        setCategories(uniqueCategories);
        clearTimeout(timeout);
        } catch (err) {
        console.error(err);
        setError("No se pudieron cargar los productos. Intenta nuevamente.");
        clearTimeout(timeout);
        } finally {
        setLoading(false);
        }
    };

    fetchProducts();
    
    return () => clearTimeout(timeout);
  }, []); // solo al montar

  // Filtrar productos por categoría
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

    if (loading) return <p className="status">Cargando productos...</p>;
    if (error) return <p className="status error">{error}</p>;

    return (
    <section className="product-page">
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <div className="product-list">
        {filteredProducts.map((product) => (
            <article key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="price">${product.price}</p>
            <p className="category">{product.category}</p>
            <button onClick={() => addToCart(product)}>Agregar</button>
            </article>
        ))}
        </div>
    </section>
    );
};

export default ProductList;
