import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer';

function App() {
  const [cartCount, setCartCount] = useState<number>(3)

  return (
   <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Шапка сайта */}
      <Header cartCount={cartCount} />

      {/* Основной контент (Main section) */}
      <main style={{ flex: '1 0 auto', padding: '40px 20px', maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
        <h2>Добро пожаловать в SPORT-MARKET</h2>
        <p style={{ color: '#6b7280', marginTop: '10px' }}>
          Здесь в скором времени появится сетка товаров, фильтрация и пагинация.
        </p>
      </main>

      {/* Подвал сайта */}
      <Footer />
    </div>
  );
  
}

export default App
