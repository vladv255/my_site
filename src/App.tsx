import { Header } from './components/Header/index'
import { Footer } from './components/Footer/index'
import { Filters } from './components/Filters/index'
import { Card } from './components/Card/index'
import { cards } from './consts/cards';
import { useState } from 'react';
import type { CardType } from './types/card';
import { useTheme } from './hooks/useTheme';
import { useFavorites } from './hooks/useFavorites';
import './index.css';
import styles from './index.module.css'

function App() {
  const [sortedCards, setSortedCards] = useState<CardType[]>(cards)
  const { theme, toggleTheme} = useTheme();
  const { favorites, toggleFavorite} = useFavorites();
  
  return (
    <div className={styles.app} data-theme={theme}>
      <Header 
        onThemeToggle={toggleTheme}
        favCount={favorites.length}
        />
      <main>
       
      <Filters setSortedCards={setSortedCards} />
      <div className={styles.grid}>
      {
        sortedCards.map((card) => (
          <Card name={card.name} 
                description={card.description} 
                category={card.category} 
                key={card.name}
                isFav={favorites.includes(card.name)}
                onFavClick={() => toggleFavorite(card.name)}
              />
        ))}
        </div>

        {sortedCards.length === 0 && (
          <p className={styles.noResults}>No results</p>
        )}
         </main>  
      <Footer />
    </div>
  );
}

export default App
