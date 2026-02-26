'use client';

import Link from 'next/link';

export default function Taskbar() {
  return (
    <nav className="max-w-4xl mx-auto px-6 py-3 flex justify-between items-center">
  <span className="font-bold">Jeffrey Wan</span>

  <div className="flex items-center gap-6 text-sm">
    <ul className="flex gap-4">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/resume">Resume</Link></li>
    </ul>

    <div className="flex gap-3 text-zinc-500 dark:text-zinc-400">
      <a href="https://github.com/yourusername" target="_blank" className="hover:text-black dark:hover:text-white">
        GitHub
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-black dark:hover:text-white">
        LinkedIn
      </a>
      <a href="mailto:your@email.com" className="hover:text-black dark:hover:text-white">
        Email
      </a>
    </div>
  </div>
</nav>
  );
}
