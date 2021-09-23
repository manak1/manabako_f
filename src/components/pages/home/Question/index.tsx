import React, { useMemo, useState } from 'react';
import styles from "./styles.module.scss"

import SimpleButton from "~/components/button/SimpleButton"
import InputTextArea from "~/components/input/InputTextArea"

type Props = {
  onClickSend: ()=> void
}

const Question: React.VFC<Props> = ({onClickSend}) => {
  const [question,setQuestion] = useState('')

  const isDisabled = useMemo(()=> {
    return !!(question.length === 0)
  },[question])

  return (
    <div className={styles.question}>
      <h2 className={styles.title}>まなきになんでも質問しよう!</h2>
      <form className={styles.form}>
        <InputTextArea value={question} onChange={setQuestion} />
        <SimpleButton label="質問を送信する" disabled={isDisabled} onClick={onClickSend} />
      </form>
    </div>
  );
};

export default Question;