import React, { useState, useEffect } from "react";

const Home = ({ setView, addToCart }) => {
    const [featured, setFeatured] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [current, setCurrent] = useState(0);

  // Cargar productos destacados
    useEffect(() => {
    const fetchFeatured = async () => {
        try {
        setLoading(true);
        setError("");
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Error al cargar productos");
        const data = await res.json();
        setFeatured(data.slice(0, 5)); // los primeros 5
        } catch (err) {
        console.error(err);
        setError("No se pudieron cargar los productos destacados.");
        } finally {
        setLoading(false);
        }
    };
    fetchFeatured();
    }, []);

  // Rotación automática
    useEffect(() => {
    if (featured.length > 0) {
        const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % featured.length);
        }, 3000);
        return () => clearInterval(interval);
    }
    }, [featured]);

    return (
    <section className="home">
        <div className="home-content">
        <h2>
            ¡Bienvenido a <span className="highlight">KeyStore</span>!
        </h2>
        <p>
            Descubre la mejor selección de ropa, joyería y electrónica al mejor precio.
        </p>
        <button className="btn-primary" onClick={() => setView("products")}>
            Ver Productos
        </button>
        </div>

      {/* Estado de carga/error */}
        {loading && <p className="status">Cargando productos destacados...</p>}
        {error && <p className="status error">{error}</p>}

      {/* Carrusel */}
        {!loading && !error && featured.length > 0 && (
        <div className="carousel">
            <div
            className="carousel-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
            >
            {featured.map((item) => (
                <div className="carousel-item" key={item.id}>
                {/* Imagen y título llevan a la página de productos */}
                <div
                    className="clickable"
                    onClick={() => setView("products")}
                    style={{ cursor: "pointer" }}
                >
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                </div>
                <p className="price">${item.price.toFixed(2)}</p>
                {/* Botón agregar al carrito */}
                <button onClick={() => addToCart(item)} className="btn-add">
                    🛒 Agregar
                </button>
                </div>
            ))}
            </div>

          {/* Botones (puntos de navegación) */}
            <div className="carousel-buttons">
            {featured.map((_, index) => (
                <button
                key={index}
                className={index === current ? "active" : ""}
                onClick={() => setCurrent(index)}
                />
            ))}
            </div>
        </div>
        )}
    </section>
    );
};

export default Home;
