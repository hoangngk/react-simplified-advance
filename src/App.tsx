import './App.css'
import { useState } from 'react'
import { Counter } from './Counter.tsx'

function App() {
  const [name, setName] = useState('')
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Counter initialValue={0} />
    </>
  )
}

export default App
