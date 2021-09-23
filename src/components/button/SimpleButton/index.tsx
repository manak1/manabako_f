import React from 'react';
import styles from './styles.module.scss'
import clsx from "clsx"

type Props = {
  label: string,
  onClick: ()=> void
  disabled?: boolean
}

const SimpleButton: React.VFC<Props> = ({label, onClick, disabled}) => {
  return (
    <div className={styles.simpleButton}>
      <button type="button" className={clsx(styles.button, disabled && styles.disabled)} onClick={onClick} disabled={disabled}>
        { label }
      </button>
    </div>
  );
};

export default SimpleButton;