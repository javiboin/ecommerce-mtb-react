import React from 'react';
import './BikeCards.css';

const bikes = [
  {
    id: 1,
    name: 'Enduro Pro X9',
    category: 'MTB Enduro',
    price: 3499,
    oldPrice: 3999,
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=600&h=400&fit=crop&q=80',
    badge: 'Más Vendida',
  },
  {
    id: 2,
    name: 'Trail Blaze 500',
    category: 'MTB Trail',
    price: 2799,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop&q=80',
    badge: null,
  },
  {
    id: 3,
    name: 'Aero Viper Elite',
    category: 'Ruta',
    price: 4199,
    oldPrice: 4699,
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&h=400&fit=crop&q=80',
    badge: 'Oferta',
  },
  {
    id: 4,
    name: 'Gravel Storm GT',
    category: 'Gravel',
    price: 2999,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&h=400&fit=crop&q=80',
    badge: 'Nuevo',
  },
  {
    id: 5,
    name: 'Volt E-MTB 750',
    category: 'Eléctrica',
    price: 5499,
    oldPrice: 5999,
    image: 'https://images.unsplash.com/photo-1559348349-86f1f65817fe?w=600&h=400&fit=crop&q=80',
    badge: 'Premium',
  },
  {
    id: 6,
    name: 'Urban Rider Classic',
    category: 'Urbana',
    price: 1299,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=400&fit=crop&q=80',
    badge: null,
  },
];

function BikeCards() {
  return (
    <section className="bikes-section" id="bikes">
      <div className="bikes-header">
        <span className="section-tag">Colección 2026</span>
        <h2 className="section-title">
          Bicicletas en <span className="text-orange">Oferta</span>
        </h2>
        <p className="section-subtitle">
          Encuentra la bicicleta perfecta para tu próxima aventura. Calidad premium, precios competitivos.
        </p>
      </div>

      <div className="bikes-grid">
        {bikes.map((bike, index) => (
          <article
            className="bike-card"
            key={bike.id}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="card-image-wrapper">
              <img src={bike.image} alt={bike.name} className="card-image" loading="lazy" />
              {bike.badge && (
                <span className={`card-badge badge-${bike.badge === 'Oferta' ? 'sale' : bike.badge === 'Premium' ? 'premium' : bike.badge === 'Más Vendida' ? 'hot' : 'new'}`}>
                  {bike.badge}
                </span>
              )}
              <div className="card-overlay">
                <button className="quick-view-btn">Vista Rápida</button>
              </div>
            </div>

            <div className="card-body">
              <span className="card-category">{bike.category}</span>
              <h3 className="card-title">{bike.name}</h3>
              <div className="card-rating">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="star-icon" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="rating-count">(4.{Math.floor(Math.random() * 5) + 5})</span>
              </div>
              <div className="card-price-row">
                <div className="price-group">
                  <span className="card-price">${bike.price.toLocaleString()}</span>
                  {bike.oldPrice && (
                    <span className="card-old-price">${bike.oldPrice.toLocaleString()}</span>
                  )}
                </div>
                <button className="add-to-cart-btn" aria-label={`Agregar ${bike.name} al carrito`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BikeCards;
