import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { MainPage } from './pages/MainPages'; // Проверь точное имя файла (MainPages или MainPage)
import './App.css';

// Определим интерфейс для товара в корзине
interface CartItem {
  id: string;
  quantity: number;
}

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('main');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Храним товары в корзине как массив объектов { id, quantity }
  const [cart, setCart] = useState<CartItem[]>([]);

  // Вычисляем общее количество товаров для шапки
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage('main');
  };

  // Функция добавления товара в корзину
  // Функция добавления / увеличения количества товара
  const handleAddToCart = (productId: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { id: productId, quantity: 1 }];
    });
  };

  // Функция уменьшения количества товара
  const handleRemoveFromCart = (productId: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          return prevCart.filter((item) => item.id !== productId);
        }
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prevCart;
    });
  };
  const handleClearFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'main':
        // Collect props into a typed-any object to avoid passing a prop
        // that MainPage's declared props may not include in its type.
        const mainPageProps: any = {
          selectedCategory,
          cart,
          onAddToCart: handleAddToCart,
          onRemoveFromCart: handleRemoveFromCart, // Передаем функцию уменьшения
          onClearFromCart: handleClearFromCart,
          setPage: setCurrentPage,
        };

        return (
          <div>
            <MainPage {...mainPageProps} />
          </div>
        );
      case 'cart':
        return (
          <div className="cart-page-container">
            <h2>Корзина покупок</h2>
            {cart.length === 0 ? (
              <p>Ваша корзина пока пуста. Добавьте товары на главной странице.</p>
            ) : (
              <div>
                <p>Товаров в корзине: {totalCartCount}</p>
                <button onClick={() => setCurrentPage('main')} className="back-btn">
                  Вернуться к покупкам
                </button>
              </div>
            )}
          </div>
        );
      default:
        return <h2>Страница не найдена (404)</h2>;
    }
  };
  return (
    <div className="app">
      {/* Подключаем счетчик из App в Header */}
      <Header 
        cartCount={totalCartCount} 
        currentPage={currentPage} 
        setPage={setCurrentPage} 
        onCategorySelect={handleCategoryChange} 
      />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;