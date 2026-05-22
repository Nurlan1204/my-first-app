// src/data/products.ts
import { type Product } from '../types';

export const mockProducts: Product[] = [
  // === КАТЕГОРИЯ: ОДЕЖДА (clothing) ===
  {
    id: 'c1',
    title: 'Спортивный костюм Nike Academy',
    description: 'Влагоотводящая ткань Dri-FIT, идеальная посадка для тренировок на поле и в зале.',
    price: 7500,
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=500&q=80',
    category: 'clothing',
    brand: 'Nike',
    rating: 4.8,
    inStock: 15
  },
  {
    id: 'c2',
    title: 'Футболка компрессионная Under Armour',
    description: 'Улучшает кровообращение, быстро сохнет и защищает кожу от натирания.',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&q=80',
    category: 'clothing',
    brand: 'Under Armour',
    rating: 4.7,
    inStock: 22
  },
  {
    id: 'c3',
    title: 'Ветровка беговая Adidas Own the Run',
    description: 'Легкая ветрозащитная куртка со светоотражающими элементами для вечерних пробежек.',
    price: 6800,
    image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?w=500&q=80',
    category: 'clothing',
    brand: 'Adidas',
    rating: 4.5,
    inStock: 8
  },

  // === КАТЕГОРИЯ: ОБУВЬ (shoes) ===
  {
    id: 's1',
    title: 'Кроссовки для бега Asics Gel-Kayano 30',
    description: 'Премиальная амортизация и максимальная поддержка стопы для длинных дистанций.',
    price: 14500,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
    category: 'shoes',
    brand: 'Asics',
    rating: 4.9,
    inStock: 12
  },
  {
    id: 's2',
    title: 'Футзалки Nike Mercurial Vapor',
    description: 'Профессиональная обувь для паркета, обеспечивающая взрывную скорость и контроль мяча.',
    price: 9200,
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500&q=80',
    category: 'shoes',
    brand: 'Nike',
    rating: 4.6,
    inStock: 7
  },

  // === КАТЕГОРИЯ: ИНВЕНТАРЬ (equipment) ===
  {
    id: 'e1',
    title: 'Мяч футбольный Adidas Al Rihla',
    description: 'Официальный матчевый мяч с бесшовной термосклеенной поверхностью.',
    price: 11000,
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500&q=80',
    category: 'equipment',
    brand: 'Adidas',
    rating: 5.0,
    inStock: 5
  },
  {
    id: 'e2',
    title: 'Коврик для йоги и фитнеса двусторонний',
    description: 'Нескользящее покрытие TPE, толщина 6 мм для защиты суставов во время упражнений.',
    price: 2400,
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?w=500&q=80',
    category: 'equipment',
    brand: 'Torneo',
    rating: 4.4,
    inStock: 40
  },

  // === КАТЕГОРИЯ: АКСЕССУАРЫ (accessories) ===
  {
    id: 'a1',
    title: 'Спортивная бутылка для воды спец-пластик 800мл',
    description: 'Материал Tritan, не содержит BPA, удобный замок с защитой от протекания.',
    price: 1100,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80',
    category: 'accessories',
    brand: 'Puma',
    rating: 4.3,
    inStock: 50
  },
  {
    id: 'a2',
    title: 'Рюкзак спортивный Puma Phase',
    description: 'Вместительное основное отделение, мягкие лямки и боковой карман для бутылки.',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
    category: 'accessories',
    brand: 'Puma',
    rating: 4.6,
    inStock: 18
  }
];

// Функция для автогенерации остальных до 50 товаров, чтобы не писать вручную
const brands = ['Nike', 'Adidas', 'Puma', 'Under Armour', 'Asics', 'Reebok'];
const categories: ('clothing' | 'shoes' | 'equipment' | 'accessories')[] = ['clothing', 'shoes', 'equipment', 'accessories'];

for (let i = 1; i <= 41; i++) {
  const cat = categories[i % categories.length];
  mockProducts.push({
    id: `gen-${i}`,
    title: `Спортивный товар ${brands[i % brands.length]} №${i}`,
    description: `Высококачественный элемент спортивной экипировки. Разработан с использованием передовых технологий для максимального комфорта.`,
    price: Math.floor(Math.random() * (12000 - 1500 + 1)) + 1500,
    image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=500&q=80',
    category: cat,
    brand: brands[i % brands.length],
    rating: parseFloat((4 + Math.random()).toFixed(1)),
    inStock: Math.floor(Math.random() * 30) + 1
  });
}

export default mockProducts;