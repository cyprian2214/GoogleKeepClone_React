import React, { useState } from 'react'

export default function Modal({ note, onClose, onSave }) {
  const [title, setTitle] = useState(note.title)
  const [content, setContent] = useState(note.content)

  function handleSave(e) {
    e.preventDefault()
    onSave({ title, content })
  }

  return (
    <div className="modal active">
      <div className="modal-content">
        <form className="form" onSubmit={handleSave}>
          <input
            type="text"
            className="note-title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="note-text"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
          <div className="form-actions">
            <button className="close-btn" type="submit">Close</button>
          </div>
        </form>
      </div>
    </div>
  )
}
