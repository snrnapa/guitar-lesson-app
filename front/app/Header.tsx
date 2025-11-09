"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const linkClasses = (path: string) => {
    const base = "px-4 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200";
    return `${base} ${pathname === path ? 'font-bold text-white' : 'text-gray-400'}`;
  };

  return (
    <header className="bg-black border-b border-gray-700">
      <div className="container mx-auto flex items-center justify-center gap-8 p-4">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-bold">
          🎸
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4">
          <Link href="/" className={linkClasses('/')}>
            Home
          </Link>
          <Link href="/play" className={linkClasses('/play')}>
            Play
          </Link>
        </nav>
      </div>
    </header>
  );
}
