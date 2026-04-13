import { cards } from '../consts/cards';
import type { CardType } from '../types/card';

export function filterEffect(
  category: string, 
  searchQuery: string, 
  isOnlyFav: boolean,
  favIds: number[]): CardType[] {
    
    return cards.filter((card) => {
      console.log(`Check card ${card.id}: type ID - ${typeof card.id}`)
          const matchesCategory = category === "All" || card.category === category;
          const matchesSearch = card.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                card.description.toLowerCase().includes(searchQuery.toLowerCase());
          const isCardLiked = favIds.includes(card.id);  
          const matchesFavorite = isOnlyFav ? isCardLiked : true;                    
          return matchesCategory && matchesSearch && matchesFavorite;                      
        });
}