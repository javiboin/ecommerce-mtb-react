import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        {/* Left — Logo & Description */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="text-orange">MTB</span>Gear
          </div>
          <p className="footer-desc">
            Tu destino para bicicletas de alto rendimiento, indumentaria y accesorios. Calidad premium desde 2016.
          </p>
          <div className="footer-socials">
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" aria-label="YouTube" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right — Link Groups */}
        <div className="footer-links-area">
          <div className="footer-links-col">
            <h4 className="footer-col-title">Productos</h4>
            <ul className="footer-link-list">
              <li><a href="#bikes">Bicicletas MTB</a></li>
              <li><a href="#">Bicicletas Ruta</a></li>
              <li><a href="#">Eléctricas</a></li>
              <li><a href="#">Accesorios</a></li>
            </ul>
          </div>
          <div className="footer-links-col">
            <h4 className="footer-col-title">Empresa</h4>
            <ul className="footer-link-list">
              <li><a href="#">Sobre Nosotros</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Carreras</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-links-col">
            <h4 className="footer-col-title">Soporte</h4>
            <ul className="footer-link-list">
              <li><a href="#">Centro de Ayuda</a></li>
              <li><a href="#">Envíos</a></li>
              <li><a href="#">Devoluciones</a></li>
              <li><a href="#">Garantía</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p className="footer-copy">&copy; {new Date().getFullYear()} MTBGear. Todos los derechos reservados.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacidad</a>
          <a href="#">Términos</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
