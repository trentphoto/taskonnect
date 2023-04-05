import links from '@/lib/links';

import NavLink from '@/components/links/NavLink';

export default function MenuLinks() {
  return (
    <div className='hidden items-center gap-0 lg:flex'>
      {links.map((link, key) => (
        <NavLink key={key} href={link.href}>
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}
