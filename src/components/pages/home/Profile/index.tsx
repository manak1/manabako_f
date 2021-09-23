import React from 'react';

import styles from "./styles.module.scss"

const Profile:React.VFC = () => {
  return (
  <section className={styles.profile}>
      <div className={styles.box}>
        <img className={styles.logo} src='/manaki.png' alt="manakiアイコン" />
        <div className={styles.bio}>
          <h2 className={styles.name}>まなき</h2>
          <a className={styles.link} href="https://twitter.com/mikeanakida">@mikeanakida</a>
        </div>
      </div>
      <p className={styles.introduce}>
        ペンギンが好きなフロントエンドエンジニア🐧
      </p>
    </section>
  );
};

export default Profile;