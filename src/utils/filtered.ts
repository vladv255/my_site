import { cards } from '../consts/cards';
import type { CardType } from '../types/card';

export function filterEffect(category: string, searchQuery: string): CardType[] {
    
    return cards.filter((card) => {
          const matchesCategory = category === "All" || card.category === category;
          const matchesSearch = card.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                card.description.toLowerCase().includes(searchQuery.toLowerCase());
          return matchesCategory && matchesSearch;                      
        });
}