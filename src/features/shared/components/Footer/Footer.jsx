const Footer = () => {
    return (
    <footer className="footer">
        <p>© {new Date().getFullYear()} KeyStore - Todos los derechos reservados</p>
        <p>
        <a href="#about">Acerca de</a> | <a href="#contact">Contacto</a>
        </p>
        <div className="socials">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">🌐</a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">📸</a>
        </div>
    </footer>
    );
};

export default Footer;

