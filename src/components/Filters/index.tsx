import React, {useState, useEffect } from 'react'
import type { CardType } from '../../types/card'
import { filterOptions } from '../../consts/filter_options'
import { filterEffect } from '../../utils/filtered'
import styles from './Filters.module.css'


interface FiltersProps{
  setSortedCards: (cards:CardType[]) => void;
}
export const Filters = ({setSortedCards}:FiltersProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState("All");

  const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);

  useEffect (() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);

    return() => clearTimeout(handler);
  }, [searchQuery]);
  
  useEffect(() => {
    
    const filtered = filterEffect(category, debouncedSearch);

    setSortedCards(filtered);
  }, [debouncedSearch, category, setSortedCards]);

  return (
    <div className={styles.container}>
      <input type="text" 
              className={styles.input}
              placeholder="Search by name..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              />

      <select className={styles.select} onChange={(e) => setCategory(e.target.value)} value={category}>
        {filterOptions.map((option)=> (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
