import React, {useState, useEffect } from 'react'
import type { CardType } from '../../types/card'
import { filterOptions } from '../../consts/filter_options';
import { filterEffect } from '../../utils/filtered'


interface FiltersProps{
  setSortedCards: (cards:CardType[]) => void;
}
export const Filters = ({setSortedCards}:FiltersProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState("All");
  
  useEffect(() => {
    
    const filtered = filterEffect(category, searchQuery);

    setSortedCards(filtered);
  }, [searchQuery, category, setSortedCards]);

  return (
    <div className="controls">
      <input type="text" 
              placeholder="Search by name..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              />

      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        {filterOptions.map((option)=> (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
