import React from 'react'

const Footer = () => {
    return (
        <footer className="mt-auto pt-20 pb-10 flex flex-col items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent mb-10" />

            <div className="glass-card px-8 py-4 rounded-full border border-white/20 dark:border-white/5 shadow-2xl">
                <p className="text-slate-500 dark:text-white font-medium tracking-wide flex items-center gap-2">
                    <span>Powered by</span>
                    <a
                        href="https://www.linkedin.com/in/iasmachanna/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold font-outfit text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300 animate-pulse hover:brightness-125 transition-all"
                    >
                        Asma Channa
                    </a>
                </p>
            </div>

            <p className="mt-4 text-xs font-semibold text-slate-400 dark:text-white uppercase tracking-widest opacity-50">
                © {new Date().getFullYear()} BrainBoard • Luxury Experience
            </p>
        </footer>
    )
}

export default Footer
