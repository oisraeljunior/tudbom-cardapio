import React, { useState } from 'react';

export default function ProductCard({ product }) {
  // Support either images array or single image string
  const images = Array.isArray(product.images) && product.images.length > 0 
    ? product.images 
    : (product.image ? [product.image] : []);
  
  const hasImages = images.length > 0;
  const isSlider = images.length > 1;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 40) {
      nextImage();
    } else if (distance < -40) {
      prevImage();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const getImagePosition = (index) => {
    if (Array.isArray(product.imagePositions) && product.imagePositions[index]) {
      return product.imagePositions[index];
    }
    if (typeof product.imagePosition === 'string') {
      return product.imagePosition;
    }
    return 'center';
  };

  return (
    <div className={`product-card ${!hasImages ? 'no-image' : ''}`}>
      {hasImages && (
        <div 
          className="product-image-container"
          onTouchStart={isSlider ? handleTouchStart : undefined}
          onTouchMove={isSlider ? handleTouchMove : undefined}
          onTouchEnd={isSlider ? handleTouchEnd : undefined}
        >
          <div className="product-slider">
            <img 
              src={images[currentIndex]} 
              alt={`${product.name} - ${currentIndex === 0 ? 'Fechado' : 'Recheio'}`} 
              className="product-image" 
              style={{ objectPosition: getImagePosition(currentIndex) }}
              loading="lazy" 
              width="768" 
              height="510" 
            />

            {isSlider && (
              <>
                <button 
                  type="button" 
                  className="slider-nav-btn prev" 
                  onClick={prevImage}
                  aria-label="Foto anterior"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>

                <button 
                  type="button" 
                  className="slider-nav-btn next" 
                  onClick={nextImage}
                  aria-label="Próxima foto"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>

                <div className="slider-view-badges">
                  <button 
                    type="button"
                    className={`slider-tag ${currentIndex === 0 ? 'active' : ''}`}
                    onClick={(e) => { e.stopPropagation(); setCurrentIndex(0); }}
                  >
                    Fechado
                  </button>
                  <button 
                    type="button"
                    className={`slider-tag ${currentIndex === 1 ? 'active' : ''}`}
                    onClick={(e) => { e.stopPropagation(); setCurrentIndex(1); }}
                  >
                    Recheio
                  </button>
                </div>

                <div className="slider-dots">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`slider-dot ${currentIndex === idx ? 'active' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                      aria-label={`Ver foto ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
      
      <div className="product-info">
        <div className="product-header">
          <h3 className="product-name">{product.name}</h3>
          <div className="price-badge-inline">{product.price}</div>
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

