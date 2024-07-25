import { useState } from 'react'
import { createPortal } from 'react-dom'
import Modal from './Modal.tsx'

const Portal = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  return (
    <div>
      <button onClick={openModal}>Show Modal</button>
      {showModal &&
        createPortal(
          <Modal onClose={() => setShowModal(false)} />,
          document.body,
        )}
    </div>
  )
}

export default Portal
