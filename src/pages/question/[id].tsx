import React, { useCallback } from 'react';
import styles from './styles.module.scss'
import {NotificationContainer, NotificationManager} from 'react-notifications';

import Arrow from "~/assets/images/icons/angle-left-solid.svg"

import QuestionCard from '~/components/pages/home/QuestionCard'
import Question from "~/components/pages/home/Question"
import Layout  from "~/layout/HeaderFooterLayout"
import Link from "next/link"

import { NextPage } from 'next';
import { Question as QuestionType  } from '~/@types/question';

import { fetchQuestionById, usePostQuestion } from "~/hooks/api/questions"

import Head from "~/components/common/Head"

type Props = {
  question: QuestionType
}

const QuestionPage: NextPage<Props> = ({ question }) => {

  const { fetch:postQuestion, progress: postInProgress } = usePostQuestion() 
  
  const onConfirm = useCallback(async(question: string)=> {
    if(postInProgress) return
    await postQuestion(question).catch((error)=> {throw error})
    NotificationManager.success('質問を投稿しました！')
  },[postInProgress, postQuestion])

  const setOgp = (message: string)=> {
    return `https://res.cloudinary.com/dugkfottw/image/upload/l_text:Sawarabi%20Gothic_40_bold:${encodeURIComponent(message)},co_rgb:333,w_1000,c_fit,y_-100,h_860/v1632411860/ogp_k2yjcj.png`
  } 

  return (
    <Layout>
      <Head title={question.message} image={setOgp(question.message)} url="rw"/>
      <div className={styles.question}>
        <div className={styles.top}>
        <QuestionCard question={question.message} />
        <div className={styles.profile}>
          <img className={styles.logo} src='/manaki.png' alt="manakiアイコン" />
          <h2 className={styles.name}>まなき</h2>
        </div>
        <p className={styles.answer}>{question.answer}</p>
        </div>
        <Question onClickSend={onConfirm} />
        <Link href="/" passHref>
          <a className={styles.link}>
            <Arrow className={styles.icon} />
            <p className={styles.link_text}>戻る</p>
          </a>
        </Link>
      </div>
      <NotificationContainer/>
    </Layout>
  );
};


export async function getServerSideProps({ params }) {
  const question = await fetchQuestionById(params.id)
  if(!question) return {
    notFound: true
  }
  return {
    props: {
      question
    }
  }
}

export default QuestionPage;