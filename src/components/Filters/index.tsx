import React from 'react'
import type { CardType } from '../../types/card'
import { filterOptions } from '../../consts/filter_options';
import { cards } from '../../consts/cards';

interface FiltersProps{
  setSortedCards: (sortedCards:CardType[]) => void
}
export function Filters({setSortedCards}:FiltersProps) {
  function filter(setSortedCards: (sortedCards:CardType[]) => void, option: string){
    if (option === "All") {
    setSortedCards(cards);
    return;
  }

  const filtered = cards.filter(item => item.category === option);
  setSortedCards(filtered);

  }

  return (
    <div className="controls">
      <input type="text" placeholder="Search by name..." />

      <select onChange={(e) => filter(setSortedCards, e.target.value)}>
        {filterOptions.map((option)=> (
          <option>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
