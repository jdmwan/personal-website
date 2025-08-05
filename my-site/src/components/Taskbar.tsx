'use client';

import Link from 'next/link';

export default function Taskbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
      <nav className="max-w-4xl mx-auto px-6 py-3 flex justify-between items-center">
        <span className="font-bold">Jeffrey Wan</span>
        <ul className="flex gap-4 text-sm">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/resume">Resume</Link></li>
          <li><Link href="/projects">Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
}
