import MenuLinks from '@/components/MenuLinks';

import LogoWhite from '~/svg/logo-white.svg';

export default function Footer() {
  return (
    <footer className='w-full p-20'>
      <div className='container flex flex-col items-center justify-between gap-8 sm:flex-row'>
        {/* logo  */}
        <div className='w-50'>
          <LogoWhite width={200} height={40} />
        </div>

        <MenuLinks />

        <div className='text-xs opacity-50'>
          <span>
            © Copyright 2023. <br />
            All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
