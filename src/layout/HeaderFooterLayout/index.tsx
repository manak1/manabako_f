import React from 'react';
import styles from "./styles.module.scss"

import Header from "~/components/common/Header"
import Footer from "~/components/common/Footer"

const index:React.FC = ({children}) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.wrapper}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default index;