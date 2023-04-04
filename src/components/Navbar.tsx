import Link from 'next/link';

import MenuLinks from '@/components/MenuLinks';

import ButtonLink from './links/ButtonLink';
import NavLink from './links/NavLink';

import LogoWhite from '~/svg/logo-white.svg';

export default function Navbar() {
  return (
    <nav className='w-full p-4 pb-20 pt-8'>
      <div className='container flex justify-between'>
        {/* logo  */}
        <div className='w-24'>
          <Link href='/'>
            <LogoWhite width={200} height={40} />
          </Link>
        </div>

        <MenuLinks />

        <div className='flex items-center gap-2'>
          <NavLink href='/signin'>Sign In</NavLink>
          <ButtonLink href='/signup'>Sign Up</ButtonLink>
        </div>
      </div>
    </nav>
  );
}
