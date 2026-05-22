// src/components/Header/Header.tsx
import React from 'react';
import type { Page } from '../../types';
import './Header.css';

interface HeaderProps {
  cartCount: number;
  currentPage: Page;
  setPage: (page: Page) => void;
  onCategorySelect: (category: string) => void; // Добавили для управления фильтром
}

export const Header: React.FC<HeaderProps> = ({ 
  cartCount, 
  currentPage, 
  setPage, 
  onCategorySelect 
}) => {
  
  // Функция для возврата на главную со сбросом категорий
  const handleGoHome = () => {
    setPage('main');
    onCategorySelect('all'); // Сбрасываем фильтр на "Все товары"
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="header-container">
        
        {/* Логотип теперь кликабельный и ведет на главную */}
        <div className="logo" onClick={handleGoHome} style={{ cursor: 'pointer' }}>
          SPORT<span>MARKET</span>
        </div>

        <nav className="navigation">
          {/* Кнопка "Главная" */}
          <button 
            onClick={handleGoHome} 
            className={`nav-link ${currentPage === 'main' ? 'active' : ''}`}
          >
            Главная
          </button>
          
          <button 
            onClick={() => { setPage('main'); onCategorySelect('clothing'); }} 
            className="nav-link"
          >
            Одежда
          </button>
          
          <button 
            onClick={() => { setPage('main'); onCategorySelect('shoes'); }} 
            className="nav-link"
          >
            Обувь
          </button>
          
          <button 
            onClick={() => { setPage('main'); onCategorySelect('equipment'); }} 
            className="nav-link"
          >
            Инвентарь
          </button>
          
          <button 
            onClick={() => { setPage('main'); onCategorySelect('accessories'); }} 
            className="nav-link"
          >
            Аксессуары
          </button>
        </nav>

        <div className="header-actions">
          <div className="search-box">
            <input type="text" placeholder="Поиск товаров..." />
            <button className="search-btn">🔍</button>
          </div>
          
          <button onClick={() => setPage('auth')} className="action-btn">👤</button>
          
          <button onClick={() => setPage('cart')} className="action-btn cart-btn">
            🛒 {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>

      </div>
    </header>
  );
};