import React from 'react';

export default function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="info-section">
        <h2 className="info-title">Informações</h2>
        <ul className="info-list">
          <li>Todos os salgados são produzidos pela TudBom Salgados.</li>
          <li>As mini pizzas são fornecidas congeladas e prontas para assar.</li>
          <li>As imagens são meramente ilustrativas.</li>
          <li>Consulte disponibilidade e prazo de produção.</li>
        </ul>
      </div>

      <div className="contact-section" style={{ paddingBottom: '60px' }}>
        <a href="https://wa.me/5534996550020?text=Vim%20do%20cat%C3%A1logo%20de%20produtos%20e%20gostaria%20de%20um%20or%C3%A7amento." target="_blank" rel="noreferrer" className="btn-primary btn-large">
          Solicitar orçamento pelo WhatsApp
        </a>
      </div>
    </footer>
  );
}
