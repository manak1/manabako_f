import React,{ useCallback, useEffect, useState } from 'react'
import { NextPage } from 'next'

import Profile from "~/components/pages/home/Profile"
import Question from "~/components/pages/home/Question"
import Answered from "~/components/pages/home/Answered"
import Layout from "~/layout/HeaderFooterLayout"

import { useGetQuestions, usePostQuestion } from "~/hooks/api/questions" 


const Home: NextPage = () => {
  const { fetch:fetchQuestions} = useGetQuestions()
  const [questions, setQuestions] = useState([])
  const {fetch: postQuestion, progress} = usePostQuestion() 

  useEffect(() => {
    const init = async()=> {
      const res = await fetchQuestions().catch((error)=> {
        throw error
      })
      setQuestions(res)
    }
    init()
  }, [fetchQuestions]);

  const onConfirm = useCallback(async(question: string)=> {
    if(progress) return
    await postQuestion(question).catch((error)=> {throw error})
  },[postQuestion, progress])

  return (
    <Layout>
      <Profile/>
      <Question onClickSend={onConfirm} />
      <Answered questions={questions} />
    </Layout>
  )
}

export default Home
