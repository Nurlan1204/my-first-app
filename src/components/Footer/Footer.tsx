import React from "react";
import "./Footer.css";
export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Спорт маркет</h3>
          <p>
            Лучшая экипировка и одежда для твоих побед и новых спортивных
            достижений
          </p>
        </div>
        <div className="footer-section">
          <h4>Категории</h4>
          <ul>
            <li>
              <a href="#clothing">Одежда</a>
            </li>
            <li>
              <a href="#shoes">Обувь</a>
            </li>
            <li>
              <a href="#equipment">Инвентарь</a>
            </li>{" "}
          </ul>
        </div>
        <div className="footer-section">
          <h4>Контакты</h4>
          <p>Email: info@sport-market.kg</p>
          <p>Телефон: +996 555 123 456</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Спорт маркет. Все права защищены.</p>
      </div>
    </footer>
  );
};
