import React from 'react'
import styles from './styles.module.scss'

import Logo from '~/assets/images/icons/logo.svg'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <div className={styles.box}>
          <Logo className={styles.logo} alt="manabakoロゴ" />
          <h1 className={styles.title}>manabako</h1>
        </div>
      </Link>
    </header>
  )
}

export default Header
