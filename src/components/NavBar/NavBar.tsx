import Link from 'next/link';
import React from 'react';
import ThemeToggler from '../ThemeToggler/ThemeToggler';

export default function NavBar() {
  return (
    <nav className="flex flex-wrap justify-center gap-6 items-center min-h-10 py-2.5 bg-background">
      <Link href={'/'} className="hover:text-amber-300">
        Home
      </Link>
      <Link href={'/about'} className="hover:text-amber-300">
        About
      </Link>
      <Link href={'/settings'} className="hover:text-amber-300">
        Settings
      </Link>
      <Link href={'/sports'} className="hover:text-amber-300">
        Sports
      </Link>
      <Link href={'/users/client-version'} className="hover:text-amber-300">
        User client
      </Link>
      <Link href={'/users/server-version'} className="hover:text-amber-300">
        User server
      </Link>
      <Link href={'/products/client-version'} className="hover:text-amber-300">
        Products client
      </Link>
      <Link href={'/products/server-version'} className="hover:text-amber-300">
        Produsts server
      </Link>
      <Link href={'/categories/create'} className="hover:text-amber-300">
        Create category
      </Link>
      <Link href={'/categories'} className="hover:text-amber-300">
        Categories
      </Link>
      <ThemeToggler />
    </nav>
  );
}
