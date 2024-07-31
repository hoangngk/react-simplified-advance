import './App.css'
import Clock from './Clock.tsx'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    console.log('App component is mounted')
    return () => {
      console.log('App component is unmounted')
    }
  })

  return (
    <>
      <Clock />
    </>
  )
}

export default App
