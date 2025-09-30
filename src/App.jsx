import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import NoteInput from './components/NoteInput'
import NoteCard from './components/NoteCard'
import Modal from './components/Modal'

export default function App() {
  const [notes, setNotes] = useState(() => {
    try {
      const raw = localStorage.getItem('notes')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  const [activeNote, setActiveNote] = useState(null)

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  function addNote(note) {
    setNotes(prev => [{ id: Date.now(), ...note }, ...prev])
  }

  function deleteNote(id) {
    setNotes(prev => prev.filter(n => n.id !== id))
  }

  function updateNote(id, updated) {
    setNotes(prev =>
      prev.map(n => (n.id === id ? { ...n, ...updated } : n))
    )
  }

  return (
    <div className="app">
      <Navbar />
      <main>
        <Sidebar />
        <div className="content">
          <NoteInput onAdd={addNote} />
          <div className="notes-grid">
            {notes.length === 0 ? (
              <p className="empty">No notes yet. Add one!</p>
            ) : (
              notes.map(note => (
                <NoteCard
                  key={note.id}
                  note={note}
                  onDelete={() => deleteNote(note.id)}
                  onEdit={() => setActiveNote(note)}
                />
              ))
            )}
          </div>
        </div>
      </main>

      {activeNote && (
        <Modal
          note={activeNote}
          onClose={() => setActiveNote(null)}
          onSave={updated => {
            updateNote(activeNote.id, updated)
            setActiveNote(null)
          }}
        />
      )}
    </div>
  )
}
