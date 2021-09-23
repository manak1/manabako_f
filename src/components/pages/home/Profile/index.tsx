import React from 'react';

import styles from "./styles.module.scss"

const Profile:React.VFC = () => {
  return (
  <section className={styles.profile}>
      <div className={styles.box}>
        <img className={styles.logo} src='https://pbs.twimg.com/profile_images/1440932289899159553/Q2sQETvo_400x400.png' alt="manakiアイコン" />
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