import './App.css'
import ContactList from './ContactList.tsx'
import Chat from './Chat.tsx'
import { useState } from 'react'

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
]

function App() {
  const [to, setTo] = useState(contacts[0].email)

  return (
    <>
      <ContactList contacts={contacts} onSelect={setTo} />
      <Chat to={to} key={to} />
    </>
  )
}

export default App
