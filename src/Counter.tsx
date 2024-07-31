import { memo, useState } from 'react'

type CounterProps = {
  initialValue: number
}

const Component = ({ initialValue }: CounterProps) => {
  const [value, setValue] = useState(initialValue)

  return (
    <div>
      <button onClick={() => setValue((prev) => prev + 1)}>+</button>
      <span>{value}</span>
      <button onClick={() => setValue((prev) => prev - 1)}>-</button>
    </div>
  )
}

export const Counter = memo(
  Component,
  (pre, newValue) => pre.initialValue === newValue.initialValue,
)
