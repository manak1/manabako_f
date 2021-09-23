import React from 'react'
import styles from './styles.module.scss'

const Footer: React.VFC = () => {
  return (
    <footer className={styles.footer}>
      <small className={styles.copy}>&copy; hungrypenguin</small>
    </footer>
  )
}

export default Footer
