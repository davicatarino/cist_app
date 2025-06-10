import { useState } from 'react'

export default function Chat() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  function sendMessage(e) {
    e.preventDefault()
    setMessages([...messages, { from: 'user', text: input }, { from: 'bot', text: 'Olá, em breve responderemos.' }])
    setInput('')
  }

  return (
    <div>
      <h2>Suporte com IA</h2>
      <div>
        {messages.map((m, i) => (
          <div key={i}><strong>{m.from}:</strong> {m.text}</div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input value={input} onChange={e => setInput(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
