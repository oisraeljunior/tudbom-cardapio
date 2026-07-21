import React from 'react';
import ProductCard from './ProductCard';

export default function CategorySection({ category }) {
  return (
    <section className="category-section">

      
      <div className="category-header">
        <h2 className="category-title">{category.title}</h2>
        <p className="category-description">{category.description}</p>
        {category.isFrozen && (
          <div className="frozen-badge">
            <span className="frozen-icon">❄</span> Produto Congelado • Pronto para Assar
          </div>
        )}
      </div>
      
      <div className="products-grid">
        {category.products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
