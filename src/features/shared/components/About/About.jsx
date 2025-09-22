import React from "react";

const About = () => {
    return (
    <section className="about">
        <div className="about-container">
        <h2>Sobre Nosotros</h2>
        <p>
            En <strong>KeyStore</strong> creemos que la tecnología, la moda y la joyería
            deben estar al alcance de todos. Nuestra misión es ofrecer productos de
            calidad al mejor precio, cuidando siempre la experiencia de nuestros clientes.
        </p>

        <h3>Nuestra Visión</h3>
        <p>
            Ser la tienda en línea preferida en Latinoamérica, reconocida por la confianza,
            rapidez en las entregas y un catálogo diverso que combina estilo y utilidad.
        </p>

        <h3>Valores</h3>
        <ul>
            <li>✔️ Compromiso con el cliente</li>
            <li>✔️ Innovación constante</li>
            <li>✔️ Transparencia y confianza</li>
            <li>✔️ Calidad garantizada</li>
        </ul>
        </div>
    </section>
    );
};

export default About;
