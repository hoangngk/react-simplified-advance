import './App.css'
import { useEffect, useRef, useState } from 'react'
import useMutationLogger from './useMutationLogger.tsx'

function App() {
  useMutationLogger()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [showTooltip, setShowTooltip] = useState(false)
  const [top, setTop] = useState(0)

  useEffect(() => {
    if (!buttonRef.current || !showTooltip) setTop(0)
    else if (buttonRef.current) {
      setTop(buttonRef.current.getBoundingClientRect().bottom + 25)
    }
  }, [showTooltip])

  const now = performance.now()
  while (now > performance.now() - 1000) {
    // Do nothing
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setShowTooltip(!showTooltip)}
        ref={buttonRef}
      >
        Show tooltip
      </button>
      {showTooltip && (
        <div
          className="tooltip"
          style={{
            border: '1px solid grey',
            padding: '10px',
            position: 'absolute',
            top: `${top}px`,
          }}
        >
          <span className="tooltiptext">Tooltip text</span>
        </div>
      )}
    </>
  )
}

export default App
