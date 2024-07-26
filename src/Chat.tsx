import { useState } from 'react'

interface ChatProps {
  to: string
}

const Chat = ({ to }: ChatProps) => {
  const [message, setMessage] = useState('')

  return (
    <div>
      <textarea
        name="content"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Message to ${to}`}
        cols={30}
        rows={10}
      ></textarea>
      <button type="button">Send to {to}</button>
    </div>
  )
}

export default Chat
