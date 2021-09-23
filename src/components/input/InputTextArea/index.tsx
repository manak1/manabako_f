import React from 'react';
import styles from "./styles.module.scss"
import clsx from "clsx"

type Props = {
  onChange: (value: string)=> void
  value: string,
  className?: string
}

const InputTextArea: React.VFC<Props> = ({className, value, onChange}) => {

  return (
    <div className={clsx(styles.input, className)}>
      <textarea className={styles.textarea} value={value} onChange={(event)=> onChange(event.target.value)} placeholder='質問は20文字以上、300文字以下で入力してね！' />
    </div>
  );
};

export default InputTextArea;