import React from 'react';

export default function ProductCard({ product }) {
  const hasImage = !!product.image;

  return (
    <div className={`product-card ${!hasImage ? 'no-image' : ''}`}>
      {hasImage && (
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-image" loading="lazy" width="768" height="510" />
          <div className="price-badge">
            <span className="price-value">{product.price}</span>
          </div>
        </div>
      )}
      
      <div className="product-info">
        <div className="product-header">
          <h3 className="product-name">{product.name}</h3>
          {!hasImage && <div className="price-badge-inline">{product.price}</div>}
        </div>
        <div className="product-ingredients-section">
          <span className="ingredients-label">Ingredientes</span>
          <ul className="product-ingredients-list">
            {product.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
