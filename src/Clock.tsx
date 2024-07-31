import { useEffect, useState } from 'react'

const useTime = () => {
  const [value, setValue] = useState(() => new Date())

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000)

    return () => clearInterval(interval)
  }, [])

  return value
}

const Clock = () => {
  useEffect(() => {
    console.log('Clock component is mounted')
    return () => {
      console.log('Clock component is unmounted')
    }
  })
  // 🔴 Bad: Always returns different result every time it is called
  // const time = new Date().toLocaleTimeString()
  const time = useTime().toLocaleTimeString()

  return (
    <>
      <div>Fixed</div>
      <div>{time}</div>
    </>
  )
}

export default Clock
