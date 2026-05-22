// src/components/Footer/Footer.tsx
import React from 'react';
import './Footer.css';
import type { Page } from '../../types';

interface FooterProps {
  setPage: (page: Page) => void;
  onCategorySelect?: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setPage, onCategorySelect }) => {
  const handleCategoryClick = (category: string) => {
    setPage('main');
    if (onCategorySelect) {
      onCategorySelect(category);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h3>SPORT-MARKET</h3>
          <p>Лучшая экипировка и одежда для твоих побед и новых спортивных достижений.</p>
        </div>
        
        <div className="footer-section">
          <h4>Категории</h4>
          {/* Заменили ul на простой div с классом */}
          <div className="footer-links">
            <button onClick={() => handleCategoryClick('Одежда')} className="footer-link-btn">Одежда</button>
            <button onClick={() => handleCategoryClick('Обувь')} className="footer-link-btn">Обувь</button>
            <button onClick={() => handleCategoryClick('Инвентарь')} className="footer-link-btn">Инвентарь</button>
            <button onClick={() => handleCategoryClick('Аксессуары')} className="footer-link-btn">Аксессуары</button>
          </div>
        </div>
          
        <div className="footer-section">
          <h4>Контакты</h4>
          <p>Email: support@sportmarket.com</p>
          <p>Телефон: +7 (999) 000-00-00</p>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SPORT-MARKET. Все права защищены.</p>
      </div>
    </footer>
  );
};