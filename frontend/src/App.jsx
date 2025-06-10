import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Schedule from './pages/Schedule.jsx'
import UploadDoc from './pages/UploadDoc.jsx'
import Chat from './pages/Chat.jsx'

export default function App() {
  const [user, setUser] = useState(null)

  return (
    <div>
      <nav>
        <Link to="/">Início</Link> |
        {user ? (
          <>
            <Link to="/schedule">Agendar</Link> |
            <Link to="/upload">Documentos</Link> |
            <Link to="/chat">Suporte</Link> |
            <button onClick={() => setUser(null)}>Sair</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link> |
            <Link to="/register">Cadastro</Link>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={setUser} />} />
        <Route path="/register" element={<Register onRegister={setUser} />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/upload" element={<UploadDoc />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  )
}
