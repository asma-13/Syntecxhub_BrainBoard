import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import NoteInput from './components/NoteInput'
import NoteGrid from './components/NoteGrid'
import Footer from './components/Footer'

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('brainboard_react_data')
    return saved ? JSON.parse(saved) : []
  })
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('brainboard_dark_mode')
    return saved !== null ? saved === 'true' : true
  })
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    localStorage.setItem('brainboard_react_data', JSON.stringify(notes))
  }, [notes])

  useEffect(() => {
    localStorage.setItem('brainboard_dark_mode', darkMode)
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const addNote = (title, content) => {
    const newNote = {
      id: Date.now().toString(),
      title,
      content,
      updatedAt: Date.now(),
    }
    setNotes([newNote, ...notes])
  }

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  const updateNote = (id, title, content) => {
    setNotes(notes.map(note =>
      note.id === id ? { ...note, title, content, updatedAt: Date.now() } : note
    ))
  }

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen transition-colors duration-700">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 flex flex-col min-h-screen">
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <main className="flex-grow space-y-12">
          <NoteInput onAdd={addNote} />

          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-outfit text-slate-800 dark:text-white px-2">
              {searchTerm ? 'Search Results' : 'Your Thoughts'}
            </h2>
            <NoteGrid
              notes={filteredNotes}
              onDelete={deleteNote}
              onUpdate={updateNote}
            />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
