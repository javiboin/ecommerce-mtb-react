import React from 'react';
import './index.css';

function App() {
  return (
    <div className="hero-container">
      <nav className="navbar">
        <div className="logo">
          <span className="text-orange">MTB</span>Gear
        </div>
        <ul className="nav-links">
          <li><a href="#bikes">Bicicletas</a></li>
          <li><a href="#apparel">Indumentaria</a></li>
          <li><a href="#accessories">Accesorios</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
        <div className="nav-icons">
          <button className="cart-btn">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
             </svg>
          </button>
        </div>
      </nav>

      <div className="hero-content">
        <div className="hero-text-area">
          <h1 className="hero-title">Domina la <span className="text-orange">Montaña</span></h1>
          <p className="hero-subtitle">
            Descubre nuestra nueva colección de bicicletas MTB de alto rendimiento y la indumentaria perfecta para cada desafío. La aventura te espera.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Explorar Bicicletas</button>
            <button className="btn-secondary">Ver Indumentaria</button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
               <h3>10+</h3>
               <p>Años de Experiencia</p>
            </div>
            <div className="stat-item">
               <h3>50+</h3>
               <p>Modelos Exclusivos</p>
            </div>
            <div className="stat-item">
               <h3>5k+</h3>
               <p>Clientes Felices</p>
            </div>
          </div>
        </div>
        
        <div className="hero-image-area">
          <div className="image-wrapper">
             <div className="decorative-circle"></div>
             <img src="/hero-mtb.png" alt="MTB Naranja y Negra en la Montaña" className="hero-image" />
             <div className="floating-badge">
               <span className="badge-text">Nueva Colección 2026</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
