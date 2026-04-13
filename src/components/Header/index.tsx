import React from 'react'
import styles from './Header.module.css'


interface HeaderProps {
  onThemeToggle: () => void;
  favCount: number;
  isOnlyFav: boolean;
  onFavToggle: () => void;
}

export function Header({onThemeToggle, favCount, isOnlyFav, onFavToggle}: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <h1>AI Catalog</h1>
        <div className={styles.controls}>
        <button onClick={() => {onThemeToggle();}}
          className={styles.themeBtn}>
          Change theme
        </button>
        <div className={`${styles.favorites} ${isOnlyFav ? styles.active : ''}`}
             onClick={onFavToggle}
             style={{cursor: 'pointer'}}>
           ❤️ <span>{favCount}</span>
        </div>
       </div>
      </div>
    </header>
  )
}
