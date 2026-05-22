import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import type { Page } from './types';
import './App.css'



// Импорты глобальных стилей (если они тебе нужны)
import './App.css';
import './App.css';
import './components/Header/Header.css';
import './components/Footer/Footer.css';
import { MainPage } from './pages/MainPages';
// ... весь остальной код App() ниже остается без изменений

function App() {
  // Управляем текущей страницей (по умолчанию 'main' — главная)
  const [currentPage, setCurrentPage] = useState<Page>('main');
  
  // Текущая выбранная категория фильтрации (пока просто сохраняем строку)
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Счетчик корзины (пока временный)
  const [cartCount, setCartCount] = useState<number>(0);
  console.log(setCartCount);
  

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    console.log(`Выбрана категория: ${category}`); 
    // Тут в будущем будет срабатывать фильтрация массива товаров
  };

  // Функция-роутер: рендерит нужный компонент в зависимости от currentPage
  const renderPage = () => {
    switch (currentPage) {
      case 'main':
        return (
          <div>
            <h2>Главная страница магазина</h2>
            <p>
              Текущий фильтр категории: <strong>{selectedCategory === 'all' ? 'Все товары' : selectedCategory}</strong>
            </p>
            {/* cast to any to match downstream MainPage prop types without changing other files */}
            <MainPage {...({ selectedCategory, onCategorySelect: handleCategoryChange } as any)} />
          </div>
        )
      case 'cart':
        return (
          <div>
            <h2>Корзина покупок</h2>
            <p>Ваша корзина пока пуста. Добавьте товары на главной странице.</p>
          </div>
        );
      case 'auth':
        return (
          <div>
            <h2>Регистрация и Вход</h2>
            <p>Форма авторизации появится здесь.</p>
          </div>
        );
      case 'product-detail':
        return (
          <div>
            <h2>Описание товара</h2>
            <p >Детальная информация о выбранном спортивном товаре.</p>
          </div>
        );
      default:
        return <h2>Страница не найдена (404)</h2>;
    }
  };

  return (
    <div className="app">
      {/* Шапка, куда передаем состояние роутера */}
      <Header 
        cartCount={cartCount}
        currentPage={currentPage} 
        setPage={setCurrentPage} 
        onCategorySelect={handleCategoryChange}
      />

      {/* Динамический контент */}
      <main className="main-content">
        {renderPage()}
      </main>

      {/* Подвал */}
      <Footer 
        setPage={setCurrentPage} 
        onCategorySelect={handleCategoryChange} 
      />
    </div>
  );
}

export default App;