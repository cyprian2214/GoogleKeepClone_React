import React, { useState, useRef, useEffect } from 'react'
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import GroupsIcon from '@mui/icons-material/Groups';
import ImageIcon from '@mui/icons-material/Image';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function NoteInput({ onAdd }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [expanded, setExpanded] = useState(false)
  const formRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim() && !content.trim()) return
    onAdd({ title, content })
    setTitle('')
    setContent('')
    setExpanded(false)
  }

  // Close form when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setExpanded(false)
      }
    }

    if (expanded) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [expanded])

  return (
    <div className="form-container">
      <form
        ref={formRef}
        className={`form ${expanded ? 'expanded' : 'collapsed'}`}
        onSubmit={handleSubmit}
      >
        {/* Show title only when expanded */}
        {expanded && (
          <input
            type="text"
            className="note-title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        )}

        {/* Input + icons row */}
        <div className="note-input-row">
          <input
            type="text"
            className="note-text"
            placeholder="Take a note..."
            value={content}
            onFocus={() => setExpanded(true)}
            onChange={(e) => setContent(e.target.value)}
          />

          {/* Icons — visible only when not expanded */}
          {!expanded && (
            <div className="note-icons">
              <NotificationsNoneIcon className="icon hover" titleAccess="Remind me" />
              <ImageIcon className="icon hover" titleAccess="Add image" />
              <ArchiveIcon className="icon hover" titleAccess="Archive" />
            </div>
          )}
        </div>

        {/* Form actions when expanded */}
        {expanded && (
          <div className="form-actions">
            <div className="card-actions">
              <FormatColorTextIcon className="icon hover" />
              <ColorLensIcon className="icon hover" />
              <NotificationsNoneIcon className="icon hover" />
              <GroupsIcon className="icon hover" />
              <ImageIcon className="icon hover" />
              <ArchiveIcon className="icon hover" />
              <MoreVertIcon className="icon hover" />
            </div>
            <button
  className="close-btn"
  type="button"
  onClick={() => {
    if (title.trim() || content.trim()) {
      onAdd({ title, content });
      setTitle('');
      setContent('');
    }
    setExpanded(false);
  }}
>
  Close
</button>
          </div>
        )}
      </form>
    </div>
  )
}
