import axios, { AxiosResponse } from "axios"
import { useCallback, useRef } from "react"
import { getCookie } from "~/util/cookie"
import { Question } from "~/@types/question"

const createApi = () => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3000',
    headers: {
      Authorization: `Bearer ${getCookie('token')}`
    }
  })
}

export const usePostQuestion = () => {
  const inProgress = useRef(false)
  const fetch = useCallback(async (message: string): Promise<void> => {
    if (inProgress.current) return
    inProgress.current = true
    const api = createApi()
    await api.post('/questions', { message }).catch((error) => { throw error })
  }, [])

  return {
    fetch,
    progress: inProgress.current
  }
}

export const useGetQuestions = () => {
  const inProgress = useRef(false)
  const fetch = useCallback(async (): Promise<Question[]> => {
    if (inProgress.current) return
    inProgress.current = true
    const api = createApi()
    const res = await api.get('/questions/answered').catch((error) => { throw error })
    return res.data
  }, [])

  return {
    fetch,
    progress: inProgress.current
  }
}

export const useGetQuestionById = () => {
  const inProgress = useRef(false)
  const fetch = useCallback(async (id: string): Promise<Question> => {
    if (inProgress.current) return
    inProgress.current = true
    const api = createApi()
    const res: AxiosResponse<Question> = await api.get(`/questions/${id}`).catch((error) => { throw error })
    return res.data
  }, [])

  return {
    fetch,
    progress: inProgress.current
  }
}

export const fetchQuestionById = async (id: string) => {
  const api = createApi();
  const res: AxiosResponse<Question> = await api.get(`/questions/${id}`).catch((error) => { throw error })
  return res.data
}