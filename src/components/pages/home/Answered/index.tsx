import React from 'react'
import styles from './styles.module.scss'

import QuestionCard from '~/components/pages/home/QuestionCard'
import Loader from "react-loader-spinner";

import { Question } from '~/@types/question'
import Link from 'next/link'

type Props = {
  questions?: Question[]
}

const Answered: React.VFC<Props> = ({ questions }) => {
  return (
    <section className={styles.answered}>
      <h2 className={styles.title}>まなきが過去に答えた質問</h2>
      {
        questions ?
        <ul className={styles.list}>
          {questions.map((question) => {
            return (
              <li key={question.id} className={styles.item}>
                <Link href={`/question/${question.id}`} passHref>
                  <a className={styles.link}>
                    <QuestionCard question={question.message} />
                  </a>
                </Link>
              </li>
            )
      })
      }    
      </ul>
      :
      <div className={styles.loader}>
      <Loader type='ThreeDots' color="rgb(29, 161, 242)" width={30} height={30} />
      </div>
      }
    </section>
  )
}

export default Answered
