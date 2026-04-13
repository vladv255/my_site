import React from 'react'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.about}>
        <h4 className={styles.title}>About Us </h4>
        <p className={styles.description}>
          Ready to build the future of your product together. 
          Let's find the best solutions for your business
          </p>
        <div className={styles.contact}>
          <div>
            <strong>Name Surname</strong> <br/> 
            Frontend | @telegram мб вставить ссылку
          </div>
          <div>
              <strong>Name Surname</strong> <br/>
              DevOps | @telegram
          </div>
        </div>
      </div>
    </footer>
  )
}

