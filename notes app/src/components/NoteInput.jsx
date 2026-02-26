import React, { useState } from 'react'
import { Plus } from 'lucide-react'

const NoteInput = ({ onAdd }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [isExpanded, setIsExpanded] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title.trim() && !content.trim()) return
        onAdd(title, content)
        setTitle('')
        setContent('')
        setIsExpanded(false)
    }

    return (
        <div className="max-w-2xl mx-auto w-full animate-fade-in delay-100">
            <form
                onSubmit={handleSubmit}
                className="glass-card rounded-2xl p-4 transition-all duration-500 overflow-hidden"
            >
                {isExpanded && (
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full bg-transparent text-xl font-bold font-outfit text-slate-800 dark:text-white 
                       mb-3 focus:outline-none placeholder:text-slate-400 dark:placeholder:text-white/50"
                    />
                )}

                <textarea
                    placeholder="Take a note..."
                    value={content}
                    onClick={() => setIsExpanded(true)}
                    onChange={(e) => setContent(e.target.value)}
                    rows={isExpanded ? 4 : 1}
                    className="w-full bg-transparent text-lg text-slate-600 dark:text-white resize-none 
                     focus:outline-none placeholder:text-slate-400 dark:placeholder:text-white/50 transition-all duration-300"
                />

                {isExpanded && (
                    <div className="flex justify-end mt-4 pt-4 border-t border-slate-100 dark:border-white/5">
                        <button
                            type="submit"
                            className="btn-primary flex items-center gap-2"
                        >
                            <Plus className="w-5 h-5" />
                            <span>Save Note</span>
                        </button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default NoteInput
