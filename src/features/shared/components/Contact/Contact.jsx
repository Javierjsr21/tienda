import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    // Cambia estos valores por los de tu cuenta EmailJS
    const SERVICE_ID = "service_yasxfvk";
    const TEMPLATE_ID = "template_v7yx22k";
    const USER_ID = "VdlJ2kzYHBk_IRkKQ";

    emailjs
        .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
        .then(
        () => {
            setStatus("✅ Tu mensaje fue enviado correctamente.");
            setFormData({ name: "", email: "", message: "" });
        },
        () => {
            setStatus("❌ Ocurrió un error. Intenta de nuevo.");
        }
        );
    };

    return (
    <section className="contact">
        <div className="contact-container">
        <h2>Contacto</h2>
        <p>Escríbenos un mensaje y te responderemos lo antes posible.</p>

        <form onSubmit={handleSubmit} className="contact-form">
            <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            required
            />
            <input
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            />
            <textarea
            name="message"
            placeholder="Escribe tu mensaje..."
            value={formData.message}
            onChange={handleChange}
            required
            ></textarea>
            <button type="submit">Enviar Mensaje</button>
        </form>

        {status && <p className="status">{status}</p>}
        </div>
    </section>
    );
};

export default Contact;
