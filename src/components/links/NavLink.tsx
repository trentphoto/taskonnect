import Link from 'next/link';

import clsxm from '@/lib/clsxm';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <>
      <Link
        href={href}
        className={clsxm(
          'relative inline-block shrink-0 px-3 py-2',
          "after:content-[''], after:absolute, after:bottom-0 after:left-0 after:block after:h-0.5 after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white after:transition-transform after:duration-150 after:ease-out after:hover:scale-x-100"
        )}
      >
        {children}
      </Link>
    </>
  );
}
