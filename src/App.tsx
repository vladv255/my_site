import { Header } from './components/Header/index'
import { Footer } from './components/Footer/index'
import { Filters } from './components/Filters/index'
import { Card } from './components/Card/index'
import { cards } from './consts/cards';
import { useState } from 'react';
import type { CardType } from './types/card';

function App() {
  const [sortedCards, setSortedCards] = useState<CardType[]>(cards)
  return (
    <div>
      <Header />
      <Filters setSortedCards={setSortedCards} />
      {
        sortedCards.map((card) => (
          <Card name={card.name} description={card.description} category={card.category} key={card.name}/>
        ))
      }
      <Footer />
    </div>
  );
}

export default App
