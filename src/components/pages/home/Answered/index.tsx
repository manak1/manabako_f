import React from 'react';
import styles from "./styles.module.scss"

import QuestionCard from "~/components/pages/home/QuestionCard"

import { Question } from "~/@types/question"
import Link from "next/link"

type Props = {
  questions?: Question[]
}

const Answered:React.VFC<Props> = ({ questions }) => {
  return (
    <section className={styles.answered}>
      <h2 className={styles.title}>まなきが過去に答えた質問</h2>
      <ul className={styles.list}>
        {
          questions && questions.map((question)=> {
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
    </section>
  );
};

export default Answered;
//l_text:Sawarabi%20Gothic_40_bold:これはOGPテキストこれはこれはOGPテキストです！テこれはOGPテキストです！キストです！です！,co_rgb:333,w_1000,c_fit,y_-100,h_860

