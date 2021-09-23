import { setCookie as set, parseCookies } from 'nookies'

export const setCookie = (name: string, value: string) => {
  set(null, name, value)
}

export const getCookie = (name: string) => {
  const cookies = parseCookies()
  return cookies?.[name]
}
