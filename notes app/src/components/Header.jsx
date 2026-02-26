import React from 'react'
import { Search, Moon, Sun, StickyNote } from 'lucide-react'

const Header = ({ darkMode, setDarkMode, searchTerm, setSearchTerm }) => {
    return (
        <header className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 animate-fade-in">
            <div className="flex items-center gap-3">
                <StickyNote className="w-10 h-10 text-accent drop-shadow-lg transition-colors duration-500" />
                <div className="flex flex-col">
                    <h1 className="text-4xl font-extrabold font-outfit bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-heading)] to-blue-600 dark:to-blue-400 transition-all duration-500">
                        BrainBoard
                    </h1>
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent/80 ml-1">
                        Your Personal Idea Hub
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="relative flex-grow md:w-80 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-maroon-500 transition-colors" />
                    <input
                        type="text"
                        placeholder="Search your thoughts..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 
                       rounded-full py-3 pl-12 pr-4 text-slate-800 dark:text-white dark:placeholder-white focus:outline-none focus:ring-2 
                       focus:ring-maroon-500/30 transition-all shadow-sm focus:shadow-md"
                    />
                </div>

                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-3 rounded-xl glass hover:bg-white/50 dark:hover:bg-white/10 transition-all 
                     hover:scale-110 active:scale-95 shadow-sm"
                    title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                >
                    {darkMode ? (
                        <Sun className="w-6 h-6 text-accent animate-pulse" />
                    ) : (
                        <Moon className="w-6 h-6 text-maroon-700" />
                    )}
                </button>
            </div>
        </header>
    )
}

export default Header
