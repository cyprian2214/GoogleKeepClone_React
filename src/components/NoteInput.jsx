import React, { useState } from 'react'

export default function NoteInput({ onAdd }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [expanded, setExpanded] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim() && !content.trim()) return
    onAdd({ title, content })
    setTitle('')
    setContent('')
    setExpanded(false)
  }

  return (
    <div className="form-container">
      <form className={`form ${expanded ? 'active-form' : 'inactive-form'}`} onSubmit={handleSubmit}>
        {expanded && (
          <input
            type="text"
            className="note-title"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        )}
        <input
          type="text"
          className="note-text"
          placeholder="Take a note..."
          value={content}
          onFocus={() => setExpanded(true)}
          onChange={e => setContent(e.target.value)}
        />
        {expanded && (
          <div className="form-actions">
            <button className="close-btn" type="submit">Close</button>
          </div>
        )}
      </form>
    </div>
  )
}
