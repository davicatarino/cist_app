import { useState } from 'react'

const specialties = ['Cardiologia', 'Dermatologia', 'Ortopedia']
const doctors = {
  Cardiologia: ['Dr. Silva', 'Dra. Souza'],
  Dermatologia: ['Dr. Gomes'],
  Ortopedia: ['Dr. Lima']
}
const times = ['09:00', '10:00', '11:00']

export default function Schedule() {
  const [specialty, setSpecialty] = useState('Cardiologia')
  const [doctor, setDoctor] = useState('Dr. Silva')
  const [time, setTime] = useState('09:00')

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Consulta marcada com ${doctor} às ${time}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agendar Consulta</h2>
      <label>
        Especialidade
        <select value={specialty} onChange={e => {
          setSpecialty(e.target.value)
          setDoctor(doctors[e.target.value][0])
        }}>
          {specialties.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </label>
      <label>
        Profissional
        <select value={doctor} onChange={e => setDoctor(e.target.value)}>
          {doctors[specialty].map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </label>
      <label>
        Horário
        <select value={time} onChange={e => setTime(e.target.value)}>
          {times.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </label>
      <button type="submit">Agendar</button>
    </form>
  )
}
