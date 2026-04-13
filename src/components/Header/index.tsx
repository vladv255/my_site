import React from 'react'
import styles from './Header.module.css'


interface HeaderProps {
  onThemeToggle: () => void;
  favCount: number;
}

export function Header({onThemeToggle, favCount}: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <h1>AI Catalog</h1>
        <div className={styles.controls}>
        <button onClick={() => {onThemeToggle();}}
          className={styles.themeBtn}>
          Change theme
        </button>
        <div className={styles.favorites}>
           ❤️ <span>{favCount}</span>
        </div>
       </div>
      </div>
    </header>
  )
}
