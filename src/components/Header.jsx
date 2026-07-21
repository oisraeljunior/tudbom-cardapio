import React from 'react';
import { menuData } from '../data/menuData';

export default function Header({ activeCategory, setActiveCategory }) {
  const categories = ['Todos', ...menuData.map(cat => cat.title)];

  return (
    <header className="header">
      <div className="hero-image-container">
        <img src="/images/topo.webp" alt="Mesa de salgados variados TudBom" className="hero-image" width="1076" height="915" fetchpriority="high" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="header-content">
        <img src="/images/logo.webp" alt="TudBom Salgados" className="logo" width="1253" height="657" />
        <h1 className="title">Catálogo de Produtos</h1>
        <p className="subtitle">Excelência em salgados para o seu negócio. Escolha os produtos e solicite seu orçamento direto com nossa fábrica.</p>
        
        <div className="category-filters-container">
          <div className="category-filters">
            {categories.map(cat => (
              <button 
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
