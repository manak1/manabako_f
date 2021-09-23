import React from 'react'
import styles from './styles.module.scss'

type Props = {
  question: string
}

const QuestionCard: React.VFC<Props> = ({ question }) => {
  return (
    <div className={styles.card}>
      <div className={styles.box}>
        <p className={styles.question}>{question}</p>
      </div>
      <img src="/ogp.png" alt="ogp" className={styles.bg} />
    </div>
  )
}

export default QuestionCard
