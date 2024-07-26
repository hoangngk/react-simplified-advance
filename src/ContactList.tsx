interface ContactListProps {
  contacts: Contact[]
  onSelect: (email: string) => void
}

interface Contact {
  id: number
  name: string
  email: string
}

const ContactList = ({ contacts, onSelect }: ContactListProps) => {
  return (
    <div>
      {contacts.map((contact) => (
        <button
          type="button"
          key={contact.id}
          style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}
          onClick={() => onSelect(contact.email)}
        >
          {contact.name}
        </button>
      ))}
    </div>
  )
}

export default ContactList
