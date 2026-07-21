import React, { useState } from 'react';
import Header from './components/Header';
import CategorySection from './components/CategorySection';
import Footer from './components/Footer';
import { menuData } from './data/menuData';

function App() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredMenu = activeCategory === 'Todos' 
    ? menuData 
    : menuData.filter(category => category.title === activeCategory);

  return (
    <div className="app-container">
      <Header activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      
      <main className="main-content">
        {filteredMenu.map(category => (
          <CategorySection key={category.id} category={category} />
        ))}
      </main>

      <Footer />
      
      <a href="https://wa.me/5534996550020?text=Vim%20do%20cat%C3%A1logo%20de%20produtos%20e%20gostaria%20de%20um%20or%C3%A7amento." 
         className="whatsapp-float" 
         target="_blank" 
         rel="noopener noreferrer">
        <svg viewBox="0 0 32 32" width="32" height="32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.05 2A13.9 13.9 0 0 0 3.73 22.48L2.1 28.3l6.05-1.55A13.92 13.92 0 0 0 16.05 30 13.95 13.95 0 0 0 30 16a13.96 13.96 0 0 0-13.95-14ZM24.47 21.6c-.36 1.02-1.74 1.84-2.8 1.98-.82.1-1.92.27-5.58-1.25-4.42-1.84-7.28-6.38-7.5-6.68-.22-.3-1.8-2.38-1.8-4.54s1.14-3.2 1.54-3.64c.4-.43.86-.54 1.15-.54.28 0 .57 0 .82.02.26.01.62-.1.97.74.36.85 1.23 3 1.34 3.22.1.22.18.47.04.75-.15.28-.22.44-.44.69-.22.25-.46.54-.65.74-.21.22-.44.47-.19.9.25.43 1.12 1.84 2.4 2.98 1.64 1.47 3 1.93 3.44 2.15.44.22.7.18.96-.12.27-.3.12-.45 1.18-1.63.3-.34.6-.28.94-.15.34.13 2.16 1.02 2.53 1.2.37.19.62.28.71.44.09.15.09.87-.27 1.88Z" />
        </svg>
      </a>
    </div>
  );
}

export default App;
