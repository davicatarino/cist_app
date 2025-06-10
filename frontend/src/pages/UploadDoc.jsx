import { useState } from 'react'

export default function UploadDoc() {
  const [file, setFile] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    if (file) {
      alert(`Enviado: ${file.name}`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enviar Documentos</h2>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button type="submit">Enviar</button>
    </form>
  )
}
