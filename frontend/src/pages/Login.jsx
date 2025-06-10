import { useState } from 'react'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    onLogin({ email })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        E-mail
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        Senha
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button type="submit">Entrar</button>
    </form>
  )
}
