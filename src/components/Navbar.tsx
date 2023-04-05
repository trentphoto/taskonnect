import Link from 'next/link';

import MenuLinks from '@/components/MenuLinks';
import MobileMenu from '@/components/MobileMenu';

import ButtonLink from './links/ButtonLink';
import NavLink from './links/NavLink';

import LogoWhite from '~/svg/logo-white.svg';

export default function Navbar() {
  return (
    <nav className='relative z-50 w-full p-4 pb-12 pt-8'>
      <div className='container flex items-center justify-between'>
        {/* logo  */}
        <div className='w-24'>
          <Link href='/'>
            <LogoWhite width={200} height={40} />
          </Link>
        </div>

        <div className='hidden lg:flex'>
          <MenuLinks />

          <div className='flex items-center gap-2'>
            <NavLink className='hidden sm:inline-block' href='/signin'>
              Sign In
            </NavLink>
            <ButtonLink href='/signup'>Sign Up</ButtonLink>
          </div>
        </div>

        <div className='lg:hidden'>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
