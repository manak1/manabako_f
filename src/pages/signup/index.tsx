import React, { useState } from 'react'
import Layout from '~/layout/HeaderFooterLayout'

import { useSignup } from '~/hooks/api/auth'

const Signin = () => {
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const { fetch, progress } = useSignup()

  const onSubmit = async () => {
    if (progress) return
    await fetch(username, password).catch((error) => {
      throw error
    })
  }

  return (
    <Layout>
      <div>
        <label>username</label>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          type="text"
        />
      </div>
      <div>
        <label>password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        />
      </div>
      <button type="button" onClick={onSubmit}>
        登録する
      </button>
    </Layout>
  )
}

export default Signin
