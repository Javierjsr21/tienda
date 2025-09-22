import React from "react";

const Dashboard = ({ products }) => {
    const totalProducts = products.length;
    const categories = [...new Set(products.map((p) => p.category))];
    const avgPrice = (products.reduce((sum, p) => sum + p.price, 0) / totalProducts).toFixed(2);
    const avgRating = (
    products.reduce((sum, p) => sum + p.rating.rate, 0) / totalProducts
).toFixed(1);
    return (
    <section>
        <h2 className="dashboard-title">📊 Dashboard de la Tienda</h2>
        <div className="dashboard-grid">
        <div className="card">
            <h3>Productos</h3>
            <p className="stat blue">{totalProducts}</p>
        </div>
        <div className="card">
            <h3>Categorías</h3>
            <p className="stat green">{categories.length}</p>
        </div>
        <div className="card">
            <h3>Precio Promedio</h3>
            <p className="stat red">${avgPrice}</p>
        </div>
        <div className="card">
            <h3>Rating Promedio</h3>
            <p className="stat yellow">⭐ {avgRating}</p>
        </div>
    </div>
    </section>
);
};

export default Dashboard;
