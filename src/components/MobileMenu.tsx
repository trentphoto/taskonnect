import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

import links from '@/lib/links';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='relative'>
      {/* toggle button */}

      <div
        onClick={toggleMenu}
        className='inline-flex cursor-pointer items-center overflow-hidden rounded-xl border-2 border-white/25 p-5 text-gray-300 transition-colors duration-75 hover:bg-gray-800'
      >
        <span className='text-lg font-bold leading-none'>Menu</span>

        <div className='ml-3 h-full text-gray-300'>
          <span className='sr-only'>Menu</span>
          <FaBars className='text-lg' />
        </div>
      </div>

      {/* dropdown */}

      {isOpen ? (
        <div
          className='absolute right-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-900'
          role='menu'
        >
          <div className='p-2'>
            {links.map((link, key) => (
              <Link
                key={key}
                href={link.href}
                className='block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300'
                role='menuitem'
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className='p-2'>
            <Link
              href='/signin'
              className='block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300'
              role='menuitem'
            >
              Sign In
            </Link>

            <Link
              href='/signup'
              className='bg-splash mt-2 block rounded-lg px-4 py-2 text-sm text-gray-950 opacity-80 transition-opacity hover:opacity-100'
              role='menuitem'
            >
              Sign Up
            </Link>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
