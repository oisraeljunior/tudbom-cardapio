import React, { useRef } from 'react';
import { menuData } from '../data/menuData';

export default function Header({ activeCategory, setActiveCategory }) {
  const categories = ['Todos', ...menuData.map(cat => cat.title)];
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 250;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="hero-image-container">
        <img src="/images/topo-oficial.webp" alt="Mesa de salgados variados TudBom" className="hero-image" width="1076" height="915" fetchpriority="high" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="header-content">
        <img src="/images/logo.webp" alt="TudBom Salgados" className="logo" width="1253" height="657" />
        <h1 className="title">Catálogo de Produtos</h1>
        <p className="subtitle">Excelência em salgados para o seu negócio. Escolha os produtos e solicite seu orçamento direto com nossa fábrica.</p>
        
        <div className="category-filters-wrapper">
          <button className="scroll-arrow left-arrow" onClick={() => scroll('left')} aria-label="Rolar para a esquerda">
            &#10094;
          </button>
          
          <div className="category-filters-container" ref={scrollRef}>
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

          <button className="scroll-arrow right-arrow" onClick={() => scroll('right')} aria-label="Rolar para a direita">
            &#10095;
          </button>
        </div>
      </div>
    </header>
  );
}
