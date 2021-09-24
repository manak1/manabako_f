import React, { useMemo } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'

type Props = {
  question: string
  showFull?: boolean
}

const QuestionCard: React.VFC<Props> = ({ question, showFull }) => {
  const isTextOver = useMemo(() => {
    return question.length >= 160
  }, [question])

  const shortenQuestion = useMemo(() => {
    return isTextOver && !showFull
      ? `${question.substring(0, 157)}...`
      : question
  }, [question, isTextOver, showFull])

  return (
    <div className={styles.card}>
      <div className={clsx(styles.box, showFull && isTextOver && styles.over)}>
        <p className={styles.question}>{shortenQuestion}</p>
      </div>
      {showFull ? (
        isTextOver ? (
          <img src="/ogp_large.png" alt="ogp" />
        ) : (
          <img src="/ogp_small.png" alt="ogp" />
        )
      ) : (
        <img src="/ogp_small.png" alt="ogp" className={styles.bg} />
      )}
    </div>
  )
}

export default QuestionCard
