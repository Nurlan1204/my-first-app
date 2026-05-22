// src/pages/MainPages.tsx
import React, { useState } from 'react';
import type { Product } from '../types';
import { mockProducts } from '../data/products';
import './MainPages.css';

interface MainPageProps {
  selectedCategory: string;
}

export const MainPage: React.FC<MainPageProps> = ({ selectedCategory }) => {
  // Состояние для хранения открытого в модалке товара
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = selectedCategory === 'all' 
    ? mockProducts 
    : mockProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="main-page-container">
      <h2 className="catalog-title">
        {selectedCategory === 'all' && 'Все спортивные товары'}
        {selectedCategory === 'clothing' && 'Спортивная одежда'}
        {selectedCategory === 'shoes' && 'Спортивная обувь'}
        {selectedCategory === 'equipment' && 'Профессиональный инвентарь'}
        {selectedCategory === 'accessories' && 'Спортивные аксессуары'}
      </h2>
      
      <p className="products-count">Найдено товаров: {filteredProducts.length}</p>

      {/* Сетка товаров */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            className="product-card"
            onClick={() => setSelectedProduct(product)} /* Открываем модалку при клике на карточку */
            style={{ cursor: 'pointer' }}
          >
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.title} className="product-img" />
              <span className="product-brand-badge">{product.brand}</span>
            </div>
            
            <div className="product-info">
              <div className="product-rating">
                <span className="star">★</span> {product.rating}
              </div>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-desc">{product.description}</p>
              
              <div className="product-footer">
                <span className="product-price">{product.price.toLocaleString('ru-RU')} сом</span>
                {/* stopPropagation нужен, чтобы клик по кнопке не открывал модалку повторно */}
                <button 
                  className="add-to-cart-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert('Товар добавлен в корзину!');
                  }}
                >
                  В корзину
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* МОДАЛЬНОЕ ОКНО (Краткая информация) */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProduct(null)}>×</button>
            
            <div className="modal-body">
              <div className="modal-image-side">
                <img src={selectedProduct.image} alt={selectedProduct.title} />
              </div>
              
              <div className="modal-info-side">
                <span className="modal-brand">{selectedProduct.brand}</span>
                <h3 className="modal-title">{selectedProduct.title}</h3>
                
                <div className="modal-rating">
                  <span className="star">★</span> {selectedProduct.rating} 
                  <span className="modal-stock">| В наличии: {selectedProduct.inStock} шт.</span>
                </div>
                
                <p className="modal-description">{selectedProduct.description}</p>
                
                <div className="modal-footer">
                  <span className="modal-price">{selectedProduct.price.toLocaleString('ru-RU')} сом</span>
                  <button className="modal-buy-btn">Добавить в корзину</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};