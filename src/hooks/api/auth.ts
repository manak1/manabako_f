import axios, { AxiosResponse } from "axios"
import { useCallback, useRef } from "react"
import { setCookie } from "~/util/cookie"

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3000',
})

export const useSignup = () => {
  const inProgress = useRef(false)

  const fetch = useCallback(async (username: string, password: string): Promise<void> => {
    if (inProgress.current) return
    inProgress.current = true
    await api.post('/auth/signup', { username, password }).catch((error) => { throw error })
  }, [])

  return {
    fetch,
    progress: inProgress.current
  }
}


export const useSignin = () => {
  const inProgress = useRef(false)

  const fetch = useCallback(async (username: string, password: string): Promise<void> => {
    if (inProgress.current) return
    inProgress.current = true
    const res: AxiosResponse<{ accessToken: string }> = await api.post('/auth/signin', { username, password }).catch((error) => { throw error })
    const token = res.data.accessToken
    setCookie('token', token)
  }, [])

  return {
    fetch,
    progress: inProgress.current
  }
}