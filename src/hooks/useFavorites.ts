import {useState} from 'react';

export const useFavorites = () => {
    const [favorites, setFavorites] = useState<string[]>([]);

    const toggleFavorite = (name: string) => {
        setFavorites(prev => prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    );
    };

    return { favorites, toggleFavorite };
}