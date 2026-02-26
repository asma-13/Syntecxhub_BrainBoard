import React from 'react'
import NoteCard from './NoteCard'
import { Ghost } from 'lucide-react'

const NoteGrid = ({ notes, onDelete, onUpdate }) => {
    if (notes.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 opacity-30 animate-fade-in">
                <Ghost className="w-16 h-16 mb-4 text-maroon-500" />
                <p className="text-xl font-medium text-slate-500 dark:text-white">
                    No notes found...
                </p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {notes.map(note => (
                <NoteCard
                    key={note.id}
                    note={note}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />
            ))}
        </div>
    )
}

export default NoteGrid
