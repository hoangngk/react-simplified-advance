import { useEffect } from 'react'

const UseMutationLogger = () => {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      console.log('DOM change')
    })

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return <div></div>
}

export default UseMutationLogger
