import React from 'react'
import styles from './Card.module.css'

interface CardProps {
  name: string;
  description: string;
  category: string;
  isFav: boolean;
  onFavClick: () => void;
}

export function Card( {name, description, category, isFav, onFavClick }: CardProps) {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className={styles.tag}>{category}</div>
      <button onClick={onFavClick}>
        {isFav ? '❤️' : '🤍'}
      </button> 
    </div>
  )
}
