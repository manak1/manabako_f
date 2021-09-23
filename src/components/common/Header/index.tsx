import React from 'react'
import styles from "./styles.module.scss"

import Logo from "~/assets/images/icons/logo.svg"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.box}>
        <Logo class={styles.logo}  alt="manabakoロゴ" />
        <h1 className={styles.title}>manabako</h1>
      </div>
    </header>
  )
}

export default Header
