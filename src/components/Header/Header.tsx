// src/components/Header/Header.tsx
import React from 'react';
import './Header.css';
import './header.css'

interface HeaderProps {
  cartCount: number;
}

export const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Логотип */}
        <div className="header-logo">
          <img src="./assets/LOGO.png" alt="" className="logo" />
        </div>

        {/* Навигация */}
        <nav className="header-nav">
          <a href="#clothing" className="nav-link">Одежда</a>
          <a href="#shoes" className="nav-link">Обувь</a>
          <a href="#equipment" className="nav-link">Инвентарь</a>
          <a href="#accessories" className="nav-link">Аксессуары</a>
        </nav>

        {/* Блок поиска и панели пользователя */}
        <div className="header-actions">
          <div className="search-box">
            <input type="text" placeholder="Поиск товаров..." />
            <button type="button" className="search-btn">
              {/* Чистый SVG Поиска (Лупа) */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
          </div>

          {/* Войти / Профиль */}
          <button className="action-btn" title="Профиль">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </button>

          {/* Корзина со счетчиком */}
          <button className="action-btn cart-btn" title="Корзина">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
};