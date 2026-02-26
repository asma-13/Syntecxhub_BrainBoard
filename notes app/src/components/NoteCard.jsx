import React, { useState } from 'react'
import { Trash2, Edit3, X, Check } from 'lucide-react'

const NoteCard = ({ note, onDelete, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editTitle, setEditTitle] = useState(note.title)
    const [editContent, setEditContent] = useState(note.content)

    const handleUpdate = () => {
        onUpdate(note.id, editTitle, editContent)
        setIsEditing(false)
    }

    return (
        <div className="group glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 
                    hover:shadow-2xl hover:shadow-maroon-900/10 dark:hover:shadow-black/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-0 bg-blue-500 group-hover:h-full transition-all duration-500" />

            {isEditing ? (
                <div className="space-y-4">
                    <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="w-full bg-white/50 dark:bg-white/5 rounded-lg px-3 py-2 text-lg font-bold font-outfit 
                       focus:ring-2 focus:ring-maroon-500/30 outline-none transition-all dark:text-white"
                    />
                    <textarea
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                        rows={4}
                        className="w-full bg-white/50 dark:bg-white/5 rounded-lg px-3 py-2 text-slate-600 dark:text-white 
                       focus:ring-2 focus:ring-maroon-500/30 outline-none resize-none transition-all"
                    />
                    <div className="flex justify-end gap-2">
                        <button onClick={() => setIsEditing(false)} className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                            <X size={20} />
                        </button>
                        <button onClick={handleUpdate} className="p-2 text-maroon-600 hover:text-maroon-700 transition-colors">
                            <Check size={20} />
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold font-outfit text-heading transition-colors duration-500">
                            {note.title || 'Untitled'}
                        </h3>
                        {/* ... buttons remains same ... */}
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                            <button
                                onClick={() => setIsEditing(true)}
                                className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 
                           hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all"
                            >
                                <Edit3 size={18} />
                            </button>
                            <button
                                onClick={() => onDelete(note.id)}
                                className="p-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 
                           hover:bg-red-100 dark:hover:bg-red-900/40 transition-all"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                    <p className="text-body line-clamp-6 leading-relaxed mb-6 transition-colors duration-500">
                        {note.content}
                    </p>
                    <div className="mt-auto pt-4 border-t border-slate-100 dark:border-white/5 flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-accent dark:text-white transition-colors duration-500 block">
                        <span>{new Date(note.updatedAt).toLocaleDateString()}</span>
                    </div>
                </>
            )}
        </div>
    )
}

export default NoteCard
